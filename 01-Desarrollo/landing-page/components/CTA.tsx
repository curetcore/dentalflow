"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar, CheckCircle } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Deja de perder $7,500 cada mes
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Tu asistente dental empieza a recuperar pacientes ausentes en menos de 24 horas
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
            >
              <Calendar className="w-8 h-8 mb-3 mx-auto" />
              <p className="font-semibold">1 mes gratis</p>
              <p className="text-sm opacity-80">Sin tarjeta de crédito</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
            >
              <CheckCircle className="w-8 h-8 mb-3 mx-auto" />
              <p className="font-semibold">Setup en 24h</p>
              <p className="text-sm opacity-80">Nosotros lo hacemos</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
            >
              <ArrowRight className="w-8 h-8 mb-3 mx-auto" />
              <p className="font-semibold">Resultados día 1</p>
              <p className="text-sm opacity-80">María empieza de inmediato</p>
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2"
            >
              Activar prueba gratis
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.a
              href="https://wa.me/18095551234?text=Hola!%20Quiero%20saber%20más%20sobre%20María%20AI"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition text-center"
            >
              Hablar con ventas
            </motion.a>
          </div>

          <p className="mt-6 text-sm opacity-80">
            ¿Preguntas? WhatsApp: (809) 555-1234 · Lun-Vie 9AM-6PM
          </p>
        </motion.div>
      </div>
    </section>
  )
}