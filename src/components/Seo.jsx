import { useEffect } from 'react'
import { SEO, SITE_URL } from '../data/seo.js'

function setMeta(selector, attr, value) {
  const el = document.head.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

/** Actualiza <title>, descripción, canonical y Open Graph al cambiar de página. */
export default function Seo({ path }) {
  const { title, description } = SEO[path] ?? SEO[404]
  const url = SITE_URL + (path === 404 ? '/' : path)

  useEffect(() => {
    document.title = title
    setMeta('meta[name="description"]', 'content', description)
    setMeta('link[rel="canonical"]', 'href', url)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:url"]', 'content', url)
    setMeta('meta[name="robots"]', 'content', path === 404 ? 'noindex' : 'index, follow')
  }, [title, description, url, path])

  return null
}
