import Seo from '../components/Seo.jsx'
import PageHeader from '../components/PageHeader.jsx'
import ProductGrid from '../components/ProductGrid.jsx'
import { PRODUCTS } from '../data/site.js'

export default function Herramientas() {
  const tools = PRODUCTS.filter((p) => p.tool)
  return (
    <>
      <Seo path="/tienda/herramientas-de-reparacion-de-celulares" />
      <PageHeader
        title="Herramientas de reparación de celulares"
        crumbs={[{ to: '/tienda', label: 'Tienda' }]}
        intro="Desarmadores, tapetes, lámparas UV, detectores y accesorios para técnicos en reparación de celulares."
      />
      <section className="section" aria-label="Productos">
        <div className="container">
          <ProductGrid products={tools} />
        </div>
      </section>
    </>
  )
}
