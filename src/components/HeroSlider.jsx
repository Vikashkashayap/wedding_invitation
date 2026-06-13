import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { heroSlides } from '../data/photos'

export default function HeroSlider({ dotClassName = '' }) {
  const [current, setCurrent] = useState(0)
  const [failed, setFailed] = useState({})
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const update = () => setIsDesktop(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const active = heroSlides[current]

  return (
    <div className="absolute inset-0 overflow-hidden bg-maroon-dark">
      <AnimatePresence mode="wait">
        {!failed[active.src] && (
          <motion.img
            key={active.src}
            src={active.src}
            alt="Prakash & Madhu wedding"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            onError={() => setFailed((f) => ({ ...f, [active.src]: true }))}
            className={`absolute inset-0 h-full w-full ${
              isDesktop ? 'hero-slide-cover' : 'hero-slide-img'
            }`}
            style={
              isDesktop
                ? { objectPosition: active.position }
                : { objectPosition: active.mobilePosition || active.position }
            }
          />
        )}
      </AnimatePresence>

      {failed[active.src] && <div className="hero-bg absolute inset-0" />}

      <div
        className={`absolute left-1/2 z-20 flex -translate-x-1/2 gap-1.5 sm:gap-2 ${dotClassName}`}
      >
        {heroSlides.map((slide, i) => (
          <button
            key={slide.src}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 sm:h-2 ${
              i === current ? 'w-5 bg-gold-light sm:w-6' : 'w-1.5 bg-white/50 sm:w-2'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
