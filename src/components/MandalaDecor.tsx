/** Reusable mandala SVG — use as a decorative background element. */
export function MandalaDecor({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="200" cy="200" r="195" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="200" cy="200" r="165" stroke="currentColor" strokeWidth="0.4" />
      <circle cx="200" cy="200" r="135" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="200" cy="200" r="105" stroke="currentColor" strokeWidth="0.4" />
      <circle cx="200" cy="200" r="75" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="200" cy="200" r="45" stroke="currentColor" strokeWidth="0.4" />
      <circle cx="200" cy="200" r="20" stroke="currentColor" strokeWidth="0.5" />
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
        <line
          key={`l-${angle}`}
          x1="200" y1="5" x2="200" y2="395"
          stroke="currentColor" strokeWidth="0.35"
          transform={`rotate(${angle} 200 200)`}
        />
      ))}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <ellipse
          key={`e-${angle}`}
          cx="200" cy="120" rx="20" ry="80"
          stroke="currentColor" strokeWidth="0.35"
          transform={`rotate(${angle} 200 200)`}
        />
      ))}
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <ellipse
          key={`e2-${angle}`}
          cx="200" cy="80" rx="12" ry="120"
          stroke="currentColor" strokeWidth="0.3"
          transform={`rotate(${angle} 200 200)`}
        />
      ))}
    </svg>
  );
}
