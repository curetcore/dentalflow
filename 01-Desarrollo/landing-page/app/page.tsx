import NavbarNew from '@/components/NavbarNew'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import PricingComparison from '@/components/PricingComparison'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavbarNew />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-blue-500">
        <Hero />
      </section>
      
      {/* Features */}
      <section className="bg-white">
        <Features />
      </section>
      
      {/* Testimonials/Metrics */}
      <section className="bg-gray-50">
        <Testimonials />
      </section>
      
      {/* Pricing */}
      <section className="bg-white">
        <Pricing />
      </section>
      
      {/* Pricing Comparison */}
      <section className="bg-gray-50">
        <PricingComparison />
      </section>
      
      {/* CTA Final */}
      <section className="bg-blue-500 text-white">
        <CTA />
      </section>
      
      {/* Footer */}
      <section className="bg-gray-900 text-white">
        <Footer />
      </section>
    </main>
  )
}