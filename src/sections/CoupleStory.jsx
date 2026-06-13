import SectionHeading from '../components/SectionHeading'
import TimelineItem from '../components/TimelineItem'
import { storyTimeline } from '../data/story'

export default function CoupleStory() {
  return (
    <section id="story" className="section-padding bg-white">
      <div className="mx-auto max-w-5xl">
        <SectionHeading subtitle="Prakash & Madhu" title="Our Love Story" />

        <div className="relative space-y-12 md:space-y-16">
          <div className="absolute top-0 bottom-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-gold/20 via-gold to-gold/20 md:block" />

          {storyTimeline.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={index}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
