import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TestimonialsContent from "@/components/TestimonialsContent";

export const metadata: Metadata = {
  title: "Testimonials | Andrea Abella Marie — Client Experiences",
  description:
    "Read what clients say about their healing journey with Andrea Abella Marie. Real stories of transformation, resilience, and rebuilding.",
};

export default function TestimonialsPage() {
  return (
    <>
      <Navigation />
      <main>
        <TestimonialsContent />
      </main>
      <Footer />
    </>
  );
}
