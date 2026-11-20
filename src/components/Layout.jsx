import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { BUSINESS, NAV } from '../data/site.js'
import Icon from './Icon.jsx'
import WhatsAppButton from './WhatsAppButton.jsx'

const YEAR = new Date().getFullYear()

function Header() {
  const { pathname } = useLocation()
  // El menú queda abierto solo en la ruta donde se abrió: al navegar se cierra solo.
  const [openAt, setOpenAt] = useState(null)
  const open = openAt === pathname
  const setOpen = (value) => setOpenAt(value ? pathname : null)
  const buttonRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpenAt(null)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand">
          <img src="/images/logo.webp" alt="" width="48" height="48" />
          <span className="brand-text">
            <strong>RR Expertos</strong>
            <span>{BUSINESS.tagline}</span>
          </span>
        </Link>

        <button
          ref={buttonRef}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? 'close' : 'menu'} size={24} />
          <span className="sr-only">{open ? 'Cerrar menú' : 'Abrir menú'}</span>
        </button>

        <nav id="main-nav" aria-label="Principal" className={`main-nav ${open ? 'is-open' : ''}`}>
          <ul>
            {NAV.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === '/'}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <WhatsAppButton href={BUSINESS.whatsapp.general} className="nav-cta">
            WhatsApp
          </WhatsAppButton>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  const { address } = BUSINESS
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link to="/" className="brand brand-footer">
            <img src="/images/logo.webp" alt="" width="56" height="56" loading="lazy" />
            <span className="brand-text">
              <strong>RR Expertos</strong>
              <span>Soporte y Mantenimiento Profesional de TI</span>
            </span>
          </Link>
          <p className="muted">
            Soluciones tecnológicas para empresas en México: servidores, redes, CCTV y soporte de equipos, en sitio o
            remoto.
          </p>
          <ul className="social" aria-label="Redes sociales">
            {BUSINESS.social.map((s) => (
              <li key={s.name}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" aria-label={`${s.name} (se abre en una nueva pestaña)`}>
                  <Icon name={s.icon} size={22} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Pie de página">
          <h2 className="footer-title">Navegación</h2>
          <ul className="footer-links">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link to="/tienda/herramientas-de-reparacion-de-celulares">Herramientas de reparación de celulares</Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="footer-title">Contacto</h2>
          <address className="footer-contact">
            <p>
              <Icon name="pin" size={18} />
              <span>
                {address.street}, {address.colony}, C.P. {address.postalCode}, {address.city}, {address.state}.
              </span>
            </p>
            {BUSINESS.contacts.map((c) => (
              <p key={c.tel}>
                <Icon name="phone" size={18} />
                <span>
                  {c.area}: <a href={`tel:${c.tel}`}>{c.phone}</a>
                </span>
              </p>
            ))}
            <p>
              <Icon name="mail" size={18} />
              <a href={`mailto:${BUSINESS.contacts[1].email}`}>{BUSINESS.contacts[1].email}</a>
            </p>
          </address>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>
          © {YEAR} {BUSINESS.name}.
        </p>
      </div>
    </footer>
  )
}

export default function Layout() {
  const { pathname } = useLocation()
  const mainRef = useRef(null)
  const firstRender = useRef(true)

  // Al navegar: subir al inicio y mover el foco al contenido para lectores de pantalla.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    window.scrollTo(0, 0)
    mainRef.current?.focus({ preventScroll: true })
  }, [pathname])

  return (
    <>
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido" ref={mainRef} tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
