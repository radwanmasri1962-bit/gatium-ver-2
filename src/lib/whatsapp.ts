import type { Lang } from "@/i18n/translations";

// GATIUM WhatsApp number (placeholder — replace digits when ready)
export const WHATSAPP_NUMBER = "5219982930144";

const WHATSAPP_MESSAGE = "¡Hola!, me gustaría saber cómo pueden ayudarme con un espacio para mi gato.";

export function whatsappUrl(_lang: Lang): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}
