import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookContent from "@/components/BookContent";

export const metadata: Metadata = {
  title: "Book a Call | Andrea Abella Marie — Start Your Healing Journey",
  description:
    "Schedule your free connection conversation with Andrea Abella Marie. The first step toward healing, confidence, and nervous system safety.",
};

export default function BookPage() {
  return (
    <>
      <Navigation />
      <main>
        <BookContent />
      </main>
      <Footer />
    </>
  );
}
