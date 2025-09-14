/**
 * Global Setup for Cyclone Styles
 * Import this file to enable global utilities and configure your theme
 */

import { configure, getConfig, ThemeConfig } from "./config";
import { setThemeContext } from "./cs";

// Re-export all the main functions and types
export { cs } from "./cs";
export { ThemeProvider, useTheme, useResponsive } from "./theme";
export { configure, getConfig, type ThemeConfig } from "./config";

/**
 * Initialize cyclone-styles with optional configuration
 * This should be called once at the root of your app
 */
export function setupCycloneStyles(config?: ThemeConfig): void {
  if (config) {
    configure(config);
  }

  // Initialize theme context
  setThemeContext({ isDark: false });
}

/**
 * NativeWind-style configuration function
 * Allows extending the default theme like NativeWind
 */
export function extendTheme(config: ThemeConfig): void {
  configure(config);
}

/**
 * Global utility to add custom classes at runtime
 */
const customUtilities: Record<string, any> = {};

export function addUtilities(utilities: Record<string, any>): void {
  Object.assign(customUtilities, utilities);
}

export function getCustomUtilities(): Record<string, any> {
  return customUtilities;
}

// Create a default export for easy importing
const CycloneStyles = {
  setup: setupCycloneStyles,
  configure,
  extendTheme,
  addUtilities,
  getConfig,
};

export default CycloneStyles;
