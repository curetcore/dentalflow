"use client"

import { motion } from "framer-motion"
import { MessageCircle, Calendar, TrendingUp, ArrowRight, CheckCircle, CalendarCheck, Bell, BarChart3 } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import WhatsAppSimulator from "./WhatsAppSimulator"

export default function Hero() {
  const [showDemo, setShowDemo] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24">
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Menos pacientes
              <span className="block text-[#06B6D4]">ausentes</span>
              más citas confirmadas
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
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

            {/* Feature badges - 4 bubbles */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl">
              {/* WhatsApp bubble */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-full px-5 py-3 border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center"
              >
                <span className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" className="w-5 h-5">
                    <path fill="#25D366" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.32a8.188 8.188 0 01-1.26-4.38c.01-4.54 3.7-8.24 8.24-8.24zm6.65 10.69c-.2-.1-1.19-.59-1.38-.66-.19-.07-.33-.1-.47.1-.14.21-.54.66-.66.8-.12.14-.24.15-.44.05-.2-.1-.85-.31-1.61-.99-.6-.52-1-1.17-1.11-1.37-.11-.2-.01-.31.08-.41.09-.09.2-.24.29-.36.1-.12.13-.2.2-.34.06-.14.03-.25-.02-.35-.05-.1-.47-1.13-.64-1.54-.17-.41-.34-.35-.47-.36-.12 0-.26-.01-.4-.01-.14 0-.36.05-.55.25-.19.21-.73.72-.73 1.75s.75 2.02.85 2.17c.1.14 1.47 2.24 3.56 3.14.5.22.88.34 1.19.44.49.16.95.14 1.3.08.4-.06 1.19-.49 1.36-.96.17-.47.17-.87.12-.96-.05-.1-.19-.15-.39-.26z"/>
                  </svg>
                  <span className="text-white text-sm font-medium">WhatsApp Automático</span>
                </span>
              </motion.div>
              
              {/* Confirmation bubble */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-full px-5 py-3 border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center"
              >
                <span className="flex items-center gap-2">
                  <CalendarCheck className="text-cyan-400 w-5 h-5" />
                  <span className="text-white text-sm font-medium">Confirmación</span>
                </span>
              </motion.div>
              
              {/* Reminders bubble */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-full px-5 py-3 border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center"
              >
                <span className="flex items-center gap-2">
                  <Bell className="text-yellow-400 w-5 h-5" />
                  <span className="text-white text-sm font-medium">Recordatorios</span>
                </span>
              </motion.div>
              
              {/* Reports bubble */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-full px-5 py-3 border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center"
              >
                <span className="flex items-center gap-2">
                  <BarChart3 className="text-purple-400 w-5 h-5" />
                  <span className="text-white text-sm font-medium">Reportes</span>
                </span>
              </motion.div>
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