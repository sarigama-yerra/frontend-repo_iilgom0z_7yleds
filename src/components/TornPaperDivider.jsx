export default function TornPaperDivider({ className = '', color = '#0A0A0B' }) {
  // A wide SVG with an irregular torn edge, filled with the next section color
  // and an upward soft shadow to make it look like the paper sits above the hero art.
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden>
      <svg
        className="w-full block"
        style={{ height: '140px' }}
        viewBox="0 0 1600 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Soft inner shadow along the torn edge (casts onto the hero side) */}
          <filter id="tornShadow" x="-20%" y="-50%" width="140%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="8" result="blur" />
            <feOffset dy="-2" result="offset" />
            <feComponentTransfer in="offset">
              <feFuncA type="linear" slope="0.6" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Fill the lower area (next section color) so it covers the hero with a torn edge */}
        <path
          d="M0,40 C140,70 220,20 340,60 C480,110 600,30 740,70 C860,105 980,40 1100,80 C1240,125 1360,60 1600,40 L1600,200 L0,200 Z"
          fill={color}
          filter="url(#tornShadow)"
        />

        {/* Edge highlight for a subtle paper lip */}
        <path
          d="M0,40 C140,70 220,20 340,60 C480,110 600,30 740,70 C860,105 980,40 1100,80 C1240,125 1360,60 1600,40"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Slight dark rim just below the edge for depth */}
        <path
          d="M0,44 C140,74 220,24 340,64 C480,114 600,34 740,74 C860,109 980,44 1100,84 C1240,129 1360,64 1600,44"
          fill="none"
          stroke="rgba(0,0,0,0.28)"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
