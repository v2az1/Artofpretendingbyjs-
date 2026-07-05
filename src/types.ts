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

export const INITIAL_REVIEWS: Review[] = [
  {
    id: "seed-rev-1",
    name: "Alizeh Shah",
    location: "Lahore, Pakistan",
    rating: 5,
    text: "Reading the excerpt of Chapter 7, 'Homesickness of the Soul', felt like the author had peered into my private diaries. As a student living away from home, this is the first book that doesn't just tell me to feel better—it explains the psychological architecture of why we hide behind our smiles.",
    date: "2026-06-28",
    verified: true
  },
  {
    id: "seed-rev-2",
    name: "Dr. Kamran Rehman",
    location: "Karachi, Pakistan",
    rating: 5,
    text: "An extraordinary blend of academic psychological theory and raw, poetic empathy. As a mental health educator, I highly recommend 'The Art of Pretending' to anyone who has spent years struggling to find the words for their silent battles.",
    date: "2026-07-02",
    verified: true
  },
  {
    id: "seed-rev-3",
    name: "Sarmad Alvi",
    location: "Islamabad, Pakistan",
    rating: 5,
    text: "The Interactive Sanctuary alone is a breath of fresh air. This book is a gentle, reassuring guide reminding us that being hyper-independent isn't a badge of strength—it's just armor we are allowed to take off when we feel safe.",
    date: "2026-07-04",
    verified: true
  }
];

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
