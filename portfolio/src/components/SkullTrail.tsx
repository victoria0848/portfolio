import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function SkullTrail() {
  const skullRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const moveSkulls = (e: MouseEvent) => {
      skullRefs.current.forEach((skull, index) => {
        if (!skull) return;

        gsap.to(skull, {
          x: e.clientX - 25,
          y: e.clientY - 25,
          duration: 0.2 + index * 0.18,
          ease: "power2.out",
        });
      });
    };

    window.addEventListener("mousemove", moveSkulls);

    return () => {
      window.removeEventListener("mousemove", moveSkulls);
    };
  }, []);

  return (
    <>
      {[...Array(8)].map((_, index) => (
        <img
          key={index}
          ref={(el) => {
            skullRefs.current[index] = el;
          }}
          src="/images/0525.png"
          alt=""
          className="fixed top-0 left-0 pointer-events-none z-[9999]"
          style={{
            width: `${20 + index * 8}px`,
            height: `${20 + index * 8}px`,
            opacity: 1 - index * 0.1,
            transform: `rotate(${index * 12}deg)`,
          }}
        />
      ))}
    </>
  );
}