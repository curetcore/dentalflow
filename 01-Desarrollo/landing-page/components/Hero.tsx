"use client"

import { motion } from "framer-motion"
import { MessageCircle, Calendar, TrendingUp, ArrowRight, CheckCircle } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import WhatsAppSimulator from "./WhatsAppSimulator"

export default function Hero() {
  const [showDemo, setShowDemo] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24 bg-gradient-to-b from-white to-gray-50">
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-tr from-mint/10 to-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Menos pacientes
              <span className="block bg-gradient-to-r from-primary to-mint bg-clip-text text-transparent">ausentes</span>
              más citas confirmadas
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Sistema automático de confirmación de citas por WhatsApp que mejora significativamente la asistencia de pacientes
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-gradient-to-r from-primary via-secondary to-mint text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all flex items-center justify-center"
                onClick={() => setShowDemo(true)}
              >
                Prueba Gratis 1 Mes
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.a
                href="#demo"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/5 transition text-center"
              >
                Ver Demo
              </motion.a>
            </div>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <MessageCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">WhatsApp Automático</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Calendar className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">Confirmación Automática</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <TrendingUp className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Recordatorios Inteligentes</span>
              </div>
            </div>
          </motion.div>

          {/* Right column - Interactive demo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:scale-110"
          >
            <WhatsAppSimulator />
          </motion.div>
        </div>
      </div>

      {/* Demo Modal */}
      {showDemo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowDemo(false)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4">Comienza tu prueba gratis</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nombre de la clínica"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="tel"
                placeholder="WhatsApp"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition">
                Activar 1 Mes Gratis
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
      
    </section>
  )
}