import crypto from "crypto";
import { cookies } from "next/headers";
import { promises as fs } from "fs";
import path from "path";

const COOKIE_NAME = "admin_session";
const SECRET = process.env.ADMIN_SECRET || "dev_secret_change_me";
const ADMIN_FILE = path.join(process.cwd(), "data", "admin.json");

export type AdminSession = {
  email: string;
  issuedAt: number;
};

function sign(data: string) {
  return crypto.createHmac("sha256", SECRET).update(data).digest("hex");
}

function encode(session: AdminSession) {
  const payload = Buffer.from(JSON.stringify(session)).toString("base64url");
  const signature = sign(payload);
  return `${payload}.${signature}`;
}

function decode(token: string): AdminSession | null {
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return null;
  const expected = sign(payload);
  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) {
    return null;
  }
  try {
    return JSON.parse(Buffer.from(payload, "base64url").toString("utf-8")) as AdminSession;
  } catch {
    return null;
  }
}

export async function validateCredentials(email: string, password: string) {
  const raw = await fs.readFile(ADMIN_FILE, "utf-8");
  const admin = JSON.parse(raw) as { email: string; password: string };
  return admin.email === email && admin.password === password;
}

export function setSession(email: string) {
  const token = encode({ email, issuedAt: Date.now() });
  cookies().set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secure: false
  });
}

export function clearSession() {
  cookies().set(COOKIE_NAME, "", { path: "/", maxAge: 0 });
}

export function getSession(): AdminSession | null {
  const token = cookies().get(COOKIE_NAME)?.value;
  if (!token) return null;
  return decode(token);
}

export function isAuthed() {
  return Boolean(getSession());
}
