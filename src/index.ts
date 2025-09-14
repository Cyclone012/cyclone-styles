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
export { default as cs } from "./customStyles";
export { default as theme } from "./theme";
export { convertClassNameToStyle, updateClassNameTheme } from "./className";

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
