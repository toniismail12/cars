"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export type CatalogCar = {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  location: string;
  images: string[];
};

export default function CatalogGrid({ cars }: { cars: CatalogCar[] }) {
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const totalPages = Math.max(1, Math.ceil(cars.length / pageSize));
  const pageCars = useMemo(() => {
    const start = (page - 1) * pageSize;
    return cars.slice(start, start + pageSize);
  }, [cars, page]);

  return (
    <>
      <div className="grid five">
        {pageCars.map((car, index) => (
          <Link
            key={`${car.id}-${index}`}
            className="card fade-in"
            href={`/cars/${car.id}`}
            style={{ padding: 12 }}
          >
            <Image
              src={car.images[0]}
              alt={car.brand}
              width={480}
              height={320}
              style={{ width: "100%", height: 140, borderRadius: 10, objectFit: "cover" }}
            />
            <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 4 }}>
              <strong style={{ fontSize: "0.95rem" }}>{car.brand} {car.model}</strong>
              <span className="label" style={{ fontSize: "0.8rem" }}>{car.year} • {car.mileage.toLocaleString("id-ID")} km</span>
              <span style={{ fontSize: "0.9rem" }}>Rp {car.price.toLocaleString("id-ID")}</span>
              <span className="label" style={{ fontSize: "0.8rem" }}>{car.location}</span>
            </div>
          </Link>
        ))}
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
    </>
  );
}
