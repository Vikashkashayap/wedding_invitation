const FloralSvg = () => (
  <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" className="text-gold">
    <circle cx="40" cy="40" r="5" fill="currentColor" opacity="0.9" />
    {[0, 72, 144, 216, 288].map((angle) => (
      <ellipse
        key={angle}
        cx="40"
        cy="18"
        rx="7"
        ry="14"
        fill="currentColor"
        opacity="0.55"
        transform={`rotate(${angle} 40 40)`}
      />
    ))}
  </svg>
)

export default function FloralBorder({ children, className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <div className="floral-corner top-0 left-0 text-gold opacity-40">
        <FloralSvg />
      </div>
      <div className="floral-corner top-0 right-0 rotate-90 text-gold opacity-40">
        <FloralSvg />
      </div>
      <div className="floral-corner bottom-0 left-0 -rotate-90 text-gold opacity-40">
        <FloralSvg />
      </div>
      <div className="floral-corner right-0 bottom-0 rotate-180 text-gold opacity-40">
        <FloralSvg />
      </div>
      {children}
    </div>
  )
}
