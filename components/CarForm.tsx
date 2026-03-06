"use client";

import type React from "react";
import { useState } from "react";
import ImagePicker from "@/components/ImagePicker";
import LoadingButton from "@/components/LoadingButton";

export type CarFormData = {
  brand: string;
  model: string;
  year: number | "";
  price: number | "";
  mileage: number | "";
  transmission: "Manual" | "Automatic" | "";
  fuel: "Bensin" | "Solar" | "Hybrid" | "Listrik" | "";
  color: string;
  location: string;
  description: string;
  status: "Tersedia" | "Terjual" | "";
  images: string[];
};

export default function CarForm({
  initial,
  onSubmit,
  submitting,
  error
}: {
  initial: CarFormData;
  onSubmit: (data: CarFormData) => void;
  submitting: boolean;
  error: string;
}) {
  const [form, setForm] = useState<CarFormData>(initial);
  const [localError, setLocalError] = useState("");

  const update = <K extends keyof CarFormData>(key: K, value: CarFormData[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const validate = () => {
    if (form.images.length < 1) return "Foto minimal 1";
    if (!form.brand) return "Merk wajib diisi";
    if (!form.model) return "Tipe wajib diisi";
    if (!form.year || Number(form.year) < 1990) return "Tahun minimal 1990";
    if (form.price === "" || Number.isNaN(Number(form.price))) return "Harga harus angka";
    if (form.mileage === "" || Number.isNaN(Number(form.mileage))) return "Kilometer wajib angka";
    if (!form.transmission) return "Transmisi wajib diisi";
    if (!form.fuel) return "Bahan bakar wajib diisi";
    if (!form.color) return "Warna wajib diisi";
    if (!form.location) return "Lokasi wajib diisi";
    if (!form.status) return "Status wajib diisi";
    return "";
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const message = validate();
    if (message) {
      setLocalError(message);
      return;
    }
    setLocalError("");
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="grid" style={{ gap: 20 }}>
      <div>
        <label className="label">Foto Mobil (multiple)</label>
        <ImagePicker images={form.images} onChange={(imgs) => update("images", imgs)} />
      </div>

      <div className="grid two">
        <div>
          <label className="label">Merk</label>
          <input className="input" value={form.brand} onChange={(e) => update("brand", e.target.value)} />
        </div>
        <div>
          <label className="label">Tipe</label>
          <input className="input" value={form.model} onChange={(e) => update("model", e.target.value)} />
        </div>
        <div>
          <label className="label">Tahun</label>
          <input
            className="input"
            type="number"
            min={1990}
            value={form.year}
            onChange={(e) => update("year", e.target.value === "" ? "" : Number(e.target.value))}
          />
        </div>
        <div>
          <label className="label">Harga</label>
          <input
            className="input"
            type="number"
            value={form.price}
            onChange={(e) => update("price", e.target.value === "" ? "" : Number(e.target.value))}
          />
        </div>
        <div>
          <label className="label">Kilometer</label>
          <input
            className="input"
            type="number"
            value={form.mileage}
            onChange={(e) => update("mileage", e.target.value === "" ? "" : Number(e.target.value))}
          />
        </div>
        <div>
          <label className="label">Transmisi</label>
          <select className="select" value={form.transmission} onChange={(e) => update("transmission", e.target.value as CarFormData["transmission"])}>
            <option value="">Pilih</option>
            <option value="Manual">Manual</option>
            <option value="Automatic">Automatic</option>
          </select>
        </div>
        <div>
          <label className="label">Bahan Bakar</label>
          <select className="select" value={form.fuel} onChange={(e) => update("fuel", e.target.value as CarFormData["fuel"])}>
            <option value="">Pilih</option>
            <option value="Bensin">Bensin</option>
            <option value="Solar">Solar</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Listrik">Listrik</option>
          </select>
        </div>
        <div>
          <label className="label">Warna</label>
          <input className="input" value={form.color} onChange={(e) => update("color", e.target.value)} />
        </div>
        <div>
          <label className="label">Lokasi</label>
          <input className="input" value={form.location} onChange={(e) => update("location", e.target.value)} />
        </div>
        <div>
          <label className="label">Status</label>
          <select className="select" value={form.status} onChange={(e) => update("status", e.target.value as CarFormData["status"])}>
            <option value="">Pilih</option>
            <option value="Tersedia">Tersedia</option>
            <option value="Terjual">Terjual</option>
          </select>
        </div>
      </div>

      <div>
        <label className="label">Deskripsi (optional)</label>
        <textarea className="textarea" value={form.description} onChange={(e) => update("description", e.target.value)} />
      </div>

      {localError ? <span style={{ color: "#ff433a" }}>{localError}</span> : null}
      {error ? <span style={{ color: "#ff433a" }}>{error}</span> : null}
      <LoadingButton loading={submitting} type="submit">
        Simpan
      </LoadingButton>
    </form>
  );
}
