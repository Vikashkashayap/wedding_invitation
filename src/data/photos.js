export const photos = {
  hero: '/photos/hero.png',
  groom: '/photos/groom.png',
  bride: '/photos/bride.png',
}

/** Hero slider — couple + bride/groom portraits only (no group/ceremony shots) */
const faceSafe = {
  position: '50% 15%',
  mobilePosition: '50% top',
}

export const heroSlides = [
  { src: photos.hero, position: '50% top', mobilePosition: '50% top' },
  { src: photos.groom, position: '50% top', mobilePosition: '50% top' },
  { src: photos.bride, position: '50% top', mobilePosition: '50% top' },
  { src: '/photos/gallery-1.png', position: '50% top', mobilePosition: '50% top' },
  { src: '/photos/gallery-3.png', ...faceSafe },
  { src: '/photos/gallery-4.png', ...faceSafe },
  { src: '/photos/gallery-6.png', position: '50% 18%', mobilePosition: '50% top' },
  { src: '/photos/gallery-9.png', ...faceSafe },
  { src: '/photos/gallery-11.png', ...faceSafe },
  { src: '/photos/gallery-12.png', position: '50% top', mobilePosition: '50% top' },
  { src: '/photos/gallery-14.png', position: '50% top', mobilePosition: '50% top' },
]

const galleryAlts = [
  'Engagement Celebration',
  'Beautiful Moments',
  'Just Engaged',
  'Couple Portrait',
  'Wedding Bouquet',
  'Royal Wedding Sofa',
  'Ceremony Rituals',
  'Hands Joined in Love',
  'Walking Together',
  'Red Carpet Moment',
  'Holding Hands',
  'Bridal Portrait',
  'Traditional Look',
  'Just Married',
  'Wedding Rituals',
]

const buildGallery = () => {
  const images = [
    { id: 'hero', src: photos.hero, alt: 'Prakash & Madhu — Wedding Day' },
    { id: 'groom', src: photos.groom, alt: 'Prakash Gupta — The Groom' },
    { id: 'bride', src: photos.bride, alt: 'Madhu Gupta — The Bride' },
  ]

  for (let i = 1; i <= 53; i++) {
    images.push({
      id: `g${i}`,
      src: `/photos/gallery-${i}.png`,
      alt: galleryAlts[i - 1] || `Wedding Memory ${i}`,
    })
  }

  return images
}

export const galleryImages = buildGallery()

export const GALLERY_INITIAL_COUNT = 9
