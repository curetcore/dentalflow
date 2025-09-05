export default function Footer() {
  return (
    <footer className="py-12 relative text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">DentalFlow AI</h3>
            <p className="text-sm">
              Transformando clínicas dentales con inteligencia artificial en República Dominicana
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Producto</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-cyan-300 transition">Características</a></li>
              <li><a href="#pricing" className="hover:text-cyan-300 transition">Precios</a></li>
              <li><a href="#testimonials" className="hover:text-cyan-300 transition">Casos de éxito</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Soporte</h4>
            <ul className="space-y-2">
              <li><a href="/docs" className="hover:text-cyan-300 transition">Documentación</a></li>
              <li><a href="/faq" className="hover:text-cyan-300 transition">Preguntas frecuentes</a></li>
              <li><a href="/contact" className="hover:text-cyan-300 transition">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li>WhatsApp: (809) 555-1234</li>
              <li>Email: hola@dentalflow.do</li>
              <li>Lun-Vie: 9AM-6PM</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © 2024 DentalFlow AI. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="/privacy" className="text-sm hover:text-cyan-300 transition">Privacidad</a>
            <a href="/terms" className="text-sm hover:text-cyan-300 transition">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  )
}