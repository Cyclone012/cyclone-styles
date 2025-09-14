import { StyleSheet, Dimensions, Platform } from "react-native";
import { cycloneUtilities } from "./utilities";

// Get initial screen dimensions
let { width: screenWidth, height: screenHeight } = Dimensions.get("window");

// Update dimensions when screen changes (responsive)
// Using the newer subscription API instead of deprecated addEventListener
const subscription = Dimensions.addEventListener(
  "change",
  ({ window }: { window: { width: number; height: number } }) => {
    screenWidth = window.width;
    screenHeight = window.height;
  }
);

// Export subscription for cleanup if needed
export const dimensionsSubscription = subscription;

// Responsive breakpoints (like Tailwind CSS)
export const breakpoints = {
  sm: 640, // Small devices
  md: 768, // Medium devices
  lg: 1024, // Large devices
  xl: 1280, // Extra large devices
  "2xl": 1536, // 2X Extra large devices
};

// Get current breakpoint
export const getCurrentBreakpoint = (): string => {
  if (screenWidth >= breakpoints["2xl"]) return "2xl";
  if (screenWidth >= breakpoints.xl) return "xl";
  if (screenWidth >= breakpoints.lg) return "lg";
  if (screenWidth >= breakpoints.md) return "md";
  if (screenWidth >= breakpoints.sm) return "sm";
  return "xs";
};

// Check if current screen matches breakpoint
export const matchesBreakpoint = (breakpoint: string): boolean => {
  const currentWidth = screenWidth;

  switch (breakpoint) {
    case "xs":
      return currentWidth < breakpoints.sm;
    case "sm":
      return currentWidth >= breakpoints.sm && currentWidth < breakpoints.md;
    case "md":
      return currentWidth >= breakpoints.md && currentWidth < breakpoints.lg;
    case "lg":
      return currentWidth >= breakpoints.lg && currentWidth < breakpoints.xl;
    case "xl":
      return (
        currentWidth >= breakpoints.xl && currentWidth < breakpoints["2xl"]
      );
    case "2xl":
      return currentWidth >= breakpoints["2xl"];
    default:
      return false;
  }
};

// Helper to check if viewport is larger than a breakpoint
export const isLargerThan = (breakpoint: keyof typeof breakpoints): boolean => {
  return screenWidth >= breakpoints[breakpoint];
};

// Helper to check if viewport is smaller than a breakpoint
export const isSmallerThan = (
  breakpoint: keyof typeof breakpoints
): boolean => {
  return screenWidth < breakpoints[breakpoint];
};

// Helper to apply styles based on breakpoint
export const responsiveStyle = (styles: { [key: string]: any }): any => {
  const currentBreakpoint = getCurrentBreakpoint();
  return styles[currentBreakpoint] || styles.default || {};
};

// Responsive utilities
export const responsive = {
  isXs: () => matchesBreakpoint("xs"),
  isSm: () => matchesBreakpoint("sm"),
  isMd: () => matchesBreakpoint("md"),
  isLg: () => matchesBreakpoint("lg"),
  isXl: () => matchesBreakpoint("xl"),
  is2Xl: () => matchesBreakpoint("2xl"),

  // Size helpers
  width: {
    xs: () => screenWidth < breakpoints.sm,
    sm: () => screenWidth >= breakpoints.sm && screenWidth < breakpoints.md,
    md: () => screenWidth >= breakpoints.md && screenWidth < breakpoints.lg,
    lg: () => screenWidth >= breakpoints.lg && screenWidth < breakpoints.xl,
    xl: () => screenWidth >= breakpoints.xl && screenWidth < breakpoints["2xl"],
    "2xl": () => screenWidth >= breakpoints["2xl"],
  },

  // Conditional styles
  when: (condition: boolean, styles: any) => (condition ? styles : {}),

  // Platform specific styles
  ios: (styles: any) => (Platform.OS === "ios" ? styles : {}),
  android: (styles: any) => (Platform.OS === "android" ? styles : {}),
  web: (styles: any) => (Platform.OS === "web" ? styles : {}),
};

// Core styles object with both hyphenated and camelCase versions for 100% NativeWind compatibility
// Now organized into modular utilities for better maintainability
export const styles = StyleSheet.create({
  // Import all organized utilities from the modular structure
  ...cycloneUtilities,

  // Additional responsive and blur utilities (React Native specific)

  // Responsive utilities that use screen dimensions
  "w-screen": { width: screenWidth },
  "h-screen": { height: screenHeight },
  "min-h-screen": { minHeight: screenHeight },
  "max-w-screen": { maxWidth: screenWidth },
  "max-h-screen": { maxHeight: screenHeight },

  // Screen dimension fractions
  "w-screen-1/2": { width: screenWidth / 2 },
  "w-screen-1/3": { width: screenWidth / 3 },
  "w-screen-2/3": { width: (screenWidth * 2) / 3 },
  "w-screen-1/4": { width: screenWidth / 4 },
  "w-screen-3/4": { width: (screenWidth * 3) / 4 },
  "h-screen-1/2": { height: screenHeight / 2 },
  "h-screen-1/3": { height: screenHeight / 3 },
  "h-screen-2/3": { height: (screenHeight * 2) / 3 },
  "h-screen-1/4": { height: screenHeight / 4 },
  "h-screen-3/4": { height: (screenHeight * 3) / 4 },

  // CamelCase versions for responsive utilities
  wScreen: { width: screenWidth },
  hScreen: { height: screenHeight },
  minHScreen: { minHeight: screenHeight },
  maxWScreen: { maxWidth: screenWidth },
  maxHScreen: { maxHeight: screenHeight },

  // Blur utilities for React Native specific blur effects
  "blur-none": {
    /* Use with BlurView tint: 'default', blurAmount: 0 */
  },
  "blur-sm": {
    /* Use with BlurView blurAmount: 4 */
  },
  "blur-base": {
    /* Use with BlurView blurAmount: 8 */
  },
  "blur-md": {
    /* Use with BlurView blurAmount: 12 */
  },
  "blur-lg": {
    /* Use with BlurView blurAmount: 16 */
  },
  "blur-xl": {
    /* Use with BlurView blurAmount: 24 */
  },
  "blur-2xl": {
    /* Use with BlurView blurAmount: 32 */
  },
  "blur-3xl": {
    /* Use with BlurView blurAmount: 64 */
  },

  // Blur Tint Options for expo-blur
  "blur-tint-light": {
    /* tint: 'light' - Light tinted blur */
  },
  "blur-tint-dark": {
    /* tint: 'dark' - Dark tinted blur */
  },
  "blur-tint-default": {
    /* tint: 'default' - Default tinted blur */
  },

  // Blur Intensity for expo-blur
  "blur-intensity-0": {
    /* intensity: 0 - No blur */
  },
  "blur-intensity-25": {
    /* intensity: 25 - 25% blur intensity */
  },
  "blur-intensity-50": {
    /* intensity: 50 - 50% blur intensity */
  },
  "blur-intensity-75": {
    /* intensity: 75 - 75% blur intensity */
  },
  "blur-intensity-100": {
    /* intensity: 100 - Full blur intensity */
  },

  // Backdrop Utilities (for overlay effects)
  "backdrop-blur-none": {
    backgroundColor: "transparent",
    /* Use with BlurView as overlay */
  },
  "backdrop-blur-sm": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    /* Use with BlurView blurAmount: 4 */
  },
  "backdrop-blur": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    /* Use with BlurView blurAmount: 8 */
  },
  "backdrop-blur-md": {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    /* Use with BlurView blurAmount: 12 */
  },
  "backdrop-blur-lg": {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    /* Use with BlurView blurAmount: 16 */
  },
  "backdrop-blur-xl": {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    /* Use with BlurView blurAmount: 24 */
  },
});

// Helper to create percentage-based width
export const createWidthPercentage = (percentage: number): object => {
  return {
    width: `${Math.min(Math.max(percentage, 0), 100)}%`,
  };
};

// Helper to create percentage-based height
export const createHeightPercentage = (percentage: number): object => {
  return {
    height: `${Math.min(Math.max(percentage, 0), 100)}%`,
  };
};

// Utility functions for responsive design
export const getScreenWidth = (): number => screenWidth;
export const getScreenHeight = (): number => screenHeight;

export const getScreenPercentage = (percentage: number): number => {
  return (screenWidth * percentage) / 100;
};

export const isSmallScreen = (): boolean => screenWidth < breakpoints.md;
export const isMediumScreen = (): boolean =>
  screenWidth >= breakpoints.md && screenWidth < breakpoints.lg;
export const isLargeScreen = (): boolean => screenWidth >= breakpoints.lg;

// Responsive value helper
export const getResponsiveValue = (
  small: any,
  medium?: any,
  large?: any
): any => {
  if (isLargeScreen() && large !== undefined) return large;
  if (isMediumScreen() && medium !== undefined) return medium;
  return small;
};

// Theme-related utilities
export const getThemeColor = (
  lightColor: string,
  darkColor?: string,
  isDark: boolean = false
): string => {
  return isDark && darkColor ? darkColor : lightColor;
};

// Check if screen is at least a certain breakpoint
export const isAtLeastBreakpoint = (breakpoint: string): boolean => {
  const bp = breakpoint as keyof typeof breakpoints;
  return breakpoints[bp] ? screenWidth >= breakpoints[bp] : false;
};

// Export type for better TypeScript support
export type StylesType = typeof styles;

// Convenience exports from utilities
export {
  layoutUtilities,
  spacingUtilities,
  sizingUtilities,
  colorUtilities,
  typographyUtilities,
  bordersEffectsUtilities,
  miscUtilities,
  animationUtilities,
  transitionUtilities,
  interactivityUtilities,
  accessibilityUtilities,
  filtersUtilities,
  tableUtilities,
  cycloneUtilities,
} from "./utilities";
