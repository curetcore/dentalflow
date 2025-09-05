import NavbarNew from '@/components/NavbarNew'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import PricingComparison from '@/components/PricingComparison'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import LineDivider from '@/components/LineDivider'

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavbarNew />
      <Hero />
      <Features />
      <Testimonials />
      <LineDivider />
      <Pricing />
      <PricingComparison />
      <CTA />
      <Footer />
    </main>
  )
}