// Mock data: sample spots across Maharashtra with example YouTube video IDs (public).
// Thumbnails use YouTube's thumbnail URL pattern.
const mkThumb = id => `https://img.youtube.com/vi/${id}/mqdefault.jpg`

const spots = [
  {
    id: 1,
    name: 'Vada Pav Street — Girgaon',
    city: 'Mumbai',
    lat: 18.9546,
    lng: 72.8200,
    videoId: 'ScMzIvxBSi4',
    thumbnail: mkThumb('ScMzIvxBSi4'),
    channel: 'MarathiFoodVlog',
    description: 'Classic Mumbai vada pav stall featured by a Marathi food vlogger.'
  },
  {
    id: 2,
    name: 'Misal Pav — Shaniwar Wada Area',
    city: 'Pune',
    lat: 18.5204,
    lng: 73.8567,
    videoId: 'bTqVqk7FSmY',
    thumbnail: mkThumb('bTqVqk7FSmY'),
    channel: 'PuneBitesMarathi',
    description: 'Spicy misal pav in Pune, street-style. Short clip from the vlog.'
  },
  {
    id: 3,
    name: 'Saoji Cuisine — Old City',
    city: 'Nagpur',
    lat: 21.1458,
    lng: 79.0882,
    videoId: 'dQw4w9WgXcQ',
    thumbnail: mkThumb('dQw4w9WgXcQ'),
    channel: 'NagpurFoodWalks',
    description: 'Rich Saoji flavors demo in Nagpur.'
  },
  {
    id: 4,
    name: 'Kombdi Vade — Kolhapur Eatery',
    city: 'Kolhapur',
    lat: 16.7043,
    lng: 74.2444,
    videoId: 'kXYiU_JCYtU',
    thumbnail: mkThumb('kXYiU_JCYtU'),
    channel: 'KolhapurFlavors',
    description: 'Traditional Kolhapuri thali and Kombdi Vade.'
  },
  {
    id: 5,
    name: 'Seafood Thali — Ratnagiri',
    city: 'Ratnagiri',
    lat: 16.9902,
    lng: 73.3120,
    videoId: '3JZ_D3ELwOQ',
    thumbnail: mkThumb('3JZ_D3ELwOQ'),
    channel: 'KonkanCravings',
    description: 'Konkan seafood specialties and sea-view eats.'
  },
  {
    id: 6,
    name: 'Street Sweets — Nashik Bazaar',
    city: 'Nashik',
    lat: 19.9975,
    lng: 73.7898,
    videoId: 'fJ9rUzIMcZQ',
    thumbnail: mkThumb('fJ9rUzIMcZQ'),
    channel: 'NashikTastes',
    description: 'Sweet shops and local special desserts.'
  }
]

export default spots
