import { motion } from 'framer-motion'

const petals = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${(i * 5.5) % 100}%`,
  delay: (i * 0.7) % 10,
  duration: 10 + (i % 5) * 2,
  size: 10 + (i % 4) * 4,
  rotation: i * 40,
  color: i % 3 === 0 ? '#d4af37' : i % 3 === 1 ? '#f0dfa0' : '#e8a0b0',
}))

export default function FlowerPetals() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[5] overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute opacity-35"
          style={{ left: petal.left, top: -30 }}
          initial={{ y: -30, opacity: 0, rotate: petal.rotation }}
          animate={{
            y: '110vh',
            opacity: [0, 0.35, 0.35, 0],
            rotate: petal.rotation + 720,
            x: [0, 40, -30, 20],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg width={petal.size} height={petal.size * 1.4} viewBox="0 0 20 28">
            <ellipse cx="10" cy="14" rx="6" ry="12" fill={petal.color} opacity="0.7" />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}
