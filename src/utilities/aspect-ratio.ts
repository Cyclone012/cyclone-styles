/**
 * ASPECT RATIO UTILITIES
 *
 * Aspect ratio utilities for maintaining proportional layouts across different
 * screen sizes. Implemented using React Native aspectRatio property and
 * calculated width/height relationships.
 */

export const aspectRatioUtilities = {
  // Common Aspect Ratios
  "aspect-square": {
    aspectRatio: 1,
  },
  "aspect-video": {
    aspectRatio: 16 / 9, // 1.7778
  },
  "aspect-auto": {
    aspectRatio: undefined,
  },

  // Standard Ratios
  "aspect-1/1": {
    aspectRatio: 1,
  },
  "aspect-2/1": {
    aspectRatio: 2,
  },
  "aspect-3/1": {
    aspectRatio: 3,
  },
  "aspect-4/1": {
    aspectRatio: 4,
  },
  "aspect-5/1": {
    aspectRatio: 5,
  },
  "aspect-1/2": {
    aspectRatio: 0.5,
  },
  "aspect-1/3": {
    aspectRatio: 1 / 3, // 0.3333
  },
  "aspect-1/4": {
    aspectRatio: 0.25,
  },
  "aspect-1/5": {
    aspectRatio: 0.2,
  },

  // Common Photo/Media Ratios
  "aspect-2/3": {
    aspectRatio: 2 / 3, // 0.6667 - Portrait photo
  },
  "aspect-3/2": {
    aspectRatio: 3 / 2, // 1.5 - Landscape photo
  },
  "aspect-4/3": {
    aspectRatio: 4 / 3, // 1.3333 - Traditional screen
  },
  "aspect-3/4": {
    aspectRatio: 3 / 4, // 0.75 - Portrait traditional
  },
  "aspect-5/4": {
    aspectRatio: 5 / 4, // 1.25
  },
  "aspect-4/5": {
    aspectRatio: 4 / 5, // 0.8
  },
  "aspect-16/9": {
    aspectRatio: 16 / 9, // 1.7778 - Widescreen
  },
  "aspect-9/16": {
    aspectRatio: 9 / 16, // 0.5625 - Portrait video/stories
  },

  // Wide Screen Ratios
  "aspect-21/9": {
    aspectRatio: 21 / 9, // 2.3333 - Ultra-wide
  },
  "aspect-9/21": {
    aspectRatio: 9 / 21, // 0.4286
  },

  // Social Media Ratios
  "aspect-1.91/1": {
    aspectRatio: 1.91, // Facebook cover photo
  },
  "aspect-4/5-social": {
    aspectRatio: 4 / 5, // Instagram portrait
  },
  "aspect-1.91": {
    aspectRatio: 1.91, // Instagram landscape
  },

  // Cinema Ratios
  "aspect-2.35/1": {
    aspectRatio: 2.35, // Cinemascope
  },
  "aspect-2.39/1": {
    aspectRatio: 2.39, // Modern widescreen
  },

  // Golden Ratio
  "aspect-golden": {
    aspectRatio: 1.618, // Golden ratio
  },
  "aspect-golden-vertical": {
    aspectRatio: 1 / 1.618, // Golden ratio vertical
  },

  // Paper Ratios
  "aspect-a4": {
    aspectRatio: 1 / 1.414, // A4 paper (portrait)
  },
  "aspect-a4-landscape": {
    aspectRatio: 1.414, // A4 paper (landscape)
  },

  // Container with intrinsic ratio (React Native doesn't support padding percentage)
  "aspect-container-1/1": {
    /* Use aspectRatio: 1 instead */
    aspectRatio: 1,
  },
  "aspect-container-16/9": {
    /* Use aspectRatio: 16/9 instead */
    aspectRatio: 16 / 9,
  },
  "aspect-container-4/3": {
    /* Use aspectRatio: 4/3 instead */
    aspectRatio: 4 / 3,
  },
  "aspect-container-3/2": {
    /* Use aspectRatio: 3/2 instead */
    aspectRatio: 3 / 2,
  },

  // CamelCase versions
  aspectSquare: {
    aspectRatio: 1,
  },
  aspectVideo: {
    aspectRatio: 16 / 9,
  },
  aspectAuto: {
    aspectRatio: undefined,
  },

  aspect1to1: {
    aspectRatio: 1,
  },
  aspect2to1: {
    aspectRatio: 2,
  },
  aspect3to1: {
    aspectRatio: 3,
  },
  aspect4to1: {
    aspectRatio: 4,
  },
  aspect1to2: {
    aspectRatio: 0.5,
  },
  aspect1to3: {
    aspectRatio: 1 / 3,
  },
  aspect1to4: {
    aspectRatio: 0.25,
  },

  aspect2to3: {
    aspectRatio: 2 / 3,
  },
  aspect3to2: {
    aspectRatio: 3 / 2,
  },
  aspect4to3: {
    aspectRatio: 4 / 3,
  },
  aspect3to4: {
    aspectRatio: 3 / 4,
  },
  aspect5to4: {
    aspectRatio: 5 / 4,
  },
  aspect4to5: {
    aspectRatio: 4 / 5,
  },
  aspect16to9: {
    aspectRatio: 16 / 9,
  },
  aspect9to16: {
    aspectRatio: 9 / 16,
  },
  aspect21to9: {
    aspectRatio: 21 / 9,
  },

  aspectGolden: {
    aspectRatio: 1.618,
  },
  aspectGoldenVertical: {
    aspectRatio: 1 / 1.618,
  },

  aspectA4: {
    aspectRatio: 1 / 1.414,
  },
  aspectA4Landscape: {
    aspectRatio: 1.414,
  },
};
