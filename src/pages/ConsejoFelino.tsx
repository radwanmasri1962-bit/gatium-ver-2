import { Link } from "react-router-dom";
import { Eye, Lightbulb, Pencil, Star, Cat } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import groupPhoto from "@/assets/cats/group-photo-brilliant.jpg";
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
      title: "SEGURIDAD",
      main: "Un gato no descansa por completo si no se siente seguro.",
      small:
        "Las alturas, refugios y rutas de escape les permiten relajarse y habitar el espacio con tranquilidad.",
    },
    {
      Icon: Lightbulb,
      title: "PERSONALIDAD",
      main: "No todos los gatos necesitan lo mismo.",
      small:
        "Cada integrante del Consejo Felino interactúa distinto con el hogar y nos enseñó que cada espacio debe adaptarse a su personalidad.",
    },
    {
      Icon: Pencil,
      title: "CONVIVENCIA",
      main: "El bienestar también transforma la convivencia.",
      small:
        "Cuando un gato tiene espacios pensados para él, el hogar se vuelve más armónico para todos.",
    },
  ];

  const cats = [
    {
      name: "Aslan",
      img: aslanImg,
      title: "Aslan — Guardián del Territorio",
      tagline:
        "Nos enseñó que sentirse seguro también transforma la manera de convivir.",
      tags: "Territorio · Refugio · Convivencia",
      desc:
        "Aslan nos enseñó que la convivencia no sucede por sí sola: también necesita espacios, límites y seguridad. Su manera de proteger territorios, reaccionar a cambios y buscar lugares donde sentirse tranquilo nos mostró que algunos gatos necesitan mayor control sobre su entorno para sentirse en equilibrio. Con el tiempo hicimos cambios en casa, creamos separaciones y respetamos mejor sus espacios. Poco a poco algo empezó a cambiar: Aslan se volvió más relajado, más juguetón, más sociable y el estrés dentro de la manada disminuyó. Aslan nos dejó una lección importante: cuando el espacio responde a las necesidades reales del gato, el bienestar también transforma la convivencia.",
    },
    {
      name: "Ares",
      img: aresImg,
      title: "Ares — Guardián de la Accesibilidad",
      tagline:
        "Nos enseñó que cuando el espacio se adapta al gato, el bienestar cambia por completo.",
      tags: "Accesibilidad · Bienestar · Confort",
      desc:
        "Ares nos enseñó que no todos los gatos habitan el espacio de la misma manera. Durante un tiempo notamos que exploraba menos, evitaba ciertas alturas y disfrutaba espacios distintos a los que otros miembros de la manada utilizaban con facilidad. Descubrimos que no era falta de interés: algunos accesos simplemente no respondían a sus necesidades. Adaptamos recorridos y encontramos algo importante: no era la altura lo que hacía la diferencia, sino la manera de llegar a ella. Al crear rutas más cómodas y accesibles, volvió a disfrutar las alturas, recuperó dinamismo y empezó a habitar el espacio con más confianza. El señor Ares nos recordó algo que seguimos aplicando hasta hoy: diseñar para gatos no significa asumir lo que necesitan; significa permitir que ellos mismos nos lo enseñen.",
    },
    {
      name: "Aragorn",
      img: aragornImg,
      title: "Aragorn — Guardián de la Confianza",
      tagline: "Nos enseñó que sentirse seguro también significa tener una salida.",
      tags: "Confianza · Rutas · Seguridad",
      desc:
        "Aragorn nos enseñó que el estrés puede cambiar la forma en que un gato habita su hogar. Durante una etapa difícil descubrimos algo importante: necesitaba refugios, rutas de escape y espacios donde pudiera moverse sin sentirse acorralado. Creamos recorridos con distintas salidas, respetamos sus tiempos y empezamos a darle más opciones para elegir cómo vivir el espacio. Poco a poco comenzó a recuperar tranquilidad, volvió a disfrutar el juego y empezó a sentirse más seguro dentro de la manada. Aragorn nos mostró que la confianza no aparece de inmediato; necesita espacio para construirse.",
    },
    {
      name: "Apolo",
      img: apoloImg,
      title: "Apolo — Guardián de los Límites",
      tagline:
        "Nos enseñó que un espacio seguro también debe responder a distintas formas de percibir el mundo.",
      tags: "Seguridad · Adaptación · Exploración",
      desc:
        "Apolo nos enseñó que no todos los gatos perciben y exploran el mundo de la misma manera. Su sordera parcial, curiosidad y persistencia nos hicieron entender que aquello que parecía seguro para otros, para él no siempre lo era. Su manera de seguir estímulos visuales, buscar el exterior y explorar cada límite nos obligó a mirar detalles que antes pasábamos por alto. Reforzamos estructuras, adaptamos espacios y transformamos recorridos para responder a necesidades que antes no habíamos considerado. Apolo cambió nuestra forma de ver la seguridad: un espacio seguro no limita la exploración; permite descubrir con confianza.",
    },
    {
      name: "Aquiles",
      img: aquilesImg,
      title: "Aquiles — Guardián del Instinto",
      tagline:
        "Nos enseñó que jugar también es una forma de expresar su naturaleza.",
      tags: "Juego · Caza · Estímulo",
      desc:
        "Aquiles nos enseñó que el juego es mucho más que entretenimiento: también es una forma de expresar comportamientos naturales. Su manera de perseguir, capturar y transformar cada dinámica en un reto nos mostró que algunos gatos necesitan espacios que les permitan estimular su curiosidad, su energía y su instinto natural. Descubrimos que el bienestar también puede construirse a través de experiencias que les permitan explorar, jugar y sentirse libres para ser ellos mismos. Aquiles nos recordó que un espacio pensado para gatos no solo cubre necesidades físicas; también alimenta su naturaleza.",
    },
    {
      name: "Anubis",
      img: anubisImg,
      title: "Anubis — Guardián del Vínculo",
      tagline:
        "Nos enseñó que sentirse bien también significa sentirse conectado.",
      tags: "Vínculo · Presencia · Bienestar",
      desc:
        "Anubis nos enseñó que algunos gatos necesitan algo más que espacios cómodos: necesitan sentirse parte de lo que sucede a su alrededor. Su manera de buscarnos, vocalizar para encontrarnos y participar constantemente en la dinámica de la casa nos mostró que la tranquilidad también puede nacer de la conexión y la compañía. Le encanta jugar, convivir con sus hermanos y convertir cualquier pequeño detalle en parte de su experiencia. Pequeños cambios hicieron una gran diferencia: creamos espacios donde pudiera vernos, mantenerse cerca y sentirse incluido sin experimentar aislamiento innecesario. Anubis nos enseñó que el bienestar también puede nacer de sentirse parte de algo.",
    },
    {
      name: "Atenea",
      img: ateneaImg,
      title: "Atenea — Guardiana de la Energía",
      tagline:
        "Nos enseñó que algunos gatos necesitan espacios donde su energía pueda expresarse.",
      tags: "Energía · Estímulo · Movimiento",
      desc:
        "Atenea nos enseñó que algunos gatos viven el espacio desde el movimiento constante y la búsqueda continua de estímulos. Su energía, curiosidad y necesidad de explorar todo a su alrededor nos mostraron que algunos gatos necesitan mucho más que lugares para descansar: necesitan recorridos, experiencias y espacios que les permitan expresar su naturaleza sin sentirse limitados. Con ella descubrimos que el bienestar también puede construirse desde el juego, el movimiento y la posibilidad de encontrar siempre algo nuevo. Atenea llegó para derrumbar una idea: algunos gatos no necesitan más espacio; necesitan más posibilidades para expresarse.",
    },
  ];

  const philosophy = [
    {
      Icon: Star,
      title: "EXPERIENCIA REAL",
      main: "No nació desde una teoría.",
      desc:
        "Nació viviendo, equivocándonos, ajustando y aprendiendo junto a nuestra propia manada.",
    },
    {
      Icon: Eye,
      title: "OBSERVACIÓN DIARIA",
      main: "Cada comportamiento deja una pista.",
      desc:
        "Aprendimos que pequeñas preferencias y hábitos pueden cambiar por completo la manera en que un gato vive el espacio.",
    },
    {
      Icon: Pencil,
      title: "DISEÑO CON PROPÓSITO",
      main: "No diseñamos pensando en un gato ideal.",
      desc: "Diseñamos espacios que responden a necesidades reales.",
    },
  ];


  return (
    <>
      {/* SECTION 1 — HERO */}
      <section
        className="relative w-full"
        style={{ minHeight: "80vh" }}
      >
        <img
          src={groupPhoto}
          alt={es ? "Los 7 gatos juntos" : "The 7 cats together"}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center right",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 40%, rgba(20,12,4,0.55) 80%, rgba(20,12,4,0.75) 100%)",
          }}
        />
        <div className="relative flex flex-col justify-end px-[18px] pb-[40px] md:px-20 md:pb-[64px]" style={{ minHeight: "80vh" }}>
          <div className="w-full md:ml-[6%]" style={{ maxWidth: "560px" }}>
            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                fontSize: "clamp(28px, 3.4vw, 44px)",
                color: "hsl(var(--cream))",
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
              }}
            >
              Son nuestra manada,<br />
              nuestros maestros<br />
              y la razón por la que
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 500,
                  fontStyle: "italic",
                  color: "hsl(var(--gold))",
                  display: "block",
                  fontSize: "0.95em",
                  marginTop: "8px",
                  letterSpacing: "0.005em",
                }}
              >
                diseñamos diferente.
              </span>
            </h1>
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 400,
                fontSize: "15px",
                color: "rgba(245,239,230,0.9)",
                maxWidth: "480px",
                marginTop: "22px",
                lineHeight: 1.75,
                letterSpacing: "0.005em",
                whiteSpace: "pre-line",
              }}
            >
              {"El Consejo Felino no nació como una idea de marca. Nació de convivir con siete gatos completamente distintos.\n\nObservándolos entendimos algo importante: cada gato necesita habitar el espacio de una manera diferente."}
            </p>
            <a
              href="#members"
              style={{
                display: "inline-block",
                marginTop: "28px",
                backgroundColor: "hsl(var(--gold))",
                color: "hsl(var(--near-black))",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "10px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                padding: "13px 28px",
                borderRadius: "2px",
                boxShadow: "0 6px 24px rgba(0,0,0,0.25)",
              }}
            >
              CONOCE AL CONSEJO →
            </a>
          </div>
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
                  flex: "0 0 300px",
                  width: "300px",
                  scrollSnapAlign: "start",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "12px",
                  padding: "16px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                }}
              >
                <div
                  style={{
                    marginBottom: "16px",
                    borderRadius: "8px",
                    overflow: "hidden",
                    backgroundColor: "hsl(var(--beige))",
                    aspectRatio: "4/5",
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
        style={{ backgroundColor: "hsl(var(--near-black))", padding: "48px 24px" }}
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
