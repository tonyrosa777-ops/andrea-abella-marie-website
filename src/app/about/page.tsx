import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About Andrea | Trauma-Informed Mindset Coach & Energy Healer",
  description:
    "Meet Andrea Abella Marie — a trauma-informed mindset coach and energy healing practitioner helping veterans and overwhelmed professionals find their way back to themselves.",
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
