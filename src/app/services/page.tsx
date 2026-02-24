import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicesContent from "@/components/ServicesContent";

export const metadata: Metadata = {
  title: "Services | Andrea Abella Marie — Coaching & Healing Programs",
  description:
    "Explore trauma-informed coaching options: 1:1 Coaching, The Health Cost Buffer Program, and The RISE Apprenticeship™. Find the support level that meets you where you are.",
};

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main>
        <ServicesContent />
      </main>
      <Footer />
    </>
  );
}
