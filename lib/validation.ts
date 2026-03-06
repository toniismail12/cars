import { Car } from "./db";

export type ValidationError = {
  field: string;
  message: string;
};

export function validateCarInput(data: Partial<Car>) {
  const errors: ValidationError[] = [];

  if (!data.images || data.images.length < 1) {
    errors.push({ field: "images", message: "Foto minimal 1" });
  }
  if (!data.brand) errors.push({ field: "brand", message: "Merk wajib diisi" });
  if (!data.model) errors.push({ field: "model", message: "Tipe wajib diisi" });
  if (!data.year || Number.isNaN(Number(data.year)) || Number(data.year) < 1990) {
    errors.push({ field: "year", message: "Tahun minimal 1990" });
  }
  if (data.price === undefined || Number.isNaN(Number(data.price))) {
    errors.push({ field: "price", message: "Harga harus angka" });
  }
  if (data.mileage === undefined || Number.isNaN(Number(data.mileage))) {
    errors.push({ field: "mileage", message: "Kilometer wajib angka" });
  }
  if (!data.transmission) errors.push({ field: "transmission", message: "Transmisi wajib diisi" });
  if (!data.fuel) errors.push({ field: "fuel", message: "Bahan bakar wajib diisi" });
  if (!data.color) errors.push({ field: "color", message: "Warna wajib diisi" });
  if (!data.location) errors.push({ field: "location", message: "Lokasi wajib diisi" });
  if (!data.status) errors.push({ field: "status", message: "Status wajib diisi" });

  return errors;
}
