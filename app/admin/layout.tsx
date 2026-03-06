"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    window.location.href = "/admin/login";
  };

  return (
    <div className="admin-shell">
      <aside
        className="admin-layout-desktop"
        style={{
          background: "#fff",
          borderRight: "1px solid var(--line)",
          padding: "24px 18px",
          position: "sticky",
          top: 0,
          height: "100vh"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <strong style={{ fontSize: "1.1rem" }}>Admin Panel</strong>
        </div>
        <nav style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 10 }}>
          <Link className="btn ghost" href="/admin/dashboard">
            Dashboard
          </Link>
          <Link className="btn ghost" href="/admin/items">
            Items
          </Link>
          <Link className="btn ghost" href="/admin/settings">
            Settings
          </Link>
        </nav>
      </aside>

      <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
        <header
          className="admin-topbar"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 20px",
            borderBottom: "1px solid var(--line)",
            background: "#fff",
            position: "sticky",
            top: 0,
            zIndex: 10
          }}
        >
          <button className="btn menu-toggle" onClick={() => setOpen((prev) => !prev)}>
            <span aria-hidden>☰</span>
            <span className="menu-label" style={{ marginLeft: 8 }}>
              Menu
            </span>
          </button>
          <span className="badge">Admin Only</span>
          <button className="btn" onClick={handleLogout}>
            Logout
          </button>
        </header>
        <div>{children}</div>
      </div>

      {/* Mobile drawer */}
      <div
        className="admin-layout-mobile"
        style={{
          position: "fixed",
          inset: 0,
          background: open ? "rgba(0,0,0,0.25)" : "transparent",
          pointerEvents: open ? "auto" : "none",
          transition: "background 0.2s ease",
          zIndex: 50
        }}
        onClick={() => setOpen(false)}
      />
      <aside
        className="admin-layout-mobile"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100%",
          width: 260,
          background: "#fff",
          borderRight: "1px solid var(--line)",
          padding: "24px 18px",
          transform: open ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.2s ease",
          zIndex: 60
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <strong style={{ fontSize: "1.1rem" }}>Admin Panel</strong>
          <button className="btn" onClick={() => setOpen(false)}>
            Close
          </button>
        </div>
        <nav style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 10 }}>
          <Link className="btn ghost" href="/admin/dashboard" onClick={() => setOpen(false)}>
            Dashboard
          </Link>
          <Link className="btn ghost" href="/admin/items" onClick={() => setOpen(false)}>
            Items
          </Link>
          <Link className="btn ghost" href="/admin/settings" onClick={() => setOpen(false)}>
            Settings
          </Link>
        </nav>
      </aside>

      <style jsx global>{`
        .admin-shell {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 260px 1fr;
        }
        @media (min-width: 900px) {
          .admin-layout-mobile {
            display: none;
          }
          .menu-label {
            display: none;
          }
          .menu-toggle {
            display: none;
          }
        }
        @media (max-width: 899px) {
          .admin-shell {
            grid-template-columns: 1fr;
          }
          .admin-layout-desktop {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
