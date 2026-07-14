#!/bin/bash

# Cambiar al directorio donde está el script
cd "$(dirname "$0")"

# Función para cerrar todo al cerrar la ventana o presionar Ctrl+C
cleanup() {
    echo "🛑 Deteniendo todos los servicios..."
    kill 0
    exit
}
trap cleanup SIGINT SIGTERM

echo "========================================="
echo "🚀 INICIANDO SISTEMA CALIDAD 🚀"
echo "========================================="

echo "1️⃣ Iniciando Frontend (Next.js)..."
(cd frontend && npm run dev) &

echo "2️⃣ Iniciando Backend (Django)..."
(cd backend && source venv/bin/activate && python manage.py runserver) &

echo "3️⃣ Iniciando Training Server (Node.js)..."
(cd training-server && node index.js) &

echo "========================================="
echo "✅ Todos los servicios están en marcha:"
echo "🌍 Frontend (Web):  http://localhost:3000"
echo "⚙️  Backend (API):  http://localhost:8000"
echo "🧠 Training Node:   http://localhost:3001"
echo "========================================="
echo "❌ Presiona Ctrl+C en esta ventana para apagar todo."

# Mantener el script corriendo
wait
