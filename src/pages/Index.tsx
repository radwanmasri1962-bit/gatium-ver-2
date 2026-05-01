import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { HeroCarousel } from "@/components/HeroCarousel";
import bornAtHome from "@/assets/born-at-home.jpg";
import solution1 from "@/assets/solution-1-catios.jpg";
import solution2 from "@/assets/solution-2-vertical.jpg";
import solution3 from "@/assets/solution-3-rest.jpg";
import solution4 from "@/assets/solution-4-furniture.jpg";
import solution5 from "@/assets/solution-5-litter.jpg";
import solution6 from "@/assets/solution-6-colonies.jpg";

const WHATSAPP = "https://wa.me/521XXXXXXXXXX";

const PhotoPlaceholder = ({ label, ratio }: { label: string; ratio?: string }) => (
  <div
    className="relative w-full h-full flex items-center justify-center overflow-hidden"
    style={{ backgroundColor: "hsl(var(--beige))", aspectRatio: ratio }}
  >
    <span
      style={{
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 700,
        fontSize: "9px",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "rgba(0,0,0,0.3)",
        textAlign: "center",
        padding: "0 12px",
      }}
    >
      {label}
    </span>
    <span
      className="absolute bottom-3 right-4"
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontStyle: "italic",
        fontSize: "11px",
        color: "rgba(0,0,0,0.3)",
      }}
    >
      © GATIUM
    </span>
  </div>
);

// Icons
const IconHouseGrid = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M5 14 L16 5 L27 14 V27 H5 Z" />
    <path d="M11 27 V18 M21 27 V18 M5 21 H27" />
  </svg>
);
const IconVertical = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M8 28 V8 M16 28 V4 M24 28 V12" />
    <path d="M13 8 L16 4 L19 8" />
  </svg>
);
const IconArch = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M5 27 V16 a11 11 0 0 1 22 0 V27" />
    <path d="M5 27 H27" />
  </svg>
);
const IconFurniture = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
    <rect x="5" y="9" width="22" height="16" />
    <path d="M5 17 H27 M16 9 V25" />
  </svg>
);
const IconBox = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
    <rect x="5" y="10" width="22" height="16" />
    <circle cx="11" cy="18" r="2.5" />
  </svg>
);
const IconColony = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M8 22 L5 25 L5 18 L8 21 Z M14 22 L11 25 L11 18 L14 21 Z M20 22 L17 25 L17 18 L20 21 Z" />
    <circle cx="6.5" cy="14" r="2.5" />
    <circle cx="12.5" cy="14" r="2.5" />
    <circle cx="18.5" cy="14" r="2.5" />
    <circle cx="24.5" cy="14" r="2.5" />
  </svg>
);

const Index = () => {
  const { lang } = useLanguage();
  const es = lang === "es";

  const solutions = [
    {
      Icon: IconHouseGrid,
      image: solution1,
      title: es ? "Catios y espacios exteriores seguros" : "Safe outdoor catios",
      desc: es
        ? "Libertad controlada para explorar, tomar sol y observar."
        : "Controlled freedom to explore, sunbathe and observe.",
    },
    {
      Icon: IconVertical,
      image: solution2,
      title: es ? "Muros y recorridos verticales" : "Wall circuits and vertical routes",
      desc: es
        ? "Altura, circulación y territorio en equilibrio."
        : "Height, circulation and territory in balance.",
    },
    {
      Icon: IconArch,
      image: solution3,
      title: es ? "Zonas de descanso y refugio" : "Rest zones and refuges",
      desc: es ? "Espacios que brindan seguridad y calma." : "Spaces that provide security and calm.",
    },
    {
      Icon: IconFurniture,
      image: solution4,
      title: es ? "Mobiliario funcional para convivencia felina" : "Functional feline furniture",
      desc: es
        ? "Diseño que se integra al hogar y facilita el día a día."
        : "Design that integrates into the home and eases daily life.",
    },
    {
      Icon: IconBox,
      image: solution5,
      title: es ? "Areneros y muebles arenero" : "Litter box furniture",
      desc: es
        ? "Soluciones discretas y funcionales que mejoran la higiene."
        : "Discreet and functional solutions that improve hygiene.",
    },
    {
      Icon: IconColony,
      image: solution6,
      title: es ? "Diseño integral para manadas" : "Integral design for colonies",
      desc: es
        ? "Proyectos a medida que consideran la dinámica de todos."
        : "Custom projects that consider the dynamics of all.",
    },
  ];

  

  const eyebrowStyle: React.CSSProperties = {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 700,
    fontSize: "10px",
    letterSpacing: "0.3em",
    textTransform: "uppercase",
    color: "hsl(var(--gold))",
  };

  const goldLinkStyle: React.CSSProperties = {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 700,
    fontSize: "10px",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "hsl(var(--gold))",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
  };

  const primaryBtn: React.CSSProperties = {
    backgroundColor: "#000",
    color: "hsl(var(--cream))",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 700,
    fontSize: "10px",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    padding: "14px 28px",
    borderRadius: "2px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "opacity 200ms ease",
  };

  const secondaryBtn: React.CSSProperties = {
    backgroundColor: "transparent",
    border: "1px solid rgba(0,0,0,0.3)",
    color: "#000",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 700,
    fontSize: "10px",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    padding: "14px 28px",
    borderRadius: "2px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background-color 200ms ease",
  };

  return (
    <>
      {/* SECTION 1 — HERO CAROUSEL */}
      <HeroCarousel>
        <div className="w-full px-[18px] md:px-16">
          <div className="hero-inner mx-auto md:mx-0 w-full" style={{ maxWidth: "640px" }}>
            <div style={{ ...eyebrowStyle, color: "hsl(var(--gold))" }}>
              {es ? "DISEÑO FELINO CON CRITERIO" : "FELINE DESIGN WITH PURPOSE"}
            </div>
            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                color: "hsl(var(--cream))",
                lineHeight: 1.1,
                marginTop: "20px",
                textShadow: "0 2px 24px rgba(0,0,0,0.4)",
              }}
              className="text-[32px] md:text-[56px]"
            >
              {es
                ? "Diseñamos espacios felinos con criterio, pensados desde la "
                : "We design feline spaces with purpose, rooted in "}
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  fontStyle: "italic",
                  color: "hsl(var(--gold))",
                  display: "block",
                }}
              >
                {es ? "convivencia real." : "real cohabitation."}
              </span>
            </h1>
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 400,
                fontSize: "15px",
                color: "rgba(245,239,230,0.92)",
                maxWidth: "480px",
                marginTop: "20px",
                lineHeight: 1.7,
                textShadow: "0 1px 12px rgba(0,0,0,0.4)",
              }}
            >
              {es
                ? "Creamos soluciones que responden a la forma en que tus gatos realmente habitan, sin romper la armonía del hogar."
                : "We create solutions that respond to how your cats really live, without breaking the harmony of your home."}
            </p>
          </div>
        </div>
      </HeroCarousel>


      {/* SECTION 2 — BRAND TEASER */}
      <section
        className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 section-padding"
        style={{ backgroundColor: "hsl(var(--cream))" }}
      >
        <div className="aspect-[4/3]">
          <img
            src={bornAtHome}
            alt={es ? "Majo y Yani diseñando en el atelier" : "Majo and Yani designing at the atelier"}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center md:pl-16">
          <div style={eyebrowStyle}>
            {es ? "GATIUM NACIÓ EN CASA" : "GATIUM WAS BORN AT HOME"}
          </div>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: "38px",
              color: "#000",
              marginTop: "12px",
              lineHeight: 1.15,
            }}
          >
            {es
              ? "Antes de ser una marca, fue una necesidad real."
              : "Before becoming a brand, it was a real need."}
          </h2>
          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "15px",
              color: "rgba(0,0,0,0.72)",
              marginTop: "16px",
              lineHeight: 1.75,
              maxWidth: "520px",
            }}
          >
            {es
              ? "Observamos. Adaptamos. Transformamos. Lo que parecía caos se convirtió en criterio. Hoy lo convertimos en soluciones para tu hogar."
              : "We observed. We adapted. We transformed. What seemed like chaos became our criterion. Today we turn it into solutions for your home."}
          </p>
          <Link to="/nosotros" style={{ ...goldLinkStyle, marginTop: "24px" }}>
            {es ? "CONOCE NUESTRA HISTORIA" : "LEARN OUR STORY"} <span>→</span>
          </Link>
        </div>
      </section>

      {/* SECTION 3 — SOLUTIONS INTRO + GRID */}
      <section className="section-padding" style={{ backgroundColor: "hsl(var(--cream))" }}>
        {/* Intro block (moved from /soluciones) */}
        <div className="mx-auto" style={{ maxWidth: "880px", textAlign: "center" }}>
          <div style={eyebrowStyle}>{es ? "SOLUCIONES" : "SOLUTIONS"}</div>
          <h2
            className="text-[28px] md:text-[44px]"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              color: "#000",
              lineHeight: 1.15,
              marginTop: "16px",
            }}
          >
            {es
              ? "Diseños que responden a la forma en que tus gatos realmente viven."
              : "Designs that respond to how your cats really live."}
          </h2>
          <p
            className="mx-auto"
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "15px",
              color: "rgba(0,0,0,0.72)",
              maxWidth: "640px",
              marginTop: "20px",
              lineHeight: 1.7,
            }}
          >
            {es
              ? "Creamos espacios funcionales, estéticos y seguros que mejoran la convivencia y el bienestar de tu manada, sin romper la armonía de tu hogar."
              : "We create functional, aesthetic and safe spaces that improve the cohabitation and wellbeing of your colony, without breaking the harmony of your home."}
          </p>

          {/* Three pillars */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto"
            style={{ marginTop: "44px", maxWidth: "780px" }}
          >
            {[
              {
                title: es ? "SEGURAS" : "SAFE",
                desc: es ? "Materiales resistentes y estructuras estables." : "Resistant materials and stable structures.",
              },
              {
                title: es ? "FUNCIONALES" : "FUNCTIONAL",
                desc: es
                  ? "Diseños que se adaptan a tu espacio y comportamiento."
                  : "Designs that adapt to your space and behavior.",
              },
              {
                title: es ? "ESTÉTICAS" : "AESTHETIC",
                desc: es ? "Piezas que complementan tu hogar con elegancia." : "Pieces that complement your home with elegance.",
              },
            ].map((p) => (
              <div key={p.title} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    fontSize: "11px",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "hsl(var(--gold))",
                  }}
                >
                  {p.title}
                </div>
                <div
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "13px",
                    color: "rgba(0,0,0,0.65)",
                    lineHeight: 1.6,
                    marginTop: "8px",
                  }}
                >
                  {p.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section heading kept */}
        <h2
          className="text-center mx-auto"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: "32px",
            maxWidth: "640px",
            marginTop: "72px",
            lineHeight: 1.2,
            color: "#000",
          }}
        >
          {es
            ? "Soluciones para la forma en que tus gatos realmente habitan."
            : "Solutions for the way your cats really live."}
        </h2>

        {/* 3 x 2 card grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ marginTop: "48px" }}
        >
          {solutions.map(({ image, title, desc }) => (
            <div
              key={title}
              className="overflow-hidden transition-transform duration-300 hover:-translate-y-1 group"
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              }}
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div style={{ padding: "24px" }}>
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    fontSize: "12px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#000",
                    lineHeight: 1.4,
                  }}
                >
                  {title}
                </div>
                <p
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "13px",
                    color: "rgba(0,0,0,0.65)",
                    lineHeight: 1.6,
                    marginTop: "10px",
                  }}
                >
                  {desc}
                </p>
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2"
                  style={{
                    marginTop: "18px",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "hsl(var(--gold))",
                  }}
                >
                  {es ? "VER MÁS" : "SEE MORE"} <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5 — CTA BAND */}
      <section
        className="text-center"
        style={{ backgroundColor: "hsl(var(--umber))", padding: "64px 24px" }}
      >
        <h2
          className="mx-auto"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: "36px",
            color: "hsl(var(--cream))",
            maxWidth: "640px",
            lineHeight: 1.2,
          }}
        >
          {es
            ? "Tu hogar ya tiene pistas. Nosotras te ayudamos a leerlas."
            : "Your home already has clues. We help you read them."}
        </h2>
        <p
          className="mx-auto"
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "15px",
            color: "rgba(237,227,209,0.7)",
            maxWidth: "520px",
            margin: "16px auto 0",
            lineHeight: 1.7,
          }}
        >
          {es
            ? "No necesitas saber exactamente qué pedir. Nosotras te ayudamos a entender qué necesita tu manada y cuál es el mejor punto de partida."
            : "You don't need to know exactly what to ask for. We help you understand what your colony needs and the best starting point."}
        </p>
        <div
          className="flex flex-wrap justify-center"
          style={{ marginTop: "36px", gap: "14px" }}
        >
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            style={{
              backgroundColor: "hsl(var(--gold))",
              color: "hsl(var(--near-black))",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              padding: "14px 28px",
              borderRadius: "2px",
            }}
          >
            {es ? "ENVÍANOS TU ESPACIO" : "SEND US YOUR SPACE"}
          </a>
          <Link
            to="/contacto"
            style={{
              border: "1px solid rgba(237,227,209,0.35)",
              color: "hsl(var(--beige))",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              padding: "14px 28px",
              borderRadius: "2px",
            }}
          >
            {es ? "QUIERO UN DIAGNÓSTICO GATIUM" : "I WANT A GATIUM DIAGNOSIS"}
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
