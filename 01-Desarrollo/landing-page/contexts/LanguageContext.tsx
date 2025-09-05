"use client"

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'es' | 'en'

interface Translations {
  navbar: {
    features: string
    testimonials: string
    pricing: string
    demo: string
    startTrial: string
    login: string
    dashboard: string
  }
  hero: {
    badge: string
    title1: string
    title2: string
    title3: string
    subtitle: string
    emailPlaceholder: string
    stats: {
      clinics: string
      accuracy: string
      availability: string
    }
    trust: {
      noCard: string
      freeTrialDays: string
      setupHours: string
    }
  }
  features: {
    title1: string
    title2: string
    subtitle: string
    assistant: {
      title: string
      description: string
    }
    analytics: {
      title: string
      description: string
    }
    revenue: {
      title: string
      description: string
    }
    howItWorks: string
    step1: string
    step2: string
    step3: string
    whyChoose: string
    benefits: {
      scheduling: string
      communication: string
      timeSaved: string
      security: string
      setupTime: string
      satisfaction: string
    }
  }
  testimonials: {
    title1: string
    title2: string
    subtitle: string
    stats: {
      activeClinics: string
      appointments: string
      revenue: string
      rating: string
    }
    metrics: {
      revenueIncrease: string
      noShowReduction: string
      patientSatisfaction: string
      period: string
    }
  }
  pricing: {
    title: string
    subtitle: string
    monthly: string
    popular: string
    features: {
      patients: string
      unlimited: string
      confirmations: string
      predictions: string
      multichannel: string
      analytics: string
      api: string
      multiLocation: string
      dedicatedManager: string
      customIntegrations: string
      onsite: string
      sla: string
    }
  }
}

const translations: Record<Language, Translations> = {
  es: {
    navbar: {
      features: "Características",
      testimonials: "Testimonios",
      pricing: "Precios",
      demo: "Demo",
      startTrial: "Prueba Gratis",
      login: "Iniciar Sesión",
      dashboard: "Dashboard"
    },
    hero: {
      badge: "#1 Asistente IA para Clínicas Dentales",
      title1: "Reduce las Ausencias un",
      title2: "73%",
      title3: "con Automatización Inteligente",
      subtitle: "DentalFlow AI confirma citas automáticamente, predice cancelaciones y llena los espacios en tu agenda - todo mediante conversaciones inteligentes por WhatsApp.",
      emailPlaceholder: "Ingresa tu email corporativo",
      stats: {
        clinics: "Clínicas Activas",
        accuracy: "Precisión",
        availability: "Disponibilidad"
      },
      trust: {
        noCard: "Sin tarjeta de crédito",
        freeTrialDays: "14 días gratis",
        setupHours: "Setup en 24 horas"
      }
    },
    features: {
      title1: "Todo lo que Necesitas para",
      title2: "Transformar tu Práctica",
      subtitle: "DentalFlow AI maneja todo el ciclo de comunicación con pacientes, para que puedas enfocarte en brindar excelente atención dental.",
      assistant: {
        title: "Asistente IA 24/7",
        description: "María nunca duerme. Confirma y reagenda citas automáticamente vía WhatsApp, SMS o email."
      },
      analytics: {
        title: "Análisis Predictivo",
        description: "93% de precisión prediciendo ausencias. La IA aprende de los patrones de comportamiento de cada paciente."
      },
      revenue: {
        title: "Optimización de Ingresos",
        description: "Llena automáticamente espacios cancelados. Incremento promedio del 40% en ingresos en los primeros 3 meses."
      },
      howItWorks: "Cómo funciona:",
      step1: "Se integra perfectamente con tus sistemas existentes",
      step2: "Se activa automáticamente en momentos óptimos",
      step3: "Aprende y mejora continuamente su rendimiento",
      whyChoose: "Por qué las Clínicas Eligen DentalFlow",
      benefits: {
        scheduling: "Agendamiento Inteligente",
        communication: "Comunicación con Pacientes",
        timeSaved: "Tiempo Ahorrado",
        security: "Cumple HIPAA",
        setupTime: "Tiempo de Setup",
        satisfaction: "Satisfacción de Pacientes"
      }
    },
    testimonials: {
      title1: "Confiado por",
      title2: "Clínicas Dentales Líderes",
      subtitle: "Únete a miles de dentistas que han transformado su práctica con IA",
      stats: {
        activeClinics: "Clínicas Activas",
        appointments: "Citas Gestionadas",
        revenue: "Ingresos Recuperados",
        rating: "Calificación Promedio"
      },
      metrics: {
        revenueIncrease: "Incremento de Ingresos",
        noShowReduction: "Reducción de Ausencias",
        patientSatisfaction: "Satisfacción de Pacientes",
        period: "en 2 meses"
      }
    },
    pricing: {
      title: "Precios simples, ROI garantizado",
      subtitle: "María se paga sola. En promedio, nuestras clínicas recuperan la inversión en 3 semanas",
      monthly: "/mes",
      popular: "Más popular",
      features: {
        patients: "Hasta 500 pacientes",
        unlimited: "Pacientes ilimitados",
        confirmations: "Confirmaciones automáticas",
        predictions: "IA predictiva avanzada",
        multichannel: "Multi-canal (WhatsApp + SMS)",
        analytics: "Analytics completo",
        api: "API personalizada",
        multiLocation: "Multi-sucursal",
        dedicatedManager: "Manager dedicado",
        customIntegrations: "Integraciones custom",
        onsite: "Training on-site",
        sla: "SLA garantizado"
      }
    }
  },
  en: {
    navbar: {
      features: "Features",
      testimonials: "Testimonials", 
      pricing: "Pricing",
      demo: "Demo",
      startTrial: "Start Free Trial",
      login: "Login",
      dashboard: "Dashboard"
    },
    hero: {
      badge: "#1 AI Assistant for Dental Clinics",
      title1: "Reduce No-Shows by",
      title2: "73%",
      title3: "with AI-Powered Automation",
      subtitle: "DentalFlow AI automatically confirms appointments, predicts cancellations, and fills gaps in your schedule - all through intelligent WhatsApp conversations.",
      emailPlaceholder: "Enter your work email",
      stats: {
        clinics: "Active Clinics",
        accuracy: "Accuracy Rate",
        availability: "Availability"
      },
      trust: {
        noCard: "No credit card required",
        freeTrialDays: "14-day free trial",
        setupHours: "Setup in 24 hours"
      }
    },
    features: {
      title1: "Everything You Need to",
      title2: "Transform Your Practice",
      subtitle: "DentalFlow AI handles the entire patient communication lifecycle, so you can focus on providing excellent dental care.",
      assistant: {
        title: "24/7 AI Assistant",
        description: "Maria never sleeps. Automatically confirms and reschedules appointments via WhatsApp, SMS, or email."
      },
      analytics: {
        title: "Predictive Analytics",
        description: "93% accuracy in predicting no-shows. AI learns from each patient's behavior patterns."
      },
      revenue: {
        title: "Revenue Optimization",
        description: "Automatically fills cancelled slots. Average 40% revenue increase in the first 3 months."
      },
      howItWorks: "How it works:",
      step1: "Seamlessly integrates with your existing systems",
      step2: "Automatically triggers at optimal times",
      step3: "Continuously learns and improves performance",
      whyChoose: "Why Dental Practices Choose DentalFlow",
      benefits: {
        scheduling: "Smart Scheduling",
        communication: "Patient Communication",
        timeSaved: "Time Saved",
        security: "HIPAA Compliant",
        setupTime: "Setup Time",
        satisfaction: "Patient Satisfaction"
      }
    },
    testimonials: {
      title1: "Trusted by",
      title2: "Leading Dental Practices",
      subtitle: "Join thousands of dentists who've transformed their practice with AI",
      stats: {
        activeClinics: "Active Clinics",
        appointments: "Appointments Managed",
        revenue: "Revenue Recovered",
        rating: "Average Rating"
      },
      metrics: {
        revenueIncrease: "Revenue Increase",
        noShowReduction: "No-show Reduction",
        patientSatisfaction: "Patient Satisfaction",
        period: "in 2 months"
      }
    },
    pricing: {
      title: "Simple pricing, guaranteed ROI",
      subtitle: "Maria pays for herself. On average, our clinics recover their investment in 3 weeks",
      monthly: "/month",
      popular: "Most popular",
      features: {
        patients: "Up to 500 patients",
        unlimited: "Unlimited patients",
        confirmations: "Automatic confirmations",
        predictions: "Advanced predictive AI",
        multichannel: "Multi-channel (WhatsApp + SMS)",
        analytics: "Complete analytics",
        api: "Custom API",
        multiLocation: "Multi-location",
        dedicatedManager: "Dedicated manager",
        customIntegrations: "Custom integrations",
        onsite: "On-site training",
        sla: "Guaranteed SLA"
      }
    }
  }
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es')

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      t: translations[language] 
    }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}