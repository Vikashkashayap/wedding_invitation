import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import { weddingData } from '../data/weddingData'

export default function Venue() {
  return (
    <section id="venue" className="section-padding indian-pattern bg-cream">
      <div className="mx-auto max-w-7xl min-w-0">
        <SectionHeading subtitle="Location" title="Wedding Venue" />

        <div className="flex flex-col gap-4 sm:gap-6 lg:grid lg:grid-cols-2 lg:gap-10">
          {/* Map first on mobile for quicker access */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="venue-map-card order-1 flex min-w-0 flex-col lg:order-2"
          >
            <div className="flex items-center justify-between gap-2 border-b border-gold/20 bg-cream px-3 py-2.5 sm:px-4">
              <p className="font-display text-sm font-semibold text-maroon sm:text-base">
                Find Us on Map
              </p>
              <a
                href={weddingData.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body flex min-h-10 shrink-0 items-center gap-1 text-xs text-gold-dark underline-offset-2 hover:text-maroon hover:underline sm:text-sm"
              >
                Open in Maps
                <FaExternalLinkAlt size={10} />
              </a>
            </div>

            <div className="relative h-[200px] w-full min-w-0 sm:h-[260px] lg:aspect-video lg:h-auto">
              <iframe
                src={weddingData.mapsEmbedUrl}
                title="Siddhi Marriage Hall location"
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="border-t border-gold/20 bg-cream-dark/50 px-3 py-2 text-center">
              <p className="font-body text-pretty text-xs text-royal/70 sm:text-sm">
                Siddhi Marriage Hall · Barhaj, Deoria, UP
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="venue-info-card order-2 flex flex-col justify-center lg:order-1"
          >
            <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-maroon/10 sm:mb-3 sm:h-11 sm:w-11">
              <FaMapMarkerAlt className="text-maroon" size={18} />
            </div>

            <h3 className="font-display mb-2 text-pretty text-lg font-semibold gold-text sm:text-xl lg:text-3xl">
              Siddhi Marriage Hall
            </h3>

            <p className="font-body mb-3 text-pretty text-sm leading-relaxed text-royal sm:mb-4 sm:text-base">
              We warmly welcome all our friends and family to join us at Siddhi
              Marriage Hall and celebrate this joyful occasion with the{' '}
              <span className="font-semibold text-maroon">{weddingData.familyName}</span>.
            </p>

            <div className="mb-3 rounded-xl border border-gold/20 bg-white/70 p-3 sm:mb-4 sm:p-4">
              <p className="font-body mb-1.5 text-[0.65rem] tracking-[0.18em] text-maroon uppercase sm:text-xs">
                Full Address
              </p>
              <address className="font-body text-pretty text-sm not-italic leading-relaxed text-royal">
                Siddhi Marriage Hall
                <br />
                Paina Road, Near Block Barhaj
                <br />
                Barhaj, Deoria
                <br />
                Uttar Pradesh, India
              </address>
            </div>

            <a
              href={weddingData.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button variant="primary" className="w-full">
                <FaMapMarkerAlt size={15} />
                Get Directions
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
