/**
 * Cyclone Styles Preset - Global Import
 * Import this file to automatically configure cyclone-styles globally
 * Similar to how NativeWind's global import works
 */

import { setupCycloneStyles } from "./global";
import { cs } from "./cs";
import { setupClassNameTransformer } from "./className";
import {
  $,
  getGlobalStyles,
  getLayoutStyles,
  getSpacingStyles,
  getColorStyles,
  getTypographyStyles,
  getBorderStyles,
} from "./globalStyles";

// Auto-setup with default configuration
setupCycloneStyles();

// Setup className transformer for NativeWind-style usage
setupClassNameTransformer();

// Re-export everything for convenience
export * from "./index";

// Make cs and direct styles available globally for easier usage
declare global {
  const cs: typeof import("./cs").cs;
  const $: typeof import("./globalStyles").$;
  const globalStyles: typeof getGlobalStyles;
  const layoutStyles: typeof getLayoutStyles;
  const spacingStyles: typeof getSpacingStyles;
  const colorStyles: typeof getColorStyles;
  const typographyStyles: typeof getTypographyStyles;
  const borderStyles: typeof getBorderStyles;
}

// Note: Global assignment is environment-specific
// For React Native, you can manually import these functions
// Example: import { $, globalStyles } from 'cyclone-styles/preset';

// Export a version that doesn't require imports
export const globalCs = require("./cs").cs;

export default {
  setup: setupCycloneStyles,
  $,
  globalStyles: getGlobalStyles,
  layoutStyles: getLayoutStyles,
  spacingStyles: getSpacingStyles,
  colorStyles: getColorStyles,
  typographyStyles: getTypographyStyles,
  borderStyles: getBorderStyles,
};
