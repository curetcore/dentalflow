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
  cta: {
    title: string
    subtitle: string
    freeTrialDays: string
    noCreditCard: string
    setupTime: string
    setupDescription: string
    resultsDay1: string
    resultsDescription: string
    startFreeTrial: string
    talkToSales: string
    questions: string
    hours: string
  }
  footer: {
    tagline: string
    product: string
    features: string
    pricing: string
    success: string
    support: string
    docs: string
    faq: string
    contact: string
    contactTitle: string
    monday: string
    rights: string
    privacy: string
    terms: string
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
      badge: "La IA que Elimina las Pérdidas por Citas Olvidadas",
      title1: "Cada ausencia te cuesta",
      title2: "RD$2,500",
      title3: "María las reduce un 73%",
      subtitle: "Las secretarias pierden 3 horas diarias confirmando citas. Los pacientes olvidan sus citas. Tu clínica pierde RD$150,000 al mes. María resuelve todo esto con automatización inteligente por WhatsApp.",
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
      title1: "Los Problemas que Cuestan Dinero",
      title2: "Y Cómo los Resolvemos",
      subtitle: "Cada problema no resuelto significa pérdidas. Identificamos los 12 principales dolores de las clínicas dentales y creamos soluciones automáticas para cada uno.",
      assistant: {
        title: "Citas Olvidadas = Dinero Perdido",
        description: "30% de pacientes olvidan sus citas. María envía recordatorios automáticos 24h y 3h antes. Resultado: -73% ausencias, +RD$150,000/mes recuperados."
      },
      analytics: {
        title: "Llamadas Perdidas = Pacientes Perdidos",
        description: "Cada llamada sin responder es un paciente que va a la competencia. María responde automáticamente en WhatsApp con opción de agendar inmediata."
      },
      revenue: {
        title: "Secretarias Sobrecargadas = Errores Costosos",
        description: "Tu equipo pierde 15 horas semanales en tareas repetitivas. María automatiza confirmaciones, cancelaciones y reprogramaciones. Más tiempo para atención de calidad."
      },
      howItWorks: "Cómo funciona:",
      step1: "Se integra perfectamente con tus sistemas existentes",
      step2: "Se activa automáticamente en momentos óptimos",
      step3: "Aprende y mejora continuamente su rendimiento",
      whyChoose: "Por qué las Clínicas Eligen DentalFlow",
      benefits: {
        scheduling: "Agenda Digital Sincronizada",
        communication: "Reactivación de Pacientes",
        timeSaved: "Tiempo Liberado",
        security: "Datos Seguros",
        setupTime: "Setup Rápido",
        satisfaction: "Reseñas 5 Estrellas"
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
      title: "La inversión que se paga sola",
      subtitle: "Con solo evitar 5 ausencias al mes, María ya pagó su costo. El promedio es 40 ausencias evitadas.",
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
    },
    cta: {
      title: "Deja de perder RD$150,000 cada mes",
      subtitle: "María empieza a recuperar pacientes ausentes en menos de 24 horas",
      freeTrialDays: "14 días gratis",
      noCreditCard: "Sin tarjeta de crédito",
      setupTime: "Setup en 24h",
      setupDescription: "Nosotros lo hacemos",
      resultsDay1: "Resultados día 1",
      resultsDescription: "María empieza de inmediato",
      startFreeTrial: "Activar prueba gratis",
      talkToSales: "Hablar con ventas",
      questions: "¿Preguntas?",
      hours: "Lun-Vie 9AM-6PM"
    },
    footer: {
      tagline: "Transformando clínicas dentales con inteligencia artificial en República Dominicana",
      product: "Producto",
      features: "Características",
      pricing: "Precios",
      success: "Casos de éxito",
      support: "Soporte",
      docs: "Documentación",
      faq: "Preguntas frecuentes",
      contact: "Contacto",
      contactTitle: "Contacto",
      monday: "Lun-Vie: 9AM-6PM",
      rights: "Todos los derechos reservados.",
      privacy: "Privacidad",
      terms: "Términos"
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
      badge: "The AI that Eliminates Lost Revenue from Forgotten Appointments",
      title1: "Each no-show costs you",
      title2: "$125",
      title3: "Maria reduces them by 73%",
      subtitle: "Receptionists waste 3 hours daily confirming appointments. Patients forget their appointments. Your clinic loses $7,500 monthly. Maria solves all this with intelligent WhatsApp automation.",
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
      title1: "Problems That Cost Money",
      title2: "And How We Solve Them",
      subtitle: "Every unsolved problem means losses. We identified the 12 main pain points of dental clinics and created automatic solutions for each one.",
      assistant: {
        title: "Forgotten Appointments = Lost Money",
        description: "30% of patients forget their appointments. Maria sends automatic reminders 24h and 3h before. Result: -73% no-shows, +$7,500/month recovered."
      },
      analytics: {
        title: "Missed Calls = Lost Patients",
        description: "Every unanswered call is a patient going to the competition. Maria automatically responds on WhatsApp with immediate booking options."
      },
      revenue: {
        title: "Overloaded Staff = Costly Errors",
        description: "Your team wastes 15 hours weekly on repetitive tasks. Maria automates confirmations, cancellations, and rescheduling. More time for quality care."
      },
      howItWorks: "How it works:",
      step1: "Seamlessly integrates with your existing systems",
      step2: "Automatically triggers at optimal times",
      step3: "Continuously learns and improves performance",
      whyChoose: "Why Dental Practices Choose DentalFlow",
      benefits: {
        scheduling: "Synced Digital Calendar",
        communication: "Patient Reactivation",
        timeSaved: "Time Freed Up",
        security: "Secure Data",
        setupTime: "Quick Setup",
        satisfaction: "5-Star Reviews"
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
      title: "The investment that pays for itself",
      subtitle: "By preventing just 5 no-shows per month, Maria has already paid for herself. The average is 40 prevented no-shows.",
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
    },
    cta: {
      title: "Stop losing $7,500 every month",
      subtitle: "Maria starts recovering absent patients in less than 24 hours",
      freeTrialDays: "14-day free trial",
      noCreditCard: "No credit card required",
      setupTime: "Setup in 24h",
      setupDescription: "We do it for you",
      resultsDay1: "Results on day 1",
      resultsDescription: "Maria starts immediately",
      startFreeTrial: "Start free trial",
      talkToSales: "Talk to sales",
      questions: "Questions?",
      hours: "Mon-Fri 9AM-6PM"
    },
    footer: {
      tagline: "Transforming dental clinics with artificial intelligence",
      product: "Product",
      features: "Features",
      pricing: "Pricing",
      success: "Success Stories",
      support: "Support",
      docs: "Documentation",
      faq: "FAQ",
      contact: "Contact",
      contactTitle: "Contact",
      monday: "Mon-Fri: 9AM-6PM",
      rights: "All rights reserved.",
      privacy: "Privacy",
      terms: "Terms"
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