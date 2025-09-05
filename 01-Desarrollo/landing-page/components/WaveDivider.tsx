'use client'

interface WaveDividerProps {
  className?: string
}

export default function WaveDivider({ className = '' }: WaveDividerProps) {
  return (
    <div className={`w-full overflow-hidden leading-none ${className}`}>
      <svg 
        viewBox="0 0 1440 60" 
        preserveAspectRatio="none"
        className="w-full h-full"
        style={{ height: '60px' }}
      >
        <path 
          d="M0,40 Q360,10 720,40 T1440,40 L1440,60 L0,60 Z" 
          fill="currentColor"
        />
      </svg>
    </div>
  )
}