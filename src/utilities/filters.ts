/**
 * FILTERS UTILITIES
 *
 * React Native compatible filter utilities for visual effects.
 * These work with third-party libraries like react-native-svg for filters,
 * or as reference values for custom filter implementations.
 */

export const filtersUtilities = {
  // Blur Filters (for use with blur components like expo-blur)
  "blur-none": {
    /* No blur - blurAmount: 0 */
  },
  "blur-sm": {
    /* Small blur - blurAmount: 4 */
  },
  "blur-base": {
    /* Base blur - blurAmount: 8 */
  },
  "blur-md": {
    /* Medium blur - blurAmount: 12 */
  },
  "blur-lg": {
    /* Large blur - blurAmount: 16 */
  },
  "blur-xl": {
    /* Extra large blur - blurAmount: 20 */
  },
  "blur-2xl": {
    /* 2x extra large blur - blurAmount: 24 */
  },
  "blur-3xl": {
    /* 3x extra large blur - blurAmount: 40 */
  },

  // Brightness (for image processing libraries)
  "brightness-0": {
    /* Brightness: 0% - completely dark */
  },
  "brightness-50": {
    /* Brightness: 50% - half brightness */
  },
  "brightness-75": {
    /* Brightness: 75% - three quarters brightness */
  },
  "brightness-90": {
    /* Brightness: 90% - almost full brightness */
  },
  "brightness-95": {
    /* Brightness: 95% - nearly full brightness */
  },
  "brightness-100": {
    /* Brightness: 100% - normal brightness */
  },
  "brightness-105": {
    /* Brightness: 105% - slightly brighter */
  },
  "brightness-110": {
    /* Brightness: 110% - more bright */
  },
  "brightness-125": {
    /* Brightness: 125% - quite bright */
  },
  "brightness-150": {
    /* Brightness: 150% - very bright */
  },
  "brightness-200": {
    /* Brightness: 200% - extremely bright */
  },

  // Contrast (for image processing libraries)
  "contrast-0": {
    /* Contrast: 0% - no contrast */
  },
  "contrast-50": {
    /* Contrast: 50% - half contrast */
  },
  "contrast-75": {
    /* Contrast: 75% - three quarters contrast */
  },
  "contrast-100": {
    /* Contrast: 100% - normal contrast */
  },
  "contrast-125": {
    /* Contrast: 125% - increased contrast */
  },
  "contrast-150": {
    /* Contrast: 150% - high contrast */
  },
  "contrast-200": {
    /* Contrast: 200% - very high contrast */
  },

  // Grayscale (for image processing libraries)
  "grayscale-0": {
    /* Grayscale: 0% - full color */
  },
  grayscale: {
    /* Grayscale: 100% - completely grayscale */
  },

  // Invert (for image processing libraries)
  "invert-0": {
    /* Invert: 0% - no inversion */
  },
  invert: {
    /* Invert: 100% - completely inverted */
  },

  // Sepia (for image processing libraries)
  "sepia-0": {
    /* Sepia: 0% - no sepia */
  },
  sepia: {
    /* Sepia: 100% - full sepia effect */
  },

  // Saturate (for image processing libraries)
  "saturate-0": {
    /* Saturate: 0% - no saturation */
  },
  "saturate-50": {
    /* Saturate: 50% - half saturation */
  },
  "saturate-100": {
    /* Saturate: 100% - normal saturation */
  },
  "saturate-150": {
    /* Saturate: 150% - increased saturation */
  },
  "saturate-200": {
    /* Saturate: 200% - high saturation */
  },

  // Hue Rotate (for image processing libraries)
  "hue-rotate-0": {
    /* Hue rotate: 0deg - no rotation */
  },
  "hue-rotate-15": {
    /* Hue rotate: 15deg */
  },
  "hue-rotate-30": {
    /* Hue rotate: 30deg */
  },
  "hue-rotate-60": {
    /* Hue rotate: 60deg */
  },
  "hue-rotate-90": {
    /* Hue rotate: 90deg */
  },
  "hue-rotate-180": {
    /* Hue rotate: 180deg */
  },

  // Drop Shadow (for use with elevation or shadow props)
  "drop-shadow-sm": {
    /* Small drop shadow */
  },
  "drop-shadow": {
    /* Default drop shadow */
  },
  "drop-shadow-md": {
    /* Medium drop shadow */
  },
  "drop-shadow-lg": {
    /* Large drop shadow */
  },
  "drop-shadow-xl": {
    /* Extra large drop shadow */
  },
  "drop-shadow-2xl": {
    /* 2x extra large drop shadow */
  },
  "drop-shadow-none": {
    /* No drop shadow */
  },

  // Backdrop Blur (for overlay components)
  "backdrop-blur-none": {
    backgroundColor: "transparent",
    /* No backdrop blur */
  },
  "backdrop-blur-sm": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    /* Small backdrop blur */
  },
  "backdrop-blur": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    /* Default backdrop blur */
  },
  "backdrop-blur-md": {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    /* Medium backdrop blur */
  },
  "backdrop-blur-lg": {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    /* Large backdrop blur */
  },
  "backdrop-blur-xl": {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    /* Extra large backdrop blur */
  },

  // Backdrop Brightness
  "backdrop-brightness-50": {
    /* Backdrop brightness: 50% */
  },
  "backdrop-brightness-75": {
    /* Backdrop brightness: 75% */
  },
  "backdrop-brightness-100": {
    /* Backdrop brightness: 100% */
  },
  "backdrop-brightness-125": {
    /* Backdrop brightness: 125% */
  },
  "backdrop-brightness-150": {
    /* Backdrop brightness: 150% */
  },

  // Backdrop Contrast
  "backdrop-contrast-50": {
    /* Backdrop contrast: 50% */
  },
  "backdrop-contrast-75": {
    /* Backdrop contrast: 75% */
  },
  "backdrop-contrast-100": {
    /* Backdrop contrast: 100% */
  },
  "backdrop-contrast-125": {
    /* Backdrop contrast: 125% */
  },
  "backdrop-contrast-150": {
    /* Backdrop contrast: 150% */
  },

  // Backdrop Grayscale
  "backdrop-grayscale-0": {
    /* Backdrop grayscale: 0% */
  },
  "backdrop-grayscale": {
    /* Backdrop grayscale: 100% */
  },

  // Backdrop Invert
  "backdrop-invert-0": {
    /* Backdrop invert: 0% */
  },
  "backdrop-invert": {
    /* Backdrop invert: 100% */
  },

  // Backdrop Sepia
  "backdrop-sepia-0": {
    /* Backdrop sepia: 0% */
  },
  "backdrop-sepia": {
    /* Backdrop sepia: 100% */
  },

  // Backdrop Saturate
  "backdrop-saturate-50": {
    /* Backdrop saturate: 50% */
  },
  "backdrop-saturate-100": {
    /* Backdrop saturate: 100% */
  },
  "backdrop-saturate-150": {
    /* Backdrop saturate: 150% */
  },
  "backdrop-saturate-200": {
    /* Backdrop saturate: 200% */
  },

  // Backdrop Hue Rotate
  "backdrop-hue-rotate-0": {
    /* Backdrop hue rotate: 0deg */
  },
  "backdrop-hue-rotate-15": {
    /* Backdrop hue rotate: 15deg */
  },
  "backdrop-hue-rotate-30": {
    /* Backdrop hue rotate: 30deg */
  },
  "backdrop-hue-rotate-60": {
    /* Backdrop hue rotate: 60deg */
  },
  "backdrop-hue-rotate-90": {
    /* Backdrop hue rotate: 90deg */
  },
  "backdrop-hue-rotate-180": {
    /* Backdrop hue rotate: 180deg */
  },

  // CamelCase versions
  blurNone: {
    /* No blur - blurAmount: 0 */
  },
  blurSm: {
    /* Small blur - blurAmount: 4 */
  },
  blurBase: {
    /* Base blur - blurAmount: 8 */
  },
  blurMd: {
    /* Medium blur - blurAmount: 12 */
  },
  blurLg: {
    /* Large blur - blurAmount: 16 */
  },
  blurXl: {
    /* Extra large blur - blurAmount: 20 */
  },
  blur2Xl: {
    /* 2x extra large blur - blurAmount: 24 */
  },
  blur3Xl: {
    /* 3x extra large blur - blurAmount: 40 */
  },

  brightness0: {
    /* Brightness: 0% */
  },
  brightness50: {
    /* Brightness: 50% */
  },
  brightness75: {
    /* Brightness: 75% */
  },
  brightness100: {
    /* Brightness: 100% */
  },
  brightness125: {
    /* Brightness: 125% */
  },
  brightness150: {
    /* Brightness: 150% */
  },
  brightness200: {
    /* Brightness: 200% */
  },

  contrast0: {
    /* Contrast: 0% */
  },
  contrast50: {
    /* Contrast: 50% */
  },
  contrast75: {
    /* Contrast: 75% */
  },
  contrast100: {
    /* Contrast: 100% */
  },
  contrast125: {
    /* Contrast: 125% */
  },
  contrast150: {
    /* Contrast: 150% */
  },
  contrast200: {
    /* Contrast: 200% */
  },

  grayscale0: {
    /* Grayscale: 0% */
  },
  grayscaleFull: {
    /* Grayscale: 100% */
  },

  invert0: {
    /* Invert: 0% */
  },
  invertFull: {
    /* Invert: 100% */
  },

  sepia0: {
    /* Sepia: 0% */
  },
  sepiaFull: {
    /* Sepia: 100% */
  },

  saturate0: {
    /* Saturate: 0% */
  },
  saturate50: {
    /* Saturate: 50% */
  },
  saturate100: {
    /* Saturate: 100% */
  },
  saturate150: {
    /* Saturate: 150% */
  },
  saturate200: {
    /* Saturate: 200% */
  },

  backdropBlurNone: {
    backgroundColor: "transparent",
  },
  backdropBlurSm: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  backdropBlur: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  backdropBlurMd: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  backdropBlurLg: {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
  },
  backdropBlurXl: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
};
