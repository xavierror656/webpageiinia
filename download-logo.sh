#!/bin/bash

# Script para descargar el logo de IINIA

echo "🔽 Descargando logo de IINIA..."

LOGO_URL="https://raw.githubusercontent.com/xavierror656/webiinia/aba3618d34d2e4dc70a83efa2b1b95160bb3bcd7/public/logo.webp"
OUTPUT_PATH="./public/logo.webp"

# Crear directorio public si no existe
mkdir -p ./public

# Intentar con curl primero
if command -v curl &> /dev/null; then
    echo "📥 Usando curl..."
    curl -L "$LOGO_URL" -o "$OUTPUT_PATH"

    if [ -f "$OUTPUT_PATH" ]; then
        echo "✅ Logo descargado exitosamente en: $OUTPUT_PATH"
        ls -lh "$OUTPUT_PATH"
        exit 0
    fi
fi

# Si curl falló, intentar con wget
if command -v wget &> /dev/null; then
    echo "📥 Usando wget..."
    wget "$LOGO_URL" -O "$OUTPUT_PATH"

    if [ -f "$OUTPUT_PATH" ]; then
        echo "✅ Logo descargado exitosamente en: $OUTPUT_PATH"
        ls -lh "$OUTPUT_PATH"
        exit 0
    fi
fi

# Si ambos fallaron
echo "❌ No se pudo descargar el logo automáticamente."
echo ""
echo "Por favor, descarga manualmente:"
echo "1. Ve a: https://github.com/xavierror656/webiinia/blob/aba3618d34d2e4dc70a83efa2b1b95160bb3bcd7/public/logo.webp"
echo "2. Descarga el archivo"
echo "3. Cópialo a: $OUTPUT_PATH"
echo ""
echo "O lee LOGO_INSTRUCTIONS.md para más detalles."

exit 1
