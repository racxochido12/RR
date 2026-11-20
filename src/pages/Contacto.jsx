import Seo from '../components/Seo.jsx'
import PageHeader from '../components/PageHeader.jsx'
import Icon from '../components/Icon.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import { BUSINESS } from '../data/site.js'

export default function Contacto() {
  const { address, geo } = BUSINESS
  const mapSrc = `https://www.google.com/maps?q=${geo.lat},${geo.lng}&z=15&output=embed`

  return (
    <>
      <Seo path="/contacto" />
      <PageHeader title="Contacto" intro="Escríbenos o llámanos. Con gusto resolvemos tus dudas." />

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <article className="card contact-card">
              <h2 className="h3">
                <Icon name="pin" size={22} /> Ubicación
              </h2>
              <address>
                <strong>{address.label}</strong>
                <br />
                {address.street}, {address.colony}
                <br />
                C.P. {address.postalCode}, {address.city}, {address.country}.
              </address>
              <a className="link-arrow" href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer">
                Abrir en Google Maps <Icon name="external" size={16} />
                <span className="sr-only"> (se abre en una nueva pestaña)</span>
              </a>
            </article>

            <h2 className="contact-subtitle">Teléfonos</h2>
            {BUSINESS.contacts.map((c) => (
              <article key={c.tel} className="card contact-card">
                <h3>{c.area}</h3>
                <p>
                  <Icon name="phone" size={18} /> {c.kind}: <a href={`tel:${c.tel}`}>{c.phone}</a>
                </p>
                {c.email && (
                  <p>
                    <Icon name="mail" size={18} /> Correo electrónico: <a href={`mailto:${c.email}`}>{c.email}</a>
                  </p>
                )}
                {c.whatsapp && (
                  <WhatsAppButton href={c.whatsapp} variant="outline">
                    WhatsApp <span className="sr-only">{c.area}</span>
                  </WhatsAppButton>
                )}
              </article>
            ))}
          </div>

          <div className="map-wrap">
            <iframe
              title={`Mapa de ubicación: ${address.street}, ${address.colony}, ${address.city}`}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  )
}
