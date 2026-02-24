"use client";

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
      <svg
        viewBox="0 0 240 200"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4B96A" />
            <stop offset="50%" stopColor="#C8A84E" />
            <stop offset="100%" stopColor="#D4B96A" />
          </linearGradient>
          <linearGradient id="blueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3B6CB5" />
            <stop offset="100%" stopColor="#1B2A4A" />
          </linearGradient>
        </defs>

        {/* Radiating sun lines */}
        {[...Array(11)].map((_, i) => {
          const angle = Math.PI + (i * Math.PI) / 10;
          const x1 = 120 + Math.cos(angle) * 45;
          const y1 = 75 + Math.sin(angle) * 45;
          const x2 = 120 + Math.cos(angle) * 68;
          const y2 = 75 + Math.sin(angle) * 68;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#C8A84E"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          );
        })}

        {/* Crescent moon - top right */}
        <circle cx="148" cy="28" r="10" fill="#C8A84E" />
        <circle cx="153" cy="24" r="9" fill="transparent" stroke="none" />
        <path
          d="M145 18 A10 10 0 0 1 153 38 A8 8 0 0 0 145 18 Z"
          fill="#C8A84E"
        />

        {/* Stars */}
        <circle cx="108" cy="22" r="2.5" fill="#C8A84E" />
        <circle cx="98" cy="38" r="1.5" fill="#C8A84E" />
        <circle cx="160" cy="42" r="1.5" fill="#C8A84E" />

        {/* Outer lotus petals - left side */}
        <path d="M52 140 Q30 105 48 65 Q60 95 68 125 Z" fill="url(#goldGrad)" opacity="0.85" />
        <path d="M65 135 Q48 90 60 55 Q72 85 78 120 Z" fill="url(#goldGrad)" opacity="0.9" />
        <path d="M78 128 Q65 78 76 45 Q88 78 88 115 Z" fill="url(#goldGrad)" />

        {/* Outer lotus petals - right side */}
        <path d="M188 140 Q210 105 192 65 Q180 95 172 125 Z" fill="url(#goldGrad)" opacity="0.85" />
        <path d="M175 135 Q192 90 180 55 Q168 85 162 120 Z" fill="url(#goldGrad)" opacity="0.9" />
        <path d="M162 128 Q175 78 164 45 Q152 78 152 115 Z" fill="url(#goldGrad)" />

        {/* Center top petal */}
        <path d="M110 120 Q105 70 120 35 Q135 70 130 120 Z" fill="url(#goldGrad)" opacity="0.95" />

        {/* Meditation figure - head */}
        <circle cx="120" cy="78" r="16" fill="url(#blueGrad)" />

        {/* Meditation figure - body */}
        <path
          d="M96 145 Q100 105 120 92 Q140 105 144 145 Q135 138 120 140 Q105 138 96 145 Z"
          fill="url(#blueGrad)"
        />

        {/* Arms - left */}
        <path d="M102 112 Q82 118 72 132" stroke="url(#blueGrad)" strokeWidth="6" strokeLinecap="round" fill="none" />

        {/* Arms - right */}
        <path d="M138 112 Q158 118 168 132" stroke="url(#blueGrad)" strokeWidth="6" strokeLinecap="round" fill="none" />

        {/* Base cushion / platform */}
        <ellipse cx="120" cy="152" rx="45" ry="8" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
        <path d="M75 152 Q80 162 120 164 Q160 162 165 152" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      </svg>

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
