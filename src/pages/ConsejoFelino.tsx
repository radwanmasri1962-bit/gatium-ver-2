import { Link } from "react-router-dom";
import { Eye, Lightbulb, Pencil, Star, Cat } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import groupPhoto from "@/assets/cats/group-photo.jpg";
import ateneaMotion from "@/assets/cats/atenea-motion.jpg";
import anubisImg from "@/assets/cats/anubis.jpg";
import apoloImg from "@/assets/cats/apolo.jpg";
import aquilesImg from "@/assets/cats/aquiles.jpg";
import aresImg from "@/assets/cats/ares.jpg";
import aslanImg from "@/assets/cats/aslan.jpg";
import ateneaImg from "@/assets/cats/atenea.jpg";
import aragornImg from "@/assets/cats/aragorn.jpg";

const eyebrow: React.CSSProperties = {
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 700,
  fontSize: "10px",
  letterSpacing: "0.3em",
  textTransform: "uppercase",
  color: "hsl(var(--gold))",
};

const ConsejoFelino = () => {
  const { lang } = useLanguage();
  const es = lang === "es";

  const participate = [
    {
      Icon: Eye,
      title: es ? "OBSERVAN" : "THEY OBSERVE",
      quote: "Llevo 3 horas aquí arriba vigilando.\n\nTodo está bajo control.",
      author: "— ASLAN",
    },
    {
      Icon: Lightbulb,
      title: es ? "ANALIZAN" : "THEY ANALYZE",
      quote: "Esta repisa tiene 2 cm menos de lo que necesito.\n\nCompletamente inaceptable.",
      author: "— ARES",
    },
    {
      Icon: Pencil,
      title: es ? "ACONSEJAN" : "THEY ADVISE",
      quote: "Si no puedo escapar por arriba,\n\nel diseño está mal.",
      author: "— ARAGORN",
    },
  ];

  const cats = [
    {
      name: "ANUBIS",
      img: anubisImg,
      desc: es
        ? "Negro absoluto, mirada dorada. Silencioso y soberano. Prefiere las alturas y los espacios propios."
        : "Absolute black, golden gaze. Silent and sovereign. Prefers heights and his own spaces.",
    },
    {
      name: "APOLO",
      img: apoloImg,
      desc: es
        ? "Blanco inmaculado, ojos azules. Curioso y luminoso. Siempre en el centro de todo."
        : "Immaculate white, blue eyes. Curious and luminous. Always at the center of everything.",
    },
    {
      name: "AQUILES",
      img: aquilesImg,
      desc: es
        ? "Naranja intenso, espíritu libre. Se adueña del sofá y del cuarto con la misma calma."
        : "Intense orange, free spirit. Owns the sofa and the room with the same calm.",
    },
    {
      name: "ARES",
      img: aresImg,
      desc: es
        ? "Blanco y negro, carácter firme. Observa antes de actuar. Nunca pide permiso."
        : "Black and white, firm character. Observes before acting. Never asks permission.",
    },
    {
      name: "ASLAN",
      img: aslanImg,
      desc: es
        ? "Atigrado dorado, presencia tranquila. Le gusta el sol, la madera y los rincones con vista."
        : "Golden tabby, calm presence. Loves the sun, wood and corners with a view.",
    },
    {
      name: "ATENEA",
      img: ateneaImg,
      desc: es
        ? "Atigrada oscura, porte impecable. Seria, directa y dueña absoluta de su territorio."
        : "Dark tabby, impeccable bearing. Serious, direct and absolute owner of her territory.",
    },
    {
      name: "ARAGORN",
      img: aragornImg,
      desc: es
        ? "Atigrado robusto, carácter sereno. El guardián. Siempre sabe exactamente dónde estar."
        : "Robust tabby, serene character. The guardian. Always knows exactly where to be.",
    },
  ];

  const philosophy = [
    {
      Icon: Star,
      title: es ? "EXPERIENCIA REAL" : "REAL EXPERIENCE",
      desc: es
        ? "Convivimos con ellos y entendemos sus comportamientos."
        : "We live with them and understand their behaviors.",
    },
    {
      Icon: Eye,
      title: es ? "OBSERVACIÓN DIARIA" : "DAILY OBSERVATION",
      desc: es
        ? "Cada decisión de diseño nace de lo que ellos nos enseñan."
        : "Every design decision comes from what they teach us.",
    },
    {
      Icon: Pencil,
      title: es ? "DISEÑO CON PROPÓSITO" : "DESIGN WITH PURPOSE",
      desc: es
        ? "Creamos espacios que mejoran su bienestar y el de todos."
        : "We create spaces that improve their wellbeing and everyone's.",
    },
  ];

  return (
    <>
      {/* SECTION 1 — HERO */}
      <section
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ minHeight: "90vh", backgroundColor: "hsl(var(--cream))" }}
      >
        <div className="flex flex-col justify-center px-[18px] py-[48px] md:px-16 md:py-20">
          <div className="mx-auto md:mx-0 w-full" style={{ maxWidth: "520px" }}>
            <div style={eyebrow}>{es ? "CONSEJO FELINO" : "FELINE COUNCIL"}</div>
            <h1
              className="text-[30px] md:text-[52px]"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                color: "#000",
                lineHeight: 1.1,
                marginTop: "20px",
                maxWidth: "480px",
              }}
            >
              {es ? "Siete gatos. " : "Seven cats. "}
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  fontStyle: "italic",
                  color: "hsl(var(--gold))",
                  display: "block",
                }}
              >
                {es ? "Siete formas de habitar." : "Seven ways of living."}
              </span>
            </h1>
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "15px",
                color: "rgba(0,0,0,0.72)",
                maxWidth: "420px",
                marginTop: "20px",
                lineHeight: 1.7,
              }}
            >
              {es
                ? "El Consejo Felino no es un concepto inventado. Es el origen real del criterio GATIUM."
                : "The Feline Council is not an invented concept. It is the real origin of the GATIUM criterion."}
            </p>
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "14px",
                color: "rgba(0,0,0,0.65)",
                maxWidth: "420px",
                marginTop: "12px",
                lineHeight: 1.7,
              }}
            >
              {es
                ? "Cada gato de la manada habita distinto. Observarlos fue la base de todo lo que diseñamos."
                : "Each cat in the colony lives differently. Observing them was the basis of everything we design."}
            </p>
            <a
              href="#members"
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
              {es ? "CONOCE A NUESTRO CONSEJO →" : "MEET OUR COUNCIL →"}
            </a>
          </div>
        </div>
        <div className="w-full aspect-[16/9] md:aspect-auto md:h-full">
          <img
            src={groupPhoto}
            alt={es ? "Los 7 gatos juntos" : "The 7 cats together"}
            style={{ width: "100%", height: "100%", objectFit: "cover", aspectRatio: "16/9" }}
          />
        </div>
      </section>

      {/* SECTION 2 — HOW THE COUNCIL PARTICIPATES */}
      <section className="py-12 md:py-16 px-6 md:px-16" style={{ backgroundColor: "hsl(var(--cream))" }}>
        <div className="text-center" style={eyebrow}>
          {es ? "ASÍ PARTICIPA EL CONSEJO EN GATIUM" : "HOW THE COUNCIL PARTICIPATES IN GATIUM"}
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          style={{ marginTop: "48px" }}
        >
          {participate.map(({ Icon, title, quote, author }) => (
            <div
              key={title}
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
                padding: "32px",
                borderTop: "2px solid hsl(var(--gold))",
                boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
              }}
            >
              <div style={{ color: "hsl(var(--gold))", marginBottom: "16px" }}>
                <Icon size={40} strokeWidth={1.4} />
              </div>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: "14px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#000",
                }}
              >
                {title}
              </div>
              <p
                style={{
                  fontFamily: "'Playfair Display', 'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: "16px",
                  color: "#6B5744",
                  marginTop: "12px",
                  lineHeight: 1.6,
                  whiteSpace: "pre-line",
                }}
              >
                {quote}
              </p>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "hsl(var(--gold))",
                  marginTop: "12px",
                }}
              >
                {author}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3 — INSIGHT QUOTE BAND */}
      <section
        className="grid grid-cols-1 md:grid-cols-[45%_55%] gap-10 md:gap-0 py-12 md:py-16 px-6 md:px-16"
        style={{ backgroundColor: "hsl(var(--near-black))" }}
      >
        <div className="aspect-square w-full">
          <img
            src={ateneaMotion}
            alt="Atenea"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", aspectRatio: "1/1" }}
          />
        </div>
        <div className="flex flex-col justify-center md:pl-16">
          <div style={eyebrow}>{es ? "INSIGHT DEL CONSEJO" : "COUNCIL INSIGHT"}</div>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              fontStyle: "italic",
              fontSize: "28px",
              color: "hsl(var(--gold))",
              lineHeight: 1.4,
              marginTop: "16px",
              maxWidth: "480px",
            }}
          >
            {es
              ? "“No diseñamos para que se vea bonito. Diseñamos para que vivir juntos sea mejor.”"
              : "“We don't design for it to look pretty. We design so that living together is better.”"}
          </p>
          <div
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: "9px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(245,239,230,0.5)",
              marginTop: "20px",
            }}
          >
            {es ? "— Atenea, Ministra de Energía y Velocidad" : "— Atenea, Minister of Energy and Speed"}
          </div>
        </div>
      </section>

      {/* SECTION 4 — COUNCIL MEMBERS GRID */}
      <section
        id="members"
        className="py-12 md:py-16 px-6 md:px-16"
        style={{ backgroundColor: "hsl(var(--cream))" }}
      >
        <div className="text-center" style={eyebrow}>
          {es ? "CONSEJO FELINO" : "FELINE COUNCIL"}
        </div>
        <h2
          className="text-center"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            fontStyle: "italic",
            fontSize: "32px",
            color: "#000",
            marginTop: "12px",
            lineHeight: 1.2,
          }}
        >
          {es ? "Siete gatos. Siete formas de habitar." : "Seven cats. Seven ways of living."}
        </h2>
        <div
          className="overflow-x-auto"
          style={{ marginTop: "48px", scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
        >
          <div
            className="flex"
            style={{ gap: "20px", padding: "8px 24px 24px", width: "max-content" }}
          >
            {cats.map(({ name, img, desc }) => (
              <div
                key={name}
                className="transition-transform duration-300 hover:-translate-y-1"
                style={{
                  flex: "0 0 220px",
                  width: "220px",
                  scrollSnapAlign: "start",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "12px",
                  padding: "14px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                }}
              >
                <div
                  className="aspect-square"
                  style={{
                    marginBottom: "14px",
                    borderRadius: "8px",
                    overflow: "hidden",
                    backgroundColor: "hsl(var(--beige))",
                  }}
                >
                  <img
                    src={img}
                    alt={name}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 600,
                    fontSize: "24px",
                    color: "#000",
                    letterSpacing: "0.02em",
                  }}
                >
                  {name}
                </div>
                <p
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "12px",
                    color: "rgba(0,0,0,0.7)",
                    marginTop: "6px",
                    lineHeight: 1.55,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — PHILOSOPHY BAND */}
      <section
        className="grid grid-cols-1 md:grid-cols-4 gap-8"
        style={{ backgroundColor: "hsl(var(--near-black))", padding: "64px 24px" }}
      >
        {philosophy.map(({ Icon, title, desc }) => (
          <div key={title}>
            <div style={{ color: "hsl(var(--gold))", marginBottom: "14px" }}>
              <Icon size={32} strokeWidth={1.4} />
            </div>
            <div
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "12px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "hsl(var(--cream))",
              }}
            >
              {title}
            </div>
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "13px",
                color: "rgba(245,239,230,0.65)",
                marginTop: "10px",
                lineHeight: 1.6,
              }}
            >
              {desc}
            </p>
          </div>
        ))}
        <div
          className="text-center flex flex-col items-center justify-center"
          style={{
            backgroundColor: "hsl(var(--beige))",
            borderRadius: "8px",
            padding: "32px",
          }}
        >
          <div style={{ color: "hsl(var(--gold))", marginBottom: "16px" }}>
            <Cat size={40} strokeWidth={1.4} />
          </div>
          <div
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              color: "#000",
              lineHeight: 1.6,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            {es
              ? "EL CONSEJO FELINO ES EL CORAZÓN DE GATIUM. ELLOS NOS ENSEÑAN. NOSOTROS DISEÑAMOS."
              : "THE FELINE COUNCIL IS THE HEART OF GATIUM. THEY TEACH US. WE DESIGN."}
          </div>
        </div>
      </section>

      {/* SECTION 6 — BOTTOM CTA */}
      <section
        className="text-center py-12 md:py-16 px-6 md:px-16"
        style={{ backgroundColor: "hsl(var(--beige))" }}
      >
        <h2
          className="mx-auto"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: "34px",
            color: "#000",
            maxWidth: "640px",
            lineHeight: 1.2,
          }}
        >
          {es
            ? "No diseñamos para gatos imaginarios. Diseñamos desde una convivencia real."
            : "We don't design for imaginary cats. We design from real cohabitation."}
        </h2>
        <Link
          to="/#solutions"
          className="inline-flex"
          style={{
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
          {es ? "CONOCE NUESTRAS SOLUCIONES →" : "DISCOVER OUR SOLUTIONS →"}
        </Link>
      </section>
    </>
  );
};

export default ConsejoFelino;
