import Icon from './Icon.jsx'

/** Enlace a WhatsApp que se abre en otra pestaña (avisado a lectores de pantalla). */
export default function WhatsAppButton({ href, children = 'Escríbenos por WhatsApp', variant = 'solid', className = '' }) {
  return (
    <a className={`btn btn-wa btn-${variant} ${className}`} href={href} target="_blank" rel="noopener noreferrer">
      <Icon name="whatsapp" />
      <span>{children}</span>
      <span className="sr-only"> (se abre en una nueva pestaña)</span>
    </a>
  )
}
