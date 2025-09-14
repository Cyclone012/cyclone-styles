import { StyleSheet } from "react-native";

/**
 * LAYOUT UTILITIES
 *
 * Flexbox, positioning, display, grid and layout-related utilities
 * Based on Tailwind CSS layout utilities
 */

export const layoutUtilities = StyleSheet.create({
  // ====================
  // FLEXBOX UTILITIES
  // ====================

  // Display Flex
  flex: { display: "flex" },
  "inline-flex": { display: "flex" },
  hidden: { display: "none" },

  // Flex Direction
  "flex-row": { flexDirection: "row" },
  "flex-row-reverse": { flexDirection: "row-reverse" },
  "flex-col": { flexDirection: "column" },
  "flex-column": { flexDirection: "column" },
  "flex-col-reverse": { flexDirection: "column-reverse" },

  // Flex Wrap
  "flex-wrap": { flexWrap: "wrap" },
  "flex-wrap-reverse": { flexWrap: "wrap-reverse" },
  "flex-nowrap": { flexWrap: "nowrap" },

  // Flex
  "flex-1": { flex: 1 },
  "flex-auto": { flex: 1 },
  "flex-initial": { flex: 0 },
  "flex-none": { flex: 0 },

  // Flex Grow
  "flex-grow": { flexGrow: 1 },
  "flex-grow-0": { flexGrow: 0 },

  // Flex Shrink
  "flex-shrink": { flexShrink: 1 },
  "flex-shrink-0": { flexShrink: 0 },

  // ====================
  // ALIGNMENT UTILITIES
  // ====================

  // Justify Content
  "justify-start": { justifyContent: "flex-start" },
  "justify-end": { justifyContent: "flex-end" },
  "justify-center": { justifyContent: "center" },
  "justify-between": { justifyContent: "space-between" },
  "justify-around": { justifyContent: "space-around" },
  "justify-evenly": { justifyContent: "space-evenly" },

  // Align Items
  "items-start": { alignItems: "flex-start" },
  "items-end": { alignItems: "flex-end" },
  "items-center": { alignItems: "center" },
  "items-baseline": { alignItems: "baseline" },
  "items-stretch": { alignItems: "stretch" },

  // Align Self
  "self-auto": { alignSelf: "auto" },
  "self-start": { alignSelf: "flex-start" },
  "self-end": { alignSelf: "flex-end" },
  "self-center": { alignSelf: "center" },
  "self-stretch": { alignSelf: "stretch" },
  "self-baseline": { alignSelf: "baseline" },

  // Align Content
  "content-center": { alignContent: "center" },
  "content-start": { alignContent: "flex-start" },
  "content-end": { alignContent: "flex-end" },
  "content-between": { alignContent: "space-between" },
  "content-around": { alignContent: "space-around" },
  "content-stretch": { alignContent: "stretch" },

  // ====================
  // POSITIONING UTILITIES
  // ====================

  // Position
  static: { position: "relative" },
  fixed: { position: "absolute" },
  absolute: { position: "absolute" },
  relative: { position: "relative" },

  // Top
  "top-0": { top: 0 },
  "top-1": { top: 4 },
  "top-2": { top: 8 },
  "top-3": { top: 12 },
  "top-4": { top: 16 },
  "top-5": { top: 20 },
  "top-6": { top: 24 },
  "top-8": { top: 32 },
  "top-10": { top: 40 },
  "top-12": { top: 48 },
  "top-16": { top: 64 },
  "top-20": { top: 80 },
  "top-24": { top: 96 },
  "top-auto": { top: "auto" },
  "top-1/2": { top: "50%" },
  "top-full": { top: "100%" },

  // Right
  "right-0": { right: 0 },
  "right-1": { right: 4 },
  "right-2": { right: 8 },
  "right-3": { right: 12 },
  "right-4": { right: 16 },
  "right-5": { right: 20 },
  "right-6": { right: 24 },
  "right-8": { right: 32 },
  "right-10": { right: 40 },
  "right-12": { right: 48 },
  "right-16": { right: 64 },
  "right-20": { right: 80 },
  "right-24": { right: 96 },
  "right-auto": { right: "auto" },
  "right-1/2": { right: "50%" },
  "right-full": { right: "100%" },

  // Bottom
  "bottom-0": { bottom: 0 },
  "bottom-1": { bottom: 4 },
  "bottom-2": { bottom: 8 },
  "bottom-3": { bottom: 12 },
  "bottom-4": { bottom: 16 },
  "bottom-5": { bottom: 20 },
  "bottom-6": { bottom: 24 },
  "bottom-8": { bottom: 32 },
  "bottom-10": { bottom: 40 },
  "bottom-12": { bottom: 48 },
  "bottom-16": { bottom: 64 },
  "bottom-20": { bottom: 80 },
  "bottom-24": { bottom: 96 },
  "bottom-auto": { bottom: "auto" },
  "bottom-1/2": { bottom: "50%" },
  "bottom-full": { bottom: "100%" },

  // Left
  "left-0": { left: 0 },
  "left-1": { left: 4 },
  "left-2": { left: 8 },
  "left-3": { left: 12 },
  "left-4": { left: 16 },
  "left-5": { left: 20 },
  "left-6": { left: 24 },
  "left-8": { left: 32 },
  "left-10": { left: 40 },
  "left-12": { left: 48 },
  "left-16": { left: 64 },
  "left-20": { left: 80 },
  "left-24": { left: 96 },
  "left-auto": { left: "auto" },
  "left-1/2": { left: "50%" },
  "left-full": { left: "100%" },

  // Inset (shorthand for top, right, bottom, left)
  "inset-0": { top: 0, right: 0, bottom: 0, left: 0 },
  "inset-1": { top: 4, right: 4, bottom: 4, left: 4 },
  "inset-2": { top: 8, right: 8, bottom: 8, left: 8 },
  "inset-4": { top: 16, right: 16, bottom: 16, left: 16 },
  "inset-8": { top: 32, right: 32, bottom: 32, left: 32 },
  "inset-auto": { top: "auto", right: "auto", bottom: "auto", left: "auto" },
  "inset-x-0": { left: 0, right: 0 },
  "inset-x-auto": { left: "auto", right: "auto" },
  "inset-y-0": { top: 0, bottom: 0 },
  "inset-y-auto": { top: "auto", bottom: "auto" },

  // Negative positioning
  "-top-1": { top: -4 },
  "-top-2": { top: -8 },
  "-top-4": { top: -16 },
  "-top-8": { top: -32 },
  "-top-1/2": { top: "-50%" },
  "-top-full": { top: "-100%" },

  "-right-1": { right: -4 },
  "-right-2": { right: -8 },
  "-right-4": { right: -16 },
  "-right-8": { right: -32 },
  "-right-1/2": { right: "-50%" },
  "-right-full": { right: "-100%" },

  "-bottom-1": { bottom: -4 },
  "-bottom-2": { bottom: -8 },
  "-bottom-4": { bottom: -16 },
  "-bottom-8": { bottom: -32 },
  "-bottom-1/2": { bottom: "-50%" },
  "-bottom-full": { bottom: "-100%" },

  "-left-1": { left: -4 },
  "-left-2": { left: -8 },
  "-left-4": { left: -16 },
  "-left-8": { left: -32 },
  "-left-1/2": { left: "-50%" },
  "-left-full": { left: "-100%" },

  // ====================
  // Z-INDEX UTILITIES
  // ====================

  "z-0": { zIndex: 0 },
  "z-10": { zIndex: 10 },
  "z-20": { zIndex: 20 },
  "z-30": { zIndex: 30 },
  "z-40": { zIndex: 40 },
  "z-50": { zIndex: 50 },
  "z-auto": { zIndex: 0 },

  // ====================
  // OVERFLOW UTILITIES
  // ====================

  "overflow-visible": { overflow: "visible" },
  "overflow-hidden": { overflow: "hidden" },
  "overflow-scroll": { overflow: "scroll" },

  // ====================
  // GRID UTILITIES
  // ====================
  // Note: React Native uses Flexbox for grid-like layouts

  // Grid Container
  grid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  "inline-grid": {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  // Grid Flow
  "grid-flow-row": { flexDirection: "column" },
  "grid-flow-col": { flexDirection: "row" },
  "grid-flow-row-dense": { flexDirection: "column" },
  "grid-flow-col-dense": { flexDirection: "row" },

  // Column Spans (using flexBasis for React Native compatibility)
  "col-auto": { flexBasis: "auto" },
  "col-span-1": { flexBasis: "8.333333%" },
  "col-span-2": { flexBasis: "16.666667%" },
  "col-span-3": { flexBasis: "25%" },
  "col-span-4": { flexBasis: "33.333333%" },
  "col-span-5": { flexBasis: "41.666667%" },
  "col-span-6": { flexBasis: "50%" },
  "col-span-7": { flexBasis: "58.333333%" },
  "col-span-8": { flexBasis: "66.666667%" },
  "col-span-9": { flexBasis: "75%" },
  "col-span-10": { flexBasis: "83.333333%" },
  "col-span-11": { flexBasis: "91.666667%" },
  "col-span-12": { flexBasis: "100%" },
  "col-span-full": { flexBasis: "100%" },

  // Auto sizing
  "auto-cols-auto": { flex: 0 },
  "auto-cols-fr": { flex: 1 },
  "auto-rows-auto": { flex: 0 },
  "auto-rows-fr": { flex: 1 },

  // ====================
  // CAMELCASE VERSIONS
  // ====================

  // Flex
  flex1: { flex: 1 },
  flexRow: { flexDirection: "row" },
  flexCol: { flexDirection: "column" },
  flexWrap: { flexWrap: "wrap" },
  flexNowrap: { flexWrap: "nowrap" },

  // Justify Content
  justifyStart: { justifyContent: "flex-start" },
  justifyEnd: { justifyContent: "flex-end" },
  justifyCenter: { justifyContent: "center" },
  justifyBetween: { justifyContent: "space-between" },
  justifyAround: { justifyContent: "space-around" },
  justifyEvenly: { justifyContent: "space-evenly" },

  // Align Items
  itemsStart: { alignItems: "flex-start" },
  itemsEnd: { alignItems: "flex-end" },
  itemsCenter: { alignItems: "center" },
  itemsStretch: { alignItems: "stretch" },
  itemsBaseline: { alignItems: "baseline" },

  // Align Self
  selfAuto: { alignSelf: "auto" },
  selfStart: { alignSelf: "flex-start" },
  selfEnd: { alignSelf: "flex-end" },
  selfCenter: { alignSelf: "center" },
  selfStretch: { alignSelf: "stretch" },
  selfBaseline: { alignSelf: "baseline" },

  // Align Content
  contentStart: { alignContent: "flex-start" },
  contentEnd: { alignContent: "flex-end" },
  contentCenter: { alignContent: "center" },
  contentBetween: { alignContent: "space-between" },
  contentAround: { alignContent: "space-around" },
  contentStretch: { alignContent: "stretch" },

  // Flex Grow/Shrink
  flexGrow0: { flexGrow: 0 },
  flexGrow: { flexGrow: 1 },
  flexShrink0: { flexShrink: 0 },
  flexShrink: { flexShrink: 1 },
  flexNone: { flex: 0 },
  flexAuto: { flex: 1 },
  flexInitial: { flex: 0 },

  // Position (camelCase)
  top0: { top: 0 },
  top1: { top: 4 },
  top2: { top: 8 },
  top4: { top: 16 },
  top8: { top: 32 },
  topAuto: { top: "auto" },
  topHalf: { top: "50%" },
  topFull: { top: "100%" },

  right0: { right: 0 },
  right1: { right: 4 },
  right2: { right: 8 },
  right4: { right: 16 },
  right8: { right: 32 },
  rightAuto: { right: "auto" },
  rightHalf: { right: "50%" },
  rightFull: { right: "100%" },

  bottom0: { bottom: 0 },
  bottom1: { bottom: 4 },
  bottom2: { bottom: 8 },
  bottom4: { bottom: 16 },
  bottom8: { bottom: 32 },
  bottomAuto: { bottom: "auto" },
  bottomHalf: { bottom: "50%" },
  bottomFull: { bottom: "100%" },

  left0: { left: 0 },
  left1: { left: 4 },
  left2: { left: 8 },
  left4: { left: 16 },
  left8: { left: 32 },
  leftAuto: { left: "auto" },
  leftHalf: { left: "50%" },
  leftFull: { left: "100%" },

  // Negative positioning (camelCase)
  negTop1: { top: -4 },
  negTop2: { top: -8 },
  negTop4: { top: -16 },
  negTop8: { top: -32 },
  negTopHalf: { top: "-50%" },
  negTopFull: { top: "-100%" },

  negRight1: { right: -4 },
  negRight2: { right: -8 },
  negRight4: { right: -16 },
  negRight8: { right: -32 },
  negRightHalf: { right: "-50%" },
  negRightFull: { right: "-100%" },

  negBottom1: { bottom: -4 },
  negBottom2: { bottom: -8 },
  negBottom4: { bottom: -16 },
  negBottom8: { bottom: -32 },
  negBottomHalf: { bottom: "-50%" },
  negBottomFull: { bottom: "-100%" },

  negLeft1: { left: -4 },
  negLeft2: { left: -8 },
  negLeft4: { left: -16 },
  negLeft8: { left: -32 },
  negLeftHalf: { left: "-50%" },
  negLeftFull: { left: "-100%" },

  // Z-Index (camelCase)
  z0: { zIndex: 0 },
  z10: { zIndex: 10 },
  z20: { zIndex: 20 },
  z30: { zIndex: 30 },
  z40: { zIndex: 40 },
  z50: { zIndex: 50 },

  // Overflow (camelCase)
  overflowHidden: { overflow: "hidden" },
  overflowVisible: { overflow: "visible" },
  overflowScroll: { overflow: "scroll" },

  // Inset (camelCase)
  inset0: { top: 0, right: 0, bottom: 0, left: 0 },
  insetX0: { left: 0, right: 0 },
  insetY0: { top: 0, bottom: 0 },
});
