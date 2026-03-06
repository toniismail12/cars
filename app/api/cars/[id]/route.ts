import { NextResponse } from "next/server";
import { getCars, saveCars } from "@/lib/db";
import { validateCarInput } from "@/lib/validation";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const cars = await getCars();
  const car = cars.find((item) => item.id === params.id);
  if (!car) {
    return NextResponse.json({ error: "Data tidak ditemukan" }, { status: 404 });
  }
  return NextResponse.json({ item: car });
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const payload = (await req.json()) as Record<string, unknown>;
  const errors = validateCarInput(payload);
  if (errors.length) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  const cars = await getCars();
  const index = cars.findIndex((item) => item.id === params.id);
  if (index === -1) {
    return NextResponse.json({ error: "Data tidak ditemukan" }, { status: 404 });
  }

  cars[index] = {
    ...cars[index],
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
    images: payload.images as string[]
  };

  await saveCars(cars);
  return NextResponse.json({ success: true, item: cars[index] });
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const cars = await getCars();
  const index = cars.findIndex((item) => item.id === params.id);
  if (index === -1) {
    return NextResponse.json({ error: "Data tidak ditemukan" }, { status: 404 });
  }

  const [removed] = cars.splice(index, 1);
  await saveCars(cars);
  return NextResponse.json({ success: true, item: removed });
}
