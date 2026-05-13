import { Cat, Home, Shield, Sparkles } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { whatsappUrl } from "@/lib/whatsapp";

import heroBg from "@/assets/cats/group-photo-brilliant.jpg";
import philosophyImg from "@/assets/cats/atenea.jpg";
import catio1 from "@/assets/solution-1-catios.jpg";
import catio2 from "@/assets/hero-1.jpg";
import catio3 from "@/assets/hero-3.jpg";
import catio4 from "@/assets/hero-5.jpg";
import catio5 from "@/assets/hero-7.jpg";
import catio6 from "@/assets/solution-3-rest.jpg";
import catio7 from "@/assets/solution-6-colonies.jpg";
import vert1 from "@/assets/solution-2-vertical.jpg";
import vert2 from "@/assets/cats/aragorn.jpg";
import vert3 from "@/assets/cats/aslan.jpg";
import vert4 from "@/assets/cats/atenea-motion.jpg";
import vert5 from "@/assets/cats/apolo.jpg";
import vert6 from "@/assets/cats/aquiles.jpg";
import vert7 from "@/assets/hero-4.jpg";
import furn1 from "@/assets/solution-4-furniture.jpg";
import furn2 from "@/assets/solution-5-litter.jpg";
import furn3 from "@/assets/nosotros-interior.jpg";
import furn4 from "@/assets/cats/anubis.jpg";
import furn5 from "@/assets/cats/ares.jpg";
import furn6 from "@/assets/hero-2.jpg";
import furn7 from "@/assets/hero-6.jpg";
import ctaBg from "@/assets/cats/group-photo.jpg";

const eyebrow: React.CSSProperties = {
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 700,
  fontSize: "10px",
  letterSpacing: "0.32em",
  textTransform: "uppercase",
  color: "hsl(var(--gold))",
};

const sectionTitle: React.CSSProperties = {
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 700,
  fontSize: "36px",
  color: "#000",
  lineHeight: 1.15,
};

const bodyText: React.CSSProperties = {
  fontFamily: "'Open Sans', sans-serif",
  fontSize: "15px",
  color: "rgba(0,0,0,0.72)",
  lineHeight: 1.75,
};

type Img = { src: string; alt: string; ratio: string; span?: string };

const Gallery = ({ images }: { images: Img[] }) => (
  <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-5">
    {images.map((img, i) => (
      <figure
        key={i}
        className={`overflow-hidden ${img.span ?? "md:col-span-4"}`}
        style={{ borderRadius: "2px" }}
      >
        <img
          src={img.src}
          alt={img.alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.03]"
          style={{ aspectRatio: img.ratio, display: "block" }}
        />
      </figure>
    ))}
  </div>
);

const ComoTrabajamos = () => {
  const { lang } = useLanguage();
  const es = lang === "es";

  const catios: Img[] = [
    { src: catio1, alt: "Catio exterior", ratio: "4/5", span: "md:col-span-7 md:row-span-2" },
    { src: catio2, alt: "Catio detalle", ratio: "4/5", span: "md:col-span-5" },
    { src: catio3, alt: "Catio luz", ratio: "1/1", span: "md:col-span-5" },
    { src: catio4, alt: "Catio madera", ratio: "4/3", span: "md:col-span-5" },
    { src: catio5, alt: "Catio panorámico", ratio: "16/10", span: "md:col-span-7" },
    { src: catio6, alt: "Descanso exterior", ratio: "1/1", span: "md:col-span-4" },
    { src: catio7, alt: "Convivencia exterior", ratio: "4/3", span: "md:col-span-8" },
  ];

  const circuitos: Img[] = [
    { src: vert1, alt: "Circuito vertical", ratio: "4/5", span: "md:col-span-5" },
    { src: vert2, alt: "Gato en altura", ratio: "1/1", span: "md:col-span-3" },
    { src: vert3, alt: "Movimiento", ratio: "1/1", span: "md:col-span-4" },
    { src: vert4, alt: "Atenea en movimiento", ratio: "16/10", span: "md:col-span-8" },
    { src: vert5, alt: "Apolo explorando", ratio: "4/5", span: "md:col-span-4" },
    { src: vert6, alt: "Aquiles", ratio: "4/3", span: "md:col-span-6" },
    { src: vert7, alt: "Ruta vertical", ratio: "3/4", span: "md:col-span-6" },
  ];

  const mobiliario: Img[] = [
    { src: furn1, alt: "Mobiliario funcional", ratio: "16/10", span: "md:col-span-7" },
    { src: furn2, alt: "Estación discreta", ratio: "4/5", span: "md:col-span-5" },
    { src: furn3, alt: "Interior con gato", ratio: "1/1", span: "md:col-span-4" },
    { src: furn4, alt: "Anubis en mueble", ratio: "1/1", span: "md:col-span-4" },
    { src: furn5, alt: "Ares descansando", ratio: "1/1", span: "md:col-span-4" },
    { src: furn6, alt: "Detalle de madera", ratio: "16/9", span: "md:col-span-8" },
    { src: furn7, alt: "Atelier", ratio: "4/5", span: "md:col-span-4" },
  ];

  const principles = [
    {
      Icon: Cat,
      title: es ? "Empatía felina" : "Feline empathy",
      desc: es
        ? "Diseñamos desde la observación profunda de su comportamiento."
        : "We design from deep observation of their behavior.",
    },
    {
      Icon: Home,
      title: es ? "Integración real" : "Real integration",
      desc: es
        ? "Soluciones que se funden con la arquitectura del hogar."
        : "Solutions that blend with the home's architecture.",
    },
    {
      Icon: Shield,
      title: es ? "Seguridad total" : "Total safety",
      desc: es
        ? "Cada decisión cuida su bienestar físico y emocional."
        : "Every decision cares for their physical and emotional well-being.",
    },
    {
      Icon: Sparkles,
      title: es ? "Diseño habitable" : "Livable design",
      desc: es
        ? "Espacios bellos para ellos y para ti, todos los días."
        : "Beautiful spaces for them and for you, every day.",
    },
  ];

  return (
    <>
      {/* SECTION 1 — HERO */}
      <section
        className="relative w-full overflow-hidden"
        style={{ minHeight: "92vh", backgroundColor: "hsl(var(--cream))" }}
      >
        <img
          src={heroBg}
          alt={es ? "Atelier felino GATIUM" : "GATIUM feline atelier"}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,14,8,0.05) 0%, rgba(20,14,8,0.0) 35%, rgba(20,14,8,0.45) 100%)",
          }}
        />
        <div className="relative z-10 flex flex-col justify-end h-full px-[20px] md:px-16 pb-[56px] md:pb-[88px]" style={{ minHeight: "92vh" }}>
          <div style={{ maxWidth: "640px" }}>
            <div style={{ ...eyebrow, color: "hsl(var(--gold))" }}>
              {es ? "ATELIER FELINO" : "FELINE ATELIER"}
            </div>
            <h1
              className="text-[32px] md:text-[56px] mt-5"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.1,
              }}
            >
              {es ? "Diseño que comienza " : "Design that begins "}
              <span style={{ color: "hsl(var(--gold))" }}>
                {es ? "observando." : "by observing."}
              </span>
            </h1>
            <p
              className="mt-5"
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "15px",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.7,
                maxWidth: "520px",
              }}
            >
              {es
                ? "Cada espacio GATIUM nace de cómo vive, descansa y se mueve cada gato — no de un catálogo."
                : "Every GATIUM space is born from how each cat lives, rests and moves — not from a catalog."}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — PHILOSOPHY */}
      <section
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ backgroundColor: "hsl(var(--cream))" }}
      >
        <div className="flex flex-col justify-center px-[20px] py-[64px] md:px-20 md:py-32">
          <div style={eyebrow}>{es ? "FILOSOFÍA" : "PHILOSOPHY"}</div>
          <h2 className="mt-5" style={sectionTitle}>
            {es ? "Cada gato habita distinto." : "Every cat inhabits differently."}
          </h2>
          <p className="mt-7" style={{ ...bodyText, maxWidth: "440px" }}>
            {es
              ? "En GATIUM no comenzamos diseñando muebles. Comenzamos observando cómo vive, descansa, explora y se mueve cada gato."
              : "At GATIUM we don't start by designing furniture. We start by observing how each cat lives, rests, explores and moves."}
          </p>
          <p
            className="mt-6"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              fontStyle: "italic",
              fontSize: "18px",
              color: "hsl(var(--gold))",
              maxWidth: "420px",
              lineHeight: 1.5,
            }}
          >
            {es
              ? "Diseñar para ellos es, antes que nada, comprenderlos."
              : "Designing for them is, above all, understanding them."}
          </p>
        </div>
        <div className="relative" style={{ minHeight: "560px" }}>
          <img
            src={philosophyImg}
            alt={es ? "Observación felina" : "Feline observation"}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>

      {/* SECTION 3 — CATIOS GALLERY */}
      <section
        className="px-[20px] md:px-16 py-[80px] md:py-[120px]"
        style={{ backgroundColor: "hsl(var(--beige))" }}
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12 md:mb-16">
            <div className="md:col-span-5">
              <div style={eyebrow}>{es ? "EXTERIORES" : "OUTDOORS"}</div>
              <h2 className="mt-4" style={sectionTitle}>
                {es ? "Catios y espacios exteriores." : "Catios and outdoor spaces."}
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 flex items-end">
              <p style={bodyText}>
                {es
                  ? "Diseñamos catios personalizados adaptados a distintos tamaños de espacio — desde pequeños balcones hasta áreas exteriores completas. Cada proyecto se ajusta a la arquitectura del hogar y al ritmo de la manada."
                  : "We design custom catios adapted to different sizes — from small balconies to full outdoor areas. Every project fits the home's architecture and the colony's rhythm."}
              </p>
            </div>
          </div>
          <Gallery images={catios} />
        </div>
      </section>

      {/* SECTION 4 — CIRCUITOS GALLERY */}
      <section
        className="px-[20px] md:px-16 py-[80px] md:py-[120px]"
        style={{ backgroundColor: "hsl(var(--cream))" }}
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12 md:mb-16">
            <div className="md:col-span-6">
              <div style={eyebrow}>{es ? "MOVIMIENTO" : "MOVEMENT"}</div>
              <h2 className="mt-4" style={sectionTitle}>
                {es ? "Circuitos verticales." : "Vertical circuits."}
              </h2>
            </div>
            <div className="md:col-span-5 md:col-start-8 flex items-end">
              <p style={bodyText}>
                {es
                  ? "Recorridos pensados para escalar, observar y descansar en altura. Una arquitectura que respeta el instinto felino y activa la exploración diaria."
                  : "Routes designed to climb, observe and rest at height. An architecture that respects feline instinct and activates daily exploration."}
              </p>
            </div>
          </div>
          <Gallery images={circuitos} />
        </div>
      </section>

      {/* SECTION 5 — MOBILIARIO GALLERY */}
      <section
        className="px-[20px] md:px-16 py-[80px] md:py-[120px]"
        style={{ backgroundColor: "hsl(var(--beige))" }}
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12 md:mb-16">
            <div className="md:col-span-5">
              <div style={eyebrow}>{es ? "INTERIORES" : "INTERIORS"}</div>
              <h2 className="mt-4" style={sectionTitle}>
                {es ? "Mobiliario funcional." : "Functional furniture."}
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 flex items-end">
              <p style={bodyText}>
                {es
                  ? "Piezas que conviven con tu hogar: maderas cálidas, líneas serenas y funciones pensadas para ellos. Mobiliario que no se esconde — se integra."
                  : "Pieces that live with your home: warm woods, serene lines and functions designed for them. Furniture that doesn't hide — it integrates."}
              </p>
            </div>
          </div>
          <Gallery images={mobiliario} />
        </div>
      </section>

      {/* SECTION 6 — PRINCIPLES */}
      <section
        className="px-[20px] md:px-16 py-[100px] md:py-[140px]"
        style={{ backgroundColor: "hsl(var(--cream))" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <div style={eyebrow}>{es ? "PRINCIPIOS" : "PRINCIPLES"}</div>
            <h2 className="mt-5 mx-auto" style={{ ...sectionTitle, maxWidth: "640px" }}>
              {es ? "Cuatro ideas que guían cada pieza." : "Four ideas that guide every piece."}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10">
            {principles.map(({ Icon, title, desc }) => (
              <div key={title} className="flex flex-col items-start">
                <div style={{ color: "hsl(var(--gold))" }}>
                  <Icon size={32} strokeWidth={1.2} />
                </div>
                <h3
                  className="mt-6"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "26px",
                    color: "#1a1410",
                    lineHeight: 1.2,
                  }}
                >
                  {title}
                </h3>
                <p
                  className="mt-3"
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "14px",
                    color: "rgba(26,20,16,0.65)",
                    lineHeight: 1.7,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — FINAL CTA */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "70vh" }}
      >
        <img
          src={ctaBg}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,10,6,0.78) 0%, rgba(15,10,6,0.85) 100%)",
          }}
        />
        <div
          className="relative z-10 flex flex-col items-center justify-center text-center px-[20px] py-[120px] md:py-[160px]"
          style={{ minHeight: "70vh" }}
        >
          <div style={{ ...eyebrow, color: "hsl(var(--gold))" }}>
            {es ? "EMPECEMOS" : "LET'S BEGIN"}
          </div>
          <h2
            className="mt-6 mx-auto"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              fontSize: "clamp(30px, 4.4vw, 52px)",
              color: "hsl(var(--cream))",
              lineHeight: 1.15,
              letterSpacing: "-0.005em",
              maxWidth: "780px",
            }}
          >
            {es
              ? "Cada espacio comienza observando cómo vive tu gato."
              : "Every space begins by observing how your cat lives."}
          </h2>
          <a
            href={whatsappUrl(lang)}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-12 transition-colors"
            style={{
              backgroundColor: "hsl(var(--gold))",
              color: "#1a1410",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: "10px",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              padding: "16px 36px",
              borderRadius: "1px",
            }}
          >
            {es ? "Envíanos tu espacio" : "Send us your space"}
          </a>
        </div>
      </section>
    </>
  );
};

export default ComoTrabajamos;
