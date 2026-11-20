# RR Expertos – Sitio web

Reconstrucción en React + Vite del sitio https://www.rrexpertosensoporte.com/ (antes en Google Sites).

## Comandos

```bash
npm install        # instalar dependencias
npm run dev        # servidor de desarrollo (http://localhost:5173)
npm run build      # compila a dist/ y genera HTML con SEO por página + sitemap.xml
npm run preview    # ver la versión compilada (http://localhost:4173)
npm run lint       # revisar el código
```

## Dónde editar

| Qué | Archivo |
| --- | --- |
| Textos, servicios, clientes, productos, precios, teléfonos | `src/data/site.js` |
| Título y meta descripción de cada página | `src/data/seo.js` |
| Colores y estilos | `src/index.css` (variables en `:root`) |
| Imágenes | `public/images/*.webp` |
| Datos del negocio para Google (JSON-LD) | `index.html` |

Para agregar un producto: copia una línea en `PRODUCTS` de `src/data/site.js`, pon su imagen en
`public/images/` y marca `tool: true` si debe aparecer en "Herramientas de reparación de celulares".

## Publicar

Sube el contenido de `dist/` a cualquier hosting estático (Netlify, Vercel, Cloudflare Pages,
GitHub Pages, cPanel…). Cada ruta tiene su propio `index.html`, así que no hace falta configurar redirecciones.
