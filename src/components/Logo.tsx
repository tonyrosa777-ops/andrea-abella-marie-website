"use client";

import Image from "next/image";

interface LogoProps {
  className?: string;
  showText?: boolean;
  textColor?: string;
}

export default function Logo({
  className = "w-16 h-16",
  showText = false,
  textColor = "white",
}: LogoProps) {
  return (
    <div className="flex flex-col items-center">
      <div className={`relative ${className}`}>
        <Image
          src="/logo_light.png"
          alt="Andrea Abella Marie Logo"
          fill
          className="object-contain"
          priority
        />
      </div>

      {showText && (
        <div className="text-center mt-2">
          <p
            className="text-lg tracking-wide"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              color: textColor,
            }}
          >
            Andrea Abella Marie Coaching
          </p>
          <p
            className="text-xs tracking-wider italic"
            style={{
              fontFamily: "var(--font-script)",
              color: textColor,
              opacity: 0.8,
            }}
          >
            Resilience. Healing.
            <br />
            One Day At a Time.
          </p>
        </div>
      )}
    </div>
  );
}
