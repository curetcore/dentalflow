"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Dra. Carmen Rodríguez",
    clinic: "Clínica Dental Sonrisas",
    location: "Piantini, Santo Domingo",
    image: "/images/testimonial-1.jpg",
    rating: 5,
    quote: "DentalFlow AI cambió completamente nuestra clínica. Pasamos de 30% de ausencias a menos del 8%. Es increíble ver la agenda siempre llena.",
    metrics: "+42% ingresos en 2 meses"
  },
  {
    name: "Dr. José Martínez",
    clinic: "Centro Odontológico Moderno",
    location: "Naco, Santo Domingo",
    image: "/images/testimonial-2.jpg",
    rating: 5,
    quote: "Lo mejor es que el sistema aprende de cada paciente. Sabe quién necesita más recordatorios y ajusta su comunicación. Es como tener una asistente que nunca olvida nada.",
    metrics: "73% menos no-shows"
  },
  {
    name: "Dra. Ana Pérez",
    clinic: "Dental Spa RD",
    location: "Blue Mall, Santo Domingo",
    image: "/images/testimonial-3.jpg",
    rating: 5,
    quote: "Mis pacientes aman el sistema de recordatorios. Dicen que es súper amable y siempre responde rápido. La comunicación es tan natural que parece personal.",
    metrics: "4.9★ satisfacción pacientes"
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Clínicas que confían en DentalFlow
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Más de 50 clínicas en RD ya transformaron su práctica con nuestro sistema
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative h-full flex flex-col"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              
              <div className="mb-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-gray-700 italic mb-6">
                  "{testimonial.quote}"
                </p>
                
                <div className="bg-primary/10 rounded-lg px-4 py-2 inline-block">
                  <p className="font-semibold text-primary">
                    {testimonial.metrics}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img 
                  src={`https://picsum.photos/seed/dental${index + 100}/200/200`}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.clinic}</p>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Success metrics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 grid md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center"
        >
          <div>
            <p className="text-4xl font-bold text-primary mb-2">50+</p>
            <p className="text-gray-600">Clínicas activas</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-secondary mb-2">15K+</p>
            <p className="text-gray-600">Citas confirmadas</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-accent mb-2">73%</p>
            <p className="text-gray-600">Reducción no-shows</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary mb-2">4.8★</p>
            <p className="text-gray-600">Satisfacción</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}