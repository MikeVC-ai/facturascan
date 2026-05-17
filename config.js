// ═══════════════════════════════════════════════════════════════
// FACTURASCAN — CONFIGURACIÓN
// Sabores que Deleitan · Gerencia de Tecnología
// ═══════════════════════════════════════════════════════════════
//
// INSTRUCCIONES:
// 1. Reemplaza TU_GOOGLE_CLIENT_ID con el Client ID de tu proyecto
//    en Google Cloud Console → APIs → Credenciales → OAuth 2.0
//
// 2. DRIVE_ROOT_FOLDER_ID: Pega el ID de la carpeta FACTURAS_EMPRESA
//    en Google Drive (está en la URL cuando abres la carpeta).
//    Usa 'AUTO' para que la app la cree automáticamente.
//
// 3. MASTER_SHEET_ID: Pega el ID del Google Sheet maestro.
//    Usa 'AUTO' para que la app lo cree automáticamente.
//
// ¿Cómo obtener el Client ID?
//   → console.cloud.google.com
//   → Selecciona tu proyecto
//   → APIs y Servicios → Credenciales
//   → OAuth 2.0 → copia el "ID de cliente"
//
// ¿Cómo obtener el ID de una carpeta de Drive?
//   → Abre la carpeta en drive.google.com
//   → La URL es: drive.google.com/drive/folders/ESTE_ES_EL_ID
//
// ═══════════════════════════════════════════════════════════════

// ── GEMINI API (OCR de facturas) ──────────────────────────────
// Obtener en: aistudio.google.com/app/apikey
// Con tu cuenta Google One Pro ya tienes acceso gratuito.
// El free tier de Gemini 1.5 Flash: 1,500 requests/día — más que suficiente.
const GEMINI_API_KEY = 'AIzaSyAE31AGE0lyTp4gV-J7PoW1TfymJUwsqmY';

// ── GOOGLE OAUTH ──────────────────────────────────────────────
const GOOGLE_CLIENT_ID = '954266432676-khr7b8u0p9sj3kjdvg1cb3aj3bg5mkia.apps.googleusercontent.com';

// ── PERMISOS REQUERIDOS ───────────────────────────────────────
const GOOGLE_SCOPES = [
  'https://www.googleapis.com/auth/drive.file',       // Archivos creados por la app
  'https://www.googleapis.com/auth/spreadsheets',     // Google Sheets
  'https://www.googleapis.com/auth/gmail.send',       // Envío de emails (Entrega 3)
  'https://www.googleapis.com/auth/calendar.events',  // Recordatorios (Entrega 3)
  'profile',
  'email'
].join(' ');

// ── GOOGLE DRIVE ──────────────────────────────────────────────
// ID de la carpeta raíz FACTURAS_EMPRESA en Drive.
// 'AUTO' = la app la crea automáticamente en el primer login.
const DRIVE_ROOT_FOLDER_ID = 'AUTO';

// ── GOOGLE SHEETS ─────────────────────────────────────────────
// ID del Google Sheet maestro MAESTRO_FACTURAS_YYYY.
// 'AUTO' = la app lo crea automáticamente con las cabeceras correctas.
const MASTER_SHEET_ID = 'AUTO';

// ── EMAIL DEL CONTADOR ────────────────────────────────────────
// Para la Entrega 3 (paquete automático por Gmail).
const CONTADOR_EMAIL = 'correo_del_contador@ejemplo.com';

// ── NOMBRE DEL NEGOCIO ────────────────────────────────────────
const BUSINESS_NAME = 'Sabores que Deleitan';

// ── USUARIOS AUTORIZADOS ──────────────────────────────────────
// Solo estas cuentas de Google pueden iniciar sesión.
// Deja vacío [] para permitir cualquier cuenta Google.
const AUTHORIZED_EMAILS = [
  'mikevc355@gmail.com',
  // Agrega aquí los correos de los demás usuarios del equipo:
  // 'esposa@gmail.com',
  // 'hijo1@gmail.com',
  // 'hijo2@gmail.com',
];
