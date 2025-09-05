import { useLanguage } from "@/contexts/LanguageContext"

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">DentalFlow AI</h3>
            <p className="text-sm">
              {t.footer.tagline}
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.product}</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-white transition">{t.footer.features}</a></li>
              <li><a href="#pricing" className="hover:text-white transition">{t.footer.pricing}</a></li>
              <li><a href="#testimonials" className="hover:text-white transition">{t.footer.success}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.support}</h4>
            <ul className="space-y-2">
              <li><a href="/docs" className="hover:text-white transition">{t.footer.docs}</a></li>
              <li><a href="/faq" className="hover:text-white transition">{t.footer.faq}</a></li>
              <li><a href="/contact" className="hover:text-white transition">{t.footer.contact}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.contactTitle}</h4>
            <ul className="space-y-2">
              <li>WhatsApp: (809) 555-1234</li>
              <li>Email: hola@dentalflow.do</li>
              <li>{t.footer.monday}</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © 2024 DentalFlow AI. {t.footer.rights}
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="/privacy" className="text-sm hover:text-white transition">{t.footer.privacy}</a>
            <a href="/terms" className="text-sm hover:text-white transition">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}