"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Star, TrendingUp, Sparkles } from "lucide-react"
import { useState } from "react"

export default function HeroImproved() {
  const [email, setEmail] = useState("")

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-gray-50 via-white to-gray-50 pt-24 md:pt-28">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        
        {/* Gradient orbs with better colors */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-20 -right-20 w-96 h-96"
        >
          <div className="w-full h-full bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-emerald-400/20 rounded-full blur-3xl" />
        </motion.div>
        
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-20 -left-20 w-80 h-80"
        >
          <div className="w-full h-full bg-gradient-to-tr from-emerald-400/20 via-teal-500/20 to-cyan-400/20 rounded-full blur-3xl" />
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge with animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 px-5 py-2.5 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                La IA que Elimina las Pérdidas por Citas Olvidadas
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Cada ausencia te cuesta
              <span className="relative inline-block mx-3">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-500 to-secondary">
                  $125
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 via-cyan-500/20 to-secondary/20 blur-2xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </span>
              María las reduce un 73%
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Las secretarias pierden 3 horas diarias confirmando citas. Los pacientes olvidan sus citas. Tu clínica pierde $7,500 al mes. María resuelve todo esto con automatización inteligente por WhatsApp.
            </p>

            {/* Stats with better animation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-3 gap-6 mb-10"
            >
              {[
                { value: "50+", label: "Clínicas Activas" },
                { value: "93%", label: "Precisión" },
                { value: "24/7", label: "Disponibilidad" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Form */}
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0 mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ingresa tu email corporativo"
                className="flex-1 px-6 py-4 rounded-full border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all text-gray-800 placeholder-gray-400"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="group bg-gradient-to-r from-primary via-cyan-500 to-secondary text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 relative overflow-hidden"
              >
                <span className="relative z-10">Prueba Gratis</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-secondary via-cyan-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.button>
            </form>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-600">
              {[
                { icon: CheckCircle, text: "Sin tarjeta de crédito" },
                { icon: CheckCircle, text: "14 días gratis" },
                { icon: CheckCircle, text: "Setup en 24 horas" }
              ].map((item, index) => (
                <motion.span
                  key={item.text}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <item.icon className="w-4 h-4 text-green-500" />
                  {item.text}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main Dashboard Card */}
            <div className="relative">
              {/* Dashboard mockup */}
              <motion.div 
                className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold">M</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">María AI Dashboard</p>
                      <p className="text-xs text-gray-500">Análisis en tiempo real</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Confirmaciones Hoy</span>
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="text-2xl font-bold text-gray-900">24/28</p>
                    <p className="text-xs text-green-600 font-medium">+15% vs ayer</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Predicciones IA</span>
                      <Star className="w-4 h-4 text-blue-600" />
                    </div>
                    <p className="text-2xl font-bold text-gray-900">93%</p>
                    <p className="text-xs text-blue-600 font-medium">Precisión</p>
                  </div>
                </div>

                {/* Chart placeholder */}
                <div className="bg-gray-50 rounded-xl p-4 h-32 flex items-center justify-center">
                  <div className="flex items-end gap-2">
                    {[40, 65, 45, 70, 85, 90, 75].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: 0.8 + i * 0.1 }}
                        className="w-8 bg-gradient-to-t from-primary to-secondary rounded-t-lg"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating Chat Preview */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 max-w-xs border border-gray-100"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">AI</span>
                  </div>
                  <span className="font-semibold text-sm">María AI</span>
                  <span className="ml-auto text-xs text-gray-400">ahora</span>
                </div>
                <div className="space-y-2">
                  <div className="bg-gray-100 rounded-2xl rounded-tl-none p-3">
                    <p className="text-sm text-gray-700">
                      ¡Hola! Soy María 🦷 Te recuerdo tu cita mañana a las 3:00 PM
                    </p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 }}
                    className="bg-gradient-to-r from-primary to-secondary text-white rounded-2xl rounded-tr-none p-3 ml-auto max-w-[80%]"
                  >
                    <p className="text-sm">Perfecto! Ahí estaré 👍</p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Success Rate Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
                className="absolute -top-4 -left-4 bg-white rounded-full shadow-lg p-3 border border-gray-100"
              >
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">-73%</p>
                  <p className="text-xs text-gray-600">Ausencias</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}