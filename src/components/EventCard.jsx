import { motion } from 'framer-motion'
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa'

export default function EventCard({ event, index }) {
  const Icon = event.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileTap={{ scale: 0.99 }}
      className="group relative min-w-0 touch-manipulation overflow-hidden rounded-2xl bg-white shadow-lg shadow-gold/10 transition-shadow sm:shadow-xl sm:hover:shadow-gold/25"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-60`}
      />
      <div className="relative p-4 sm:p-6 md:p-8">
        <div className="mb-3 flex items-start justify-between gap-2 sm:mb-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold-dark sm:h-14 sm:w-14">
            <Icon size={20} className="sm:hidden" />
            <Icon size={24} className="hidden sm:block" />
          </div>
          <span className="font-body shrink-0 rounded-full bg-gold/10 px-2.5 py-1 text-[0.65rem] tracking-wider text-gold-dark uppercase sm:px-3 sm:text-xs">
            Event {index + 1}
          </span>
        </div>

        <h3 className="font-display mb-2.5 text-pretty text-lg font-semibold text-royal sm:mb-3 sm:text-xl md:text-2xl">
          {event.name}
        </h3>

        <ul className="space-y-2">
          <li className="font-body flex items-start gap-2 text-sm text-royal/80 sm:gap-3 sm:text-base">
            <FaCalendarAlt className="mt-0.5 shrink-0 text-gold" size={14} />
            <span className="text-pretty">{event.date}</span>
          </li>
          <li className="font-body flex items-start gap-2 text-sm text-royal/80 sm:gap-3 sm:text-base">
            <FaClock className="mt-0.5 shrink-0 text-gold" size={14} />
            <span className="text-pretty">{event.time}</span>
          </li>
          <li className="font-body flex items-start gap-2 text-sm text-royal/80 sm:gap-3 sm:text-base">
            <FaMapMarkerAlt className="mt-0.5 shrink-0 text-gold" size={14} />
            <span className="text-pretty">{event.location}</span>
          </li>
        </ul>
      </div>
    </motion.div>
  )
}
