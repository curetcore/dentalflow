"use client"

import { motion } from "framer-motion"
import { Bot, Brain, Calendar, Clock, MessageSquare, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "Confirma citas 24/7",
    description: "Tu asistente nunca duerme. Confirma y reagenda automáticamente por WhatsApp",
    color: "text-primary"
  },
  {
    icon: Brain,
    title: "Analiza patrones de ausencias",
    description: "Reportes detallados para entender el comportamiento de tus pacientes",
    color: "text-secondary"
  },
  {
    icon: TrendingUp,
    title: "Optimiza tu agenda",
    description: "Llena espacios cancelados de forma eficiente",
    color: "text-accent"
  },
  {
    icon: MessageSquare,
    title: "Plantillas personalizables",
    description: "Mensajes profesionales adaptados a tu clínica",
    color: "text-primary"
  },
  {
    icon: Calendar,
    title: "Fácil implementación",
    description: "Sistema sencillo que tu equipo puede usar desde el día 1",
    color: "text-secondary"
  },
  {
    icon: Clock,
    title: "Implementación rápida",
    description: "Sistema funcionando desde el primer día",
    color: "text-accent"
  }
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Automatización inteligente dental
          </h2>
          <p className="text-xl md:text-2xl text-gray-600">
            Mientras tú atiendes pacientes, el sistema gestiona toda la comunicación y optimiza tu agenda
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 mb-6">
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 flex-grow">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Demo section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 bg-gradient-to-r from-primary/5 via-mint/5 to-secondary/5 rounded-3xl p-10 md:p-16 max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ve el sistema en acción
              </h3>
              <p className="text-gray-700 mb-6">
                Descubre cómo la automatización transforma la experiencia de tus pacientes y optimiza tu clínica
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Demo personalizada de 15 minutos</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Casos reales de clínicas en RD</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Cálculo de ROI para tu clínica</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-xl p-6">
              <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center cursor-pointer"
                >
                  <div className="w-0 h-0 border-l-[20px] border-l-primary border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-2" />
                </motion.div>
              </div>
              <p className="text-center text-gray-600">Click para ver demo interactiva</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}