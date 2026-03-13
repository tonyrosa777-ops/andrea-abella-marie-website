import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cart";
import CartDrawer from "@/components/CartDrawer";

export const metadata: Metadata = {
  title: "Andrea Abella Marie | Trauma-Informed Mindset Coach & Energy Healing Practitioner",
  description:
    "Helping you come home to yourself. Trauma-informed coaching for veterans, overwhelmed professionals, and trauma-impacted adults. Resilience. Healing. One Day At a Time.",
  keywords: [
    "trauma-informed coach",
    "veteran coaching",
    "nervous system regulation coaching",
    "PTSD coach for veterans",
    "identity rebuild coaching",
    "energy healing practitioner",
    "mindset coach Austin TX",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
