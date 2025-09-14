import { StyleSheet } from "react-native";

/**
 * TYPOGRAPHY UTILITIES
 *
 * Font sizes, weights, text alignment, decoration, and typography utilities
 * Based on Tailwind CSS typography scale
 */

export const typographyUtilities = StyleSheet.create({
  // ====================
  // FONT SIZE UTILITIES
  // ====================

  "text-xs": { fontSize: 12 },
  "text-sm": { fontSize: 14 },
  "text-base": { fontSize: 16 },
  "text-lg": { fontSize: 18 },
  "text-xl": { fontSize: 20 },
  "text-2xl": { fontSize: 24 },
  "text-3xl": { fontSize: 30 },
  "text-4xl": { fontSize: 36 },
  "text-5xl": { fontSize: 48 },
  "text-6xl": { fontSize: 60 },
  "text-7xl": { fontSize: 72 },
  "text-8xl": { fontSize: 96 },
  "text-9xl": { fontSize: 128 },

  // Additional custom text sizes
  "text-[14]": { fontSize: 14 },
  "text-[15]": { fontSize: 15 },
  "text-[17]": { fontSize: 17 },
  "text-[19]": { fontSize: 19 },
  "text-[21]": { fontSize: 21 },
  "text-[22]": { fontSize: 22 },
  "text-[26]": { fontSize: 26 },
  "text-[28]": { fontSize: 28 },
  "text-[32]": { fontSize: 32 },

  // ====================
  // FONT WEIGHT UTILITIES
  // ====================

  "font-thin": { fontWeight: "100" },
  "font-extralight": { fontWeight: "200" },
  "font-light": { fontWeight: "300" },
  "font-normal": { fontWeight: "400" },
  "font-medium": { fontWeight: "500" },
  "font-semibold": { fontWeight: "600" },
  "font-bold": { fontWeight: "700" },
  "font-extrabold": { fontWeight: "800" },
  "font-black": { fontWeight: "900" },

  // ====================
  // FONT FAMILY UTILITIES
  // ====================

  "font-sans": { fontFamily: "System" },
  "font-serif": { fontFamily: "serif" },
  "font-mono": { fontFamily: "monospace" },

  // ====================
  // TEXT ALIGNMENT UTILITIES
  // ====================

  "text-left": { textAlign: "left" },
  "text-center": { textAlign: "center" },
  "text-right": { textAlign: "right" },
  "text-justify": { textAlign: "justify" },

  // ====================
  // TEXT DECORATION UTILITIES
  // ====================

  underline: { textDecorationLine: "underline" },
  "line-through": { textDecorationLine: "line-through" },
  "no-underline": { textDecorationLine: "none" },

  // Text Decoration Style
  "decoration-solid": { textDecorationStyle: "solid" },
  "decoration-double": { textDecorationStyle: "double" },
  "decoration-dotted": { textDecorationStyle: "dotted" },
  "decoration-dashed": { textDecorationStyle: "dashed" },

  // Text Decoration Color (base colors)
  "decoration-inherit": { textDecorationColor: "inherit" },
  "decoration-current": { textDecorationColor: "currentColor" },
  "decoration-transparent": { textDecorationColor: "transparent" },
  "decoration-black": { textDecorationColor: "#000000" },
  "decoration-white": { textDecorationColor: "#FFFFFF" },
  "decoration-gray-500": { textDecorationColor: "#6B7280" },
  "decoration-blue-500": { textDecorationColor: "#3B82F6" },
  "decoration-red-500": { textDecorationColor: "#EF4444" },
  "decoration-green-500": { textDecorationColor: "#22C55E" },

  // ====================
  // TEXT TRANSFORM UTILITIES
  // ====================

  uppercase: { textTransform: "uppercase" },
  lowercase: { textTransform: "lowercase" },
  capitalize: { textTransform: "capitalize" },
  "normal-case": { textTransform: "none" },

  // ====================
  // FONT STYLE UTILITIES
  // ====================

  italic: { fontStyle: "italic" },
  "not-italic": { fontStyle: "normal" },

  // ====================
  // LINE HEIGHT UTILITIES
  // ====================

  "leading-3": { lineHeight: 12 },
  "leading-4": { lineHeight: 16 },
  "leading-5": { lineHeight: 20 },
  "leading-6": { lineHeight: 24 },
  "leading-7": { lineHeight: 28 },
  "leading-8": { lineHeight: 32 },
  "leading-9": { lineHeight: 36 },
  "leading-10": { lineHeight: 40 },
  "leading-none": { lineHeight: 1 },
  "leading-tight": { lineHeight: 1.25 },
  "leading-snug": { lineHeight: 1.375 },
  "leading-normal": { lineHeight: 1.5 },
  "leading-relaxed": { lineHeight: 1.625 },
  "leading-loose": { lineHeight: 2 },

  // ====================
  // LETTER SPACING UTILITIES
  // ====================

  "tracking-tighter": { letterSpacing: -0.05 },
  "tracking-tight": { letterSpacing: -0.025 },
  "tracking-normal": { letterSpacing: 0 },
  "tracking-wide": { letterSpacing: 0.025 },
  "tracking-wider": { letterSpacing: 0.05 },
  "tracking-widest": { letterSpacing: 0.1 },

  // ====================
  // TEXT SHADOW UTILITIES
  // ====================

  "text-shadow-sm": {
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
    textShadowColor: "rgba(0, 0, 0, 0.05)",
  },
  "text-shadow": {
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
    textShadowColor: "rgba(0, 0, 0, 0.1)",
  },
  "text-shadow-md": {
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
    textShadowColor: "rgba(0, 0, 0, 0.15)",
  },
  "text-shadow-lg": {
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 8,
    textShadowColor: "rgba(0, 0, 0, 0.2)",
  },
  "text-shadow-xl": {
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 12,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
  },
  "text-shadow-2xl": {
    textShadowOffset: { width: 0, height: 6 },
    textShadowRadius: 12,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
  },
  "text-shadow-none": {
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 0,
    textShadowColor: "transparent",
  },

  // ====================
  // TEXT COLOR UTILITIES (Basic Set)
  // ====================

  "text-transparent": { color: "transparent" },
  "text-current": { color: "currentColor" },
  "text-inherit": { color: "inherit" },
  "text-white": { color: "#FFFFFF" },
  "text-black": { color: "#000000" },

  // Gray colors
  "text-gray-50": { color: "#F9FAFB" },
  "text-gray-100": { color: "#F3F4F6" },
  "text-gray-200": { color: "#E5E7EB" },
  "text-gray-300": { color: "#D1D5DB" },
  "text-gray-400": { color: "#9CA3AF" },
  "text-gray-500": { color: "#6B7280" },
  "text-gray-600": { color: "#4B5563" },
  "text-gray-700": { color: "#374151" },
  "text-gray-800": { color: "#1F2937" },
  "text-gray-900": { color: "#111827" },

  // Primary colors (most common)
  "text-red-500": { color: "#EF4444" },
  "text-red-600": { color: "#DC2626" },
  "text-blue-500": { color: "#3B82F6" },
  "text-blue-600": { color: "#2563EB" },
  "text-green-500": { color: "#22C55E" },
  "text-green-600": { color: "#16A34A" },
  "text-yellow-500": { color: "#F59E0B" },
  "text-yellow-600": { color: "#D97706" },
  "text-purple-500": { color: "#A855F7" },
  "text-purple-600": { color: "#9333EA" },
  "text-indigo-500": { color: "#6366F1" },
  "text-indigo-600": { color: "#4F46E5" },
  "text-pink-500": { color: "#EC4899" },
  "text-pink-600": { color: "#DB2777" },
  "text-orange-500": { color: "#F97316" },
  "text-orange-600": { color: "#EA580C" },

  // ====================
  // VERTICAL ALIGNMENT (React Native compatible)
  // ====================

  "align-top": { verticalAlign: "top" },
  "align-middle": { verticalAlign: "middle" },
  "align-bottom": { verticalAlign: "bottom" },

  // ====================
  // CAMELCASE VERSIONS
  // ====================

  // Font Sizes
  textXs: { fontSize: 12 },
  textSm: { fontSize: 14 },
  textBase: { fontSize: 16 },
  textLg: { fontSize: 18 },
  textXl: { fontSize: 20 },
  text2xl: { fontSize: 24 },
  text3xl: { fontSize: 30 },
  text4xl: { fontSize: 36 },
  text5xl: { fontSize: 48 },

  // Font Weights
  fontThin: { fontWeight: "100" },
  fontLight: { fontWeight: "300" },
  fontNormal: { fontWeight: "400" },
  fontMedium: { fontWeight: "500" },
  fontSemibold: { fontWeight: "600" },
  fontBold: { fontWeight: "bold" },
  fontExtrabold: { fontWeight: "800" },
  fontBlack: { fontWeight: "900" },

  // Text Alignment
  textLeft: { textAlign: "left" },
  textCenter: { textAlign: "center" },
  textRight: { textAlign: "right" },
  textJustify: { textAlign: "justify" },

  // Text Decoration
  textUnderline: { textDecorationLine: "underline" },
  textLineThrough: { textDecorationLine: "line-through" },
  textNoUnderline: { textDecorationLine: "none" },

  // Text Transform
  textUppercase: { textTransform: "uppercase" },
  textLowercase: { textTransform: "lowercase" },
  textCapitalize: { textTransform: "capitalize" },
  textNormalCase: { textTransform: "none" },

  // Line Height
  leadingNone: { lineHeight: 1 },
  leadingTight: { lineHeight: 1.25 },
  leadingSnug: { lineHeight: 1.375 },
  leadingNormal: { lineHeight: 1.5 },
  leadingRelaxed: { lineHeight: 1.625 },
  leadingLoose: { lineHeight: 2 },

  // Letter Spacing
  trackingTighter: { letterSpacing: -0.5 },
  trackingTight: { letterSpacing: -0.25 },
  trackingNormal: { letterSpacing: 0 },
  trackingWide: { letterSpacing: 0.25 },
  trackingWider: { letterSpacing: 0.5 },
  trackingWidest: { letterSpacing: 1 },

  // Basic Text Colors (CamelCase)
  textTransparent: { color: "transparent" },
  textWhite: { color: "#FFFFFF" },
  textBlack: { color: "#000000" },
  textGray50: { color: "#F9FAFB" },
  textGray100: { color: "#F3F4F6" },
  textGray200: { color: "#E5E7EB" },
  textGray300: { color: "#D1D5DB" },
  textGray400: { color: "#9CA3AF" },
  textGray500: { color: "#6B7280" },
  textGray600: { color: "#4B5563" },
  textGray700: { color: "#374151" },
  textGray800: { color: "#1F2937" },
  textGray900: { color: "#111827" },
  textBlue500: { color: "#3B82F6" },
  textBlue600: { color: "#2563EB" },
  textRed500: { color: "#EF4444" },
  textRed600: { color: "#DC2626" },
  textGreen500: { color: "#22C55E" },
  textGreen600: { color: "#16A34A" },
  textYellow500: { color: "#F59E0B" },
  textYellow600: { color: "#D97706" },
  textPurple500: { color: "#A855F7" },
  textPurple600: { color: "#9333EA" },
  textIndigo500: { color: "#6366F1" },
  textIndigo600: { color: "#4F46E5" },
  textPink500: { color: "#EC4899" },
  textPink600: { color: "#DB2777" },
  textOrange500: { color: "#F97316" },
  textOrange600: { color: "#EA580C" },
});
