import type { Lang } from "@/i18n/translations";

// GATIUM WhatsApp number (placeholder — replace digits when ready)
export const WHATSAPP_NUMBER = "5219982930144";

const messages: Record<Lang, string> = {
  es: `Hola, bienvenida a GATIUM Atelier Felino 🐾

Gracias por escribirnos. Antes de comenzar, nos encantaría conocer al verdadero dueño del territorio 👑🐱

Para iniciar mi consulta, comparto:

🐱 Nombre de mi gato:
📷 Foto de mi gato: (la adjunto enseguida)
🏡 Sobre mi espacio y lo que me gustaría lograr:`,
  en: `Hello, welcome to GATIUM Atelier Felino 🐾

Thank you for reaching out to us. Before we begin, we would love to meet the true owner of the territory 👑🐱

To start my consultation, I'm sharing:

🐱 My cat's name:
📷 My cat's photo: (attaching next)
🏡 About my space and what I would like to achieve:`,
};

export function whatsappUrl(lang: Lang): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messages[lang])}`;
}
