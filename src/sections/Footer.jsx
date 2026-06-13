import { motion } from 'framer-motion'
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { weddingData } from '../data/weddingData'

const iconMap = {
  instagram: FaInstagram,
  facebook: FaFacebook,
  whatsapp: FaWhatsapp,
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-royal py-8 text-white sm:py-14">
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a962'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto flex max-w-4xl min-w-0 flex-col items-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex w-full flex-col items-center"
        >
          <h2 className="font-display mb-2 text-xl font-semibold text-gold-light sm:mb-3 sm:text-3xl md:text-4xl">
            Thank You
          </h2>
          <p className="font-body mx-auto mb-4 max-w-lg text-pretty text-sm leading-relaxed text-white/80 italic sm:mb-5 sm:text-lg">
            With love and gratitude,
            <br />
            {weddingData.groom} & {weddingData.bride}
          </p>

          <p className="font-display mb-1 text-lg tracking-wide text-gold sm:text-xl">
            {weddingData.groom} & {weddingData.bride}
          </p>
          <p className="font-body mb-6 text-sm text-white/60 sm:mb-8">{weddingData.familyName}</p>

          <div className="decorative-line mb-6 sm:mb-8" />

          <p className="font-body mb-3 text-xs tracking-[0.25em] text-gold-light uppercase sm:mb-4 sm:text-sm">
            Share your moments
          </p>
          <div className="mb-6 flex w-full max-w-sm flex-col items-center gap-2 sm:mb-8 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3">
            {weddingData.hashtags.map((tag) => (
              <span
                key={tag}
                className="font-display w-full max-w-xs rounded-full border border-gold/30 px-4 py-2 text-sm text-white sm:w-auto sm:px-5 sm:text-base"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mb-8 flex justify-center gap-4 sm:mb-10 sm:gap-6">
            {weddingData.socialLinks.map((link) => {
              const Icon = iconMap[link.icon]
              return (
                <motion.a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.92 }}
                  className="flex h-11 w-11 touch-manipulation items-center justify-center rounded-full border border-gold/30 text-gold-light transition-colors hover:border-gold hover:bg-gold/10 hover:text-gold sm:h-12 sm:w-12"
                  aria-label={link.platform}
                >
                  <Icon size={20} />
                </motion.a>
              )
            })}
          </div>

          <p className="font-body max-w-xs text-pretty text-xs text-white/50 sm:max-w-none sm:text-sm">
            © {new Date().getFullYear()} {weddingData.groom} & {weddingData.bride}. Made with love.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
