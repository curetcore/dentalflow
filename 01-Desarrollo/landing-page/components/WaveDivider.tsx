'use client'

interface WaveDividerProps {
  type?: 'wave1' | 'wave2' | 'wave3' | 'curve' | 'diagonal' | 'zigzag' | 'tooth' | 'bubble' | 'tilt'
  color?: string
  className?: string
  flip?: boolean
  opacity?: number
  animate?: boolean
  height?: number
}

export default function WaveDivider({ 
  type = 'wave1', 
  color = 'primary',
  className = '',
  flip = false,
  opacity = 1,
  animate = false,
  height = 120
}: WaveDividerProps) {
  
  // Mapeo de colores del tema
  const colorMap: { [key: string]: string } = {
    'primary': '#00A6FB',
    'secondary': '#00D9FF',
    'accent': '#7209B7',
    'mint': '#4ECDC4',
    'pearl': '#F8F9FA',
    'lavender': '#E0AAFF',
    'coral': '#FF6B6B',
    'white': '#FFFFFF',
    'gray': '#F3F4F6'
  }
  
  const finalColor = colorMap[color] || color
  
  const dividers = {
    // Ondas múltiples con capas (estilo Shrine Pro)
    wave1: (
      <svg 
        viewBox="0 0 1440 120" 
        preserveAspectRatio="none"
        className="w-full h-full"
        style={{ transform: flip ? 'scaleY(-1)' : 'none' }}
      >
        <path 
          d="M0,32 C240,96 480,0 720,32 C960,64 1200,0 1440,32 L1440,120 L0,120 Z" 
          fill={finalColor}
          fillOpacity={opacity * 0.2}
          className={animate ? 'animate-pulse' : ''}
        />
        <path 
          d="M0,64 C240,128 480,32 720,64 C960,96 1200,32 1440,64 L1440,120 L0,120 Z" 
          fill={finalColor}
          fillOpacity={opacity * 0.4}
        />
        <path 
          d="M0,96 C240,64 480,128 720,96 C960,64 1200,128 1440,96 L1440,120 L0,120 Z" 
          fill={finalColor}
          fillOpacity={opacity}
        />
      </svg>
    ),
    
    // Onda suave simple
    wave2: (
      <svg 
        viewBox="0 0 1440 100" 
        preserveAspectRatio="none"
        className="w-full h-full"
        style={{ transform: flip ? 'scaleY(-1)' : 'none' }}
      >
        <path 
          d="M0,20 Q360,60 720,20 T1440,20 L1440,100 L0,100 Z" 
          fill={finalColor}
          fillOpacity={opacity}
        />
      </svg>
    ),
    
    // Ondas oceánicas estilo Shrine Pro
    wave3: (
      <svg 
        viewBox="0 0 1440 150" 
        preserveAspectRatio="none"
        className="w-full h-full"
        style={{ transform: flip ? 'scaleY(-1)' : 'none' }}
      >
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={finalColor} stopOpacity={opacity * 0.3} />
            <stop offset="50%" stopColor={finalColor} stopOpacity={opacity * 0.6} />
            <stop offset="100%" stopColor={finalColor} stopOpacity={opacity * 0.3} />
          </linearGradient>
        </defs>
        <path 
          d="M0,50 C150,100 350,0 500,50 C650,100 850,0 1000,50 C1150,100 1350,0 1440,50 L1440,150 L0,150 Z" 
          fill="url(#wave-gradient)"
        />
        <path 
          d="M0,80 C200,40 400,120 600,80 C800,40 1000,120 1200,80 C1320,60 1380,90 1440,80 L1440,150 L0,150 Z" 
          fill={finalColor}
          fillOpacity={opacity * 0.5}
        />
        <path 
          d="M0,110 C180,80 360,140 540,110 C720,80 900,140 1080,110 C1260,80 1380,120 1440,110 L1440,150 L0,150 Z" 
          fill={finalColor}
          fillOpacity={opacity * 0.8}
        />
      </svg>
    ),
    
    // Curva elegante
    curve: (
      <svg 
        viewBox="0 0 1440 100" 
        preserveAspectRatio="none"
        className="w-full h-full"
        style={{ transform: flip ? 'scaleY(-1)' : 'none' }}
      >
        <path 
          d="M0,100 C480,0 960,0 1440,100 L1440,100 L0,100 Z" 
          fill={finalColor}
          fillOpacity={opacity}
        />
      </svg>
    ),
    
    // Diagonal moderna
    diagonal: (
      <svg 
        viewBox="0 0 1440 100" 
        preserveAspectRatio="none"
        className="w-full h-full"
        style={{ transform: flip ? 'scaleY(-1)' : 'none' }}
      >
        <path 
          d="M0,100 L1440,0 L1440,100 Z" 
          fill={finalColor}
          fillOpacity={opacity}
        />
      </svg>
    ),
    
    // Tilt moderna (alias de diagonal)
    tilt: (
      <svg 
        viewBox="0 0 1440 100" 
        preserveAspectRatio="none"
        className="w-full h-full"
        style={{ transform: flip ? 'scaleY(-1)' : 'none' }}
      >
        <path 
          d="M0,100 L1440,0 L1440,100 Z" 
          fill={finalColor}
          fillOpacity={opacity}
        />
      </svg>
    ),
    
    // Zigzag dinámico
    zigzag: (
      <svg 
        viewBox="0 0 1440 100" 
        preserveAspectRatio="none"
        className="w-full h-full"
        style={{ transform: flip ? 'scaleY(-1)' : 'none' }}
      >
        <path 
          d="M0,50 L180,100 L360,50 L540,100 L720,50 L900,100 L1080,50 L1260,100 L1440,50 L1440,100 L0,100 Z" 
          fill={finalColor}
          fillOpacity={opacity}
        />
      </svg>
    ),
    
    // Forma de diente (temática dental)
    tooth: (
      <svg 
        viewBox="0 0 1440 120" 
        preserveAspectRatio="none"
        className="w-full h-full"
        style={{ transform: flip ? 'scaleY(-1)' : 'none' }}
      >
        <path 
          d="M0,60 Q180,20 360,60 T720,60 Q900,20 1080,60 T1440,60 L1440,120 L0,120 Z" 
          fill={finalColor}
          fillOpacity={opacity * 0.3}
        />
        <path 
          d="M0,80 Q180,40 360,80 T720,80 Q900,40 1080,80 T1440,80 L1440,120 L0,120 Z" 
          fill={finalColor}
          fillOpacity={opacity * 0.6}
        />
        <path 
          d="M0,100 Q180,60 360,100 T720,100 Q900,60 1080,100 T1440,100 L1440,120 L0,120 Z" 
          fill={finalColor}
          fillOpacity={opacity}
        />
      </svg>
    ),
    
    // Burbujas (limpieza y frescura)
    bubble: (
      <svg 
        viewBox="0 0 1440 100" 
        preserveAspectRatio="none"
        className="w-full h-full"
        style={{ transform: flip ? 'scaleY(-1)' : 'none' }}
      >
        <circle cx="200" cy="50" r="30" fill={finalColor} fillOpacity={opacity * 0.3} />
        <circle cx="400" cy="30" r="20" fill={finalColor} fillOpacity={opacity * 0.4} />
        <circle cx="600" cy="60" r="25" fill={finalColor} fillOpacity={opacity * 0.3} />
        <circle cx="800" cy="40" r="35" fill={finalColor} fillOpacity={opacity * 0.2} />
        <circle cx="1000" cy="55" r="22" fill={finalColor} fillOpacity={opacity * 0.4} />
        <circle cx="1200" cy="35" r="28" fill={finalColor} fillOpacity={opacity * 0.3} />
        <path 
          d="M0,80 C360,60 720,90 1080,75 Q1260,70 1440,80 L1440,100 L0,100 Z" 
          fill={finalColor}
          fillOpacity={opacity}
        />
      </svg>
    )
  }

  return (
    <div 
      className={`w-full overflow-hidden leading-none ${className}`}
      style={{ height: `${height}px` }}
    >
      <div className={animate ? 'animate-[wave_10s_ease-in-out_infinite]' : ''}>
        {dividers[type]}
      </div>
    </div>
  )
}
