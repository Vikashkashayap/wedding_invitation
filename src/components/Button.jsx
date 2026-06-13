import { motion } from 'framer-motion'

export default function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}) {
  const variants = {
    primary:
      'bg-maroon text-gold-light hover:bg-maroon-dark active:bg-maroon-dark shadow-lg shadow-maroon/30 border border-gold/40',
    outline:
      'border-2 border-gold text-maroon hover:bg-maroon hover:text-gold-light active:bg-maroon/90',
    ghost: 'text-maroon hover:bg-maroon/10 active:bg-maroon/15',
  }

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={`font-body inline-flex min-h-11 touch-manipulation items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold tracking-wide transition-colors duration-200 sm:px-8 sm:text-lg ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}
