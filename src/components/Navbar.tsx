import { useState } from "react";
import { Link, NavLink as RouterNavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoDark from "@/assets/logo-dark.png";
import { useLanguage } from "@/i18n/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";

const links = [
  { to: "/", key: "nav.inicio" },
  { to: "/nosotros", key: "nav.nosotros" },
  { to: "/soluciones", key: "nav.soluciones" },
  { to: "/consejo-felino", key: "nav.consejo" },
  { to: "/como-trabajamos", key: "nav.como" },
  { to: "/contacto", key: "nav.contacto" },
];

export const Navbar = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: "hsl(var(--near-black))" }}
    >
      <div className="h-[60px] md:h-[72px] px-4 md:px-8 flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img src={logoDark} alt="GATIUM Atelier Felino" className="h-9 w-auto" />
        </Link>

        {/* Center: Desktop links */}
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <RouterNavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              {t(l.key)}
            </RouterNavLink>
          ))}
        </nav>

        {/* Right: lang + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageToggle />
          <a href="#contacto" className="btn-gold">
            {t("nav.cta")}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-cream"
          aria-label="Menu"
          style={{ color: "hsl(var(--cream))" }}
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
                className={({ isActive }) => `nav-link text-base ${isActive ? "active" : ""}`}
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
