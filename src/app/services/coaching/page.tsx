import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CoachingContent from "@/components/CoachingContent";

export const metadata: Metadata = {
  title: "1:1 Coaching | Andrea Abella Marie — Trauma-Informed Support",
  description:
    "Explore 1:1 trauma-informed coaching options with Andrea Abella Marie. Foundation Support, Deep Healing Container, and VIP Mentorship tiers available.",
};

export default function CoachingPage() {
  return (
    <>
      <Navigation />
      <main>
        <CoachingContent />
      </main>
      <Footer />
    </>
  );
}
