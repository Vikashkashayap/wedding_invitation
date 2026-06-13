import { motion } from 'framer-motion'
import { weddingData } from '../data/weddingData'
import ScrollIndicator from '../components/ScrollIndicator'
import Button from '../components/Button'
import HeroSlider from '../components/HeroSlider'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.08 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-maroon-dark pt-14 lg:flex lg:items-end lg:justify-center lg:pt-24"
    >
      {/* Mobile: image panel on top | Desktop: full-screen background */}
      <div className="relative h-[44svh] min-h-[240px] w-full shrink-0 overflow-hidden lg:absolute lg:inset-0 lg:h-full lg:shrink">
        <HeroSlider dotClassName="bottom-3 lg:bottom-24" />
        <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-maroon-dark to-transparent lg:hidden" />
      </div>

      {/* Desktop overlay gradients */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[55%] bg-gradient-to-t from-maroon-dark via-maroon/85 to-transparent lg:block" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[40%] bg-gradient-to-t from-black/55 to-transparent lg:block" />

      {/* Mobile: text below | Desktop: centered overlay at bottom */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex w-full flex-1 flex-col justify-center px-4 py-5 text-center lg:absolute lg:bottom-0 lg:left-1/2 lg:max-w-4xl lg:flex-none lg:-translate-x-1/2 lg:justify-end lg:px-6 lg:py-0 lg:pb-28"
      >
        <motion.p
          variants={itemVariants}
          className="hero-text-shadow font-body mb-1 text-[0.6rem] tracking-[0.28em] text-gold-light uppercase sm:text-xs"
        >
          Together with their families
        </motion.p>

        <motion.div variants={itemVariants} className="mb-2 lg:mb-4">
          <h1 className="hero-text-shadow font-display mx-auto max-w-[20ch] text-[clamp(1.45rem,6vw,1.9rem)] font-bold leading-tight text-white sm:text-5xl lg:max-w-none lg:text-6xl">
            {weddingData.groom}
          </h1>
          <motion.span
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            className="hero-text-shadow font-display my-0.5 block text-xl text-gold-light sm:my-1 sm:text-4xl"
          >
            &
          </motion.span>
          <h1 className="hero-text-shadow font-display mx-auto max-w-[20ch] text-[clamp(1.45rem,6vw,1.9rem)] font-bold leading-tight text-white sm:text-5xl lg:max-w-none lg:text-6xl">
            {weddingData.bride}
          </h1>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="hero-text-shadow font-body mx-auto mb-3 hidden max-w-lg text-pretty text-sm leading-relaxed text-white/90 sm:mb-4 sm:block sm:text-base lg:mb-6"
        >
          cordially invite you to celebrate their wedding ceremony and bless
          them as they begin a beautiful new chapter of life together.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="hero-text-shadow mb-3 flex flex-col items-center gap-2 sm:mb-4 sm:flex-row sm:justify-center sm:gap-6 lg:gap-10"
        >
          <div className="text-center">
            <p className="font-body text-[0.6rem] tracking-[0.25em] text-gold-light uppercase sm:text-xs">
              Wedding Date
            </p>
            <p className="font-display mt-0.5 text-base font-semibold text-white sm:text-2xl lg:text-3xl">
              {weddingData.displayDate}
            </p>
            <p className="font-body text-xs text-gold-light sm:text-base">{weddingData.displayDay}</p>
          </div>

          <div className="hidden h-10 w-px bg-gold/35 sm:block" />

          <div className="text-center">
            <p className="font-body text-[0.6rem] tracking-[0.25em] text-gold-light uppercase sm:text-xs">
              Venue
            </p>
            <p className="font-body mx-auto mt-0.5 max-w-[30ch] text-pretty text-xs text-white lg:hidden">
              {weddingData.venueShort}
            </p>
            <p className="font-body mx-auto mt-0.5 hidden max-w-md text-pretty text-sm text-white sm:block lg:text-base">
              {weddingData.venue}
            </p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.p
            animate={{ opacity: [0.85, 1, 0.85] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="hero-text-shadow font-display mb-3 text-base tracking-[0.1em] text-gold-light italic sm:mb-4 sm:text-xl"
          >
            You&apos;re Invited
          </motion.p>
          <Button
            variant="primary"
            className="w-full min-h-12 max-w-sm text-sm shadow-lg shadow-black/30 sm:max-w-xs sm:text-base lg:w-auto lg:max-w-none"
            onClick={() =>
              document.querySelector('#countdown')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Join Our Celebration
          </Button>
        </motion.div>
      </motion.div>

      <ScrollIndicator />
    </section>
  )
}
