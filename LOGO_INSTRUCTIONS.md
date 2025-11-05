# 📥 Instrucciones para Descargar el Logo

## ✅ Código Ya Actualizado

El código del Navbar y Footer ya está listo para usar el logo. Solo necesitas descargar la imagen.

## 🔽 Cómo Descargar el Logo

### Opción 1: Descarga Directa desde GitHub

1. **Ve al enlace**:
   ```
   https://github.com/xavierror656/webiinia/blob/aba3618d34d2e4dc70a83efa2b1b95160bb3bcd7/public/logo.webp
   ```

2. **Haz clic en "Download"** o en el botón de descarga

3. **Guarda el archivo** como `logo.webp`

4. **Copia el archivo** a la carpeta del proyecto:
   ```bash
   # Desde tu carpeta de descargas:
   cp ~/Downloads/logo.webp /home/qwerty/Documentos/iniia/webpageiinia/public/logo.webp
   ```

### Opción 2: Descarga con wget (si tienes conexión)

```bash
cd /home/qwerty/Documentos/iniia/webpageiinia/public/
wget https://raw.githubusercontent.com/xavierror656/webiinia/aba3618d34d2e4dc70a83efa2b1b95160bb3bcd7/public/logo.webp
```

### Opción 3: Descarga con curl

```bash
cd /home/qwerty/Documentos/iniia/webpageiinia/public/
curl -L "https://raw.githubusercontent.com/xavierror656/webiinia/aba3618d34d2e4dc70a83efa2b1b95160bb3bcd7/public/logo.webp" -o logo.webp
```

## 📍 Ubicación Final del Logo

El logo debe estar en:
```
webpageiinia/
└── public/
    └── logo.webp  ← Aquí
```

## ✨ Características del Logo

Según tu descripción:
- ✅ Formato: `.webp`
- ✅ Color: Blanco (RGBA)
- ✅ Fondo: Transparente
- ✅ Optimizado para web

## 🎨 Dónde se Usa el Logo

El logo ya está implementado en:

### 1. **Navbar** (`components/nav/navbar.tsx`)
```tsx
<Image
  src="/logo.webp"
  alt="IINIA Logo"
  fill
  className="object-contain"
  priority
/>
```

### 2. **Footer** (`components/nav/footer.tsx`)
```tsx
<Image
  src="/logo.webp"
  alt="IINIA Logo"
  fill
  className="object-contain"
/>
```

## 📏 Tamaño del Logo

- **Navbar**: 40px x 40px (h-10 w-10)
- **Footer**: 40px x 40px (h-10 w-10)
- Responsive y adaptable

## 🔍 Verificación

Después de descargar el logo:

1. **Verifica que el archivo existe**:
   ```bash
   ls -lh /home/qwerty/Documentos/iniia/webpageiinia/public/logo.webp
   ```

2. **Debería mostrar algo como**:
   ```
   -rw-r--r-- 1 user user 5.2K Nov 5 10:00 logo.webp
   ```

3. **Reinicia el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

4. **Abre el navegador**: http://localhost:3000/es

5. **Verás el logo** en el navbar y footer

## 🎯 Resultado Esperado

El logo:
- ✅ Aparece en el navbar (arriba a la izquierda)
- ✅ Aparece en el footer (abajo a la izquierda)
- ✅ Se adapta al tema (dark/light)
- ✅ Tiene fondo transparente
- ✅ Es color blanco (se verá en ambos temas)
- ✅ Carga con prioridad en el navbar
- ✅ Es responsive

## 🐛 Solución de Problemas

### Si el logo no aparece:

1. **Verifica la ruta**:
   ```bash
   ls public/logo.webp
   ```

2. **Verifica el nombre del archivo**:
   - Debe ser exactamente `logo.webp`
   - En minúsculas
   - Sin espacios

3. **Reinicia el servidor**:
   ```bash
   # Detén el servidor (Ctrl+C)
   npm run dev
   ```

4. **Limpia el cache de Next.js**:
   ```bash
   rm -rf .next
   npm run dev
   ```

### Si el logo se ve mal:

- El logo blanco con fondo transparente funcionará en ambos temas
- Next.js Image component optimiza automáticamente la imagen
- `object-contain` asegura que la imagen mantenga sus proporciones

## 📝 Notas Adicionales

- El logo usa `next/image` para optimización automática
- `priority` en navbar asegura carga inmediata
- `fill` hace que la imagen llene el contenedor
- `object-contain` mantiene proporciones sin recortar

---

**¡Listo!** Una vez que copies el `logo.webp` a la carpeta `public/`, el logo aparecerá automáticamente en toda la aplicación. 🚀
