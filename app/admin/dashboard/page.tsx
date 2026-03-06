"use client";

import { useEffect, useState } from "react";
type Car = {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  status: "Tersedia" | "Terjual";
  createdAt: string;
  images: string[];
};

export default function AdminDashboard() {
  const [cars, setCars] = useState<Car[]>([]);

  const totalItems = cars.length;
  const totalAvailable = cars.filter((car) => car.status === "Tersedia").length;
  const totalSold = cars.filter((car) => car.status === "Terjual").length;
  const maxStatus = Math.max(totalAvailable, totalSold, 1);

  const loadCars = async () => {
    const params = new URLSearchParams({
      page: "1",
      pageSize: "1000",
      search: "",
      status: "all"
    });
    const res = await fetch(`/api/cars?${params.toString()}`);
    const data = await res.json();
    setCars(data.items || []);
  };

  useEffect(() => {
    loadCars();
  }, []);

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    window.location.href = "/admin/login";
  };

  return (
    <main>
      <section className="container">
        <div className="toolbar">
          <div>
            <h2 style={{ margin: 0 }}>Dashboard Admin</h2>
            <p className="label">Kelola listing mobil dan status penjualan.</p>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button className="btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>

        <div className="grid two" style={{ marginBottom: 20 }}>
          <div className="card">
            <span className="badge">Total Item</span>
            <h3 style={{ margin: "10px 0" }}>{totalItems} Mobil</h3>
            <p className="label">Total unit yang tampil di dashboard saat ini.</p>
          </div>
          <div className="card">
            <span className="badge">Chart Penjualan</span>
            <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <strong>Tersedia</strong>
                  <span className="label">{totalAvailable}</span>
                </div>
                <div style={{ height: 10, background: "#f5ead7", borderRadius: 999, marginTop: 6 }}>
                  <div style={{ width: `${(totalAvailable / maxStatus) * 100}%`, height: "100%", background: "var(--gold)", borderRadius: 999 }} />
                </div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <strong>Terjual</strong>
                  <span className="label">{totalSold}</span>
                </div>
                <div style={{ height: 10, background: "#f5ead7", borderRadius: 999, marginTop: 6 }}>
                  <div style={{ width: `${(totalSold / maxStatus) * 100}%`, height: "100%", background: "var(--red)", borderRadius: 999 }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
