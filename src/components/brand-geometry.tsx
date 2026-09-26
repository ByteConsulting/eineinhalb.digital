/**
 * Decorative skyline / half-circle derived from the brand mark.
 * Used as full-bleed atmosphere — not a card.
 */
export function BrandGeometry({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* left towers */}
      <path
        d="M72 320 V148 L108 118 V320 Z"
        className="fill-forest"
        opacity="0.92"
      />
      <path
        d="M118 320 V168 L156 138 V320 Z"
        className="fill-charcoal"
        opacity="0.75"
      />
      <rect x="68" y="320" width="48" height="8" className="fill-forest" />
      <rect x="114" y="320" width="48" height="8" className="fill-charcoal" opacity="0.75" />

      {/* half circle + stem */}
      <path
        d="M210 268 A118 118 0 0 1 446 268 L210 268 Z"
        className="fill-copper"
      />
      <rect x="312" y="268" width="22" height="60" rx="4" className="fill-forest" />
      <path
        d="M312 268 V248 C312 236 320 228 332 228 C344 228 354 236 354 248 V268"
        className="stroke-forest"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
      />

      {/* open frame */}
      <rect
        x="470"
        y="188"
        width="72"
        height="140"
        rx="4"
        className="stroke-charcoal"
        strokeWidth="10"
        opacity="0.55"
      />

      {/* ground line */}
      <line
        x1="40"
        y1="340"
        x2="600"
        y2="340"
        className="stroke-forest"
        strokeWidth="2"
        opacity="0.2"
      />
    </svg>
  );
}
