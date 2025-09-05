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
      
      {/* Modern stylized tooth */}
      <path
        d="M30 12C26 12 22 15 22 19C22 20.5 22 22 20.5 23.5C19 25 19 28 20.5 31C22 34 23.5 35.5 25.5 35.5C27 35.5 28 34 29 31C30 28 30 28 31 31C32 34 33 35.5 34.5 35.5C36.5 35.5 38 34 39.5 31C41 28 41 25 39.5 23.5C38 22 38 20.5 38 19C38 15 34 12 30 12Z"
        fill="url(#toothGradient)"
      />
      
      {/* AI glow effect */}
      <circle cx="30" cy="24" r="4" fill="#FCD34D" opacity="0.9">
        <animate attributeName="r" values="4;5;4" dur="2s" repeatCount="indefinite" />
      </circle>
      
      {/* Center AI dot */}
      <circle cx="30" cy="24" r="2.5" fill="#F59E0B" />
      
      {/* Text: DentalFlow */}
      <text x="60" y="28" fontFamily="system-ui, -apple-system, sans-serif" fontSize="24" fontWeight="700" fill="#1F2937">
        DentalFlow
      </text>
      
      {/* AI badge */}
      <rect x="195" y="16" width="35" height="24" rx="12" fill="url(#logoGradient)" />
      <text x="213" y="31" fontFamily="system-ui, -apple-system, sans-serif" fontSize="14" fontWeight="600" fill="white" textAnchor="middle">
        AI
      </text>
      
      {/* Tagline */}
      <text x="60" y="42" fontFamily="system-ui, -apple-system, sans-serif" fontSize="11" fill="#6B7280" fontWeight="500">
        Intelligent Dental Assistant
      </text>
      
      {/* Decorative dots */}
      <circle cx="60" cy="48" r="1" fill="#0EA5E9" opacity="0.5" />
      <circle cx="65" cy="48" r="1" fill="#06B6D4" opacity="0.5" />
      <circle cx="70" cy="48" r="1" fill="#10B981" opacity="0.5" />
    </svg>
  )
}