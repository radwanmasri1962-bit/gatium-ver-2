import { Link } from "react-router-dom";
import { Eye, Lightbulb, Pencil, Crown, ArrowRight, Shield, PawPrint, Moon, Zap, Star, Cat } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";

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
      desc: es
        ? "Viven, exploran y prueban cada rincón del hogar."
        : "They live, explore and test every corner of the home.",
    },
    {
      Icon: Lightbulb,
      title: es ? "ANALIZAN" : "THEY ANALYZE",
      desc: es ? "Identifican necesidades reales de los gatos." : "They identify real feline needs.",
    },
    {
      Icon: Pencil,
      title: es ? "ACONSEJAN" : "THEY ADVISE",
      desc: es
        ? "Guían cada diseño para crear espacios funcionales y armoniosos."
        : "They guide each design to create functional and harmonious spaces.",
    },
  ];

  const cats = [
    {
      name: "ASLAN",
      role: es ? "Guardián del Territorio" : "Territory Guardian",
      desc: es
        ? "Observación, refugio y control visual. Aslan nos enseñó que cada espacio necesita un punto de mando."
        : "Observes, protects and ensures every space has its purpose.",
      keywords: es ? "Territorio · Observación · Refugio" : "Territory · Observation · Refuge",
      Icon: Eye,
    },
    {
      name: "ARES",
      role: es ? "Maestro del Confort" : "Master of Comfort and Accessibility",
      desc: es
        ? "Descanso, ergonomía y accesos amables. Ares nos enseñó que el confort también se diseña."
        : "Believes in deep rest and comfortable access for all cats.",
      keywords: es ? "Confort · Accesibilidad · Bienestar" : "Comfort · Accessibility · Wellbeing",
      Icon: Crown,
    },
    {
      name: "ARAGORN",
      role: es ? "Custodio de las Rutas" : "Custodian of Agility and Escape Routes",
      desc: es
        ? "Alturas, rutas seguras y fluidez. Aragorn nos enseñó que el movimiento necesita estructura."
        : "Designs safe and fluid paths to move freely.",
      keywords: es ? "Rutas · Fluidez · Escape" : "Routes · Fluidity · Escape",
      Icon: ArrowRight,
    },
    {
      name: "APOLO",
      role: es ? "Inspector de Seguridad" : "Security and Freedom Inspector",
      desc: es
        ? "Escalada segura y libertad con límites. Apolo nos enseñó que el diseño debe ser realmente funcional."
        : "Validates heights, structures and limits so freedom is safe.",
      keywords: es ? "Seguridad · Libertad · Validación" : "Security · Freedom · Validation",
      Icon: Shield,
    },
    {
      name: "AQUILES",
      role: es ? "Embajador del Juego" : "Ambassador of Play and Exploration",
      desc: es
        ? "Movimiento, exploración y estímulo. Aquiles nos enseñó que jugar también es una necesidad."
        : "Promotes play, curiosity and daily stimulation.",
      keywords: es ? "Juego · Exploración · Estímulo" : "Play · Exploration · Stimulation",
      Icon: PawPrint,
    },
    {
      name: "ANUBIS",
      role: es ? "Guardián de la Calma" : "Guardian of Regulation and Calm",
      desc: es
        ? "Contención, suavidad y descanso. Anubis nos enseñó que reducir el estrés también se diseña."
        : "Cares for emotional balance and calm spaces.",
      keywords: es
        ? "Calma · Contención · Bienestar emocional"
        : "Calm · Containment · Emotional wellbeing",
      Icon: Moon,
    },
    {
      name: "ATENEA",
      role: es ? "Ministra de Energía" : "Minister of Energy, Speed and Performance",
      desc: es
        ? "Verticalidad, resistencia y alto rendimiento. Atenea nos enseñó que algunos gatos necesitan más."
        : "Elevates design for active and high-performance cats.",
      keywords: es ? "Energía · Velocidad · Rendimiento" : "Energy · Speed · Performance",
      Icon: Zap,
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
        <div className="aspect-[16/9] md:aspect-auto md:h-full">
          <PhotoPlaceholder
            label={
              es
                ? "FOTO: LOS 7 GATOS JUNTOS EN MOBILIARIO DE MADERA"
                : "PHOTO: THE 7 CATS TOGETHER ON WOODEN FURNITURE"
            }
            dark
          />
        </div>
      </section>

      {/* SECTION 2 — HOW THE COUNCIL PARTICIPATES */}
      <section className="section-padding" style={{ backgroundColor: "hsl(var(--cream))" }}>
        <div className="text-center" style={eyebrow}>
          {es ? "ASÍ PARTICIPA EL CONSEJO EN GATIUM" : "HOW THE COUNCIL PARTICIPATES IN GATIUM"}
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          style={{ marginTop: "48px" }}
        >
          {participate.map(({ Icon, title, desc }) => (
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
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "14px",
                  color: "rgba(0,0,0,0.65)",
                  marginTop: "10px",
                  lineHeight: 1.6,
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3 — INSIGHT QUOTE BAND */}
      <section
        className="grid grid-cols-1 md:grid-cols-[45%_55%] gap-10 md:gap-0 section-padding"
        style={{ backgroundColor: "hsl(var(--near-black))" }}
      >
        <div className="aspect-[4/3]">
          <PhotoPlaceholder
            label={
              es
                ? "FOTO: GATO INDIVIDUAL CONTEMPLATIVO, LUZ CÁLIDA"
                : "PHOTO: CONTEMPLATIVE INDIVIDUAL CAT, WARM LIGHT"
            }
            dark
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
        className="section-padding"
        style={{ backgroundColor: "hsl(var(--cream))" }}
      >
        <div className="text-center" style={eyebrow}>
          {es ? "LOS MIEMBROS DEL CONSEJO" : "COUNCIL MEMBERS"}
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-5"
          style={{ marginTop: "48px" }}
        >
          {cats.map(({ name, role, desc, keywords, Icon }) => (
            <div
              key={name}
              className="transition-transform duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
                padding: "20px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              }}
            >
              <div className="aspect-square" style={{ marginBottom: "14px", borderRadius: "4px", overflow: "hidden" }}>
                <PhotoPlaceholder label={name} />
              </div>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: "15px",
                  color: "#000",
                }}
              >
                {name}
              </div>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: "8px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "hsl(var(--gold))",
                  marginTop: "4px",
                  lineHeight: 1.4,
                }}
              >
                {role}
              </div>
              <p
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "12px",
                  color: "rgba(0,0,0,0.65)",
                  marginTop: "10px",
                  lineHeight: 1.6,
                }}
              >
                {desc}
              </p>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontSize: "8px",
                  color: "hsl(var(--gold))",
                  marginTop: "10px",
                  letterSpacing: "0.05em",
                }}
              >
                {keywords}
              </div>
              <div style={{ color: "hsl(var(--gold))", marginTop: "14px" }}>
                <Icon size={24} strokeWidth={1.4} />
              </div>
            </div>
          ))}
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
        className="text-center section-padding"
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
