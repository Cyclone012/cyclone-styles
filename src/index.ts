// NativeWind Clone - Main Entry Point
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

// Export the new class-based API for easier usage
export { cs, cx, merge } from "./cs";

// Export global configuration and setup
export {
  configure,
  getConfig,
  setupCycloneStyles,
  extendTheme,
  addUtilities,
  type ThemeConfig,
} from "./global";

// Export new global styles system
export {
  $,
  getGlobalStyles,
  getLayoutStyles,
  getSpacingStyles,
  getColorStyles,
  getTypographyStyles,
  getBorderStyles,
} from "./globalStyles";

// Export className transformer
export {
  setupClassNameTransformer,
  resetClassNameTransformer,
} from "./className";

// Default export for global setup
export { default } from "./global";
