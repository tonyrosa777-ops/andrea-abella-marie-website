import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact | Andrea Abella Marie — Get in Touch",
  description:
    "Reach out to Andrea Abella Marie for coaching inquiries, speaking requests, or general questions. Phone: 512-399-6916.",
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main>
        <ContactContent />
      </main>
      <Footer />
    </>
  );
}
