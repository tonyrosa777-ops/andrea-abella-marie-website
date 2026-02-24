import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SpeakingContent from "@/components/SpeakingContent";

export const metadata: Metadata = {
  title: "Speaking | Andrea Abella Marie — Rising After Trauma",
  description:
    "Book Andrea Abella Marie for your next event. A gentle, trauma-informed talk on regulation, boundaries, and rebuilding internal safety.",
};

export default function SpeakingPage() {
  return (
    <>
      <Navigation />
      <main>
        <SpeakingContent />
      </main>
      <Footer />
    </>
  );
}
