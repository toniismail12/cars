import type { ReactNode } from "react";

export const metadata = {
  title: "Daftar Mobil - RajaMobil",
  description: "Lihat daftar mobil terbaru dan terbaik."
};

export default function CarsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
