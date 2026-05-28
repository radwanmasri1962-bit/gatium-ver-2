import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Mail, ArrowRight } from "lucide-react";
import logoDark from "@/assets/logo-dark.png";
import jaraLogo from "@/assets/jara-ai-logo.png";
import { useLanguage } from "@/i18n/LanguageContext";
import { whatsappUrl } from "@/lib/whatsapp";

const TikTokIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.83a8.16 8.16 0 0 0 4.77 1.52V6.91a4.85 4.85 0 0 1-1.84-.22z" />
  </svg>
);

export const Footer = () => {
  const { t, lang } = useLanguage();

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
      <div className="px-6 md:px-16 pt-16 pb-10 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Col 1 */}
        <div className="space-y-5">
          <img src={logoDark} alt="GATIUM" className="h-8 w-auto" />
          <p style={{ color: "rgba(245,239,230,0.55)", fontSize: "13px", lineHeight: 1.7 }}>
            {t("footer.tagline")}
          </p>
          <div className="flex items-center gap-4" style={{ color: "rgba(196,154,90,0.6)" }}>
            <a href="https://instagram.com/gatium.atelierfelino" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://facebook.com/gatium.atelierfelino" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="https://tiktok.com/@gatium.atelierfelino" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors" aria-label="TikTok">
              <TikTokIcon size={18} />
            </a>
            <a href="https://linkedin.com/company/gatium" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="mailto:gatium.af@gmail.com" className="hover:text-gold transition-colors" aria-label="Email">
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


        {/* Col 4 */}
        <div className="space-y-4">
          <div className="ui-label">{t("footer.talk")}</div>
          <p style={{ color: "rgba(245,239,230,0.55)", fontSize: "13px", lineHeight: 1.7 }}>
            {t("footer.talkBody")}
          </p>
          <a href={whatsappUrl(lang)} target="_blank" rel="noreferrer" className="btn-gold-outline">
            {t("footer.whatsappBtn")}
          </a>
        </div>

      </div>

      {/* Powered by JARA AI */}
      <div
        className="px-6 md:px-16 py-5 flex items-center justify-center"
        style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}
      >
        <a
          href="https://jaraai.co/en"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center group"
          style={{ gap: "8px", opacity: 0.6, transition: "opacity 200ms ease" }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.6")}
        >
          <span style={{ fontFamily: "'Roboto', sans-serif", fontSize: "13px", color: "#ffffff" }}>
            Built with
          </span>
          <img src={jaraLogo} alt="JARA AI" style={{ height: "24px", width: "auto", verticalAlign: "middle" }} />
        </a>
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
