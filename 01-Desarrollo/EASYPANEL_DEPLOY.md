# 🚀 Deploy en EasyPanel - DentalFlow AI

## Pre-requisitos
- Cuenta en EasyPanel
- Dominio dentalflow.do configurado
- API Keys (OpenAI, WhatsApp Business)

## Paso 1: Crear Proyecto en EasyPanel
1. Login en EasyPanel
2. Click "New Project"
3. Nombre: "dentalflow-ai"

## Paso 2: Configurar desde GitHub
1. Fork este repositorio
2. En EasyPanel: "Deploy from GitHub"
3. Seleccionar tu fork
4. Path: `/01-Desarrollo`

## Paso 3: Variables de Entorno
En EasyPanel > Settings > Environment:

```env
# Base de datos (generada automáticamente por EasyPanel)
DATABASE_URL=postgresql://user:pass@postgres:5432/dentalflow

# n8n
N8N_BASIC_AUTH_USER=admin
N8N_BASIC_AUTH_PASSWORD=tu-password-seguro

# OpenAI
OPENAI_API_KEY=sk-tu-api-key

# WhatsApp
WHATSAPP_API_TOKEN=tu-token
WHATSAPP_PHONE_NUMBER_ID=tu-phone-id
WHATSAPP_VERIFY_TOKEN=dentalflow_verify

# Next.js
NEXTAUTH_SECRET=genera-con-openssl-rand-base64-32
```

## Paso 4: Configurar Servicios
1. **Landing Page (app)**
   - Build: Dockerfile
   - Port: 3000
   - Domain: app.dentalflow.do

2. **PostgreSQL**
   - Version: 15
   - Auto-backup: Enabled

3. **Redis**
   - Version: 7-alpine

4. **n8n**
   - Image: n8nio/n8n:latest
   - Port: 5678
   - Domain: flows.dentalflow.do

## Paso 5: Deploy
1. Click "Deploy"
2. Esperar ~5 minutos
3. Verificar en https://app.dentalflow.do

## Paso 6: Post-Deploy
1. Ejecutar migraciones:
   ```bash
   easypanel exec dentalflow-ai-postgres psql -U postgres -d dentalflow < database/schema.sql
   ```

2. Configurar webhooks de WhatsApp:
   - URL: https://hooks.dentalflow.do/webhook/whatsapp
   - Verify Token: dentalflow_verify

## Monitoreo
- Logs: EasyPanel > Logs
- Métricas: EasyPanel > Metrics
- Backups: Automáticos diarios

## Troubleshooting
- Si la app no carga: Verificar logs del servicio 'app'
- Si n8n no conecta: Revisar credenciales de PostgreSQL
- Si WhatsApp falla: Verificar tokens en Meta Business