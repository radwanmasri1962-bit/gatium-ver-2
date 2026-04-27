import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";

const WHATSAPP = "https://wa.me/521XXXXXXXXXX";

const eyebrow: React.CSSProperties = {
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 700,
  fontSize: "10px",
  letterSpacing: "0.3em",
  textTransform: "uppercase",
  color: "hsl(var(--gold))",
};

// Icons
const IconShield = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M12 3 L20 6 V12 c0 5 -3 8 -8 9 c-5 -1 -8 -4 -8 -9 V6 z" />
  </svg>
);
const IconHouse = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M3 11 L12 4 L21 11 V20 H3 Z" />
  </svg>
);
const IconHeart = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M12 20 c-5-3 -8-6 -8-10 a4 4 0 0 1 8 -1 a4 4 0 0 1 8 1 c0 4 -3 7 -8 10 z" />
  </svg>
);

const IconCatio = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
    <rect x="5" y="9" width="22" height="18" />
    <path d="M5 9 L16 3 L27 9" />
    <path d="M10 9 V27 M16 9 V27 M22 9 V27 M5 15 H27 M5 21 H27" />
  </svg>
);
const IconWallRoute = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M5 26 V8 H12 V14 H20 V20 H27 V26" />
  </svg>
);
const IconArch = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M5 27 V16 a11 11 0 0 1 22 0 V27" />
    <path d="M5 27 H27" />
  </svg>
);
const IconFurniture = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
    <rect x="5" y="9" width="22" height="16" />
    <path d="M5 17 H27 M16 9 V25" />
  </svg>
);
const IconBox = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
    <rect x="5" y="10" width="22" height="16" />
    <circle cx="11" cy="18" r="2.5" />
  </svg>
);
const IconColony = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
    <circle cx="8" cy="14" r="3" />
    <circle cx="16" cy="14" r="3" />
    <circle cx="24" cy="14" r="3" />
    <path d="M5 25 L8 22 M13 25 L16 22 M21 25 L24 22" />
  </svg>
);
const IconCatLine = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M8 14 L6 8 L12 12 H24 L30 8 L28 14 V24 a6 6 0 0 1 -6 6 H14 a6 6 0 0 1 -6 -6 Z" />
    <circle cx="14" cy="20" r="1" fill="currentColor" />
    <circle cx="22" cy="20" r="1" fill="currentColor" />
    <path d="M16 25 L18 26 L20 25" />
  </svg>
);

const Soluciones = () => {
  const { lang } = useLanguage();
  const es = lang === "es";

  const cards = [
    {
      photo: es ? "FOTO: CATIO EXTERIOR CON GATO" : "PHOTO: OUTDOOR CATIO WITH CAT",
      Icon: IconCatio,
      title: es ? "CATIOS Y ESPACIOS EXTERIORES SEGUROS" : "SAFE OUTDOOR CATIOS",
      desc: es
        ? "Ambientes al aire libre protegidos que permiten explorar, tomar sol y observar sin riesgos."
        : "Protected outdoor environments that allow exploring, sunbathing and observing safely.",
    },
    {
      photo: es ? "FOTO: CIRCUITO DE PARED VERTICAL CON GATOS" : "PHOTO: VERTICAL WALL CIRCUIT WITH CATS",
      Icon: IconWallRoute,
      title: es ? "MUROS Y RECORRIDOS VERTICALES" : "WALLS AND VERTICAL ROUTES",
      desc: es
        ? "Diseños que aprovechan la altura para crear rutas, territorio y ejercicio saludable."
        : "Designs that use height to create routes, territory and healthy exercise.",
    },
    {
      photo: es ? "FOTO: ZONA DE DESCANSO Y REFUGIO FELINO" : "PHOTO: FELINE REST AND REFUGE ZONE",
      Icon: IconArch,
      title: es ? "ZONAS DE DESCANSO Y REFUGIO" : "REST AND REFUGE ZONES",
      desc: es
        ? "Espacios que brindan seguridad, privacidad y calma para descansar en paz."
        : "Spaces that provide security, privacy and calm to rest in peace.",
    },
    {
      photo: es ? "FOTO: MOBILIARIO FUNCIONAL INTEGRADO AL HOGAR" : "PHOTO: FUNCTIONAL FURNITURE INTEGRATED INTO HOME",
      Icon: IconFurniture,
      title: es ? "MOBILIARIO FUNCIONAL PARA CONVIVENCIA FELINA" : "FUNCTIONAL FELINE FURNITURE",
      desc: es
        ? "Piezas que se integran al hogar y facilitan el día a día de toda la manada."
        : "Pieces that integrate into the home and ease the daily life of the whole colony.",
    },
    {
      photo: es ? "FOTO: MUEBLE ARENERO DISCRETO" : "PHOTO: DISCREET LITTER BOX FURNITURE",
      Icon: IconBox,
      title: es ? "ARENEROS Y MUEBLES ARENERO" : "LITTER BOX FURNITURE",
      desc: es
        ? "Soluciones discretas y funcionales que mejoran la higiene y el orden del hogar."
        : "Discreet and functional solutions that improve hygiene and household order.",
    },
    {
      photo: es ? "FOTO: PROYECTO INTEGRAL PARA VARIOS GATOS" : "PHOTO: INTEGRAL PROJECT FOR MULTIPLE CATS",
      Icon: IconColony,
      title: es ? "DISEÑO INTEGRAL PARA MANADAS" : "INTEGRAL DESIGN FOR COLONIES",
      desc: es
        ? "Proyectos a medida que consideran la dinámica, personalidades y necesidades de todos."
        : "Custom projects that consider the dynamics, personalities and needs of all.",
    },
  ];

  const bullets = [
    {
      Icon: IconShield,
      title: es ? "SEGURAS" : "SAFE",
      desc: es ? "Materiales resistentes y estructuras estables." : "Resistant materials and stable structures.",
    },
    {
      Icon: IconHouse,
      title: es ? "FUNCIONALES" : "FUNCTIONAL",
      desc: es
        ? "Diseños que se adaptan a tu espacio y comportamiento."
        : "Designs that adapt to your space and behavior.",
    },
    {
      Icon: IconHeart,
      title: es ? "ESTÉTICAS" : "AESTHETIC",
      desc: es
        ? "Piezas que complementan tu hogar con elegancia."
        : "Pieces that complement your home with elegance.",
    },
  ];

  const steps = [
    {
      title: es ? "ESCUCHAMOS" : "WE LISTEN",
      desc: es
        ? "Nos cuentas cómo viven tus gatos y qué necesitan en su día a día."
        : "You tell us how your cats live and what they need daily.",
    },
    {
      title: es ? "OBSERVAMOS" : "WE OBSERVE",
      desc: es
        ? "Analizamos su comportamiento, la dinámica de la manada y el espacio disponible."
        : "We analyze their behavior, the colony's dynamics and the available space.",
    },
    {
      title: es ? "DISEÑAMOS" : "WE DESIGN",
      desc: es
        ? "Creamos propuestas funcionales, estéticas y personalizadas para su bienestar."
        : "We create functional, aesthetic and personalized proposals for their wellbeing.",
    },
    {
      title: es ? "FABRICAMOS" : "WE BUILD",
      desc: es
        ? "Producimos cada pieza con materiales de alta calidad y acabados impecables."
        : "We produce each piece with high quality materials and impeccable finishes.",
    },
    {
      title: es ? "TRANSFORMAMOS" : "WE TRANSFORM",
      desc: es
        ? "Instalamos y te acompañamos para que el cambio mejore su calidad de vida."
        : "We install and accompany you so the change improves their quality of life.",
    },
  ];

  return (
    <>
      {/* SECTION 1 — HERO */}
      <section
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ minHeight: "85vh", backgroundColor: "hsl(var(--cream))" }}
      >
        <div className="flex flex-col justify-center px-[18px] py-[48px] md:px-16 md:py-20">
          <div className="mx-auto md:mx-0 w-full" style={{ maxWidth: "520px" }}>
            <div style={eyebrow}>{es ? "SOLUCIONES" : "SOLUTIONS"}</div>
            <h1
              className="text-[30px] md:text-[52px]"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                color: "#000",
                lineHeight: 1.1,
                marginTop: "20px",
              }}
            >
              {es
                ? "Diseños que responden a la forma en que tus gatos realmente viven."
                : "Designs that respond to how your cats really live."}
            </h1>
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "15px",
                color: "rgba(0,0,0,0.72)",
                maxWidth: "440px",
                marginTop: "20px",
                lineHeight: 1.7,
              }}
            >
              {es
                ? "Creamos espacios funcionales, estéticos y seguros que mejoran la convivencia y el bienestar de tu manada, sin romper la armonía de tu hogar."
                : "We create functional, aesthetic and safe spaces that improve the cohabitation and wellbeing of your colony, without breaking the harmony of your home."}
            </p>
            <a
              href="#solutions-grid"
              style={{
                display: "inline-block",
                marginTop: "32px",
                backgroundColor: "#000",
                color: "hsl(var(--cream))",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                padding: "14px 28px",
                borderRadius: "2px",
              }}
            >
              {es ? "CONOCÉ NUESTRAS SOLUCIONES" : "EXPLORE OUR SOLUTIONS"}
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex-[7] min-h-[300px] md:min-h-0">
            <PhotoPlaceholder
              label={
                es
                  ? "FOTO: GATO EN CIRCUITO DE PARED, MADERA, LUZ NATURAL"
                  : "PHOTO: CAT ON WALL CIRCUIT, WOOD, NATURAL LIGHT"
              }
            />
          </div>
          <div
            className="flex-[3]"
            style={{
              backgroundColor: "hsl(var(--cream))",
              padding: "24px",
              borderLeft: "3px solid hsl(var(--gold))",
            }}
          >
            <div
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "8px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "hsl(var(--gold))",
              }}
            >
              {es
                ? "SOLUCIONES PENSADAS DESDE LA CONVIVENCIA REAL"
                : "SOLUTIONS DESIGNED FROM REAL COHABITATION"}
            </div>
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "12px",
                color: "rgba(0,0,0,0.65)",
                marginTop: "8px",
                lineHeight: 1.6,
              }}
            >
              {es
                ? "Cada pieza que diseñamos nace de la observación de las necesidades felinas reales: territorio, seguridad, descanso, movimiento, juego y calma."
                : "Each piece we design is born from observing real feline needs: territory, security, rest, movement, play and calm."}
            </p>
            <div className="flex flex-col gap-3 mt-4">
              {bullets.map(({ Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3">
                  <div style={{ color: "hsl(var(--gold))", marginTop: "2px" }}>
                    <Icon />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 700,
                        fontSize: "9px",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "#000",
                      }}
                    >
                      {title}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Open Sans', sans-serif",
                        fontSize: "11px",
                        color: "rgba(0,0,0,0.65)",
                        lineHeight: 1.5,
                        marginTop: "2px",
                      }}
                    >
                      {desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — SOLUTIONS GRID */}
      <section
        id="solutions-grid"
        className="section-padding"
        style={{ backgroundColor: "hsl(var(--cream))" }}
      >
        <div className="text-center" style={eyebrow}>
          {es ? "NUESTRAS SOLUCIONES" : "OUR SOLUTIONS"}
        </div>
        <h2
          className="text-center mx-auto"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: "36px",
            color: "#000",
            maxWidth: "560px",
            marginTop: "16px",
            lineHeight: 1.2,
          }}
        >
          {es ? "Cada solución, una respuesta real." : "Each solution, a real response."}
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ marginTop: "56px" }}
        >
          {cards.map(({ photo, Icon, title, desc }) => (
            <div
              key={title}
              className="overflow-hidden transition-transform duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              }}
            >
              <div className="aspect-[16/9]">
                <PhotoPlaceholder label={photo} />
              </div>
              <div style={{ padding: "20px" }}>
                <div style={{ color: "hsl(var(--gold))", marginBottom: "12px" }}>
                  <Icon />
                </div>
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    fontSize: "12px",
                    letterSpacing: "0.08em",
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
                    marginTop: "8px",
                  }}
                >
                  {desc}
                </p>
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2"
                  style={{
                    marginTop: "16px",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    fontSize: "9px",
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

      {/* SECTION 3 — COUNCIL QUOTE BAND */}
      <section
        className="grid grid-cols-1 md:grid-cols-[30%_40%_30%] gap-8 md:gap-0"
        style={{ backgroundColor: "hsl(var(--beige))", padding: "64px 24px" }}
      >
        <div className="aspect-[3/4]">
          <PhotoPlaceholder
            label={es ? "FOTO: GATO INDIVIDUAL, LUZ CÁLIDA" : "PHOTO: INDIVIDUAL CAT, WARM LIGHT"}
            dark
          />
        </div>
        <div className="flex flex-col justify-center md:px-10">
          <div style={eyebrow}>{es ? "INSIGHT DEL CONSEJO FELINO" : "FELINE COUNCIL INSIGHT"}</div>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              fontStyle: "italic",
              fontSize: "24px",
              color: "#000",
              lineHeight: 1.5,
              marginTop: "16px",
            }}
          >
            {es
              ? "“No se trata de llenar espacios, se trata de diseñar mejores rutas, refugios y oportunidades.”"
              : "“It's not about filling spaces, it's about designing better routes, refuges and opportunities.”"}
          </p>
          <div
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: "9px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "hsl(var(--gold))",
              marginTop: "16px",
            }}
          >
            {es
              ? "— Aragorn, Custodio de la Agilidad y las Rutas de Escape"
              : "— Aragorn, Guardian of Agility and Escape Routes"}
          </div>
        </div>
        <div
          className="flex flex-col justify-center"
          style={{
            backgroundColor: "hsl(var(--near-black))",
            borderRadius: "8px",
            padding: "32px",
          }}
        >
          <div style={{ color: "hsl(var(--gold))", marginBottom: "16px" }}>
            <IconCatLine />
          </div>
          <h3
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: "20px",
              color: "hsl(var(--cream))",
              lineHeight: 1.3,
            }}
          >
            {es
              ? "Cada hogar es único. Cada manada también."
              : "Every home is unique. Every colony too."}
          </h3>
          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "13px",
              color: "rgba(245,239,230,0.65)",
              marginTop: "12px",
              lineHeight: 1.6,
            }}
          >
            {es
              ? "Cuéntanos cómo viven tus gatos y diseñaremos soluciones a la medida de su mundo."
              : "Tell us how your cats live and we will design solutions tailored to their world."}
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center self-start"
            style={{
              marginTop: "20px",
              backgroundColor: "hsl(var(--gold))",
              color: "hsl(var(--near-black))",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: "9px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              padding: "12px 20px",
              borderRadius: "2px",
            }}
          >
            {es ? "ENVÍANOS TU ESPACIO →" : "SEND US YOUR SPACE →"}
          </a>
        </div>
      </section>

      {/* SECTION 4 — PROCESS PREVIEW */}
      <section className="section-padding" style={{ backgroundColor: "hsl(var(--cream))" }}>
        <div className="text-center" style={eyebrow}>
          {es ? "NUESTRO ENFOQUE" : "OUR APPROACH"}
        </div>
        <h2
          className="text-center mx-auto"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: "34px",
            color: "#000",
            maxWidth: "560px",
            marginTop: "16px",
            lineHeight: 1.2,
          }}
        >
          {es
            ? "Así creamos espacios que transforman la convivencia."
            : "This is how we create spaces that transform cohabitation."}
        </h2>
        <div
          className="flex flex-col md:flex-row md:items-start justify-center gap-6 md:gap-2"
          style={{ marginTop: "56px" }}
        >
          {steps.map((step, idx) => (
            <div key={step.title} className="flex md:flex-col items-center md:items-stretch gap-4 md:gap-0 flex-1">
              <div className="flex flex-col items-center text-center flex-1">
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    backgroundColor: "hsl(var(--gold))",
                    color: "hsl(var(--near-black))",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    fontSize: "12px",
                  }}
                >
                  {idx + 1}
                </div>
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#000",
                    marginTop: "12px",
                  }}
                >
                  {step.title}
                </div>
                <p
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "12px",
                    color: "rgba(0,0,0,0.65)",
                    lineHeight: 1.6,
                    marginTop: "8px",
                    maxWidth: "180px",
                  }}
                >
                  {step.desc}
                </p>
              </div>
              {idx < steps.length - 1 && (
                <div
                  className="hidden md:flex items-center justify-center"
                  style={{
                    color: "hsl(var(--gold))",
                    fontSize: "20px",
                    paddingTop: "8px",
                  }}
                >
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Soluciones;
