import type { Metadata } from "next";
import "./globals.css";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
