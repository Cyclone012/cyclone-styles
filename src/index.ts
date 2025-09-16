/**
 * CycloneWind - Tailwind CSS Utilities for React Native
 */

// Core style function - main way to use CycloneWind
export { default as cs, setThemeContext } from "./cs";

// Theme system
export {
  ThemeProvider,
  useTheme,
  useThemeAware,
  updateGlobalTheme,
  getGlobalTheme,
} from "./theme";

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

// Configuration
export { configure, getConfig, type ThemeConfig } from "./config";

// Export custom styles and utilities
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

// React Native specific utilities
export {
  platformClassName,
  responsiveClassName,
  getScreenDimensions,
  getWindowDimensions,
  screenWidth,
  screenHeight,
  windowWidth,
  windowHeight,
  isTablet,
  isPhone,
  isIOS,
  isAndroid,
  isWeb,
  devicePixelRatio,
  isHighDPI,
  isRetina,
  getScreenOrientation,
  breakpoints,
  isScreenSize,
  getResponsiveValue as getResponsiveUtilityValue,
  hasSafeArea,
  type ScreenOrientation,
} from "./reactNativeUtils";
