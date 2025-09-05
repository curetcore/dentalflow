import Navbar from '@/components/Navbar'
import HeroNew from '@/components/HeroNew'
import FeaturesNew from '@/components/FeaturesNew'
import TestimonialsNew from '@/components/TestimonialsNew'
import Pricing from '@/components/Pricing'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroNew />
      <FeaturesNew />
      <TestimonialsNew />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}