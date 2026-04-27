interface Props {
  label: string;
  ratio?: string;
  dark?: boolean;
  className?: string;
}

export const PhotoPlaceholder = ({ label, ratio, dark, className }: Props) => (
  <div
    className={`relative w-full h-full flex items-center justify-center overflow-hidden ${className ?? ""}`}
    style={{
      backgroundColor: dark ? "#2C2420" : "hsl(var(--beige))",
      aspectRatio: ratio,
    }}
  >
    <span
      style={{
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 700,
        fontSize: "9px",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: dark ? "rgba(245,239,230,0.3)" : "rgba(0,0,0,0.3)",
        textAlign: "center",
        padding: "0 12px",
      }}
    >
      {label}
    </span>
    <span
      className="absolute bottom-3 right-4"
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontStyle: "italic",
        fontSize: "11px",
        color: dark ? "rgba(245,239,230,0.3)" : "rgba(0,0,0,0.3)",
      }}
    >
      © GATIUM
    </span>
  </div>
);
