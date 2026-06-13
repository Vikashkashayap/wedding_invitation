import { motion } from 'framer-motion'
import { FaGift } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'

export default function GiftSection() {
  return (
    <section id="gifts" className="section-padding bg-white">
      <div className="mx-auto max-w-4xl">
        <SectionHeading subtitle="Blessings" title="Gift Registry" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="min-w-0 rounded-2xl bg-gradient-to-br from-cream to-blush/30 p-4 text-center shadow-xl shadow-gold/10 sm:p-8 md:p-12"
        >
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/20 sm:mb-6 sm:h-16 sm:w-16">
            <FaGift className="text-gold-dark" size={24} />
          </div>

          <p className="font-body mx-auto mb-5 max-w-xl text-pretty text-sm leading-relaxed text-royal/80 sm:mb-8 sm:text-base md:text-lg">
            Your presence at our wedding is the greatest gift of all. However, if
            you wish to honor us with a gift, we have provided a convenient option
            below. Your love and blessings mean the world to us.
          </p>

          <div className="mx-auto w-full max-w-xs rounded-2xl bg-white p-4 shadow-lg ring-1 ring-gold/20 sm:inline-block sm:max-w-none sm:p-6">
            <div className="mx-auto mb-3 flex h-32 w-32 items-center justify-center rounded-xl border-2 border-dashed border-gold/40 bg-cream sm:h-48 sm:w-48">
              <div className="text-center">
                <div className="mx-auto mb-2 grid h-32 w-32 grid-cols-5 gap-0.5 p-2">
                  {[...Array(25)].map((_, i) => (
                    <div
                      key={i}
                      className={`rounded-sm ${
                        [0, 1, 2, 3, 4, 5, 9, 10, 14, 15, 19, 20, 21, 22, 23, 24, 6, 8, 16, 18].includes(i)
                          ? 'bg-royal'
                          : i === 12
                            ? 'bg-gold'
                            : 'bg-white'
                      }`}
                    />
                  ))}
                </div>
                <p className="font-body text-xs tracking-wider text-royal/50 uppercase">
                  Scan to Gift
                </p>
              </div>
            </div>
            <p className="font-body text-sm text-royal/60">
              QR Code Placeholder — Replace with your payment QR
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
