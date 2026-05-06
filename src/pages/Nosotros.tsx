import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { useEffect, useState } from "react";
import majoYaniHero from "@/assets/majo-yani-1.jpg";
import interiorHogar from "@/assets/nosotros-interior.jpg";
import yaniDesigning from "@/assets/yani-designing.jpg";
import majoPainting from "@/assets/majo-painting.jpg";

const eyebrow: React.CSSProperties = {
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 700,
  fontSize: "10px",
  letterSpacing: "0.3em",
  textTransform: "uppercase",
  color: "hsl(var(--gold))",
};

const IconHomeHeart = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M5 14 L16 5 L27 14 V27 H5 Z" />
    <path d="M16 22 c-3-2 -5-4 -5-6.5 a2.5 2.5 0 0 1 5 -1 a2.5 2.5 0 0 1 5 1 c0 2.5 -2 4.5 -5 6.5 z" />
  </svg>
);
const IconEye = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M3 16 c4-7 10-10 13-10 s9 3 13 10 c-4 7 -10 10 -13 10 s-9-3 -13-10 z" />
    <circle cx="16" cy="16" r="4" />
  </svg>
);
const IconPencilRuler = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M5 27 L8 24 L22 10 L25 13 L11 27 Z" />
    <path d="M19 13 L22 16" />
    <path d="M22 7 L25 10" />
  </svg>
);
const IconLeaf = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M6 26 C6 14 14 6 26 6 C26 18 18 26 6 26 Z" />
    <path d="M6 26 L18 14" />
  </svg>
);

const FoundersCarousel = ({ es, slides }: { es: boolean; slides: string[] }) => {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, [slides.length]);
  return (
    <div>
      <div className="aspect-[4/3] relative overflow-hidden" style={{ backgroundColor: "hsl(var(--beige))" }}>
        {slides.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={es ? "Foto de Majo y Yani trabajando" : "Photo of Majo and Yani at work"}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            style={{ opacity: i === idx ? 1 : 0 }}
          />
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: i === idx ? "hsl(var(--gold))" : "rgba(0,0,0,0.2)",
            }}
          />
        ))}
      </div>
    </div>
  );
};

const Nosotros = () => {
  const { lang } = useLanguage();
  const es = lang === "es";

  const pillars = [
    {
      Icon: IconHomeHeart,
      title: es ? "CONVIVENCIA REAL" : "REAL COHABITATION",
      desc: es
        ? "Nuestra experiencia nace de vivir día a día con una manada diversa y aprender de ella."
        : "Our experience comes from living day to day with a diverse colony and learning from it.",
    },
    {
      Icon: IconEye,
      title: es ? "OBSERVACIÓN SENSIBLE" : "SENSITIVE OBSERVATION",
      desc: es
        ? "Observamos comportamientos, dinámicas y necesidades reales, no tendencias."
        : "We observe real behaviors, dynamics and needs, not trends.",
    },
    {
      Icon: IconPencilRuler,
      title: es ? "DISEÑO FUNCIONAL" : "FUNCTIONAL DESIGN",
      desc: es
        ? "Creamos soluciones que son estéticas, pero sobre todo útiles y duraderas."
        : "We create solutions that are aesthetic, but above all useful and durable.",
    },
    {
      Icon: IconLeaf,
      title: es ? "BIENESTAR INTEGRADO" : "INTEGRATED WELLBEING",
      desc: es
        ? "Diseñamos espacios que mejoran la vida de los gatos y la armonía del hogar."
        : "We design spaces that improve the lives of cats and the harmony of the home.",
    },
  ];

  return (
    <>
      {/* SECTION 1 — HERO */}
      <section
        id="hero"
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ minHeight: "85vh", backgroundColor: "hsl(var(--cream))" }}
      >
        <div className="flex flex-col justify-center px-[18px] py-[48px] md:px-16 md:py-20">
          <div className="mx-auto md:mx-0 w-full" style={{ maxWidth: "520px" }}>
            <div style={eyebrow}>{es ? "NOSOTROS" : "ABOUT US"}</div>
            <h1
              className="text-[32px] md:text-[56px]"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                color: "#000",
                lineHeight: 1.1,
                marginTop: "20px",
              }}
            >
              {es ? "GATIUM nació en casa." : "GATIUM was born at home."}
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
                ? "No surgió como tendencia ni como producto pensado desde afuera. Nació dentro de casa, observando cómo siete gatos con personalidades distintas habitaban un mismo espacio."
                : "It did not emerge as a trend or as a product thought from outside. It was born inside the home, observing how seven cats with distinct personalities inhabited the same space."}
            </p>
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "15px",
                color: "rgba(0,0,0,0.72)",
                maxWidth: "440px",
                marginTop: "16px",
                lineHeight: 1.7,
              }}
            >
              {es
                ? "Majo y Yani no diseñan desde afuera. Diseñan desde adentro — desde la experiencia real de adaptar, corregir y transformar un hogar para que la convivencia funcione mejor para todos."
                : "Majo and Yani do not design from outside. They design from inside — from the real experience of adapting, correcting and transforming a home so cohabitation works better for everyone."}
            </p>
            <a
              href="#story"
              style={{
                display: "inline-block",
                marginTop: "28px",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "10px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "rgba(0,0,0,0.5)",
              }}
            >
              {es ? "NUESTRA HISTORIA ↓" : "OUR STORY ↓"}
            </a>
          </div>
        </div>
        <div className="w-full md:h-full md:flex md:items-center md:px-8">
          <div className="w-full aspect-video overflow-hidden">
            <img
              src={majoYaniHero}
              alt={es ? "Majo y Yani con sus gatos en casa" : "Majo and Yani with their cats at home"}
              className="w-full h-full object-cover object-center"
              style={{ backgroundColor: "hsl(var(--cream))" }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 2 — STORY */}
      <section
        id="story"
        className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 section-padding"
        style={{ backgroundColor: "hsl(var(--cream))" }}
      >
        <div className="aspect-[4/3]">
          <img
            src={interiorHogar}
            alt={es ? "Interior del hogar con gatos y mobiliario" : "Home interior with cats and furniture"}
            className="w-full h-full object-contain"
            style={{ backgroundColor: "hsl(var(--cream))" }}
          />
        </div>
        <div className="flex flex-col justify-center md:pl-16">
          <div style={eyebrow}>{es ? "NUESTRA HISTORIA" : "OUR STORY"}</div>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: "36px",
              color: "#000",
              marginTop: "12px",
              lineHeight: 1.15,
            }}
          >
            {es ? "Observamos. Adaptamos. Transformamos." : "We Observed. We Adapted. We Transformed."}
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
              ? "Lo que para otros parecía caos, para nosotras fue información. Siete gatos, siete personalidades, siete formas distintas de habitar el mismo hogar. Con el tiempo entendimos que la convivencia no se trata de tener más cosas, sino de diseñar mejor."
              : "What seemed like chaos to others was information for us. Seven cats, seven personalities, seven different ways of inhabiting the same home. Over time we understood that cohabitation is not about having more things, but about designing better."}
          </p>
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
              ? "Cada adaptación nos enseñó algo. Cada necesidad reveló una verdad. Y cada pequeño cambio en el espacio transformó la dinámica de toda la manada."
              : "Each adaptation taught us something. Each need revealed a truth. And each small change in the space transformed the dynamics of the whole colony."}
          </p>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              fontStyle: "italic",
              fontSize: "18px",
              color: "hsl(var(--gold))",
              marginTop: "24px",
            }}
          >
            {es ? "Así nació el criterio GATIUM." : "That is how the GATIUM criterion was born."}
          </p>
        </div>
      </section>

      {/* SECTION 3 — FOUNDERS */}
      <section
        className="grid grid-cols-1 md:grid-cols-[45%_55%] gap-12 md:gap-16 section-padding"
        style={{ backgroundColor: "hsl(var(--beige))" }}
      >
        <div className="flex flex-col justify-center">
          <div style={eyebrow}>{es ? "LAS HUMANAS DETRÁS DE GATIUM" : "THE HUMANS BEHIND GATIUM"}</div>
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
            {es
              ? "Majo y Yani: las humanas detrás de GATIUM"
              : "Majo and Yani: the humans behind GATIUM"}
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
              ? "Somos compañeras de vida, amantes de los gatos y obsesionadas con entender cómo el diseño puede mejorar la convivencia. Nuestra formación, sensibilidad y experiencia se unieron para crear algo que antes no existía: soluciones felinas pensadas desde la realidad de los hogares y desde lo que los gatos realmente necesitan."
              : "We are life companions, cat lovers and obsessed with understanding how design can improve cohabitation. Our training, sensitivity and experience came together to create something that did not exist before: feline solutions designed from the reality of homes and from what cats really need."}
          </p>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "16px",
              color: "hsl(var(--gold))",
              marginTop: "20px",
            }}
          >
            {es
              ? "No diseñamos para gatos imaginarios. Diseñamos desde la vida real."
              : "We don't design for imaginary cats. We design from real life."}
          </p>
        </div>
        <div className="relative">
          <FoundersCarousel es={es} slides={[yaniDesigning, majoPainting]} />

          <div
            className="md:absolute static md:bottom-0 md:right-0 md:translate-y-1/4 md:-translate-x-2 mt-6 md:mt-0"
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              padding: "24px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
              maxWidth: "280px",
            }}
          >
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "48px",
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
                fontSize: "15px",
                color: "#000",
                lineHeight: 1.6,
                marginTop: "8px",
              }}
            >
              {es
                ? "Entender a nuestros gatos cambió nuestra forma de vivir. Queremos que más hogares puedan vivir esa transformación."
                : "Understanding our cats changed our way of living. We want more homes to experience that transformation."}
            </p>
            <div
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "9px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "hsl(var(--gold))",
                marginTop: "12px",
              }}
            >
              {es ? "— Majo y Yani" : "— Majo and Yani"}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — PILLARS */}
      <section className="section-padding" style={{ backgroundColor: "hsl(var(--cream))" }}>
        <div className="text-center" style={eyebrow}>
          {es ? "NUESTROS PILARES" : "OUR PILLARS"}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10" style={{ marginTop: "48px" }}>
          {pillars.map(({ Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-start">
              <div style={{ color: "hsl(var(--gold))" }}>
                <Icon />
              </div>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#000",
                  marginTop: "14px",
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
      </section>

      {/* SECTION 5 — CTA BAND */}
      <section
        className="text-center"
        style={{ backgroundColor: "hsl(var(--umber))", padding: "64px 24px" }}
      >
        <div style={eyebrow}>
          {es ? "EL ORIGEN DE NUESTRO CRITERIO" : "THE ORIGIN OF OUR CRITERION"}
        </div>
        <h2
          className="mx-auto"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: "34px",
            color: "hsl(var(--cream))",
            maxWidth: "640px",
            marginTop: "16px",
            lineHeight: 1.2,
          }}
        >
          {es
            ? "El criterio de GATIUM no nació de la teoría. Nació de la convivencia."
            : "The GATIUM criterion was not born from theory. It was born from cohabitation."}
        </h2>
        <Link
          to="/consejo-felino"
          className="inline-flex"
          style={{
            marginTop: "32px",
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
          {es ? "Conoce al Consejo Felino →" : "Meet the Feline Council →"}
        </Link>
      </section>
    </>
  );
};

export default Nosotros;
