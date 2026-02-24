import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HealthCostBufferContent from "@/components/HealthCostBufferContent";

export const metadata: Metadata = {
  title: "Health Cost Buffer Program | Andrea Abella Marie",
  description:
    "A 12-week preventative support program for aging adults, veterans & caregivers. $75/session with sliding scale available.",
};

export default function HealthCostBufferPage() {
  return (
    <>
      <Navigation />
      <main>
        <HealthCostBufferContent />
      </main>
      <Footer />
    </>
  );
}
