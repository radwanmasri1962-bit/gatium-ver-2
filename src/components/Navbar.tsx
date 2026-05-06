import { useState } from "react";
import { Link, NavLink as RouterNavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoDark from "@/assets/logo-gatium.svg";
import { useLanguage } from "@/i18n/LanguageContext";

const links = [
  { to: "/", key: "nav.inicio" },
  { to: "/soluciones", key: "nav.soluciones", fallback: "Soluciones" },
  { to: "/como-trabajamos", key: "nav.como" },
  { to: "/consejo-felino", key: "nav.consejo" },
  { to: "/contacto", key: "nav.contacto" },
];

export const Navbar = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        height: "64px",
        backgroundColor: "hsl(var(--cream))",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <div className="h-full px-4 md:px-8 flex items-center justify-between max-w-[1400px] mx-auto">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src={logoDark}
            alt="GATIUM Atelier Felino"
            style={{
              height: "36px",
              width: "auto",
              filter:
                "brightness(0) saturate(100%) invert(15%) sepia(28%) saturate(1100%) hue-rotate(353deg) brightness(94%) contrast(88%)",
            }}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const label = t(l.key);
            const text = label === l.key && l.fallback ? l.fallback : label;
            return (
              <RouterNavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className="navbar-link"
              >
                {text}
              </RouterNavLink>
            );
          })}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
          aria-label="Menu"
          style={{ color: "#3B2A1A" }}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden fixed inset-0 top-[64px] flex flex-col items-center justify-start pt-10 gap-6 px-6"
          style={{ backgroundColor: "hsl(var(--cream))" }}
        >
          {links.map((l) => {
            const label = t(l.key);
            const text = label === l.key && l.fallback ? l.fallback : label;
            return (
              <RouterNavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className="navbar-link"
              >
                {text}
              </RouterNavLink>
            );
          })}
        </div>
      )}
    </header>
  );
};
