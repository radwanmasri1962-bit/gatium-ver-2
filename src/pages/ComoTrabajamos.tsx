import { Cat, Home, Shield, LayoutGrid } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import heroImg from "@/assets/majo-yani-drawing.jpg";

const eyebrow: React.CSSProperties = {
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 700,
  fontSize: "10px",
  letterSpacing: "0.3em",
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

const subText: React.CSSProperties = {
  fontFamily: "'Open Sans', sans-serif",
  fontSize: "14px",
  color: "rgba(0,0,0,0.65)",
  lineHeight: 1.7,
};

const PlaceholderGallery = ({ label }: { label: string }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
    {Array.from({ length: 10 }).map((_, i) => (
      <div
        key={i}
        className="w-full flex items-center justify-center"
        style={{
          aspectRatio: "4/3",
          backgroundColor: "#D6C8B4",
        }}
      >
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: "10px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "rgba(0,0,0,0.4)",
          }}
        >
          {label}
        </span>
      </div>
    ))}
  </div>
);

const GallerySection = ({
  bg,
  eyebrowText,
  title,
  subtext,
  placeholderLabel,
}: {
  bg: string;
  eyebrowText: string;
  title: string;
  subtext: string;
  placeholderLabel: string;
}) => (
  <section
    className="px-[20px] md:px-16 py-[80px] md:py-[120px]"
    style={{ backgroundColor: bg }}
  >
    <div className="max-w-[1400px] mx-auto">
      <div className="mb-12 md:mb-16 max-w-[760px]">
        <div style={eyebrow}>{eyebrowText}</div>
        <h2 className="mt-4" style={sectionTitle}>
          {title}
        </h2>
        <p className="mt-4" style={subText}>
          {subtext}
        </p>
      </div>
      <PlaceholderGallery label={placeholderLabel} />
    </div>
  </section>
);

const ComoTrabajamos = () => {
  const { lang } = useLanguage();
  const es = lang === "es";

  const placeholderLabel = es ? "Foto próximamente" : "Photo coming soon";

  const principles = [
    {
      Icon: Cat,
      title: es ? "EMPATÍA FELINA" : "FELINE EMPATHY",
      desc: es
        ? "Diseñamos desde la comprensión profunda de su comportamiento y necesidades."
        : "We design from a deep understanding of their behavior and needs.",
    },
    {
      Icon: Home,
      title: es ? "INTEGRACIÓN REAL" : "REAL INTEGRATION",
      desc: es
        ? "Creamos espacios que se integran al hogar sin romper su armonía."
        : "We create spaces that integrate into the home without breaking its harmony.",
    },
    {
      Icon: Shield,
      title: es ? "SEGURIDAD TOTAL" : "TOTAL SAFETY",
      desc: es
        ? "Cada solución prioriza la seguridad física y emocional de tu manada."
        : "Every solution prioritizes the physical and emotional safety of your colony.",
    },
    {
      Icon: LayoutGrid,
      title: es ? "DISEÑO HABITABLE" : "LIVABLE DESIGN",
      desc: es
        ? "Espacios que funcionan en la vida real: para ellos y para ti."
        : "Spaces that work in real life: for them and for you.",
    },
  ];

  return (
    <>
      {/* SECTION 1 — EMOTIONAL HERO */}
      <section className="relative w-full overflow-hidden" style={{ aspectRatio: "21/9" }}>
        <img
          src={heroImg}
          alt={es ? "Majo y Yani diseñando en el atelier GATIUM" : "Majo and Yani designing at the GATIUM atelier"}
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: "cover", objectPosition: "center center" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 100%)",
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-end items-center text-center px-[20px] pb-[8%]">
          <div style={{ ...eyebrow, color: "hsl(var(--gold))" }}>
            {es ? "CÓMO TRABAJAMOS" : "HOW WE WORK"}
          </div>
          <h1
            className="text-[32px] md:text-[56px] mt-5"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.1,
              maxWidth: "900px",
            }}
          >
            {es ? "Diseño que comienza observando." : "Design that begins by observing."}
          </h1>
        </div>
      </section>

      {/* SECTION 2 — PHILOSOPHY */}
      <section
        className="px-[20px] md:px-16 py-[80px] md:py-[120px]"
        style={{ backgroundColor: "hsl(var(--cream))" }}
      >
        <div className="mx-auto text-center" style={{ maxWidth: "680px" }}>
          <p style={{ ...bodyText, textAlign: "center" }}>
            {es
              ? "En GATIUM, cada proyecto comienza antes del diseño. Comenzamos observando: cómo se mueve tu gato, dónde descansa, cómo explora, cómo convive. Solo entonces diseñamos."
              : "At GATIUM, every project begins before the design. We start by observing: how your cat moves, where they rest, how they explore, how they live together. Only then do we design."}
          </p>
        </div>
      </section>

      {/* SECTION 3 — CATIOS */}
      <GallerySection
        bg="hsl(var(--beige))"
        eyebrowText="CATIOS"
        title={es ? "Cualquier espacio. Completamente personalizado." : "Any space. Completely customized."}
        subtext={
          es
            ? "Balcones pequeños, patios medianos, exteriores amplios — GATIUM adapta cada solución al espacio real de tu hogar."
            : "Small balconies, medium patios, large outdoor areas — GATIUM adapts every solution to the real space of your home."
        }
        placeholderLabel={placeholderLabel}
      />

      {/* SECTION 4 — CIRCUITOS */}
      <GallerySection
        bg="hsl(var(--cream))"
        eyebrowText={es ? "CIRCUITOS DE PARED" : "WALL CIRCUITS"}
        title={es ? "Movimiento vertical. Exploración instintiva." : "Vertical movement. Instinctive exploration."}
        subtext={
          es
            ? "Diseñamos circuitos que respetan el comportamiento felino — escalar, observar, recorrer."
            : "We design circuits that respect feline behavior — climb, observe, traverse."
        }
        placeholderLabel={placeholderLabel}
      />

      {/* SECTION 5 — MOBILIARIO */}
      <GallerySection
        bg="hsl(var(--beige))"
        eyebrowText={es ? "MOBILIARIO" : "FURNITURE"}
        title={es ? "Integrado al hogar. Pensado para ellos." : "Integrated into the home. Designed for them."}
        subtext={
          es
            ? "Lujo silencioso, materiales cálidos, convivencia funcional. Muebles que son parte del hogar, no un accesorio."
            : "Quiet luxury, warm materials, functional cohabitation. Furniture that is part of the home, not an accessory."
        }
        placeholderLabel={placeholderLabel}
      />

      {/* SECTION 6 — PRINCIPLES */}
      <section
        className="px-[20px] md:px-16 py-[100px] md:py-[140px]"
        style={{ backgroundColor: "hsl(var(--cream))" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <div style={eyebrow}>
              {es ? "ASÍ TRABAJAMOS, ASÍ DISEÑAMOS" : "HOW WE WORK, HOW WE DESIGN"}
            </div>
            <h2 className="mt-4 mx-auto" style={{ ...sectionTitle, maxWidth: "700px" }}>
              {es ? "Principios que guían cada decisión." : "Principles that guide every decision."}
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
            {principles.map(({ Icon, title, desc }) => (
              <div key={title} className="flex flex-col items-start">
                <div style={{ color: "hsl(var(--gold))" }}>
                  <Icon size={32} strokeWidth={1.2} />
                </div>
                <h3
                  className="mt-6"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    fontSize: "13px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#000",
                    lineHeight: 1.3,
                  }}
                >
                  {title}
                </h3>
                <p
                  className="mt-3"
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "14px",
                    color: "rgba(0,0,0,0.7)",
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
        className="px-[20px] md:px-16 py-[120px] md:py-[160px]"
        style={{ backgroundColor: "hsl(var(--near-black))" }}
      >
        <div className="max-w-[820px] mx-auto text-center">
          <h2
            className="text-[28px] md:text-[42px]"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              color: "hsl(var(--cream))",
              lineHeight: 1.2,
            }}
          >
            {es
              ? "Cada espacio comienza observando cómo vive tu gato."
              : "Every space begins by observing how your cat lives."}
          </h2>
          <p
            className="mt-6 mx-auto"
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "15px",
              color: "rgba(245,239,230,0.75)",
              lineHeight: 1.75,
              maxWidth: "560px",
            }}
          >
            {es
              ? "Envíanos tu espacio y diseñamos juntos la mejor versión para toda tu manada."
              : "Send us your space and together we design the best version for your whole colony."}
          </p>
          <Link to="/contacto" className="btn-gold inline-block mt-10">
            {es ? "QUIERO EMPEZAR CON UN DIAGNÓSTICO GATIUM →" : "I WANT TO START A GATIUM DIAGNOSIS →"}
          </Link>
        </div>
      </section>
    </>
  );
};

export default ComoTrabajamos;
