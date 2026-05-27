import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import type { Lang } from "./translations";

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

import { translations } from "./translations";

function resolve(path: string, lang: Lang): string {
  const parts = path.split(".");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let node: any = translations;
  for (const p of parts) {
    if (node && typeof node === "object" && p in node) node = node[p];
    else return path;
  }
  if (node && typeof node === "object" && lang in node) return node[lang];
  return path;
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("gatium-lang", l);
  };

  const t = (path: string) => resolve(path, lang);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
