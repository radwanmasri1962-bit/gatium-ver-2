import { Link } from "react-router-dom";
import { Instagram, Mail, ArrowRight } from "lucide-react";
import logoDark from "@/assets/logo-dark.png";
import { useLanguage } from "@/i18n/LanguageContext";

const PinterestIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.4 0 0 5.4 0 12c0 5 3 9.3 7.4 11.1-.1-.9-.2-2.4 0-3.4.2-.9 1.4-5.7 1.4-5.7s-.4-.7-.4-1.8c0-1.7 1-3 2.2-3 1 0 1.5.8 1.5 1.7 0 1-.7 2.6-1 4-.3 1.2.6 2.2 1.8 2.2 2.2 0 3.8-2.3 3.8-5.6 0-2.9-2.1-5-5.1-5-3.5 0-5.5 2.6-5.5 5.3 0 1 .4 2.2.9 2.8.1.1.1.2.1.3-.1.4-.3 1.2-.3 1.4-.1.2-.2.3-.4.2-1.5-.7-2.4-2.9-2.4-4.7 0-3.8 2.8-7.4 8-7.4 4.2 0 7.4 3 7.4 7 0 4.2-2.6 7.5-6.3 7.5-1.2 0-2.4-.6-2.8-1.4l-.8 2.9c-.3 1-1 2.4-1.5 3.2 1.1.4 2.3.5 3.6.5 6.6 0 12-5.4 12-12S18.6 0 12 0z"/>
  </svg>
);

export const Footer = () => {
  const { t } = useLanguage();

  const navLinks = [
    { to: "/", key: "nav.inicio" },
    { to: "/nosotros", key: "nav.nosotros" },
    { to: "/#solutions", key: "nav.soluciones" },
    { to: "/consejo-felino", key: "nav.consejo" },
    { to: "/como-trabajamos", key: "nav.como" },
    { to: "/contacto", key: "nav.contacto" },
  ];

  const solLinks = [
    "footer.sol.catios",
    "footer.sol.verticales",
    "footer.sol.mobiliario",
  ];

  const linkStyle: React.CSSProperties = {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: "13px",
    color: "rgba(245,239,230,0.6)",
    transition: "color 200ms ease",
    display: "block",
    paddingBlock: "4px",
  };

  return (
    <footer style={{ backgroundColor: "hsl(var(--near-black))" }}>
      <div className="px-6 md:px-16 pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Col 1 */}
        <div className="space-y-5">
          <img src={logoDark} alt="GATIUM" className="h-8 w-auto" />
          <p style={{ color: "rgba(245,239,230,0.55)", fontSize: "13px", lineHeight: 1.7 }}>
            {t("footer.tagline")}
          </p>
          <div className="flex items-center gap-4" style={{ color: "rgba(196,154,90,0.6)" }}>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors" aria-label="Pinterest">
              <PinterestIcon />
            </a>
            <a href="mailto:hola@gatium.com" className="hover:text-gold transition-colors" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Col 2 */}
        <div>
          <div className="ui-label mb-4">{t("footer.navigation")}</div>
          <ul>
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} style={linkStyle} className="hover:!text-[hsl(var(--gold))]">
                  {t(l.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <div className="ui-label mb-4">{t("footer.solutions")}</div>
          <ul>
            {solLinks.map((k) => (
              <li key={k}>
                <Link to="/#solutions" style={linkStyle} className="hover:!text-[hsl(var(--gold))]">
                  {t(k)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 */}
        <div className="space-y-4">
          <div className="ui-label">{t("footer.talk")}</div>
          <p style={{ color: "rgba(245,239,230,0.55)", fontSize: "13px", lineHeight: 1.7 }}>
            {t("footer.talkBody")}
          </p>
          <a href="https://wa.me/521XXXXXXXXXX" target="_blank" rel="noreferrer" className="btn-gold-outline">
            {t("footer.whatsappBtn")}
          </a>
        </div>

        {/* Col 5 */}
        <div className="space-y-4">
          <div className="ui-label">{t("footer.newsletter")}</div>
          <p style={{ color: "rgba(245,239,230,0.55)", fontSize: "13px", lineHeight: 1.7 }}>
            {t("footer.newsletterBody")}
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center"
            style={{
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(196,154,90,0.2)",
              borderRadius: "2px",
            }}
          >
            <input
              type="email"
              placeholder={t("footer.emailPlaceholder")}
              className="flex-1 bg-transparent px-3 py-2 outline-none"
              style={{
                color: "hsl(var(--cream))",
                fontSize: "13px",
              }}
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="px-3 py-2 transition-colors"
              style={{ color: "hsl(var(--gold))" }}
            >
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="px-6 md:px-16 py-5 flex flex-col md:flex-row items-center justify-between gap-3"
        style={{ borderTop: "1px solid rgba(196,154,90,0.1)" }}
      >
        <p style={{ fontSize: "11px", color: "rgba(245,239,230,0.3)", fontFamily: "'Open Sans', sans-serif" }}>
          {t("footer.rights")}
        </p>
        <p style={{ fontSize: "11px", color: "rgba(245,239,230,0.3)", fontFamily: "'Open Sans', sans-serif" }}>
          {t("footer.legal")}
        </p>
      </div>
    </footer>
  );
};
