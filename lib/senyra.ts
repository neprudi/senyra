export type MoodId =
  | 'comfort'
  | 'reward'
  | 'sensuality'
  | 'adventure'
  | 'connection'
  | 'escape'
  | 'play'
  | 'soft-indulgence';

export type ContextId =
  | 'solo'
  | 'date'
  | 'friends'
  | 'stay-home'
  | 'go-out'
  | 'quick-reset'
  | 'slow-evening'
  | 'special-night';

export type Experience = {
  slug: string;
  title: string;
  district: string;
  city: string;
  price: '$' | '$$' | '$$$';
  moodIds: MoodId[];
  contextIds: ContextId[];
  vibeTags: string[];
  fitLabel: string;
  description: string;
  bestFor: string[];
  idealMoment: string;
  atmosphere: string[];
  signatureDishes: string[];
  whyThisWorks: string;
  ritualSuggestion: string;
  palette: [string, string, string];
};

export const moods: Array<{
  id: MoodId;
  label: string;
  eyebrow: string;
  summary: string;
  description: string;
  accent: string;
}> = [
  {
    id: 'comfort',
    label: 'Comfort',
    eyebrow: 'Grounding',
    summary: 'Warmth, softness, and a quiet reset.',
    description: 'Chosen for the kind of night where your shoulders finally drop.',
    accent: 'from-[#927159] via-[#d4b999] to-[#f3eadf]'
  },
  {
    id: 'reward',
    label: 'Reward',
    eyebrow: 'Earned',
    summary: 'A polished yes after a long day.',
    description: 'For the moment when the week has finally been carried enough.',
    accent: 'from-[#7b5b45] via-[#bd9d78] to-[#f5e5d4]'
  },
  {
    id: 'sensuality',
    label: 'Sensuality',
    eyebrow: 'Velvet',
    summary: 'Dim light, texture, and deliberate pleasure.',
    description: 'A richer, slower lane with a little more temperature in the room.',
    accent: 'from-[#6a4d46] via-[#b48a73] to-[#efe2d5]'
  },
  {
    id: 'adventure',
    label: 'Adventure',
    eyebrow: 'Spark',
    summary: 'Unexpected textures, bright edges, newness.',
    description: 'When routine feels too small and curiosity deserves dinner.',
    accent: 'from-[#566149] via-[#9aa46f] to-[#ebe6cf]'
  },
  {
    id: 'connection',
    label: 'Connection',
    eyebrow: 'Together',
    summary: 'Shared plates, generous pacing, easy conversation.',
    description: 'The mood for being fully with someone without trying too hard.',
    accent: 'from-[#5c6367] via-[#9aa0a3] to-[#e7e3dc]'
  },
  {
    id: 'escape',
    label: 'Escape',
    eyebrow: 'Elsewhere',
    summary: 'A change of atmosphere without leaving the city.',
    description: 'For evenings when you want the world to feel farther away.',
    accent: 'from-[#66705d] via-[#a8b49e] to-[#eef0e6]'
  },
  {
    id: 'play',
    label: 'Play',
    eyebrow: 'Light',
    summary: 'A little irreverence, a little surprise.',
    description: 'For the nights that should feel easy, social, and quietly fun.',
    accent: 'from-[#8b6b4d] via-[#d0b08e] to-[#f7e7d7]'
  },
  {
    id: 'soft-indulgence',
    label: 'Soft Indulgence',
    eyebrow: 'Silk',
    summary: 'Tender richness with no rush at all.',
    description: 'A small luxury that never feels loud.',
    accent: 'from-[#7f7466] via-[#c1b29e] to-[#f3eee6]'
  }
];

export const contexts: Array<{
  id: ContextId;
  label: string;
  summary: string;
}> = [
  { id: 'solo', label: 'Solo', summary: 'For a private reset or a quiet treat.' },
  { id: 'date', label: 'Date', summary: 'For chemistry, ease, and a little glow.' },
  { id: 'friends', label: 'With friends', summary: 'For generous plates and shared momentum.' },
  { id: 'stay-home', label: 'Stay home', summary: 'For a soft night in with no friction.' },
  { id: 'go-out', label: 'Go out', summary: 'For the full atmosphere and a change of scene.' },
  { id: 'quick-reset', label: 'Quick reset', summary: 'For a fast sensory turn of the page.' },
  { id: 'slow-evening', label: 'Slow evening', summary: 'For the long exhale after the day.' },
  { id: 'special-night', label: 'Special night', summary: 'For a memory that should feel marked.' }
];

export const onboardingSlides = [
  {
    title: 'Senyra understands your mood.',
    copy: 'Choose how you want to feel tonight. Senyra starts with feeling, not filters.',
    kicker: 'New category'
  },
  {
    title: 'Food matched to your mood.',
    copy: 'Senyra translates emotion into places, dishes, and rituals that feel specific and alive.',
    kicker: 'Emotion to intention'
  },
  {
    title: 'Not what to eat. How you want to feel.',
    copy: 'The result is an editorial, sensory guide to the kind of night that stays with you.',
    kicker: 'Experience design'
  },
  {
    title: 'A small pleasure can reset everything.',
    copy: 'Senyra curated this for a softer evening. Save the nights that fit you.',
    kicker: 'Built to feel real'
  }
];

export const experiences: Experience[] = [
  {
    slug: 'ember-table',
    title: 'Ember Table',
    district: 'West Village',
    city: 'New York',
    price: '$$',
    moodIds: ['comfort', 'soft-indulgence', 'escape'],
    contextIds: ['solo', 'stay-home', 'slow-evening', 'quick-reset'],
    vibeTags: ['warm', 'quiet', 'dim'],
    fitLabel: 'Chosen for warmth and ease.',
    description: 'Warm, quiet, slightly dim - made for slowing down after a long day.',
    bestFor: ['a reset after work', 'a private dinner', 'a low-lift comfort night'],
    idealMoment: 'Arrive right as the city starts to soften.',
    atmosphere: ['low amber light', 'soft service', 'lingering pacing'],
    signatureDishes: ['buttered rice with herbs', 'slow-roasted chicken', 'olive oil cake'],
    whyThisWorks:
      'The room keeps everything small and grounded: the noise falls away, textures deepen, and the whole meal feels like a soft landing.',
    ritualSuggestion: 'Order one thing you know you will love, then one thing you have never tried.',
    palette: ['#7a5b45', '#b48b63', '#f5eadb']
  },
  {
    slug: 'velvet-hour',
    title: 'Velvet Hour',
    district: 'SoHo',
    city: 'New York',
    price: '$$$',
    moodIds: ['sensuality', 'connection'],
    contextIds: ['date', 'special-night', 'go-out'],
    vibeTags: ['velvet', 'intimate', 'glow'],
    fitLabel: 'Made for proximity and atmosphere.',
    description: 'An intimate room with a polished edge and a slower pulse.',
    bestFor: ['date night', 'an anniversary', 'a night that should feel marked'],
    idealMoment: 'Book the table just before twilight.',
    atmosphere: ['low light', 'close tables', 'calm confidence'],
    signatureDishes: ['charred prawns', 'hand-cut pasta', 'dark chocolate ganache'],
    whyThisWorks:
      'The room asks you to lean in. Rich textures, a measured pace, and an atmosphere that amplifies touch, attention, and conversation.',
    ritualSuggestion: 'Start with a shared plate and let the order follow the energy, not the rules.',
    palette: ['#604843', '#9a6f61', '#efd9c7']
  },
  {
    slug: 'olive-drift',
    title: 'Olive Drift',
    district: 'Cobble Hill',
    city: 'Brooklyn',
    price: '$$',
    moodIds: ['escape', 'soft-indulgence', 'comfort'],
    contextIds: ['solo', 'stay-home', 'quick-reset', 'slow-evening'],
    vibeTags: ['green', 'breezy', 'quiet'],
    fitLabel: 'A reset with a cleaner horizon.',
    description: 'Fresh, restrained, and quietly transporting without becoming precious.',
    bestFor: ['a midweek reset', 'a solo lunch', 'an unhurried night in'],
    idealMoment: 'Go when you want the day to feel more spacious.',
    atmosphere: ['olive tones', 'airiness', 'soft acoustics'],
    signatureDishes: ['market greens', 'citrus fish', 'yogurt tart'],
    whyThisWorks:
      'It clears the palate and the mind at the same time. The palette feels clean, but the food still lands with comfort and care.',
    ritualSuggestion: 'Choose the lightest thing on the menu and add one beautiful, unneeded extra.',
    palette: ['#6e7a57', '#a9b58b', '#eef1e6']
  },
  {
    slug: 'second-wind',
    title: 'Second Wind',
    district: 'Williamsburg',
    city: 'New York',
    price: '$$$',
    moodIds: ['reward', 'play', 'connection'],
    contextIds: ['friends', 'go-out', 'special-night'],
    vibeTags: ['lively', 'shareable', 'spark'],
    fitLabel: 'For group energy that still feels elevated.',
    description: 'A lively room built for the feeling of being out exactly when you should be.',
    bestFor: ['a Friday group dinner', 'a celebration', 'the one friend night that matters'],
    idealMoment: 'Arrive hungry enough to share everything.',
    atmosphere: ['buzz without chaos', 'rounded corners', 'modulated energy'],
    signatureDishes: ['crispy potatoes', 'tuna crudo', 'salted caramel parfait'],
    whyThisWorks:
      'The menu keeps the room moving, but the atmosphere stays composed. It gives group energy a premium frame.',
    ritualSuggestion: 'Let one person order for the table, then keep one wildcard dish for the end.',
    palette: ['#65504a', '#a07b63', '#f2e4d7']
  },
  {
    slug: 'afterglow-bento',
    title: 'Afterglow Bento',
    district: 'Dumbo',
    city: 'Brooklyn',
    price: '$',
    moodIds: ['reward', 'soft-indulgence'],
    contextIds: ['solo', 'quick-reset', 'stay-home'],
    vibeTags: ['compact', 'precise', 'satisfying'],
    fitLabel: 'A small reward that still feels complete.',
    description: 'Precise, beautiful, and designed to feel restorative rather than heavy.',
    bestFor: ['a 20-minute reset', 'one perfect lunch', 'a small win after a long day'],
    idealMoment: 'When you want a clean line between before and after.',
    atmosphere: ['orderly', 'quietly modern', 'intentional'],
    signatureDishes: ['miso eggplant', 'crispy rice', 'sesame soft serve'],
    whyThisWorks:
      'Its power comes from proportion. Nothing is excessive, everything is just enough, and that restraint makes the pleasure feel sharper.',
    ritualSuggestion: 'Take the first bite slowly, without your phone in hand.',
    palette: ['#7d6a53', '#b79a73', '#f4ead7']
  },
  {
    slug: 'night-market-curve',
    title: 'Night Market Curve',
    district: 'Chinatown',
    city: 'New York',
    price: '$$',
    moodIds: ['adventure', 'play', 'escape'],
    contextIds: ['friends', 'go-out', 'special-night'],
    vibeTags: ['bright', 'spiky', 'lively'],
    fitLabel: 'Built for curiosity and momentum.',
    description: 'Sharp, lively, and full of texture - the kind of night that wakes you up.',
    bestFor: ['trying something new', 'a spontaneous route', 'friends with appetite'],
    idealMoment: 'Best when the evening still has room to move.',
    atmosphere: ['lateral movement', 'multiple textures', 'unfolding course by course'],
    signatureDishes: ['hand-pulled noodles', 'chili dumplings', 'black sesame custard'],
    whyThisWorks:
      'A sense of motion keeps the whole experience charged. Every dish feels like a small turn, which makes the evening feel adventurous without becoming chaotic.',
    ritualSuggestion: 'Choose one familiar thing and one thing you would normally skip.',
    palette: ['#5f6850', '#97a26d', '#eef0df']
  },
  {
    slug: 'soft-archive',
    title: 'Soft Archive',
    district: 'Tribeca',
    city: 'New York',
    price: '$$$',
    moodIds: ['connection', 'escape', 'soft-indulgence'],
    contextIds: ['date', 'slow-evening', 'special-night'],
    vibeTags: ['quiet-luxury', 'editorial', 'layered'],
    fitLabel: 'For nights that should feel stored in memory.',
    description: 'An editorial room where conversation, texture, and pacing are all doing quiet work.',
    bestFor: ['a meaningful date', 'a reflective evening', 'the kind of night you remember'],
    idealMoment: 'Reserve for the hour when you are not rushing to anywhere else.',
    atmosphere: ['library hush', 'waxed wood', 'slow service'],
    signatureDishes: ['truffle toast', 'poached pear', 'aged cheese plate'],
    whyThisWorks:
      'The room behaves like a carefully edited note to yourself: calm, rich, and uncluttered. It gives the evening a feeling of permanence.',
    ritualSuggestion: 'End with something sweet and one last quiet conversation.',
    palette: ['#61554c', '#9a8a79', '#f1e9e0']
  },
  {
    slug: 'sun-wash-cafe',
    title: 'Sun-Wash Cafe',
    district: 'Greenpoint',
    city: 'Brooklyn',
    price: '$',
    moodIds: ['play', 'escape', 'comfort'],
    contextIds: ['solo', 'friends', 'quick-reset', 'stay-home'],
    vibeTags: ['bright', 'airy', 'easy'],
    fitLabel: 'For a small bright lift.',
    description: 'A bright, airy place that feels easy from the first five minutes.',
    bestFor: ['late brunch', 'a gentle catch-up', 'a soft reset'],
    idealMoment: 'Best in the daylight when the room can do the work for you.',
    atmosphere: ['sunlight', 'breathing room', 'relaxed tempo'],
    signatureDishes: ['cardamom bun', 'tomato tartine', 'honey yogurt bowl'],
    whyThisWorks:
      'It keeps the stakes low and the pleasure high. That balance is what makes it such a reliable reset.',
    ritualSuggestion: 'Stay for one more coffee than you planned.',
    palette: ['#9a7d5d', '#d2b594', '#f7efe4']
  }
];

export const collectionLabels = [
  {
    id: 'soft-evenings',
    title: 'For soft evenings',
    description: 'The places that make the world feel less sharp.'
  },
  {
    id: 'comfort',
    title: 'When I need comfort',
    description: 'A dependable set for staying grounded.'
  },
  {
    id: 'date',
    title: 'Date ideas',
    description: 'Moments that feel intimate without effort.'
  },
  {
    id: 'new',
    title: 'Something new',
    description: 'For curiosity, contrast, and a little edge.'
  }
] as const;

export const profileArchetypes = {
  comfort: {
    label: 'Comfort-driven',
    summary: 'You choose warmth, familiarity, and emotional ease.',
    tagLine: 'Small luxuries matter most when the room feels safe.',
    traits: ['grounding', 'repeatable', 'soft tempo']
  },
  explorer: {
    label: 'Explorer',
    summary: 'You want novelty with enough structure to enjoy it fully.',
    tagLine: 'You like your pleasure to surprise you a little.',
    traits: ['curious', 'restless', 'textured']
  },
  sensual: {
    label: 'Sensory minimalist',
    summary: 'You like rich atmosphere with very little noise.',
    tagLine: 'The best details are often the quietest ones.',
    traits: ['editorial', 'refined', 'intentional']
  },
  social: {
    label: 'Social indulgent',
    summary: 'You enjoy the shared energy of a room when it still feels elevated.',
    tagLine: 'Your best nights usually have an audience of friends or one perfect person.',
    traits: ['generous', 'easygoing', 'magnetic']
  }
} as const;

export const getExperience = (slug: string) => experiences.find((item) => item.slug === slug);

export const getMood = (id: string | null | undefined) => moods.find((item) => item.id === id) ?? moods[0];

export const getContext = (id: string | null | undefined) =>
  contexts.find((item) => item.id === id) ?? contexts[0];

export const getProfileArchetype = (moodId: MoodId) => {
  if (['comfort', 'soft-indulgence', 'escape'].includes(moodId)) {
    return profileArchetypes.comfort;
  }
  if (['adventure', 'play'].includes(moodId)) {
    return profileArchetypes.explorer;
  }
  if (['sensuality'].includes(moodId)) {
    return profileArchetypes.sensual;
  }
  return profileArchetypes.social;
};

const scoreExperience = (experience: Experience, moodId: MoodId, contextId: ContextId) => {
  let score = 0;
  if (experience.moodIds.includes(moodId)) score += 4;
  if (experience.contextIds.includes(contextId)) score += 3;
  if (experience.moodIds.some((id) => id === moodId)) score += 1;
  return score;
};

export const getDiscoveryFeed = (moodId: MoodId, contextId: ContextId) =>
  [...experiences]
    .sort((a, b) => scoreExperience(b, moodId, contextId) - scoreExperience(a, moodId, contextId))
    .slice(0, 6);
