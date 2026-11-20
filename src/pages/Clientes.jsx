import Seo from '../components/Seo.jsx'
import PageHeader from '../components/PageHeader.jsx'
import Img from '../components/Img.jsx'
import Icon from '../components/Icon.jsx'
import { CLIENTS } from '../data/site.js'

export default function Clientes() {
  return (
    <>
      <Seo path="/clientes" />
      <PageHeader title="Clientes" intro="Empresas e instituciones que confían en nosotros y los servicios que les brindamos." />

      <section className="section">
        <div className="container client-grid">
          {CLIENTS.map((c) => (
            <article key={c.name} className="card client-card">
              <div className="client-logo">
                <Img name={c.logo} alt={`Logotipo de ${c.name}`} width="200" height="150" />
              </div>
              <div className="card-body">
                <h2 className="h3">{c.name}</h2>
                <ul className="check-list">
                  {c.items.map((it) => {
                    const text = typeof it === 'string' ? it : it.text
                    return (
                      <li key={text}>
                        <Icon name="check" size={18} />
                        <span>
                          {text}
                          {it.link && (
                            <>
                              <a href={it.link.url} target="_blank" rel="noopener noreferrer">
                                {it.link.label}
                                <span className="sr-only"> (se abre en una nueva pestaña)</span>
                              </a>
                              .
                            </>
                          )}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
