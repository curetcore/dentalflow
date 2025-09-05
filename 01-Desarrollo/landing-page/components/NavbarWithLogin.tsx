"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Globe, LogIn } from "lucide-react"
import LogoNew from "./LogoNew"
import { useLanguage } from "@/contexts/LanguageContext"
import Link from "next/link"

export default function NavbarWithLogin() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showLangMenu, setShowLangMenu] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#features", label: t.navbar.features },
    { href: "#testimonials", label: t.navbar.testimonials },
    { href: "#pricing", label: t.navbar.pricing },
    { href: "#demo", label: t.navbar.demo },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-100"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo with animation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <LogoNew className="h-10 md:h-14 w-auto" />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-700 hover:text-primary font-medium transition-all hover:scale-105"
              >
                {item.label}
              </motion.a>
            ))}
            
            {/* Language Selector */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center gap-2 text-gray-700 hover:text-primary font-medium transition-all"
              >
                <Globe className="w-5 h-5" />
                {language.toUpperCase()}
              </motion.button>
              
              <AnimatePresence>
                {showLangMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden"
                  >
                    <button
                      onClick={() => {
                        setLanguage('es')
                        setShowLangMenu(false)
                      }}
                      className={`block w-full px-4 py-2 text-left hover:bg-gray-50 ${
                        language === 'es' ? 'bg-primary/10 text-primary' : ''
                      }`}
                    >
                      🇩🇴 Español
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('en')
                        setShowLangMenu(false)
                      }}
                      className={`block w-full px-4 py-2 text-left hover:bg-gray-50 ${
                        language === 'en' ? 'bg-primary/10 text-primary' : ''
                      }`}
                    >
                      🇺🇸 English
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Divider */}
            <div className="h-8 w-px bg-gray-200" />
            
            {/* Login Button */}
            <motion.a
              href="/dashboard"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-gray-700 hover:text-primary font-medium transition-all group"
            >
              <LogIn className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              {t.navbar.login}
            </motion.a>
            
            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-gradient-to-r from-primary via-cyan-500 to-secondary text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all overflow-hidden group"
            >
              <span className="relative z-10">{t.navbar.startTrial}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary via-cyan-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 10 }}
                  className="block py-3 text-gray-700 hover:text-primary font-medium transition-all"
                >
                  {item.label}
                </motion.a>
              ))}
              
              {/* Mobile Language Selector */}
              <div className="py-3 space-y-2">
                <p className="text-sm text-gray-500 font-medium">Idioma / Language</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setLanguage('es')}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      language === 'es' 
                        ? 'bg-primary text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    🇩🇴 ES
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      language === 'en' 
                        ? 'bg-primary text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    🇺🇸 EN
                  </button>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t pt-4" />
              
              {/* Mobile Login */}
              <a
                href="/dashboard"
                className="flex items-center justify-center gap-2 py-3 text-primary font-medium border border-primary rounded-full hover:bg-primary/5 transition-all"
              >
                <LogIn className="w-5 h-5" />
                {t.navbar.login}
              </a>
              
              {/* Mobile CTA */}
              <button className="w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-4 rounded-full font-semibold shadow-lg">
                {t.navbar.startTrial}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}