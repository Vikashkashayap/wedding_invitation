export default function InvitationCard({ children }) {
  return (
    <div className="invitation-card-wrapper mx-auto w-full max-w-xl sm:max-w-2xl">
      {/* Outer glowing gold ring */}
      <div className="invitation-card-outer rounded-[2rem] p-[3px] sm:rounded-[2.25rem]">
        <div className="invitation-card-frame rounded-[1.85rem] p-[2px] sm:rounded-[2.1rem]">
          <div className="invitation-card-inner relative overflow-hidden rounded-[1.75rem] px-6 py-10 text-center sm:rounded-[2rem] sm:px-10 sm:py-12 md:px-14 md:py-14">
            {/* Watermark mandala */}
            <div className="card-watermark pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
              <svg viewBox="0 0 200 200" className="h-64 w-64 opacity-[0.04] sm:h-80 sm:w-80">
                <circle cx="100" cy="100" r="90" fill="none" stroke="#d4af37" strokeWidth="1" />
                <circle cx="100" cy="100" r="70" fill="none" stroke="#d4af37" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="50" fill="none" stroke="#d4af37" strokeWidth="0.5" />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
                  <line
                    key={a}
                    x1="100"
                    y1="100"
                    x2={100 + 85 * Math.cos((a * Math.PI) / 180)}
                    y2={100 + 85 * Math.sin((a * Math.PI) / 180)}
                    stroke="#d4af37"
                    strokeWidth="0.5"
                  />
                ))}
              </svg>
            </div>

            {/* All 4 corner ornaments */}
            <span className="card-corner card-corner-tl" aria-hidden="true" />
            <span className="card-corner card-corner-tr" aria-hidden="true" />
            <span className="card-corner card-corner-bl" aria-hidden="true" />
            <span className="card-corner card-corner-br" aria-hidden="true" />

            {/* Top decorative divider */}
            <div className="relative mb-6 flex items-center justify-center gap-3" aria-hidden="true">
              <span className="card-divider-line" />
              <span className="text-lg text-gold">✦</span>
              <span className="card-divider-line" />
            </div>

            <div className="relative z-10">{children}</div>

            {/* Bottom decorative divider */}
            <div className="relative mt-8 flex items-center justify-center gap-3" aria-hidden="true">
              <span className="card-divider-line" />
              <span className="text-sm text-gold/70">❦</span>
              <span className="card-divider-line" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
