"use client"

import { motion } from "framer-motion"
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const testimonials = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Owner",
    clinic: "SmileCare Dental",
    location: "Miami, FL",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop",
    rating: 5,
    quote: "DentalFlow AI completely transformed our practice. We went from 30% no-shows to less than 8%. The ROI was immediate - we recovered the investment in just 3 weeks.",
    metrics: {
      metric: "Revenue Increase",
      value: "+42%",
      period: "in 2 months"
    }
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    role: "Clinical Director",
    clinic: "Advanced Dental Group",
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop",
    rating: 5,
    quote: "The AI predictions are incredibly accurate. Maria knows which patients are likely to miss appointments and adjusts her approach accordingly. It's like having a team member who never forgets.",
    metrics: {
      metric: "No-show Reduction",
      value: "-73%",
      period: "in 6 weeks"
    }
  },
  {
    id: 3,
    name: "Dr. Ana Martinez",
    role: "Practice Manager",
    clinic: "Family Dental Care",
    location: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop",
    rating: 5,
    quote: "Our patients love Maria! They say she's friendly and always responds quickly. Some even share personal stories with her. She's truly part of our team now.",
    metrics: {
      metric: "Patient Satisfaction",
      value: "4.9★",
      period: "consistent rating"
    }
  }
]

export default function TestimonialsNew() {
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
            Trusted by 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> Leading Dental Practices</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of dentists who've transformed their practice with AI
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
            <p className="text-sm md:text-base text-gray-600">Active Clinics</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">1.5M+</p>
            <p className="text-sm md:text-base text-gray-600">Appointments Managed</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">$8.2M</p>
            <p className="text-sm md:text-base text-gray-600">Revenue Recovered</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">4.9★</p>
            <p className="text-sm md:text-base text-gray-600">Average Rating</p>
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
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
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
                  <p className="text-xs">{testimonials[currentIndex].metrics.metric}</p>
                  <p className="text-xs opacity-80">{testimonials[currentIndex].metrics.period}</p>
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
          <p className="text-sm text-gray-600 mb-8">Trusted by industry leaders</p>
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