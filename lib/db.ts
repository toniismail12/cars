import { promises as fs } from "fs";
import path from "path";

export type CarStatus = "Tersedia" | "Terjual";

export type Car = {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  transmission: "Manual" | "Automatic";
  fuel: "Bensin" | "Solar" | "Hybrid" | "Listrik";
  color: string;
  location: string;
  description?: string;
  status: CarStatus;
  images: string[];
  createdAt: string;
};

const dataDir = path.join(process.cwd(), "data");
const carsFile = path.join(dataDir, "cars.json");

export async function getCars(): Promise<Car[]> {
  const raw = await fs.readFile(carsFile, "utf-8");
  return JSON.parse(raw) as Car[];
}

export async function saveCars(cars: Car[]) {
  await fs.writeFile(carsFile, JSON.stringify(cars, null, 2));
}

export function generateId() {
  return `car_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}
