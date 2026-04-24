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
  placeName: string;
  district: string;
  city: string;
  venueType: string;
  price: '$' | '$$' | '$$$';
  moodIds: MoodId[];
  contextIds: ContextId[];
  vibeTags: string[];
  fitLabel: string;
  feelingServes: string;
  description: string;
  bestContext: string;
  suggestedDish: string;
  whyTonight: string;
  bestFor: string[];
  idealMoment: string;
  atmosphere: string[];
  signatureDishes: string[];
  whyThisWorks: string;
  ritualSuggestion: string;
  palette: [string, string, string];
  websiteUrl?: string;
};

export type DiscoveryInsight = {
  eyebrow: string;
  title: string;
  copy: string;
};

export type PlanStep = {
  title: string;
  copy: string;
};

export type MonetizationPath = {
  title: string;
  copy: string;
  value: string;
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
    title: 'Not what to eat. How you want to feel.',
    copy: 'Senyra turns your mood into a food experience. Demo city: Belgrade.',
    kicker: 'New category'
  },
  {
    title: 'Food, places, and rituals matched to your mood.',
    copy: 'Senyra is not a restaurant search app. It translates emotional state into atmosphere, dish, and ritual.',
    kicker: 'Emotion to intention'
  },
  {
    title: 'Start with a feeling. End with an experience.',
    copy: 'A quiet wine bar, a riverside dinner, or a bakery ritual only appears when it fits how you want to feel.',
    kicker: 'Experience design'
  },
  {
    title: 'Senyra is building the emotional discovery layer for food experiences.',
    copy: 'This is a mood-based demand engine for food and hospitality, starting with everyday pleasure in Belgrade.',
    kicker: 'Built to feel real'
  }
];

export const planSteps: PlanStep[] = [
  {
    title: 'Reading your mood',
    copy: 'Senyra looks for softness, tension, energy, or recovery before it chooses anything else.'
  },
  {
    title: 'Matching food, atmosphere, and ritual',
    copy: 'The model connects a place, a dish, a setting, and a next action into one coherent feeling.'
  },
  {
    title: 'Creating your evening',
    copy: 'What you get is not a list. It is a plan that helps the night feel intentional.'
  }
];

export const monetizationPaths: MonetizationPath[] = [
  {
    title: 'Featured Mood Placement',
    copy: 'Restaurants appear inside high-intent emotional moments, when the user is ready to choose.',
    value: 'High-intent discovery'
  },
  {
    title: 'Curated Experience Campaigns',
    copy: 'Brands and venues sponsor seasonal mood-based collections built around specific emotional states.',
    value: 'Sponsored collections'
  },
  {
    title: 'Qualified Lead Analytics',
    copy: 'Partners see map opens, saves, shares, booking clicks, and mood demand by intent state.',
    value: 'Demand intelligence'
  },
  {
    title: 'Premium Membership',
    copy: 'Users unlock mood history, saved rituals, private guides, hidden city layers, and deeper recommendations.',
    value: 'Recurring consumer revenue'
  }
];

export const plusBenefits = [
  'Personal Pleasure Profile',
  'Hidden Belgrade guides',
  'Weekly mood rituals',
  'Date-night and solo-reset collections'
] as const;

export const experiences: Experience[] = [
  {
    slug: 'soft-comfort-evening',
    title: 'Soft Comfort Evening',
    placeName: 'Iva New Balkan Cuisine',
    district: 'Stari Grad',
    city: 'Belgrade',
    venueType: 'modern Balkan comfort room',
    price: '$$',
    moodIds: ['comfort', 'reward', 'soft-indulgence'],
    contextIds: ['solo', 'slow-evening', 'stay-home', 'quick-reset'],
    vibeTags: ['grounding', 'polished', 'warm'],
    fitLabel: 'Warmth, polish, low noise.',
    feelingServes: 'Grounded comfort',
    description: 'A contemporary Balkan room that feels calm, generous, and quietly special.',
    bestContext: 'Solo reset or slow evening',
    suggestedDish: 'Oxtail with caramelised onions and house-made gnocchi',
    whyTonight: 'It gives the night a clear sense of care without asking for too much energy.',
    bestFor: ['a long day that needs a softer ending', 'a dinner that should feel earned', 'a calm table for one'],
    idealMoment: 'Go once the city starts to cool and you want dinner to feel composed.',
    atmosphere: ['soft lighting', 'terrace energy', 'quiet refinement'],
    signatureDishes: ['oxtail with caramelised onions', 'house-made gnocchi with veal brain reduction', 'seasonal plum dessert'],
    whyThisWorks:
      'The room feels composed before the meal starts. Familiar Balkan depth and a refined pace make the whole evening feel cared for, not just ordered.',
    ritualSuggestion: 'Order one rich starter and let the rest of the meal stay unhurried.',
    palette: ['#6f7f4f', '#a7b58e', '#f3ecdf']
  },
  {
    slug: 'quiet-wine-reset',
    title: 'Quiet Wine Reset',
    placeName: 'Dorcol Bar',
    district: 'Dorcol',
    city: 'Belgrade',
    venueType: 'quiet wine bar',
    price: '$$',
    moodIds: ['comfort', 'escape', 'soft-indulgence'],
    contextIds: ['solo', 'stay-home', 'slow-evening', 'quick-reset'],
    vibeTags: ['low-noise', 'amber', 'small-plate'],
    fitLabel: 'Quiet wine and a slower pulse.',
    feelingServes: 'Soft landing',
    description: 'A family-run room with smooth jazz, calm energy, and the kind of pacing that lets the day dissolve.',
    bestContext: 'Solo reset or a low-key date',
    suggestedDish: 'Small plates with a glass of white wine and a cheese board',
    whyTonight: 'It lowers the room temperature before the evening gets too far ahead of you.',
    bestFor: ['a reset after work', 'a private dinner', 'a low-lift comfort night'],
    idealMoment: 'Slip in after work or before the city gets loud.',
    atmosphere: ['smooth jazz', 'street-side calm', 'soft conversation'],
    signatureDishes: ['cheese board', 'olives and small plates', 'light red or white wine'],
    whyThisWorks:
      'The room is unhurried and unforced, so the night becomes about settling rather than performing. It is the easiest way to get back to yourself without making a production of it.',
    ritualSuggestion: 'Choose one glass, one plate, and one slower breath before leaving.',
    palette: ['#7a5b45', '#b48b63', '#f5eadb']
  },
  {
    slug: 'sava-riverside-dinner',
    title: 'Riverside Slow Dinner',
    placeName: 'Savanova',
    district: 'Sava Promenade',
    city: 'Belgrade',
    venueType: 'riverside slow dinner',
    price: '$$$',
    moodIds: ['sensuality', 'connection', 'escape'],
    contextIds: ['date', 'special-night', 'go-out', 'slow-evening'],
    vibeTags: ['river', 'glow', 'unhurried'],
    fitLabel: 'River light and a slower pace.',
    feelingServes: 'Slow intimacy',
    description: 'A Sava-side room where the view stretches the evening and the conversation has room to breathe.',
    bestContext: 'Date night or a night that should feel marked',
    suggestedDish: 'Slow-cooked river fish with herbs and seasonal vegetables',
    whyTonight: 'It turns dinner into a moment by widening the pace and deepening the atmosphere.',
    bestFor: ['an anniversary', 'a date that deserves a setting', 'a night that should linger'],
    idealMoment: 'Book as the light starts to slide across the river.',
    atmosphere: ['river reflections', 'soft linen', 'unhurried service'],
    signatureDishes: ['slow-cooked river fish', 'herb salad with citrus', 'dark chocolate dessert'],
    whyThisWorks:
      'The river changes the emotional tempo before the food even arrives. Everything about the room encourages a slower breath and a longer stay, which is exactly what makes it feel restorative.',
    ritualSuggestion: 'Take the walk by the water before or after dinner so the night feels continuous.',
    palette: ['#604843', '#9a6f61', '#efd9c7']
  },
  {
    slug: 'hidden-sweet-finish',
    title: 'Hidden Sweet Finish',
    placeName: 'Fini Patisserie',
    district: 'Vracar',
    city: 'Belgrade',
    venueType: 'hidden dessert place',
    price: '$$',
    moodIds: ['reward', 'sensuality', 'soft-indulgence'],
    contextIds: ['date', 'special-night', 'solo'],
    vibeTags: ['secret', 'sweet', 'quiet'],
    fitLabel: 'Dessert as the final scene.',
    feelingServes: 'Quiet delight',
    description: 'A calm patisserie where the sweets feel like a final note rather than a detour.',
    bestContext: 'Special night or post-dinner pause',
    suggestedDish: 'Macarons with espresso and a tart selection',
    whyTonight: 'It gives the evening a final note without becoming sugary or loud.',
    bestFor: ['a sweet ending', 'a private pause', 'a carefully marked night'],
    idealMoment: 'Come here when you want the last course to feel like a reveal.',
    atmosphere: ['soft lamps', 'quiet counters', 'close seating'],
    signatureDishes: ['macarons', 'fruit tart', 'eclair selection'],
    whyThisWorks:
      'Dessert becomes the punctuation mark, not the whole story. The room is intimate enough to feel secret, but calm enough that the sweetness never tips into noise.',
    ritualSuggestion: 'Order one dessert to share, then one that belongs only to you.',
    palette: ['#65504a', '#a07b63', '#f2e4d7'],
    websiteUrl: 'https://www.fini.rs/en/patisserie/'
  },
  {
    slug: 'garden-reset-cafe',
    title: 'Garden Reset Cafe',
    placeName: 'Townhouse 27 Garden Cafe',
    district: 'Stari Grad',
    city: 'Belgrade',
    venueType: 'calm garden cafe',
    price: '$$$',
    moodIds: ['escape', 'comfort', 'soft-indulgence'],
    contextIds: ['solo', 'quick-reset', 'stay-home', 'slow-evening'],
    vibeTags: ['green', 'quiet', 'refined'],
    fitLabel: 'A calm pocket in the city.',
    feelingServes: 'Quiet clarity',
    description: 'A discreet garden cafe where coffee, shade, and soft meals create a gentler tempo.',
    bestContext: 'Solo reset or soft afternoon pause',
    suggestedDish: 'Coffee with a light seasonal plate and homemade sweets',
    whyTonight: 'It gives you a small, clean pleasure without asking for a full event.',
    bestFor: ['a solo reset', 'a reading stop', 'a slow restart'],
    idealMoment: 'Use it when you need the day to reopen gently.',
    atmosphere: ['garden shade', 'quiet corners', 'slow service'],
    signatureDishes: ['seasonal light plates', 'homemade sweets', 'coffee and tea'],
    whyThisWorks:
      'The energy is understated, which makes it easier to hear yourself again. It feels like a deliberate pause rather than a transaction, and that is the point.',
    ritualSuggestion: 'Order coffee first, then decide whether the pastry is the main event or a bonus.',
    palette: ['#61554c', '#9a8a79', '#f1e9e0'],
    websiteUrl: 'https://townhouse27.com/garden-cafe.php'
  },
  {
    slug: 'bakery-night-ritual',
    title: 'Bakery Night Ritual',
    placeName: 'La Boulangerie Dorcol',
    district: 'Savski Venac',
    city: 'Belgrade',
    venueType: 'French bakery',
    price: '$',
    moodIds: ['play', 'comfort', 'escape'],
    contextIds: ['quick-reset', 'stay-home', 'solo'],
    vibeTags: ['warm', 'pastry', 'detour'],
    fitLabel: 'A clean ritual with warm pastry.',
    feelingServes: 'Small relief',
    description: 'A tucked-away bakery where the croissant becomes the easiest possible end to a busy day.',
    bestContext: 'Quick reset or solo stop',
    suggestedDish: 'Butter croissant or pain au chocolat with a coffee',
    whyTonight: 'It feels tactile, direct, and easy to carry home in your head.',
    bestFor: ['a fast reset', 'a solitary detour', 'a nightcap without alcohol'],
    idealMoment: 'Best when you want one warm thing before you disappear home.',
    atmosphere: ['fresh pastry', 'quiet corners', 'city detour'],
    signatureDishes: ['butter croissant', 'pain au chocolat', 'baguette'],
    whyThisWorks:
      'The pleasure is immediate and unpretentious. Warm pastry and a strong coffee can shift the mood faster than a full dinner, especially when the evening is already late in spirit.',
    ritualSuggestion: 'Eat standing up for the first bite, then walk slowly home.',
    palette: ['#7d6a53', '#b79a73', '#f4ead7']
  },
  {
    slug: 'intimate-date-dinner',
    title: 'Intimate Date Dinner',
    placeName: 'Restaurant 27',
    district: 'Senjak',
    city: 'Belgrade',
    venueType: 'intimate date dinner',
    price: '$$$',
    moodIds: ['sensuality', 'connection', 'reward'],
    contextIds: ['date', 'special-night', 'go-out'],
    vibeTags: ['private', 'glow', 'elegant'],
    fitLabel: 'Close, polished, and easy.',
    feelingServes: 'Intentional intimacy',
    description: 'A restaurant that feels made for the kind of dinner where attention matters more than spectacle.',
    bestContext: 'Date dinner or special night',
    suggestedDish: 'The tasting menu or a slow-braised main with seasonal sides',
    whyTonight: 'It gives the night enough ceremony to feel special without turning theatrical.',
    bestFor: ['an intimate date', 'a private celebration', 'a dinner that should linger'],
    idealMoment: 'Book it just before the light disappears.',
    atmosphere: ['soft brass', 'low conversation', 'glossed wood'],
    signatureDishes: ['tasting menu', 'slow-braised main', 'dark chocolate dessert'],
    whyThisWorks:
      'The room narrows the focus to the two of you. That closeness, combined with precise food and a slow pace, makes the whole experience feel emotionally legible from the start.',
    ritualSuggestion: 'Share the first course and keep the dessert for the end of the conversation.',
    palette: ['#604843', '#9a6f61', '#efd9c7'],
    websiteUrl: 'https://www.restoran27.rs/en'
  }
];

export const demoCity = 'Belgrade';
export const demoCityLabel = 'Demo city: Belgrade';
export const investorLine = 'Senyra is building a mood-based demand engine for food and hospitality.';

export const collectionLabels = [
  {
    id: 'soft-evenings',
    title: 'For soft evenings',
    description: 'The plans that make the world feel less sharp.'
  },
  {
    id: 'comfort',
    title: 'When I need comfort',
    description: 'A dependable set for staying grounded.'
  },
  {
    id: 'date',
    title: 'Date plans',
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

export const getMapsUrl = (placeName: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${placeName} Belgrade`)}`;

const moodInsights: Record<MoodId, { headline: string; body: string }> = {
  comfort: {
    headline: 'Tonight calls for softness.',
    body: 'You need warmth, low noise, and food that feels grounding - not another loud dinner.'
  },
  reward: {
    headline: 'You want the feeling of a proper yes.',
    body: 'The right room should feel earned, polished, and just rich enough to mark the evening.'
  },
  sensuality: {
    headline: 'The night wants to slow down.',
    body: 'Choose texture, dimmer light, and a room that makes the evening feel closer and more deliberate.'
  },
  adventure: {
    headline: 'You want surprise with a steady hand.',
    body: 'The best match is a place that shifts the mood without tipping into chaos.'
  },
  connection: {
    headline: 'This is about presence.',
    body: 'You need shared pacing, easy conversation, and a room that helps people open up naturally.'
  },
  escape: {
    headline: 'You want distance from the day.',
    body: 'The right choice should make the city feel further away without making the night feel empty.'
  },
  play: {
    headline: 'Keep it light, keep it moving.',
    body: 'You want a little momentum, a little surprise, and enough energy to keep the night playful.'
  },
  'soft-indulgence': {
    headline: 'A gentle luxury sounds right.',
    body: 'Choose something rich but restrained, with details that feel quietly complete.'
  }
};

const contextInsights: Record<ContextId, { body: string }> = {
  solo: {
    body: 'This works best when it stays personal, not performative.'
  },
  date: {
    body: 'It should create chemistry without forcing it.'
  },
  friends: {
    body: 'The room should hold group energy without becoming chaotic.'
  },
  'stay-home': {
    body: 'The goal is comfort with no friction at all.'
  },
  'go-out': {
    body: 'You want the evening to feel distinct from the rest of the week.'
  },
  'quick-reset': {
    body: 'This needs to work fast and leave a clean impression.'
  },
  'slow-evening': {
    body: 'You have time to let the night unfold slowly.'
  },
  'special-night': {
    body: 'This should feel marked, not ordinary.'
  }
};

export const getDiscoveryInsight = (moodId: MoodId, contextId: ContextId): DiscoveryInsight => {
  const mood = moodInsights[moodId];
  const context = contextInsights[contextId];

  return {
    eyebrow: 'Personal insight',
    title: 'Senyra is reading what tonight needs.',
    copy: `${mood.headline} ${context.body}`
  };
};

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
