# FacturaScan — Guía de Configuración para Producción
**Sabores que Deleitan · Gerencia de Tecnología · Miguel Vásquez**

---

## PASO 1 — Google Cloud Console (20 min, una sola vez)

### 1.1 Crear el proyecto
1. Ve a [console.cloud.google.com](https://console.cloud.google.com)
2. Clic en el selector de proyectos (arriba) → **Nuevo Proyecto**
3. Nombre: `facturascan-saboresdeleitan`
4. Organización: Sin organización
5. **Crear**

### 1.2 Activar las APIs necesarias
Desde el menú → **APIs y Servicios** → **Biblioteca**:

Busca y activa cada una:
- ✅ **Google Drive API**
- ✅ **Google Sheets API**
- ✅ **Gmail API** (para Entrega 3)
- ✅ **Google Calendar API** (para Entrega 3)

### 1.3 Crear credenciales OAuth 2.0
1. Menú → **APIs y Servicios** → **Credenciales**
2. **Crear credenciales** → **ID de cliente OAuth 2.0**
3. Tipo: **Aplicación web**
4. Nombre: `FacturaScan PWA`
5. En **Orígenes de JavaScript autorizados** agrega:
   ```
   https://TU_USUARIO.github.io
   http://localhost:3000
   ```
6. **Crear** → copia el **ID de cliente** (termina en `.apps.googleusercontent.com`)

### 1.4 Configurar pantalla de consentimiento OAuth
1. **APIs y Servicios** → **Pantalla de consentimiento OAuth**
2. Tipo de usuario: **Externo** → **Crear**
3. Nombre de la app: `FacturaScan`
4. Email de soporte: `mikevc355@gmail.com`
5. En **Usuarios de prueba** agrega los correos del equipo
6. **Guardar y continuar** (sin agregar scopes manualmente, la app los pide)

---

## PASO 2 — Google Drive (5 min)

### 2.1 Crear la carpeta raíz
1. Ve a [drive.google.com](https://drive.google.com)
2. **+ Nuevo** → **Carpeta** → nombre: `FACTURAS_EMPRESA`
3. Abre la carpeta → copia el ID de la URL:
   ```
   drive.google.com/drive/folders/ESTE_ES_EL_ID
                                  ↑ copia esto
   ```

### 2.2 Compartir con el equipo
1. Clic derecho en la carpeta → **Compartir**
2. Agrega cada correo del equipo con permisos de **Editor**:
   - Tu esposa
   - Hijo 1
   - Hijo 2

---

## PASO 3 — Editar config.js (2 min)

Abre `config.js` y reemplaza los valores:

```javascript
// Reemplaza esto:
const GOOGLE_CLIENT_ID = 'TU_GOOGLE_CLIENT_ID.apps.googleusercontent.com';

// Por el Client ID que copiaste en el Paso 1.3:
const GOOGLE_CLIENT_ID = '123456789-abc.apps.googleusercontent.com';

// Reemplaza esto:
const DRIVE_ROOT_FOLDER_ID = 'AUTO';

// Por el ID de la carpeta (Paso 2.1), O deja 'AUTO' para creación automática:
const DRIVE_ROOT_FOLDER_ID = '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs';

// Agrega el correo del contador:
const CONTADOR_EMAIL = 'contador@ejemplo.com';

// Agrega los correos del equipo:
const AUTHORIZED_EMAILS = [
  'mikevc355@gmail.com',
  'esposa@gmail.com',
  'hijo1@gmail.com',
  'hijo2@gmail.com',
];
```

---

## PASO 4 — GitHub Pages (10 min)

### 4.1 Crear repositorio
1. Ve a [github.com](https://github.com) → **New repository**
2. Nombre: `facturascan`
3. Público ✅ (requerido para GitHub Pages gratis)
4. **Create repository**

### 4.2 Subir los archivos
Sube estos 4 archivos al repositorio:
```
index.html      ← la PWA principal
config.js       ← configuración (ya editado con tu Client ID)
manifest.json   ← instalación como app en Android
icon-192.png    ← ícono (puedes usar cualquier imagen 192x192)
icon-512.png    ← ícono grande (512x512)
```

> **Consejo rápido:** En la página del repo → **Add file** → **Upload files**

### 4.3 Activar GitHub Pages
1. En el repo → **Settings** → **Pages**
2. Branch: **main** → carpeta: **/ (root)**
3. **Save**
4. En 2-3 minutos tu URL estará lista:
   ```
   https://TU_USUARIO.github.io/facturascan
   ```

### 4.4 Actualizar orígenes autorizados en Google Cloud
Regresa al Paso 1.3 y agrega tu URL real:
```
https://TU_USUARIO.github.io
```

---

## PASO 5 — Instalar en los celulares Android (2 min por celular)

1. Abre Chrome en el celular Android
2. Ve a `https://TU_USUARIO.github.io/facturascan`
3. Chrome mostrará un banner: **"Añadir a pantalla de inicio"**
4. Si no aparece: menú (⋮) → **Añadir a pantalla de inicio**
5. La app aparece como ícono en el escritorio igual que una app nativa

---

## PASO 6 — Primera prueba

1. Abre la app → **Continuar con Google**
2. Selecciona tu cuenta `mikevc355@gmail.com`
3. Acepta los permisos (Drive y Sheets)
4. La app verifica la conexión y crea automáticamente:
   - 📁 `FACTURAS_EMPRESA/2026/05_MAYO/` en tu Drive
   - 📊 `MAESTRO_FACTURAS_2026` Sheet con cabeceras
5. Escanea una factura de prueba
6. Verifica en Drive que el archivo apareció

---

## Estructura final en Drive

```
📁 FACTURAS_EMPRESA/                ← compartida con el equipo
├── 📁 2026/
│   ├── 📁 05_MAYO/
│   │   ├── 🖼️ 2026-05-17_METRO_Costo-de-ventas_$45.50_001.jpg
│   │   └── 🖼️ 2026-05-18_NOVEY_Mantenimiento_$120.00_002.jpg
│   ├── 📁 06_JUNIO/
│   └── ...
└── 📊 MAESTRO_FACTURAS_2026.xlsx   ← registro maestro auto-generado
```

---

## Actualizaciones futuras

Para actualizar la app:
1. Edita los archivos localmente
2. Sube a GitHub → automáticamente se despliega en 2 min
3. Los usuarios solo necesitan recargar la página

---

## Soporte

**Gerencia de Tecnología · Sabores que Deleitan**
Miguel Vásquez · mikevc355@gmail.com
