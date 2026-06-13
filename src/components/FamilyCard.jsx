import { motion } from 'framer-motion'

export default function FamilyCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.3) }}
      whileTap={{ scale: 0.98 }}
      className="group touch-manipulation overflow-hidden rounded-2xl bg-white text-center shadow-lg shadow-gold/10 transition-shadow active:shadow-gold/15 sm:shadow-xl sm:hover:shadow-gold/20"
    >
      <div className="relative mx-auto mt-4 h-20 w-20 overflow-hidden rounded-full border-[3px] border-gold/30 sm:mt-5 sm:h-28 sm:w-28 md:h-32 md:w-32">
        <img
          src={member.photo}
          alt={member.name}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="px-3 py-3 sm:p-5">
        <h4 className="font-display text-pretty text-[0.95rem] font-semibold leading-snug text-royal sm:text-lg md:text-xl">
          {member.name}
        </h4>
        <p className="font-body mt-0.5 text-xs text-gold-dark sm:mt-1 sm:text-sm">{member.relation}</p>
      </div>
    </motion.div>
  )
}
