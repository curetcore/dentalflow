"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Star, Users, TrendingUp } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function HeroNew() {
  const [email, setEmail] = useState("")

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-gray-50 to-white pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Star className="w-4 h-4 fill-current" />
              #1 AI Assistant for Dental Clinics
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Reduce No-Shows by 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> 73% </span>
              with AI-Powered Automation
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              DentalFlow AI automatically confirms appointments, predicts cancellations, and fills gaps in your schedule - all through intelligent WhatsApp conversations.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Active Clinics</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-gray-900">93%</div>
                <div className="text-sm text-gray-600">Accuracy Rate</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Availability</div>
              </div>
            </div>

            {/* CTA Form */}
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0 mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                className="flex-1 px-5 py-3.5 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="bg-gradient-to-r from-primary to-primary/90 text-white px-8 py-3.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                14-day free trial
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Setup in 24 hours
              </span>
            </div>
          </motion.div>

          {/* Right Column - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Main Dashboard Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop"
                alt="DentalFlow Dashboard"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              
              {/* Overlay with live metrics */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Today's Confirmations</p>
                    <p className="text-xl font-bold text-gray-900">24/28</p>
                  </div>
                </div>
              </div>

              {/* Chat preview */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-4 right-4 bg-white rounded-lg shadow-xl p-4 max-w-xs"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">AI</span>
                  </div>
                  <span className="font-semibold text-sm">Maria AI</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Hi John! This is Maria from SmileCare Dental 🦷
                </p>
                <p className="text-sm text-gray-600">
                  I wanted to confirm your appointment tomorrow at 3:00 PM with Dr. Smith. Reply YES to confirm or NO to reschedule.
                </p>
                <div className="mt-3 text-right">
                  <span className="inline-block bg-primary text-white text-sm px-3 py-1 rounded-full">
                    YES! I'll be there
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Floating testimonial */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-xs hidden lg:block"
            >
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-600 italic mb-2">
                "DentalFlow reduced our no-shows by 68% in just 2 months!"
              </p>
              <p className="text-xs text-gray-500 font-medium">
                Dr. Sarah Johnson, SmileCare Dental
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}