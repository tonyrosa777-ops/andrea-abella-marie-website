import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ThreePillars from "@/components/ThreePillars";
import AboutPreview from "@/components/AboutPreview";
import ServicesOverview from "@/components/ServicesOverview";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import BlogPreview from "@/components/BlogPreview";
import ShopPreview from "@/components/ShopPreview";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ProblemSection />
        <ThreePillars />
        <AboutPreview />
        <ServicesOverview />
        <TestimonialsCarousel />
        <BlogPreview />
        <ShopPreview />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
