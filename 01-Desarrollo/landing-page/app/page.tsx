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
      
      {/* Hero - Fondo azul primario */}
      <section className="bg-[#0066FF]">
        <Hero />
      </section>
      
      {/* Divisor azul → blanco */}
      <WaveDivider fromColor="#0066FF" />
      
      {/* Features - Fondo blanco */}
      <section className="bg-white">
        <Features />
      </section>
      
      {/* Divisor blanco → cyan suave */}
      <WaveDivider fromColor="#FFFFFF" />
      
      {/* Benefits/Testimonials - Fondo cyan claro */}
      <section className="bg-[#E0F2FE]">
        <Testimonials />
      </section>
      
      {/* Divisor cyan → blanco */}
      <WaveDivider fromColor="#E0F2FE" />
      
      {/* Pricing - Fondo blanco */}
      <section className="bg-white">
        <Pricing />
      </section>
      
      {/* Divisor blanco → verde suave */}
      <WaveDivider fromColor="#FFFFFF" />
      
      {/* PricingComparison - Fondo verde suave */}
      <section className="bg-[#ECFDF5]">
        <PricingComparison />
      </section>
      
      {/* Divisor verde → blanco */}
      <WaveDivider fromColor="#ECFDF5" />
      
      {/* CTA Final - Fondo blanco */}
      <section className="bg-white">
        <CTA />
      </section>
      
      {/* Divisor blanco → azul oscuro */}
      <WaveDivider fromColor="#FFFFFF" />
      
      {/* Footer - Fondo azul oscuro */}
      <section className="bg-[#003D99]">
        <Footer />
      </section>
    </main>
  )
}