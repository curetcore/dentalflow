"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Phone, MoreVertical, Paperclip, Smile, Mic, Camera } from "lucide-react"
import { useState, useEffect } from "react"

interface Message {
  id: number
  text: string
  sent: boolean
  time: string
  status?: 'sent' | 'delivered' | 'read'
  delay?: number
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "¡Hola! 👋 Le recordamos su cita mañana a las 3:00 PM con el Dr. Rodríguez 🦷",
    sent: false,
    time: "2:45 PM",
    delay: 1
  },
  {
    id: 2,
    text: "Perfecto, ahí estaré!",
    sent: true,
    time: "2:46 PM",
    status: 'read',
    delay: 2.5
  },
  {
    id: 3,
    text: "Excelente! Le confirmo entonces:\n📅 Viernes 15 de marzo\n⏰ 3:00 PM\n👨‍⚕️ Dr. Rodríguez",
    sent: false,
    time: "2:46 PM",
    delay: 4
  },
  {
    id: 4,
    text: "¿Puedo llevar a mi niña?",
    sent: true,
    time: "2:47 PM",
    status: 'read',
    delay: 5.5
  },
  {
    id: 5,
    text: "¡Por supuesto! El Dr. Rodríguez es excelente con los niños 👶",
    sent: false,
    time: "2:47 PM",
    delay: 7
  }
]

export default function WhatsAppSimulator() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isTyping, setIsTyping] = useState(false)
  
  useEffect(() => {
    // Add messages progressively
    initialMessages.forEach((msg, index) => {
      setTimeout(() => {
        if (!msg.sent && index > 0) {
          setIsTyping(true)
          setTimeout(() => {
            setIsTyping(false)
            setMessages(prev => [...prev, msg])
          }, 1500)
        } else {
          setMessages(prev => [...prev, msg])
        }
      }, (msg.delay || 0) * 1000)
    })
  }, [])

  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-[380px] mx-auto border border-gray-200">
      {/* WhatsApp Header */}
      <div className="bg-[#075e54] px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ArrowLeft className="w-6 h-6 text-white cursor-pointer" />
          <img 
            src="https://picsum.photos/seed/dentalclinic/40/40"
            alt="Clínica"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-white font-medium text-base">Clínica Dental Sonrisa</p>
            <p className="text-green-100 text-xs">en línea</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Phone className="w-5 h-5 text-white cursor-pointer" />
          <MoreVertical className="w-5 h-5 text-white cursor-pointer" />
        </div>
      </div>
      
      {/* WhatsApp Chat Background */}
      <div className="relative h-[500px] overflow-y-auto" style={{
        backgroundColor: '#e5ddd5',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd' opacity='0.05'%3E%3Cg fill='%23000'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}>
        
        <div className="p-3 space-y-2">
          {/* Date separator */}
          <div className="flex justify-center my-4">
            <span className="bg-[#f0f4f7] text-[#667781] text-xs px-4 py-1 rounded-full shadow-sm">
              HOY
            </span>
          </div>

          {/* Messages */}
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex ${message.sent ? 'justify-end' : 'justify-start'} mb-1`}
            >
              <div
                className={`max-w-[75%] px-3 py-2 rounded-lg relative ${
                  message.sent
                    ? 'bg-[#dcf8c6]'
                    : 'bg-white'
                }`}
                style={{
                  borderRadius: '7.5px',
                  boxShadow: '0 1px 0.5px rgba(0,0,0,0.13)'
                }}
              >
                <p className="text-[#303030] text-sm whitespace-pre-line" style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
                }}>
                  {message.text}
                </p>
                <div className="flex items-center justify-end gap-1 mt-1">
                  <span className="text-[#667781] text-[11px]">{message.time}</span>
                  {message.sent && message.status === 'read' && (
                    <svg className="w-4 h-3.5" viewBox="0 0 16 11" fill="none">
                      <path d="M11.071.653a.5.5 0 0 1 .708 0l3.84 3.84a.5.5 0 0 1-.708.707L11.07 1.36 5.354 7.076a.5.5 0 0 1-.708 0L.146 2.576a.5.5 0 0 1 .708-.707l4.146 4.147L11.071.653z" fill="#53bdeb"/>
                      <path d="M13.025 1.16a.5.5 0 0 1 .707 0l1.89 1.89a.5.5 0 0 1-.707.707l-1.89-1.89a.5.5 0 0 1 0-.707z" fill="#53bdeb"/>
                      <path d="M15.621 3.05l-5.09 5.09a.5.5 0 0 1-.708 0L5.354 3.67a.5.5 0 1 1 .708-.707l4.114 4.114 4.738-4.738a.5.5 0 0 1 .707.707z" fill="#53bdeb"/>
                    </svg>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start mb-1"
            >
              <div className="bg-white px-4 py-3 rounded-lg" style={{
                borderRadius: '7.5px',
                boxShadow: '0 1px 0.5px rgba(0,0,0,0.13)'
              }}>
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        delay: i * 0.2
                      }}
                      className="w-2 h-2 bg-[#667781] rounded-full"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* WhatsApp Input Bar */}
      <div className="bg-[#f0f2f5] px-4 py-2 flex items-center gap-3">
        <Smile className="w-6 h-6 text-[#8696a0] cursor-pointer" />
        <Paperclip className="w-6 h-6 text-[#8696a0] cursor-pointer" />
        <div className="flex-1 bg-white rounded-3xl px-4 py-2 flex items-center">
          <span className="text-[#8696a0] text-sm" style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
          }}>
            Escribe un mensaje
          </span>
        </div>
        <Camera className="w-6 h-6 text-[#8696a0] cursor-pointer" />
        <Mic className="w-6 h-6 text-[#8696a0] cursor-pointer" />
      </div>
    </div>
  )
}