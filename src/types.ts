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
  userId?: string;
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
