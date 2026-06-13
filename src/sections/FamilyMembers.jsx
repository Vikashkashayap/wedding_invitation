import SectionHeading from '../components/SectionHeading'
import FamilyCard from '../components/FamilyCard'
import { familyMembers } from '../data/family'
import { weddingData } from '../data/weddingData'

export default function FamilyMembers() {
  return (
    <section id="family" className="section-padding bg-cream-dark">
      <div className="mx-auto max-w-7xl">
        <SectionHeading subtitle={weddingData.familyName} title="Meet Our Families" />

        <div className="space-y-8 sm:space-y-14">
          {[familyMembers.groom, familyMembers.bride].map((family) => (
            <div key={family.title}>
              <h3 className="font-display mb-4 text-center text-lg font-semibold text-gold-dark sm:mb-6 sm:text-2xl">
                {family.title}
              </h3>

              <p className="font-body mb-4 text-center text-xs tracking-widest text-gold-dark uppercase sm:mb-5 sm:text-sm">
                Parents
              </p>
              <div className="mx-auto mb-6 grid max-w-2xl grid-cols-1 gap-3 min-[360px]:grid-cols-2 sm:mb-8 sm:gap-5">
                {family.parents.map((member, index) => (
                  <FamilyCard key={member.id} member={member} index={index} />
                ))}
              </div>

              {family.members.length > 0 && (
                <>
                  <p className="font-body mb-4 text-center text-xs tracking-widest text-gold-dark uppercase sm:mb-5 sm:text-sm">
                    {family.title.includes('Groom')
                      ? 'Brothers & Family Members'
                      : 'Brother'}
                  </p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {family.members.map((member, index) => (
                      <FamilyCard key={member.id} member={member} index={index} />
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
