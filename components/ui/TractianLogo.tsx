interface TractianLogoProps {
  className?: string;
}

/** Tractian text logo as SVG */
export function TractianLogo({ className = "h-6" }: TractianLogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 180 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Tractian"
    >
      <text
        x="0"
        y="20"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="800"
        fontSize="22"
        letterSpacing="2"
        fill="currentColor"
      >
        TRACTIAN
      </text>
    </svg>
  );
}
