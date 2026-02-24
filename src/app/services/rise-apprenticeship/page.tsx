import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RiseContent from "@/components/RiseContent";

export const metadata: Metadata = {
  title: "The RISE Apprenticeship™ | Andrea Abella Marie",
  description:
    "A Guided Identity Rebuild for High-Functioning, Deeply Resilient Humans. Application required. Especially for veterans & identity-shifters.",
};

export default function RiseApprenticeshipPage() {
  return (
    <>
      <Navigation />
      <main>
        <RiseContent />
      </main>
      <Footer />
    </>
  );
}
