import React from 'react';

export default function SuccessAcademySeal({ className = 'w-11 h-11' }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Success Academy Mock Trial Seal"
    >
      {/* Outer SA Orange-Gold Ring */}
      <circle cx="100" cy="100" r="96" fill="#081526" stroke="#F7941D" strokeWidth="4" />
      {/* Inner White Ring */}
      <circle cx="100" cy="100" r="64" fill="#FFFFFF" stroke="#F7941D" strokeWidth="2.5" />

      {/* Circular Text Paths */}
      <defs>
        <path id="saTopArc" d="M 28,100 A 72,72 0 1,1 172,100" />
        <path id="saBottomArc" d="M 24,104 A 76,76 0 0,0 176,104" />
      </defs>

      <text
        fill="#FFFFFF"
        fontSize="14.5"
        fontWeight="700"
        letterSpacing="2.2"
        fontFamily="Inter, sans-serif"
      >
        <textPath href="#saTopArc" startOffset="50%" textAnchor="middle">
          SUCCESS ACADEMY
        </textPath>
      </text>

      <text
        fill="#F7941D"
        fontSize="14"
        fontWeight="700"
        letterSpacing="2.8"
        fontFamily="Inter, sans-serif"
      >
        <textPath href="#saBottomArc" startOffset="50%" textAnchor="middle">
          MOCK TRIAL
        </textPath>
      </text>

      {/* Subtle Side Dots */}
      <circle cx="22" cy="100" r="3" fill="#F7941D" />
      <circle cx="178" cy="100" r="3" fill="#F7941D" />

      {/* Center Scales of Justice */}
      <g fill="none" stroke="#081526" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Pillar */}
        <line x1="100" y1="54" x2="100" y2="132" />
        {/* Base */}
        <path d="M 78 136 L 122 136" strokeWidth="4.5" />
        <path d="M 85 130 L 115 130" strokeWidth="3" />
        {/* Top Finial */}
        <circle cx="100" cy="50" r="4" fill="#F7941D" stroke="none" />
        {/* Crossbar */}
        <path d="M 62 68 Q 81 62 100 68 Q 119 62 138 68" strokeWidth="3.5" />
        {/* Left Pan */}
        <line x1="64" y1="68" x2="54" y2="100" strokeWidth="2" />
        <line x1="64" y1="68" x2="74" y2="100" strokeWidth="2" />
        <path d="M 50 100 Q 64 114 78 100 Z" fill="#081526" stroke="none" />
        {/* Right Pan */}
        <line x1="136" y1="68" x2="126" y2="100" strokeWidth="2" />
        <line x1="136" y1="68" x2="146" y2="100" strokeWidth="2" />
        <path d="M 122 100 Q 136 114 150 100 Z" fill="#081526" stroke="none" />
      </g>

      {/* Simplified SA Orange Laurel Accents */}
      <g fill="#F7941D">
        <ellipse cx="78" cy="122" rx="6" ry="2.5" transform="rotate(-30 78 122)" />
        <ellipse cx="72" cy="113" rx="5.5" ry="2.3" transform="rotate(-45 72 113)" />
        <ellipse cx="122" cy="122" rx="6" ry="2.5" transform="rotate(30 122 122)" />
        <ellipse cx="128" cy="113" rx="5.5" ry="2.3" transform="rotate(45 128 113)" />
      </g>
    </svg>
  );
}
