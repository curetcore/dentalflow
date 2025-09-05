"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar, CheckCircle } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function CTA() {
  const { t } = useLanguage()
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
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
            {t.cta.title}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t.cta.subtitle}
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
            >
              <Calendar className="w-8 h-8 mb-3 mx-auto" />
              <p className="font-semibold">{t.cta.freeTrialDays}</p>
              <p className="text-sm opacity-80">{t.cta.noCreditCard}</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
            >
              <CheckCircle className="w-8 h-8 mb-3 mx-auto" />
              <p className="font-semibold">{t.cta.setupTime}</p>
              <p className="text-sm opacity-80">{t.cta.setupDescription}</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
            >
              <ArrowRight className="w-8 h-8 mb-3 mx-auto" />
              <p className="font-semibold">{t.cta.resultsDay1}</p>
              <p className="text-sm opacity-80">{t.cta.resultsDescription}</p>
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2"
            >
              {t.cta.startFreeTrial}
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.a
              href="https://wa.me/18095551234?text=Hola!%20Quiero%20saber%20más%20sobre%20María%20AI"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition text-center"
            >
              {t.cta.talkToSales}
            </motion.a>
          </div>

          <p className="mt-6 text-sm opacity-80">
            {t.cta.questions} WhatsApp: (809) 555-1234 · {t.cta.hours}
          </p>
        </motion.div>
      </div>
    </section>
  )
}