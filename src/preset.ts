/**
 * CycloneWind Preset - NativeWind Compatible
 * Auto-enables className support globally with React Native utilities
 */

import { setupClassName } from "./className";

// Automatically setup className transformer when this module is imported
setupClassName();

// Re-export all NativeWind-style functions
export {
  vars,
  registerCustomClass,
  registerCustomClasses,
  styled,
  cssInterop,
  convertClassNameToStyle,
} from "./className";

// Also export core functionality for convenience
export { cs } from "./cs";
export { ThemeProvider, useTheme } from "./theme";

// Export React Native utilities for enhanced functionality
export {
  getScreenDimensions,
  getWindowDimensions,
  platformClassName,
  responsiveClassName,
  pixelRatioClassName,
  safeAreaClassName,
  processReactNativeClassName,
  combineClassNames,
  withClassName,
  textClassName,
  imageClassName,
  enhancedScrollView,
  pressableClassName,
  textInputClassName,
} from "./reactNativeUtils";
