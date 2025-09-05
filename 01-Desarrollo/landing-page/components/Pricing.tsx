"use client"

import { motion } from "framer-motion"
import { Check, Star } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "RD$12,000",
    period: t.pricing.monthly,
    description: "Perfecto para clínicas pequeñas",
    features: [
      "Hasta 500 pacientes",
      "Confirmaciones automáticas",
      "WhatsApp Business",
      "Dashboard básico",
      "Soporte por email"
    ],
    cta: "Empezar gratis",
    featured: false
  },
  {
    name: "Professional",
    price: "RD$25,000",
    period: t.pricing.monthly,
    description: "La elección de clínicas en crecimiento",
    features: [
      "Pacientes ilimitados",
      "IA predictiva avanzada",
      "Multi-canal (WhatsApp + SMS)",
      "Analytics completo",
      "API personalizada",
      "Soporte prioritario 24/7"
    ],
    cta: "Prueba 14 días",
    featured: true
  },
  {
    name: "Enterprise",
    price: "RD$45,000",
    period: t.pricing.monthly,
    description: "Para cadenas y multi-sucursal",
    features: [
      "Todo en Professional",
      "Multi-sucursal",
      "Manager dedicado",
      "Integraciones custom",
      "Training on-site",
      "SLA garantizado"
    ],
    cta: "Contactar ventas",
    featured: false
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Precios simples, ROI garantizado
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            María se paga sola. En promedio, nuestras clínicas recuperan la inversión en 3 semanas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                plan.featured ? 'ring-2 ring-primary' : ''
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  Más popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-lg font-semibold transition ${
                  plan.featured
                    ? 'bg-primary text-white hover:bg-primary/90'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* ROI Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Calcula tu retorno de inversión
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Citas por mes
              </label>
              <input
                type="number"
                defaultValue="200"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                % de ausencias actual
              </label>
              <input
                type="number"
                defaultValue="30"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Valor promedio por cita
              </label>
              <input
                type="number"
                defaultValue="2500"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-sm text-gray-600">Pérdida mensual actual</p>
                <p className="text-2xl font-bold text-red-600">RD$150,000</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Recuperación con María</p>
                <p className="text-2xl font-bold text-green-600">+RD$109,500</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">ROI mensual</p>
                <p className="text-2xl font-bold text-primary">338%</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}