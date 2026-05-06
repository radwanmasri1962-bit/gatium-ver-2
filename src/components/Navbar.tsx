import { useState } from "react";
import { Link, NavLink as RouterNavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoDark from "@/assets/logo-gatium.svg";
import { useLanguage } from "@/i18n/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";

const links = [
  { to: "/", key: "nav.inicio" },
  { to: "/#solutions", key: "nav.soluciones" },
  { to: "/como-trabajamos", key: "nav.como" },
  { to: "/consejo-felino", key: "nav.consejo" },
  { to: "/contacto", key: "nav.contacto" },
];

interface Props {
  transparent?: boolean;
}

export const Navbar = (_props: Props = {}) => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: "#F5EFE6",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
        height: "64px",
      }}
    >
      <div className="h-[64px] px-4 md:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src={logoDark}
            alt="GATIUM Atelier Felino"
            className="w-auto"
            style={{
              height: "72px",
              filter:
                "brightness(0) saturate(100%) invert(15%) sepia(28%) saturate(1100%) hue-rotate(353deg) brightness(94%) contrast(88%)",
            }}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <RouterNavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className="navbar-static-link"
            >
              {t(l.key)}
            </RouterNavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <LanguageToggle />
          <a href="#contacto" className="btn-gold" style={{ borderRadius: "8px" }}>
            {t("nav.cta")}
          </a>
        </div>

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
          className="md:hidden fixed inset-0 top-[64px] flex flex-col items-center justify-center gap-8 px-6"
          style={{ backgroundColor: "#F5EFE6" }}
        >
          <nav className="flex flex-col items-center gap-7">
            {links.map((l) => (
              <RouterNavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className="navbar-static-link"
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
