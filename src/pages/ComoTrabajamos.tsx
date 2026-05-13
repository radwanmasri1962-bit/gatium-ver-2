import {
  Cat,
  Home,
  Shield,
  LayoutGrid,
  MessageSquare,
  ClipboardList,
  PenTool,
  RefreshCw,
  Sparkles,
  ArrowRight,
  ArrowDown,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import heroImg from "@/assets/majo-yani-drawing.jpg";
import sketch1 from "@/assets/Como_Sketch_1.jpg";
import sketch2 from "@/assets/Como_Sketch_2.jpg";
import sketch3 from "@/assets/Como_Sketch_3.jpg";
import sketch4 from "@/assets/Como_Sketch_4.jpg";
import sketch5 from "@/assets/Como_Sketch_5.jpg";

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

const placeholderLabelStyle: React.CSSProperties = {
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 700,
  fontSize: "10px",
  letterSpacing: "0.25em",
  textTransform: "uppercase",
  color: "rgba(0,0,0,0.4)",
};

const PhotoPlaceholder = ({
  label,
  aspect = "4/3",
}: {
  label: string;
  aspect?: string;
}) => (
  <div
    className="w-full flex items-center justify-center"
    style={{ aspectRatio: aspect, backgroundColor: "#D6C8B4" }}
  >
    <span style={placeholderLabelStyle}>{label}</span>
  </div>
);

const ExpandedGrid = ({ label }: { label: string }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 pt-8">
    {Array.from({ length: 10 }).map((_, i) => (
      <PhotoPlaceholder key={i} label={label} />
    ))}
  </div>
);

const ComoTrabajamos = () => {
  const { lang } = useLanguage();
  const es = lang === "es";

  const placeholderLabel = es ? "FOTO PRÓXIMAMENTE" : "PHOTO COMING SOON";

  const steps = [
    {
      Icon: MessageSquare,
      img: sketch1,
      label: es ? "PASO 1" : "STEP 1",
      desc: es
        ? "Nos compartes tu espacio y tu dinámica."
        : "You share your space and dynamics with us.",
    },
    {
      Icon: ClipboardList,
      img: sketch2,
      label: es ? "PASO 2" : "STEP 2",
      desc: es
        ? "Realizamos un Diagnóstico GATIUM."
        : "We perform a GATIUM Diagnosis.",
    },
    {
      Icon: PenTool,
      img: sketch3,
      label: es ? "PASO 3" : "STEP 3",
      desc: es
        ? "Diseñamos una propuesta personalizada."
        : "We design a personalized proposal.",
    },
    {
      Icon: RefreshCw,
      img: sketch4,
      label: es ? "PASO 4" : "STEP 4",
      desc: es ? "Refinamos la propuesta contigo." : "We refine the proposal with you.",
    },
    {
      Icon: Sparkles,
      img: sketch5,
      label: es ? "PASO 5" : "STEP 5",
      desc: es
        ? "Convertimos la idea en una solución habitable."
        : "We turn the idea into a livable solution.",
    },
  ];

  const categories = [
    {
      key: "catios",
      bg: "hsl(var(--beige))",
      title: "CATIOS",
      subtext: es
        ? "Balcones pequeños, patios medianos, exteriores amplios — GATIUM adapta cada solución al espacio real de tu hogar."
        : "Small balconies, medium patios, large outdoor areas — GATIUM adapts every solution to the real space of your home.",
    },
    {
      key: "circuitos",
      bg: "hsl(var(--cream))",
      title: es ? "CIRCUITOS DE PARED" : "WALL CIRCUITS",
      subtext: es
        ? "Diseñamos circuitos que respetan el comportamiento felino — escalar, observar, recorrer."
        : "We design circuits that respect feline behavior — climb, observe, traverse.",
    },
    {
      key: "mobiliario",
      bg: "hsl(var(--beige))",
      title: es ? "MOBILIARIO" : "FURNITURE",
      subtext: es
        ? "Lujo silencioso, materiales cálidos, convivencia funcional. Muebles que son parte del hogar, no un accesorio."
        : "Quiet luxury, warm materials, functional cohabitation. Furniture that is part of the home, not an accessory.",
    },
  ];

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
        className="px-[20px] md:px-16 py-[24px] md:py-[36px] overflow-x-auto"
        style={{ backgroundColor: "hsl(var(--cream))" }}
      >
        <div className="mx-auto text-center">
          <p style={{ ...bodyText, fontSize: "1.25rem", textAlign: "center", whiteSpace: "nowrap" }}>
            {es
              ? "En GATIUM, cada proyecto comienza antes del diseño. Comenzamos observando: cómo se mueve tu gato, dónde descansa, cómo explora, cómo convive. Solo entonces diseñamos."
              : "At GATIUM, every project begins before the design. We start by observing: how your cat moves, where they rest, how they explore, how they live together. Only then do we design."}
          </p>
        </div>
      </section>

      {/* SECTION 3 — PROCESS TIMELINE */}
      <section
        className="px-[20px] md:px-16 py-[80px] md:py-[120px]"
        style={{ backgroundColor: "hsl(var(--beige))" }}
      >
        <div className="max-w-[1400px] mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 md:mb-20">
            <div style={eyebrow}>{es ? "NUESTRO PROCESO" : "OUR PROCESS"}</div>
            <h2 className="mt-4 mx-auto" style={{ ...sectionTitle, maxWidth: "800px" }}>
              {es ? "Un proceso pensado para ellos. Hecho para ti." : "A process designed for them. Made for you."}
            </h2>
          </div>
          {/* Desktop horizontal timeline */}
          <div className="hidden md:flex items-start justify-between gap-4">
            {steps.map(({ Icon, img, label, desc }, idx) => (
              <div key={label} className="flex items-start" style={{ flex: idx === steps.length - 1 ? "0 1 auto" : "1 1 0" }}>
                <div className="flex flex-col items-center text-center" style={{ width: "180px" }}>
                  {/* Numbered circle */}
                  <div
                    className="flex items-center justify-center rounded-full"
                    style={{
                      width: 48,
                      height: 48,
                      backgroundColor: "hsl(var(--gold))",
                      color: "#fff",
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 700,
                      fontSize: "16px",
                    }}
                  >
                    {idx + 1}
                  </div>
                  {/* Tall image placeholder */}
                  <div className="w-full mt-6">
                    <PhotoPlaceholder label={placeholderLabel} aspect="3/4" />
                  </div>
                  {/* Step icon */}
                  <div className="mt-6" style={{ color: "hsl(var(--gold))" }}>
                    <Icon size={26} strokeWidth={1.2} />
                  </div>
                  {/* Step label */}
                  <div
                    className="mt-3"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 700,
                      fontSize: "13px",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#000",
                    }}
                  >
                    {label}
                  </div>
                  {/* Step description */}
                  <p
                    className="mt-2"
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "14px",
                      color: "rgba(0,0,0,0.7)",
                      lineHeight: 1.6,
                    }}
                  >
                    {desc}
                  </p>
                </div>
                {/* Arrow connector */}
                {idx < steps.length - 1 && (
                  <div
                    className="flex items-center justify-center flex-1"
                    style={{ height: 48, color: "hsl(var(--gold))" }}
                  >
                    <ArrowRight size={28} strokeWidth={1.4} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile vertical timeline */}
          <div className="md:hidden flex flex-col items-center">
            {steps.map(({ Icon, label, desc }, idx) => (
              <div key={label} className="w-full flex flex-col items-center">
                <div className="flex flex-col items-center text-center w-full max-w-[320px]">
                  <div
                    className="flex items-center justify-center rounded-full"
                    style={{
                      width: 48,
                      height: 48,
                      backgroundColor: "hsl(var(--gold))",
                      color: "#fff",
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 700,
                      fontSize: "16px",
                    }}
                  >
                    {idx + 1}
                  </div>
                  <div className="w-full mt-6">
                    <PhotoPlaceholder label={placeholderLabel} aspect="3/4" />
                  </div>
                  <div className="mt-6" style={{ color: "hsl(var(--gold))" }}>
                    <Icon size={26} strokeWidth={1.2} />
                  </div>
                  <div
                    className="mt-3"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 700,
                      fontSize: "13px",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#000",
                    }}
                  >
                    {label}
                  </div>
                  <p
                    className="mt-2"
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "14px",
                      color: "rgba(0,0,0,0.7)",
                      lineHeight: 1.6,
                    }}
                  >
                    {desc}
                  </p>
                </div>
                {idx < steps.length - 1 && (
                  <div className="my-8" style={{ color: "hsl(var(--gold))" }}>
                    <ArrowDown size={28} strokeWidth={1.4} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTIONS 4–6 — CATEGORY ACCORDIONS */}
      <Accordion type="single" collapsible>
        {categories.map((cat) => (
          <AccordionItem
            key={cat.key}
            value={cat.key}
            className="border-0"
            style={{ backgroundColor: cat.bg }}
          >
            <section className="px-[20px] md:px-16 py-[80px] md:py-[120px]">
              <div className="max-w-[1400px] mx-auto">
                <AccordionTrigger className="hover:no-underline p-0 [&>svg]:hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center w-full text-left">
                    {/* Left: square image */}
                    <div className="w-full">
                      <PhotoPlaceholder label={placeholderLabel} aspect="1/1" />
                    </div>
                    {/* Right: title + subtext + CTA */}
                    <div>
                      <h2 style={sectionTitle}>{cat.title}</h2>
                      <p className="mt-5" style={subText}>
                        {cat.subtext}
                      </p>
                      <div
                        className="mt-6 inline-block"
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: 700,
                          fontSize: "12px",
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          color: "hsl(var(--gold))",
                        }}
                      >
                        {es ? "Ver proyectos →" : "View projects →"}
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ExpandedGrid label={placeholderLabel} />
                </AccordionContent>
              </div>
            </section>
          </AccordionItem>
        ))}
      </Accordion>

      {/* SECTION 7 — PRINCIPLES */}
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

      {/* SECTION 8 — FINAL CTA */}
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
