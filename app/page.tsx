import Link from "next/link";
import Image from "next/image";
import { getCars } from "@/lib/db";
import CatalogGrid from "@/components/CatalogGrid";
import LatestCarousel from "@/components/LatestCarousel";

export const metadata = {
  title: "RajaMobil - Jual Beli Mobil",
  description: "Temukan mobil terbaik dengan inspeksi profesional."
};

export default async function HomePage() {
  const cars = await getCars();
  const availableCars = cars.filter((car) => car.status === "Tersedia");
  const latest = availableCars.slice(0, 6);
  const heroSlides = availableCars.slice(0, 3);
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
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1549921296-3cce3b66f52f?auto=format&fit=crop&w=800&q=80"
  ];
  const demoLocations = ["Jakarta", "Bandung", "Surabaya", "Semarang", "Bali"];
  const fallbackCatalog = Array.from({ length: 10 }, (_, index) => {
    const pick = demoBrands[index % demoBrands.length];
    return {
      id: `fallback-${index + 1}`,
      brand: pick.brand,
      model: `${pick.model}`,
      year: 2018 + (index % 7),
      price: 165000000 + index * 7000000,
      mileage: 25000 + index * 1400,
      location: demoLocations[index % demoLocations.length],
      images: [demoImages[index % demoImages.length]]
    };
  });
  const catalogCars =
    availableCars.length >= 10
      ? availableCars
      : [...availableCars, ...fallbackCatalog].slice(0, 10);

  return (
    <main>
      <section className="container">
        <div className="card fade-in" style={{ background: "linear-gradient(120deg, #fff5dd, #ffffff)", padding: 22 }}>
          <div className="grid two">
            <div>
              <span className="badge">Verified Inventory</span>
              <h1 style={{ margin: "12px 0" }}>Beli mobil premium dengan harga transparan.</h1>
              <p className="label" style={{ marginTop: 6 }}>
                RajaMobil menghadirkan pilihan mobil berkualitas dengan inspeksi profesional,
                histori servis transparan, dan harga yang fair. Semua unit siap test drive.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
                <Link className="btn primary" href="/cars">
                  Lihat Mobil
                </Link>
                <button className="btn">Hubungi WhatsApp</button>
              </div>
            </div>
            <div className="grid" style={{ gap: 10 }}>
              <div className="card" style={{ padding: 12, background: "#fff3da" }}>
                <strong>Inspeksi 150+ titik</strong>
                <p className="label">Setiap unit dicek menyeluruh sebelum tampil di catalog.</p>
              </div>
              <div className="card" style={{ padding: 12, background: "#fff3da" }}>
                <strong>Harga transparan</strong>
                <p className="label">Tidak ada biaya tersembunyi, semua detail jelas sejak awal.</p>
              </div>
              <div className="card" style={{ padding: 12, background: "#fff3da" }}>
                <strong>Siap test drive</strong>
                <p className="label">Booking mudah dan bisa test drive di lokasi kami.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ marginTop: 40 }}>
        <div className="toolbar">
          <div>
            <h2 style={{ margin: 0 }}>Mobil Terbaru</h2>
            <p className="label">Unit terbaru siap dibeli hari ini.</p>
          </div>
          <Link className="btn" href="/cars">
            Lihat Semua
          </Link>
        </div>
        <LatestCarousel cars={latest} />
      </section>

      <section className="container" style={{ marginTop: 40 }}>
        <div className="toolbar">
          <div>
            <h2 style={{ margin: 0 }}>Catalog Mobil Dijual</h2>
            <p className="label">Pilihan unit terbaik yang tersedia saat ini.</p>
          </div>
          <Link className="btn" href="/cars">
            Jelajahi Catalog
          </Link>
        </div>
        <CatalogGrid cars={catalogCars} />
      </section>

      <section className="container" style={{ marginTop: 40 }}>
        <div className="toolbar">
          <div>
            <h2 style={{ margin: 0 }}>Alur Pembelian Mobil</h2>
            <p className="label">Langkah singkat, proses cepat, transparan.</p>
          </div>
        </div>
        <div className="grid three">
          {[
            {
              title: "Pilih Mobil",
              desc: "Cari unit terbaik, lihat detail lengkap, dan bandingkan harga."
            },
            {
              title: "Booking & Cek",
              desc: "Jadwalkan test drive dan verifikasi kondisi dengan tim kami."
            },
            {
              title: "Transaksi Aman",
              desc: "Pembayaran aman, dokumen lengkap, mobil langsung siap dibawa."
            }
          ].map((step, index) => (
            <div key={step.title} className="card fade-in" style={{ padding: 20 }}>
              <span className="badge">Step {index + 1}</span>
              <h3 style={{ margin: "12px 0 8px" }}>{step.title}</h3>
              <p className="label">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="tentang" className="container" style={{ marginTop: 40 }}>
        <div className="grid two">
          <div className="card fade-in">
            <span className="badge">Tentang RajaMobil</span>
            <h2 style={{ margin: "12px 0" }}>Marketplace mobil premium dengan standar inspeksi tinggi.</h2>
            <p className="label">
              RajaMobil menghadirkan pengalaman beli mobil yang aman, transparan, dan cepat. Setiap
              unit melalui inspeksi profesional dan dilengkapi informasi lengkap agar kamu bisa
              mengambil keputusan terbaik.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
              <div className="card" style={{ padding: 14, background: "#fff3da" }}>
                <strong>150+</strong>
                <p className="label">Titik inspeksi</p>
              </div>
              <div className="card" style={{ padding: 14, background: "#fff3da" }}>
                <strong>3.000+</strong>
                <p className="label">Unit terjual</p>
              </div>
              <div className="card" style={{ padding: 14, background: "#fff3da" }}>
                <strong>24/7</strong>
                <p className="label">Support WhatsApp</p>
              </div>
            </div>
          </div>
          <div className="card fade-in" style={{ background: "linear-gradient(135deg, #fff3da, #ffffff)" }}>
            <h3 style={{ marginTop: 0 }}>Nilai Kami</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div className="card" style={{ padding: 14 }}>
                <strong>Transparan</strong>
                <p className="label">Harga dan kondisi mobil dijelaskan dengan detail.</p>
              </div>
              <div className="card" style={{ padding: 14 }}>
                <strong>Premium</strong>
                <p className="label">Kurasi unit terbaik dengan standar inspeksi tinggi.</p>
              </div>
              <div className="card" style={{ padding: 14 }}>
                <strong>Fresh & Cepat</strong>
                <p className="label">Proses pembelian cepat dengan layanan personal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
