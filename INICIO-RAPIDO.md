# 🚀 INICIO RÁPIDO - DentalFlow AI

## Ronald (Desarrollo + CEO) - Primeros Pasos:
1. Instalar Docker y Node.js 20
2. Clonar repo y instalar dependencias
3. Copiar .env.example → .env (llenar APIs)
4. docker-compose up (levanta todo local)
5. Usar CLAUDE-CODE-INSTRUCTIONS.md para generar código
6. Revisar script en /02-Comercial/material-ventas/
7. Contactar 10 clínicas de clinicas-target.csv

## Juan José (Automatizaciones n8n) - Esta Semana:
1. Configurar flujos n8n para recordatorios WhatsApp
2. Integrar webhooks con la base de datos
3. Crear flujo de predicción de no-shows
4. Testear automatizaciones con datos de prueba

## Robinson (Soporte) - Preparar:
1. Leer checklist en /03-Operaciones/onboarding/
2. Crear WhatsApp Business para soporte
3. Preparar FAQ básico (10 preguntas)
4. Aprender básico del dashboard

## Comandos Útiles:

### Desarrollo Local:
cd ~/Desktop/DentalFlow-AI/01-Desarrollo
docker-compose up -d
cd landing-page && npm install && npm run dev

### Ver logs:
docker logs -f dentalflow-ai-n8n-1
docker logs -f dentalflow-ai-postgres-1

### Accesos locales:
- Landing: http://localhost:3000
- n8n: http://localhost:5678
- PostgreSQL: localhost:5432

## APIs Necesarias (conseguir ASAP):
1. OpenAI API Key ($20 crédito inicial)
2. WhatsApp Business API (Meta)
3. Dominio .do (GoDaddy RD)
4. VPS en EasyPanel ($40/mes)

## Meta Semana 1:
- [ ] Landing page live
- [ ] 1 flujo n8n funcionando
- [ ] 3 demos agendadas
- [ ] WhatsApp templates aprobados

¿Dudas? WhatsApp grupo: DentalFlow Team
