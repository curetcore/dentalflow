"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

const features = [
  { name: "Pacientes activos", free: "50", starter: "500", pro: "Ilimitados", enterprise: "Ilimitados" },
  { name: "Confirmaciones mensuales", free: "25", starter: "Ilimitadas", pro: "Ilimitadas", enterprise: "Ilimitadas" },
  { name: "WhatsApp automático", free: false, starter: true, pro: true, enterprise: true },
  { name: "SMS incluidos", free: false, starter: false, pro: "Ilimitados", enterprise: "Ilimitados" },
  { name: "Recordatorios anticipados", free: "24h", starter: "24h y 3h", pro: "Personalizados", enterprise: "Personalizados" },
  { name: "IA predictiva", free: false, starter: "Básica", pro: "Avanzada (93%)", enterprise: "Premium" },
  { name: "Campañas reactivación", free: false, starter: false, pro: true, enterprise: true },
  { name: "Solicitud de reseñas", free: false, starter: false, pro: true, enterprise: true },
  { name: "Dashboard analytics", free: "Básico", starter: "Básico", pro: "Ejecutivo", enterprise: "Personalizado" },
  { name: "Usuarios incluidos", free: "1", starter: "1", pro: "5", enterprise: "Ilimitados" },
  { name: "API integración", free: false, starter: false, pro: true, enterprise: true },
  { name: "Multi-sucursal", free: false, starter: false, pro: false, enterprise: true },
  { name: "Soporte", free: "Comunidad", starter: "Email", pro: "24/7 Prioritario", enterprise: "Dedicado + SLA" },
  { name: "Marca blanca", free: false, starter: false, pro: false, enterprise: true },
  { name: "Setup profesional", free: false, starter: false, pro: "GRATIS", enterprise: "On-site" },
]

export default function PricingComparison() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Comparación detallada de planes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encuentra el plan perfecto para tu clínica. Todos incluyen 1 mes de prueba gratis.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto overflow-x-auto">
          <motion.table
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <thead>
              <tr className="bg-gradient-to-r from-primary via-secondary to-mint text-white">
                <th className="px-6 py-4 text-left font-semibold">Características</th>
                <th className="px-6 py-4 text-center font-semibold">
                  <div>Free</div>
                  <div className="text-2xl mt-1">$0</div>
                </th>
                <th className="px-6 py-4 text-center font-semibold">
                  <div>Starter</div>
                  <div className="text-2xl mt-1">$97</div>
                </th>
                <th className="px-6 py-4 text-center font-semibold bg-white/20">
                  <div className="flex items-center justify-center gap-2">
                    <span>Professional</span>
                    <span className="bg-white/30 px-2 py-1 rounded text-xs">POPULAR</span>
                  </div>
                  <div className="text-2xl mt-1">$197</div>
                </th>
                <th className="px-6 py-4 text-center font-semibold">
                  <div>Enterprise</div>
                  <div className="text-xl mt-1">Custom</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <motion.tr
                  key={feature.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="px-6 py-4 font-medium text-gray-900">{feature.name}</td>
                  <td className="px-6 py-4 text-center">
                    {renderFeatureValue(feature.free)}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {renderFeatureValue(feature.starter)}
                  </td>
                  <td className="px-6 py-4 text-center bg-primary/5">
                    {renderFeatureValue(feature.pro)}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {renderFeatureValue(feature.enterprise)}
                  </td>
                </motion.tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-gray-100">
                <td className="px-6 py-6"></td>
                <td className="px-6 py-6 text-center">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-gray-200 text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-all"
                  >
                    Empezar Gratis
                  </motion.button>
                </td>
                <td className="px-6 py-6 text-center">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all"
                  >
                    Prueba 1 Mes
                  </motion.button>
                </td>
                <td className="px-6 py-6 text-center bg-primary/5">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-gradient-to-r from-primary via-secondary to-mint text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    Empezar Ahora
                  </motion.button>
                </td>
                <td className="px-6 py-6 text-center">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all"
                  >
                    Contactar
                  </motion.button>
                </td>
              </tr>
            </tfoot>
          </motion.table>
        </div>

        {/* Mobile comparison cards */}
        <div className="lg:hidden mt-8 space-y-6">
          {["Free", "Starter", "Professional", "Enterprise"].map((plan, planIndex) => (
            <motion.div
              key={plan}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: planIndex * 0.1 }}
              className={`bg-white rounded-xl shadow-lg p-6 ${
                plan === "Professional" ? "ring-2 ring-primary" : ""
              }`}
            >
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold">{plan}</h3>
                <p className="text-3xl font-bold text-primary mt-2">
                  {plan === "Free" && "$0"}
                  {plan === "Starter" && "$97"}
                  {plan === "Professional" && "$197"}
                  {plan === "Enterprise" && "Custom"}
                </p>
                {plan === "Professional" && (
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    MÁS POPULAR
                  </span>
                )}
              </div>
              
              <ul className="space-y-2">
                {features.slice(0, 8).map((feature) => (
                  <li key={feature.name} className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">{feature.name}</span>
                    <span className="font-medium">
                      {renderFeatureValue(
                        plan === "Free" ? feature.free :
                        plan === "Starter" ? feature.starter :
                        plan === "Professional" ? feature.pro :
                        feature.enterprise
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function renderFeatureValue(value: string | boolean) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="w-5 h-5 text-green-500 mx-auto" />
    ) : (
      <X className="w-5 h-5 text-gray-400 mx-auto" />
    )
  }
  return <span className="text-gray-900 font-medium">{value}</span>
}