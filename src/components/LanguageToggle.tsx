import { useLanguage } from "@/i18n/LanguageContext";

export const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();
  return (
    <div
      className="inline-flex items-center rounded-full p-1"
      style={{
        backgroundColor: "rgba(30,26,23,0.9)",
        border: "1px solid rgba(196,154,90,0.35)",
      }}
    >
      {(["es", "en"] as const).map((l) => {
        const active = lang === l;
        return (
          <button
            key={l}
            onClick={() => setLang(l)}
            className="px-3 py-1 rounded-full font-display font-bold uppercase transition-colors"
            style={{
              fontSize: "10px",
              letterSpacing: "0.2em",
              backgroundColor: active ? "hsl(var(--gold))" : "transparent",
              color: active ? "hsl(var(--near-black))" : "rgba(196,154,90,0.45)",
            }}
            aria-pressed={active}
          >
            {l.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
};
