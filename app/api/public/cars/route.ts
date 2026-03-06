import { NextResponse } from "next/server";
import { getCars } from "@/lib/db";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const search = (searchParams.get("search") || "").toLowerCase();
  const page = Number(searchParams.get("page") || 1);
  const pageSize = Number(searchParams.get("pageSize") || 9);
  const priceMin = Number(searchParams.get("priceMin") || 0);
  const priceMax = Number(searchParams.get("priceMax") || 0);
  const yearMin = Number(searchParams.get("yearMin") || 0);
  const yearMax = Number(searchParams.get("yearMax") || 0);

  const cars = await getCars();
  const filtered = cars.filter((car) => {
    if (car.status === "Terjual") return false;
    const matchSearch = search
      ? `${car.brand} ${car.model}`.toLowerCase().includes(search)
      : true;
    const matchPriceMin = priceMin ? car.price >= priceMin : true;
    const matchPriceMax = priceMax ? car.price <= priceMax : true;
    const matchYearMin = yearMin ? car.year >= yearMin : true;
    const matchYearMax = yearMax ? car.year <= yearMax : true;
    return matchSearch && matchPriceMin && matchPriceMax && matchYearMin && matchYearMax;
  });

  const total = filtered.length;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const items = filtered.slice(start, end);

  return NextResponse.json({ items, total, page, pageSize });
}
