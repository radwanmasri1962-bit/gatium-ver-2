import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "./FloatingWhatsApp";

export const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "hsl(var(--cream))" }}>
      <Navbar />
      <main key={pathname} className="flex-1 page-fade pt-[64px]">
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};
