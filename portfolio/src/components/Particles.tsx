export default function Particles() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute text-green-500/20 text-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: "-100px",
            animation: `fall ${5 + Math.random() * 5}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          101010101
        </div>
      ))}
    </div>
  );
}