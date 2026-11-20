// Post-build: crea dist/<ruta>/index.html con título/descripción/canonical/OG propios,
// además de dist/404.html y dist/sitemap.xml. Así cada URL tiene metadatos correctos
// aunque el rastreador no ejecute JavaScript, y funciona en cualquier hosting estático.
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { SEO, SITE_URL } from '../src/data/seo.js'

const dist = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist')
const template = await readFile(join(dist, 'index.html'), 'utf8')

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function render({ title, description }, url, noindex = false) {
  return template
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${esc(description)}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${esc(title)}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${esc(description)}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)
    .replace(/(<meta name="robots" content=")[^"]*/, `$1${noindex ? 'noindex' : 'index, follow'}`)
}

const routes = Object.keys(SEO).filter((k) => k.startsWith('/'))
const today = new Date().toISOString().slice(0, 10)

for (const route of routes) {
  const url = SITE_URL + (route === '/' ? '/' : route)
  const file = route === '/' ? join(dist, 'index.html') : join(dist, route, 'index.html')
  await mkdir(dirname(file), { recursive: true })
  await writeFile(file, render(SEO[route], url))
}

// Alias de la URL antigua de Google Sites (la app redirige a "/").
await mkdir(join(dist, 'página-principal'), { recursive: true })
await writeFile(join(dist, 'página-principal', 'index.html'), render(SEO['/'], SITE_URL + '/'))

await writeFile(join(dist, '404.html'), render(SEO[404], SITE_URL + '/', true))

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) =>
      `  <url><loc>${SITE_URL}${r === '/' ? '/' : r}</loc><lastmod>${today}</lastmod><priority>${r === '/' ? '1.0' : '0.8'}</priority></url>`,
  )
  .join('\n')}
</urlset>
`
await writeFile(join(dist, 'sitemap.xml'), sitemap)

console.log(`Prerender SEO: ${routes.length} rutas + 404.html + sitemap.xml`)
