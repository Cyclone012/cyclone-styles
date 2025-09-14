import { StyleSheet } from "react-native";

/**
 * BORDERS & EFFECTS UTILITIES
 *
 * Border radius, shadows, opacity, and visual effects utilities
 * Based on Tailwind CSS border and effect classes
 */

export const bordersEffectsUtilities = StyleSheet.create({
  // ====================
  // BORDER RADIUS UTILITIES
  // ====================

  // All corners
  "rounded-none": { borderRadius: 0 },
  "rounded-sm": { borderRadius: 2 },
  rounded: { borderRadius: 4 },
  "rounded-md": { borderRadius: 6 },
  "rounded-lg": { borderRadius: 8 },
  "rounded-xl": { borderRadius: 12 },
  "rounded-2xl": { borderRadius: 16 },
  "rounded-3xl": { borderRadius: 24 },
  "rounded-full": { borderRadius: 9999 },

  // Specific corners
  "rounded-t-none": { borderTopLeftRadius: 0, borderTopRightRadius: 0 },
  "rounded-t-sm": { borderTopLeftRadius: 2, borderTopRightRadius: 2 },
  "rounded-t": { borderTopLeftRadius: 4, borderTopRightRadius: 4 },
  "rounded-t-md": { borderTopLeftRadius: 6, borderTopRightRadius: 6 },
  "rounded-t-lg": { borderTopLeftRadius: 8, borderTopRightRadius: 8 },
  "rounded-t-xl": { borderTopLeftRadius: 12, borderTopRightRadius: 12 },
  "rounded-t-2xl": { borderTopLeftRadius: 16, borderTopRightRadius: 16 },
  "rounded-t-3xl": { borderTopLeftRadius: 24, borderTopRightRadius: 24 },
  "rounded-t-full": { borderTopLeftRadius: 9999, borderTopRightRadius: 9999 },

  "rounded-r-none": { borderTopRightRadius: 0, borderBottomRightRadius: 0 },
  "rounded-r-sm": { borderTopRightRadius: 2, borderBottomRightRadius: 2 },
  "rounded-r": { borderTopRightRadius: 4, borderBottomRightRadius: 4 },
  "rounded-r-md": { borderTopRightRadius: 6, borderBottomRightRadius: 6 },
  "rounded-r-lg": { borderTopRightRadius: 8, borderBottomRightRadius: 8 },
  "rounded-r-xl": { borderTopRightRadius: 12, borderBottomRightRadius: 12 },
  "rounded-r-2xl": { borderTopRightRadius: 16, borderBottomRightRadius: 16 },
  "rounded-r-3xl": { borderTopRightRadius: 24, borderBottomRightRadius: 24 },
  "rounded-r-full": {
    borderTopRightRadius: 9999,
    borderBottomRightRadius: 9999,
  },

  "rounded-b-none": { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 },
  "rounded-b-sm": { borderBottomLeftRadius: 2, borderBottomRightRadius: 2 },
  "rounded-b": { borderBottomLeftRadius: 4, borderBottomRightRadius: 4 },
  "rounded-b-md": { borderBottomLeftRadius: 6, borderBottomRightRadius: 6 },
  "rounded-b-lg": { borderBottomLeftRadius: 8, borderBottomRightRadius: 8 },
  "rounded-b-xl": { borderBottomLeftRadius: 12, borderBottomRightRadius: 12 },
  "rounded-b-2xl": { borderBottomLeftRadius: 16, borderBottomRightRadius: 16 },
  "rounded-b-3xl": { borderBottomLeftRadius: 24, borderBottomRightRadius: 24 },
  "rounded-b-full": {
    borderBottomLeftRadius: 9999,
    borderBottomRightRadius: 9999,
  },

  "rounded-l-none": { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 },
  "rounded-l-sm": { borderTopLeftRadius: 2, borderBottomLeftRadius: 2 },
  "rounded-l": { borderTopLeftRadius: 4, borderBottomLeftRadius: 4 },
  "rounded-l-md": { borderTopLeftRadius: 6, borderBottomLeftRadius: 6 },
  "rounded-l-lg": { borderTopLeftRadius: 8, borderBottomLeftRadius: 8 },
  "rounded-l-xl": { borderTopLeftRadius: 12, borderBottomLeftRadius: 12 },
  "rounded-l-2xl": { borderTopLeftRadius: 16, borderBottomLeftRadius: 16 },
  "rounded-l-3xl": { borderTopLeftRadius: 24, borderBottomLeftRadius: 24 },
  "rounded-l-full": { borderTopLeftRadius: 9999, borderBottomLeftRadius: 9999 },

  // Individual corners
  "rounded-tl-none": { borderTopLeftRadius: 0 },
  "rounded-tl-sm": { borderTopLeftRadius: 2 },
  "rounded-tl": { borderTopLeftRadius: 4 },
  "rounded-tl-md": { borderTopLeftRadius: 6 },
  "rounded-tl-lg": { borderTopLeftRadius: 8 },
  "rounded-tl-xl": { borderTopLeftRadius: 12 },
  "rounded-tl-2xl": { borderTopLeftRadius: 16 },
  "rounded-tl-3xl": { borderTopLeftRadius: 24 },
  "rounded-tl-full": { borderTopLeftRadius: 9999 },

  "rounded-tr-none": { borderTopRightRadius: 0 },
  "rounded-tr-sm": { borderTopRightRadius: 2 },
  "rounded-tr": { borderTopRightRadius: 4 },
  "rounded-tr-md": { borderTopRightRadius: 6 },
  "rounded-tr-lg": { borderTopRightRadius: 8 },
  "rounded-tr-xl": { borderTopRightRadius: 12 },
  "rounded-tr-2xl": { borderTopRightRadius: 16 },
  "rounded-tr-3xl": { borderTopRightRadius: 24 },
  "rounded-tr-full": { borderTopRightRadius: 9999 },

  "rounded-br-none": { borderBottomRightRadius: 0 },
  "rounded-br-sm": { borderBottomRightRadius: 2 },
  "rounded-br": { borderBottomRightRadius: 4 },
  "rounded-br-md": { borderBottomRightRadius: 6 },
  "rounded-br-lg": { borderBottomRightRadius: 8 },
  "rounded-br-xl": { borderBottomRightRadius: 12 },
  "rounded-br-2xl": { borderBottomRightRadius: 16 },
  "rounded-br-3xl": { borderBottomRightRadius: 24 },
  "rounded-br-full": { borderBottomRightRadius: 9999 },

  "rounded-bl-none": { borderBottomLeftRadius: 0 },
  "rounded-bl-sm": { borderBottomLeftRadius: 2 },
  "rounded-bl": { borderBottomLeftRadius: 4 },
  "rounded-bl-md": { borderBottomLeftRadius: 6 },
  "rounded-bl-lg": { borderBottomLeftRadius: 8 },
  "rounded-bl-xl": { borderBottomLeftRadius: 12 },
  "rounded-bl-2xl": { borderBottomLeftRadius: 16 },
  "rounded-bl-3xl": { borderBottomLeftRadius: 24 },
  "rounded-bl-full": { borderBottomLeftRadius: 9999 },

  // ====================
  // BORDER WIDTH UTILITIES
  // ====================

  "border-0": { borderWidth: 0 },
  "border-2": { borderWidth: 2 },
  "border-4": { borderWidth: 4 },
  "border-8": { borderWidth: 8 },
  border: { borderWidth: 1 },

  "border-t-0": { borderTopWidth: 0 },
  "border-t-2": { borderTopWidth: 2 },
  "border-t-4": { borderTopWidth: 4 },
  "border-t-8": { borderTopWidth: 8 },
  "border-t": { borderTopWidth: 1 },

  "border-r-0": { borderRightWidth: 0 },
  "border-r-2": { borderRightWidth: 2 },
  "border-r-4": { borderRightWidth: 4 },
  "border-r-8": { borderRightWidth: 8 },
  "border-r": { borderRightWidth: 1 },

  "border-b-0": { borderBottomWidth: 0 },
  "border-b-2": { borderBottomWidth: 2 },
  "border-b-4": { borderBottomWidth: 4 },
  "border-b-8": { borderBottomWidth: 8 },
  "border-b": { borderBottomWidth: 1 },

  "border-l-0": { borderLeftWidth: 0 },
  "border-l-2": { borderLeftWidth: 2 },
  "border-l-4": { borderLeftWidth: 4 },
  "border-l-8": { borderLeftWidth: 8 },
  "border-l": { borderLeftWidth: 1 },

  "border-x-0": { borderLeftWidth: 0, borderRightWidth: 0 },
  "border-x-2": { borderLeftWidth: 2, borderRightWidth: 2 },
  "border-x-4": { borderLeftWidth: 4, borderRightWidth: 4 },
  "border-x-8": { borderLeftWidth: 8, borderRightWidth: 8 },
  "border-x": { borderLeftWidth: 1, borderRightWidth: 1 },

  "border-y-0": { borderTopWidth: 0, borderBottomWidth: 0 },
  "border-y-2": { borderTopWidth: 2, borderBottomWidth: 2 },
  "border-y-4": { borderTopWidth: 4, borderBottomWidth: 4 },
  "border-y-8": { borderTopWidth: 8, borderBottomWidth: 8 },
  "border-y": { borderTopWidth: 1, borderBottomWidth: 1 },

  // ====================
  // BORDER STYLE UTILITIES
  // ====================

  "border-solid": { borderStyle: "solid" },
  "border-dashed": { borderStyle: "dashed" },
  "border-dotted": { borderStyle: "dotted" },

  // ====================
  // BORDER COLOR UTILITIES (Basic Set)
  // ====================

  "border-transparent": { borderColor: "transparent" },
  "border-current": { borderColor: "currentColor" },
  "border-white": { borderColor: "#FFFFFF" },
  "border-black": { borderColor: "#000000" },

  // Gray borders
  "border-gray-50": { borderColor: "#F9FAFB" },
  "border-gray-100": { borderColor: "#F3F4F6" },
  "border-gray-200": { borderColor: "#E5E7EB" },
  "border-gray-300": { borderColor: "#D1D5DB" },
  "border-gray-400": { borderColor: "#9CA3AF" },
  "border-gray-500": { borderColor: "#6B7280" },
  "border-gray-600": { borderColor: "#4B5563" },
  "border-gray-700": { borderColor: "#374151" },
  "border-gray-800": { borderColor: "#1F2937" },
  "border-gray-900": { borderColor: "#111827" },

  // Primary colors
  "border-red-500": { borderColor: "#EF4444" },
  "border-blue-500": { borderColor: "#3B82F6" },
  "border-green-500": { borderColor: "#22C55E" },
  "border-yellow-500": { borderColor: "#F59E0B" },
  "border-purple-500": { borderColor: "#A855F7" },
  "border-indigo-500": { borderColor: "#6366F1" },
  "border-pink-500": { borderColor: "#EC4899" },
  "border-orange-500": { borderColor: "#F97316" },

  // ====================
  // SHADOW UTILITIES
  // ====================

  "shadow-none": {
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  "shadow-sm": {
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowColor: "#000000",
    elevation: 1,
  },
  shadow: {
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowColor: "#000000",
    elevation: 2,
  },
  "shadow-md": {
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowColor: "#000000",
    elevation: 3,
  },
  "shadow-lg": {
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 15,
    shadowColor: "#000000",
    elevation: 8,
  },
  "shadow-xl": {
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.25,
    shadowRadius: 25,
    shadowColor: "#000000",
    elevation: 12,
  },
  "shadow-2xl": {
    shadowOffset: { width: 0, height: 25 },
    shadowOpacity: 0.25,
    shadowRadius: 50,
    shadowColor: "#000000",
    elevation: 16,
  },

  // Shadow Colors
  "shadow-black": { shadowColor: "#000000" },
  "shadow-white": { shadowColor: "#FFFFFF" },
  "shadow-gray-500": { shadowColor: "#6B7280" },
  "shadow-red-500": { shadowColor: "#EF4444" },
  "shadow-blue-500": { shadowColor: "#3B82F6" },
  "shadow-green-500": { shadowColor: "#22C55E" },

  // ====================
  // OPACITY UTILITIES
  // ====================

  "opacity-0": { opacity: 0 },
  "opacity-5": { opacity: 0.05 },
  "opacity-10": { opacity: 0.1 },
  "opacity-15": { opacity: 0.15 },
  "opacity-20": { opacity: 0.2 },
  "opacity-25": { opacity: 0.25 },
  "opacity-30": { opacity: 0.3 },
  "opacity-35": { opacity: 0.35 },
  "opacity-40": { opacity: 0.4 },
  "opacity-45": { opacity: 0.45 },
  "opacity-50": { opacity: 0.5 },
  "opacity-55": { opacity: 0.55 },
  "opacity-60": { opacity: 0.6 },
  "opacity-65": { opacity: 0.65 },
  "opacity-70": { opacity: 0.7 },
  "opacity-75": { opacity: 0.75 },
  "opacity-80": { opacity: 0.8 },
  "opacity-85": { opacity: 0.85 },
  "opacity-90": { opacity: 0.9 },
  "opacity-95": { opacity: 0.95 },
  "opacity-100": { opacity: 1 },

  // ====================
  // CAMELCASE VERSIONS
  // ====================

  // Border Radius
  roundedNone: { borderRadius: 0 },
  roundedSm: { borderRadius: 2 },
  roundedMd: { borderRadius: 6 },
  roundedLg: { borderRadius: 8 },
  roundedXl: { borderRadius: 12 },
  rounded2xl: { borderRadius: 16 },
  rounded3xl: { borderRadius: 24 },
  roundedFull: { borderRadius: 9999 },

  // Border Width
  border0: { borderWidth: 0 },
  border2: { borderWidth: 2 },
  border4: { borderWidth: 4 },
  border8: { borderWidth: 8 },

  borderT: { borderTopWidth: 1 },
  borderR: { borderRightWidth: 1 },
  borderB: { borderBottomWidth: 1 },
  borderL: { borderLeftWidth: 1 },

  // Border Style
  borderSolid: { borderStyle: "solid" },
  borderDashed: { borderStyle: "dashed" },
  borderDotted: { borderStyle: "dotted" },

  // Border Colors
  borderTransparent: { borderColor: "transparent" },
  borderWhite: { borderColor: "#FFFFFF" },
  borderBlack: { borderColor: "#000000" },
  borderGray100: { borderColor: "#F3F4F6" },
  borderGray200: { borderColor: "#E5E7EB" },
  borderGray300: { borderColor: "#D1D5DB" },
  borderGray400: { borderColor: "#9CA3AF" },
  borderGray500: { borderColor: "#6B7280" },
  borderBlue500: { borderColor: "#3B82F6" },
  borderRed500: { borderColor: "#EF4444" },
  borderGreen500: { borderColor: "#22C55E" },

  // Shadows
  shadowNone: {
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  shadowSm: {
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowColor: "#000000",
    elevation: 1,
  },
  shadowMd: {
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowColor: "#000000",
    elevation: 3,
  },
  shadowLg: {
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 15,
    shadowColor: "#000000",
    elevation: 8,
  },
  shadowXl: {
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.25,
    shadowRadius: 25,
    shadowColor: "#000000",
    elevation: 12,
  },

  // Opacity
  opacity0: { opacity: 0 },
  opacity10: { opacity: 0.1 },
  opacity20: { opacity: 0.2 },
  opacity25: { opacity: 0.25 },
  opacity30: { opacity: 0.3 },
  opacity40: { opacity: 0.4 },
  opacity50: { opacity: 0.5 },
  opacity60: { opacity: 0.6 },
  opacity70: { opacity: 0.7 },
  opacity75: { opacity: 0.75 },
  opacity80: { opacity: 0.8 },
  opacity90: { opacity: 0.9 },
  opacity100: { opacity: 1 },
});
