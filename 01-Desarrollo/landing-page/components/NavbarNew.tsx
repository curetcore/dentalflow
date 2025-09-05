"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import LogoNew from "./LogoNew"

export default function NavbarNew() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#features", label: "Características" },
    { href: "#testimonials", label: "Testimonios" },
    { href: "#pricing", label: "Precios" },
    { href: "#demo", label: "Demo" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-100"
          : "bg-gradient-to-b from-white to-transparent"
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
          <div className="hidden lg:flex items-center gap-8">
            <motion.div
              className="flex items-center gap-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`font-medium transition-all hover:text-primary ${
                    isScrolled ? "text-gray-700" : "text-gray-900"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <a
                href="/dashboard"
                className="px-4 py-2 text-primary border-2 border-primary rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-300"
              >
                Iniciar Sesión
              </a>
              <motion.a
                href="#pricing"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r from-primary via-secondary to-mint text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
              >
                Prueba 1 Mes Gratis
              </motion.a>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 font-medium hover:text-primary transition-colors py-2"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="border-t border-gray-200 pt-4 space-y-3">
                  <a
                    href="/dashboard"
                    className="block w-full text-center px-6 py-3 text-primary border-2 border-primary rounded-full font-medium hover:bg-primary hover:text-white transition-all"
                  >
                    Iniciar Sesión
                  </a>
                  <a
                    href="#pricing"
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-primary via-secondary to-mint text-white rounded-full font-medium shadow-lg"
                  >
                    Prueba 1 Mes Gratis
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}