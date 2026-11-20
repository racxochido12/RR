import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'

export default function NotFound() {
  return (
    <>
      <Seo path={404} />
      <section className="section">
        <div className="container center narrow">
          <p className="eyebrow">Error 404</p>
          <h1>Página no encontrada</h1>
          <p className="lead">La página que buscas no existe o cambió de dirección.</p>
          <Link className="btn btn-primary" to="/">
            Volver al inicio
          </Link>
        </div>
      </section>
    </>
  )
}
