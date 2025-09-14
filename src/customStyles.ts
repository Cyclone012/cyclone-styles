/**
 * 🎨 Custom Styles & Override System
 * User-friendly utilities for creating, combining, and overriding styles
 */

import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import { cs, merge } from "./cs";
import { addUtilities } from "./global";

// Type definitions for better TypeScript support
type StyleObject = ViewStyle | TextStyle | ImageStyle;
type StyleInput = string | StyleObject;

// Global registry for custom class names
const customClassRegistry = new Map<string, StyleObject>();

/**
 * 🔥 CREATE CUSTOM STYLES
 * Easy way to create reusable custom styles
 */

// Create a custom style that can be reused
export function createCustomStyle<T extends StyleObject>(
  styleObject: T,
  name?: string
): () => T {
  const styleFn = () => styleObject;
  if (name) {
    (styleFn as any).displayName = name;
  }
  return styleFn;
}

// Create multiple custom styles at once
export function createCustomStyles<T extends Record<string, StyleObject>>(
  styles: T
): { [K in keyof T]: () => T[K] } {
  const result = {} as { [K in keyof T]: () => T[K] };

  for (const [key, style] of Object.entries(styles)) {
    result[key as keyof T] = () => style as T[keyof T];
  }

  return result;
}

/**
 * 🎯 REGISTER CUSTOM CLASSES
 * Register custom styles to use as className utilities
 */

// Register a single custom class
export function registerCustomClass(
  className: string,
  style: StyleObject
): void {
  customClassRegistry.set(className, style);

  // Add to global utilities so className can find it
  const utilities: Record<string, any> = {};
  utilities[className] = style;
  addUtilities(utilities);
}

// Register multiple custom classes at once
export function registerCustomClasses(
  classes: Record<string, StyleObject>
): void {
  for (const [className, style] of Object.entries(classes)) {
    customClassRegistry.set(className, style);
  }

  // Add all to global utilities
  addUtilities(classes);
}

// Create and register custom classes in one step
export function createCustomClasses<T extends Record<string, StyleObject>>(
  classes: T
): { [K in keyof T]: string } {
  const result = {} as { [K in keyof T]: string };

  // Register all classes
  registerCustomClasses(classes);

  // Return class names for easy usage
  for (const key of Object.keys(classes)) {
    result[key as keyof T] = key;
  }

  return result;
}

// Get registered custom class
export function getCustomClass(className: string): StyleObject | undefined {
  return customClassRegistry.get(className);
}

// Get all registered custom classes
export function getAllCustomClasses(): Record<string, StyleObject> {
  const result: Record<string, StyleObject> = {};
  for (const [key, value] of customClassRegistry.entries()) {
    result[key] = value;
  }
  return result;
}

/**
 * 🎯 STYLE COMPOSITION HELPERS
 * Combine and compose styles easily
 */

// Combine className with custom styles
export function combineStyles(...inputs: StyleInput[]): StyleObject {
  const validInputs = inputs.filter(Boolean).map((input) => {
    if (typeof input === "string") return input;
    return input as StyleObject;
  });
  return merge(...validInputs);
}

// Create a style variant with base + modifications
export function createVariant(
  baseStyle: StyleInput,
  modifications: StyleInput
): StyleObject {
  return combineStyles(baseStyle, modifications);
}

// Conditional styles - apply style based on condition
export function conditionalStyle(
  condition: boolean,
  trueStyle: StyleInput,
  falseStyle?: StyleInput
): StyleObject {
  if (condition) {
    return typeof trueStyle === "string"
      ? cs(trueStyle)
      : (trueStyle as StyleObject);
  } else if (falseStyle) {
    return typeof falseStyle === "string"
      ? cs(falseStyle)
      : (falseStyle as StyleObject);
  }
  return {};
}

// Switch between multiple style options
export function selectStyle<T extends string | number>(
  value: T,
  styleMap: Record<T, StyleInput>,
  defaultStyle?: StyleInput
): StyleObject {
  const selectedStyle = styleMap[value] || defaultStyle;
  if (!selectedStyle) return {};

  return typeof selectedStyle === "string"
    ? cs(selectedStyle)
    : (selectedStyle as StyleObject);
}

/**
 * 🔧 OVERRIDE SYSTEM
 * Easy ways to override existing styles
 */

// Override specific properties of a style
export function overrideStyle<T extends StyleObject>(
  baseStyle: StyleInput,
  overrides: Partial<T>
): T {
  const base = typeof baseStyle === "string" ? cs(baseStyle) : baseStyle;
  return { ...base, ...overrides } as T;
}

// Merge styles with priority (later styles override earlier ones)
export function mergeWithPriority(...styles: StyleInput[]): StyleObject {
  return combineStyles(...styles);
}

// Remove specific properties from a style
export function excludeProperties<T extends StyleObject, K extends keyof T>(
  style: T,
  ...keysToRemove: K[]
): Omit<T, K> {
  const result = { ...style };
  keysToRemove.forEach((key) => delete result[key]);
  return result;
}

/**
 * 🎨 THEME-AWARE CUSTOM STYLES
 * Create styles that automatically adapt to theme
 */

// Create theme-aware custom style
export function createThemedCustomStyle<T extends StyleObject>(
  lightStyle: T,
  darkStyle: T,
  name?: string
): (isDark?: boolean) => T {
  const styleFn = (isDark: boolean = false) =>
    isDark ? darkStyle : lightStyle;
  if (name) {
    (styleFn as any).displayName = name;
  }
  return styleFn;
}

// Create responsive custom style
export function createResponsiveCustomStyle<T extends StyleObject>(
  styles: {
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
    default: T;
  },
  name?: string
): (screenWidth?: number) => T {
  const styleFn = (screenWidth: number = 375) => {
    if (screenWidth >= 1024 && styles.xl) return styles.xl;
    if (screenWidth >= 768 && styles.lg) return styles.lg;
    if (screenWidth >= 640 && styles.md) return styles.md;
    if (screenWidth >= 480 && styles.sm) return styles.sm;
    return styles.default;
  };

  if (name) {
    (styleFn as any).displayName = name;
  }
  return styleFn;
}

/**
 * 🚀 UTILITY HELPERS
 * Quick helpers for common operations
 */

// Quick margin/padding helpers
export const spacingUtils = {
  all: (value: number) => ({ padding: value }),
  horizontal: (value: number) => ({ paddingHorizontal: value }),
  vertical: (value: number) => ({ paddingVertical: value }),
  top: (value: number) => ({ paddingTop: value }),
  bottom: (value: number) => ({ paddingBottom: value }),
  left: (value: number) => ({ paddingLeft: value }),
  right: (value: number) => ({ paddingRight: value }),

  margin: {
    all: (value: number) => ({ margin: value }),
    horizontal: (value: number) => ({ marginHorizontal: value }),
    vertical: (value: number) => ({ marginVertical: value }),
    top: (value: number) => ({ marginTop: value }),
    bottom: (value: number) => ({ marginBottom: value }),
    left: (value: number) => ({ marginLeft: value }),
    right: (value: number) => ({ marginRight: value }),
  },
};

// Quick color helpers
export const colorUtils = {
  background: (color: string) => ({ backgroundColor: color }),
  text: (color: string) => ({ color }),
  border: (color: string) => ({ borderColor: color }),
  tint: (color: string) => ({ tintColor: color }),
};

// Quick layout helpers
export const layoutUtils = {
  center: () => ({
    justifyContent: "center" as const,
    alignItems: "center" as const,
  }),
  row: () => ({ flexDirection: "row" as const }),
  column: () => ({ flexDirection: "column" as const }),
  flex: (value: number = 1) => ({ flex: value }),
  absolute: () => ({ position: "absolute" as const }),
  relative: () => ({ position: "relative" as const }),
  fill: () => ({
    position: "absolute" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }),
};

// Quick border helpers
export const borderUtils = {
  all: (width: number, color?: string) => ({
    borderWidth: width,
    ...(color && { borderColor: color }),
  }),
  top: (width: number, color?: string) => ({
    borderTopWidth: width,
    ...(color && { borderTopColor: color }),
  }),
  bottom: (width: number, color?: string) => ({
    borderBottomWidth: width,
    ...(color && { borderBottomColor: color }),
  }),
  radius: (value: number) => ({ borderRadius: value }),
  rounded: () => ({ borderRadius: 8 }),
  circle: (size: number) => ({
    width: size,
    height: size,
    borderRadius: size / 2,
  }),
};

/**
 * 🎭 STYLE TEMPLATES
 * Pre-built style templates for common patterns
 */

export const styleTemplates = {
  // Card templates
  card: {
    default: () => cs("bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm"),
    elevated: () => cs("bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"),
    outlined: () =>
      cs(
        "bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700"
      ),
  },

  // Button templates
  button: {
    primary: () => cs("bg-blue-500 dark:bg-blue-600 p-3 rounded-lg"),
    secondary: () => cs("bg-gray-200 dark:bg-gray-700 p-3 rounded-lg"),
    outline: () =>
      cs(
        "bg-transparent border-2 border-blue-500 dark:border-blue-400 p-3 rounded-lg"
      ),
    ghost: () => cs("bg-transparent p-3 rounded-lg"),
  },

  // Text templates
  text: {
    heading: () => cs("text-2xl font-bold text-gray-900 dark:text-white"),
    subheading: () =>
      cs("text-lg font-semibold text-gray-800 dark:text-gray-200"),
    body: () => cs("text-base text-gray-700 dark:text-gray-300"),
    caption: () => cs("text-sm text-gray-500 dark:text-gray-400"),
    label: () => cs("text-sm font-medium text-gray-900 dark:text-white"),
  },

  // Input templates
  input: {
    default: () =>
      cs(
        "p-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg"
      ),
    focused: () =>
      cs(
        "p-3 bg-white dark:bg-gray-700 border-2 border-blue-500 dark:border-blue-400 rounded-lg"
      ),
    error: () =>
      cs(
        "p-3 bg-white dark:bg-gray-700 border-2 border-red-500 dark:border-red-400 rounded-lg"
      ),
  },
};

/**
 * 🎪 ANIMATION HELPERS
 * Easy animation and transition styles
 */

export const animationUtils = {
  // Common transform styles
  scale: (value: number) => ({ transform: [{ scale: value }] }),
  rotate: (degrees: string) => ({ transform: [{ rotate: degrees }] }),
  translate: (x: number, y: number) => ({
    transform: [{ translateX: x }, { translateY: y }],
  }),

  // Opacity helpers
  visible: () => ({ opacity: 1 }),
  hidden: () => ({ opacity: 0 }),
  transparent: (value: number) => ({ opacity: value }),

  // Common animation presets
  fadeIn: () => ({ opacity: 1 }),
  fadeOut: () => ({ opacity: 0 }),
  scaleIn: () => ({ transform: [{ scale: 1 }], opacity: 1 }),
  scaleOut: () => ({ transform: [{ scale: 0.8 }], opacity: 0 }),
};

/**
 * 🔨 DEBUGGING HELPERS
 * Utilities for debugging styles
 */

export const debugUtils = {
  // Add colored borders for debugging layout
  outline: (color: string = "red") => ({
    borderWidth: 2,
    borderColor: color,
    borderStyle: "dashed" as const,
  }),

  // Background colors for debugging
  bg: (color: string = "rgba(255,0,0,0.2)") => ({ backgroundColor: color }),

  // Show dimensions
  dimensions: (width?: number, height?: number) => ({
    ...(width && { width }),
    ...(height && { height }),
    borderWidth: 1,
    borderColor: "blue",
  }),
};

/**
 * 🎨 STYLE CONFIGURATION SYSTEM
 * Easy way to configure and extend default styles
 */

// Global style configuration
interface StyleConfig {
  colors?: Record<string, string>;
  spacing?: Record<string, number>;
  typography?: Record<string, TextStyle>;
  shadows?: Record<string, ViewStyle>;
  borders?: Record<string, ViewStyle>;
}

let globalStyleConfig: StyleConfig = {};

export function configureStyles(config: StyleConfig) {
  globalStyleConfig = { ...globalStyleConfig, ...config };
}

export function getStyleConfig(): StyleConfig {
  return globalStyleConfig;
}

// Helper to create styles with configuration
export function createConfiguredStyle(
  styleKey: string,
  category: keyof StyleConfig
): StyleObject {
  const config = globalStyleConfig[category] as Record<string, StyleObject>;
  return config?.[styleKey] || {};
}

// Default export with all utilities organized
export default {
  // Core functions
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

  // Custom class registration
  registerCustomClass,
  registerCustomClasses,
  createCustomClasses,
  getCustomClass,
  getAllCustomClasses,

  // Utility collections
  spacing: spacingUtils,
  colors: colorUtils,
  layout: layoutUtils,
  borders: borderUtils,
  templates: styleTemplates,
  animations: animationUtils,
  debug: debugUtils,

  // Configuration
  configureStyles,
  getStyleConfig,
  createConfiguredStyle,
};
