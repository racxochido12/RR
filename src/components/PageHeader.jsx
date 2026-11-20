import { Link } from 'react-router-dom'

/** Encabezado de página interior con migas de pan y <h1>. */
export default function PageHeader({ title, intro, crumbs = [] }) {
  return (
    <section className="page-header">
      <div className="container">
        <nav aria-label="Ruta de navegación" className="breadcrumbs">
          <ol>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            {crumbs.map((c) => (
              <li key={c.to}>
                <Link to={c.to}>{c.label}</Link>
              </li>
            ))}
            <li aria-current="page">{title}</li>
          </ol>
        </nav>
        <h1>{title}</h1>
        {intro && <p className="lead">{intro}</p>}
      </div>
    </section>
  )
}
