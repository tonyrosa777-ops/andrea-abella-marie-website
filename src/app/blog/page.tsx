import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogContent from "@/components/BlogContent";

export const metadata: Metadata = {
  title: "Blog | Andrea Abella Marie — Trauma-Informed Healing Resources",
  description:
    "Articles on trauma-informed healing, nervous system regulation, identity rebuilding, and finding your way back to yourself. Written by Andrea Abella Marie.",
};

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main>
        <BlogContent />
      </main>
      <Footer />
    </>
  );
}
