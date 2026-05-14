import { Link, useParams, Navigate } from "react-router-dom";
import { getPost } from "@/data/blogPosts";
import { useLanguage } from "@/i18n/LanguageContext";
import { whatsappUrl } from "@/lib/whatsapp";

const BlogPost = () => {
  const { slug = "" } = useParams();
  const post = getPost(slug);
  const { lang } = useLanguage();

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <article style={{ backgroundColor: "hsl(var(--near-black))" }}>
      {/* Cover */}
      <div style={{ width: "100%", maxHeight: "500px", height: "60vh", overflow: "hidden", backgroundColor: "hsl(var(--beige))" }}>
        <img
          src={post.cover}
          alt={post.title}
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
            {post.category}
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display', 'Cormorant Garamond', serif",
              fontWeight: 600,
              fontStyle: "italic",
              color: "hsl(var(--cream))",
              fontSize: "38px",
              lineHeight: 1.15,
              marginTop: "14px",
            }}
            className="md:!text-[48px]"
          >
            {post.title}
          </h1>
          <div
            style={{
              fontFamily: "'Roboto', 'Open Sans', sans-serif",
              fontSize: "13px",
              color: "rgba(245,239,230,0.55)",
              marginTop: "16px",
              letterSpacing: "0.05em",
            }}
          >
            By {post.author} · {post.date}
          </div>

          <div style={{ marginTop: "40px" }}>
            {post.body.map((para, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "'Roboto', 'Open Sans', sans-serif",
                  fontSize: "16px",
                  lineHeight: 1.8,
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
                fontSize: "22px",
                color: "hsl(var(--cream))",
                marginBottom: "20px",
                lineHeight: 1.4,
              }}
            >
              Ready to design a home your cat will love?
            </p>
            <a href={whatsappUrl(lang)} target="_blank" rel="noreferrer" className="btn-gold" style={{ borderRadius: "8px" }}>
              Design a space your cat will love →
            </a>
          </div>

          {/* Back */}
          <div style={{ marginTop: "40px", textAlign: "center" }}>
            <Link
              to="/blog"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "hsl(var(--gold))",
              }}
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
