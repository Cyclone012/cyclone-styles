/**
 * Global Setup for Cyclone Styles
 * Import this file to enable global utilities and configure your theme
 * className support is automatically enabled when this module is imported
 */

import { configure, getConfig, ThemeConfig } from "./config";
import { setThemeContext } from "./cs";
import { setupClassName } from "./className";

// Automatically setup className support when this module is imported
// This ensures global className functionality works regardless of import order
let isGloballyInitialized = false;

function initializeGlobalSupport() {
  if (!isGloballyInitialized) {
    setupClassName();
    isGloballyInitialized = true;
  }
}

// Initialize immediately when the module is loaded
initializeGlobalSupport();

// Re-export all the main functions and types
export { cs } from "./cs";
export { ThemeProvider, useTheme, useResponsive } from "./theme";
export { configure, getConfig, type ThemeConfig } from "./config";

// Re-export className functionality for convenience
export {
  setupClassName,
  vars,
  registerCustomClass,
  registerCustomClasses,
  styled,
  cssInterop,
  convertClassNameToStyle,
  getComponentUsageStats,
} from "./className";

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
