import { NextResponse } from "next/server";
import { generateId, getCars, saveCars } from "@/lib/db";
import { validateCarInput } from "@/lib/validation";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const search = (searchParams.get("search") || "").toLowerCase();
  const status = searchParams.get("status") || "all";
  const page = Number(searchParams.get("page") || 1);
  const pageSize = Number(searchParams.get("pageSize") || 6);

  const cars = await getCars();
  const filtered = cars.filter((car) => {
    const matchSearch = search
      ? `${car.brand} ${car.model}`.toLowerCase().includes(search)
      : true;
    const matchStatus = status === "all" ? true : car.status === status;
    return matchSearch && matchStatus;
  });

  const total = filtered.length;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const items = filtered.slice(start, end);

  return NextResponse.json({ items, total, page, pageSize });
}

export async function POST(req: Request) {
  const payload = (await req.json()) as Record<string, unknown>;
  const errors = validateCarInput(payload);
  if (errors.length) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  const cars = await getCars();
  const now = new Date().toISOString();
  const newCar = {
    id: generateId(),
    brand: String(payload.brand),
    model: String(payload.model),
    year: Number(payload.year),
    price: Number(payload.price),
    mileage: Number(payload.mileage),
    transmission: payload.transmission as "Manual" | "Automatic",
    fuel: payload.fuel as "Bensin" | "Solar" | "Hybrid" | "Listrik",
    color: String(payload.color),
    location: String(payload.location),
    description: payload.description ? String(payload.description) : "",
    status: payload.status as "Tersedia" | "Terjual",
    images: payload.images as string[],
    createdAt: now
  };

  cars.unshift(newCar);
  await saveCars(cars);

  return NextResponse.json({ success: true, item: newCar });
}
