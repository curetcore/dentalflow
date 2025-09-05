"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { 
  Calendar, 
  Users, 
  MessageSquare, 
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  BarChart3,
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  DollarSign
} from "lucide-react"
import TextLogo from "@/components/TextLogo"

// Datos de ejemplo
const mockData = {
  stats: {
    citasHoy: 12,
    confirmadas: 10,
    pendientes: 2,
    ausencias: 1,
    tasaAsistencia: 92,
    pacientesActivos: 487,
    mensajesEnviados: 1247,
    ahorroDiario: 8500
  },
  citasRecientes: [
    { id: 1, paciente: "María González", hora: "9:00 AM", doctor: "Dr. Rodríguez", estado: "confirmada" },
    { id: 2, paciente: "Juan Pérez", hora: "10:00 AM", doctor: "Dra. Santos", estado: "pendiente" },
    { id: 3, paciente: "Ana Martínez", hora: "11:00 AM", doctor: "Dr. Rodríguez", estado: "confirmada" },
    { id: 4, paciente: "Luis Jiménez", hora: "2:00 PM", doctor: "Dr. López", estado: "confirmada" },
    { id: 5, paciente: "Carmen Díaz", hora: "3:00 PM", doctor: "Dra. Santos", estado: "cancelada" },
  ],
  mensajesRecientes: [
    { id: 1, texto: "Cita confirmada para mañana", hora: "Hace 5 min", tipo: "enviado" },
    { id: 2, texto: "Perfecto, ahí estaré", hora: "Hace 8 min", tipo: "recibido" },
    { id: 3, texto: "Recordatorio de cita", hora: "Hace 15 min", tipo: "enviado" },
    { id: 4, texto: "¿Puedo cambiar la hora?", hora: "Hace 20 min", tipo: "recibido" },
  ]
}

export default function DashboardMain() {
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Verificar autenticación simple
    const auth = localStorage.getItem("dentalflow_auth")
    if (auth !== "true") {
      router.push("/dashboard")
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("dentalflow_auth")
    router.push("/dashboard")
  }

  if (!isAuthenticated) {
    return null
  }

  const navigation = [
    { name: 'Dashboard', href: '#', icon: BarChart3, current: true },
    { name: 'Citas', href: '#', icon: Calendar, current: false },
    { name: 'Pacientes', href: '#', icon: Users, current: false },
    { name: 'Mensajes', href: '#', icon: MessageSquare, current: false },
    { name: 'Configuración', href: '#', icon: Settings, current: false },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-6 border-b">
          <TextLogo />
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="flex-1 px-4 py-4 space-y-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`${
                item.current
                  ? 'bg-primary text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              } group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors`}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </a>
          ))}
        </nav>

        <div className="p-4 border-t">
          <button
            onClick={handleLogout}
            className="flex items-center text-gray-600 hover:text-primary transition-colors"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Cerrar sesión
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64 flex flex-col flex-1">
        {/* Top bar */}
        <div className="sticky top-0 z-40 bg-white shadow-sm">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden"
            >
              <Menu className="w-6 h-6" />
            </button>
            
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-600">
                <Bell className="w-6 h-6" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
              </button>
              
              <div className="flex items-center gap-3">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://picsum.photos/seed/user/100/100"
                  alt="User"
                />
                <div className="hidden sm:block">
                  <p className="text-sm font-semibold text-gray-700">Clínica Demo</p>
                  <p className="text-xs text-gray-500">demo@dentalflow.ai</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {/* Stats grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Citas Hoy</p>
                  <p className="text-3xl font-bold text-gray-900">{mockData.stats.citasHoy}</p>
                </div>
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-lg shadow p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Confirmadas</p>
                  <p className="text-3xl font-bold text-green-600">{mockData.stats.confirmadas}</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg shadow p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Tasa Asistencia</p>
                  <p className="text-3xl font-bold text-primary">{mockData.stats.tasaAsistencia}%</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-lg shadow p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Ahorro Hoy</p>
                  <p className="text-3xl font-bold text-gray-900">RD${mockData.stats.ahorroDiario.toLocaleString()}</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Two columns layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Citas del día */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-lg shadow"
            >
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold text-gray-900">Citas de Hoy</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {mockData.citasRecientes.map((cita) => (
                    <div key={cita.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <Users className="w-5 h-5 text-primary" />
                          </div>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{cita.paciente}</p>
                          <p className="text-sm text-gray-500">{cita.hora} - {cita.doctor}</p>
                        </div>
                      </div>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        cita.estado === 'confirmada' ? 'bg-green-100 text-green-800' :
                        cita.estado === 'pendiente' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {cita.estado}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Mensajes recientes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-lg shadow"
            >
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold text-gray-900">Mensajes Recientes</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {mockData.mensajesRecientes.map((mensaje) => (
                    <div key={mensaje.id} className={`flex ${mensaje.tipo === 'enviado' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs px-4 py-2 rounded-lg ${
                        mensaje.tipo === 'enviado' 
                          ? 'bg-primary text-white' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        <p className="text-sm">{mensaje.texto}</p>
                        <p className={`text-xs mt-1 ${
                          mensaje.tipo === 'enviado' ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          {mensaje.hora}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Chart placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 bg-white rounded-lg shadow p-6"
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Tendencia de Asistencia</h2>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Gráfico de tendencias</p>
                <p className="text-sm text-gray-400">Próximamente</p>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  )
}