import { useLanguage } from "@/i18n/LanguageContext";

export const Placeholder = ({ titleKey }: { titleKey: string }) => {
  const { t } = useLanguage();
  return (
    <section className="section-padding min-h-[60vh] flex flex-col items-center justify-center text-center">
      <span className="ui-label mb-4">GATIUM · Atelier Felino</span>
      <h1>{t(titleKey)}</h1>
      <p className="caption mt-4">— próximamente / coming soon —</p>
    </section>
  );
};
