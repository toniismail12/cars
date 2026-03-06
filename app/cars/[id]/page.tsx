"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Car = {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  transmission: string;
  fuel: string;
  color: string;
  location: string;
  description: string;
  images: string[];
};

export default function CarDetailPage({ params }: { params: { id: string } }) {
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const load = async () => {
      const res = await fetch(`/api/public/cars/${params.id}`);
      const data = await res.json();
      if (res.ok) {
        setCar(data.item);
        setActiveIndex(0);
      }
      setLoading(false);
    };
    load();
  }, [params.id]);

  if (loading) {
    return (
      <main>
        <section className="container">
          <p>Loading data...</p>
        </section>
      </main>
    );
  }

  if (!car) {
    return (
      <main>
        <section className="container">
          <p>Mobil tidak ditemukan.</p>
        </section>
      </main>
    );
  }

  const fallbackImages = [
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80"
  ];
  const gallery = car.images.length >= 5
    ? car.images
    : Array.from({ length: 5 }, (_, idx) => car.images[idx] || fallbackImages[idx]);

  return (
    <main>
      <section className="container">
        <div className="card fade-in" style={{ padding: 12, marginBottom: 24 }}>
          <div style={{ position: "relative" }}>
            <Image
              src={gallery[activeIndex]}
              alt={`${car.brand} ${car.model}`}
              width={1200}
              height={680}
              style={{ width: "100%", height: 420, borderRadius: 12, objectFit: "cover" }}
              priority
            />
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none", borderRadius: 12, boxShadow: "inset 0 -80px 120px rgba(0,0,0,0.35)" }} />
            <div style={{ position: "absolute", left: 16, bottom: 16, color: "#fff" }}>
              <span className="badge" style={{ background: "rgba(0,0,0,0.4)", color: "#fff", borderColor: "transparent" }}>
                {car.brand} {car.model}
              </span>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12, gap: 12, flexWrap: "wrap" }}>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {gallery.map((img, idx) => (
                <button
                  key={img}
                  className="btn"
                  style={{ padding: 0, borderRadius: 10, border: idx === activeIndex ? "2px solid var(--red)" : "1px solid var(--line)" }}
                  onClick={() => setActiveIndex(idx)}
                >
                  <Image
                    src={img}
                    alt={`thumb-${idx}`}
                    width={120}
                    height={80}
                    style={{ width: 120, height: 80, borderRadius: 8, objectFit: "cover" }}
                  />
                </button>
              ))}
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button className="btn" onClick={() => setActiveIndex((prev) => (prev - 1 + gallery.length) % gallery.length)}>
                Prev
              </button>
              <button className="btn" onClick={() => setActiveIndex((prev) => (prev + 1) % gallery.length)}>
                Next
              </button>
            </div>
          </div>
        </div>
        <div className="toolbar">
          <div>
            <h2 style={{ margin: 0 }}>{car.brand} {car.model}</h2>
            <p className="label">Tahun {car.year} • {car.mileage.toLocaleString("id-ID")} km</p>
          </div>
          <Link className="btn" href="/cars">Kembali</Link>
        </div>

        <div className="grid two">
          <div className="card">
            <span className="badge">Harga</span>
            <div style={{ fontSize: "2rem", fontWeight: 700, marginTop: 8, color: "var(--red)" }}>
              Rp {car.price.toLocaleString("id-ID")}
            </div>
            <p className="label" style={{ marginTop: 6 }}>{car.location}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 16 }}>
              <button className="btn primary">Hubungi WhatsApp</button>
              <Link className="btn" href="/cars">Kembali ke daftar</Link>
            </div>
            <div className="card" style={{ marginTop: 16, background: "#fff3da" }}>
              <strong>Spesifikasi</strong>
              <div className="grid two" style={{ marginTop: 12 }}>
                {[
                  { label: "Merk", value: car.brand },
                  { label: "Tipe", value: car.model },
                  { label: "Tahun", value: car.year },
                  { label: "Kilometer", value: `${car.mileage.toLocaleString("id-ID")} km` },
                  { label: "Transmisi", value: car.transmission },
                  { label: "Bahan bakar", value: car.fuel },
                  { label: "Warna", value: car.color },
                  { label: "Lokasi", value: car.location }
                ].map((item) => (
                  <div key={item.label} className="card" style={{ padding: 14, background: "#ffffff" }}>
                    <span className="label">{item.label}</span>
                    <strong style={{ display: "block", marginTop: 6 }}>{item.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="card" style={{ marginTop: 20 }}>
          <strong>Deskripsi</strong>
          <p className="label" style={{ marginTop: 8 }}>{car.description || "Deskripsi belum tersedia."}</p>
        </div>
      </section>
    </main>
  );
}
