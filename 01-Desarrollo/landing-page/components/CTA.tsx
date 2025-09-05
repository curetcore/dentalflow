"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar, CheckCircle } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Reduce las pérdidas por citas perdidas
          </h2>
          <p className="text-xl mb-8 text-gray-600">
            Sistema automático que empieza a funcionar desde el primer día
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-blue-50 rounded-lg p-4 border border-blue-100"
            >
              <Calendar className="w-8 h-8 mb-3 mx-auto text-primary" />
              <p className="font-semibold">1 mes gratis</p>
              <p className="text-sm text-gray-600">Sin tarjeta de crédito</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-blue-50 rounded-lg p-4 border border-blue-100"
            >
              <CheckCircle className="w-8 h-8 mb-3 mx-auto text-primary" />
              <p className="font-semibold">Setup en 24h</p>
              <p className="text-sm text-gray-600">Nosotros lo hacemos</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-blue-50 rounded-lg p-4 border border-blue-100"
            >
              <ArrowRight className="w-8 h-8 mb-3 mx-auto text-primary" />
              <p className="font-semibold">Resultados día 1</p>
              <p className="text-sm text-gray-600">Sistema activo de inmediato</p>
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:bg-blue-700 transition flex items-center justify-center gap-2"
            >
              Activar prueba gratis
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.a
              href="https://wa.me/18095551234?text=Hola!%20Quiero%20saber%20más%20sobre%20DentalFlow"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary hover:text-white transition text-center"
            >
              Hablar con ventas
            </motion.a>
          </div>

          <p className="mt-6 text-sm text-gray-600">
            ¿Preguntas? WhatsApp: (809) 555-1234 · Lun-Vie 9AM-6PM
          </p>
        </motion.div>
      </div>
    </section>
  )
}