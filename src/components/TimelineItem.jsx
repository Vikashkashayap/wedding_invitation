import { motion } from 'framer-motion'

export default function TimelineItem({ item, index, isEven }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="relative"
    >
      {/* Mobile: stacked layout */}
      <div className="md:hidden">
        <div className="mb-3 flex justify-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold bg-cream shadow">
            <span className="font-display text-base font-bold text-gold-dark">{index + 1}</span>
          </div>
        </div>
        <div className="group overflow-hidden rounded-2xl bg-white shadow-xl shadow-gold/10">
          <div className="photo-frame-timeline">
            <img src={item.image} alt={item.title} className="photo-img" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-royal/60 to-transparent" />
            <span className="font-body absolute bottom-3 left-3 text-xs tracking-widest text-gold-light uppercase sm:text-sm">
              {item.date}
            </span>
          </div>
          <div className="p-4 sm:p-6">
            <h3 className="font-display mb-2 text-lg font-semibold text-gold-dark sm:mb-2 sm:text-xl md:text-2xl">
              {item.title}
            </h3>
            <p className="font-body text-sm leading-relaxed text-royal/80 sm:text-base md:text-lg">
              {item.description}
            </p>
          </div>
        </div>
      </div>

      {/* Desktop: alternating timeline */}
      <div
        className={`hidden md:flex md:flex-row md:items-center md:gap-0 ${
          isEven ? 'md:flex-row-reverse' : ''
        }`}
      >
        <div className="hidden w-px flex-shrink-0 md:block md:w-1/2" />
        <div
          className={`relative z-10 flex w-full flex-col md:w-1/2 ${
            isEven ? 'md:items-start md:pr-12' : 'md:items-end md:pl-12'
          }`}
        >
          <div className="group w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-xl shadow-gold/10">
            <div className="photo-frame-timeline">
              <img src={item.image} alt={item.title} className="photo-img" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-royal/60 to-transparent" />
              <span className="font-body absolute bottom-4 left-4 text-sm tracking-widest text-gold-light uppercase">
                {item.date}
              </span>
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="font-display mb-3 text-2xl font-semibold text-gold-dark">
                {item.title}
              </h3>
              <p className="font-body text-lg leading-relaxed text-royal/80">
                {item.description}
              </p>
            </div>
          </div>
        </div>
        <div className="absolute left-1/2 hidden -translate-x-1/2 md:block">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold bg-cream shadow-lg">
            <span className="font-display text-lg font-bold text-gold-dark">{index + 1}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
