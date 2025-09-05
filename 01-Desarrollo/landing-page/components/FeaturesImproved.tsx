"use client"

import { motion } from "framer-motion"
import { 
  Bot, 
  Brain, 
  Calendar, 
  Clock, 
  MessageSquare, 
  TrendingUp,
  Shield,
  Zap,
  Users,
  Sparkles,
  PhoneOff,
  Star,
  DollarSign,
  BarChart,
  AlertCircle,
  Target
} from "lucide-react"
import ImagePlaceholder from "./ImagePlaceholder"
import { useLanguage } from "@/contexts/LanguageContext"

export default function FeaturesImproved() {
  const { t, language } = useLanguage()

  const features = [
    {
      icon: Bot,
      title: t.features.assistant.title,
      description: t.features.assistant.description,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: t.features.analytics.title,
      description: t.features.analytics.description,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: t.features.revenue.title,
      description: t.features.revenue.description,
      gradient: "from-green-500 to-emerald-500"
    }
  ]

  const painPoints = [
    { 
      icon: Calendar, 
      pain: language === 'es' ? "Agenda desordenada" : "Disorganized schedule",
      solution: language === 'es' ? "Sincronización total" : "Full synchronization",
      gradient: "from-orange-400 to-red-400" 
    },
    { 
      icon: Star, 
      pain: language === 'es' ? "Pocas reseñas online" : "Few online reviews",
      solution: language === 'es' ? "Solicitud automática" : "Automatic requests",
      gradient: "from-yellow-400 to-amber-400" 
    },
    { 
      icon: Target, 
      pain: language === 'es' ? "Leads sin seguimiento" : "Leads without follow-up",
      solution: language === 'es' ? "CRM automatizado" : "Automated CRM",
      gradient: "from-blue-400 to-indigo-400" 
    },
    { 
      icon: DollarSign, 
      pain: language === 'es' ? "Cobranza tardía" : "Late collections",
      solution: language === 'es' ? "Recordatorios de pago" : "Payment reminders",
      gradient: "from-green-400 to-emerald-400" 
    },
    { 
      icon: BarChart, 
      pain: language === 'es' ? "Sin métricas claras" : "No clear metrics",
      solution: language === 'es' ? "Dashboard ejecutivo" : "Executive dashboard",
      gradient: "from-purple-400 to-pink-400" 
    },
    { 
      icon: AlertCircle, 
      pain: language === 'es' ? "Errores manuales" : "Manual errors",
      solution: language === 'es' ? "Flujos automáticos" : "Automated flows",
      gradient: "from-red-400 to-rose-400" 
    }
  ]

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-full mb-4"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-gray-700">Features</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t.features.title1}
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-500 to-secondary"> 
              {t.features.title2}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t.features.subtitle}
          </p>
        </motion.div>

        {/* Main Features with improved layout */}
        <div className="space-y-32 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <motion.div 
                    className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  
                  {/* Feature specific details */}
                  <motion.div 
                    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                    whileHover={{ y: -5, shadow: "xl" }}
                  >
                    <h4 className="font-semibold mb-4 text-gray-900">{t.features.howItWorks}</h4>
                    <div className="space-y-4">
                      {[t.features.step1, t.features.step2, t.features.step3].map((step, stepIndex) => (
                        <motion.div 
                          key={stepIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + stepIndex * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center mt-0.5 flex-shrink-0`}>
                            <span className="text-sm font-bold text-white">{stepIndex + 1}</span>
                          </div>
                          <span className="text-gray-600">{step}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Visual */}
                <motion.div 
                  className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200">
                    <ImagePlaceholder 
                      width={600} 
                      height={400} 
                      text={`${feature.title} Demo`}
                      className="w-full h-full"
                    />
                    
                    {/* Floating elements */}
                    <motion.div
                      className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4"
                      initial={{ rotate: -10, scale: 0 }}
                      whileInView={{ rotate: 0, scale: 1 }}
                      transition={{ delay: 0.3, type: "spring" }}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-gray-900">+40%</p>
                          <p className="text-xs text-gray-600">Efficiency</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Background decoration */}
                  <div className={`absolute -bottom-8 ${index % 2 === 0 ? '-right-8' : '-left-8'} w-48 h-48 bg-gradient-to-br ${feature.gradient} rounded-full blur-3xl opacity-20`} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 rounded-3xl" />
          
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900">
              {language === 'es' ? 'Más Problemas que Resolvemos Automáticamente' : 'More Problems We Solve Automatically'}
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {painPoints.map((point, index) => (
                <motion.div
                  key={point.pain}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-all hover:shadow-lg">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-br ${point.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <point.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h4 className="font-semibold mb-1 text-center text-red-600">❌ {point.pain}</h4>
                    <p className={`text-lg font-medium text-center text-green-600`}>
                      ✓ {point.solution}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}