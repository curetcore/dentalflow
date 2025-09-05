export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pb-12 relative">
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
              <li><a href="#features" className="hover:text-white transition">Características</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Precios</a></li>
              <li><a href="#testimonials" className="hover:text-white transition">Casos de éxito</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Soporte</h4>
            <ul className="space-y-2">
              <li><a href="/docs" className="hover:text-white transition">Documentación</a></li>
              <li><a href="/faq" className="hover:text-white transition">Preguntas frecuentes</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contacto</a></li>
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
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © 2024 DentalFlow AI. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="/privacy" className="text-sm hover:text-white transition">Privacidad</a>
            <a href="/terms" className="text-sm hover:text-white transition">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  )
}