import { NextResponse } from "next/server";
import { setSession, validateCredentials } from "@/lib/auth";

export async function POST(req: Request) {
  const { email, password } = (await req.json()) as {
    email?: string;
    password?: string;
  };

  if (!email || !password) {
    return NextResponse.json({ error: "Email dan password wajib diisi" }, { status: 400 });
  }

  const valid = await validateCredentials(email, password);
  if (!valid) {
    return NextResponse.json({ error: "Email atau password salah" }, { status: 401 });
  }

  setSession(email);
  return NextResponse.json({ success: true });
}
