import { ReactNode, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import hero6 from "@/assets/hero-6.jpg";
import hero7 from "@/assets/hero-7.jpg";

const slides = [hero1, hero2, hero3, hero4, hero5, hero6, hero7];
const INTERVAL = 5000;

export const HeroCarousel = ({ children }: { children: ReactNode }) => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), INTERVAL);
    return () => clearInterval(t);
  }, []);

  const go = (n: number) => setIdx((n + slides.length) % slides.length);

  return (
    <section
      className="relative w-screen left-1/2 right-1/2 -mx-[50vw] overflow-hidden"
      style={{ height: "100vh", marginTop: "-60px" }}
    >
      {/* Slides */}
      {slides.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity ease-in-out"
          style={{
            opacity: i === idx ? 1 : 0,
            transitionDuration: "1800ms",
          }}
        >
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(30,26,23,0.35)" }}
          />
        </div>
      ))}

      {/* Content overlay */}
      <div className="relative z-10 h-full flex items-center">
        {children}
      </div>

      {/* Arrows */}
      <button
        aria-label="Previous slide"
        onClick={() => go(idx - 1)}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-2 transition-opacity"
        style={{ color: "rgba(245,239,230,0.6)" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(245,239,230,1)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,239,230,0.6)")}
      >
        <ChevronLeft size={36} strokeWidth={1} />
      </button>
      <button
        aria-label="Next slide"
        onClick={() => go(idx + 1)}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-2 transition-opacity"
        style={{ color: "rgba(245,239,230,0.6)" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(245,239,230,1)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,239,230,0.6)")}
      >
        <ChevronRight size={36} strokeWidth={1} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => go(i)}
            className="transition-all"
            style={{
              width: i === idx ? "24px" : "8px",
              height: "2px",
              backgroundColor: i === idx ? "hsl(var(--gold))" : "rgba(245,239,230,0.5)",
            }}
          />
        ))}
      </div>
    </section>
  );
};
