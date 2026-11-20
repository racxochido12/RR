import Img from './Img.jsx'
import Icon from './Icon.jsx'
import { formatPrice, productWhatsApp } from '../data/site.js'

export default function ProductGrid({ products }) {
  return (
    <ul className="product-grid">
      {products.map((p) => (
        <li key={p.id} className="card product-card">
          <div className="product-media">
            <Img name={p.image} alt={p.name} width="300" height="300" />
          </div>
          <div className="card-body">
            <h3 className="product-name">{p.name}</h3>
            <p className="price">
              <span className="sr-only">Precio: </span>
              {formatPrice(p.price)}
            </p>
            <a className="btn btn-wa btn-solid btn-block" href={productWhatsApp(p)} target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" />
              <span>Comprar</span>
              <span className="sr-only">
                {' '}
                {p.name} por WhatsApp (se abre en una nueva pestaña)
              </span>
            </a>
          </div>
        </li>
      ))}
    </ul>
  )
}
