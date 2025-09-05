"use client"

import { motion } from "framer-motion"
import { Check, X, TrendingDown, TrendingUp, AlertTriangle } from "lucide-react"

const comparison = [
  {
    category: "Gestión de Citas",
    without: {
      issue: "Muchos pacientes no se presentan",
      impact: "Pérdidas significativas cada mes",
      icon: TrendingDown,
      color: "text-red-600"
    },
    with: {
      solution: "Confirmación automática 24/7",
      benefit: "Mejora significativa en asistencia",
      icon: TrendingUp,
      color: "text-green-600"
    }
  },
  {
    category: "Comunicación con Pacientes",
    without: {
      issue: "Llamadas manuales todo el día",
      impact: "4-5 horas diarias perdidas",
      icon: AlertTriangle,
      color: "text-orange-600"
    },
    with: {
      solution: "WhatsApp automatizado con plantillas",
      benefit: "Ahorra 20 horas semanales",
      icon: Check,
      color: "text-primary"
    }
  },
  {
    category: "Reagendamiento",
    without: {
      issue: "Espacios vacíos por cancelaciones",
      impact: "Menor productividad diaria",
      icon: X,
      color: "text-gray-600"
    },
    with: {
      solution: "Lista de espera inteligente",
      benefit: "Llena espacios en minutos",
      icon: Check,
      color: "text-secondary"
    }
  },
  {
    category: "Recordatorios",
    without: {
      issue: "Pacientes olvidan sus citas",
      impact: "Pérdida de confianza y dinero",
      icon: AlertTriangle,
      color: "text-red-500"
    },
    with: {
      solution: "Recordatorios programados (24h, 3h, 1h)",
      benefit: "Mayor puntualidad en citas",
      icon: TrendingUp,
      color: "text-mint"
    }
  },
  {
    category: "Reactivación de Pacientes",
    without: {
      issue: "Pacientes inactivos olvidados",
      impact: "Muchos pacientes inactivos",
      icon: TrendingDown,
      color: "text-gray-500"
    },
    with: {
      solution: "Campañas automáticas de reactivación",
      benefit: "Reactiva pacientes olvidados",
      icon: TrendingUp,
      color: "text-accent"
    }
  },
  {
    category: "Análisis y Reportes",
    without: {
      issue: "Sin datos de comportamiento",
      impact: "Decisiones sin fundamento",
      icon: X,
      color: "text-gray-600"
    },
    with: {
      solution: "Dashboard con métricas en tiempo real",
      benefit: "Decisiones basadas en datos",
      icon: Check,
      color: "text-primary"
    }
  },
  {
    category: "Costo Operativo",
    without: {
      issue: "Personal dedicado a llamar",
      impact: "Alto costo en personal",
      icon: TrendingDown,
      color: "text-red-600"
    },
    with: {
      solution: "Automatización completa",
      benefit: "Retorno de inversión positivo",
      icon: TrendingUp,
      color: "text-green-600"
    }
  }
]

export default function PricingComparison() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            La diferencia es <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">dramática</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600">
            Mira cómo DentalFlow transforma tu clínica desde el día 1
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop view */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-12 gap-6 mb-8">
              <div className="col-span-4"></div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="col-span-4 bg-red-50 border-2 border-red-200 rounded-2xl p-6 text-center"
              >
                <h3 className="text-2xl font-bold text-red-600 mb-2">Sin DentalFlow</h3>
                <p className="text-gray-600">Problemas y pérdidas constantes</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="col-span-4 bg-green-50 border-2 border-green-200 rounded-2xl p-6 text-center"
              >
                <h3 className="text-2xl font-bold text-green-600 mb-2">Con DentalFlow</h3>
                <p className="text-gray-600">Soluciones y crecimiento</p>
              </motion.div>
            </div>

            {comparison.map((item, index) => (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid grid-cols-12 gap-6 mb-6"
              >
                <div className="col-span-4 flex items-center justify-end">
                  <h4 className="text-lg font-bold text-gray-800">{item.category}</h4>
                </div>
                
                <div className="col-span-4 bg-white rounded-xl shadow-sm border border-red-100 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-full bg-red-50 ${item.without.color}`}>
                      <item.without.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 mb-1">{item.without.issue}</p>
                      <p className="text-sm text-red-600">{item.without.impact}</p>
                    </div>
                  </div>
                </div>

                <div className="col-span-4 bg-white rounded-xl shadow-sm border border-green-100 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-full bg-green-50 ${item.with.color}`}>
                      <item.with.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 mb-1">{item.with.solution}</p>
                      <p className="text-sm text-green-600">{item.with.benefit}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile view */}
          <div className="lg:hidden space-y-8">
            {comparison.map((item, index) => (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="bg-gradient-to-r from-primary to-secondary p-4">
                  <h4 className="text-xl font-bold text-white">{item.category}</h4>
                </div>
                
                <div className="p-6 space-y-4">
                  {/* Sin DentalFlow */}
                  <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`p-2 rounded-full bg-red-100 ${item.without.color}`}>
                        <item.without.icon className="w-5 h-5" />
                      </div>
                      <h5 className="font-bold text-red-800">Sin DentalFlow</h5>
                    </div>
                    <p className="text-sm font-medium text-gray-800">{item.without.issue}</p>
                    <p className="text-xs text-red-600 mt-1">{item.without.impact}</p>
                  </div>

                  {/* Con DentalFlow */}
                  <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`p-2 rounded-full bg-green-100 ${item.with.color}`}>
                        <item.with.icon className="w-5 h-5" />
                      </div>
                      <h5 className="font-bold text-green-800">Con DentalFlow</h5>
                    </div>
                    <p className="text-sm font-medium text-gray-800">{item.with.solution}</p>
                    <p className="text-xs text-green-600 mt-1">{item.with.benefit}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-10 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Listo para transformar tu clínica?
            </h3>
            <p className="text-xl text-gray-700 mb-8">
              Únete a más de 50 clínicas que ya están creciendo con DentalFlow
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-primary via-secondary to-mint text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Empezar 1 Mes Gratis
            </motion.button>
            <p className="text-sm text-gray-600 mt-4">
              Sin tarjeta de crédito • Cancela cuando quieras
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}