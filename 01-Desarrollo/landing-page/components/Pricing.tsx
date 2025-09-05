"use client"

import { motion } from "framer-motion"
import { Check, X, Star, TrendingUp, Clock } from "lucide-react"

const allFeatures = [
  { id: "patients", label: "Pacientes activos" },
  { id: "confirmations", label: "Plantillas de confirmación WhatsApp" },
  { id: "sms", label: "Integración para enviar SMS" },
  { id: "reminders", label: "Recordatorios programados" },
  { id: "ai", label: "Reportes de patrones de ausencias" },
  { id: "reactivation", label: "Plantillas de reactivación" },
  { id: "reviews", label: "Enlaces para solicitar reseñas" },
  { id: "dashboard", label: "Dashboard con métricas en tiempo real" },
  { id: "api", label: "Integración API con tu sistema" },
  { id: "users", label: "Usuarios del equipo" },
  { id: "support", label: "Soporte prioritario 24/7" },
  { id: "guarantee", label: "Garantía devolución 30 días" },
  { id: "setup", label: "Setup profesional incluido" },
  { id: "training", label: "Capacitación personalizada" }
]

const plans = [
  {
    name: "Gratis",
    price: "RD$0",
    period: "/mes para siempre",
    description: "Perfecto para probar",
    cta: "Comenzar Gratis",
    featured: false,
    urgency: "Sin tarjeta de crédito",
    included: ["patients", "confirmations", "reminders", "dashboard"],
    limits: {
      patients: "50",
      confirmations: "Manual con plantillas",
      reminders: "Solo 24h antes",
      dashboard: "Básico",
      users: "1",
      support: "Comunidad"
    }
  },
  {
    name: "Básico",
    price: "RD$5,500",
    originalPrice: "RD$11,000",
    period: "/mes",
    description: "El favorito de clínicas pequeñas",
    cta: "Empezar 1 Mes Gratis",
    featured: false,
    urgency: "Ahorra 50% primeros 3 meses",
    savings: "Reduce hasta 25% las ausencias",
    included: ["patients", "confirmations", "reminders", "dashboard", "users", "support", "guarantee"],
    limits: {
      patients: "500",
      confirmations: "Semi-automatizado",
      reminders: "24h, 3h y 1h antes", 
      dashboard: "Completo",
      users: "3",
      support: "Email y chat"
    }
  },
  {
    name: "Completo",
    price: "RD$11,000",
    originalPrice: "RD$22,000",
    period: "/mes",
    description: "Todo lo que necesitas para crecer",
    cta: "Empezar 1 Mes Gratis",
    featured: true,
    urgency: "⚡ Precio de lanzamiento - Primeros 100 clientes",
    savings: "Reduce hasta 40% las ausencias",
    bonus: "🎁 GRATIS: Setup RD$56,000 + 2 meses extra",
    included: ["patients", "confirmations", "sms", "reminders", "ai", "reactivation", "reviews", "dashboard", "api", "users", "support", "guarantee", "setup", "training"],
    limits: {
      patients: "ILIMITADOS",
      confirmations: "Automatizado completo",
      sms: "✓ Incluidos",
      reminders: "Personalizables",
      ai: "✓ Reportes detallados",
      reactivation: "✓ Automática",
      reviews: "✓ Google Reviews",
      dashboard: "Ejecutivo + Reportes",
      api: "✓ Completa",
      users: "10",
      support: "24/7 Prioritario + WhatsApp",
      setup: "✓ GRATIS",
      training: "✓ 2 sesiones"
    }
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
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
            <Clock className="w-4 h-4" />
            Oferta termina en 48 horas
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Deja de perder RD$420,000 al mes
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            Las clínicas pierden hasta 40 pacientes mensuales por falta de seguimiento
          </p>
          <p className="text-lg text-gray-500">
            Con DentalFlow recuperas esos pacientes desde el día 1
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative bg-white rounded-2xl overflow-hidden ${
                plan.featured 
                  ? 'ring-4 ring-primary ring-offset-4 shadow-2xl scale-105' 
                  : 'shadow-lg hover:shadow-xl'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-5 -right-20 bg-gradient-to-r from-orange-500 to-red-500 text-white px-20 py-1 rotate-12 text-sm font-bold">
                  MÁS VENDIDO
                </div>
              )}
              
              {plan.urgency && (
                <div className={`${plan.featured ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-gray-800'} text-white text-center py-2 text-sm font-medium`}>
                  {plan.urgency}
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  {plan.originalPrice && (
                    <span className="text-2xl text-gray-400 line-through mr-2">{plan.originalPrice}</span>
                  )}
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-gray-600 text-sm ml-2">{plan.period}</span>
                </div>

                {plan.savings && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                    <p className="text-sm font-semibold text-green-800 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      {plan.savings}
                    </p>
                  </div>
                )}

                {plan.bonus && (
                  <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-3 mb-6 text-sm font-semibold text-yellow-800">
                    {plan.bonus}
                  </div>
                )}

                <ul className="space-y-3 mb-8">
                  {allFeatures.map((feature) => {
                    const isIncluded = plan.included.includes(feature.id);
                    const limit = plan.limits[feature.id as keyof typeof plan.limits];
                    
                    return (
                      <li key={feature.id} className={`flex items-start gap-3 ${!isIncluded ? 'opacity-50' : ''}`}>
                        {isIncluded ? (
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={`text-sm ${!isIncluded ? 'line-through text-gray-500' : 'text-gray-700'}`}>
                          {feature.label}
                          {isIncluded && limit && (
                            <span className="font-semibold text-gray-900"> ({limit})</span>
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                    plan.featured
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-xl'
                      : plan.name === "Gratis"
                      ? 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      : 'bg-primary text-white hover:bg-primary/90'
                  }`}
                >
                  {plan.cta}
                </motion.button>

                {plan.featured && (
                  <div className="mt-4 text-center">
                    <p className="text-xs text-gray-500">
                      Cancela cuando quieras • Garantía 30 días
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Urgency and social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center space-y-4"
        >
          <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <img
                    key={i}
                    src={`https://picsum.photos/seed/user${i}/40/40`}
                    alt=""
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <span>+2,347 clínicas activas</span>
            </div>
            
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-1">4.9/5 (847 reseñas)</span>
            </div>
          </div>

          <p className="text-lg font-semibold text-gray-800">
            ⚡ 12 clínicas más se unieron en las últimas 2 horas
          </p>
        </motion.div>
      </div>
    </section>
  )
}