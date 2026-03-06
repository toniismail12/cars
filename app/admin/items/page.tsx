"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Toast from "@/components/Toast";

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

export default function AdminItemsPage() {
  const [cars, setCars] = useState<Car[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(6);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");
  const [toast, setToast] = useState("");
  const [loading, setLoading] = useState(false);

  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  const loadCars = async () => {
    setLoading(true);
    const params = new URLSearchParams({
      page: String(page),
      pageSize: String(pageSize),
      search,
      status: "all"
    });
    const res = await fetch(`/api/cars?${params.toString()}`);
    const data = await res.json();
    setCars(data.items || []);
    setTotal(data.total || 0);
    setLoading(false);
  };

  useEffect(() => {
    loadCars();
  }, [page, search]);

  const handleDelete = async (id: string) => {
    const ok = window.confirm("Yakin hapus mobil ini?");
    if (!ok) return;
    const res = await fetch(`/api/cars/${id}`, { method: "DELETE" });
    if (res.ok) {
      setToast("Mobil berhasil dihapus");
      loadCars();
    }
  };

  return (
    <main>
      <section className="container">
        <div className="toolbar">
          <div>
            <h2 style={{ margin: 0 }}>Items</h2>
            <p className="label">Kelola daftar mobil yang dijual.</p>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link className="btn primary" href="/admin/cars/create">
              Tambah Mobil
            </Link>
          </div>
        </div>

        <div className="card" style={{ marginBottom: 20 }}>
          <label className="label">Search Mobil</label>
          <input
            className="input"
            value={search}
            onChange={(e) => {
              setPage(1);
              setSearch(e.target.value);
            }}
            placeholder="Toyota, Honda"
          />
        </div>

        <div className="card">
          {loading ? (
            <p>Loading data...</p>
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th>Foto</th>
                  <th>Nama</th>
                  <th>Tahun</th>
                  <th>Harga</th>
                  <th>Status</th>
                  <th>Tanggal Input</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {cars.map((car) => (
                  <tr key={car.id}>
                    <td>
                      <img className="thumb" src={car.images[0]} alt={car.brand} />
                    </td>
                    <td>{car.brand} {car.model}</td>
                    <td>{car.year}</td>
                    <td>Rp {car.price.toLocaleString("id-ID")}</td>
                    <td>
                      <span className={`status ${car.status === "Tersedia" ? "available" : "sold"}`}>
                        {car.status}
                      </span>
                    </td>
                    <td>{new Date(car.createdAt).toLocaleDateString("id-ID")}</td>
                    <td>
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                        <Link className="btn" href={`/admin/cars/${car.id}/edit`}>
                          Edit
                        </Link>
                        <button className="btn danger" onClick={() => handleDelete(car.id)}>
                          Hapus
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          <div className="pagination" style={{ marginTop: 16 }}>
            <button className="btn" disabled={page <= 1} onClick={() => setPage(page - 1)}>
              Prev
            </button>
            <span className="label">
              Page {page} / {totalPages}
            </span>
            <button className="btn" disabled={page >= totalPages} onClick={() => setPage(page + 1)}>
              Next
            </button>
          </div>
        </div>
      </section>
      <Toast message={toast} onClose={() => setToast("")} />
    </main>
  );
}
