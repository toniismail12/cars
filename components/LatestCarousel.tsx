"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export type LatestCar = {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  location: string;
  images: string[];
};

export default function LatestCarousel({ cars }: { cars: LatestCar[] }) {
  const fallbackSlides = useMemo(
    () => [
      {
        id: "hero-1",
        brand: "Mercedes-Benz",
        model: "GLC 300",
        year: 2023,
        price: 980000000,
        mileage: 12000,
        location: "Jakarta",
        images: [
          "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80"
        ]
      },
      {
        id: "hero-2",
        brand: "BMW",
        model: "X5 M Sport",
        year: 2022,
        price: 1150000000,
        mileage: 18000,
        location: "Bandung",
        images: [
          "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1600&q=80"
        ]
      },
      {
        id: "hero-3",
        brand: "Audi",
        model: "Q7 Quattro",
        year: 2021,
        price: 1025000000,
        mileage: 21000,
        location: "Surabaya",
        images: [
          "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1600&q=80"
        ]
      }
    ],
    []
  );
  const slides = useMemo(() => {
    if (cars.length >= 3) return cars.slice(0, 3);
    if (cars.length > 0) return [...cars, ...fallbackSlides].slice(0, 3);
    return fallbackSlides;
  }, [cars, fallbackSlides]);
  const [index, setIndex] = useState(0);

  if (slides.length === 0) return null;

  const active = slides[index % slides.length];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="card fade-in" style={{ padding: 0, overflow: "hidden" }}>
      <div style={{ position: "relative" }}>
        <Image
          src={active.images[0]}
          alt={`${active.brand} ${active.model}`}
          width={1200}
          height={680}
          style={{ width: "100%", height: 320, objectFit: "cover" }}
          priority
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(120deg, rgba(0,0,0,0.45), transparent)" }} />
        <div style={{ position: "absolute", right: 24, top: 24 }}>
          <Link className="btn primary" href={`/cars/${active.id}`}>
            Lihat Detail
          </Link>
        </div>
        <div style={{ position: "absolute", left: 24, bottom: 24, color: "#fff" }}>
          <span className="badge" style={{ background: "rgba(255,255,255,0.2)", color: "#fff", borderColor: "transparent" }}>
            Mobil Terbaru
          </span>
          <h3 style={{ margin: "10px 0 6px" }}>{active.brand} {active.model}</h3>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <span>{active.year}</span>
            <span>{active.mileage.toLocaleString("id-ID")} km</span>
            <span>Rp {active.price.toLocaleString("id-ID")}</span>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 16px", background: "#fff3da" }}>
        <div style={{ display: "flex", gap: 6 }}>
          {slides.map((_, dotIndex) => (
            <button
              key={`dot-${dotIndex}`}
              className="btn"
              style={{ padding: "6px 10px", borderRadius: 999, background: dotIndex === index ? "var(--red)" : "#fff", color: dotIndex === index ? "#fff" : "inherit" }}
              onClick={() => setIndex(dotIndex)}
            >
              {dotIndex + 1}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button className="btn" onClick={() => setIndex((prev) => (prev - 1 + slides.length) % slides.length)}>
            Prev
          </button>
          <button className="btn" onClick={() => setIndex((prev) => (prev + 1) % slides.length)}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
