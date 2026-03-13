import { NextResponse } from "next/server";
import { getSyncProducts } from "@/lib/printful";
import seededProducts from "@/lib/printful-seeded-products.json";

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  try {
    const storeId = seededProducts.storeId as number;
    const products = await getSyncProducts(storeId);
    return NextResponse.json({ products, storeId });
  } catch (err) {
    console.error("Printful products fetch error:", err);
    // Fall back to seeded product data so shop still renders
    return NextResponse.json(
      { products: seededProducts.products, storeId: seededProducts.storeId, fallback: true },
      { status: 200 }
    );
  }
}
