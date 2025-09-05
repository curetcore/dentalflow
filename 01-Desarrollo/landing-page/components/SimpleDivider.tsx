interface SimpleDividerProps {
  fromColor: string
  toColor: string
  type?: 'wave' | 'straight'
}

export default function SimpleDivider({ fromColor, toColor, type = 'wave' }: SimpleDividerProps) {
  if (type === 'straight') {
    return (
      <div 
        className="h-24" 
        style={{
          background: `linear-gradient(to bottom, ${fromColor}, ${toColor})`
        }}
      />
    )
  }

  return (
    <div className="relative h-24 overflow-hidden">
      <svg
        viewBox="0 0 1200 120"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C300,90 900,30 1200,60 L1200,120 L0,120 Z"
          fill={toColor}
        />
      </svg>
      <div 
        className="absolute inset-0 -z-10" 
        style={{ backgroundColor: fromColor }}
      />
    </div>
  )
}