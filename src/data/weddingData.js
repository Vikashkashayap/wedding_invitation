import { photos } from './photos'

export const weddingData = {
  bride: 'Madhu Gupta',
  groom: 'Prakash Gupta',
  familyName: 'Gupta Family',
  weddingDate: '2026-12-11T18:00:00',
  displayDate: '11 December 2026',
  displayDay: 'Friday',
  venue: 'Siddhi Marriage Hall, Barhaj, Deoria, Uttar Pradesh',
  venueShort: 'Siddhi Marriage Hall · Barhaj, Deoria',
  venueFull:
    'Siddhi Marriage Hall, Paina Road, Near Block Barhaj, Barhaj, Deoria, Uttar Pradesh, India',
  hashtags: ['#PrakashWedsMadhu', '#GuptaWedding2026'],
  videoUrl: null,
  mapsEmbedUrl:
    'https://maps.google.com/maps?q=Siddhi+Marriage+Hall+Barhaj+Deoria+Uttar+Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed',
  mapsDirectionsUrl:
    'https://maps.google.com/?q=Siddhi+Marriage+Hall+Paina+Road+Barhaj+Deoria+Uttar+Pradesh',
  heroImage: photos.hero,
  socialLinks: [
    { platform: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
    { platform: 'Facebook', url: 'https://facebook.com', icon: 'facebook' },
    { platform: 'WhatsApp', url: 'https://wa.me/', icon: 'whatsapp' },
  ],
}

export const coupleInfo = {
  groom: {
    name: 'Prakash Gupta',
    father: 'Ramdatta Gupta',
    mother: 'Nirmala Devi',
    photo: photos.groom,
  },
  bride: {
    name: 'Madhu Gupta',
    father: 'Harilal Gupta',
    mother: 'Munni Devi',
    photo: photos.bride,
  },
}
