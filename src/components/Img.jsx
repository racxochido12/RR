/**
 * Imagen WebP de /public/images. Si `animated`, muestra una versión estática
 * a quien tenga activado "reducir movimiento" en su sistema.
 */
export default function Img({ name, alt, animated = false, eager = false, className, width, height }) {
  const src = `/images/${name}.webp`
  const img = (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
    />
  )
  if (!animated) return img
  return (
    <picture>
      <source srcSet={`/images/${name}-static.webp`} media="(prefers-reduced-motion: reduce)" />
      {img}
    </picture>
  )
}
