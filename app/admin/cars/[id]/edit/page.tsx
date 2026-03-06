"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CarForm, { CarFormData } from "@/components/CarForm";
import Toast from "@/components/Toast";

const empty: CarFormData = {
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

export default function EditCarPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [initial, setInitial] = useState<CarFormData>(empty);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [toast, setToast] = useState("");

  useEffect(() => {
    const load = async () => {
      const res = await fetch(`/api/cars/${params.id}`);
      const data = await res.json();
      if (res.ok) {
        setInitial({
          brand: data.item.brand,
          model: data.item.model,
          year: data.item.year,
          price: data.item.price,
          mileage: data.item.mileage,
          transmission: data.item.transmission,
          fuel: data.item.fuel,
          color: data.item.color,
          location: data.item.location,
          description: data.item.description || "",
          status: data.item.status,
          images: data.item.images
        });
      }
      setLoading(false);
    };
    load();
  }, [params.id]);

  const handleSubmit = async (data: CarFormData) => {
    setSubmitting(true);
    setError("");
    const res = await fetch(`/api/cars/${params.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const payload = await res.json();
    setSubmitting(false);
    if (!res.ok) {
      setError(payload.errors?.[0]?.message || "Gagal menyimpan");
      return;
    }
    setToast("Mobil berhasil diupdate");
    router.push("/admin/dashboard");
  };

  return (
    <main>
      <section className="container">
        <div className="toolbar">
          <div>
            <h2 style={{ margin: 0 }}>Edit Mobil</h2>
            <p className="label">Perbarui detail mobil dan foto.</p>
          </div>
        </div>
        <div className="card">
          {loading ? <p>Loading data...</p> : <CarForm initial={initial} onSubmit={handleSubmit} submitting={submitting} error={error} />}
        </div>
      </section>
      <Toast message={toast} onClose={() => setToast("")} />
    </main>
  );
}
