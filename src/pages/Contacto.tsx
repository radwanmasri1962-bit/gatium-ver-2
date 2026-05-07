import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { Mail, Globe, Camera, PawPrint } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { toast } from "sonner";
import apoloWindow from "@/assets/contacto/apolo-window.jpg";
import anubisInterior from "@/assets/contacto/anubis-interior.jpg";

void PhotoPlaceholder;

const WHATSAPP = "https://wa.me/521XXXXXXXXXX";

const eyebrow: React.CSSProperties = {
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 700,
  fontSize: "10px",
  letterSpacing: "0.3em",
  textTransform: "uppercase",
  color: "hsl(var(--gold))",
};

const fieldLabel: React.CSSProperties = {
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 700,
  fontSize: "9px",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "hsl(var(--gold))",
  marginBottom: "6px",
  display: "block",
};

const inputStyle: React.CSSProperties = {
  backgroundColor: "hsl(var(--cream))",
  border: "none",
  borderBottom: "1px solid rgba(0,0,0,0.15)",
  padding: "12px 0",
  fontFamily: "'Open Sans', sans-serif",
  fontSize: "14px",
  color: "#000",
  width: "100%",
  outline: "none",
};

const PinterestIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.4 0 0 5.4 0 12c0 5 3 9.3 7.4 11.1-.1-.9-.2-2.4 0-3.4.2-.9 1.4-5.7 1.4-5.7s-.4-.7-.4-1.8c0-1.7 1-3 2.2-3 1 0 1.5.8 1.5 1.7 0 1-.7 2.6-1 4-.3 1.2.6 2.2 1.8 2.2 2.2 0 3.8-2.3 3.8-5.6 0-2.9-2.1-5-5.1-5-3.5 0-5.5 2.6-5.5 5.3 0 1 .4 2.2.9 2.8.1.1.1.2.1.3-.1.4-.3 1.2-.3 1.4-.1.2-.2.3-.4.2-1.5-.7-2.4-2.9-2.4-4.7 0-3.8 2.8-7.4 8-7.4 4.2 0 7.4 3 7.4 7 0 4.2-2.6 7.5-6.3 7.5-1.2 0-2.4-.6-2.8-1.4l-.8 2.9c-.3 1-1 2.4-1.5 3.2 1.1.4 2.3.5 3.6.5 6.6 0 12-5.4 12-12S18.6 0 12 0z" />
  </svg>
);

const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
  </svg>
);

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);

void PinterestIcon;

const Contacto = () => {
  const { lang } = useLanguage();
  const es = lang === "es";

  const schema = z.object({
    name: z
      .string()
      .trim()
      .min(2, { message: es ? "Nombre demasiado corto." : "Name too short." })
      .max(100),
    email: z
      .string()
      .trim()
      .email({ message: es ? "Correo inválido." : "Invalid email." })
      .max(255),
    phone: z.string().trim().max(40).optional().or(z.literal("")),
    city: z.string().trim().max(80).optional().or(z.literal("")),
    country: z.string().trim().max(80).optional().or(z.literal("")),
    colony: z.string().trim().max(1000).optional().or(z.literal("")),
    space: z
      .string()
      .trim()
      .min(10, { message: es ? "Cuéntanos un poco más." : "Tell us a bit more." })
      .max(2000),
    source: z.string().trim().max(80).optional().or(z.literal("")),
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    colony: "",
    space: "",
    source: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [fileName, setFileName] = useState<string>("");

  const update = (k: keyof typeof form, v: string) => {
    setForm((p) => ({ ...p, [k]: v }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((iss) => {
        const k = String(iss.path[0]);
        if (!fieldErrors[k]) fieldErrors[k] = iss.message;
      });
      setErrors(fieldErrors);
      toast.error(es ? "Revisa los campos marcados." : "Please check the highlighted fields.");
      return;
    }
    setErrors({});
    toast.success(
      es ? "Gracias. Te contactaremos muy pronto." : "Thank you. We'll be in touch shortly."
    );
    setForm({
      name: "",
      email: "",
      phone: "",
      city: "",
      country: "",
      colony: "",
      space: "",
      source: "",
    });
    setFileName("");
  };

  const countries = [
    "México",
    "Colombia",
    "Argentina",
    "Chile",
    "Perú",
    "Venezuela",
    "Ecuador",
    "Uruguay",
    "Costa Rica",
    "Panamá",
    "República Dominicana",
    "España",
    es ? "Otro" : "Other",
  ];

  const sources = es
    ? ["Instagram", "Recomendación", "Búsqueda en internet", "TikTok", "Facebook", "Otro"]
    : ["Instagram", "Recommendation", "Internet search", "TikTok", "Facebook", "Other"];

  const errorText = (k: string) =>
    errors[k] ? (
      <div
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: "11px",
          color: "#b34a3a",
          marginTop: "4px",
        }}
      >
        {errors[k]}
      </div>
    ) : null;

  return (
    <>
      <section
        className="grid grid-cols-1 md:grid-cols-2 items-center"
        style={{ backgroundColor: "hsl(var(--cream))" }}
      >
        <div className="flex flex-col justify-center px-[18px] py-[36px] md:px-16 md:py-14">
          <div className="mx-auto md:mx-0 w-full" style={{ maxWidth: "520px" }}>
            <div style={eyebrow}>{es ? "CONTACTO" : "CONTACT"}</div>
            <h1
              className="text-[30px] md:text-[52px]"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                color: "#000",
                lineHeight: 1.1,
                marginTop: "20px",
                maxWidth: "480px",
              }}
            >
              {es ? "Hablemos del hogar que tu manada " : "Let's talk about the home your colony "}
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  fontStyle: "italic",
                  color: "hsl(var(--gold))",
                  display: "block",
                }}
              >
                {es ? "merece." : "deserves."}
              </span>
            </h1>
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "15px",
                color: "rgba(0,0,0,0.72)",
                maxWidth: "420px",
                marginTop: "20px",
                lineHeight: 1.7,
              }}
            >
              {es
                ? "Cuéntanos sobre tu espacio, tu manada y lo que sueñas transformar. Estamos aquí para diseñarlo juntos."
                : "Tell us about your space, your colony and what you dream of transforming. We are here to design it together."}
            </p>
            <a
              href="#contact-form"
              style={{
                display: "inline-block",
                marginTop: "32px",
                backgroundColor: "#000",
                color: "hsl(var(--cream))",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                padding: "14px 28px",
                borderRadius: "2px",
              }}
            >
              {es ? "ENVÍANOS TU ESPACIO →" : "SEND US YOUR SPACE →"}
            </a>
          </div>
        </div>
        <div className="w-full px-[18px] md:px-16 pb-[36px] md:pb-14 md:pt-14">
          <img
            src={apoloWindow}
            alt={es ? "Gato mirando por la ventana" : "Cat looking through the window"}
            className="w-full"
            style={{ aspectRatio: "1 / 1", objectFit: "cover", objectPosition: "center", display: "block" }}
          />
        </div>
      </section>

      <section
        id="contact-form"
        className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-10 md:gap-0 px-[18px] md:px-16 py-12 md:py-16"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div>
          <div style={eyebrow}>{es ? "ENVÍANOS TU ESPACIO" : "SEND US YOUR SPACE"}</div>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: "26px",
              color: "#000",
              marginTop: "8px",
            }}
          >
            {es ? "Completa el formulario." : "Fill out the form."}
          </h2>
          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "13px",
              color: "rgba(0,0,0,0.55)",
              marginBottom: "28px",
              marginTop: "8px",
            }}
          >
            {es
              ? "Entre más detalles compartas, mejor podremos ayudarte."
              : "The more details you share, the better we can help you."}
          </p>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5 md:pr-12">
            <div>
              <label style={fieldLabel}>{es ? "NOMBRE" : "NAME"}</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder={es ? "Tu nombre" : "Your name"}
                style={inputStyle}
                maxLength={100}
                required
              />
              {errorText("name")}
            </div>
            <div>
              <label style={fieldLabel}>{es ? "CORREO ELECTRÓNICO" : "EMAIL"}</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="tu@email.com"
                style={inputStyle}
                maxLength={255}
                required
              />
              {errorText("email")}
            </div>
            <div>
              <label style={fieldLabel}>{es ? "TELÉFONO / WHATSAPP" : "PHONE / WHATSAPP"}</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="+58 412 123 4587"
                style={inputStyle}
                maxLength={40}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label style={fieldLabel}>{es ? "CIUDAD" : "CITY"}</label>
                <input
                  type="text"
                  value={form.city}
                  onChange={(e) => update("city", e.target.value)}
                  placeholder={es ? "Tu ciudad" : "Your city"}
                  style={inputStyle}
                  maxLength={80}
                />
              </div>
              <div>
                <label style={fieldLabel}>{es ? "PAÍS" : "COUNTRY"}</label>
                <select
                  value={form.country}
                  onChange={(e) => update("country", e.target.value)}
                  style={inputStyle}
                >
                  <option value="">{es ? "Selecciona" : "Select"}</option>
                  {countries.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label style={fieldLabel}>
                {es ? "CUÉNTANOS SOBRE TU MANADA" : "TELL US ABOUT YOUR COLONY"}
              </label>
              <textarea
                value={form.colony}
                onChange={(e) => update("colony", e.target.value)}
                placeholder={
                  es ? "¿Cuántos gatos tienes? ¿Cómo son?" : "How many cats do you have? What are they like?"
                }
                style={{ ...inputStyle, height: "80px", resize: "vertical", paddingTop: "10px" }}
                maxLength={1000}
              />
            </div>
            <div>
              <label style={fieldLabel}>
                {es
                  ? "CUÉNTANOS SOBRE TU ESPACIO Y LO QUE NECESITAS"
                  : "TELL US ABOUT YOUR SPACE AND NEEDS"}
              </label>
              <textarea
                value={form.space}
                onChange={(e) => update("space", e.target.value)}
                placeholder={
                  es
                    ? "Háblanos de tu hogar, tus retos y lo que te gustaría mejorar."
                    : "Tell us about your home, your challenges and what you'd like to improve."
                }
                style={{ ...inputStyle, height: "100px", resize: "vertical", paddingTop: "10px" }}
                maxLength={2000}
                required
              />
              {errorText("space")}
            </div>
            <div>
              <label style={fieldLabel}>{es ? "¿CÓMO NOS CONOCISTE?" : "HOW DID YOU FIND US?"}</label>
              <select
                value={form.source}
                onChange={(e) => update("source", e.target.value)}
                style={inputStyle}
              >
                <option value="">{es ? "Selecciona" : "Select"}</option>
                {sources.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label style={fieldLabel}>
                {es
                  ? "¿PUEDES ADJUNTAR FOTOS O PLANOS? (OPCIONAL)"
                  : "CAN YOU ATTACH PHOTOS OR PLANS? (OPTIONAL)"}
              </label>
              <label
                className="flex flex-col items-center justify-center cursor-pointer gap-2"
                style={{
                  border: "1px dashed hsl(var(--gold))",
                  borderRadius: "6px",
                  padding: "20px",
                  textAlign: "center",
                  backgroundColor: "hsl(var(--cream))",
                }}
              >
                <Camera size={24} style={{ color: "hsl(var(--gold))" }} />
                <span
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "12px",
                    color: "rgba(0,0,0,0.55)",
                  }}
                >
                  {fileName ||
                    (es
                      ? "Arrastra tus archivos aquí o haz clic para seleccionar imágenes, planos o referencias (opcional)"
                      : "Drag your files here or click to select images, plans or references (optional)")}
                </span>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  className="hidden"
                  onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
                />
              </label>
            </div>

            <button
              type="submit"
              style={{
                marginTop: "8px",
                backgroundColor: "#000",
                color: "hsl(var(--cream))",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                padding: "16px",
                width: "100%",
                borderRadius: "2px",
                border: "none",
                cursor: "pointer",
              }}
            >
              {es ? "ENVIAR MI ESPACIO →" : "SEND MY SPACE →"}
            </button>
            <p
              className="text-center"
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "11px",
                color: "rgba(0,0,0,0.45)",
                marginTop: "4px",
              }}
            >
              {es
                ? "Al enviar este formulario aceptas nuestra Política de Privacidad."
                : "By submitting this form you accept our Privacy Policy."}
            </p>
          </form>
        </div>

        <div className="md:pl-16">
          <div
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: "9px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "hsl(var(--gold))",
              marginBottom: "24px",
            }}
          >
            {es ? "PREFIERES ESCRIBIRNOS DIRECTO" : "PREFER TO WRITE US DIRECTLY"}
          </div>

          {[
            {
              Icon: Mail,
              label: es ? "ESCRÍBENOS" : "EMAIL US",
              value: "hola@gatium.com",
              href: "mailto:hola@gatium.com",
            },
            {
              Icon: WhatsAppIcon,
              label: "WHATSAPP",
              value: "+58 412 123 4567",
              href: WHATSAPP,
            },
            {
              Icon: InstagramIcon,
              label: "INSTAGRAM",
              value: "@gatium.atelierfelino",
              href: "https://instagram.com/gatium.atelierfelino",
            },
          ].map(({ Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-4"
              style={{
                padding: "16px 0",
                borderBottom: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <span style={{ color: "hsl(var(--gold))", marginTop: "2px" }}>
                <Icon size={20} />
              </span>
              <div>
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    fontSize: "8px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(0,0,0,0.4)",
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "14px",
                    color: "#000",
                    marginTop: "2px",
                  }}
                >
                  {value}
                </div>
              </div>
            </a>
          ))}

          <div style={{ height: "1px", backgroundColor: "rgba(0,0,0,0.06)", margin: "24px 0" }} />

          <div
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: "9px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "hsl(var(--gold))",
              marginBottom: "12px",
            }}
          >
            {es ? "¿DÓNDE TRABAJAMOS?" : "WHERE DO WE WORK?"}
          </div>
          <div className="flex items-start gap-3">
            <span style={{ color: "hsl(var(--gold))", marginTop: "2px" }}>
              <Globe size={20} />
            </span>
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "13px",
                color: "rgba(0,0,0,0.65)",
                lineHeight: 1.6,
              }}
            >
              {es
                ? "Trabajamos de manera remota en toda Latinoamérica y creamos piezas con fabricación local según tu ubicación."
                : "We work remotely throughout Latin America and create pieces with local manufacturing according to your location."}
            </p>
          </div>
          <Link
            to="/#solutions"
            className="inline-flex items-center gap-2"
            style={{
              marginTop: "10px",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: "9px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "hsl(var(--gold))",
            }}
          >
            {es ? "VER MÁS SOBRE NUESTROS SERVICIOS" : "SEE MORE ABOUT OUR SERVICES"} <span>→</span>
          </Link>

          <div
            style={{
              backgroundColor: "hsl(var(--near-black))",
              borderRadius: "8px",
              padding: "28px",
              marginTop: "28px",
            }}
          >
            <h3
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "18px",
                color: "hsl(var(--cream))",
                lineHeight: 1.3,
              }}
            >
              {es
                ? "Cada hogar es único. Cada manada también."
                : "Every home is unique. Every colony too."}
            </h3>
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "13px",
                color: "rgba(245,239,230,0.65)",
                marginTop: "10px",
                lineHeight: 1.6,
              }}
            >
              {es
                ? "Cuéntanos tu historia y diseñaremos un espacio que mejore su bienestar y transforme tu forma de convivir."
                : "Tell us your story and we will design a space that improves their wellbeing and transforms your way of cohabiting."}
            </p>
            <div style={{ color: "hsl(var(--gold))", marginTop: "16px" }}>
              <PawPrint size={28} strokeWidth={1.4} />
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Contacto;
