import { motion, AnimatePresence } from 'framer-motion'
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi'

export default function GalleryLightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) {
  if (currentIndex === null) return null

  const current = images[currentIndex]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-royal/95 p-2 backdrop-blur-sm sm:p-4"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-[max(0.75rem,env(safe-area-inset-top))] right-3 z-10 flex min-h-11 min-w-11 items-center justify-center rounded-full bg-white/15 text-white active:bg-white/25 sm:right-4"
          aria-label="Close lightbox"
        >
          <HiX size={22} />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
          className="absolute top-1/2 left-2 z-10 flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white active:bg-white/25 sm:left-4"
          aria-label="Previous image"
        >
          <HiChevronLeft size={22} />
        </button>

        <motion.div
          key={currentIndex}
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.96, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          className="relative w-full max-w-5xl px-11 sm:px-14"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={current.src}
            alt={current.alt}
            className="mx-auto max-h-[72vh] w-auto max-w-full rounded-lg object-contain shadow-2xl sm:max-h-[85vh]"
            decoding="async"
          />
          <p className="font-body mt-2 text-center text-xs text-white/80 sm:mt-3 sm:text-sm">
            {currentIndex + 1} / {images.length}
          </p>
        </motion.div>

        <button
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
          className="absolute top-1/2 right-2 z-10 flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white active:bg-white/25 sm:right-4"
          aria-label="Next image"
        >
          <HiChevronRight size={22} />
        </button>
      </motion.div>
    </AnimatePresence>
  )
}
