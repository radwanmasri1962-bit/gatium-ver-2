export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  category: string;
  cover: string;
  excerpt: string;
  body: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "la-ciencia-de-la-felicidad-felina",
    title: "The Science of Feline Happiness: What Your Cat's Zoomies Are Really Telling You",
    author: "Majo",
    date: "April 20, 2025",
    category: "Feline Behavior",
    cover: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1200",
    excerpt:
      "Behind every sudden sprint across the living room lies a story of instinct, environment and emotional release. Here's what the science says about why your cat zooms — and what it reveals about the space they live in.",
    body: [
      "There is a quiet science behind the sudden bursts of speed that send a cat tearing across the living room at midnight. Researchers studying feline behavior have begun to map what guardians have always suspected: those wild, joyful sprints — known affectionately as the zoomies, or more formally as Frenetic Random Activity Periods — are not random at all. They are a signal. A small, four-legged report on the state of a cat's inner world and the space that holds it.",
      "Cats are predators wired for short, explosive movement. In the wild, hunting cycles are punctuated by stillness, observation and a few seconds of pure acceleration. When that ancestral choreography has nowhere to land — no perch to launch from, no corridor to chase down, no safe height to retreat to — the energy still arrives. It simply finds another outlet. The 3 a.m. gallop is, in many ways, an honest critique of an environment that does not yet meet the animal who lives in it.",
      "Studies in environmental enrichment consistently show that cats with access to vertical territory, varied textures and clear sight lines display lower stress markers, healthier sleep cycles and richer play behavior. The opposite is also true. Flat, predictable rooms produce flat, predictable cats — and eventually, frustrated ones. Behaviorists describe this as a mismatch between a cat's ethological needs and the human-shaped geometry of the home.",
      "What makes the zoomies so revealing is their context. A cat who zooms after using the litter box, after a long nap, or after a window-watching session is metabolizing something — relief, restlessness, the residue of an unfinished hunt. Give that same cat a thoughtfully placed shelf, a tunnel that turns a hallway into a circuit, a window perch that frames the outside world, and the zoomies transform. They become play instead of protest.",
      "This is where design quietly enters the conversation. A home is not a neutral container; it is the landscape a cat reads every single day. Heights, hiding places, the path from food to water to rest — each decision shapes mood, confidence and play. When the architecture cooperates with the species, joy stops being accidental.",
      "Good design, then, is never purely aesthetic. For a cat, it is functional happiness — a structure that lets instinct breathe. The zoomies are not a problem to be solved. They are an invitation to design a space worthy of the animal who lives in it.",
    ],
  },
  {
    slug: "el-arte-de-cohabitar",
    title: "The Art of Cohabitation: Understanding What Your Cat Needs from Your Home",
    author: "Yani",
    date: "May 13, 2026",
    category: "Living with Cats",
    cover: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=1200",
    excerpt:
      "Sharing a home with a cat is a quiet contract — one written in sightlines, textures and small moments of trust. Here's how to honor it without losing the beauty of the space you love.",
    body: [
      "There is an unspoken contract between a cat and the human who shares their home. It is rarely written, almost never discussed, and yet it shapes every corner of the space you live in together. The cat agrees to stay close. You agree, often without realizing it, to design the world around them.",
      "What cats need is more layered than a bed and a bowl. They need to feel safe — which in feline language means height, escape routes and the quiet certainty that no surprise is waiting around the next corner. They need stimulation that respects their intelligence: surfaces to scratch with intention, windows that frame movement, paths that reward curiosity. And they need rhythm — the predictable architecture of a home that allows them to anticipate, rest, and reset.",
      "Most homes are not designed with any of this in mind. The most common mistake is also the most invisible: treating a cat like a piece of furniture that occasionally moves, instead of a small, sovereign animal with strong opinions about geometry. A scratcher pushed into a forgotten corner. A litter box placed for human convenience rather than feline privacy. A beautiful sofa that becomes the only elevated surface in the room, simply because nothing else was offered. Each of these is a quiet friction, repeated daily.",
      "The shift happens the moment a home begins to listen. A vertical pathway along an unused wall turns a flat room into a landscape. A window perch, placed with care, becomes a small theater. A piece of furniture that hides a litter station with dignity restores both the cat's privacy and the room's composition. None of this requires giving up beauty. In fact, the opposite is true.",
      "A home designed for a cat is almost always a more intentional home for the people in it. The lines are cleaner, because clutter has been thought through. The materials are warmer, because they have to withstand a life — claws, naps, the soft drama of daily use. The space feels considered, because every decision had to answer to two species at once.",
      "True cohabitation is not compromise. It is the discipline of designing for more than one kind of body, more than one kind of joy. When the home holds both of you well, something remarkable happens: the cat stops adapting to the space, and the space starts speaking the language of the cat. That is when a house becomes, quietly, a shared home.",
    ],
  },
];

export const getPost = (slug: string) => blogPosts.find((p) => p.slug === slug);
