import { motion } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'

export default function ScrollIndicator() {
  return (
    <motion.button
      onClick={() =>
        document.querySelector('#countdown')?.scrollIntoView({ behavior: 'smooth' })
      }
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      className="absolute bottom-4 left-1/2 z-20 hidden -translate-x-1/2 cursor-pointer sm:bottom-6 sm:flex"
      aria-label="Scroll down"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="flex flex-col items-center gap-1 text-gold-light/80"
      >
        <span className="font-body text-xs tracking-[0.35em] uppercase">Scroll</span>
        <HiChevronDown size={22} />
      </motion.div>
    </motion.button>
  )
}
