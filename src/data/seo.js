// Título (<60 caracteres) y meta descripción (~150 caracteres) por página.
// Lo usan el componente <Seo> y scripts/prerender.mjs (HTML estático por ruta).

export const SITE_URL = 'https://www.rrexpertosensoporte.com'
export const SITE_NAME = 'RR Expertos en Soporte TI'

export const SEO = {
  '/': {
    title: 'Soporte y Mantenimiento de TI en México | RR Expertos',
    description:
      'Administración de servidores, respaldos con Veeam, virtualización VMware, cableado estructurado, CCTV y soporte de equipos de cómputo en sitio o remoto.',
  },
  '/quienes-somos': {
    title: 'Quiénes somos | RR Expertos en Soporte TI',
    description:
      'Empresa mexicana de soporte técnico y mantenimiento profesional de TI. Conoce nuestra misión, visión, servicios y por qué elegirnos.',
  },
  '/clientes': {
    title: 'Clientes | RR Expertos en Soporte TI',
    description:
      'Empresas que confían en nosotros: Manufacturas Adir, Industrial Resources de México, Cinvestav y GLSoftST. Cableado, CCTV, control de acceso y soporte.',
  },
  '/tienda': {
    title: 'Tienda de refacciones y herramientas | RR Expertos',
    description:
      'Refacciones de cómputo y celulares, herramientas de reparación, cámaras de seguridad y controles de acceso. Compra fácil por WhatsApp.',
  },
  '/tienda/herramientas-de-reparacion-de-celulares': {
    title: 'Herramientas de reparación de celulares | RR Expertos',
    description:
      'Desarmadores de precisión, tapetes separadores LCD, lámparas UV, detectores de corto y más herramientas para reparar celulares. Pide por WhatsApp.',
  },
  '/servicio-y-soportes': {
    title: 'Servicio y soporte técnico | RR Expertos en Soporte TI',
    description:
      'Soporte para servidores, infraestructura, cámaras de seguridad, equipos Windows y Mac, impresoras, celulares y tabletas. En sitio o remoto.',
  },
  '/contacto': {
    title: 'Contacto | RR Expertos en Soporte TI – Ecatepec',
    description:
      'Contáctanos por teléfono, WhatsApp o correo. Oficina en Calle 3 #170, Col. Hank González, Ecatepec de Morelos, Estado de México.',
  },
  404: {
    title: 'Página no encontrada | RR Expertos en Soporte TI',
    description: 'La página que buscas no existe. Vuelve al inicio para conocer nuestros servicios de soporte y mantenimiento de TI.',
  },
}
