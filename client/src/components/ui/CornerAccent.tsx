interface CornerAccentProps {
  className?: string;
  size?: string;
  color?: string;
}

export function CornerAccent({
  className = "",
  size = "w-2.5 h-2.5",
  color = "border-accent/40",
}: CornerAccentProps) {
  return (
    <>
      {/* Top Left */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -top-px -left-px border-t-2 border-l-2 ${size} ${color} ${className}`}
      />
      {/* Top Right */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -top-px -right-px border-t-2 border-r-2 ${size} ${color} ${className}`}
      />
      {/* Bottom Left */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -bottom-px -left-px border-b-2 border-l-2 ${size} ${color} ${className}`}
      />
      {/* Bottom Right */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -bottom-px -right-px border-b-2 border-r-2 ${size} ${color} ${className}`}
      />
    </>
  );
}

