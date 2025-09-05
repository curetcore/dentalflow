import NavbarNew from '@/components/NavbarNew'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import PricingComparison from '@/components/PricingComparison'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import SimpleDivider from '@/components/SimpleDivider'

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavbarNew />
      <Hero />
      <SimpleDivider fromColor="#FFFFFF" toColor="#F9FAFB" type="wave" />
      <Features />
      <SimpleDivider fromColor="#F9FAFB" toColor="#FFFFFF" type="wave" />
      <Testimonials />
      <SimpleDivider fromColor="#FFFFFF" toColor="#F9FAFB" type="wave" />
      <Pricing />
      <SimpleDivider fromColor="#F9FAFB" toColor="#FFFFFF" type="wave" />
      <PricingComparison />
      <SimpleDivider fromColor="#FFFFFF" toColor="#10B981" type="straight" />
      <CTA />
      <SimpleDivider fromColor="#10B981" toColor="#111827" type="straight" />
      <Footer />
    </main>
  )
}