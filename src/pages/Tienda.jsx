import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageHeader from '../components/PageHeader.jsx'
import Img from '../components/Img.jsx'
import Icon from '../components/Icon.jsx'
import ProductGrid from '../components/ProductGrid.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import { BUSINESS, PRODUCTS, STORE_CATEGORIES } from '../data/site.js'

export default function Tienda() {
  return (
    <>
      <Seo path="/tienda" />
      <PageHeader
        title="Tienda"
        intro="Refacciones, equipos y herramientas. Elige tu producto y haz tu pedido directamente por WhatsApp."
      />

      <section className="section" aria-labelledby="cat-title">
        <div className="container">
          <div className="section-head">
            <h2 id="cat-title">Categorías</h2>
          </div>
          <ul className="category-grid">
            {STORE_CATEGORIES.map((c) => (
              <li key={c.title} className="card category-card">
                <Img name={c.image} alt={c.alt} width="300" height="300" />
                <h3>{c.title}</h3>
              </li>
            ))}
          </ul>
          <div className="notice">
            <p>¿Buscas cámaras, controles de acceso o equipos que no aparecen en la lista? Pregúntanos por disponibilidad.</p>
            <WhatsAppButton href={BUSINESS.whatsapp.general} variant="outline">
              Consultar disponibilidad
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="prod-title">
        <div className="container">
          <div className="section-head section-head-row">
            <h2 id="prod-title">Productos</h2>
            <Link className="btn btn-ghost" to="/tienda/herramientas-de-reparacion-de-celulares">
              Herramientas de reparación de celulares <Icon name="arrow" size={18} />
            </Link>
          </div>
          <ProductGrid products={PRODUCTS} />
        </div>
      </section>
    </>
  )
}
