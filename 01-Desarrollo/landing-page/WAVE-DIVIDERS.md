# 🌊 Wave Dividers - Estilo Shrine Pro

## ✨ Características Implementadas

### Divisores Disponibles
- **wave1**: Ondas múltiples con capas (3 capas de profundidad)
- **wave2**: Onda suave simple y elegante
- **wave3**: Ondas oceánicas con gradiente (estilo Shrine Pro)
- **curve**: Curva elegante minimalista
- **diagonal**: Diagonal moderna
- **zigzag**: Patrón zigzag dinámico
- **tooth**: Forma de diente (temática dental) 🦷
- **bubble**: Burbujas de limpieza con ondas

### Colores del Tema
- `primary`: #00A6FB (Azul dental vibrante)
- `secondary`: #00D9FF (Cyan brillante - higiene)
- `accent`: #7209B7 (Púrpura - tecnología)
- `mint`: #4ECDC4 (Menta - frescura dental)
- `pearl`: #F8F9FA (Blanco perla - dientes)
- `lavender`: #E0AAFF (Lavanda suave)
- `coral`: #FF6B6B (Coral - encías saludables)

### Props del Componente
```tsx
interface WaveDividerProps {
  type?: 'wave1' | 'wave2' | 'wave3' | 'curve' | 'diagonal' | 'zigzag' | 'tooth' | 'bubble'
  color?: string        // Nombre del color del tema o código hex
  className?: string    // Clases CSS adicionales
  flip?: boolean       // Voltear verticalmente
  opacity?: number     // Opacidad (0-1)
  animate?: boolean    // Activar animación
}
```

## 🎨 Uso en la Landing Page

```tsx
// Divisor principal estilo Shrine Pro
<WaveDivider 
  type="wave3" 
  color="primary" 
  className="-mt-24 relative z-10 h-32"
  opacity={0.9}
/>

// Divisor temático dental
<WaveDivider 
  type="tooth" 
  color="mint" 
  className="-mt-20 h-24"
  flip={true}
  opacity={0.6}
/>

// Divisor con animación de burbujas
<WaveDivider 
  type="bubble" 
  color="secondary" 
  className="my-8 h-20"
  opacity={0.3}
  animate={true}
/>
```

## 🚀 Mejoras Implementadas

1. **Gradientes Dinámicos**: El divisor wave3 usa gradientes SVG para crear profundidad
2. **Animaciones CSS**: Opciones de animación suave con `animate-wave` y `animate-flow`
3. **Temática Dental**: Divisores personalizados que reflejan la identidad del producto
4. **Responsivo**: Todos los divisores se adaptan al ancho del contenedor
5. **Optimizado**: SVGs ligeros que no afectan el rendimiento

## 📦 Ubicación de Archivos

- Componente: `/components/WaveDivider.tsx`
- Implementación: `/app/page.tsx`
- Estilos globales: `/app/globals.css`

## 🎯 Impacto Visual

Los divisores ondulados estilo Shrine Pro agregan:
- **Profesionalismo**: Diseño moderno y pulido
- **Fluidez**: Transiciones suaves entre secciones
- **Identidad**: Elementos temáticos dentales únicos
- **Dinamismo**: Animaciones sutiles que dan vida a la página

## 🔄 Para Actualizar

1. Modificar colores: Editar el `colorMap` en `WaveDivider.tsx`
2. Agregar nuevos estilos: Añadir nuevos paths SVG en el objeto `dividers`
3. Cambiar animaciones: Actualizar keyframes en `globals.css`
4. Ajustar posicionamiento: Modificar clases en `page.tsx`

---
*Implementado: 5 de Septiembre 2024*
*Estilo inspirado en Shrine Pro y adaptado para DentalFlow AI*
