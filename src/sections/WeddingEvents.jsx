import SectionHeading from '../components/SectionHeading'
import EventCard from '../components/EventCard'
import { weddingEvents } from '../data/events'

export default function WeddingEvents() {
  return (
    <section id="events" className="section-padding bg-cream">
      <div className="mx-auto max-w-7xl">
        <SectionHeading subtitle="Celebrations" title="Wedding Events" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {weddingEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
