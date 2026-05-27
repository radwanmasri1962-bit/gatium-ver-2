import type { Lang } from "@/i18n/translations";

// GATIUM WhatsApp number (placeholder — replace digits when ready)
export const WHATSAPP_NUMBER = "5219982930144";

const messages: Record<Lang, string> = {
  es: `¡Hola!, me gustaría saber cómo pueden ayudarme con un espacio para mi gato.`,
  en: `Hello!, I would like to know how you can help me with a space for my cat.`,
};

export function whatsappUrl(lang: Lang): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messages[lang])}`;
}
