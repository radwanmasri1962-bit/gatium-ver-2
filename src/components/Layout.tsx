import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "./FloatingWhatsApp";

export const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setScrolled(false);
    const onScroll = () => {
      const threshold = isHome ? window.innerHeight - 80 : 80;
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const transparentNav = isHome && !scrolled;

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "hsl(var(--cream))" }}>
      <Navbar transparent={transparentNav} />
      <main
        key={pathname}
        className={`flex-1 page-fade ${isHome ? "" : "pt-[60px] md:pt-[72px]"}`}
      >
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};
