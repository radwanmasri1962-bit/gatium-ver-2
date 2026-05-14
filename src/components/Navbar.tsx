import { useEffect, useState } from "react";
import { Link, NavLink as RouterNavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoDark from "@/assets/logo-gatium.svg";
import { useLanguage } from "@/i18n/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";

const links = [
  { to: "/", key: "nav.inicio" },
  { to: "/nosotros", key: "nav.nosotros" },

  { to: "/consejo-felino", key: "nav.consejo" },
  { to: "/blog", key: "nav.blog" },
  { to: "/como-trabajamos", key: "nav.como" },
  { to: "/contacto", key: "nav.contacto" },
];

interface Props {
  transparent?: boolean;
}

export const Navbar = ({ transparent: _t = false }: Props) => {
  void _t;
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = false;
  const headerStyle: React.CSSProperties = {
    backgroundColor: "#F6F1E8",
    borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid transparent",
    boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.04)" : "none",
    transition: "border-color 300ms ease, box-shadow 300ms ease",
  };
  const iconColor = "#3B2A1A";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={headerStyle}
      data-transparent={false}
    >
      <div className="h-[60px] md:h-[72px] px-4 md:px-8 flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src={logoDark}
            alt="GATIUM Atelier Felino"
            className="h-[52px] w-auto transition-all duration-500"
            style={
              transparent
                ? {
                    filter:
                      "brightness(0) saturate(100%) invert(98%) sepia(8%) saturate(380%) hue-rotate(2deg) brightness(101%) contrast(94%)",
                  }
                : {
                    filter:
                      "brightness(0) saturate(100%) invert(15%) sepia(28%) saturate(1100%) hue-rotate(353deg) brightness(94%) contrast(88%)",
                  }
            }
          />

        </Link>

        {/* Center: Desktop links */}
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <RouterNavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `nav-link nav-link--${transparent ? "light" : "dark"} ${isActive ? "active" : ""}`
              }
              style={({ isActive }) =>
                isActive ? undefined : { color: transparent ? "#F5EFE6" : "#3B2A1A" }
              }
            >
              {t(l.key)}
            </RouterNavLink>
          ))}
        </nav>

        {/* Right: lang + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageToggle />
          <a href="#contacto" className="btn-gold" style={{ borderRadius: "8px" }}>
            {t("nav.cta")}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
          aria-label="Menu"
          style={{ color: iconColor }}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div
          className="md:hidden fixed inset-0 top-[60px] flex flex-col items-center justify-center gap-8 px-6"
          style={{ backgroundColor: "hsl(var(--near-black))" }}
        >
          <nav className="flex flex-col items-center gap-7">
            {links.map((l) => (
              <RouterNavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `nav-link nav-link--light text-base ${isActive ? "active" : ""}`}
                style={{ fontSize: "16px" }}
              >
                {t(l.key)}
              </RouterNavLink>
            ))}
          </nav>
          <div className="flex flex-col items-center gap-5 mt-4">
            <LanguageToggle />
            <a href="#contacto" className="btn-gold" onClick={() => setOpen(false)}>
              {t("nav.cta")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
