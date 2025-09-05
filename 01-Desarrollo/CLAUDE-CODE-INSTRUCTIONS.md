# 🤖 Instrucciones para Claude Code - DentalFlow AI

## Landing Page
Copia este prompt en Claude Code:

```
Crea una landing page para DentalFlow AI:

HERO SECTION:
- Título: "María AI - Tu Asistente Dental Inteligente"
- Subtítulo: "Reduce ausencias 73% y llena tu agenda automáticamente"
- CTA: "Prueba 14 días GRATIS"
- Chat widget simulado de María saludando

FEATURES (con animaciones):
- "Confirma citas 24/7" con ícono de robot
- "Predice ausencias con 93% precisión" con gráfico
- "Aprende de cada paciente" con cerebro AI

DEMO INTERACTIVO:
- Simulación de chat María-Paciente
- Dashboard mostrando predicciones
- Métricas en tiempo real animadas

CASOS DE ÉXITO:
- 3 testimonios de clínicas RD
- Métricas específicas (+40% ingresos)
- Fotos de doctores locales

PRICING:
- Starter: RD$12,000/mes
- Pro: RD$25,000/mes  
- Enterprise: RD$45,000/mes
- Badge "14 días gratis"

TECH STACK:
- Next.js 14 App Router
- Tailwind CSS
- Framer Motion para animaciones
- TypeScript
- Responsive design
- SEO optimizado para RD

COLORES:
- Principal: Azul medical (#0EA5E9)
- Secundario: Verde éxito (#10B981)
- Acento: Dorado AI (#FCD34D)
- Fondo: Blanco/Gris claro
```

## Dashboard Admin

```
Crea un dashboard para DentalFlow AI:

SIDEBAR:
- Logo María AI
- Inicio / Clínicas / Pacientes / Citas / Analytics / Configuración

PÁGINA PRINCIPAL:
- KPIs: Clínicas activas, MRR, Citas salvadas hoy
- Gráfico: Tendencia de no-shows
- Actividad reciente de María AI
- Alertas predictivas

PÁGINA CLÍNICAS:
- Tabla con: Nombre, Plan, MRR, No-show rate, Estado
- Botón: Nueva clínica
- Filtros por plan y estado

PÁGINA ANALYTICS:
- Predicciones IA en tiempo real
- Mapa de calor de ausencias
- ROI por clínica
- Conversaciones de María

TECH:
- Next.js 14 con App Router
- Prisma ORM
- PostgreSQL
- Tailwind + shadcn/ui
- Recharts para gráficos
- NextAuth para auth
```

## Flujo n8n Básico

```
Crea un flujo n8n para recordatorios:

1. TRIGGER: Cron cada hora
2. QUERY: PostgreSQL - Citas próximas 24h sin confirmar
3. LOOP: Por cada cita
4. OPENAI: Generar mensaje personalizado con María AI
5. WHATSAPP: Enviar mensaje
6. WEBHOOK: Esperar respuesta
7. UPDATE: Actualizar estado en DB
8. ANALYTICS: Registrar interacción
```

## API Endpoints

```
Crea API routes en Next.js:

POST /api/clinics - Nueva clínica
GET /api/clinics - Listar clínicas
PUT /api/clinics/[id] - Actualizar

POST /api/appointments - Nueva cita
GET /api/appointments/pending - Citas sin confirmar
PUT /api/appointments/[id]/confirm - Confirmar

POST /api/maria/chat - María responde
GET /api/maria/predictions - Predicciones no-show
POST /api/maria/train - Entrenar con feedback

POST /api/webhooks/whatsapp - Recibir mensajes
POST /api/webhooks/payments - Procesar pagos
```

## Configuración EasyPanel

```bash
# Deploy en EasyPanel:

1. Crear nuevo proyecto
2. Añadir servicios:
   - App: Next.js (Dockerfile)
   - DB: PostgreSQL 15
   - Cache: Redis
   - n8n: Official image
   
3. Variables de entorno desde .env
4. Dominios:
   - app.dentalflow.do → Next.js
   - flows.dentalflow.do → n8n
   
5. SSL automático con Let's Encrypt
6. Backups diarios a S3
```
