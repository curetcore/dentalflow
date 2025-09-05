# DentalFlow AI - Landing Page

Sistema de automatización de confirmación de citas para clínicas dentales mediante WhatsApp.

## 🎯 Estado del Proyecto: MILESTONE 1 COMPLETADO ✅

### Logros Principales:
- Landing page profesional completamente funcional
- Chat simulador idéntico a WhatsApp real
- Dashboard demo con autenticación
- Textos realistas sin promesas exageradas
- Deploy automático en EasyPanel
- 100% responsive y optimizado

## 🚀 Inicio Rápido

### Desarrollo Local
```bash
# Clonar el repositorio
git clone https://github.com/curetcore/dentalflow.git
cd dentalflow/01-Desarrollo/landing-page

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Abrir http://localhost:3000
```

### Build de Producción
```bash
npm run build
npm start
```

## 🔑 Credenciales de Demo

**Dashboard:** `/dashboard`
- Email: `demo@dentalflow.ai`
- Password: `demo123`

## 📁 Estructura del Proyecto

```
landing-page/
├── app/
│   ├── page.tsx              # Página principal (landing)
│   ├── dashboard/
│   │   ├── page.tsx         # Login del dashboard
│   │   └── main/
│   │       └── page.tsx     # Dashboard principal
│   └── layout.tsx           # Layout principal con fuentes
├── components/
│   ├── Hero.tsx             # Hero con chat simulador WhatsApp
│   ├── Features.tsx         # Características del servicio
│   ├── Pricing.tsx          # Planes y precios (3 planes)
│   ├── PricingComparison.tsx # Tabla comparativa Con vs Sin
│   ├── Testimonials.tsx    # Testimonios de clientes
│   ├── CTA.tsx             # Call to action
│   ├── Footer.tsx          # Footer
│   ├── NavbarNew.tsx       # Navbar con logo de texto
│   └── TextLogo.tsx        # Logo de texto componentizado
└── public/
    └── (assets)

```

## 🎨 Decisiones de Diseño

### Colores (Tailwind Config)
```javascript
colors: {
  primary: '#00A6FB',    // Azul dental vibrante
  secondary: '#00D9FF',  // Cyan (higiene)
  accent: '#7209B7',     // Púrpura (tecnología)
  mint: '#4ECDC4',       // Menta (frescura)
  pearl: '#F8F9FA',      // Blanco perla
  lavender: '#E0AAFF',   // Lavanda suave
  coral: '#FF6B6B',      // Coral (encías)
}
```

### Tipografía
- **Principal:** Plus Jakarta Sans (700, 600, 500, 400, 300)
- **Secundaria:** Inter (fallback)

### Chat Simulador WhatsApp
- Colores exactos de WhatsApp:
  - Fondo: `#0B141A`
  - Mensajes recibidos: `#202C33`
  - Mensajes enviados: `#005C4B`
  - Texto: `#E9EDEF`
  - Timestamps: `#8696A0`
- Doble check azul: `#53BDEB`
- Animaciones temporizadas (15+ segundos total)

## 📝 Copywriting - Lineamientos

### ✅ SÍ Hacer:
- Enfocarse en problemas reales (ausencias, pérdidas de tiempo)
- Usar métricas generales ("mejora significativa", "mayor asistencia")
- Hablar de beneficios tangibles pero sin porcentajes exactos
- Mantener todo en español
- Usar testimonios creíbles sin métricas inventadas

### ❌ NO Hacer:
- No prometer porcentajes específicos (73%, 93%, etc.)
- No inventar montos de pérdidas (RD$420,000, etc.)
- No prometer "IA predictiva 24/7" o tecnología imposible
- No usar ROI exagerados (420% en 3 meses)
- No crear expectativas irreales

## 🐛 Problemas Comunes y Soluciones

### 1. Error de Build: "Unexpected token"
**Causa:** Divs mal cerrados o sintaxis JSX incorrecta
**Solución:** Revisar que todos los elementos estén correctamente cerrados

### 2. Imágenes Rotas
**Causa:** URLs externas no confiables
**Solución:** Usar Picsum.photos o Pexels para placeholders

### 3. Build Static Generation Error
**Causa:** Uso de contextos o estado durante SSG
**Solución:** Mover lógica dinámica dentro de componentes

### 4. npm ci falla en Docker
**Causa:** package-lock.json desactualizado
**Solución:** Usar `npm install` en lugar de `npm ci`

## 🚀 Deployment en EasyPanel

El proyecto se despliega automáticamente en EasyPanel cuando se hace push a la rama main.

### Configuración:
1. **GitHub Source:** `https://github.com/curetcore/dentalflow.git`
2. **Build Path:** `/01-Desarrollo/landing-page`
3. **Dockerfile:** Incluido en el proyecto
4. **Puerto:** 3000

### URL de Producción:
`https://dentalflow-frontend.easypanel.host`

## 📋 Próximos Pasos (Pendientes)

1. **Backend y API:**
   - Configurar PostgreSQL
   - Implementar endpoints de autenticación real
   - Sistema de gestión de citas
   - Integración con WhatsApp Business API

2. **Dashboard Completo:**
   - CRUD de pacientes
   - Gestión de citas real
   - Sistema de mensajería
   - Reportes y analytics

3. **Integraciones:**
   - WhatsApp Business API
   - Pasarela de pagos (Azul/Cardnet)
   - Email transaccional

## 🤝 Contribuir

1. Fork el proyecto
2. Crea tu Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la Branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Proyecto privado - Todos los derechos reservados

## 👥 Equipo

- **Desarrollo:** CuretCore Team
- **Cliente:** DentalFlow RD
- **Stack:** Next.js 14, TypeScript, Tailwind CSS, Framer Motion

---

**Última actualización:** Septiembre 2024 - Milestone 1 Completado