import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import GalleryLightbox from '../components/GalleryLightbox'
import Button from '../components/Button'
import { galleryImages, GALLERY_INITIAL_COUNT } from '../data/photos'

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [showAll, setShowAll] = useState(false)

  const visibleImages = showAll
    ? galleryImages
    : galleryImages.slice(0, GALLERY_INITIAL_COUNT)

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const goToPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + galleryImages.length) % galleryImages.length,
    )
  }, [])

  const goToNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % galleryImages.length,
    )
  }, [])

  useEffect(() => {
    if (lightboxIndex === null) return

    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') goToPrev()
      if (e.key === 'ArrowRight') goToNext()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [lightboxIndex, goToPrev, goToNext])

  return (
    <section id="gallery" className="section-padding bg-blush/30">
      <div className="mx-auto max-w-7xl">
        <SectionHeading subtitle="Memories" title="Our Photo Gallery" />

        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 lg:gap-5">
          {visibleImages.map((image, index) => (
            <motion.button
              key={image.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.2) }}
              whileTap={{ scale: 0.97 }}
              onClick={() => openLightbox(index)}
              className="photo-card group relative min-w-0 touch-manipulation focus:ring-2 focus:ring-gold focus:outline-none active:opacity-90"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="photo-img"
                loading="lazy"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-royal/0 transition-colors duration-300 group-hover:bg-royal/35">
                <span className="font-body text-[0.65rem] tracking-widest text-white uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:text-xs">
                  View
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {!showAll && galleryImages.length > GALLERY_INITIAL_COUNT && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-6 text-center sm:mt-8"
          >
            <Button
              variant="outline"
              className="w-full sm:w-auto"
              onClick={() => setShowAll(true)}
            >
              View More ({galleryImages.length - GALLERY_INITIAL_COUNT} Photos)
            </Button>
          </motion.div>
        )}

        {showAll && (
          <p className="font-body mt-5 text-center text-sm text-royal/60">
            Showing all {galleryImages.length} photos
          </p>
        )}
      </div>

      <GalleryLightbox
        images={galleryImages}
        currentIndex={lightboxIndex}
        onClose={closeLightbox}
        onPrev={goToPrev}
        onNext={goToNext}
      />
    </section>
  )
}
