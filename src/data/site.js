// Contenido del sitio. Edita aquí textos, teléfonos, servicios y productos.

export const BUSINESS = {
  name: 'RR Expertos en Soporte y Mantenimiento Profesional de TI México',
  shortName: 'RR Expertos',
  tagline: 'Expertos en Soluciones Tecnológicas',
  url: 'https://www.rrexpertosensoporte.com',
  address: {
    label: 'Hank González',
    street: 'Calle 3 Número 170',
    colony: 'Colonia Hank González',
    postalCode: '55520',
    city: 'Ecatepec de Morelos',
    state: 'Estado de México',
    country: 'México',
  },
  mapsUrl: 'https://maps.app.goo.gl/1tiAthZrngvscGKe8',
  geo: { lat: 19.548531, lng: -99.1184693 },
  contacts: [
    {
      area: 'Oficina México',
      kind: 'Teléfono',
      phone: '55-93-10-53-79',
      tel: '+525593105379',
    },
    {
      area: 'Área Comercial',
      kind: 'Celular',
      phone: '56-17-55-36-08',
      tel: '+525617553608',
      email: 'ventas@rrexpertosensoporte.com',
      whatsapp: 'https://wa.link/bpalzh',
    },
    {
      area: 'Área de Soporte e Ingeniería',
      kind: 'Celular',
      phone: '55-39-70-00-52',
      tel: '+525539700052',
      email: 'raulreyna@rrexpertosensoporte.com',
      whatsapp: 'https://wa.link/7gxsrc',
    },
  ],
  whatsapp: {
    general: 'https://wa.link/bpalzh',
    soporte: 'https://wa.link/7gxsrc',
    storePhone: '525539700052',
  },
  social: [
    { name: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/share/1SVLxKnoGm/' },
    {
      name: 'LinkedIn',
      icon: 'linkedin',
      url: 'https://mx.linkedin.com/in/rr-expertos-en-soporte-y-mantenimiento-de-ti-m%C3%A9xico-b91799300',
    },
    { name: 'YouTube', icon: 'youtube', url: 'https://youtube.com/@rrexpertosensoporteymtto.' },
    { name: 'TikTok', icon: 'tiktok', url: 'https://www.tiktok.com/@rrexpertosensoporteymtto' },
  ],
}

export const NAV = [
  { to: '/', label: 'Inicio' },
  { to: '/quienes-somos', label: 'Quiénes somos' },
  { to: '/clientes', label: 'Clientes' },
  { to: '/tienda', label: 'Tienda' },
  { to: '/servicio-y-soportes', label: 'Servicio y soportes' },
  { to: '/contacto', label: 'Contacto' },
]

/** Servicios de la página principal. */
export const HOME_SERVICES = [
  {
    id: 'servidores',
    title: 'Administración de servidores físicos y virtuales',
    image: 'inicio-servidores',
    animated: true,
    alt: 'Ilustración animada de un centro de datos con servidores conectados a una computadora',
    items: [
      'Administración de servidores (Windows Server).',
      'Instalación, configuración y mantenimiento.',
      'Monitoreo de rendimiento y seguridad.',
      'Gestión de usuarios y servicios.',
      'En sitio o remoto.',
    ],
  },
  {
    id: 'respaldos',
    title: 'Servicios de respaldo con Veeam',
    image: 'serv-servidores',
    alt: 'Gabinete de servidores con el logotipo de RR iluminado',
    items: [
      'Instalación y configuración de Veeam Backup & Replication.',
      'Respaldos inmutables (anti-ransomware).',
      'Restauración.',
    ],
  },
  {
    id: 'virtualizacion',
    title: 'Virtualización con VMware',
    image: 'inicio-virtualizacion',
    animated: true,
    alt: 'Ilustración de un servidor virtual con el logotipo de VMware',
    items: [
      'Creación y administración de máquinas virtuales.',
      'Optimización de recursos (CPU, RAM, discos, SSD).',
      'Migraciones físicas a virtuales (P2V).',
    ],
  },
  {
    id: 'cableado',
    title: 'Cableado estructurado',
    image: 'serv-infraestructura',
    alt: 'Rack de telecomunicaciones con cableado de red organizado',
    items: [
      'Transmisión de voz, datos y video.',
      'Sistemas de gestión de edificios.',
      'Redes de datos.',
      'Telecomunicaciones.',
      'Control de procesos informáticos.',
      'Consultoría, instalación, terminación y pruebas.',
      'Gestión de cables.',
      'Documentación.',
      'Seguridad.',
      'A/V (audio y video).',
      'Control de iluminación.',
      'Sistemas de detección.',
      'Wifi.',
    ],
  },
  {
    id: 'cctv',
    title: 'Cámaras de seguridad (CCTV)',
    image: 'inicio-cctv',
    animated: true,
    alt: 'Cámara de seguridad tipo bala montada en pared',
    items: ['Venta.', 'Instalación y configuración.', 'Mantenimiento.'],
  },
  {
    id: 'equipos',
    title: 'Soporte y mantenimiento de equipos de cómputo',
    image: 'serv-windows',
    alt: 'Computadora portátil con el logotipo de RR en pantalla',
    items: [
      'Mantenimiento preventivo y correctivo.',
      'Venta de refacciones de equipos de cómputo.',
      'Reparación de equipos de cómputo.',
      'Administración de equipos de cómputo.',
      'Instalación, configuración y mantenimiento de equipos de cómputo.',
      'Monitoreo de rendimiento y seguridad en equipos de cómputo.',
      'Gestión de usuarios y servicios.',
      'En sitio o remoto.',
    ],
  },
]

export const ABOUT = {
  heading: 'RR Expertos en Soporte y Mantenimiento Profesional de TI – México',
  intro:
    'RR Expertos es una empresa mexicana especializada en ofrecer soluciones integrales en Soporte Técnico y Mantenimiento Profesional de Tecnologías de la Información (TI). Nuestro compromiso es garantizar la continuidad operativa, eficiencia y seguridad de los sistemas tecnológicos de nuestros clientes.',
  mission:
    'Brindar servicios de soporte y mantenimiento de TI con altos estándares de calidad, confiabilidad y rapidez, asegurando que nuestros clientes cuenten con infraestructuras tecnológicas estables, seguras y alineadas con sus objetivos de negocio.',
  vision:
    'Ser reconocidos como una de las empresas líderes en México en soporte y mantenimiento profesional de TI, destacando por nuestro profesionalismo, atención personalizada e innovación constante.',
  services: [
    {
      icon: 'wrench',
      title: 'Soporte técnico especializado',
      items: ['Atención remota y en sitio', 'Diagnóstico y solución de fallas', 'Gestión y resolución de incidencias'],
    },
    {
      icon: 'monitor',
      title: 'Mantenimiento preventivo y correctivo',
      items: ['Limpieza y optimización de equipos', 'Actualización de software y hardware', 'Prevención de fallas críticas'],
    },
    {
      icon: 'lock',
      title: 'Seguridad informática',
      items: [
        'Protección contra malware y amenazas',
        'Copias de seguridad y recuperación de datos',
        'Control de accesos y políticas de seguridad',
      ],
    },
    {
      icon: 'cloud',
      title: 'Soluciones en la nube y redes',
      items: [
        'Administración de redes LAN/WAN',
        'Soporte en servidores y servicios cloud',
        'Configuración de routers, switches y firewalls',
      ],
    },
  ],
  reasons: [
    'Personal altamente capacitado',
    'Atención personalizada',
    'Soporte rápido y eficaz',
    'Cobertura a nivel nacional',
    'Compromiso con la mejora continua',
  ],
}

export const CLIENTS = [
  {
    name: 'Manufacturas Adir',
    logo: 'cliente-manufacturas-adir',
    items: [
      'Servicio de soporte y mantenimiento preventivo y correctivo de computadoras e impresoras.',
      'Soporte vía remota y en sitio de software de control de acceso.',
      'Mantenimiento correctivo de control de acceso.',
    ],
  },
  {
    name: 'Industrial Resources de México',
    logo: 'cliente-industrial-resources',
    items: [
      'Servicio de cableado estructurado.',
      'Instalación de cámaras de seguridad.',
      'Servicio de soporte y mantenimiento preventivo y correctivo de computadoras.',
    ],
  },
  {
    name: 'Cinvestav',
    logo: 'cliente-cinvestav',
    items: [
      'Enlace de fibra óptica.',
      'Instalación de cámaras de seguridad en site.',
      { text: 'Instalación de 32 cámaras de seguridad en edificio de ', link: { label: 'CGSTIC', url: 'https://administracion.cinvestav.mx/Secretar%C3%ADadePlaneaci%C3%B3n/Coordinaci%C3%B3ndeServiciosdeApoyo/CGSTIC.aspx' } },
      'Instalación de control de acceso.',
    ],
  },
  {
    name: 'GLSoftST',
    logo: 'cliente-glsoftst',
    items: ['Instalación y configuración de cámaras de seguridad.', 'Instalación de control de acceso.'],
  },
]

export const SUPPORT_CATEGORIES = [
  { title: 'Servidores', image: 'serv-servidores', alt: 'Gabinete de servidores con luces azules' },
  { title: 'Infraestructura', image: 'serv-infraestructura', alt: 'Rack con cableado de red estructurado' },
  { title: 'Cámaras de seguridad (CCTV)', image: 'serv-cctv', alt: 'Dos cámaras de seguridad montadas en un soporte de pared' },
  { title: 'Equipos de cómputo Windows', image: 'serv-windows', alt: 'Laptop con Windows' },
  { title: 'Equipos de cómputo Mac', image: 'serv-mac', alt: 'Computadora iMac sobre un escritorio' },
  { title: 'Impresoras', image: 'serv-impresoras', alt: 'Impresora láser' },
  { title: 'Celulares o tabletas', image: 'serv-celulares', alt: 'Un teléfono celular y una tableta' },
]

export const STORE_CATEGORIES = [
  { title: 'Cámaras de seguridad', image: 'cat-camaras', alt: 'Cámara de seguridad tipo domo' },
  { title: 'Controles de acceso', image: 'cat-control-acceso', alt: 'Lector de control de acceso con teclado y huella' },
  { title: 'Equipos de cómputo', image: 'cat-computo', alt: 'Computadora portátil' },
  { title: 'Equipos de impresión', image: 'cat-impresion', alt: 'Impresora multifuncional' },
]

/**
 * Productos de la tienda.
 * tool: true => aparece también en "Herramientas de reparación de celulares".
 * order: texto que se envía por WhatsApp al pulsar "Comprar".
 */
export const PRODUCTS = [
  { id: 1, name: 'Display Y9 2019', price: 299, image: 'prod-01', order: 'Display y9 2019' },
  { id: 2, name: 'Caja de almacenamiento Te-193 iSort Pro con soporte giratorio de 360° de aleación de aluminio para destornilladores, pinzas y piezas de reparación de teléfonos', price: 199, image: 'prod-02', order: 'Caja de almacenamiento Te-193 iSort Pro', tool: true },
  { id: 3, name: 'Almohadilla con base para Epson L3250-L3251-L5190-L5290', price: 199, image: 'prod-03', order: 'Almohadilla con base Epson' },
  { id: 4, name: 'Lámpara de curado UV L1 Pro', price: 299, image: 'prod-04', order: 'Lampara Uv L1 Pro', tool: true },
  { id: 5, name: 'Procesador AMD Ryzen 5 5600GE 4.4 GHz, 6 núcleos con Radeon Graphics', price: 2999, image: 'prod-05', order: 'Procesador AMD Ryzen 5 5600GE' },
  { id: 6, name: 'Tapete LCD Sunshine Screen Separator LS3 Mini', price: 899, image: 'prod-06', order: 'Tapete LCD Sunshine Mini', tool: true },
  { id: 7, name: 'Multicargador 6 puertos Mechanic F-Power 6S 50W', price: 789, image: 'prod-07', order: 'Multicargador Mechanics 50w', tool: true },
  { id: 8, name: 'Caja de almacenamiento multifunción para placa base de teléfono móvil Sunshine SS-001A Pro', price: 99, image: 'prod-08', order: 'Caja de almacenamiento multifunción', tool: true },
  { id: 9, name: 'JTX Tools JZ-1 UV lámpara de curado rápido de celulares', price: 199, image: 'prod-09', order: 'JTX TOOLS JZ-1 UV', tool: true },
  { id: 10, name: 'Relife RL-069 Detector de corto circuito', price: 199, image: 'prod-10', order: 'Relife RL-069', tool: true },
  { id: 11, name: 'Desarmador profesional ScrewDriver 27 en 1 CRV', price: 199, image: 'prod-11', order: 'Desarmador Profesional Screwdriver 27 en 1', tool: true },
  { id: 12, name: 'Panel activo de chip de batería Mechanic MAX20 para iPhone 8-16 Pro Max, herramienta de activación de batería Android, placa de circuito, probador de carga', price: 499, image: 'prod-12', order: 'Panel activo Chip MECHANIC', tool: true },
  { id: 13, name: 'Desarmadores de precisión magnéticos profesionales, 24 en 1', price: 199, image: 'prod-13', order: 'Desarmadores de precision magneticos 24 en 1', tool: true },
  { id: 14, name: 'iBride A3 Detector de conector de carga', price: 499, image: 'prod-14', order: 'IBride A3 Detector', tool: true },
  { id: 15, name: 'Tarjeta madre ASUS Prime A520M-K', price: 899, image: 'prod-15', order: 'Tarjeta Madre ASUS Prime A520M-K' },
  { id: 16, name: 'Tapete Sunshine LS3 Plus LCD Screen Separator', price: 1399, image: 'prod-16', order: 'Tapete Sunshine LS3 Plus', tool: true },
  { id: 17, name: 'Tapete térmico azul mediano 38 cm x 21 cm TE-503', price: 199, image: 'prod-17', order: 'Tapete termico', tool: true },
  { id: 18, name: 'Tapa OP Reno (con lens) 13F color lila', price: 299, image: 'prod-18', order: 'Tapa OP RENO 13F' },
  { id: 19, name: 'UGREEN Carcasa M.2 NVMe SSD Enclosure 10 Gbps compatible con 2230/2242/2260/2280', price: 599, image: 'prod-19', order: 'UGREEN Carcasa M.2 NVMe SSD Enclosure' },
  { id: 20, name: 'Smart Fast Charger de 6 puertos USB-C', price: 699, image: 'prod-20', order: 'Smart Fast Charger', tool: true },
  { id: 21, name: 'Alcohol isopropílico 100% puro de 500 ml', price: 99, image: 'prod-21', order: 'Alcohol Isopropilico 500ml', tool: true },
]

export const formatPrice = (n) =>
  new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 }).format(n)

export const productWhatsApp = (p) =>
  `https://wa.me/${BUSINESS.whatsapp.storePhone}?text=${encodeURIComponent(`Compra de ${p.order} en $${p.price}`)}`
