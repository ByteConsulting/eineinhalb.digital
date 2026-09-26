/**
 * Decorative cursor accent inspired by the brand mark.
 */
export function BrandGeometry({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <circle cx="210" cy="180" r="150" className="stroke-copper/25" strokeWidth="1.5" />
      <circle cx="210" cy="180" r="100" className="stroke-forest/15" strokeWidth="1.5" />
      <g transform="translate(168 118)">
        <path
          className="fill-copper"
          d="M8 8 92 68l-26 6 20 46-22 10-20-46-24 20Z"
        />
        <path
          className="stroke-copper"
          strokeWidth="8"
          strokeLinecap="round"
          d="M108 28v-28M132 58h28M102 98l22 22"
        />
      </g>
      <text
        x="210"
        y="300"
        textAnchor="middle"
        className="fill-forest"
        style={{ fontSize: 72, fontWeight: 800, fontFamily: "system-ui, sans-serif" }}
        opacity="0.12"
      >
        1½
      </text>
    </svg>
  );
}
