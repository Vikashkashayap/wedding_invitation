import { useState, useEffect } from 'react'
import SectionHeading from '../components/SectionHeading'
import CountdownCard from '../components/CountdownCard'
import { weddingData } from '../data/weddingData'

function getTimeRemaining(targetDate) {
  const total = new Date(targetDate).getTime() - Date.now()
  if (total <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }
  return {
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / (1000 * 60)) % 60),
    seconds: Math.floor((total / 1000) % 60),
  }
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(weddingData.weddingDate))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining(weddingData.weddingDate))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const units = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' },
  ]

  return (
    <section id="countdown" className="section-padding bg-cream">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          subtitle="11 December 2026 — Friday"
          title="Counting Down to Forever"
        />
        <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-5 lg:gap-6">
          {units.map((unit, i) => (
            <CountdownCard
              key={unit.label}
              value={unit.value}
              label={unit.label}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
