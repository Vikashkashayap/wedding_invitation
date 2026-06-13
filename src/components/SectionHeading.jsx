import { motion } from 'framer-motion'

export default function SectionHeading({ subtitle, title, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6 }}
      className="mb-6 text-center sm:mb-10 md:mb-14"
    >
      {subtitle && (
        <p
          className={`font-body mb-2 text-xs tracking-[0.2em] uppercase sm:mb-3 sm:text-sm sm:tracking-[0.3em] ${
            light ? 'text-gold-light' : 'text-gold-dark'
          }`}
        >
          {subtitle}
        </p>
      )}
      <h2
        className={`font-display text-pretty text-[clamp(1.35rem,5vw,2rem)] font-semibold sm:text-3xl md:text-4xl lg:text-5xl ${
          light ? 'text-white' : 'gold-text'
        }`}
      >
        {title}
      </h2>
      <div className="decorative-line mt-4 sm:mt-6" />
    </motion.div>
  )
}
