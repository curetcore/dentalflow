# Instrucciones de Desarrollo - DentalFlow AI

## 🎯 Guía Completa de Desarrollo

### Requisitos Previos
- Node.js 18+ 
- npm o yarn
- Git
- Docker (para deployment)
- Cuenta en GitHub
- Acceso a EasyPanel (deployment)

## 🚀 Configuración Inicial

### 1. Clonar y Configurar
```bash
# Clonar repositorio
git clone https://github.com/curetcore/dentalflow.git
cd dentalflow/01-Desarrollo/landing-page

# Instalar dependencias
npm install

# Crear archivo .env.local (si necesitas variables de entorno)
touch .env.local
```

### 2. Desarrollo Local
```bash
# Servidor de desarrollo con hot reload
npm run dev

# Verificar en http://localhost:3000
```

### 3. Testing y Build
```bash
# Verificar tipos TypeScript
npm run type-check

# Linting
npm run lint

# Build de producción
npm run build

# Probar build localmente
npm start
```

## 📝 Flujo de Trabajo Git

### Commits Semánticos
Usar el formato:
```
tipo: descripción corta

- Detalle 1
- Detalle 2

🤖 Generated with [Claude Code](https://claude.ai/code)
Co-Authored-By: Claude <noreply@anthropic.com>
```

Tipos comunes:
- `feat:` Nueva funcionalidad
- `fix:` Corrección de bugs
- `style:` Cambios de estilo/diseño
- `docs:` Documentación
- `refactor:` Refactorización de código
- `test:` Añadir tests
- `chore:` Tareas de mantenimiento

### Workflow Básico
```bash
# Crear rama para nueva feature
git checkout -b feature/nombre-feature

# Hacer cambios y commits
git add .
git commit -m "feat: agregar nueva funcionalidad X"

# Push a GitHub
git push origin feature/nombre-feature

# Crear PR en GitHub para revisión
```

## 🎨 Guías de Estilo de Código

### Componentes React
```typescript
// ✅ BIEN - Componente funcional con TypeScript
export default function ComponentName() {
  return (
    <div className="container">
      {/* Contenido */}
    </div>
  )
}

// ❌ EVITAR - Class components
class ComponentName extends React.Component {
  // ...
}
```

### Estilos con Tailwind
```jsx
// ✅ BIEN - Clases organizadas
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">

// ❌ EVITAR - Estilos inline
<div style={{ display: 'flex', padding: '16px' }}>
```

### Manejo de Estado
```typescript
// ✅ BIEN - useState para estado local simple
const [isOpen, setIsOpen] = useState(false)

// ✅ BIEN - useReducer para estado complejo
const [state, dispatch] = useReducer(reducer, initialState)

// ❌ EVITAR - Estado global innecesario
// No usar Context para todo
```

## 🔧 Configuraciones Importantes

### tailwind.config.ts
```javascript
// Colores personalizados del proyecto
colors: {
  primary: '#00A6FB',
  secondary: '#00D9FF',
  accent: '#7209B7',
  mint: '#4ECDC4',
  // etc...
}
```

### next.config.js
```javascript
// Configuración de Next.js
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos', 'images.pexels.com'],
  },
}
```

## 🐛 Solución de Problemas Comunes

### 1. Error: "Module not found"
```bash
# Limpiar caché y reinstalar
rm -rf node_modules package-lock.json
npm install
```

### 2. Error de TypeScript
```bash
# Verificar tipos
npm run type-check

# Si hay errores de tipos faltantes
npm install --save-dev @types/nombre-del-paquete
```

### 3. Build falla con "out of memory"
```bash
# Aumentar memoria para Node
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

### 4. Imágenes no cargan
- Usar dominios permitidos en next.config.js
- Preferir imágenes locales en /public
- Para placeholders: picsum.photos o pexels.com

## 📦 Estructura de Componentes

### Crear Nuevo Componente
1. Crear archivo en `/components/NombreComponente.tsx`
2. Usar el template:

```typescript
"use client"

import { motion } from "framer-motion"

interface NombreComponenteProps {
  // Props aquí
}

export default function NombreComponente({ }: NombreComponenteProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Contenido */}
      </div>
    </section>
  )
}
```

### Animaciones con Framer Motion
```typescript
// Animación básica de entrada
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Contenido animado
</motion.div>

// Animación al hacer scroll
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  Aparece al hacer scroll
</motion.div>
```

## 🚀 Deployment

### EasyPanel (Automático)
1. Push a `main` dispara deploy automático
2. Verificar en: https://dentalflow-frontend.easypanel.host

### Docker Local (Testing)
```bash
# Build imagen
docker build -t dentalflow-landing .

# Ejecutar contenedor
docker run -p 3000:3000 dentalflow-landing
```

## 📋 Checklist Pre-Deploy

- [ ] `npm run build` exitoso
- [ ] Sin errores de TypeScript
- [ ] Imágenes optimizadas
- [ ] Textos sin promesas exageradas
- [ ] Responsive en móvil
- [ ] Links funcionando
- [ ] Formularios validados
- [ ] Sin console.logs

## 🔐 Seguridad

### NO Hacer:
- No commitear `.env` con secrets
- No hardcodear API keys
- No exponer datos sensibles
- No usar eval() o innerHTML

### SÍ Hacer:
- Validar todo input de usuario
- Sanitizar datos antes de mostrar
- Usar HTTPS siempre
- Mantener dependencias actualizadas

## 📚 Recursos Útiles

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Docs](https://react.dev/)

## 🆘 Soporte

- **Bugs:** Crear issue en GitHub
- **Preguntas:** Discussions en GitHub
- **Urgente:** Contactar al equipo líder

---

**Última actualización:** Septiembre 2024
**Versión:** 1.0.0