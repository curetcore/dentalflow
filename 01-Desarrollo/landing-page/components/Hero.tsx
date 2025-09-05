"use client"

import { motion } from "framer-motion"
import { MessageCircle, Calendar, TrendingUp, ArrowRight, CheckCircle } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function Hero() {
  const [showDemo, setShowDemo] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/30" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-tr from-mint/30 to-secondary/30 rounded-full blur-3xl" />
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
              Transforma tu
              <span className="block bg-gradient-to-r from-primary to-mint bg-clip-text text-transparent">Clínica Dental</span>
              con IA Asistente
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Reduce ausencias en <span className="font-bold text-secondary">73%</span> y maximiza tu agenda con automatización inteligente
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
            className="relative lg:scale-110"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-md mx-auto border-4 border-primary/10">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      src="https://picsum.photos/seed/clinic/48/48"
                      alt="Clínica"
                      className="w-10 h-10 rounded-full border-2 border-white/50"
                    />
                    <div>
                      <p className="font-semibold">Clínica Dental Sonrisa</p>
                      <p className="text-xs opacity-90 flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
                        En línea ahora
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                        <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-gray-50">
              <div className="bg-primary/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-600 mb-2">Enviando recordatorio...</p>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2, delay: 1 }}
                  className="bg-primary h-1 rounded"
                />
              </div>
              
              <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">¡Hola! Soy tu asistente dental 🦷. Te recuerdo tu cita mañana a las 3:00 PM con el Dr. Rodríguez</p>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3 }}
                  className="bg-primary text-white rounded-lg p-3 max-w-[80%] ml-auto"
                >
                  <p className="text-sm">Perfecto, ahí estaré!</p>
                  <p className="text-xs opacity-80 mt-1">3:15 PM</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.5 }}
                  className="flex items-center gap-2 px-3 py-1"
                >
                  <span className="text-gray-500 text-sm">Escribiendo</span>
                  <div className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.5,
                          delay: i * 0.2
                        }}
                        className="w-2 h-2 bg-gray-400 rounded-full"
                      />
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 5 }}
                  className="bg-gray-100 rounded-lg p-3 max-w-[80%]"
                >
                  <p className="text-sm">✅ Cita confirmada. ¡Te esperamos!</p>
                  <p className="text-xs text-gray-500 mt-1">3:16 PM</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 6.5 }}
                  className="bg-gray-100 rounded-lg p-3 max-w-[80%]"
                >
                  <p className="text-sm">📍 Dirección: Av. Winston Churchill #123</p>
                  <p className="text-xs text-gray-500 mt-1">3:16 PM</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 8 }}
                  className="bg-blue-50 border border-blue-200 rounded-lg p-3 max-w-[80%]"
                >
                  <p className="text-sm text-blue-800">🔔 ¿Necesitas cambiar la hora? Escribe "CAMBIAR"</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 10 }}
                  className="bg-primary text-white rounded-lg p-3 max-w-[80%] ml-auto"
                >
                  <p className="text-sm">¿Puedo llevar a mi niña?</p>
                  <p className="text-xs opacity-80 mt-1">3:17 PM</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 11.5 }}
                  className="bg-gray-100 rounded-lg p-3 max-w-[80%]"
                >
                  <p className="text-sm">¡Por supuesto! El Dr. Rodríguez es especialista en odontopediatría 👶</p>
                  <p className="text-xs text-gray-500 mt-1">3:17 PM</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 13 }}
                  className="bg-gray-100 rounded-lg p-3 max-w-[80%]"
                >
                  <p className="text-sm">💡 Consejo: Llegue 10 min antes para el papeleo</p>
                  <p className="text-xs text-gray-500 mt-1">3:18 PM</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 14.5 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-3 max-w-[80%]"
                >
                  <p className="text-sm text-green-800">✅ Confirmación enviada al sistema</p>
                  <p className="text-xs text-green-600 mt-1">Recibirás otro recordatorio 3h antes</p>
                </motion.div>
              </div>
            </div>
          </div>
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