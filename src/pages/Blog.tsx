import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
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
          JOURNAL
        </div>
        <h1
          style={{
            fontFamily: "'Playfair Display', 'Cormorant Garamond', serif",
            fontWeight: 600,
            fontStyle: "italic",
            color: "hsl(var(--cream))",
            marginTop: "12px",
            lineHeight: 1.1,
          }}
          className="text-[40px] md:text-[56px]"
        >
          The GATIUM Blog
        </h1>
        <p
          style={{
            fontFamily: "'Roboto', 'Open Sans', sans-serif",
            fontSize: "15px",
            color: "rgba(245,239,230,0.65)",
            marginTop: "16px",
            maxWidth: "640px",
            lineHeight: 1.7,
          }}
        >
          Reflections on feline behavior, intentional design, and the quiet art of sharing a home with a cat.
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
                  alt={post.title}
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
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "hsl(var(--gold))",
                  }}
                >
                  {post.category}
                </div>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', 'Cormorant Garamond', serif",
                    fontWeight: 600,
                    fontSize: "24px",
                    color: "hsl(var(--cream))",
                    marginTop: "12px",
                    lineHeight: 1.25,
                  }}
                >
                  {post.title}
                </h2>
                <div
                  style={{
                    fontFamily: "'Roboto', 'Open Sans', sans-serif",
                    fontSize: "12px",
                    color: "rgba(245,239,230,0.5)",
                    marginTop: "10px",
                    letterSpacing: "0.05em",
                  }}
                >
                  {post.author} · {post.date}
                </div>
                <p
                  style={{
                    fontFamily: "'Roboto', 'Open Sans', sans-serif",
                    fontSize: "14px",
                    color: "rgba(245,239,230,0.7)",
                    marginTop: "14px",
                    lineHeight: 1.65,
                  }}
                >
                  {post.excerpt}
                </p>
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "hsl(var(--gold))",
                    marginTop: "20px",
                  }}
                  className="transition-opacity group-hover:opacity-80"
                >
                  Read article →
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
