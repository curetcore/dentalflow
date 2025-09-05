import NavbarWithLogin from '@/components/NavbarWithLogin'
import HeroImproved from '@/components/HeroImproved'
import FeaturesImproved from '@/components/FeaturesImproved'
import TestimonialsNew from '@/components/TestimonialsNew'
import Pricing from '@/components/Pricing'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavbarWithLogin />
      <HeroImproved />
      <FeaturesImproved />
      <TestimonialsNew />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}