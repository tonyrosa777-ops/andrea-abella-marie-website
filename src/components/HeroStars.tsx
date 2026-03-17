// Deterministic star field for page hero sections.
// Uses modulo arithmetic (no Math.random) so it's safe in both
// server and client components — no hydration mismatch.

const STARS = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  top: `${(i * 37 + 11) % 100}%`,
  left: `${(i * 53 + 7) % 100}%`,
  size: i % 7 === 0 ? 2.5 : i % 3 === 0 ? 2 : 1.5,
  opacity: 0.3 + (i % 4) * 0.18,
  duration: `${3 + (i % 4)}s`,
  delay: `${(i % 6) * 0.5}s`,
}));

export default function HeroStars() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {STARS.map((s) => (
        <div
          key={s.id}
          style={{
            position: "absolute",
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            background: "#fff",
            borderRadius: "50%",
            opacity: s.opacity,
            animation: `twinkle ${s.duration} ease-in-out infinite alternate`,
            animationDelay: s.delay,
          }}
        />
      ))}
    </div>
  );
}
