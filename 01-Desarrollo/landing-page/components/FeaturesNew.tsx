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
  Users
} from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Bot,
    title: "24/7 AI Assistant",
    description: "Maria never sleeps. Automatically confirms and reschedules appointments via WhatsApp, SMS, or email.",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&h=400&fit=crop"
  },
  {
    icon: Brain,
    title: "Predictive Analytics",
    description: "93% accuracy in predicting no-shows. AI learns from each patient's behavior patterns.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
  },
  {
    icon: TrendingUp,
    title: "Revenue Optimization",
    description: "Automatically fills cancelled slots. Average 40% revenue increase in the first 3 months.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
  }
]

const benefits = [
  { icon: Calendar, title: "Smart Scheduling", value: "100% automated" },
  { icon: MessageSquare, title: "Patient Communication", value: "5 languages" },
  { icon: Clock, title: "Time Saved", value: "15 hrs/week" },
  { icon: Shield, title: "HIPAA Compliant", value: "100% secure" },
  { icon: Zap, title: "Setup Time", value: "< 24 hours" },
  { icon: Users, title: "Patient Satisfaction", value: "4.9/5 rating" }
]

export default function FeaturesNew() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Everything You Need to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> Transform Your Practice</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            DentalFlow AI handles the entire patient communication lifecycle, so you can focus on providing excellent dental care.
          </p>
        </motion.div>

        {/* Main Features */}
        <div className="space-y-24 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{feature.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{feature.description}</p>
                
                {/* Feature specific details */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <h4 className="font-semibold mb-3">How it works:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <span className="text-xs font-bold text-primary">1</span>
                      </div>
                      <span className="text-gray-600">Seamlessly integrates with your existing systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <span className="text-xs font-bold text-primary">2</span>
                      </div>
                      <span className="text-gray-600">Automatically triggers at optimal times</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <span className="text-xs font-bold text-primary">3</span>
                      </div>
                      <span className="text-gray-600">Continuously learns and improves performance</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                {/* Floating accent */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full blur-3xl opacity-20" />
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
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Why Dental Practices Choose DentalFlow
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-1">{benefit.title}</h4>
                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  {benefit.value}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}