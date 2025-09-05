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
    <main className="min-h-screen">
      <NavbarNew />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-blue-500 pb-0">
        <Hero />
      </section>
      
      {/* Features */}
      <section className="bg-white pt-0">
        <WaveDivider className="text-blue-500 -mb-1" />
        <Features />
      </section>
      
      {/* Testimonials/Metrics */}
      <section className="bg-gray-50 pt-0">
        <WaveDivider className="text-white -mb-1" />
        <Testimonials />
      </section>
      
      {/* Pricing */}
      <section className="bg-white pt-0">
        <WaveDivider className="text-gray-50 -mb-1" />
        <Pricing />
      </section>
      
      {/* Pricing Comparison */}
      <section className="bg-white">
        <PricingComparison />
      </section>
      
      {/* CTA Final */}
      <section className="bg-blue-500 pt-0">
        <WaveDivider className="text-white -mb-1" />
        <CTA />
      </section>
      
      {/* Footer */}
      <section className="bg-gray-900 pt-0">
        <WaveDivider className="text-blue-500 -mb-1" />
        <div className="text-white">
          <Footer />
        </div>
      </section>
    </main>
  )
}