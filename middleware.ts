import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/admin/login")) {
    return NextResponse.next();
  }

  const isProtected = pathname.startsWith("/admin") || pathname.startsWith("/api/cars") || pathname.startsWith("/api/logout");
  if (!isProtected) return NextResponse.next();

  const token = req.cookies.get("admin_session")?.value;
  if (!token) {
    if (pathname.startsWith("/api")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const url = req.nextUrl.clone();
    url.pathname = "/admin/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/cars/:path*", "/api/logout"]
};
