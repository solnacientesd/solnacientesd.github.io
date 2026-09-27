# Sol Naciente

Landing page responsive para Sol Naciente Soluciones Digitales, construida con React, Vite y Tailwind CSS.

## Abrir en Windows

No abras el `index.html` de la carpeta con doble clic: ese archivo es la entrada del código fuente y necesita Vite. Si ves una pantalla en blanco, estás abriendo `file:///...` en lugar de ejecutar el sitio.

1. Instala Node.js LTS desde [nodejs.org](https://nodejs.org/) si aún no está instalado.
2. Ejecuta `start-local.bat`.
3. Deja abierta la ventana de consola mientras navegas. El sitio se abrirá en `http://127.0.0.1:5173`.

## Desarrollo local

Requiere Node.js 22 o posterior. También puedes iniciarlo manualmente desde esta carpeta:

```bash
npm ci
npm run dev
```

Para crear una versión estática independiente en `dist/index.html`:

```bash
npm ci
npm run build
```

Abre `dist/index.html` para probar esa versión compilada. Para trabajar en el código, usa `npm run dev`.

Para generar una compilación de producción:

```bash
npm run build
```

## Publicar en GitHub Pages

El workflow `.github/workflows/deploy.yml` compila el sitio, actualiza el `index.html` de la raíz y `docs/index.html` en `main`, y solicita una nueva compilación de GitHub Pages al subir cambios. Para el dominio principal `https://solnacientesd.github.io/`, el repositorio debe llamarse `solnacientesd.github.io`. El workflow usa `GITHUB_TOKEN`; no requiere Cloudflare, PATs ni secretos externos.

GitHub Pages puede publicar `main` desde `/` o desde `/docs`; el workflow genera el archivo autónomo en ambas ubicaciones para que cualquiera de las dos opciones muestre el sitio completo. La plantilla de Vite se restaura automáticamente al ejecutar `npm run dev` o `npm run build`.

## Captación por Telegram

Al enviar el formulario se encola un `sendBeacon` dirigido al chat `727897797` y la pestaña actual redirige a `https://demo-showroom.github.io/docs/`. Hay un fallback `fetch` para navegadores que no puedan encolar el beacon. No se abre WhatsApp ni otra pestaña. Si Pages sirve el `index.html` fuente de la raíz por una configuración antigua, ese archivo detecta GitHub Pages y redirige automáticamente al archivo compilado `docs/index.html`.

**Importante:** para evitar la necesidad de un backend, el token compartido está integrado en `src/config/contact.ts` y queda visible en el JavaScript publicado. Cualquier persona que abra el sitio puede extraerlo y usar el bot. El token ya debe considerarse expuesto; reemplázalo en ese archivo si fue revocado. Telegram se llama mediante un formulario/beacon sin CORS: el navegador no puede leer su respuesta y redirige tras enviar la solicitud. La demo destino debe estar activa.