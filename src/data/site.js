/* ==========================================================
   Central content file. Edit copy, contacts, images here.
   PLACEHOLDER markers = swap before going live.
   ========================================================== */

const u = (id, w = 1400) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

// PLACEHOLDER images (internet). <Img> falls back to picsum if a URL fails.
export const photos = {
  taj: u('1564507592333-c60657eea523'),
  jaipur: u('1477587458883-47145ed94245'),
  tiger: u('1561731216-c3a4d99437d5'),
  varanasi: u('1561361513-2d000a50f0dc'),
  udaipur: u('1595815771614-ade9d652a65d'),
  jodhpur: u('1599661046289-e31897846e41'),
  delhi: u('1587474260584-136574528ed5'),
  mumbai: u('1570168007204-dfb528c6958f'),
  khajuraho: u('1609920658906-8223bd289001'),
  bikaner: u('1524492412937-b28074a5d7da'),
  orchha: u('1548013146-72479768bada'),
  suite: u('1631049307264-da0ec9d70304'),
  dining: u('1414235077428-338989a2e8c0'),
  lounge: u('1470337458703-46ad1756a187'),
  train: u('1474487548417-781cb71495f3'),
};

export const contacts = [
  { id: 'toll', flags: ['us', 'ca'], label: 'Toll-free · USA & Canada', display: '1-855-952-6526', href: 'tel:+18559526526' },
  { id: 'uk', flags: ['gb'], label: 'United Kingdom', display: '+44 1753 201 201', href: 'tel:+441753201201' },
  { id: 'ca', flags: ['ca'], label: 'Canada', display: '1-416-619-7795', href: 'tel:+14166197795' },
  { id: 'au', flags: ['au'], label: 'Australia', display: '61-2-86078986', href: 'tel:+61286078986' },
  { id: 'wa', flags: [], whatsapp: true, label: 'WhatsApp', display: '+44 (0) 7739 716978', href: 'https://wa.me/447739716978' },
];

export const company = {
  address: ['25 Grangewood, Wexham, Slough,', 'South Bucks – SL3 6LP, United Kingdom'],
  emails: ['booking@maharajaexpress.com', 'rajiv@tailormadejourney.com'],
  otherSite: { label: 'Tailormade Journeys', href: 'https://www.tailormadejourney.com' }, // PLACEHOLDER url
};

export const nav = [
  { label: 'Journeys', to: '/journeys' },
  {
    label: 'The Train',
    to: '/train',
    children: [
      { label: 'Deluxe Cabin', to: '/train/deluxe-cabin' },
      { label: 'Junior Suite', to: '/train/junior-suite' },
      { label: 'Suite', to: '/train/suite' },
      { label: 'Presidential Suite', to: '/train/presidential-suite' },
      { label: 'Restaurant', to: '/train/restaurant' },
      { label: 'Lounge & Bar Cars', to: '/train/lounge-bar-cars' },
    ],
  },
  { label: 'Destinations', to: '/destinations' },
  { label: 'Fares', to: '/fares' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Offers', to: '/offers' },
  { label: 'Contact', to: '/contact' },
];

export const footerLinks = {
  quick: [
    { label: 'About Us', to: '/about' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Video Gallery', to: '/video-gallery' },
    { label: 'Fares / Prices', to: '/fares' },
    { label: 'Special Offers', to: '/offers' },
    { label: 'Feedback', to: '/feedback' },
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Terms And Conditions', to: '/terms' },
    { label: 'Contact Us', to: '/contact' },
  ],
  train: [
    ...nav[1].children,
    { label: 'Destinations', to: '/destinations' },
  ],
  other: [
    { label: 'Palace on Wheels', to: '/other-trains' },
    { label: 'Deccan Odyssey', to: '/other-trains' },
    { label: 'Golden Chariot', to: '/other-trains' },
  ],
};

export const journeys = [
  {
    slug: 'indian-splendour',
    title: 'The Indian Splendour',
    nights: 6,
    days: 7,
    img: photos.taj,
    route: ['Delhi', 'Agra', 'Ranthambore', 'Jaipur', 'Bikaner', 'Jodhpur', 'Udaipur', 'Mumbai'],
    blurb:
      'A full royal circuit from Delhi to Mumbai, with stops at the Taj Mahal, Ranthambore, Jaipur and Bikaner. Watch wild tigers, visit ornate palaces and ride through scenic deserts.',
    highlights: ['The Taj Mahal in Agra', 'Tiger safari in Ranthambore', 'Ornate palaces and desert landscapes'],
    // PLACEHOLDER departure dates
    departures: ['2026-12-05', '2027-01-09', '2027-02-13', '2027-03-13'],
  },
  {
    slug: 'heritage-of-india',
    title: 'The Heritage of India',
    nights: 6,
    days: 7,
    img: photos.udaipur,
    route: ['Mumbai', 'Udaipur', 'Jodhpur', 'Bikaner', 'Jaipur', 'Ranthambore', 'Agra', 'Delhi'],
    blurb:
      'Starting in Mumbai, this journey takes you to Udaipur, Jodhpur, Jaipur, Ranthambore and Agra, concluding in Delhi. Dive into the legacy of maharajas with elephant rides, fort visits and wildlife safaris.',
    highlights: ['Lakeside Udaipur and fortified Jodhpur', 'Fort visits across Rajasthan', 'Wildlife safaris in Ranthambore'],
    departures: ['2026-12-12', '2027-01-16', '2027-02-20', '2027-03-20'],
  },
  {
    slug: 'indian-panorama',
    title: 'The Indian Panorama',
    nights: 6,
    days: 7,
    img: photos.varanasi,
    route: ['Delhi', 'Jaipur', 'Ranthambore', 'Agra', 'Orchha', 'Khajuraho', 'Varanasi', 'Delhi'],
    blurb:
      'From Delhi to Varanasi, explore the temples of Khajuraho, the forts of Jaipur and take part in spiritual rituals on the Ganges. A perfect blend of mysticism and history.',
    highlights: ['Temples of Khajuraho', 'Ganga aarti ceremony in Varanasi', 'Forts of Jaipur'],
    departures: ['2026-12-19', '2027-01-23', '2027-02-27', '2027-03-27'],
  },
  {
    slug: 'treasures-of-india',
    title: 'The Treasures Of India',
    nights: 3,
    days: 4,
    img: photos.tiger,
    route: ['Delhi', 'Jaipur', 'Ranthambore', 'Agra', 'Delhi'],
    blurb:
      'Ideal for travellers short on time: Delhi, Agra, Ranthambore and Jaipur in four days. Visit the Taj Mahal, chase tigers in the wild and explore majestic forts.',
    highlights: ['The Taj Mahal', 'Tiger safari in Ranthambore', 'Majestic forts of Jaipur'],
    departures: ['2026-12-07', '2027-01-11', '2027-02-15', '2027-03-15'],
  },
];

export const cabins = [
  { slug: 'deluxe-cabin', name: 'Deluxe Cabin', count: 20, img: photos.suite, tag: 'The signature stay' },
  { slug: 'junior-suite', name: 'Junior Suite', count: 18, img: photos.suite, tag: 'Room to breathe' },
  { slug: 'suite', name: 'Suite', count: 4, img: photos.suite, tag: 'Generous and private' },
  {
    slug: 'presidential-suite',
    name: 'Presidential Suite',
    count: 1,
    img: photos.suite,
    tag: 'A whole carriage',
    note: 'A full carriage with dual bedrooms, a living area and a dining area.',
  },
];

export const cabinFeatures = ['Private bathroom', 'Wi-Fi', 'Air-conditioning', 'Personalised service'];

export const dining = [
  { name: 'Rang Mahal', kind: 'Dining car', text: 'Gourmet meals served in one of the two dining cars.' },
  { name: 'Mayur Mahal', kind: 'Dining car', text: 'The second dining car, for unhurried, elegant evenings.' },
  { name: 'Rajah Club', kind: 'Bar', text: 'Fine spirits in the train’s bar car.' },
  { name: 'Safari Lounge', kind: 'Lounge', text: 'A relaxed lounge to unwind after the day’s excursions.' },
  { name: 'Library', kind: 'Multilingual', text: 'A multilingual library, adding to the cultural charm.' },
];

export const amenities = [
  'Free Wi-Fi and individual climate control',
  'Spacious wardrobes and under-bed luggage space',
  'En-suite bathrooms with modern fittings',
  'Smoke detectors, CCTV and an onboard paramedic',
  'Filtered drinking water and a telephone dial system (with charges)',
];

export const experiences = [
  { icon: 'compass', text: 'Guided tours of UNESCO World Heritage Sites' },
  { icon: 'paw', text: 'Wildlife safaris in Ranthambore' },
  { icon: 'spark', text: 'Light and sound shows' },
  { icon: 'star', text: 'Traditional dance performances' },
  { icon: 'flame', text: 'Spiritual experiences like Ganga aarti ceremonies' },
];

export const stats = [
  { value: '23', label: 'Elegant coaches' },
  { value: '84', label: 'Guests, at most' },
  { value: '7×', label: 'World’s Leading Luxury Train' },
  { value: 'Oct–Apr', label: 'The seasonal journey' },
];

export const steps = [
  { title: 'Pick your travel dates', text: 'Decide when you want to travel. The train operates from October to April.' },
  { title: 'Select your journey', text: 'Choose one of the four routes. Each gives you a new side of India to explore.' },
  { title: 'Fill in the booking form', text: 'Enter your name, contact details, number of cabins needed and a few basic details.' },
  { title: 'Our agent takes it from here', text: 'Our agents will get in touch with you to finalise your booking.' },
];

export const faqs = [
  {
    q: 'When does the Maharajas’ Express run?',
    a: 'The train operates seasonally, from October to April every year.',
  },
  {
    q: 'How many journeys are available, and how long are they?',
    a: 'There are four routes: The Indian Splendour, The Heritage of India and The Indian Panorama (each 6 nights / 7 days), and The Treasures of India (3 nights / 4 days).',
  },
  {
    q: 'How many guests can the train carry?',
    a: 'The train has 23 coaches, including 14 guest carriages, and hosts up to 84 guests, so the experience stays personal.',
  },
  {
    q: 'What kinds of cabins are there?',
    a: 'There are 20 Deluxe Cabins, 18 Junior Suites, 4 Suites and 1 Presidential Suite, which occupies a full carriage with dual bedrooms plus living and dining areas. Every cabin has a private bathroom, Wi-Fi, air-conditioning and personalised service.',
  },
  {
    q: 'What is included on board and on the excursions?',
    a: 'Gourmet dining in the Rang Mahal and Mayur Mahal cars, the Rajah Club bar, the Safari Lounge and a multilingual library, plus guided tours of UNESCO World Heritage Sites, wildlife safaris in Ranthambore, light and sound shows and traditional performances. Your agent will confirm exact inclusions for your journey.',
  },
  {
    q: 'How do I book?',
    a: 'Choose your dates and journey, then fill in the booking form on this page or call or WhatsApp us. One of our agents will contact you to complete the booking.',
  },
  {
    q: 'Who operates the train, and who are you?',
    a: 'The Maharajas’ Express is operated by IRCTC. Personal Tours / Tailormade Journeys is the Passenger Sales Agent (PSA) – IRCTC affiliate and an authorised booking agent for the train.',
  },
  {
    q: 'Is the train safe and comfortable?',
    a: 'Yes. Every cabin has individual climate control, and the train carries smoke detectors, CCTV and an onboard paramedic.',
  },
];

// SAMPLE testimonials. Replace with real, permissioned reviews.
export const testimonials = [
  {
    quote: 'Every detail felt considered: the service, the suites and the excursions. We still talk about the dinners and the tiger safari.',
    name: 'Sample Guest',
    from: 'London, United Kingdom',
    journey: 'The Indian Splendour',
  },
  {
    quote: 'Waking up to a new palace every morning, without a single logistical worry. This is how India should be experienced.',
    name: 'Sample Guest',
    from: 'Toronto, Canada',
    journey: 'The Heritage of India',
  },
  {
    quote: 'The Ganga aarti at dusk was unforgettable, and the team looked after us like family throughout.',
    name: 'Sample Guest',
    from: 'Sydney, Australia',
    journey: 'The Indian Panorama',
  },
  {
    quote: 'Short on time but wanting the best of it: four days, the Taj, the tigers and total comfort. Perfect.',
    name: 'Sample Guest',
    from: 'New York, USA',
    journey: 'The Treasures of India',
  },
];

export const destinations = [
  { name: 'Delhi', img: photos.delhi, text: 'India’s capital, where Mughal monuments meet grand colonial avenues.' },
  { name: 'Agra', img: photos.taj, text: 'Home to the timeless Taj Mahal.' },
  { name: 'Ranthambore', img: photos.tiger, text: 'Wildlife safaris and the chance to watch wild tigers.' },
  { name: 'Jaipur', img: photos.jaipur, text: 'The Pink City of royal forts and ornate palaces.' },
  { name: 'Bikaner', img: photos.bikaner, text: 'A desert city of fortress-palaces and sweeping sands.' },
  { name: 'Jodhpur', img: photos.jodhpur, text: 'The blue city beneath a mighty hilltop fort.' },
  { name: 'Udaipur', img: photos.udaipur, text: 'Lakeside palaces in the city of lakes.' },
  { name: 'Mumbai', img: photos.mumbai, text: 'The gateway city on the Arabian Sea.' },
  { name: 'Orchha', img: photos.orchha, text: 'Riverside temples and palaces of a quieter, older India.' },
  { name: 'Khajuraho', img: photos.khajuraho, text: 'Celebrated temples of extraordinary sculpture.' },
  { name: 'Varanasi', img: photos.varanasi, text: 'India’s spiritual heart, famed for the evening Ganga aarti.' },
];

export const trainPages = {
  'deluxe-cabin': {
    title: 'Deluxe Cabin',
    eyebrow: '20 cabins on board',
    img: photos.suite,
    text: 'The most numerous category on the train, and still thoroughly private: a refined cabin with an en-suite bathroom, spacious wardrobes and under-bed luggage space.',
    bullets: [...cabinFeatures, 'Individual climate control', 'Spacious wardrobes and under-bed luggage space'],
  },
  'junior-suite': {
    title: 'Junior Suite',
    eyebrow: '18 suites on board',
    img: photos.suite,
    text: 'A step up in space and ease for guests who like a little more room on the long, scenic days between destinations.',
    bullets: [...cabinFeatures, 'Individual climate control', 'En-suite bathroom with modern fittings'],
  },
  suite: {
    title: 'Suite',
    eyebrow: '4 suites on board',
    img: photos.suite,
    text: 'One of only four suites on the train, offering exceptional privacy and the full level of Maharajas’ Express service.',
    bullets: [...cabinFeatures, 'Individual climate control', 'En-suite bathroom with modern fittings'],
  },
  'presidential-suite': {
    title: 'Presidential Suite',
    eyebrow: '1 suite · a full carriage',
    img: photos.suite,
    text: 'The pinnacle of the train: an entire carriage with dual bedrooms, a living area and a dining area, found nowhere else on board.',
    bullets: ['Dual bedrooms', 'Living area', 'Dining area', ...cabinFeatures],
  },
  restaurant: {
    title: 'Restaurant',
    eyebrow: 'Rang Mahal & Mayur Mahal',
    img: photos.dining,
    text: 'Gourmet meals are served in the Rang Mahal and Mayur Mahal dining cars, the heart of life on board.',
    bullets: ['Rang Mahal dining car', 'Mayur Mahal dining car', 'Gourmet cuisine', 'Filtered drinking water'],
  },
  'lounge-bar-cars': {
    title: 'Lounge & Bar Cars',
    eyebrow: 'Rajah Club · Safari Lounge',
    img: photos.lounge,
    text: 'Sip fine spirits at the Rajah Club bar or settle into the Safari Lounge. The train also carries a multilingual library for quiet hours.',
    bullets: ['Rajah Club bar', 'Safari Lounge', 'Multilingual library'],
  },
};

export const countries = [
  'United Kingdom', 'United States', 'Canada', 'Australia', 'New Zealand', 'Ireland', 'India', 'Germany', 'France',
  'Italy', 'Spain', 'Netherlands', 'Switzerland', 'Sweden', 'Norway', 'Denmark', 'Belgium', 'Austria', 'Singapore',
  'United Arab Emirates', 'South Africa', 'Japan', 'China', 'Brazil', 'Mexico', 'Other',
];

export const otherTrains = [
  { name: 'Palace on Wheels', region: 'Rajasthan', text: 'A heritage luxury train circuit through royal Rajasthan.' },
  { name: 'Deccan Odyssey', region: 'Maharashtra & beyond', text: 'A luxury train journey across western India’s varied landscapes.' },
  { name: 'Golden Chariot', region: 'South India', text: 'A luxury train through the culture and heritage of the south.' },
];
