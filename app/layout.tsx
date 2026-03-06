import "./globals.css";
import type { ReactNode } from "react";
import PublicHeader from "@/components/PublicHeader";

export const metadata = {
  title: "RajaMobil",
  description: "Marketplace mobil terpercaya"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body>
        <PublicHeader />
        {children}
        <footer style={{ borderTop: "1px solid var(--line)", padding: "40px 24px", background: "#f7efe1" }}>
          <div className="container" style={{ display: "flex", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}>
            <div>
              <div className="brand">RajaMobil</div>
              <p className="label">Mobil bekas berkualitas dengan inspeksi profesional.</p>
            </div>
            <div>
              <strong>Kontak</strong>
              <p className="label">WhatsApp: +62 812-0000-1111</p>
              <p className="label">Email: hello@rajamobil.id</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
