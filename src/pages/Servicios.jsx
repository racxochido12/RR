import Seo from '../components/Seo.jsx'
import PageHeader from '../components/PageHeader.jsx'
import Img from '../components/Img.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import { BUSINESS, SUPPORT_CATEGORIES } from '../data/site.js'

export default function Servicios() {
  return (
    <>
      <Seo path="/servicio-y-soportes" />
      <PageHeader
        title="Servicios y soportes"
        intro="Damos soporte y mantenimiento a toda tu infraestructura tecnológica, en sitio o de forma remota."
      />
      <section className="section">
        <div className="container">
          <ul className="support-grid">
            {SUPPORT_CATEGORIES.map((c) => (
              <li key={c.title} className="card support-card">
                <Img name={c.image} alt={c.alt} width="400" height="400" />
                <h2 className="h3">{c.title}</h2>
              </li>
            ))}
          </ul>
          <div className="notice">
            <p>Cuéntanos qué equipo necesitas atender y te enviamos una propuesta.</p>
            <WhatsAppButton href={BUSINESS.whatsapp.soporte}>Solicitar soporte</WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  )
}
