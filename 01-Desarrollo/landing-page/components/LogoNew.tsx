export default function LogoNew({ className = "h-10 md:h-12 w-auto" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background circle for logo */}
      <circle cx="30" cy="30" r="25" fill="url(#logoGradient)" opacity="0.1" />
      
      {/* Tooth icon with modern design */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0EA5E9" />
          <stop offset="50%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
        <linearGradient id="toothGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0EA5E9" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
      </defs>
      
      {/* Realistic molar tooth design */}
      <g transform="translate(30, 30)">
        <path
          d="M0 -15 C-4 -15 -8 -13 -8 -8 C-8 -5 -8 -3 -10 -1 C-11 1 -11 4 -10 8 C-8 12 -6 14 -3 14 C-1 14 0 12 0 9 C0 9 0 12 0 9 C0 12 1 14 3 14 C6 14 8 12 10 8 C11 4 11 1 10 -1 C8 -3 8 -5 8 -8 C8 -13 4 -15 0 -15 Z M-4 -8 C-4 -10 -2 -11 0 -11 C2 -11 4 -10 4 -8 C4 -6 3 -5 2 -5 C1 -5 -1 -5 -2 -5 C-3 -5 -4 -6 -4 -8 Z"
          fill="url(#toothGradient)"
        />
        {/* Tooth roots */}
        <path
          d="M-3 14 C-3 14 -3 18 -3 18 M3 14 C3 14 3 18 3 18"
          stroke="url(#toothGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
      </g>
      
      {/* AI glow effect (smaller and positioned better) */}
      <circle cx="30" cy="25" r="2.5" fill="#FCD34D" opacity="0.9">
        <animate attributeName="opacity" values="0.9;0.5;0.9" dur="2s" repeatCount="indefinite" />
      </circle>
      
      {/* Center AI dot */}
      <circle cx="30" cy="25" r="1.5" fill="#F59E0B" />
      
      {/* Text: DentalFlow */}
      <text x="60" y="32" fontFamily="system-ui, -apple-system, sans-serif" fontSize="24" fontWeight="700" fill="#1F2937">
        DentalFlow
      </text>
      
      {/* AI badge - positioned better to avoid overlap */}
      <rect x="190" y="20" width="28" height="18" rx="9" fill="url(#logoGradient)" />
      <text x="204" y="32" fontFamily="system-ui, -apple-system, sans-serif" fontSize="11" fontWeight="600" fill="white" textAnchor="middle">
        AI
      </text>
      
      {/* Tagline */}
      <text x="60" y="46" fontFamily="system-ui, -apple-system, sans-serif" fontSize="11" fill="#6B7280" fontWeight="500">
        Asistente Dental Inteligente
      </text>
      
      {/* Decorative dots */}
      <circle cx="60" cy="52" r="1" fill="#0EA5E9" opacity="0.5" />
      <circle cx="65" cy="52" r="1" fill="#06B6D4" opacity="0.5" />
      <circle cx="70" cy="52" r="1" fill="#10B981" opacity="0.5" />
    </svg>
  )
}