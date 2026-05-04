export type Lang = "es" | "en";

export const translations = {
  nav: {
    inicio: { es: "Inicio", en: "Home" },
    nosotros: { es: "Nosotros", en: "About" },
    soluciones: { es: "Soluciones", en: "Solutions" },
    consejo: { es: "Consejo Felino", en: "Feline Advice" },
    como: { es: "Cómo Trabajamos", en: "How We Work" },
    contacto: { es: "Contacto", en: "Contact" },
    cta: { es: "ENVÍANOS TU ESPACIO", en: "SEND US YOUR SPACE" },
  },
  footer: {
    tagline: {
      es: "Diseño felino con criterio, pensado desde la convivencia real.",
      en: "Feline design with purpose, thought from real cohabitation.",
    },
    navigation: { es: "NAVEGACIÓN", en: "NAVIGATION" },
    solutions: { es: "SOLUCIONES", en: "SOLUTIONS" },
    talk: { es: "HABLEMOS", en: "LET'S TALK" },
    newsletter: { es: "NEWSLETTER", en: "NEWSLETTER" },
    talkBody: {
      es: "Cuéntanos cómo viven tus gatos y diseñemos juntos soluciones que mejoren su bienestar y la convivencia.",
      en: "Tell us how your cats live and let's design solutions together.",
    },
    whatsappBtn: { es: "ESCRIBIR POR WHATSAPP", en: "MESSAGE ON WHATSAPP" },
    newsletterBody: {
      es: "Recibe consejos, inspiración y novedades de GATIUM.",
      en: "Receive tips, inspiration and GATIUM news.",
    },
    emailPlaceholder: { es: "Tu correo electrónico", en: "Your email address" },
    rights: {
      es: "© 2024 GATIUM Atelier Felino. Todos los derechos reservados.",
      en: "© 2024 GATIUM Atelier Felino. All rights reserved.",
    },
    legal: {
      es: "Términos y condiciones · Aviso de privacidad",
      en: "Terms and conditions · Privacy policy",
    },
    sol: {
      catios: { es: "Patios y espacios exteriores seguros", en: "Safe patios and outdoor spaces" },
      verticales: { es: "Muros y recorridos verticales", en: "Vertical walls and pathways" },
      mobiliario: { es: "Mobiliario funcional para convivencia felina", en: "Functional furniture for feline cohabitation" },
    },
  },
} as const;
