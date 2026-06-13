import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { weddingData } from '../data/weddingData'
import useActiveSection from '../hooks/useActiveSection'

const navLinks = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'Story', href: '#story', id: 'story' },
  { label: 'Gallery', href: '#gallery', id: 'gallery' },
  { label: 'Events', href: '#events', id: 'events' },
  { label: 'Venue', href: '#venue', id: 'venue' },
  { label: 'Family', href: '#family', id: 'family' },
  { label: 'RSVP', href: '#rsvp', id: 'rsvp' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeSection = useActiveSection()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  const isActive = (id) => activeSection === id
  const solidDesktop = scrolled || mobileOpen

  const desktopLinkClass = (id) =>
    `font-body relative min-h-11 px-1 text-xs tracking-widest uppercase transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-gold after:transition-all xl:text-sm ${
      isActive(id)
        ? solidDesktop
          ? 'text-gold after:w-full'
          : 'text-gold-light after:w-full'
        : solidDesktop
          ? 'text-royal after:w-0 hover:text-gold hover:after:w-full'
          : 'text-white/90 after:w-0 hover:text-gold-light hover:after:w-full'
    }`

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 right-0 left-0 z-50 border-b transition-all duration-300 ${
        solidDesktop
          ? 'border-gold/15 bg-white/97 py-2 shadow-md shadow-maroon/5 backdrop-blur-md lg:py-2.5'
          : 'border-transparent bg-white/97 py-2 shadow-md shadow-maroon/5 backdrop-blur-md lg:bg-transparent lg:py-4 lg:shadow-none'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="relative z-[60] mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => handleNavClick('#home')}
          className={`font-display min-h-11 text-base font-semibold tracking-wide transition-colors sm:text-lg lg:text-2xl ${
            solidDesktop ? 'text-gold-dark lg:text-gold-dark' : 'text-gold-dark lg:text-white'
          }`}
        >
          {weddingData.groom.split(' ')[0]} & {weddingData.bride.split(' ')[0]}
        </button>

        <ul className="hidden items-center gap-3 lg:flex xl:gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className={desktopLinkClass(link.id)}
                aria-current={isActive(link.id) ? 'page' : undefined}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`flex min-h-11 min-w-11 items-center justify-center rounded-xl text-maroon transition-colors active:scale-95 active:bg-cream lg:hidden ${
            solidDesktop ? 'lg:text-royal' : 'lg:text-white'
          }`}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-royal/50 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute top-0 right-0 flex h-full w-[min(88vw,340px)] flex-col bg-white shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <div className="flex items-center justify-between border-b border-gold/20 px-4 py-3">
                <p className="font-display text-base font-semibold text-gold-dark">
                  Menu
                </p>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-11 min-w-11 items-center justify-center rounded-xl text-royal active:bg-cream"
                  aria-label="Close menu"
                >
                  <HiX size={22} />
                </button>
              </div>
              <ul className="flex flex-1 flex-col gap-1 overflow-y-auto px-2 py-3">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03 }}
                  >
                    <button
                      onClick={() => handleNavClick(link.href)}
                      aria-current={isActive(link.id) ? 'page' : undefined}
                      className={`font-body flex min-h-12 w-full items-center rounded-xl border-l-[3px] px-4 text-left text-sm tracking-widest uppercase transition-colors active:scale-[0.98] ${
                        isActive(link.id)
                          ? 'border-gold bg-cream text-maroon'
                          : 'border-transparent text-royal hover:bg-cream/70 active:bg-cream'
                      }`}
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
