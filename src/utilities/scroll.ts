/**
 * SCROLL UTILITIES
 *
 * Scroll utilities for scrolling behavior and snap points.
 * Adapted for React Native ScrollView and FlatList components.
 */

export const scrollUtilities = {
  // Scroll Behavior (use with ScrollView props)
  "scroll-auto": {
    /* Default scrolling behavior */
  },
  "scroll-smooth": {
    /* Use with ScrollView scrollEventThrottle for smooth scrolling */
  },

  // Scroll Margin (for scroll positioning)
  "scroll-m-0": {
    /* No scroll margin */
  },
  "scroll-m-1": {
    /* 4px scroll margin */
  },
  "scroll-m-2": {
    /* 8px scroll margin */
  },
  "scroll-m-3": {
    /* 12px scroll margin */
  },
  "scroll-m-4": {
    /* 16px scroll margin */
  },
  "scroll-m-5": {
    /* 20px scroll margin */
  },
  "scroll-m-6": {
    /* 24px scroll margin */
  },
  "scroll-m-8": {
    /* 32px scroll margin */
  },
  "scroll-m-10": {
    /* 40px scroll margin */
  },
  "scroll-m-12": {
    /* 48px scroll margin */
  },
  "scroll-m-16": {
    /* 64px scroll margin */
  },
  "scroll-m-20": {
    /* 80px scroll margin */
  },
  "scroll-m-24": {
    /* 96px scroll margin */
  },
  "scroll-m-32": {
    /* 128px scroll margin */
  },

  // Scroll Margin X
  "scroll-mx-0": {
    /* No horizontal scroll margin */
  },
  "scroll-mx-1": {
    /* 4px horizontal scroll margin */
  },
  "scroll-mx-2": {
    /* 8px horizontal scroll margin */
  },
  "scroll-mx-4": {
    /* 16px horizontal scroll margin */
  },
  "scroll-mx-8": {
    /* 32px horizontal scroll margin */
  },
  "scroll-mx-16": {
    /* 64px horizontal scroll margin */
  },

  // Scroll Margin Y
  "scroll-my-0": {
    /* No vertical scroll margin */
  },
  "scroll-my-1": {
    /* 4px vertical scroll margin */
  },
  "scroll-my-2": {
    /* 8px vertical scroll margin */
  },
  "scroll-my-4": {
    /* 16px vertical scroll margin */
  },
  "scroll-my-8": {
    /* 32px vertical scroll margin */
  },
  "scroll-my-16": {
    /* 64px vertical scroll margin */
  },

  // Scroll Padding (for scroll container)
  "scroll-p-0": {
    /* Use contentInsetAdjustmentBehavior: 'never' */
  },
  "scroll-p-1": {
    /* Use contentInset: { top: 4, bottom: 4, left: 4, right: 4 } */
  },
  "scroll-p-2": {
    /* Use contentInset: { top: 8, bottom: 8, left: 8, right: 8 } */
  },
  "scroll-p-3": {
    /* Use contentInset: { top: 12, bottom: 12, left: 12, right: 12 } */
  },
  "scroll-p-4": {
    /* Use contentInset: { top: 16, bottom: 16, left: 16, right: 16 } */
  },
  "scroll-p-5": {
    /* Use contentInset: { top: 20, bottom: 20, left: 20, right: 20 } */
  },
  "scroll-p-6": {
    /* Use contentInset: { top: 24, bottom: 24, left: 24, right: 24 } */
  },
  "scroll-p-8": {
    /* Use contentInset: { top: 32, bottom: 32, left: 32, right: 32 } */
  },

  // Scroll Padding X
  "scroll-px-0": {
    /* Use contentInset: { left: 0, right: 0 } */
  },
  "scroll-px-1": {
    /* Use contentInset: { left: 4, right: 4 } */
  },
  "scroll-px-2": {
    /* Use contentInset: { left: 8, right: 8 } */
  },
  "scroll-px-4": {
    /* Use contentInset: { left: 16, right: 16 } */
  },
  "scroll-px-8": {
    /* Use contentInset: { left: 32, right: 32 } */
  },

  // Scroll Padding Y
  "scroll-py-0": {
    /* Use contentInset: { top: 0, bottom: 0 } */
  },
  "scroll-py-1": {
    /* Use contentInset: { top: 4, bottom: 4 } */
  },
  "scroll-py-2": {
    /* Use contentInset: { top: 8, bottom: 8 } */
  },
  "scroll-py-4": {
    /* Use contentInset: { top: 16, bottom: 16 } */
  },
  "scroll-py-8": {
    /* Use contentInset: { top: 32, bottom: 32 } */
  },

  // Scroll Snap Type (use with ScrollView snapToInterval)
  "snap-none": {
    /* No snap points */
  },
  "snap-x": {
    /* Horizontal snap points - use with snapToInterval */
  },
  "snap-y": {
    /* Vertical snap points - use with snapToInterval */
  },
  "snap-both": {
    /* Both direction snap points */
  },

  // Scroll Snap Strictness
  "snap-mandatory": {
    /* Use with snapToAlignment: 'start' */
  },
  "snap-proximity": {
    /* Use with snapToAlignment: 'center' */
  },

  // Scroll Snap Align
  "snap-start": {
    /* Use with snapToAlignment: 'start' */
  },
  "snap-end": {
    /* Use with snapToAlignment: 'end' */
  },
  "snap-center": {
    /* Use with snapToAlignment: 'center' */
  },

  // Scroll Snap Stop
  "snap-normal": {
    /* Normal snap behavior */
  },
  "snap-always": {
    /* Always stop at snap points */
  },

  // Touch Actions (React Native ScrollView behavior)
  "touch-auto": {
    /* Default touch behavior */
  },
  "touch-none": {
    /* Disable touch - use scrollEnabled: false */
  },
  "touch-pan-x": {
    /* Horizontal panning only */
  },
  "touch-pan-y": {
    /* Vertical panning only */
  },
  "touch-pinch-zoom": {
    /* Pinch to zoom - use with zoomEnabled: true */
  },
  "touch-manipulation": {
    /* Touch manipulation enabled */
  },

  // CamelCase versions
  scrollAuto: {
    /* Default scrolling behavior */
  },
  scrollSmooth: {
    /* Use with ScrollView scrollEventThrottle for smooth scrolling */
  },

  scrollM0: {
    /* No scroll margin */
  },
  scrollM1: {
    /* 4px scroll margin */
  },
  scrollM2: {
    /* 8px scroll margin */
  },
  scrollM4: {
    /* 16px scroll margin */
  },
  scrollM8: {
    /* 32px scroll margin */
  },
  scrollM16: {
    /* 64px scroll margin */
  },

  scrollMx0: {
    /* No horizontal scroll margin */
  },
  scrollMx1: {
    /* 4px horizontal scroll margin */
  },
  scrollMx2: {
    /* 8px horizontal scroll margin */
  },
  scrollMx4: {
    /* 16px horizontal scroll margin */
  },
  scrollMx8: {
    /* 32px horizontal scroll margin */
  },

  scrollMy0: {
    /* No vertical scroll margin */
  },
  scrollMy1: {
    /* 4px vertical scroll margin */
  },
  scrollMy2: {
    /* 8px vertical scroll margin */
  },
  scrollMy4: {
    /* 16px vertical scroll margin */
  },
  scrollMy8: {
    /* 32px vertical scroll margin */
  },

  scrollP0: {
    /* Use contentInsetAdjustmentBehavior: 'never' on ScrollView */
  },
  scrollP1: {
    /* Use contentInset: { top: 4, bottom: 4, left: 4, right: 4 } on ScrollView */
  },
  scrollP2: {
    /* Use contentInset: { top: 8, bottom: 8, left: 8, right: 8 } on ScrollView */
  },
  scrollP4: {
    /* Use contentInset: { top: 16, bottom: 16, left: 16, right: 16 } on ScrollView */
  },
  scrollP8: {
    /* Use contentInset: { top: 32, bottom: 32, left: 32, right: 32 } on ScrollView */
  },

  scrollPx0: {
    /* Use contentInset: { left: 0, right: 0 } on ScrollView */
  },
  scrollPx1: {
    /* Use contentInset: { left: 4, right: 4 } on ScrollView */
  },
  scrollPx2: {
    /* Use contentInset: { left: 8, right: 8 } on ScrollView */
  },
  scrollPx4: {
    /* Use contentInset: { left: 16, right: 16 } on ScrollView */
  },

  scrollPy0: {
    /* Use contentInset: { top: 0, bottom: 0 } on ScrollView */
  },
  scrollPy1: {
    /* Use contentInset: { top: 4, bottom: 4 } on ScrollView */
  },
  scrollPy2: {
    /* Use contentInset: { top: 8, bottom: 8 } on ScrollView */
  },
  scrollPy4: {
    /* Use contentInset: { top: 16, bottom: 16 } on ScrollView */
  },

  snapNone: {
    /* No snap points */
  },
  snapX: {
    /* Horizontal snap points - use with snapToInterval */
  },
  snapY: {
    /* Vertical snap points - use with snapToInterval */
  },
  snapBoth: {
    /* Both direction snap points */
  },

  snapMandatory: {
    /* Use with snapToAlignment: 'start' */
  },
  snapProximity: {
    /* Use with snapToAlignment: 'center' */
  },

  snapStart: {
    /* Use with snapToAlignment: 'start' */
  },
  snapEnd: {
    /* Use with snapToAlignment: 'end' */
  },
  snapCenter: {
    /* Use with snapToAlignment: 'center' */
  },

  snapNormal: {
    /* Normal snap behavior */
  },
  snapAlways: {
    /* Always stop at snap points */
  },

  touchAuto: {
    /* Default touch behavior */
  },
  touchNone: {
    /* Disable touch - use scrollEnabled: false */
  },
  touchPanX: {
    /* Horizontal panning only */
  },
  touchPanY: {
    /* Vertical panning only */
  },
  touchPinchZoom: {
    /* Pinch to zoom - use with zoomEnabled: true */
  },
  touchManipulation: {
    /* Touch manipulation enabled */
  },
};
