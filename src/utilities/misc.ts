import { StyleSheet } from "react-native";

/**
 * MISCELLANEOUS UTILITIES
 *
 * Transforms, cursor, user interaction, and other remaining utilities
 * Based on Tailwind CSS miscellaneous classes
 */

export const miscUtilities = StyleSheet.create({
  // ====================
  // TRANSFORM UTILITIES
  // ====================

  // Base Transform
  transform: {
    /* Base transform utility - enables hardware acceleration */
  },

  // Scale
  "scale-0": { transform: [{ scale: 0 }] },
  "scale-50": { transform: [{ scale: 0.5 }] },
  "scale-75": { transform: [{ scale: 0.75 }] },
  "scale-90": { transform: [{ scale: 0.9 }] },
  "scale-95": { transform: [{ scale: 0.95 }] },
  "scale-100": { transform: [{ scale: 1 }] },
  "scale-105": { transform: [{ scale: 1.05 }] },
  "scale-110": { transform: [{ scale: 1.1 }] },
  "scale-125": { transform: [{ scale: 1.25 }] },
  "scale-150": { transform: [{ scale: 1.5 }] },

  // Scale X
  "scale-x-0": { transform: [{ scaleX: 0 }] },
  "scale-x-50": { transform: [{ scaleX: 0.5 }] },
  "scale-x-75": { transform: [{ scaleX: 0.75 }] },
  "scale-x-90": { transform: [{ scaleX: 0.9 }] },
  "scale-x-95": { transform: [{ scaleX: 0.95 }] },
  "scale-x-100": { transform: [{ scaleX: 1 }] },
  "scale-x-105": { transform: [{ scaleX: 1.05 }] },
  "scale-x-110": { transform: [{ scaleX: 1.1 }] },
  "scale-x-125": { transform: [{ scaleX: 1.25 }] },
  "scale-x-150": { transform: [{ scaleX: 1.5 }] },

  // Scale Y
  "scale-y-0": { transform: [{ scaleY: 0 }] },
  "scale-y-50": { transform: [{ scaleY: 0.5 }] },
  "scale-y-75": { transform: [{ scaleY: 0.75 }] },
  "scale-y-90": { transform: [{ scaleY: 0.9 }] },
  "scale-y-95": { transform: [{ scaleY: 0.95 }] },
  "scale-y-100": { transform: [{ scaleY: 1 }] },
  "scale-y-105": { transform: [{ scaleY: 1.05 }] },
  "scale-y-110": { transform: [{ scaleY: 1.1 }] },
  "scale-y-125": { transform: [{ scaleY: 1.25 }] },
  "scale-y-150": { transform: [{ scaleY: 1.5 }] },

  // Rotate
  "rotate-0": { transform: [{ rotate: "0deg" }] },
  "rotate-1": { transform: [{ rotate: "1deg" }] },
  "rotate-2": { transform: [{ rotate: "2deg" }] },
  "rotate-3": { transform: [{ rotate: "3deg" }] },
  "rotate-6": { transform: [{ rotate: "6deg" }] },
  "rotate-12": { transform: [{ rotate: "12deg" }] },
  "rotate-45": { transform: [{ rotate: "45deg" }] },
  "rotate-90": { transform: [{ rotate: "90deg" }] },
  "rotate-180": { transform: [{ rotate: "180deg" }] },
  "-rotate-1": { transform: [{ rotate: "-1deg" }] },
  "-rotate-2": { transform: [{ rotate: "-2deg" }] },
  "-rotate-3": { transform: [{ rotate: "-3deg" }] },
  "-rotate-6": { transform: [{ rotate: "-6deg" }] },
  "-rotate-12": { transform: [{ rotate: "-12deg" }] },
  "-rotate-45": { transform: [{ rotate: "-45deg" }] },
  "-rotate-90": { transform: [{ rotate: "-90deg" }] },
  "-rotate-180": { transform: [{ rotate: "-180deg" }] },

  // Translate X
  "translate-x-0": { transform: [{ translateX: 0 }] },
  "translate-x-px": { transform: [{ translateX: 1 }] },
  "translate-x-0.5": { transform: [{ translateX: 2 }] },
  "translate-x-1": { transform: [{ translateX: 4 }] },
  "translate-x-1.5": { transform: [{ translateX: 6 }] },
  "translate-x-2": { transform: [{ translateX: 8 }] },
  "translate-x-2.5": { transform: [{ translateX: 10 }] },
  "translate-x-3": { transform: [{ translateX: 12 }] },
  "translate-x-3.5": { transform: [{ translateX: 14 }] },
  "translate-x-4": { transform: [{ translateX: 16 }] },
  "translate-x-5": { transform: [{ translateX: 20 }] },
  "translate-x-6": { transform: [{ translateX: 24 }] },
  "translate-x-7": { transform: [{ translateX: 28 }] },
  "translate-x-8": { transform: [{ translateX: 32 }] },
  "translate-x-9": { transform: [{ translateX: 36 }] },
  "translate-x-10": { transform: [{ translateX: 40 }] },
  "translate-x-11": { transform: [{ translateX: 44 }] },
  "translate-x-12": { transform: [{ translateX: 48 }] },
  "translate-x-14": { transform: [{ translateX: 56 }] },
  "translate-x-16": { transform: [{ translateX: 64 }] },
  "translate-x-20": { transform: [{ translateX: 80 }] },
  "translate-x-24": { transform: [{ translateX: 96 }] },
  "translate-x-28": { transform: [{ translateX: 112 }] },
  "translate-x-32": { transform: [{ translateX: 128 }] },
  "translate-x-36": { transform: [{ translateX: 144 }] },
  "translate-x-40": { transform: [{ translateX: 160 }] },
  "translate-x-44": { transform: [{ translateX: 176 }] },
  "translate-x-48": { transform: [{ translateX: 192 }] },
  "translate-x-52": { transform: [{ translateX: 208 }] },
  "translate-x-56": { transform: [{ translateX: 224 }] },
  "translate-x-60": { transform: [{ translateX: 240 }] },
  "translate-x-64": { transform: [{ translateX: 256 }] },
  "translate-x-72": { transform: [{ translateX: 288 }] },
  "translate-x-80": { transform: [{ translateX: 320 }] },
  "translate-x-96": { transform: [{ translateX: 384 }] },

  // Negative Translate X
  "-translate-x-px": { transform: [{ translateX: -1 }] },
  "-translate-x-0.5": { transform: [{ translateX: -2 }] },
  "-translate-x-1": { transform: [{ translateX: -4 }] },
  "-translate-x-1.5": { transform: [{ translateX: -6 }] },
  "-translate-x-2": { transform: [{ translateX: -8 }] },
  "-translate-x-2.5": { transform: [{ translateX: -10 }] },
  "-translate-x-3": { transform: [{ translateX: -12 }] },
  "-translate-x-3.5": { transform: [{ translateX: -14 }] },
  "-translate-x-4": { transform: [{ translateX: -16 }] },
  "-translate-x-5": { transform: [{ translateX: -20 }] },
  "-translate-x-6": { transform: [{ translateX: -24 }] },
  "-translate-x-7": { transform: [{ translateX: -28 }] },
  "-translate-x-8": { transform: [{ translateX: -32 }] },
  "-translate-x-9": { transform: [{ translateX: -36 }] },
  "-translate-x-10": { transform: [{ translateX: -40 }] },
  "-translate-x-11": { transform: [{ translateX: -44 }] },
  "-translate-x-12": { transform: [{ translateX: -48 }] },
  "-translate-x-14": { transform: [{ translateX: -56 }] },
  "-translate-x-16": { transform: [{ translateX: -64 }] },
  "-translate-x-20": { transform: [{ translateX: -80 }] },
  "-translate-x-24": { transform: [{ translateX: -96 }] },
  "-translate-x-28": { transform: [{ translateX: -112 }] },
  "-translate-x-32": { transform: [{ translateX: -128 }] },
  "-translate-x-36": { transform: [{ translateX: -144 }] },
  "-translate-x-40": { transform: [{ translateX: -160 }] },
  "-translate-x-44": { transform: [{ translateX: -176 }] },
  "-translate-x-48": { transform: [{ translateX: -192 }] },
  "-translate-x-52": { transform: [{ translateX: -208 }] },
  "-translate-x-56": { transform: [{ translateX: -224 }] },
  "-translate-x-60": { transform: [{ translateX: -240 }] },
  "-translate-x-64": { transform: [{ translateX: -256 }] },
  "-translate-x-72": { transform: [{ translateX: -288 }] },
  "-translate-x-80": { transform: [{ translateX: -320 }] },
  "-translate-x-96": { transform: [{ translateX: -384 }] },

  // Translate Y
  "translate-y-0": { transform: [{ translateY: 0 }] },
  "translate-y-px": { transform: [{ translateY: 1 }] },
  "translate-y-0.5": { transform: [{ translateY: 2 }] },
  "translate-y-1": { transform: [{ translateY: 4 }] },
  "translate-y-1.5": { transform: [{ translateY: 6 }] },
  "translate-y-2": { transform: [{ translateY: 8 }] },
  "translate-y-2.5": { transform: [{ translateY: 10 }] },
  "translate-y-3": { transform: [{ translateY: 12 }] },
  "translate-y-3.5": { transform: [{ translateY: 14 }] },
  "translate-y-4": { transform: [{ translateY: 16 }] },
  "translate-y-5": { transform: [{ translateY: 20 }] },
  "translate-y-6": { transform: [{ translateY: 24 }] },
  "translate-y-7": { transform: [{ translateY: 28 }] },
  "translate-y-8": { transform: [{ translateY: 32 }] },
  "translate-y-9": { transform: [{ translateY: 36 }] },
  "translate-y-10": { transform: [{ translateY: 40 }] },
  "translate-y-11": { transform: [{ translateY: 44 }] },
  "translate-y-12": { transform: [{ translateY: 48 }] },
  "translate-y-14": { transform: [{ translateY: 56 }] },
  "translate-y-16": { transform: [{ translateY: 64 }] },
  "translate-y-20": { transform: [{ translateY: 80 }] },
  "translate-y-24": { transform: [{ translateY: 96 }] },
  "translate-y-28": { transform: [{ translateY: 112 }] },
  "translate-y-32": { transform: [{ translateY: 128 }] },
  "translate-y-36": { transform: [{ translateY: 144 }] },
  "translate-y-40": { transform: [{ translateY: 160 }] },
  "translate-y-44": { transform: [{ translateY: 176 }] },
  "translate-y-48": { transform: [{ translateY: 192 }] },
  "translate-y-52": { transform: [{ translateY: 208 }] },
  "translate-y-56": { transform: [{ translateY: 224 }] },
  "translate-y-60": { transform: [{ translateY: 240 }] },
  "translate-y-64": { transform: [{ translateY: 256 }] },
  "translate-y-72": { transform: [{ translateY: 288 }] },
  "translate-y-80": { transform: [{ translateY: 320 }] },
  "translate-y-96": { transform: [{ translateY: 384 }] },

  // Negative Translate Y
  "-translate-y-px": { transform: [{ translateY: -1 }] },
  "-translate-y-0.5": { transform: [{ translateY: -2 }] },
  "-translate-y-1": { transform: [{ translateY: -4 }] },
  "-translate-y-1.5": { transform: [{ translateY: -6 }] },
  "-translate-y-2": { transform: [{ translateY: -8 }] },
  "-translate-y-2.5": { transform: [{ translateY: -10 }] },
  "-translate-y-3": { transform: [{ translateY: -12 }] },
  "-translate-y-3.5": { transform: [{ translateY: -14 }] },
  "-translate-y-4": { transform: [{ translateY: -16 }] },
  "-translate-y-5": { transform: [{ translateY: -20 }] },
  "-translate-y-6": { transform: [{ translateY: -24 }] },
  "-translate-y-7": { transform: [{ translateY: -28 }] },
  "-translate-y-8": { transform: [{ translateY: -32 }] },
  "-translate-y-9": { transform: [{ translateY: -36 }] },
  "-translate-y-10": { transform: [{ translateY: -40 }] },
  "-translate-y-11": { transform: [{ translateY: -44 }] },
  "-translate-y-12": { transform: [{ translateY: -48 }] },
  "-translate-y-14": { transform: [{ translateY: -56 }] },
  "-translate-y-16": { transform: [{ translateY: -64 }] },
  "-translate-y-20": { transform: [{ translateY: -80 }] },
  "-translate-y-24": { transform: [{ translateY: -96 }] },
  "-translate-y-28": { transform: [{ translateY: -112 }] },
  "-translate-y-32": { transform: [{ translateY: -128 }] },
  "-translate-y-36": { transform: [{ translateY: -144 }] },
  "-translate-y-40": { transform: [{ translateY: -160 }] },
  "-translate-y-44": { transform: [{ translateY: -176 }] },
  "-translate-y-48": { transform: [{ translateY: -192 }] },
  "-translate-y-52": { transform: [{ translateY: -208 }] },
  "-translate-y-56": { transform: [{ translateY: -224 }] },
  "-translate-y-60": { transform: [{ translateY: -240 }] },
  "-translate-y-64": { transform: [{ translateY: -256 }] },
  "-translate-y-72": { transform: [{ translateY: -288 }] },
  "-translate-y-80": { transform: [{ translateY: -320 }] },
  "-translate-y-96": { transform: [{ translateY: -384 }] },

  // Skew X (React Native may have limited support)
  "skew-x-0": { transform: [{ skewX: "0deg" }] },
  "skew-x-1": { transform: [{ skewX: "1deg" }] },
  "skew-x-2": { transform: [{ skewX: "2deg" }] },
  "skew-x-3": { transform: [{ skewX: "3deg" }] },
  "skew-x-6": { transform: [{ skewX: "6deg" }] },
  "skew-x-12": { transform: [{ skewX: "12deg" }] },
  "-skew-x-1": { transform: [{ skewX: "-1deg" }] },
  "-skew-x-2": { transform: [{ skewX: "-2deg" }] },
  "-skew-x-3": { transform: [{ skewX: "-3deg" }] },
  "-skew-x-6": { transform: [{ skewX: "-6deg" }] },
  "-skew-x-12": { transform: [{ skewX: "-12deg" }] },

  // Skew Y (React Native may have limited support)
  "skew-y-0": { transform: [{ skewY: "0deg" }] },
  "skew-y-1": { transform: [{ skewY: "1deg" }] },
  "skew-y-2": { transform: [{ skewY: "2deg" }] },
  "skew-y-3": { transform: [{ skewY: "3deg" }] },
  "skew-y-6": { transform: [{ skewY: "6deg" }] },
  "skew-y-12": { transform: [{ skewY: "12deg" }] },
  "-skew-y-1": { transform: [{ skewY: "-1deg" }] },
  "-skew-y-2": { transform: [{ skewY: "-2deg" }] },
  "-skew-y-3": { transform: [{ skewY: "-3deg" }] },
  "-skew-y-6": { transform: [{ skewY: "-6deg" }] },
  "-skew-y-12": { transform: [{ skewY: "-12deg" }] },

  // ====================
  // INTERACTIVITY UTILITIES
  // ====================

  // Pointer Events (React Native equivalent)
  "pointer-events-none": { pointerEvents: "none" },
  "pointer-events-auto": { pointerEvents: "auto" },
  "pointer-events-box-none": { pointerEvents: "box-none" },
  "pointer-events-box-only": { pointerEvents: "box-only" },

  // ====================
  // ACCESSIBILITY UTILITIES
  // ====================

  // Screen Reader (React Native compatible)
  "sr-only": {
    position: "absolute",
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    borderWidth: 0,
  },
  "not-sr-only": {
    width: "auto",
    height: "auto",
    padding: 0,
    margin: 0,
    overflow: "visible",
  },

  // ====================
  // BACKDROP UTILITIES (React Native limited support)
  // ====================

  // These are placeholder utilities for consistency with Tailwind
  "backdrop-opacity-0": { opacity: 0 },
  "backdrop-opacity-5": { opacity: 0.05 },
  "backdrop-opacity-10": { opacity: 0.1 },
  "backdrop-opacity-20": { opacity: 0.2 },
  "backdrop-opacity-25": { opacity: 0.25 },
  "backdrop-opacity-30": { opacity: 0.3 },
  "backdrop-opacity-40": { opacity: 0.4 },
  "backdrop-opacity-50": { opacity: 0.5 },
  "backdrop-opacity-60": { opacity: 0.6 },
  "backdrop-opacity-70": { opacity: 0.7 },
  "backdrop-opacity-75": { opacity: 0.75 },
  "backdrop-opacity-80": { opacity: 0.8 },
  "backdrop-opacity-90": { opacity: 0.9 },
  "backdrop-opacity-95": { opacity: 0.95 },
  "backdrop-opacity-100": { opacity: 1 },

  // ====================
  // CAMELCASE VERSIONS
  // ====================

  // Scale
  scale0: { transform: [{ scale: 0 }] },
  scale50: { transform: [{ scale: 0.5 }] },
  scale75: { transform: [{ scale: 0.75 }] },
  scale90: { transform: [{ scale: 0.9 }] },
  scale95: { transform: [{ scale: 0.95 }] },
  scale100: { transform: [{ scale: 1 }] },
  scale105: { transform: [{ scale: 1.05 }] },
  scale110: { transform: [{ scale: 1.1 }] },
  scale125: { transform: [{ scale: 1.25 }] },
  scale150: { transform: [{ scale: 1.5 }] },

  // Rotate
  rotate0: { transform: [{ rotate: "0deg" }] },
  rotate1: { transform: [{ rotate: "1deg" }] },
  rotate2: { transform: [{ rotate: "2deg" }] },
  rotate3: { transform: [{ rotate: "3deg" }] },
  rotate6: { transform: [{ rotate: "6deg" }] },
  rotate12: { transform: [{ rotate: "12deg" }] },
  rotate45: { transform: [{ rotate: "45deg" }] },
  rotate90: { transform: [{ rotate: "90deg" }] },
  rotate180: { transform: [{ rotate: "180deg" }] },

  // Translate X (common values)
  translateX0: { transform: [{ translateX: 0 }] },
  translateX1: { transform: [{ translateX: 4 }] },
  translateX2: { transform: [{ translateX: 8 }] },
  translateX3: { transform: [{ translateX: 12 }] },
  translateX4: { transform: [{ translateX: 16 }] },
  translateX5: { transform: [{ translateX: 20 }] },
  translateX6: { transform: [{ translateX: 24 }] },
  translateX8: { transform: [{ translateX: 32 }] },
  translateX10: { transform: [{ translateX: 40 }] },
  translateX12: { transform: [{ translateX: 48 }] },
  translateX16: { transform: [{ translateX: 64 }] },
  translateX20: { transform: [{ translateX: 80 }] },
  translateX24: { transform: [{ translateX: 96 }] },

  // Translate Y (common values)
  translateY0: { transform: [{ translateY: 0 }] },
  translateY1: { transform: [{ translateY: 4 }] },
  translateY2: { transform: [{ translateY: 8 }] },
  translateY3: { transform: [{ translateY: 12 }] },
  translateY4: { transform: [{ translateY: 16 }] },
  translateY5: { transform: [{ translateY: 20 }] },
  translateY6: { transform: [{ translateY: 24 }] },
  translateY8: { transform: [{ translateY: 32 }] },
  translateY10: { transform: [{ translateY: 40 }] },
  translateY12: { transform: [{ translateY: 48 }] },
  translateY16: { transform: [{ translateY: 64 }] },
  translateY20: { transform: [{ translateY: 80 }] },
  translateY24: { transform: [{ translateY: 96 }] },

  // Pointer Events
  pointerEventsNone: { pointerEvents: "none" },
  pointerEventsAuto: { pointerEvents: "auto" },
  pointerEventsBoxNone: { pointerEvents: "box-none" },
  pointerEventsBoxOnly: { pointerEvents: "box-only" },

  // Screen Reader
  srOnly: {
    position: "absolute",
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    borderWidth: 0,
  },
  notSrOnly: {
    width: "auto",
    height: "auto",
    padding: 0,
    margin: 0,
    overflow: "visible",
  },

  // Backdrop Opacity (common values)
  backdropOpacity0: { opacity: 0 },
  backdropOpacity25: { opacity: 0.25 },
  backdropOpacity50: { opacity: 0.5 },
  backdropOpacity75: { opacity: 0.75 },
  backdropOpacity100: { opacity: 1 },
});
