export default function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Tooth icon with gradient */}
      <defs>
        <linearGradient id="toothGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0EA5E9" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
      </defs>
      
      {/* Stylized tooth shape */}
      <path
        d="M25 5C20 5 16 9 16 14C16 16 16 18 14 20C12 22 12 26 14 30C16 34 18 36 20 36C22 36 23 34 24 30C25 26 26 26 27 30C28 34 29 36 31 36C33 36 35 34 37 30C39 26 39 22 37 20C35 18 35 16 35 14C35 9 31 5 26 5H25Z"
        fill="url(#toothGradient)"
      />
      
      {/* AI dot */}
      <circle cx="25" cy="20" r="3" fill="#FCD34D" />
      
      {/* Text: DentalFlow */}
      <text x="45" y="22" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#1F2937">
        DentalFlow
      </text>
      
      {/* Text: AI */}
      <text x="155" y="22" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#0EA5E9">
        AI
      </text>
      
      {/* Tagline */}
      <text x="45" y="35" fontFamily="Arial, sans-serif" fontSize="10" fill="#6B7280">
        Intelligent Dental Assistant
      </text>
    </svg>
  )
}