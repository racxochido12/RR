import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageHeader from '../components/PageHeader.jsx'
import Icon from '../components/Icon.jsx'
import Img from '../components/Img.jsx'
import { ABOUT, CLIENTS } from '../data/site.js'

export default function QuienesSomos() {
  return (
    <>
      <Seo path="/quienes-somos" />
      <PageHeader title="Quiénes somos" intro={ABOUT.heading} />

      <section className="section" aria-labelledby="about-title">
        <div className="container about-grid">
          <div>
            <h2 id="about-title">Quiénes somos</h2>
            <p className="lead">{ABOUT.intro}</p>
          </div>
          <div className="mv-grid">
            <article className="card mv-card">
              <Icon name="target" size={28} />
              <h3>Nuestra misión</h3>
              <p>{ABOUT.mission}</p>
            </article>
            <article className="card mv-card">
              <Icon name="eye" size={28} />
              <h3>Nuestra visión</h3>
              <p>{ABOUT.vision}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="ns-title">
        <div className="container">
          <div className="section-head">
            <h2 id="ns-title">Nuestros servicios</h2>
          </div>
          <div className="feature-grid">
            {ABOUT.services.map((s) => (
              <article key={s.title} className="card feature-card">
                <span className="feature-icon">
                  <Icon name={s.icon} size={26} />
                </span>
                <h3>{s.title}</h3>
                <ul className="dot-list">
                  {s.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="why-title">
        <div className="container">
          <div className="section-head">
            <h2 id="why-title">¿Por qué elegirnos?</h2>
          </div>
          <ul className="reasons">
            {ABOUT.reasons.map((r) => (
              <li key={r}>
                <Icon name="check" size={20} />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="cl-title">
        <div className="container">
          <div className="section-head">
            <h2 id="cl-title">Algunos de nuestros clientes</h2>
          </div>
          <ul className="logo-row">
            {CLIENTS.map((c) => (
              <li key={c.name}>
                <Img name={c.logo} alt={c.name} width="160" height="120" />
              </li>
            ))}
          </ul>
          <p className="center">
            <Link className="btn btn-ghost" to="/clientes">
              Ver proyectos con clientes <Icon name="arrow" size={18} />
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}
