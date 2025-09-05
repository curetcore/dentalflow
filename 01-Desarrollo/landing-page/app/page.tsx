import NavbarNew from '@/components/NavbarNew'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import PricingComparison from '@/components/PricingComparison'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import WaveDivider from '@/components/WaveDivider'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <NavbarNew />
      
      {/* Sección 1: Hero - Fondo blanco */}
      <div className="bg-white">
        <Hero />
      </div>
      
      {/* Divisor: Blanco → Azul */}
      <WaveDivider 
        type="wave1" 
        color="#0066FF" 
        className="-mt-20 relative z-10"
        height={150}
      />
      
      {/* Sección 2: Features - Fondo azul */}
      <div className="bg-[#0066FF] -mt-1">
        <Features />
      </div>
      
      {/* Divisor: Azul → Blanco */}
      <WaveDivider 
        type="wave2" 
        color="#ffffff" 
        className="-mt-1"
        height={100}
        flip
      />
      
      {/* Sección 3: Testimonials - Fondo blanco */}
      <div className="bg-white -mt-1">
        <Testimonials />
      </div>
      
      {/* Divisor: Blanco → Verde */}
      <WaveDivider 
        type="curve" 
        color="#10B981" 
        className="-mt-1"
        height={80}
      />
      
      {/* Sección 4: Pricing - Fondo verde */}
      <div className="bg-[#10B981] -mt-1">
        <Pricing />
      </div>
      
      {/* Divisor: Verde → Blanco */}
      <WaveDivider 
        type="wave1" 
        color="#ffffff" 
        className="-mt-1"
        height={120}
        flip
      />
      
      {/* Sección 5: PricingComparison - Fondo blanco */}
      <div className="bg-white -mt-1">
        <PricingComparison />
      </div>
      
      {/* Divisor final antes del CTA */}
      <WaveDivider 
        type="tilt" 
        color="#00D4FF" 
        className="-mt-1"
        height={60}
        animate
      />
      
      {/* CTA y Footer - Fondo azul claro */}
      <div className="bg-[#00D4FF] -mt-1">
        <CTA />
        <Footer />
      </div>
    </main>
  )
}
