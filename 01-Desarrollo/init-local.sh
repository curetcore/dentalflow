#!/bin/bash

# Script de inicialización local para DentalFlow AI

echo "🦷 Iniciando DentalFlow AI Development Environment..."

# Verificar si existe .env
if [ ! -f .env ]; then
    echo "📝 Creando archivo .env desde .env.example..."
    cp .env.example .env
    echo "⚠️  Por favor, actualiza .env con tus API keys"
fi

# Crear directorios necesarios
mkdir -p n8n-data postgres-data

# Instalar dependencias de la landing page
echo "📦 Instalando dependencias de Next.js..."
cd landing-page
npm install

# Crear estructura de carpetas para la app
mkdir -p app components public/images lib utils

# Volver al directorio principal
cd ..

echo "🐳 Levantando servicios con Docker Compose..."
docker-compose up -d

echo "⏳ Esperando a que los servicios estén listos..."
sleep 10

# Ejecutar migraciones de base de datos
echo "🗄️  Creando estructura de base de datos..."
docker exec -i dentalflow-ai-postgres-1 psql -U admin -d dentalflow < database/schema.sql

echo "✅ Ambiente de desarrollo listo!"
echo ""
echo "🌐 Servicios disponibles:"
echo "   - Landing Page: http://localhost:3000"
echo "   - n8n: http://localhost:5678"
echo "   - PostgreSQL: localhost:5432"
echo ""
echo "🚀 Para iniciar el desarrollo:"
echo "   cd landing-page && npm run dev"
echo ""
echo "💡 Recuerda configurar tus API keys en .env"