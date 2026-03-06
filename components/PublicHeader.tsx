"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PublicHeader() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  return (
    <header className="navbar" style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Link className="brand" href="/">
          RajaMobil
          <span className="badge">Premium Auto</span>
        </Link>
      </div>
      <nav
        style={{
          display: "flex",
          gap: 18,
          padding: "8px 16px",
          borderRadius: 999,
          background: "rgba(255, 255, 255, 0.7)",
          border: "1px solid var(--line)",
          justifySelf: "center"
        }}
      >
        <Link className="btn ghost" href="/" style={{ padding: "8px 14px" }}>
          Home
        </Link>
        <Link className="btn ghost" href="/cars" style={{ padding: "8px 14px" }}>
          Catalog
        </Link>
        <Link className="btn ghost" href="/#tentang" style={{ padding: "8px 14px" }}>
          Tentang
        </Link>
      </nav>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Link className="btn" href="/admin/login">
          Login
        </Link>
      </div>
    </header>
  );
}
