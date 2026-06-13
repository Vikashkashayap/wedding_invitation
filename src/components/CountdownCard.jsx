import { motion } from 'framer-motion'

export default function CountdownCard({ value, label, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group relative min-w-0 overflow-hidden rounded-xl bg-white p-3 text-center shadow-lg shadow-gold/10 sm:rounded-2xl sm:p-5 md:p-7"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-blush/20 opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative">
        <motion.span
          key={value}
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 220 }}
          className="font-display block text-[clamp(1.75rem,8vw,2.5rem)] font-bold tabular-nums text-gold-dark sm:text-4xl md:text-5xl lg:text-6xl"
        >
          {String(value).padStart(2, '0')}
        </motion.span>
        <span className="font-body mt-0.5 block text-[0.58rem] leading-tight tracking-[0.08em] text-royal/70 uppercase sm:mt-1 sm:text-xs md:text-sm">
          {label}
        </span>
      </div>
    </motion.div>
  )
}
