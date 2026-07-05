/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Chapter {
  number: number;
  title: string;
  theme: string;
  description: string;
  psychologicalAspect: string;
}

export interface Review {
  id: string;
  name: string;
  location?: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
}

export interface GuestbookEntry {
  id: string;
  name: string;
  maskType: string;
  confession: string;
  date: string;
}

export interface ReflectionRequest {
  maskType: string;
  customConfession?: string;
}

export interface ReflectionResponse {
  empatheticQuote: string;
  poeticResponse: string;
  actionableStep: string;
}

export const BOOK_CHAPTERS: Chapter[] = [
  {
    number: 1,
    title: "The Sanctuary of the Self",
    theme: "Introduction",
    description: "Beginning the journey of unmasking. Understanding why we build walls and how they both protect and isolate us.",
    psychologicalAspect: "Self-protection mechanisms & defense structures"
  },
  {
    number: 2,
    title: "The Anatomy of 'I'm Fine'",
    theme: "The Mask",
    description: "An in-depth dissection of our most common lie. Why 'I'm fine' is a psychological shield against vulnerability.",
    psychologicalAspect: "Emotional suppression & social conformity"
  },
  {
    number: 3,
    title: "Mirrors and Masks",
    theme: "Self-Perception",
    description: "How we lose sight of our true reflection when we spend years styling a mask for the approval of others.",
    psychologicalAspect: "Identity confusion & external validation"
  },
  {
    number: 4,
    title: "The Weight of Expected Smiles",
    theme: "Emotional Labor",
    description: "The toxic burden of performance happiness. Exploring the fatigue that comes with carrying a cheerful exterior.",
    psychologicalAspect: "Smiling depression & emotional exhaustion"
  },
  {
    number: 5,
    title: "Quiet Storms: Loneliness in a Crowded Room",
    theme: "Isolation",
    description: "A gentle look at why we feel most alone when surrounded by people who only know our masqueraded self.",
    psychologicalAspect: "Subjective loneliness vs objective isolation"
  },
  {
    number: 6,
    title: "The Illusion of Control",
    theme: "Anxiety",
    description: "How pretending to have it all together is often an anxious response to a world that feels completely uncontrollable.",
    psychologicalAspect: "Hyper-independence & cognitive over-compensation"
  },
  {
    number: 7,
    title: "Homesickness of the Soul",
    theme: "Disconnection",
    description: "The deep longing for a place where you can take off your shoes, your armor, and your mask and just exist.",
    psychologicalAspect: "Self-alienation & search for belonging"
  },
  {
    number: 8,
    title: "The Armor of Independence",
    theme: "Defense Mechanisms",
    description: "Why hyper-independence is often a trauma response, and how refusing help keeps us trapped in our own silence.",
    psychologicalAspect: "Avoidant attachment & fear of dependency"
  },
  {
    number: 9,
    title: "Silent Rejection & Self-Sabotage",
    theme: "Fear of Exposure",
    description: "The fear that if people saw who we really are, they would leave. How we push others away before they can see us.",
    psychologicalAspect: "Imposter syndrome & relational sabotage"
  },
  {
    number: 10,
    title: "Family Ties & Inherited Patterns",
    theme: "Origins",
    description: "Tracing our masks back to childhood. The roles we were forced to play to maintain harmony or secure love.",
    psychologicalAspect: "Family systems theory & childhood role play"
  },
  {
    number: 11,
    title: "The Echo Chambers of Self-Doubt",
    theme: "The Inner Critic",
    description: "Dismantling the cruel voice inside that whispers that our pain isn't real enough or deep enough to justify crying.",
    psychologicalAspect: "Internalized self-criticism & cognitive distortions"
  },
  {
    number: 12,
    title: "Emotional Scar Tissue",
    theme: "Trauma",
    description: "How old wounds become the blueprint for our current shields, and how to gently massage the scars back to feeling.",
    psychologicalAspect: "Trauma-informed somatic awareness"
  },
  {
    number: 13,
    title: "Unmasking Vulnerability",
    theme: "The Shift",
    description: "Redefining vulnerability not as a weakness, but as the only bridge to genuine, heart-to-heart human connection.",
    psychologicalAspect: "Empathy, shame-resilience & Brene Brown principles"
  },
  {
    number: 14,
    title: "The Courage to Fall Apart",
    theme: "Catharsis",
    description: "Allowing yourself to break. Understanding that collapsing is sometimes a necessary step to rebuilding on solid ground.",
    psychologicalAspect: "Grief integration & emotional release"
  },
  {
    number: 15,
    title: "Sitting with the Questions",
    theme: "Mindfulness",
    description: "The wisdom of not knowing. How to find peace in the quiet spaces between who you were and who you are becoming.",
    psychologicalAspect: "Tolerance for ambiguity & mindfulness"
  },
  {
    number: 16,
    title: "Deconstructing the Inner Critic",
    theme: "Healing",
    description: "Practical psychological strategies to quieten the voice of shame and replace it with a voice of deep companion-level warmth.",
    psychologicalAspect: "Cognitive behavioral reframing & self-compassion"
  },
  {
    number: 17,
    title: "The Art of Forgiving Yourself",
    theme: "Grace",
    description: "Releasing the guilt of having pretended. Forgiving yourself for the survival strategies you had to use to make it through.",
    psychologicalAspect: "Self-forgiveness & narrative therapy"
  },
  {
    number: 18,
    title: "Honesty as a Healing Agent",
    theme: "Expression",
    description: "The transformative power of telling the truth, first to yourself, and then to a trusted person in your life.",
    psychologicalAspect: "Expressive writing & authentic self-disclosure"
  },
  {
    number: 19,
    title: "Reclaiming Your Real Voice",
    theme: "Empowerment",
    description: "Learning how to speak your needs, your boundaries, and your quiet truths without apologizing for their volume.",
    psychologicalAspect: "Assertiveness training & voice work"
  },
  {
    number: 20,
    title: "Beautiful Imperfection",
    theme: "Acceptance",
    description: "Embracing the cracks in your story. Finding elegance in your broken pieces, styled like Japanese Kintsugi with gold.",
    psychologicalAspect: "Radical acceptance & post-traumatic growth"
  },
  {
    number: 21,
    title: "The Authentic Tomorrow",
    theme: "Integration",
    description: "Stepping forward without the mask. Living a life of true presence, deep connections, and quiet emotional safety.",
    psychologicalAspect: "Fully integrated psychological maturity & self-actualization"
  }
];

export const INITIAL_REVIEWS: Review[] = [];

export const SUGGESTED_MASKS = [
  {
    id: "strong",
    label: "The Strong One",
    description: "You carry everyone else's burden while refusing to show your own cracks.",
    tagline: "I have to keep it together for everyone else."
  },
  {
    id: "happy",
    label: "The Constant Joy",
    description: "You light up every room with smiles, jokes, and energy, but fall silent the moment you're alone.",
    tagline: "If I stop smiling, people will realize how empty I feel."
  },
  {
    id: "perfect",
    label: "The Perfect Achiever",
    description: "You chase success and flawless standards to distract from a deep-seated feeling of inadequacy.",
    tagline: "My worth is only as good as my next achievement."
  },
  {
    id: "fine",
    label: "The 'I'm Fine' Quietist",
    description: "You withdraw into silence and minimize your pain so you never feel like a burden to others.",
    tagline: "My struggles aren't big enough to complain about."
  }
];
