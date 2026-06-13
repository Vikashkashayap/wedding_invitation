import Navbar from './components/Navbar'
import FlowerPetals from './components/FlowerPetals'
import Hero from './sections/Hero'
import Countdown from './sections/Countdown'
import CoupleStory from './sections/CoupleStory'
import Gallery from './sections/Gallery'
import WeddingEvents from './sections/WeddingEvents'
import VideoSection from './sections/VideoSection'
import Venue from './sections/Venue'
import FamilyMembers from './sections/FamilyMembers'
import RSVP from './sections/RSVP'
import GiftSection from './sections/GiftSection'
import Footer from './sections/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <FlowerPetals />
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <Countdown />
        <CoupleStory />
        <Gallery />
        <WeddingEvents />
        <VideoSection />
        <Venue />
        <FamilyMembers />
        <RSVP />
        <GiftSection />
      </main>
      <Footer />
    </div>
  )
}
