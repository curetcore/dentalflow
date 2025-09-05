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
      <section className="bg-white">
        <Hero />
        <WaveDivider color="#0066FF" direction="down" />
      </section>
      
      {/* Sección 2: Features - Fondo azul */}
      <section className="bg-[#0066FF] text-white">
        <Features />
      </section>
      
      {/* Transición simétrica */}
      <section className="bg-[#0066FF]">
        <WaveDivider color="#0066FF" direction="up" />
      </section>
      
      {/* Sección 3: Testimonials - Fondo blanco */}
      <section className="bg-white">
        <Testimonials />
        <WaveDivider color="#10B981" direction="down" />
      </section>
      
      {/* Sección 4: Pricing - Fondo verde */}
      <section className="bg-[#10B981] text-white">
        <Pricing />
      </section>
      
      {/* Transición simétrica */}
      <section className="bg-[#10B981]">
        <WaveDivider color="#10B981" direction="up" />
      </section>
      
      {/* Sección 5: PricingComparison - Fondo blanco */}
      <section className="bg-white">
        <PricingComparison />
        <WaveDivider color="#00D4FF" direction="down" />
      </section>
      
      {/* Sección 6: CTA y Footer - Fondo azul claro */}
      <section className="bg-[#00D4FF]">
        <CTA />
        <Footer />
      </section>
    </main>
  )
}