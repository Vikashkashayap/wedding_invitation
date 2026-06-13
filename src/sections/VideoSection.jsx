import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { photos } from '../data/photos'

export default function VideoSection() {
  return (
    <section id="video" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-maroon-dark via-maroon to-maroon-dark" />
      <div className="indian-pattern absolute inset-0 opacity-20" />

      <div className="relative mx-auto max-w-5xl">
        <SectionHeading subtitle="Coming Soon" title="Wedding Memories" light />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/40 ring-2 ring-gold/30"
        >
          <div className="relative aspect-video w-full">
            <img
              src={photos.hero}
              alt="Prakash & Madhu wedding"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-maroon-dark/50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold/60 bg-maroon/40 backdrop-blur-sm">
                <svg className="ml-1 h-9 w-9 text-gold-light" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="font-display text-2xl text-gold-light sm:text-3xl">
                Wedding Video
              </p>
              <p className="font-body mt-2 max-w-md text-base text-white/80 sm:text-lg">
                Our wedding film will be shared here soon. Stay tuned!
              </p>
            </div>
          </div>
          <div className="absolute -top-px -right-px h-16 w-16 border-t-2 border-r-2 border-gold/50" />
          <div className="absolute -bottom-px -left-px h-16 w-16 border-b-2 border-l-2 border-gold/50" />
        </motion.div>
      </div>
    </section>
  )
}
