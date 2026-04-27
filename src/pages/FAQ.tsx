import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const WHATSAPP = "https://wa.me/521XXXXXXXXXX";

const eyebrow: React.CSSProperties = {
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 700,
  fontSize: "10px",
  letterSpacing: "0.3em",
  textTransform: "uppercase",
  color: "hsl(var(--gold))",
};

interface Item {
  q: string;
  a: string;
}

const FAQ = () => {
  const { lang } = useLanguage();
  const es = lang === "es";

  const items: Item[] = es
    ? [
        {
          q: "¿Mi casa es muy pequeña para gatificar?",
          a: "No necesariamente. Muchas veces, los espacios pequeños tienen más potencial del que parece. En GATIUM diseñamos soluciones pensando en circulación, alturas, refugios y uso inteligente del espacio. No se trata de tener una casa grande, sino de crear un entorno mejor adaptado para ti y tus gatos.",
        },
        {
          q: "¿Puedo empezar con algo sencillo?",
          a: "Sí, y de hecho muchas veces es la mejor forma de comenzar. No necesitas transformar todo tu espacio de una vez. Podemos ayudarte a iniciar con una primera intervención estratégica —como una ruta vertical, una zona de descanso o una solución puntual— y crecer a partir de ahí.",
        },
        {
          q: "¿Qué pasa si no sé qué necesita mi gato?",
          a: "Eso es más común de lo que imaginas, y justamente ahí empieza nuestro trabajo. No necesitas tener todas las respuestas. Parte de nuestro proceso es observar, entender tu espacio y ayudarte a identificar qué puede mejorar según la personalidad, energía y hábitos de tus gatos.",
        },
        {
          q: "¿Necesito medidas exactas para pedir información?",
          a: "No. Si tienes medidas, perfecto. Si no, también puedes escribirnos. Podemos empezar con fotos, videos, referencias generales o una idea inicial del espacio. Lo importante es abrir la conversación.",
        },
        {
          q: "¿Puedo escribirles aunque solo tenga una idea?",
          a: "Por supuesto. De hecho, muchos proyectos comienzan así: con una intuición, una necesidad o una sensación de que algo en casa podría funcionar mejor. Si sientes que tu espacio puede ser más armónico para ustedes, ya tenemos un buen punto de partida.",
        },
        {
          q: "¿Trabajan solo en una ciudad o región?",
          a: "Trabajamos de manera remota en toda Latinoamérica. El proceso de diseño, consultoría y seguimiento es completamente digital. La fabricación e instalación se coordina localmente según tu ubicación.",
        },
        {
          q: "¿Cuánto tiempo toma un proyecto?",
          a: "Depende del alcance. Una intervención puntual puede estar lista en 2 a 3 semanas. Un proyecto integral para una manada grande puede tomar entre 4 y 8 semanas. Te damos un cronograma claro desde el inicio.",
        },
        {
          q: "¿Los precios son fijos o todo es personalizado?",
          a: "Todo es personalizado. Cada proyecto es único porque cada hogar y cada manada son distintos. No tenemos catálogos de precio fijo — trabajamos con cotizaciones a medida basadas en tu espacio, tus necesidades y el alcance del diseño.",
        },
      ]
    : [
        {
          q: "Is my home too small to catify?",
          a: "Not necessarily. Small spaces often have more potential than it seems. At GATIUM we design solutions thinking about circulation, heights, refuges and intelligent use of space. It's not about having a big house, it's about creating a better-adapted environment for you and your cats.",
        },
        {
          q: "Can I start with something simple?",
          a: "Yes, and in fact that is often the best way to begin. You don't need to transform your entire space at once. We can help you start with a first strategic intervention — such as a vertical route, a rest zone or a specific solution — and grow from there.",
        },
        {
          q: "What if I don't know what my cat needs?",
          a: "That is more common than you think, and that is exactly where our work begins. You don't need to have all the answers. Part of our process is observing, understanding your space and helping you identify what can improve according to your cats' personality, energy and habits.",
        },
        {
          q: "Do I need exact measurements to request information?",
          a: "No. If you have measurements, great. If not, you can still write to us. We can start with photos, videos, general references or an initial idea of the space. The important thing is to open the conversation.",
        },
        {
          q: "Can I contact you even if I only have an idea?",
          a: "Of course. In fact, many projects begin this way: with an intuition, a need or a feeling that something at home could work better. If you feel your space can be more harmonious for everyone, we already have a good starting point.",
        },
        {
          q: "Do you only work in one city or region?",
          a: "We work remotely throughout Latin America. The design, consulting and follow-up process is completely digital. Manufacturing and installation is coordinated locally according to your location.",
        },
        {
          q: "How long does a project take?",
          a: "It depends on the scope. A specific intervention can be ready in 2 to 3 weeks. An integral project for a large colony can take between 4 and 8 weeks. We give you a clear timeline from the start.",
        },
        {
          q: "Are prices fixed or is everything customized?",
          a: "Everything is customized. Each project is unique because every home and every colony is different. We don't have fixed price catalogs — we work with tailored quotes based on your space, your needs and the scope of the design.",
        },
      ];

  const [openIdx, setOpenIdx] = useState<number>(0);

  return (
    <>
      {/* SECTION 1 — HEADER */}
      <section
        className="text-center section-padding"
        style={{ backgroundColor: "hsl(var(--cream))" }}
      >
        <div style={eyebrow}>
          {es ? "PREGUNTAS FRECUENTES" : "FREQUENTLY ASKED QUESTIONS"}
        </div>
        <h1
          className="mx-auto"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: "44px",
            color: "#000",
            maxWidth: "600px",
            marginTop: "16px",
            lineHeight: 1.15,
          }}
        >
          {es
            ? "Todo lo que necesitas saber antes de empezar."
            : "Everything you need to know before getting started."}
        </h1>
        <p
          className="mx-auto"
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "15px",
            color: "rgba(0,0,0,0.65)",
            maxWidth: "500px",
            margin: "16px auto 0",
            lineHeight: 1.7,
          }}
        >
          {es
            ? "Si tienes más dudas, escríbenos. Estamos aquí para ayudarte a dar el primer paso."
            : "If you have more questions, write to us. We are here to help you take the first step."}
        </p>
      </section>

      {/* SECTION 2 — FAQ ACCORDION */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "64px 24px" }}>
        <div className="mx-auto" style={{ maxWidth: "760px" }}>
          {items.map((it, idx) => {
            const open = openIdx === idx;
            return (
              <div
                key={it.q}
                style={{
                  borderBottom: "1px solid rgba(0,0,0,0.08)",
                  padding: "20px 0",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(open ? -1 : idx)}
                  className="w-full flex justify-between items-center text-left"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                  aria-expanded={open}
                >
                  <span
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 600,
                      fontSize: "15px",
                      color: "#000",
                    }}
                  >
                    {it.q}
                  </span>
                  <span
                    style={{
                      color: "hsl(var(--gold))",
                      fontSize: "20px",
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 400,
                      lineHeight: 1,
                      marginLeft: "16px",
                    }}
                  >
                    {open ? "−" : "+"}
                  </span>
                </button>
                <div
                  style={{
                    overflow: "hidden",
                    maxHeight: open ? "600px" : "0px",
                    transition: "max-height 350ms ease, opacity 250ms ease, padding 250ms ease",
                    opacity: open ? 1 : 0,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "15px",
                      color: "rgba(0,0,0,0.7)",
                      lineHeight: 1.75,
                      paddingTop: "14px",
                      paddingRight: "40px",
                    }}
                  >
                    {it.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 3 — CTA BAND */}
      <section
        className="text-center"
        style={{ backgroundColor: "hsl(var(--umber))", padding: "64px 24px" }}
      >
        <h2
          className="mx-auto"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: "32px",
            color: "hsl(var(--cream))",
            maxWidth: "520px",
            lineHeight: 1.2,
          }}
        >
          {es ? "¿Tienes más preguntas?" : "Do you have more questions?"}
        </h2>
        <p
          className="mx-auto"
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "15px",
            color: "rgba(237,227,209,0.7)",
            maxWidth: "440px",
            margin: "16px auto 0",
            lineHeight: 1.7,
          }}
        >
          {es
            ? "Escríbenos directamente. No hay pregunta demasiado pequeña si te ayuda a dar el primer paso."
            : "Write to us directly. No question is too small if it helps you take the first step."}
        </p>
        <div className="flex flex-wrap justify-center" style={{ marginTop: "32px", gap: "14px" }}>
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
            {es ? "ESCRIBIR POR WHATSAPP" : "MESSAGE ON WHATSAPP"}
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
            {es ? "O ENVÍANOS TU ESPACIO →" : "OR SEND US YOUR SPACE →"}
          </Link>
        </div>
      </section>
    </>
  );
};

export default FAQ;
