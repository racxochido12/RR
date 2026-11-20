import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import Img from '../components/Img.jsx'
import Icon from '../components/Icon.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import { BUSINESS, HOME_SERVICES } from '../data/site.js'

export default function Home() {
  return (
    <>
      <Seo path="/" />

      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">{BUSINESS.tagline}</p>
            <h1>RR Expertos en Soporte y Mantenimiento Profesional de TI México</h1>
            <p className="lead">
              Contáctanos para solucionar tus problemas tecnológicos: servidores, respaldos, virtualización, cableado
              estructurado, cámaras de seguridad y equipos de cómputo, en sitio o remoto.
            </p>
            <div className="hero-actions">
              <WhatsAppButton href={BUSINESS.whatsapp.general}>Envíanos un WhatsApp</WhatsAppButton>
              <a className="btn btn-ghost" href="#servicios">
                Ver servicios <Icon name="arrow" size={18} />
              </a>
            </div>
          </div>
          <div className="hero-logo">
            <img src="/images/logo.webp" alt="Logotipo de RR Expertos en Soporte y Mantenimiento Profesional de TI México" width="420" height="420" fetchPriority="high" />
          </div>
        </div>
      </section>

      <section id="servicios" className="section" aria-labelledby="servicios-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Servicios</p>
            <h2 id="servicios-title">Lo que hacemos por tu empresa</h2>
          </div>
          <div className="service-grid">
            {HOME_SERVICES.map((s) => (
              <article key={s.id} className="card service-card" aria-labelledby={`srv-${s.id}`}>
                <div className="service-media">
                  <Img name={s.image} alt={s.alt} animated={s.animated} width="400" height="300" />
                </div>
                <div className="card-body">
                  <h3 id={`srv-${s.id}`}>{s.title}</h3>
                  <ul className="check-list">
                    {s.items.map((it) => (
                      <li key={it}>
                        <Icon name="check" size={18} />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                  <WhatsAppButton href={BUSINESS.whatsapp.soporte} variant="outline" className="card-cta">
                    Solicitar <span className="sr-only">{s.title}</span> por WhatsApp
                  </WhatsAppButton>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band" aria-labelledby="cta-title">
        <div className="container cta-inner">
          <div>
            <h2 id="cta-title">¿Tienes un problema tecnológico?</h2>
            <p>Nuestro equipo te atiende en sitio o de forma remota.</p>
          </div>
          <div className="hero-actions">
            <WhatsAppButton href={BUSINESS.whatsapp.general}>WhatsApp</WhatsAppButton>
            <Link className="btn btn-light" to="/contacto">
              Ver contacto
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
