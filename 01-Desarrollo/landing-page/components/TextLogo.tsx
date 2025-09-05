"use client"

import { motion } from "framer-motion"

interface TextLogoProps {
  className?: string
}

export default function TextLogo({ className = "" }: TextLogoProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`flex items-center gap-2 ${className}`}
    >
      <div className="flex items-baseline">
        <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          DentalFlow
        </span>
        <span className="text-xs md:text-sm font-medium text-gray-500 ml-1">
          AI
        </span>
      </div>
    </motion.div>
  )
}