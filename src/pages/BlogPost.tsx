import { Link, useParams, Navigate } from "react-router-dom";
import { getPost } from "@/data/blogPosts";
import { useLanguage } from "@/i18n/LanguageContext";
import { whatsappUrl } from "@/lib/whatsapp";

const BlogPost = () => {
  const { slug = "" } = useParams();
  const post = getPost(slug);
  const { lang } = useLanguage();
  const es = lang === "es";

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <article style={{ backgroundColor: "hsl(var(--near-black))" }}>
      {/* Cover */}
      <div style={{ width: "100%", maxHeight: "500px", height: "60vh", overflow: "hidden", backgroundColor: "hsl(var(--beige))" }}>
        <img
          src={post.cover}
          alt={post.title[lang]}
          style={{ width: "100%", height: "100%", objectFit: "cover", maxHeight: "500px" }}
        />
      </div>

      <div className="px-6 md:px-8 py-12 md:py-20">
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
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
            {post.category[lang]}
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display', 'Cormorant Garamond', serif",
              fontWeight: 600,
              fontStyle: "italic",
              color: "hsl(var(--cream))",
              fontSize: "32px",
              lineHeight: 1.2,
              marginTop: "14px",
              letterSpacing: "-0.005em",
            }}
            className="md:!text-[40px]"
          >
            {post.title[lang]}
          </h1>
          <div
            style={{
              fontFamily: "'Open Sans', 'Roboto', sans-serif",
              fontSize: "11px",
              color: "rgba(245,239,230,0.55)",
              marginTop: "16px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {es ? "Por" : "By"} {post.author} · {post.date[lang]}
          </div>

          <div style={{ marginTop: "40px" }}>
            {post.body[lang].map((para, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "'Open Sans', 'Roboto', sans-serif",
                  fontSize: "15px",
                  lineHeight: 1.85,
                  color: "rgba(245,239,230,0.82)",
                  marginBottom: "22px",
                }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* CTA */}
          <div
            style={{
              marginTop: "56px",
              padding: "32px",
              borderTop: "1px solid rgba(196,154,90,0.25)",
              borderBottom: "1px solid rgba(196,154,90,0.25)",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "'Playfair Display', 'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "20px",
                color: "hsl(var(--cream))",
                marginBottom: "22px",
                lineHeight: 1.45,
              }}
            >
              {es
                ? "¿Listo para diseñar un hogar que tu gato amará?"
                : "Ready to design a home your cat will love?"}
            </p>
            <a
              href={whatsappUrl(lang)}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "10px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                backgroundColor: "hsl(var(--gold))",
                color: "hsl(var(--near-black))",
                padding: "13px 28px",
                borderRadius: "2px",
                boxShadow: "0 6px 24px rgba(0,0,0,0.25)",
              }}
            >
              {es ? "Diseña un espacio para tu gato →" : "Design a space your cat will love →"}
            </a>
          </div>

          {/* Back */}
          <div style={{ marginTop: "40px", textAlign: "center" }}>
            <Link
              to="/blog"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "10px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "hsl(var(--gold))",
              }}
            >
              {es ? "← Volver al Blog" : "← Back to Blog"}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
