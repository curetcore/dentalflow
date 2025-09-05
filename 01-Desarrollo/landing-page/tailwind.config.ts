import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00A6FB',    // Dental blue (más vibrante)
        secondary: '#00D9FF',  // Cyan brillante (higiene)
        accent: '#7209B7',     // Púrpura (tecnología)
        mint: '#4ECDC4',       // Menta (frescura dental)
        pearl: '#F8F9FA',      // Blanco perla (dientes)
        lavender: '#E0AAFF',   // Lavanda suave
        coral: '#FF6B6B',      // Coral (encías saludables)
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config