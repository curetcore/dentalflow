"use client"

import { motion } from "framer-motion"
import { Check, Star, Zap, Users, BarChart, Shield, Headphones, Globe, X } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "$0",
    originalPrice: "",
    period: "/mes",
    description: "Prueba el poder de la automatización",
    savings: "GRATIS para siempre",
    features: [
      "Hasta 50 pacientes activos",
      "25 confirmaciones por mes",
      "Recordatorios solo 24h antes",
      "Dashboard básico",
      "1 usuario",
      "Marca de agua DentalFlow",
      "Soporte por comunidad"
    ],
    notIncluded: [
      "SMS",
      "Campañas de reactivación",
      "Predicciones IA avanzadas",
      "Personalización"
    ],
    cta: "Empezar Gratis",
    featured: false,
    icon: Zap,
    badge: "NUEVO"
  },
  {
    name: "Starter",
    price: "$97",
    originalPrice: "$197",
    period: "/mes",
    description: "Perfecto para clínicas pequeñas",
    savings: "Ahorra $100/mes",
    features: [
      "Hasta 500 pacientes activos",
      "Confirmaciones automáticas WhatsApp",
      "Recordatorios 24h y 3h antes",
      "Dashboard básico de métricas",
      "Reducción de 50% en ausencias",
      "Soporte por email en horario laboral",
      "1 usuario administrador"
    ],
    notIncluded: [
      "SMS ilimitados",
      "Campañas de reactivación",
      "API personalizada",
      "Multi-sucursal"
    ],
    cta: "Prueba 1 Mes Gratis",
    featured: false,
    icon: Users
  },
  {
    name: "Professional",
    price: "$197",
    originalPrice: "$397",
    period: "/mes",
    description: "La elección #1 de clínicas en crecimiento",
    savings: "Ahorra $200/mes + 2 meses GRATIS",
    features: [
      "Pacientes ILIMITADOS",
      "WhatsApp + SMS ilimitados",
      "IA predictiva (93% precisión)",
      "Respuesta automática a llamadas perdidas",
      "Campañas de reactivación (3-6-12 meses)",
      "Solicitud automática de reseñas Google",
      "Dashboard ejecutivo completo",
      "API para integrar con tu sistema",
      "Soporte prioritario 24/7",
      "Hasta 5 usuarios del equipo",
      "Garantía: -73% ausencias o te devolvemos el dinero"
    ],
    notIncluded: [],
    cta: "Empezar 1 Mes Gratis",
    featured: true,
    bonus: "🎁 BONUS: Setup profesional GRATIS (valor $500)",
    icon: Users
  },
  {
    name: "Enterprise",
    price: "Custom",
    originalPrice: "",
    period: "",
    description: "Para cadenas y multi-sucursal",
    savings: "Precios por volumen",
    features: [
      "Todo en Professional +",
      "Multi-sucursal ilimitadas",
      "Manager de éxito dedicado",
      "Integraciones custom",
      "Training on-site para tu equipo",
      "SLA garantizado 99.9%",
      "Reportes personalizados",
      "Marca blanca disponible",
      "Usuarios ilimitados",
      "Soporte telefónico dedicado"
    ],
    notIncluded: [],
    cta: "Agendar Demo",
    featured: false,
    icon: Globe
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="animate-pulse">🔥</span>
            Oferta limitada: Precios especiales de lanzamiento
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            La inversión que se paga sola en 2 semanas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Con solo evitar 5 ausencias al mes, María ya pagó su costo. 
            El promedio de nuestras clínicas evita 40 ausencias mensuales.
          </p>
          <div className="mt-6 flex items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-gray-700">Garantía 30 días</span>
            </div>
            <div className="flex items-center gap-2">
              <Headphones className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">Soporte en español</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart className="w-5 h-5 text-purple-600" />
              <span className="text-gray-700">ROI comprobado</span>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                plan.featured ? 'ring-4 ring-primary ring-offset-4 scale-105' : ''
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-5 -right-20 bg-gradient-to-r from-primary via-secondary to-mint text-white px-20 py-1 rotate-12 text-sm font-bold">
                  MÁS POPULAR
                </div>
              )}
              
              {plan.savings && (
                <div className="bg-gradient-to-r from-mint to-primary text-white text-center py-2 text-sm font-medium">
                  {plan.savings}
                </div>
              )}

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>
                  <plan.icon className={`w-10 h-10 ${plan.featured ? 'text-primary' : 'text-gray-400'}`} />
                </div>
                
                <div className="flex items-baseline mb-8">
                  {plan.originalPrice && (
                    <span className="text-2xl text-gray-400 line-through mr-2">{plan.originalPrice}</span>
                  )}
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>

                {plan.bonus && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-6 text-sm">
                    {plan.bonus}
                  </div>
                )}

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 opacity-50">
                      <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-500 line-through">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-all ${
                    plan.featured
                      ? 'bg-gradient-to-r from-primary via-secondary to-mint text-white hover:shadow-xl hover:shadow-primary/20'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </motion.button>

                {plan.featured && (
                  <p className="text-center text-sm text-gray-500 mt-4">
                    Sin tarjeta de crédito • Cancela cuando quieras
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparación rápida */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-blue-50 rounded-3xl p-8 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            ¿Por qué el 87% elige Professional?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">73%</div>
              <p className="text-gray-600">Reducción garantizada de ausencias</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">RD$420,000</div>
              <p className="text-gray-600">Recuperados en promedio al mes</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-secondary to-mint bg-clip-text text-transparent mb-2">2 semanas</div>
              <p className="text-gray-600">Tiempo promedio de ROI</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg font-medium text-gray-900 mb-4">
              "Pasamos de perder RD$560,000/mes por ausencias a recuperar RD$475,000. El sistema pagó su costo anual en el primer mes."
            </p>
            <p className="text-sm text-gray-600">
              — Dra. Carmen Rodríguez, SmileCare Dental
            </p>
          </div>
        </motion.div>

        {/* Urgencia */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-700">
            ⏰ Oferta especial termina en: 
            <span className="font-bold text-red-600 ml-2">3 días, 14 horas</span>
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Después los precios suben a tarifas regulares
          </p>
        </motion.div>
      </div>
    </section>
  )
}