/**
 * OBJECT UTILITIES
 *
 * Object-fit, object-position utilities for image handling and resizing modes.
 * Adapted for React Native Image component resizeMode and positioning properties.
 */

export const objectUtilities = {
  // Object Fit (Image Resize Modes)
  "object-contain": {
    /* Use with Image resizeMode: 'contain' */
    resizeMode: "contain" as const,
  },
  "object-cover": {
    /* Use with Image resizeMode: 'cover' */
    resizeMode: "cover" as const,
  },
  "object-fill": {
    /* Use with Image resizeMode: 'stretch' */
    resizeMode: "stretch" as const,
  },
  "object-none": {
    /* Use with Image resizeMode: 'center' */
    resizeMode: "center" as const,
  },
  "object-scale-down": {
    /* Use with Image resizeMode: 'contain' - closest equivalent */
    resizeMode: "contain" as const,
  },

  // Object Position (simulated with alignment and positioning)
  "object-bottom": {
    justifyContent: "flex-end" as const,
    alignItems: "center" as const,
  },
  "object-center": {
    justifyContent: "center" as const,
    alignItems: "center" as const,
  },
  "object-left": {
    justifyContent: "center" as const,
    alignItems: "flex-start" as const,
  },
  "object-left-bottom": {
    justifyContent: "flex-end" as const,
    alignItems: "flex-start" as const,
  },
  "object-left-top": {
    justifyContent: "flex-start" as const,
    alignItems: "flex-start" as const,
  },
  "object-right": {
    justifyContent: "center" as const,
    alignItems: "flex-end" as const,
  },
  "object-right-bottom": {
    justifyContent: "flex-end" as const,
    alignItems: "flex-end" as const,
  },
  "object-right-top": {
    justifyContent: "flex-start" as const,
    alignItems: "flex-end" as const,
  },
  "object-top": {
    justifyContent: "flex-start" as const,
    alignItems: "center" as const,
  },

  // Resize behavior for View containers
  "resize-none": {
    /* Not resizable - fixed dimensions */
  },
  "resize-x": {
    /* Horizontally resizable - use with state management */
  },
  "resize-y": {
    /* Vertically resizable - use with state management */
  },
  resize: {
    /* Both directions resizable - use with state management */
  },

  // Image Rendering (hints for performance)
  "image-render-auto": {
    /* Default image rendering */
  },
  "image-render-crisp": {
    /* Crisp/pixelated rendering - useful for icons */
  },
  "image-render-pixel": {
    /* Pixel-perfect rendering */
  },

  // CamelCase versions
  objectContain: {
    resizeMode: "contain" as const,
  },
  objectCover: {
    resizeMode: "cover" as const,
  },
  objectFill: {
    resizeMode: "stretch" as const,
  },
  objectNone: {
    resizeMode: "center" as const,
  },
  objectScaleDown: {
    resizeMode: "contain" as const,
  },

  objectBottom: {
    justifyContent: "flex-end" as const,
    alignItems: "center" as const,
  },
  objectCenter: {
    justifyContent: "center" as const,
    alignItems: "center" as const,
  },
  objectLeft: {
    justifyContent: "center" as const,
    alignItems: "flex-start" as const,
  },
  objectLeftBottom: {
    justifyContent: "flex-end" as const,
    alignItems: "flex-start" as const,
  },
  objectLeftTop: {
    justifyContent: "flex-start" as const,
    alignItems: "flex-start" as const,
  },
  objectRight: {
    justifyContent: "center" as const,
    alignItems: "flex-end" as const,
  },
  objectRightBottom: {
    justifyContent: "flex-end" as const,
    alignItems: "flex-end" as const,
  },
  objectRightTop: {
    justifyContent: "flex-start" as const,
    alignItems: "flex-end" as const,
  },
  objectTop: {
    justifyContent: "flex-start" as const,
    alignItems: "center" as const,
  },

  resizeNone: {
    /* Not resizable - fixed dimensions */
  },
  resizeX: {
    /* Horizontally resizable - use with state management */
  },
  resizeY: {
    /* Vertically resizable - use with state management */
  },
  resizeBoth: {
    /* Both directions resizable - use with state management */
  },

  imageRenderAuto: {
    /* Default image rendering */
  },
  imageRenderCrisp: {
    /* Crisp/pixelated rendering - useful for icons */
  },
  imageRenderPixel: {
    /* Pixel-perfect rendering */
  },
};
