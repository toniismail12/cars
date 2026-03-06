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
  location: string;
  images: string[];
};

export default function CarsPage() {
  const [cars, setCars] = useState<Car[]>([]);
  const [search, setSearch] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [yearMin, setYearMin] = useState("");
  const [yearMax, setYearMax] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize] = useState(100);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  const loadCars = async () => {
    setLoading(true);
    const params = new URLSearchParams({
      page: String(page),
      pageSize: String(pageSize),
      search,
      priceMin,
      priceMax,
      yearMin,
      yearMax
    });
    const res = await fetch(`/api/public/cars?${params.toString()}`);
    const data = await res.json();
    const items: Car[] = data.items || [];
    const demoPool = items.length ? items : [];
    const demoBrands = [
      { brand: "Toyota", model: "Avanza" },
      { brand: "Honda", model: "BR-V" },
      { brand: "Mitsubishi", model: "Xpander" },
      { brand: "Suzuki", model: "Ertiga" },
      { brand: "Daihatsu", model: "Terios" },
      { brand: "Nissan", model: "Livina" },
      { brand: "Wuling", model: "Almaz" },
      { brand: "Kia", model: "Seltos" },
      { brand: "Hyundai", model: "Creta" },
      { brand: "Mazda", model: "CX-5" }
    ];
    const demoImages = [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549921296-3cce3b66f52f?auto=format&fit=crop&w=1200&q=80"
    ];
    const demoLocations = ["Jakarta", "Bandung", "Surabaya", "Semarang", "Bali"];

    const simulated = Array.from({ length: 100 }, (_, idx) => {
      const seed = demoPool[idx % Math.max(demoPool.length, 1)];
      const pick = demoBrands[idx % demoBrands.length];
      const image = demoImages[idx % demoImages.length];
      const year = 2017 + (idx % 8);
      const price = 150000000 + (idx % 20) * 7000000;
      const mileage = 20000 + (idx % 40) * 1200;
      return {
        id: seed?.id ? `${seed.id}-demo-${idx}` : `demo-${idx}`,
        brand: pick.brand,
        model: pick.model,
        year,
        price,
        mileage,
        location: demoLocations[idx % demoLocations.length],
        images: [image]
      };
    });

    setCars(simulated);
    setTotal(simulated.length);
    setLoading(false);
  };

  useEffect(() => {
    loadCars();
  }, [page, search, priceMin, priceMax, yearMin, yearMax]);

  return (
    <main>
      <section className="container">
        <div className="card">
          <div className="grid two">
            <div>
              <span className="badge">List Mobil</span>
              <h1 style={{ margin: "10px 0" }}>Temukan Mobil Pilihan</h1>
              <p className="label">Cari berdasarkan merk, harga, dan tahun.</p>
            </div>
            <div className="grid" style={{ gap: 12 }}>
              <div>
                <label className="label">Search Merk</label>
                <input
                  className="input"
                  placeholder="Toyota, Honda"
                  value={search}
                  onChange={(e) => {
                    setPage(1);
                    setSearch(e.target.value);
                  }}
                />
              </div>
              <div className="grid two">
                <div>
                  <label className="label">Harga Min</label>
                  <input className="input" value={priceMin} onChange={(e) => setPriceMin(e.target.value)} />
                </div>
                <div>
                  <label className="label">Harga Max</label>
                  <input className="input" value={priceMax} onChange={(e) => setPriceMax(e.target.value)} />
                </div>
              </div>
              <div className="grid two">
                <div>
                  <label className="label">Tahun Min</label>
                  <input className="input" value={yearMin} onChange={(e) => setYearMin(e.target.value)} />
                </div>
                <div>
                  <label className="label">Tahun Max</label>
                  <input className="input" value={yearMax} onChange={(e) => setYearMax(e.target.value)} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 24 }}>
          {loading ? (
            <p>Loading data...</p>
          ) : (
            <div className="grid three">
              {cars.map((car) => (
                <Link key={car.id} className="card fade-in" href={`/cars/${car.id}`}>
                  <Image
                    src={car.images[0]}
                    alt={car.brand}
                    width={600}
                    height={420}
                    style={{ width: "100%", height: 180, borderRadius: 12, objectFit: "cover" }}
                  />
                  <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 6 }}>
                    <strong>{car.brand} {car.model}</strong>
                    <span className="label">{car.year} • {car.mileage.toLocaleString("id-ID")} km</span>
                    <span>Rp {car.price.toLocaleString("id-ID")}</span>
                    <span className="label">{car.location}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="pagination" style={{ marginTop: 24 }}>
          <button className="btn" disabled={page <= 1} onClick={() => setPage(page - 1)}>
            Prev
          </button>
          <span className="label">Page {page} / {totalPages}</span>
          <button className="btn" disabled={page >= totalPages} onClick={() => setPage(page + 1)}>
            Next
          </button>
        </div>
      </section>
    </main>
  );
}
