import { Link } from "react-router-dom";
import {
  MessageCircle,
  Eye,
  Pencil,
  Hammer,
  Heart,
  Cat,
  Shield,
  Home,
  Leaf,
  Users,
} from "lucide-react";
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

const ComoTrabajamos = () => {
  const { lang } = useLanguage();
  const es = lang === "es";

  const steps = [
    {
      photo: es ? "FOTO: CONVERSACIÓN, ESCUCHA ACTIVA" : "PHOTO: CONVERSATION, ACTIVE LISTENING",
      Icon: MessageCircle,
      title: es ? "ESCUCHAMOS" : "WE LISTEN",
      desc: es
        ? "Conocemos tu hogar, tu manada y sus rutinas. Te escuchamos para entender qué necesitan realmente."
        : "We get to know your home, your colony and their routines. We listen to understand what they really need.",
    },
    {
      photo: es ? "FOTO: GATO SIENDO OBSERVADO EN SU ESPACIO" : "PHOTO: CAT BEING OBSERVED IN ITS SPACE",
      Icon: Eye,
      title: es ? "OBSERVAMOS" : "WE OBSERVE",
      desc: es
        ? "Observamos comportamientos, interacciones y dinámicas para identificar oportunidades de mejora y bienestar."
        : "We observe behaviors, interactions and dynamics to identify opportunities for improvement and wellbeing.",
    },
    {
      photo: es ? "FOTO: PLANOS DE DISEÑO, BOCETOS" : "PHOTO: DESIGN PLANS, SKETCHES",
      Icon: Pencil,
      title: es ? "DISEÑAMOS" : "WE DESIGN",
      desc: es
        ? "Creamos propuestas personalizadas que integran estética, funcionalidad y esencia felina."
        : "We create personalized proposals that integrate aesthetics, functionality and feline essence.",
    },
    {
      photo: es ? "FOTO: FABRICACIÓN, MADERA, MANOS TRABAJANDO" : "PHOTO: BUILDING, WOOD, HANDS WORKING",
      Icon: Hammer,
      title: es ? "FABRICAMOS E INSTALAMOS" : "WE BUILD AND INSTALL",
      desc: es
        ? "Materializamos cada pieza con calidad y detalle, instalando soluciones seguras y duraderas en tu hogar."
        : "We materialize each piece with quality and detail, installing safe and durable solutions in your home.",
    },
    {
      photo: es ? "FOTO: GATO DISFRUTANDO EL NUEVO ESPACIO" : "PHOTO: CAT ENJOYING THE NEW SPACE",
      Icon: Heart,
      title: es ? "ACOMPAÑAMOS" : "WE ACCOMPANY",
      desc: es
        ? "Te acompañamos en el proceso de adaptación y estamos siempre disponibles para seguir mejorando."
        : "We accompany you through the adaptation process and are always available to keep improving.",
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
      Icon: Shield,
      title: es ? "SEGURIDAD TOTAL" : "TOTAL SAFETY",
      desc: es
        ? "Cada solución prioriza la seguridad física y emocional de tu manada."
        : "Each solution prioritizes the physical and emotional safety of your colony.",
    },
    {
      Icon: Home,
      title: es ? "INTEGRACIÓN REAL" : "REAL INTEGRATION",
      desc: es
        ? "Creamos espacios que se integran al hogar sin romper su armonía."
        : "We create spaces that integrate into the home without breaking its harmony.",
    },
    {
      Icon: Leaf,
      title: es ? "MATERIALES CONSCIENTES" : "CONSCIOUS MATERIALS",
      desc: es
        ? "Seleccionamos materiales duraderos, responsables y amigables con todos."
        : "We select durable, responsible and friendly materials for everyone.",
    },
    {
      Icon: Users,
      title: es ? "ACOMPAÑAMIENTO" : "ACCOMPANIMENT",
      desc: es
        ? "No solo diseñamos y entregamos: caminamos contigo en todo el proceso."
        : "We don't just design and deliver: we walk with you through the whole process.",
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
            <div style={eyebrow}>{es ? "CÓMO TRABAJAMOS" : "HOW WE WORK"}</div>
            <h1
              className="text-[30px] md:text-[50px]"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                color: "#000",
                lineHeight: 1.1,
                marginTop: "20px",
                maxWidth: "480px",
              }}
            >
              {es
                ? "Diseñamos espacios que respetan su naturaleza y transforman tu hogar."
                : "We design spaces that respect their nature and transform your home."}
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
                ? "Nuestro proceso combina observación, sensibilidad felina y diseño funcional para crear soluciones a medida que mejoran la convivencia y el bienestar de toda la manada."
                : "Our process combines observation, feline sensitivity and functional design to create tailored solutions that improve cohabitation and wellbeing."}
            </p>
            <a
              href="#process"
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
              {es ? "CONOCE NUESTRO PROCESO →" : "LEARN OUR PROCESS →"}
            </a>
          </div>
        </div>
        <div className="aspect-[16/9] md:aspect-auto md:h-full">
          <PhotoPlaceholder
            label={
              es
                ? "FOTO: GATO OBSERVANDO PLANOS DE DISEÑO EN MESA"
                : "PHOTO: CAT OBSERVING DESIGN PLANS ON TABLE"
            }
            dark
          />
        </div>
      </section>

      {/* SECTION 2 — PROCESS STEPS */}
      <section id="process" className="section-padding" style={{ backgroundColor: "hsl(var(--cream))" }}>
        <div className="text-center" style={eyebrow}>
          {es ? "NUESTRO PROCESO" : "OUR PROCESS"}
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
          {es ? "Un proceso pensado para ellos. Hecho para ti." : "A process designed for them. Made for you."}
        </h2>
        <div
          className="flex flex-col md:flex-row md:items-stretch justify-center gap-8 md:gap-3"
          style={{ marginTop: "56px" }}
        >
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className="flex md:flex-col flex-1 md:items-stretch items-start gap-3 md:gap-0"
            >
              <div className="flex-1 flex flex-col">
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "hsl(var(--gold))",
                    color: "hsl(var(--near-black))",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    fontSize: "16px",
                    marginBottom: "16px",
                  }}
                >
                  {idx + 1}
                </div>
                <div
                  className="aspect-[4/3] w-full overflow-hidden"
                  style={{ borderRadius: "6px", marginBottom: "14px" }}
                >
                  <PhotoPlaceholder label={step.photo} />
                </div>
                <div style={{ color: "hsl(var(--gold))", marginBottom: "10px" }}>
                  <step.Icon size={32} strokeWidth={1.4} />
                </div>
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    fontSize: "10px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#000",
                  }}
                >
                  {step.title}
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
                  {step.desc}
                </p>
              </div>
              {idx < steps.length - 1 && (
                <div
                  className="hidden md:flex items-center justify-center"
                  style={{ color: "hsl(var(--gold))", fontSize: "24px", paddingTop: "12px" }}
                >
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3 — PRINCIPLES */}
      <section className="section-padding" style={{ backgroundColor: "hsl(var(--beige))" }}>
        <div className="text-center" style={eyebrow}>
          {es ? "ASÍ TRABAJAMOS, ASÍ DISEÑAMOS" : "HOW WE WORK, HOW WE DESIGN"}
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
          {es ? "Principios que guían cada decisión." : "Principles that guide every decision."}
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
          style={{ marginTop: "56px" }}
        >
          {principles.map(({ Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-start">
              <div style={{ color: "hsl(var(--gold))" }}>
                <Icon size={36} strokeWidth={1.4} />
              </div>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: "10px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#000",
                  marginTop: "14px",
                }}
              >
                {title}
              </div>
              <p
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "13px",
                  color: "rgba(0,0,0,0.65)",
                  marginTop: "8px",
                  lineHeight: 1.6,
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — COMMITMENT */}
      <section
        className="grid grid-cols-1 md:grid-cols-[35%_30%_35%] gap-10 md:gap-8 section-padding"
        style={{ backgroundColor: "hsl(var(--cream))" }}
      >
        <div className="flex flex-col justify-center">
          <div style={eyebrow}>{es ? "NUESTRO COMPROMISO" : "OUR COMMITMENT"}</div>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: "34px",
              color: "#000",
              marginTop: "12px",
              lineHeight: 1.15,
            }}
          >
            {es ? "No es solo diseño. Es convivencia." : "It's not just design. It's cohabitation."}
          </h2>
          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "15px",
              color: "rgba(0,0,0,0.72)",
              marginTop: "16px",
              lineHeight: 1.75,
            }}
          >
            {es
              ? "Cada espacio que diseñamos busca algo más que verse bien. Busca funcionar en la vida real: en la tuya y en la de ellos."
              : "Every space we design seeks something more than looking good. It seeks to work in real life: yours and theirs."}
          </p>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "16px",
              color: "hsl(var(--gold))",
              marginTop: "16px",
            }}
          >
            {es
              ? "Porque cuando ellos están bien, todo fluye mejor."
              : "Because when they are well, everything flows better."}
          </p>
          <Link
            to="/#solutions"
            className="inline-flex items-center gap-2"
            style={{
              marginTop: "24px",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: "9px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "hsl(var(--gold))",
            }}
          >
            {es ? "CONOCE NUESTRAS SOLUCIONES" : "EXPLORE OUR SOLUTIONS"} <span>→</span>
          </Link>
        </div>
        <div className="flex flex-col justify-center md:px-2">
          <div
            style={{
              backgroundColor: "hsl(var(--beige))",
              borderRadius: "8px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
            }}
          >
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "64px",
                lineHeight: 0.8,
                color: "hsl(var(--gold))",
              }}
            >
              “
            </div>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "18px",
                color: "#000",
                lineHeight: 1.5,
                marginTop: "8px",
              }}
            >
              {es
                ? "Diseñamos para respetar su esencia y mejorar tu forma de habitar el mundo."
                : "We design to respect their essence and improve your way of inhabiting the world."}
            </p>
            <div
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "8px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "hsl(var(--gold))",
                marginTop: "16px",
              }}
            >
              — GATIUM Atelier Felino
            </div>
          </div>
        </div>
        <div className="aspect-[4/3]">
          <PhotoPlaceholder
            label={
              es
                ? "FOTO: GATO DESCANSANDO EN MOBILIARIO PERSONALIZADO"
                : "PHOTO: CAT RESTING ON CUSTOM FURNITURE"
            }
            dark
          />
        </div>
      </section>

      {/* SECTION 5 — BOTTOM CTA BAND */}
      <section
        className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-10 md:gap-0"
        style={{ backgroundColor: "hsl(var(--near-black))", padding: "64px 24px" }}
      >
        <div className="aspect-[4/3]">
          <PhotoPlaceholder
            label={es ? "FOTO: GATO EN CATIO, LUZ EXTERIOR CÁLIDA" : "PHOTO: CAT IN CATIO, WARM OUTDOOR LIGHT"}
            dark
          />
        </div>
        <div className="flex flex-col justify-center md:pl-16">
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: "32px",
              color: "hsl(var(--cream))",
              lineHeight: 1.2,
            }}
          >
            {es
              ? "¿Listo para transformar la convivencia en tu hogar?"
              : "Ready to transform cohabitation in your home?"}
          </h2>
          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "15px",
              color: "rgba(245,239,230,0.65)",
              marginTop: "16px",
              lineHeight: 1.7,
            }}
          >
            {es
              ? "Envíanos tu espacio y diseñemos juntos la mejor versión para toda tu manada."
              : "Send us your space and let's design together the best version for your whole colony."}
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex self-start"
            style={{
              marginTop: "28px",
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
            {es ? "ENVÍANOS TU ESPACIO →" : "SEND US YOUR SPACE →"}
          </a>
        </div>
      </section>
    </>
  );
};

export default ComoTrabajamos;
