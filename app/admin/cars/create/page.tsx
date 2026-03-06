"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import CarForm, { CarFormData } from "@/components/CarForm";
import Toast from "@/components/Toast";

const initial: CarFormData = {
  brand: "",
  model: "",
  year: "",
  price: "",
  mileage: "",
  transmission: "",
  fuel: "",
  color: "",
  location: "",
  description: "",
  status: "",
  images: []
};

export default function CreateCarPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [toast, setToast] = useState("");

  const handleSubmit = async (data: CarFormData) => {
    setSubmitting(true);
    setError("");
    const res = await fetch("/api/cars", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const payload = await res.json();
    setSubmitting(false);
    if (!res.ok) {
      setError(payload.errors?.[0]?.message || "Gagal menyimpan");
      return;
    }
    setToast("Mobil berhasil ditambahkan");
    router.push("/admin/dashboard");
  };

  return (
    <main>
      <section className="container">
        <div className="toolbar">
          <div>
            <h2 style={{ margin: 0 }}>Tambah Mobil</h2>
            <p className="label">Semua field wajib diisi kecuali deskripsi.</p>
          </div>
        </div>
        <div className="card">
          <CarForm initial={initial} onSubmit={handleSubmit} submitting={submitting} error={error} />
        </div>
      </section>
      <Toast message={toast} onClose={() => setToast("")} />
    </main>
  );
}
