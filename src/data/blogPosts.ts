import blog1 from "@/assets/blog_1.jpg";
import blog2 from "@/assets/blog_2.jpg";
import type { Lang } from "@/i18n/translations";

interface Localized {
  es: string;
  en: string;
}

export interface BlogPost {
  slug: string;
  author: string;
  date: Localized;
  category: Localized;
  cover: string;
  title: Localized;
  excerpt: Localized;
  body: { es: string[]; en: string[] };
}

export const blogPosts: BlogPost[] = [
  {
    slug: "la-ciencia-de-la-felicidad-felina",
    author: "Majo",
    date: { es: "26 de abril, 2025", en: "April 26, 2025" },
    category: { es: "Comportamiento Felino", en: "Feline Behavior" },
    cover: blog1,
    title: {
      es: "La ciencia de la felicidad felina: lo que las carreras locas de tu gato realmente te dicen",
      en: "The Science of Feline Happiness: What Your Cat's Zoomies Are Really Telling You",
    },
    excerpt: {
      es: "Detrás de cada carrera repentina por la sala hay una historia de instinto, entorno y liberación emocional. Esto es lo que la ciencia dice sobre por qué tu gato corre — y lo que revela sobre el espacio en el que vive.",
      en: "Behind every sudden sprint across the living room lies a story of instinct, environment and emotional release. Here's what the science says about why your cat zooms — and what it reveals about the space they live in.",
    },
    body: {
      en: [
        "There is a quiet science behind the sudden bursts of speed that send a cat tearing across the living room at midnight. Researchers studying feline behavior have begun to map what guardians have always suspected: those wild, joyful sprints — known affectionately as the zoomies, or more formally as Frenetic Random Activity Periods — are not random at all. They are a signal. A small, four-legged report on the state of a cat's inner world and the space that holds it.",
        "Cats are predators wired for short, explosive movement. In the wild, hunting cycles are punctuated by stillness, observation and a few seconds of pure acceleration. When that ancestral choreography has nowhere to land — no perch to launch from, no corridor to chase down, no safe height to retreat to — the energy still arrives. It simply finds another outlet. The 3 a.m. gallop is, in many ways, an honest critique of an environment that does not yet meet the animal who lives in it.",
        "Studies in environmental enrichment consistently show that cats with access to vertical territory, varied textures and clear sight lines display lower stress markers, healthier sleep cycles and richer play behavior. The opposite is also true. Flat, predictable rooms produce flat, predictable cats — and eventually, frustrated ones. Behaviorists describe this as a mismatch between a cat's ethological needs and the human-shaped geometry of the home.",
        "What makes the zoomies so revealing is their context. A cat who zooms after using the litter box, after a long nap, or after a window-watching session is metabolizing something — relief, restlessness, the residue of an unfinished hunt. Give that same cat a thoughtfully placed shelf, a tunnel that turns a hallway into a circuit, a window perch that frames the outside world, and the zoomies transform. They become play instead of protest.",
        "This is where design quietly enters the conversation. A home is not a neutral container; it is the landscape a cat reads every single day. Heights, hiding places, the path from food to water to rest — each decision shapes mood, confidence and play. When the architecture cooperates with the species, joy stops being accidental.",
        "Good design, then, is never purely aesthetic. For a cat, it is functional happiness — a structure that lets instinct breathe. The zoomies are not a problem to be solved. They are an invitation to design a space worthy of the animal who lives in it.",
      ],
      es: [
        "Hay una ciencia silenciosa detrás de las repentinas explosiones de velocidad que hacen que un gato cruce la sala a medianoche. Los investigadores del comportamiento felino han comenzado a mapear lo que los tutores siempre han sospechado: esas carreras salvajes y alegres — conocidas cariñosamente como zoomies, o más formalmente como Períodos de Actividad Aleatoria Frenética — no son aleatorias en absoluto. Son una señal. Un pequeño reporte de cuatro patas sobre el estado del mundo interior del gato y del espacio que lo contiene.",
        "Los gatos son depredadores diseñados para el movimiento corto y explosivo. En la naturaleza, los ciclos de caza están puntuados por quietud, observación y unos segundos de pura aceleración. Cuando esa coreografía ancestral no tiene dónde aterrizar — sin repisas desde donde saltar, sin pasillos donde perseguir, sin alturas seguras donde refugiarse — la energía igual llega. Simplemente encuentra otra salida. El galope de las 3 a.m. es, en muchos sentidos, una crítica honesta a un entorno que aún no está a la altura del animal que lo habita.",
        "Los estudios sobre enriquecimiento ambiental muestran consistentemente que los gatos con acceso a territorio vertical, texturas variadas y líneas de visión claras presentan menores marcadores de estrés, ciclos de sueño más saludables y un juego más rico. Lo contrario también es cierto. Habitaciones planas y predecibles producen gatos planos y predecibles — y eventualmente, frustrados. Los etólogos describen esto como un desajuste entre las necesidades etológicas del gato y la geometría humana del hogar.",
        "Lo que hace tan reveladores a los zoomies es su contexto. Un gato que corre después de usar la caja, después de una larga siesta o tras observar por la ventana está metabolizando algo — alivio, inquietud, el residuo de una caza inconclusa. Dale a ese mismo gato una repisa colocada con criterio, un túnel que convierta un pasillo en circuito, una repisa de ventana que enmarque el mundo exterior, y los zoomies se transforman. Se vuelven juego en lugar de protesta.",
        "Aquí es donde el diseño entra silenciosamente en la conversación. Un hogar no es un contenedor neutro; es el paisaje que un gato lee todos los días. Las alturas, los escondites, el camino entre comida, agua y descanso — cada decisión modela el ánimo, la confianza y el juego. Cuando la arquitectura coopera con la especie, la alegría deja de ser accidental.",
        "El buen diseño, entonces, nunca es puramente estético. Para un gato, es felicidad funcional — una estructura que deja respirar al instinto. Los zoomies no son un problema a resolver. Son una invitación a diseñar un espacio digno del animal que lo habita.",
      ],
    },
  },
  {
    slug: "el-arte-de-cohabitar",
    author: "Yani",
    date: { es: "26 de mayo, 2026", en: "May 26, 2026" },
    category: { es: "Convivir con Gatos", en: "Living with Cats" },
    cover: blog2,
    title: {
      es: "El arte de cohabitar: entender lo que tu gato necesita de tu hogar",
      en: "The Art of Cohabitation: Understanding What Your Cat Needs from Your Home",
    },
    excerpt: {
      es: "Compartir el hogar con un gato es un contrato silencioso — escrito en líneas de visión, texturas y pequeños momentos de confianza. Así se honra sin perder la belleza del espacio que amas.",
      en: "Sharing a home with a cat is a quiet contract — one written in sightlines, textures and small moments of trust. Here's how to honor it without losing the beauty of the space you love.",
    },
    body: {
      en: [
        "There is an unspoken contract between a cat and the human who shares their home. It is rarely written, almost never discussed, and yet it shapes every corner of the space you live in together. The cat agrees to stay close. You agree, often without realizing it, to design the world around them.",
        "What cats need is more layered than a bed and a bowl. They need to feel safe — which in feline language means height, escape routes and the quiet certainty that no surprise is waiting around the next corner. They need stimulation that respects their intelligence: surfaces to scratch with intention, windows that frame movement, paths that reward curiosity. And they need rhythm — the predictable architecture of a home that allows them to anticipate, rest, and reset.",
        "Most homes are not designed with any of this in mind. The most common mistake is also the most invisible: treating a cat like a piece of furniture that occasionally moves, instead of a small, sovereign animal with strong opinions about geometry. A scratcher pushed into a forgotten corner. A litter box placed for human convenience rather than feline privacy. A beautiful sofa that becomes the only elevated surface in the room, simply because nothing else was offered. Each of these is a quiet friction, repeated daily.",
        "The shift happens the moment a home begins to listen. A vertical pathway along an unused wall turns a flat room into a landscape. A window perch, placed with care, becomes a small theater. A piece of furniture that hides a litter station with dignity restores both the cat's privacy and the room's composition. None of this requires giving up beauty. In fact, the opposite is true.",
        "A home designed for a cat is almost always a more intentional home for the people in it. The lines are cleaner, because clutter has been thought through. The materials are warmer, because they have to withstand a life — claws, naps, the soft drama of daily use. The space feels considered, because every decision had to answer to two species at once.",
        "True cohabitation is not compromise. It is the discipline of designing for more than one kind of body, more than one kind of joy. When the home holds both of you well, something remarkable happens: the cat stops adapting to the space, and the space starts speaking the language of the cat. That is when a house becomes, quietly, a shared home.",
      ],
      es: [
        "Hay un contrato tácito entre un gato y el humano que comparte su hogar. Rara vez se escribe, casi nunca se discute, y sin embargo da forma a cada rincón del espacio que habitan juntos. El gato acepta quedarse cerca. Tú aceptas, muchas veces sin notarlo, diseñar el mundo a su alrededor.",
        "Lo que los gatos necesitan es más complejo que una cama y un tazón. Necesitan sentirse seguros — lo que en lenguaje felino significa altura, rutas de escape y la certeza silenciosa de que ninguna sorpresa los espera al doblar la esquina. Necesitan estimulación que respete su inteligencia: superficies para rascar con intención, ventanas que enmarquen el movimiento, caminos que premien la curiosidad. Y necesitan ritmo — la arquitectura predecible de un hogar que les permite anticipar, descansar y reiniciar.",
        "La mayoría de los hogares no están diseñados con nada de esto en mente. El error más común es también el más invisible: tratar al gato como un mueble que ocasionalmente se mueve, en lugar de un pequeño animal soberano con opiniones firmes sobre la geometría. Un rascador empujado a un rincón olvidado. Una caja de arena ubicada por conveniencia humana en lugar de privacidad felina. Un sofá hermoso que se convierte en la única superficie elevada de la sala, simplemente porque no se ofreció nada más. Cada una de estas es una fricción silenciosa, repetida a diario.",
        "El cambio ocurre en el momento en que un hogar comienza a escuchar. Un recorrido vertical a lo largo de una pared sin uso convierte una habitación plana en un paisaje. Una repisa de ventana, colocada con cuidado, se convierte en un pequeño teatro. Una pieza de mobiliario que oculta con dignidad una estación de arena restaura tanto la privacidad del gato como la composición de la sala. Nada de esto requiere renunciar a la belleza. De hecho, lo opuesto es cierto.",
        "Un hogar diseñado para un gato es casi siempre un hogar más intencional para las personas que lo habitan. Las líneas son más limpias, porque el desorden fue pensado. Los materiales son más cálidos, porque deben resistir una vida — garras, siestas, el suave drama del uso diario. El espacio se siente considerado, porque cada decisión tuvo que responder a dos especies a la vez.",
        "La verdadera cohabitación no es un compromiso. Es la disciplina de diseñar para más de un tipo de cuerpo, más de un tipo de alegría. Cuando el hogar los sostiene bien a ambos, ocurre algo notable: el gato deja de adaptarse al espacio, y el espacio comienza a hablar el lenguaje del gato. Ahí es cuando una casa se convierte, silenciosamente, en un hogar compartido.",
      ],
    },
  },
];

export const getPost = (slug: string) => blogPosts.find((p) => p.slug === slug);
export type { Lang };
