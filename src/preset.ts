/**
 * CycloneWind Preset - Global Import
 * Import this file to automatically enable className prop globally (like NativeWind)
 * cs() and direct styles still require manual imports
 */

import { setupCycloneStyles } from "./global";
import { setupClassNameTransformer, updateClassNameTheme } from "./className";

// Auto-setup with default configuration
setupCycloneStyles();

// Setup className transformer for NativeWind-style usage
setupClassNameTransformer();

// Setup theme synchronization for className
// This ensures className automatically gets theme updates
let currentTheme = { isDark: false };

// Function to detect if we're in React Native environment
function isReactNative() {
  return (
    (typeof navigator !== "undefined" && navigator.product === "ReactNative") ||
    typeof window === "undefined" ||
    !window.matchMedia
  );
}

// Function to sync theme between global system and className
function syncThemeWithClassName() {
  if (isReactNative()) {
    // React Native: theme will be controlled by ThemeProvider
    // Start with light theme as default
    currentTheme.isDark = false;
    updateClassNameTheme(false);
    return;
  }

  // Web environment: Listen for system theme changes
  if (typeof window !== "undefined" && window.matchMedia) {
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateTheme = (e: MediaQueryListEvent | MediaQueryList) => {
      const isDark = e.matches;
      currentTheme.isDark = isDark;
      updateClassNameTheme(isDark);
    };

    // Set initial theme
    updateTheme(darkModeQuery);

    // Listen for changes
    darkModeQuery.addListener(updateTheme);
  }
}

// Initialize theme sync
syncThemeWithClassName();

// Export theme control for manual theme changes
export function setGlobalTheme(isDark: boolean) {
  currentTheme.isDark = isDark;
  updateClassNameTheme(isDark);
}

// Export current theme getter
export function getGlobalTheme() {
  return currentTheme.isDark;
}

// Note: className prop is now available globally without any imports!
// cs() function and direct styles still need explicit imports:
// import { cs } from 'cyclonewind';
// import { $ } from 'cyclonewind';
