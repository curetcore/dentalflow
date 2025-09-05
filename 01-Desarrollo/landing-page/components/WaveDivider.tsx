'use client'

interface WaveDividerProps {
  fromColor: string
  height?: number
  className?: string
}

export default function WaveDivider({ 
  fromColor,
  height = 60,
  className = ''
}: WaveDividerProps) {
  
  return (
    <div 
      className={`w-full overflow-hidden ${className}`}
      style={{ 
        height: `${height}px`,
        marginTop: '-1px'
      }}
    >
      <svg 
        viewBox="0 0 1440 60" 
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <path 
          d="M0,0 Q360,30 720,30 T1440,0 L1440,60 L0,60 Z" 
          fill={fromColor}
        />
      </svg>
    </div>
  )
}