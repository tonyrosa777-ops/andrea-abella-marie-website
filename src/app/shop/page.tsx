import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ShopContent from "@/components/ShopContent";

export const metadata: Metadata = {
  title: "Shop | Andrea Abella Marie — Intentional Merchandise",
  description:
    "Small-batch, intentional pieces — not mass-produced merch. T-shirts, tumblers, journals, bags and more. Wear your healing journey with pride.",
};

export default function ShopPage() {
  return (
    <>
      <Navigation />
      <main>
        <ShopContent />
      </main>
      <Footer />
    </>
  );
}
