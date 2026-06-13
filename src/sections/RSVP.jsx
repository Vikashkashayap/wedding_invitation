import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'

const initialForm = {
  name: '',
  email: '',
  guestCount: '',
  message: '',
}

const inputClass = (hasError) =>
  `font-body w-full min-h-12 rounded-xl border bg-cream/50 px-4 py-3 text-base transition-colors focus:ring-2 focus:ring-gold focus:outline-none ${
    hasError ? 'border-red-400' : 'border-gold/20'
  }`

const validate = (form) => {
  const errors = {}

  if (!form.name.trim()) {
    errors.name = 'Name is required'
  } else if (form.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters'
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address'
  }

  if (!form.guestCount) {
    errors.guestCount = 'Guest count is required'
  } else if (Number(form.guestCount) < 1 || Number(form.guestCount) > 10) {
    errors.guestCount = 'Guest count must be between 1 and 10'
  }

  return errors
}

export default function RSVP() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setSubmitted(true)
    setForm(initialForm)
    setErrors({})
  }

  return (
    <section id="rsvp" className="section-padding bg-blush/40">
      <div className="mx-auto w-full max-w-2xl min-w-0 px-0">
        <SectionHeading subtitle="Join Us" title="RSVP" />

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-2xl bg-white p-6 text-center shadow-xl shadow-gold/10 sm:p-10"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/20 sm:h-16 sm:w-16">
                <span className="text-2xl sm:text-3xl">✓</span>
              </div>
              <h3 className="font-display mb-2 text-xl font-semibold text-gold-dark sm:text-2xl">
                Thank You!
              </h3>
              <p className="font-body text-base text-royal/80 sm:text-lg">
                Your RSVP has been received. We can&apos;t wait to celebrate with
                you!
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="font-body mt-5 min-h-11 text-gold underline hover:text-gold-dark sm:mt-6"
              >
                Submit another response
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="space-y-4 rounded-2xl bg-white p-4 shadow-xl shadow-gold/10 sm:space-y-5 sm:p-8 md:p-10"
              noValidate
            >
              <div>
                <label htmlFor="name" className="font-body mb-1.5 block text-xs tracking-wider text-royal/70 uppercase sm:mb-2 sm:text-sm">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  enterKeyHint="next"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass(errors.name)}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="font-body mb-1.5 block text-xs tracking-wider text-royal/70 uppercase sm:mb-2 sm:text-sm">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  inputMode="email"
                  enterKeyHint="next"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass(errors.email)}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="guestCount" className="font-body mb-1.5 block text-xs tracking-wider text-royal/70 uppercase sm:mb-2 sm:text-sm">
                  Number of Guests *
                </label>
                <select
                  id="guestCount"
                  name="guestCount"
                  value={form.guestCount}
                  onChange={handleChange}
                  className={inputClass(errors.guestCount)}
                >
                  <option value="">Select guest count</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
                {errors.guestCount && (
                  <p className="mt-1 text-sm text-red-500">{errors.guestCount}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="font-body mb-1.5 block text-xs tracking-wider text-royal/70 uppercase sm:mb-2 sm:text-sm">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  enterKeyHint="done"
                  className={`${inputClass(false)} resize-none`}
                  placeholder="Share your wishes with us..."
                />
              </div>

              <Button type="submit" variant="primary" className="w-full">
                Send RSVP
              </Button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
