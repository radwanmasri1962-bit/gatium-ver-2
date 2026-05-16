import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { useLanguage } from "@/i18n/LanguageContext";

const Blog = () => {
  const { lang } = useLanguage();
  const es = lang === "es";

  return (
    <section style={{ backgroundColor: "hsl(var(--near-black))", minHeight: "100vh" }} className="px-6 md:px-16 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: "10px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "hsl(var(--gold))",
          }}
        >
          {es ? "DIARIO" : "JOURNAL"}
        </div>
        <h1
          style={{
            fontFamily: "'Playfair Display', 'Cormorant Garamond', serif",
            fontWeight: 600,
            fontStyle: "italic",
            color: "hsl(var(--cream))",
            marginTop: "12px",
            lineHeight: 1.15,
            letterSpacing: "-0.005em",
          }}
          className="text-[34px] md:text-[44px]"
        >
          {es ? "El Blog de GATIUM" : "The GATIUM Blog"}
        </h1>
        <p
          style={{
            fontFamily: "'Open Sans', 'Roboto', sans-serif",
            fontSize: "14px",
            color: "rgba(245,239,230,0.7)",
            marginTop: "16px",
            maxWidth: "620px",
            lineHeight: 1.75,
          }}
        >
          {es
            ? "Reflexiones sobre comportamiento felino, diseño intencional y el arte silencioso de compartir el hogar con un gato."
            : "Reflections on feline behavior, intentional design, and the quiet art of sharing a home with a cat."}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-12 md:mt-16">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group block transition-transform duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(196,154,90,0.15)",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <div style={{ aspectRatio: "16/10", overflow: "hidden", backgroundColor: "hsl(var(--beige))" }}>
                <img
                  src={post.cover}
                  alt={post.title[lang]}
                  loading="lazy"
                  className="transition-transform duration-500 group-hover:scale-105"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="p-6 md:p-8">
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    fontSize: "10px",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "hsl(var(--gold))",
                  }}
                >
                  {post.category[lang]}
                </div>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', 'Cormorant Garamond', serif",
                    fontWeight: 600,
                    fontStyle: "italic",
                    fontSize: "22px",
                    color: "hsl(var(--cream))",
                    marginTop: "12px",
                    lineHeight: 1.3,
                  }}
                >
                  {post.title[lang]}
                </h2>
                <div
                  style={{
                    fontFamily: "'Open Sans', 'Roboto', sans-serif",
                    fontSize: "11px",
                    color: "rgba(245,239,230,0.5)",
                    marginTop: "10px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {post.author} · {post.date[lang]}
                </div>
                <p
                  style={{
                    fontFamily: "'Open Sans', 'Roboto', sans-serif",
                    fontSize: "13.5px",
                    color: "rgba(245,239,230,0.72)",
                    marginTop: "14px",
                    lineHeight: 1.7,
                  }}
                >
                  {post.excerpt[lang]}
                </p>
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    fontSize: "10px",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "hsl(var(--gold))",
                    marginTop: "22px",
                  }}
                  className="transition-opacity group-hover:opacity-80"
                >
                  {es ? "Leer artículo →" : "Read article →"}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
