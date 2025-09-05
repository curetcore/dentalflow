"use client"

import { motion } from "framer-motion"
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/contexts/LanguageContext"

const testimonials = [
  {
    id: 1,
    name: "Dra. Sarah Rodríguez",
    role: "Propietaria",
    clinic: "SmileCare Dental",
    location: "Santo Domingo, RD",
    image: null,
    initials: "SR",
    rating: 5,
    quote: {
      es: "DentalFlow AI transformó completamente nuestra práctica. Pasamos de 30% de ausencias a menos del 8%. El ROI fue inmediato - recuperamos la inversión en solo 3 semanas.",
      en: "DentalFlow AI completely transformed our practice. We went from 30% no-shows to less than 8%. The ROI was immediate - we recovered the investment in just 3 weeks."
    },
    metrics: {
      metric: { es: "Incremento de Ingresos", en: "Revenue Increase" },
      value: "+42%",
      period: { es: "en 2 meses", en: "in 2 months" }
    }
  },
  {
    id: 2,
    name: "Dr. Miguel Pérez",
    role: "Director Clínico",
    clinic: "Advanced Dental Group",
    location: "Santiago, RD",
    image: null,
    initials: "MP",
    rating: 5,
    quote: {
      es: "Las predicciones de IA son increíblemente precisas. María sabe qué pacientes probablemente faltarán y ajusta su enfoque en consecuencia. Es como tener un miembro del equipo que nunca olvida.",
      en: "The AI predictions are incredibly accurate. Maria knows which patients are likely to miss appointments and adjusts her approach accordingly. It's like having a team member who never forgets."
    },
    metrics: {
      metric: { es: "Reducción de Ausencias", en: "No-show Reduction" },
      value: "-73%",
      period: { es: "en 6 semanas", en: "in 6 weeks" }
    }
  },
  {
    id: 3,
    name: "Dra. Ana Martínez",
    role: "Gerente de Práctica",
    clinic: "Family Dental Care",
    location: "La Romana, RD",
    image: null,
    initials: "AM",
    rating: 5,
    quote: {
      es: "¡Nuestros pacientes aman a María! Dicen que es amigable y siempre responde rápidamente. Algunos incluso comparten historias personales con ella. Realmente es parte de nuestro equipo ahora.",
      en: "Our patients love Maria! They say she's friendly and always responds quickly. Some even share personal stories with her. She's truly part of our team now."
    },
    metrics: {
      metric: { es: "Satisfacción del Paciente", en: "Patient Satisfaction" },
      value: "4.9★",
      period: { es: "calificación constante", en: "consistent rating" }
    }
  }
]

export default function TestimonialsNew() {
  const { language, t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t.testimonials.title1}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> {t.testimonials.title2}</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-center"
        >
          <div className="bg-gray-50 rounded-2xl p-6">
            <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">2,500+</p>
            <p className="text-sm md:text-base text-gray-600">{t.testimonials.stats.activeClinics}</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">1.5M+</p>
            <p className="text-sm md:text-base text-gray-600">{t.testimonials.stats.appointments}</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">RD$8.2M</p>
            <p className="text-sm md:text-base text-gray-600">{t.testimonials.stats.revenue}</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">4.9★</p>
            <p className="text-sm md:text-base text-gray-600">{t.testimonials.stats.rating}</p>
          </div>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl p-8 md:p-12">
            <Quote className="w-12 h-12 text-primary/20 mb-6" />
            
            {/* Current Testimonial */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg md:text-xl text-gray-700 italic mb-8 leading-relaxed">
                "{testimonials[currentIndex].quote[language]}"
              </p>
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
                    {testimonials[currentIndex].initials}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonials[currentIndex].name}</p>
                    <p className="text-sm text-gray-600">{testimonials[currentIndex].role}, {testimonials[currentIndex].clinic}</p>
                    <p className="text-xs text-gray-500">{testimonials[currentIndex].location}</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-primary to-secondary p-4 rounded-xl text-white text-center">
                  <p className="text-3xl font-bold">{testimonials[currentIndex].metrics.value}</p>
                  <p className="text-xs">{testimonials[currentIndex].metrics.metric[language]}</p>
                  <p className="text-xs opacity-80">{testimonials[currentIndex].metrics.period[language]}</p>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition ${
                      index === currentIndex ? 'bg-primary w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
              >
                <ArrowRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Logo Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-600 mb-8">{language === 'es' ? 'Confiado por líderes de la industria' : 'Trusted by industry leaders'}</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-32 h-12 bg-gray-200 rounded animate-pulse" />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}