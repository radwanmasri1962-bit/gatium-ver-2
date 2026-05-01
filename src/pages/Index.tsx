import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

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
      title: es ? "Catios y espacios exteriores seguros" : "Safe outdoor catios",
      desc: es
        ? "Libertad controlada para explorar, tomar sol y observar."
        : "Controlled freedom to explore, sunbathe and observe.",
    },
    {
      Icon: IconVertical,
      title: es ? "Muros y recorridos verticales" : "Wall circuits and vertical routes",
      desc: es
        ? "Altura, circulación y territorio en equilibrio."
        : "Height, circulation and territory in balance.",
    },
    {
      Icon: IconArch,
      title: es ? "Zonas de descanso y refugio" : "Rest zones and refuges",
      desc: es ? "Espacios que brindan seguridad y calma." : "Spaces that provide security and calm.",
    },
    {
      Icon: IconFurniture,
      title: es ? "Mobiliario funcional para convivencia felina" : "Functional feline furniture",
      desc: es
        ? "Diseño que se integra al hogar y facilita el día a día."
        : "Design that integrates into the home and eases daily life.",
    },
    {
      Icon: IconBox,
      title: es ? "Areneros y muebles arenero" : "Litter box furniture",
      desc: es
        ? "Soluciones discretas y funcionales que mejoran la higiene."
        : "Discreet and functional solutions that improve hygiene.",
    },
    {
      Icon: IconColony,
      title: es ? "Diseño integral para manadas" : "Integral design for colonies",
      desc: es
        ? "Proyectos a medida que consideran la dinámica de todos."
        : "Custom projects that consider the dynamics of all.",
    },
  ];

  const cats = ["ASLAN", "ARES", "ARAGORN", "APOLO", "AQUILES", "ANUBIS", "ATENEA"];

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
            <div className="flex flex-wrap" style={{ marginTop: "36px", gap: "12px" }}>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                style={{
                  ...primaryBtn,
                  backgroundColor: "hsl(var(--gold))",
                  color: "hsl(var(--near-black))",
                }}
              >
                {es ? "ENVÍANOS TU ESPACIO" : "SEND US YOUR SPACE"}
              </a>
              <Link
                to="/soluciones"
                style={{
                  ...secondaryBtn,
                  border: "1px solid rgba(245,239,230,0.5)",
                  color: "hsl(var(--cream))",
                }}
              >
                {es ? "CONOCE NUESTRAS SOLUCIONES" : "EXPLORE OUR SOLUTIONS"}
              </Link>
            </div>
          </div>
        </div>
      </HeroCarousel>


      {/* SECTION 2 — BRAND TEASER */}
      <section
        className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 section-padding"
        style={{ backgroundColor: "hsl(var(--cream))" }}
      >
        <div className="aspect-[4/3]">
          <PhotoPlaceholder label={es ? "FOTO: MAJO Y YANI CON SUS GATOS" : "PHOTO: MAJO AND YANI WITH THEIR CATS"} />
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

      {/* SECTION 3 — SOLUTIONS OVERVIEW */}
      <section className="section-padding" style={{ backgroundColor: "hsl(var(--cream))" }}>
        <div className="text-center" style={eyebrowStyle}>
          {es ? "DISEÑAMOS DESDE LA NECESIDAD REAL" : "DESIGNED FROM REAL NEED"}
        </div>
        <h2
          className="text-center mx-auto"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: "38px",
            maxWidth: "640px",
            marginTop: "16px",
            lineHeight: 1.2,
            color: "#000",
          }}
        >
          {es
            ? "Soluciones para la forma en que tus gatos realmente habitan."
            : "Solutions for the way your cats really live."}
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"
          style={{ marginTop: "56px" }}
        >
          {solutions.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="group flex flex-col items-start"
              style={{
                paddingBottom: "16px",
                borderBottom: "1px solid transparent",
                transition: "border-color 250ms ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderBottomColor = "hsl(var(--gold))")
              }
              onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = "transparent")}
            >
              <div style={{ color: "hsl(var(--gold))" }}>
                <Icon />
              </div>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: "12px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#000",
                  marginTop: "14px",
                  lineHeight: 1.3,
                }}
              >
                {title}
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
                {desc}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: "48px" }}>
          <Link to="/soluciones" style={goldLinkStyle}>
            {es ? "EXPLORA NUESTRAS SOLUCIONES" : "EXPLORE OUR SOLUTIONS"} <span>→</span>
          </Link>
        </div>
      </section>

      {/* SECTION 4 — FELINE COUNCIL TEASER */}
      <section
        className="grid grid-cols-1 md:grid-cols-[45%_55%] gap-12 md:gap-16 section-padding"
        style={{ backgroundColor: "hsl(var(--near-black))" }}
      >
        <div className="flex flex-col justify-center">
          <div style={eyebrowStyle}>
            {es ? "EL CONSEJO FELINO" : "THE FELINE COUNCIL"}
          </div>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: "38px",
              color: "hsl(var(--cream))",
              marginTop: "12px",
              lineHeight: 1.15,
            }}
          >
            {es
              ? "Siete miradas. Siete formas de habitar. Un mismo hogar."
              : "Seven gazes. Seven ways of living. One home."}
          </h2>
          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "15px",
              color: "rgba(245,239,230,0.65)",
              marginTop: "16px",
              lineHeight: 1.75,
            }}
          >
            {es
              ? "El Consejo Felino no es un concepto inventado. Es el sistema de observación que dio origen al criterio GATIUM."
              : "The Feline Council is not an invented concept. It is the observation system that gave rise to the GATIUM criterion."}
          </p>
          <Link to="/consejo-felino" style={{ ...goldLinkStyle, marginTop: "24px" }}>
            {es ? "CONOCE AL CONSEJO" : "MEET THE COUNCIL"} <span>→</span>
          </Link>
        </div>

        <div
          className="flex gap-6 overflow-x-auto pb-2"
          style={{ scrollbarWidth: "thin" }}
        >
          {cats.map((name) => (
            <div key={name} className="flex flex-col items-center flex-shrink-0">
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  backgroundColor: "#2C2420",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  color: "rgba(196,154,90,0.4)",
                  fontSize: "12px",
                }}
              >
                ©
              </div>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: "9px",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "rgba(196,154,90,0.7)",
                  marginTop: "12px",
                }}
              >
                {name}
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
