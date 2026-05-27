import type { Lang } from "@/i18n/translations";

// GATIUM WhatsApp — fixed Spanish pre-filled message
export const WHATSAPP_URL =
  "https://wa.me/5219982930144?text=%C2%A1Hola!%2C%20me%20gustar%C3%ADa%20saber%20c%C3%B3mo%20pueden%20ayudarme%20con%20un%20espacio%20para%20mi%20gato.";

// Kept for backwards compatibility with existing callers (lang is ignored).
export function whatsappUrl(_lang?: Lang): string {
  return WHATSAPP_URL;
}
