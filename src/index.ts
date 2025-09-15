/**
 * CycloneWind - NativeWind Compatible Tailwind CSS for React Native
 */

// Core style function (can be used without className)
export { default as cs } from "./cs";

// Theme system
export {
  ThemeProvider,
  useTheme,
  useResponsive,
  useResponsiveStyle,
  getThemeValue,
  getThemeColorValue,
  type ThemeMode,
  type ThemeContextType,
} from "./theme";

// NativeWind-style className support (manual setup)
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

// Built-in styles and utilities
export {
  styles,
  type StylesType,
  getResponsiveValue,
  getScreenWidth,
  getScreenHeight,
  getScreenPercentage,
  isSmallScreen,
  isMediumScreen,
  isLargeScreen,
} from "./styles";

// Global configuration
export {
  configure,
  getConfig,
  setupCycloneStyles,
  extendTheme,
  addUtilities,
  type ThemeConfig,
} from "./global";

// Export custom styles and override system
export {
  createCustomStyle,
  createCustomStyles,
  combineStyles,
  createVariant,
  conditionalStyle,
  selectStyle,
  overrideStyle,
  mergeWithPriority,
  excludeProperties,
  createThemedCustomStyle,
  createResponsiveCustomStyle,
  spacingUtils,
  colorUtils,
  layoutUtils,
  borderUtils,
  styleTemplates,
  animationUtils,
  debugUtils,
  configureStyles,
  getStyleConfig,
  createConfiguredStyle,
} from "./customStyles";

// Default export for global setup
export { default } from "./global";
