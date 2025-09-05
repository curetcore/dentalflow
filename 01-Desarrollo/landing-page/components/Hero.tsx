"use client"

import { motion } from "framer-motion"
import { MessageCircle, Calendar, TrendingUp, ArrowRight, CheckCircle } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

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
            <div className="bg-[#111B21] rounded-xl shadow-2xl overflow-hidden max-w-[380px] mx-auto">
              {/* WhatsApp Header */}
              <div className="bg-[#202C33] px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#8696a0]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  <img 
                    src="https://picsum.photos/seed/clinic/40/40"
                    alt="Clínica"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-[#E9EDEF] font-medium text-sm">Clínica Dental Sonrisa</p>
                    <p className="text-[#8696a0] text-xs">en línea</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <svg className="w-5 h-5 text-[#8696a0]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <svg className="w-5 h-5 text-[#8696a0]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </div>
              </div>
              
              {/* WhatsApp Chat Background */}
              <div className="relative h-[600px] overflow-hidden" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239CA3AF' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundColor: '#0B141A'
              }}>
                
                <div className="relative p-3 space-y-2 h-full overflow-y-auto custom-scrollbar">
                  {/* Date separator */}
                  <div className="flex justify-center my-2">
                    <span className="bg-[#1F2C34] text-[#8696A0] text-xs px-3 py-1 rounded-lg">HOY</span>
                  </div>

                  {/* WhatsApp message received */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex gap-2 max-w-[85%]"
                  >
                    <div className="bg-[#202C33] rounded-lg px-3 py-2 relative">
                      <p className="text-[#E9EDEF] text-sm">¡Hola! Le recordamos su cita mañana a las 3:00 PM con el Dr. Rodríguez 🦷</p>
                      <p className="text-[#8696A0] text-[11px] mt-1 text-right">2:45 PM</p>
                    </div>
                  </motion.div>

                  {/* WhatsApp message sent */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.5 }}
                    className="flex gap-2 max-w-[85%] ml-auto justify-end"
                  >
                    <div className="bg-[#005C4B] rounded-lg px-3 py-2 relative">
                      <p className="text-[#E9EDEF] text-sm">Perfecto, ahí estaré!</p>
                      <div className="flex items-center justify-end gap-1 mt-1">
                        <p className="text-[#8696A0] text-[11px]">2:46 PM</p>
                        <svg className="w-4 h-3 text-[#53BDEB]" viewBox="0 0 16 11" fill="currentColor">
                          <path d="M11.071.653a.5.5 0 0 1 .708 0l3.84 3.84a.5.5 0 0 1-.708.707L11.07 1.36 5.354 7.076a.5.5 0 0 1-.708 0L.146 2.576a.5.5 0 0 1 .708-.707l4.146 4.147L11.071.653z"/>
                          <path d="M15.621 3.84l-3.83 3.83a.5.5 0 0 1-.708 0L5.354 1.94a.5.5 0 1 1 .708-.707L11.79 6.96l3.13-3.13a.5.5 0 0 1 .708.707z"/>
                        </svg>
                      </div>
                    </div>
                  </motion.div>

                  {/* Typing indicator */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.5 }}
                    className="flex gap-2 max-w-[85%]"
                  >
                    <div className="bg-[#202C33] rounded-lg px-4 py-3 flex items-center gap-2">
                      <div className="flex gap-1">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            animate={{ 
                              scale: [1, 1.2, 1],
                              opacity: [0.5, 1, 0.5]
                            }}
                            transition={{
                              repeat: Infinity,
                              duration: 1.5,
                              delay: i * 0.2
                            }}
                            className="w-2 h-2 bg-[#8696A0] rounded-full"
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* More messages */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 5 }}
                    className="flex gap-2 max-w-[85%]"
                  >
                    <div className="bg-[#202C33] rounded-lg px-3 py-2 relative">
                      <p className="text-[#E9EDEF] text-sm">Excelente! Le confirmo entonces:</p>
                      <p className="text-[#E9EDEF] text-sm mt-1">📅 Viernes 15 de marzo</p>
                      <p className="text-[#E9EDEF] text-sm">⏰ 3:00 PM</p>
                      <p className="text-[#E9EDEF] text-sm">👨‍⚕️ Dr. Rodríguez</p>
                      <p className="text-[#8696A0] text-[11px] mt-1 text-right">2:46 PM</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 7 }}
                    className="flex gap-2 max-w-[85%] ml-auto justify-end"
                  >
                    <div className="bg-[#005C4B] rounded-lg px-3 py-2 relative">
                      <p className="text-[#E9EDEF] text-sm">¿Puedo llevar a mi niña?</p>
                      <div className="flex items-center justify-end gap-1 mt-1">
                        <p className="text-[#8696A0] text-[11px]">2:47 PM</p>
                        <svg className="w-4 h-3 text-[#53BDEB]" viewBox="0 0 16 11" fill="currentColor">
                          <path d="M11.071.653a.5.5 0 0 1 .708 0l3.84 3.84a.5.5 0 0 1-.708.707L11.07 1.36 5.354 7.076a.5.5 0 0 1-.708 0L.146 2.576a.5.5 0 0 1 .708-.707l4.146 4.147L11.071.653z"/>
                          <path d="M15.621 3.84l-3.83 3.83a.5.5 0 0 1-.708 0L5.354 1.94a.5.5 0 1 1 .708-.707L11.79 6.96l3.13-3.13a.5.5 0 0 1 .708.707z"/>
                        </svg>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 8.5 }}
                    className="flex gap-2 max-w-[85%]"
                  >
                    <div className="bg-[#202C33] rounded-lg px-3 py-2 relative">
                      <p className="text-[#E9EDEF] text-sm">¡Por supuesto! El Dr. Rodríguez es excelente con los niños 👶</p>
                      <p className="text-[#8696A0] text-[11px] mt-1 text-right">2:47 PM</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 10 }}
                    className="flex gap-2 max-w-[85%]"
                  >
                    <div className="bg-[#202C33] rounded-lg px-3 py-2 relative">
                      <p className="text-[#E9EDEF] text-sm">📍 Le recuerdo nuestra dirección:</p>
                      <p className="text-[#E9EDEF] text-sm">Av. Winston Churchill #123, Santo Domingo</p>
                      <p className="text-[#8696A0] text-[11px] mt-1 text-right">2:48 PM</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 12 }}
                    className="flex gap-2 max-w-[85%]"
                  >
                    <div className="bg-[#1F2C34] rounded-lg px-3 py-2 relative">
                      <p className="text-[#E9EDEF] text-sm">💡 Consejo: Llegue 10 minutos antes para completar el papeleo</p>
                      <p className="text-[#8696A0] text-[11px] mt-1 text-right">2:48 PM</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 13.5 }}
                    className="flex gap-2 max-w-[85%]"
                  >
                    <div className="bg-[#202C33] rounded-lg px-3 py-2 relative">
                      <p className="text-[#E9EDEF] text-sm">Si necesita cambiar o cancelar su cita, solo escriba "CAMBIAR" 📝</p>
                      <p className="text-[#8696A0] text-[11px] mt-1 text-right">2:48 PM</p>
                    </div>
                  </motion.div>

                  {/* Bottom spacing */}
                  <div className="h-4"></div>
                </div>

                {/* WhatsApp Input Bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#202C33] p-2 flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#8696A0]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" />
                  </svg>
                  <div className="flex-1 bg-[#2A3942] rounded-3xl px-4 py-2 flex items-center">
                    <span className="text-[#8696A0] text-sm">Escribe un mensaje</span>
                  </div>
                  <svg className="w-6 h-6 text-[#8696A0]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
                    <path d="M3 5a2 2 0 012-2 1 1 0 000 2H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-1a1 1 0 100-2h1a4 4 0 014 4v6a4 4 0 01-4 4H5a4 4 0 01-4-4V7a4 4 0 014-4z" />
                  </svg>
                  <svg className="w-6 h-6 text-[#8696A0]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                  </svg>
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