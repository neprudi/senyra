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
  venueType: string;
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
};

export type DiscoveryInsight = {
  eyebrow: string;
  title: string;
  copy: string;
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
    copy: 'Start with a feeling. End with an experience. Demo city: Belgrade.',
    kicker: 'New category'
  },
  {
    title: 'Food, places, and rituals matched to your mood.',
    copy: 'Senyra is not a restaurant search app. It translates emotional state into atmosphere, dish, and ritual.',
    kicker: 'Emotion to intention'
  },
  {
    title: 'Choose the feeling. We shape the night.',
    copy: 'A quiet wine bar, a riverside dinner, or a late-night bakery ritual only appears when it fits how you want to feel.',
    kicker: 'Experience design'
  },
  {
    title: 'Senyra is building the emotional discovery layer for food experiences.',
    copy: 'This is a new consumer category, starting with everyday pleasure in Belgrade.',
    kicker: 'Built to feel real'
  }
];

export const experiences: Experience[] = [
  {
    slug: 'cellar-mina',
    title: 'Cellar Mina',
    district: 'Dorćol',
    city: 'Belgrade',
    venueType: 'quiet wine bar',
    price: '$$',
    moodIds: ['comfort', 'soft-indulgence', 'escape'],
    contextIds: ['solo', 'stay-home', 'slow-evening', 'quick-reset'],
    vibeTags: ['warm', 'quiet', 'dim'],
    fitLabel: 'Quiet reset, small plates, low noise.',
    feelingServes: 'Soft landing',
    description: 'A tucked-away wine room with candlelight, small plates, and a pace that drops your shoulders.',
    bestContext: 'Solo reset or slow evening',
    suggestedDish: 'Warm sourdough with whipped kajmak and roasted pepper oil',
    whyTonight: 'It gives the evening a lower volume without making it feel empty.',
    bestFor: ['a reset after work', 'a private dinner', 'a low-lift comfort night'],
    idealMoment: 'Arrive after dusk, when the city has started to soften.',
    atmosphere: ['low amber light', 'soft service', 'lingering pacing'],
    signatureDishes: ['whipped kajmak and roasted pepper oil', 'smoked trout on sourdough', 'plum tart with sour cream'],
    whyThisWorks:
      'The room feels almost private, so the night becomes less about choosing dinner and more about easing into a calmer state. Warm glass, soft salt, and a low hum make the whole experience feel restorative.',
    ritualSuggestion: 'Order one glass of white wine, then pause before choosing the second plate.',
    palette: ['#7a5b45', '#b48b63', '#f5eadb']
  },
  {
    slug: 'sava-current',
    title: 'Sava Current',
    district: 'Beton Hala',
    city: 'Belgrade',
    venueType: 'riverside slow dinner',
    price: '$$$',
    moodIds: ['sensuality', 'connection'],
    contextIds: ['date', 'special-night', 'go-out'],
    vibeTags: ['velvet', 'intimate', 'glow'],
    fitLabel: 'Riverside, intimate, unhurried.',
    feelingServes: 'Slow intimacy',
    description: 'A river-facing dining room with quiet confidence, amber reflection, and a slow pulse.',
    bestContext: 'Intimate date dinner',
    suggestedDish: 'River trout with dill oil, leek ash, and new potatoes',
    whyTonight: 'It turns a dinner into a moment by stretching the pacing and deepening the atmosphere.',
    bestFor: ['date night', 'an anniversary', 'a night that should feel marked'],
    idealMoment: 'Book the table just before the light goes blue over the river.',
    atmosphere: ['low light', 'close tables', 'calm confidence'],
    signatureDishes: ['river trout with dill oil', 'veal cheek with plum glaze', 'dark chocolate and cherry cream'],
    whyThisWorks:
      'The river gives the room motion while the room itself stays composed. That contrast makes the night feel intimate without feeling heavy, and the pacing naturally encourages attention.',
    ritualSuggestion: 'Share the first plate and let the rest of the meal unfold slowly.',
    palette: ['#604843', '#9a6f61', '#efd9c7']
  },
  {
    slug: 'balkan-hearth',
    title: 'Balkan Hearth',
    district: 'Vračar',
    city: 'Belgrade',
    venueType: 'modern Balkan comfort room',
    price: '$$',
    moodIds: ['comfort', 'reward', 'soft-indulgence'],
    contextIds: ['solo', 'slow-evening', 'stay-home', 'quick-reset'],
    vibeTags: ['grounded', 'generous', 'modern'],
    fitLabel: 'Modern Balkan comfort, polished edge.',
    feelingServes: 'Grounded reward',
    description: 'A modern Balkan room where the comfort is familiar, but the details are sharp and polished.',
    bestContext: 'Slow evening after a demanding day',
    suggestedDish: 'Paprika roast chicken with smoked potato cream',
    whyTonight: 'It feels like being taken care of without losing the premium edge.',
    bestFor: ['a midweek reset', 'a solo dinner', 'an unhurried night in'],
    idealMoment: 'Use it when the day needs to end with something reliable and warm.',
    atmosphere: ['warm wood', 'clean lines', 'low conversation'],
    signatureDishes: ['paprika roast chicken', 'smoked potato cream', 'tahini and walnut cake'],
    whyThisWorks:
      'It lands between memory and refinement. The flavors feel familiar enough to soothe you, but the plating and pacing keep it feeling like a special night rather than a heavy one.',
    ritualSuggestion: 'Start with a warm bite and end with something walnut-rich.',
    palette: ['#6e7a57', '#a9b58b', '#eef1e6']
  },
  {
    slug: 'hidden-fig',
    title: 'Hidden Fig',
    district: 'Kosančićev Venac',
    city: 'Belgrade',
    venueType: 'hidden dessert room',
    price: '$$',
    moodIds: ['reward', 'sensuality', 'soft-indulgence'],
    contextIds: ['date', 'special-night', 'solo'],
    vibeTags: ['secret', 'sweet', 'quiet'],
    fitLabel: 'A dessert room for the final scene.',
    feelingServes: 'Quiet delight',
    description: 'A discreet dessert room tucked above the old streets, made for ending a night gently.',
    bestContext: 'Special night or post-dinner pause',
    suggestedDish: 'Fig tart with walnut cream and sour cherry syrup',
    whyTonight: 'It gives the evening a final note without becoming sugary or loud.',
    bestFor: ['a sweet ending', 'a private pause', 'a carefully marked night'],
    idealMoment: 'Come here when you want the last course to feel like a reveal.',
    atmosphere: ['soft lamps', 'old stone', 'close seating'],
    signatureDishes: ['fig tart with walnut cream', 'sour cherry semifreddo', 'rose milk pudding'],
    whyThisWorks:
      'Dessert becomes the punctuation mark, not the whole story. The room is intimate enough to feel secret, but calm enough that the sweetness never tips into noise.',
    ritualSuggestion: 'Order one dessert to share, then one that belongs only to you.',
    palette: ['#65504a', '#a07b63', '#f2e4d7']
  },
  {
    slug: 'midnight-oven',
    title: 'Midnight Oven',
    district: 'Terazije',
    city: 'Belgrade',
    venueType: 'late-night bakery ritual',
    price: '$',
    moodIds: ['play', 'comfort', 'escape'],
    contextIds: ['quick-reset', 'stay-home', 'solo'],
    vibeTags: ['warm', 'late', 'ritual'],
    fitLabel: 'Late-night bakery, simple ritual.',
    feelingServes: 'Small relief',
    description: 'An after-hours bakery where the glow is warm, the line is short, and the ritual feels private.',
    bestContext: 'Quick reset or solo stop',
    suggestedDish: 'Hot burek with yogurt and a paper cup of strong coffee',
    whyTonight: 'It resets the night quickly and gives you a tactile, immediate kind of comfort.',
    bestFor: ['a midnight craving', 'a solitary ritual', 'a fast mood reset'],
    idealMoment: 'Best when you need something warm before going home.',
    atmosphere: ['sudden warmth', 'paper bags', 'small queues'],
    signatureDishes: ['hot burek with yogurt', 'sesame kifle', 'plum-filled rolls'],
    whyThisWorks:
      'The pleasure is immediate and unpretentious. Hot pastry, sharp coffee, and the feeling of taking a quiet detour at night can shift the mood faster than a full dinner.',
    ritualSuggestion: 'Eat standing up for the first bite, then walk slowly home.',
    palette: ['#7d6a53', '#b79a73', '#f4ead7']
  },
  {
    slug: 'velvet-bello',
    title: 'Velvet Bello',
    district: 'Senjak',
    city: 'Belgrade',
    venueType: 'intimate date dinner',
    price: '$$$',
    moodIds: ['sensuality', 'connection', 'reward'],
    contextIds: ['date', 'special-night', 'go-out'],
    vibeTags: ['intimate', 'glow', 'dinner'],
    fitLabel: 'Private, elegant, close.',
    feelingServes: 'Intentional intimacy',
    description: 'An intimate dining room with low sound, polished service, and enough warmth to make conversation feel closer.',
    bestContext: 'Date dinner or special night',
    suggestedDish: 'Veal cheek with quince glaze and celeriac purée',
    whyTonight: 'It gives the night enough ceremony to feel special without turning theatrical.',
    bestFor: ['an intimate date', 'a private celebration', 'a dinner that should linger'],
    idealMoment: 'Book it just before the light disappears.',
    atmosphere: ['soft brass', 'low conversation', 'glossed wood'],
    signatureDishes: ['veal cheek with quince glaze', 'duck with sour cherry jus', 'dark chocolate mousse with sea salt'],
    whyThisWorks:
      'The room narrows the focus to the two of you. That closeness, combined with precise food and a slow pace, makes the whole experience feel emotionally legible from the start.',
    ritualSuggestion: 'Share the first course and keep the dessert for the end of the conversation.',
    palette: ['#604843', '#9a6f61', '#efd9c7']
  },
  {
    slug: 'first-light',
    title: 'First Light',
    district: 'Dorćol',
    city: 'Belgrade',
    venueType: 'solo reset café',
    price: '$$$',
    moodIds: ['escape', 'comfort', 'soft-indulgence'],
    contextIds: ['solo', 'quick-reset', 'stay-home'],
    vibeTags: ['calm', 'bright', 'private'],
    fitLabel: 'A reset with no friction.',
    feelingServes: 'Quiet clarity',
    description: 'A refined café for solo resets, slow pages, and a cup that changes the pace of the day.',
    bestContext: 'Solo reset or soft morning-after',
    suggestedDish: 'Poppy-seed roll with thick yogurt and apricot compote',
    whyTonight: 'It gives you a small, clean pleasure without asking for a full event.',
    bestFor: ['a solo reset', 'a quiet reading stop', 'a slow start or restart'],
    idealMoment: 'Use it when you need the day to re-open gently.',
    atmosphere: ['window light', 'quiet corners', 'slow coffee service'],
    signatureDishes: ['poppy-seed roll', 'thick yogurt with apricot compote', 'Belgrade roast coffee'],
    whyThisWorks:
      'The energy is understated, which makes it easier to hear yourself again. It feels like a deliberate pause rather than a transaction, and that is the point.',
    ritualSuggestion: 'Order coffee first, then decide whether the pastry is the main event or a bonus.',
    palette: ['#61554c', '#9a8a79', '#f1e9e0']
  },
  {
    slug: 'sava-table',
    title: 'Sava Table',
    district: 'New Belgrade',
    city: 'Belgrade',
    venueType: 'riverside slow dinner',
    price: '$$',
    moodIds: ['escape', 'connection', 'soft-indulgence'],
    contextIds: ['friends', 'go-out', 'slow-evening'],
    vibeTags: ['river', 'slow', 'roomy'],
    fitLabel: 'Riverside, spacious, slow.',
    feelingServes: 'Wide calm',
    description: 'A riverside dining room where the view stretches the pace and the meal unfolds without hurry.',
    bestContext: 'Slow evening with room to breathe',
    suggestedDish: 'Slow-braised lamb with polenta and mint oil',
    whyTonight: 'It makes the evening feel spacious, giving conversation and appetite the same amount of room.',
    bestFor: ['a long dinner', 'a group that wants calm', 'a night that should breathe'],
    idealMoment: 'Go when you do not want to watch the clock.',
    atmosphere: ['river reflections', 'soft linen', 'unhurried service'],
    signatureDishes: ['slow-braised lamb with polenta', 'smoked trout salad', 'quince sorbet'],
    whyThisWorks:
      'The river changes the emotional tempo before the food even arrives. Everything about the room encourages a slower breath and a longer stay, which is exactly what makes it feel restorative.',
    ritualSuggestion: 'Take the walk by the water before or after dinner so the night feels continuous.',
    palette: ['#9a7d5d', '#d2b594', '#f7efe4']
  }
];

export const demoCity = 'Belgrade';
export const demoCityLabel = 'Demo city: Belgrade';
export const investorLine = 'Senyra is building the emotional discovery layer for food experiences.';

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
    title: 'Senyra reads what you need tonight.',
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
