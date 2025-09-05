"use client"

import { motion } from "framer-motion"
import { MessageCircle, Calendar, TrendingUp } from "lucide-react"
import { useState } from "react"

export default function Hero() {
  const [showDemo, setShowDemo] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10 animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-secondary/10 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              María AI
              <span className="block text-primary">Tu Asistente Dental Inteligente</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Reduce ausencias <span className="font-bold text-secondary">73%</span> y llena tu agenda automáticamente
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:bg-primary/90 transition"
                onClick={() => setShowDemo(true)}
              >
                Prueba 14 días GRATIS
              </motion.button>
              
              <motion.a
                href="#demo"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/5 transition text-center"
              >
                Ver Demo
              </motion.a>
            </div>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <MessageCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">WhatsApp 24/7</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Calendar className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">Confirmación Automática</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <TrendingUp className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">IA Predictiva</span>
              </div>
            </div>
          </motion.div>

          {/* Right column - Interactive demo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md mx-auto">
              <div className="bg-primary/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-600 mb-2">María AI escribiendo...</p>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2, delay: 1 }}
                  className="bg-primary h-1 rounded"
                />
              </div>
              
              <div className="space-y-3">
                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">¡Hola! Soy María 🦷 Te recuerdo tu cita mañana a las 3:00 PM con el Dr. Rodríguez</p>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.5 }}
                  className="bg-primary text-white rounded-lg p-3 max-w-[80%] ml-auto"
                >
                  <p className="text-sm">Perfecto, ahí estaré!</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3.5 }}
                  className="bg-gray-100 rounded-lg p-3 max-w-[80%]"
                >
                  <p className="text-sm">✅ Cita confirmada. ¡Te esperamos!</p>
                </motion.div>
              </div>
            </div>
            
            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="absolute -top-10 -right-10 bg-white rounded-lg shadow-lg p-4"
            >
              <p className="text-3xl font-bold text-secondary">93%</p>
              <p className="text-xs text-gray-600">Precisión</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-10 -left-10 bg-white rounded-lg shadow-lg p-4"
            >
              <p className="text-3xl font-bold text-primary">-73%</p>
              <p className="text-xs text-gray-600">Ausencias</p>
            </motion.div>
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
                Activar 14 días gratis
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}