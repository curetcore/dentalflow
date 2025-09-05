'use client'

interface WaveDividerProps {
  color: string
  direction?: 'up' | 'down'
  className?: string
}

export default function WaveDivider({ 
  color,
  direction = 'down',
  className = ''
}: WaveDividerProps) {
  
  return (
    <div 
      className={`w-full overflow-hidden ${className}`}
      style={{ 
        height: '60px',
        marginTop: direction === 'up' ? '-1px' : '0',
        marginBottom: direction === 'down' ? '-1px' : '0'
      }}
    >
      <svg 
        viewBox="0 0 1440 60" 
        preserveAspectRatio="none"
        className="w-full h-full"
        style={{ 
          transform: direction === 'up' ? 'rotate(180deg)' : 'none' 
        }}
      >
        <path 
          d="M0,30 Q720,0 1440,30 L1440,60 L0,60 Z" 
          fill={color}
        />
      </svg>
    </div>
  )
}