import { NextResponse } from "next/server";
import { getCars } from "@/lib/db";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const cars = await getCars();
  const car = cars.find((item) => item.id === params.id);
  if (!car) {
    return NextResponse.json({ error: "Data tidak ditemukan" }, { status: 404 });
  }
  return NextResponse.json({ item: car });
}
