import {
  StyleSheet,
  ViewStyle,
  TextStyle,
  ImageStyle,
  DimensionValue,
} from "react-native";
import { styles } from "./styles";
import { getConfig, getFlattenedColors } from "./config";

// Type for any React Native style
type Style = ViewStyle | TextStyle | ImageStyle;

// More specific return types
type FlattennedViewStyle = ViewStyle;
type FlattennedTextStyle = TextStyle;
type FlattennedImageStyle = ImageStyle;

// Cache for parsed styles to improve performance
const styleCache = new Map<string, Style[]>();

// Theme context interface (we'll use this when available)
interface ThemeContext {
  isDark?: boolean;
}

// Global theme state (can be set by theme provider)
// Use var to avoid Temporal Dead Zone issues across circular imports
var globalThemeContext: ThemeContext = { isDark: false };

// Theme change listeners for forcing re-renders
const themeChangeListeners = new Set<() => void>();

/**
 * Set the global theme context for cs() function
 * This should be called by the ThemeProvider
 */
export function setThemeContext(context: ThemeContext) {
  const previousIsDark = globalThemeContext.isDark;
  globalThemeContext = context;

  // Clear cache when theme changes
  styleCache.clear();

  // Notify all listeners if theme actually changed
  if (previousIsDark !== context.isDark) {
    themeChangeListeners.forEach((listener) => {
      try {
        listener();
      } catch (error) {
        console.warn("Theme change listener error:", error);
      }
    });
  }
}

// Safe accessor to avoid undefined in edge cases
export function getThemeContext(): ThemeContext {
  return globalThemeContext || { isDark: false };
}

/**
 * Subscribe to theme changes - for internal use
 * Returns unsubscribe function
 */
export function subscribeToThemeChanges(listener: () => void): () => void {
  themeChangeListeners.add(listener);
  return () => {
    themeChangeListeners.delete(listener);
  };
}

// Custom utilities registry
interface CustomUtilities {
  [className: string]: Style;
}

// Store for custom utilities
const customUtilities: CustomUtilities = {};

/**
 * Register a custom utility class
 */
function registerCustomClass(className: string, style: Style): void {
  customUtilities[className] = style;
  // Clear cache when new utilities are registered
  styleCache.clear();
}

// Function overloads for better TypeScript support
export function cs(classNames: string): any;
export function cs<T extends "text">(
  classNames: string,
  component?: T
): TextStyle;
export function cs<T extends "image">(
  classNames: string,
  component?: T
): ImageStyle;
export function cs<T extends ViewStyle | TextStyle | ImageStyle>(
  classNames: string
): T;

/**
 * Cyclone Styles utility function - converts Tailwind CSS classes to React Native styles
 * Now supports dark mode and responsive prefixes!
 *
 * @param classNames - Space-separated string of Tailwind CSS class names
 * @returns Flattened React Native style object
 *
 * @example
 * // Basic usage
 * <View style={cs("flex-1 bg-blue-500 p-4")} />
 * <Text style={cs("text-2xl font-bold", "text")} />
 * <Image style={cs("w-20 h-20 rounded-lg", "image")} />
 *
 * // Dark mode support
 * <View style={cs("bg-white dark:bg-gray-800 text-black dark:text-white")} />
 *
 * // Responsive support
 * <View style={cs("p-2 md:p-4 lg:p-6")} />
 *
 * // Combined features
 * <View style={cs("bg-white dark:bg-gray-900 p-4 md:p-6 rounded-lg")} />
 */
export function cs(
  classNames: string,
  component?: "text" | "image"
): ViewStyle | TextStyle | ImageStyle {
  // Return empty object for empty/null input
  if (!classNames || typeof classNames !== "string") {
    return {};
  }

  // Create cache key that includes theme state
  const cacheKey = `${classNames}_dark:${globalThemeContext.isDark || false}`;

  // Check cache first
  if (styleCache.has(cacheKey)) {
    const cachedStyles = styleCache.get(cacheKey)!;
    return StyleSheet.flatten(cachedStyles) as ViewStyle;
  }

  // Split class names and filter out empty strings
  const classes = classNames
    .split(/\s+/)
    .filter((className) => className.length > 0);

  const resolvedStyles: Style[] = [];
  const responsiveStyles: {
    [priority: number]: { style: Style; breakpoint: number };
  } = {};

  for (const className of classes) {
    // Handle dark mode classes
    if (className.startsWith("dark:")) {
      if (globalThemeContext.isDark) {
        const darkClass = className.replace("dark:", "");
        const style =
          handleSpecialCases(darkClass) || getStyleForClass(darkClass);
        if (style) {
          resolvedStyles.push(style);
        }
      }
      continue;
    }

    // Handle responsive classes with priority-based collection
    if (className.includes(":") && !className.startsWith("dark:")) {
      const [breakpoint, actualClass] = className.split(":");

      // Get current screen width for responsive check
      const { width } = require("react-native").Dimensions.get("window");

      // Handle dark mode within responsive
      if (actualClass.startsWith("dark:")) {
        if (
          globalThemeContext.isDark &&
          shouldApplyBreakpoint(breakpoint, width)
        ) {
          const darkClass = actualClass.replace("dark:", "");
          const style =
            handleSpecialCases(darkClass) || getStyleForClass(darkClass);
          if (style) {
            const priority = getBreakpointPriority(breakpoint);
            if (
              !responsiveStyles[priority] ||
              responsiveStyles[priority].breakpoint <= priority
            ) {
              responsiveStyles[priority] = { style, breakpoint: priority };
            }
          }
        }
      } else {
        // Regular responsive class
        if (shouldApplyBreakpoint(breakpoint, width)) {
          const style =
            handleSpecialCases(actualClass) || getStyleForClass(actualClass);
          if (style) {
            const priority = getBreakpointPriority(breakpoint);
            if (
              !responsiveStyles[priority] ||
              responsiveStyles[priority].breakpoint <= priority
            ) {
              responsiveStyles[priority] = { style, breakpoint: priority };
            }
          }
        }
      }
      continue;
    }

    // Handle regular classes
    const style = handleSpecialCases(className) || getStyleForClass(className);
    if (style) {
      resolvedStyles.push(style);
    }
  }

  // Add responsive styles in priority order
  const sortedResponsivePriorities = Object.keys(responsiveStyles)
    .map(Number)
    .sort((a, b) => a - b);

  for (const priority of sortedResponsivePriorities) {
    resolvedStyles.push(responsiveStyles[priority].style);
  }

  // Cache the array result
  styleCache.set(cacheKey, resolvedStyles);

  // Return flattened single object with proper typing
  const flattenedStyle = StyleSheet.flatten(resolvedStyles);

  // For backward compatibility with explicit component types
  if (component === "text") {
    return flattenedStyle as TextStyle;
  } else if (component === "image") {
    return flattenedStyle as ImageStyle;
  }

  // Return as 'any' to allow usage with all React Native components
  // This enables cs() to work directly with View, Text, Image, etc. without TypeScript conflicts
  return flattenedStyle as any;
}

/**
 * Helper function to get style for a class name
 */
function getStyleForClass(className: string): Style | null {
  // Handle arbitrary values FIRST (e.g., h-[32px], bg-[#ff0000])
  if (className.includes("[") && className.includes("]")) {
    const arbitraryStyle = handleArbitraryValue(className);
    if (arbitraryStyle) {
      return arbitraryStyle;
    }
  }

  // Handle theme-aware colors BEFORE static styles
  if (
    className.startsWith("bg-") ||
    className.startsWith("text-") ||
    className.startsWith("border-") ||
    className.startsWith("shadow-")
  ) {
    // Check if this should be theme-aware (not arbitrary values)
    if (!className.includes("[")) {
      const themeColorStyle = handleThemeColor(className);
      if (themeColorStyle) {
        return themeColorStyle;
      }
    }
  }

  // Check if there are any registered custom utilities
  if (customUtilities[className]) {
    return customUtilities[className];
  }

  // Also check with dot prefix for CSS-style selectors
  if (customUtilities[`.${className}`]) {
    return customUtilities[`.${className}`];
  }

  // Check for configuration-based spacing and sizing classes
  const configStyle = handleConfigurationBasedClass(className);
  if (configStyle) {
    return configStyle;
  }

  // Try the original kebab-case key first (most utilities use this)
  if (styles[className as keyof typeof styles]) {
    return styles[className as keyof typeof styles] as Style;
  }

  // Convert kebab-case to camelCase for style lookup (fallback)
  const styleKey = convertToStyleKey(className);
  if (styles[styleKey as keyof typeof styles]) {
    return styles[styleKey as keyof typeof styles] as Style;
  }

  // Handle special cases or arbitrary values
  const fallbackStyle = handleSpecialCases(className);
  if (fallbackStyle) {
    return fallbackStyle;
  }

  // Handle gradient classes (not supported in React Native, provide fallback)
  if (
    className.startsWith("bg-gradient") ||
    className.startsWith("from-") ||
    className.startsWith("via-") ||
    className.startsWith("to-")
  ) {
    // React Native doesn't support CSS gradients natively
    // Return a fallback background color based on the gradient type
    if (className.includes("orange")) return { backgroundColor: "#FB923C" }; // orange-400
    if (className.includes("red")) return { backgroundColor: "#F87171" }; // red-400
    if (className.includes("pink")) return { backgroundColor: "#EC4899" }; // pink-500
    if (className.includes("blue")) return { backgroundColor: "#3B82F6" }; // blue-500
    if (className.includes("purple")) return { backgroundColor: "#8B5CF6" }; // purple-500
    if (className.includes("green")) return { backgroundColor: "#10B981" }; // green-500
    // Default gradient fallback
    return { backgroundColor: "#6B7280" }; // gray-500
  }

  // In development, warn about missing styles
  if (__DEV__) {
    console.warn(`Cyclone Styles: Unknown class "${className}"`);
  }

  return null;
}

/**
 * Check if a breakpoint is currently active
 */
function isBreakpointActive(breakpoint: string): boolean {
  // Import screen width from styles module
  const { getScreenWidth } = require("./styles");
  const screenWidth = getScreenWidth();

  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
  };

  switch (breakpoint) {
    case "sm":
      return screenWidth >= breakpoints.sm;
    case "md":
      return screenWidth >= breakpoints.md;
    case "lg":
      return screenWidth >= breakpoints.lg;
    case "xl":
      return screenWidth >= breakpoints.xl;
    case "2xl":
      return screenWidth >= breakpoints["2xl"];
    default:
      return false;
  }
}

/**
 * Convert kebab-case class names to camelCase style keys
 * Examples:
 * - "flex-1" -> "flex1"
 * - "bg-blue-500" -> "bgBlue500"
 * - "text-lg" -> "textLg"
 * - "rounded-xl" -> "roundedXl"
 */
function convertToStyleKey(className: string): string {
  return (
    className
      // Handle negative values (e.g., "-m-4" -> "negativeM4")
      .replace(/^-/, "negative")
      // Convert kebab-case to camelCase
      .replace(/-./g, (match) => match[1].toUpperCase())
      // Handle special number suffixes
      .replace(/(\d+)xl/g, "$1Xl")
      .replace(/(\d+)lg/g, "$1Lg")
      .replace(/(\d+)md/g, "$1Md")
      .replace(/(\d+)sm/g, "$1Sm")
      .replace(/(\d+)xs/g, "$1Xs")
  );
}

/**
 * Handle special cases and edge cases
 */
function handleSpecialCases(className: string): Style | null {
  // Handle theme-based colors first (bg-brand, text-primary, shadow-brand, etc.)
  if (
    className.startsWith("bg-") ||
    className.startsWith("text-") ||
    className.startsWith("border-") ||
    className.startsWith("shadow-")
  ) {
    const themeColorStyle = handleThemeColor(className);
    if (themeColorStyle) {
      return themeColorStyle;
    }
  }

  // Handle gradient classes (React Native doesn't support CSS gradients natively)
  if (
    className.startsWith("bg-gradient-") ||
    className.startsWith("from-") ||
    className.startsWith("via-") ||
    className.startsWith("to-")
  ) {
    if (__DEV__) {
      console.warn(
        `Cyclone Styles: Gradient class "${className}" is not supported in React Native. Consider using react-native-linear-gradient or similar library.`
      );
    }
    return {};
  }

  // Handle hover classes (React Native doesn't support CSS hover)
  if (className.startsWith("hover:")) {
    if (__DEV__) {
      console.warn(
        `Cyclone Styles: Hover class "${className}" is not supported in React Native. Use Pressable with pressed state instead. See docs/react-native-effects-guide.md for examples.`
      );
    }
    return {};
  }

  // Handle transition classes (React Native doesn't support CSS transitions)
  if (
    className.startsWith("transition-") ||
    className.startsWith("duration-") ||
    className.startsWith("ease-")
  ) {
    if (__DEV__) {
      console.warn(
        `Cyclone Styles: Transition class "${className}" is not supported in React Native StyleSheet. Use react-native-reanimated for animations. See docs/react-native-effects-guide.md for examples.`
      );
    }
    return {};
  }

  // Handle percentage values
  if (className.includes("%")) {
    return handlePercentageClass(className);
  }

  // Handle color opacity variants (e.g., bg-black/50, text-white/80)
  if (className.includes("/")) {
    return handleColorOpacity(className);
  }

  // Note: Arbitrary values are now handled first in getStyleForClass()

  // Handle responsive prefixes (sm:, md:, lg:, xl:, 2xl:)
  if (className.includes(":")) {
    return handleResponsiveClass(className);
  }

  // Handle React Native specific fallbacks
  return handleReactNativeFallbacks(className);
}

/**
 * Handle React Native specific fallbacks for common missing classes
 * Enhanced with ALL CSS length unit support
 */
function handleReactNativeFallbacks(className: string): Style | null {
  // First check for CSS length unit patterns in utility classes
  const lengthUnitMatch = className.match(
    /^([a-z-]+?)-([\d.]+)(px|pt|pc|in|cm|mm|Q|em|rem|ex|ch|cap|ic|lh|rlh|vw|vh|vi|vb|vmin|vmax|cqw|cqh|cqi|cqb|cqmin|cqmax)$/
  );

  if (lengthUnitMatch) {
    const [, prefix, numValue, unit] = lengthUnitMatch;
    const fullValue = numValue + unit;

    // Handle width utilities with all units
    if (prefix === "w") {
      return { width: parseValue(fullValue) as DimensionValue };
    }
    if (prefix === "min-w") {
      return { minWidth: parseValue(fullValue) as DimensionValue };
    }
    if (prefix === "max-w") {
      return { maxWidth: parseValue(fullValue) as DimensionValue };
    }

    // Handle height utilities with all units
    if (prefix === "h") {
      return { height: parseValue(fullValue) as DimensionValue };
    }
    if (prefix === "min-h") {
      return { minHeight: parseValue(fullValue) as DimensionValue };
    }
    if (prefix === "max-h") {
      return { maxHeight: parseValue(fullValue) as DimensionValue };
    }

    // Handle margin utilities with all units
    if (prefix === "m") {
      return { margin: parseValue(fullValue) as DimensionValue };
    }
    if (prefix === "mt") {
      return { marginTop: parseValue(fullValue) as DimensionValue };
    }
    if (prefix === "mb") {
      return { marginBottom: parseValue(fullValue) as DimensionValue };
    }
    if (prefix === "ml") {
      return { marginLeft: parseValue(fullValue) as DimensionValue };
    }
    if (prefix === "mr") {
      return { marginRight: parseValue(fullValue) as DimensionValue };
    }
    if (prefix === "mx") {
      return {
        marginLeft: parseValue(fullValue) as DimensionValue,
        marginRight: parseValue(fullValue) as DimensionValue,
      };
    }
    if (prefix === "my") {
      return {
        marginTop: parseValue(fullValue) as DimensionValue,
        marginBottom: parseValue(fullValue) as DimensionValue,
      };
    }

    // Handle padding utilities with all units
    if (prefix === "p") {
      return { padding: parseValue(fullValue) as DimensionValue };
    }
    if (prefix === "pt") {
      return { paddingTop: parseValue(fullValue) as DimensionValue };
    }
    if (prefix === "pb") {
      return { paddingBottom: parseValue(fullValue) as DimensionValue };
    }
    if (prefix === "pl") {
      return { paddingLeft: parseValue(fullValue) as DimensionValue };
    }
    if (prefix === "pr") {
      return { paddingRight: parseValue(fullValue) as DimensionValue };
    }
    if (prefix === "px") {
      return {
        paddingLeft: parseValue(fullValue) as DimensionValue,
        paddingRight: parseValue(fullValue) as DimensionValue,
      };
    }
    if (prefix === "py") {
      return {
        paddingTop: parseValue(fullValue) as DimensionValue,
        paddingBottom: parseValue(fullValue) as DimensionValue,
      };
    }

    // Handle border radius with all units
    if (prefix === "rounded") {
      return { borderRadius: parseNumericValue(fullValue) };
    }
    if (prefix === "rounded-t") {
      return {
        borderTopLeftRadius: parseNumericValue(fullValue),
        borderTopRightRadius: parseNumericValue(fullValue),
      };
    }
    if (prefix === "rounded-b") {
      return {
        borderBottomLeftRadius: parseNumericValue(fullValue),
        borderBottomRightRadius: parseNumericValue(fullValue),
      };
    }
    if (prefix === "rounded-l") {
      return {
        borderTopLeftRadius: parseNumericValue(fullValue),
        borderBottomLeftRadius: parseNumericValue(fullValue),
      };
    }
    if (prefix === "rounded-r") {
      return {
        borderTopRightRadius: parseNumericValue(fullValue),
        borderBottomRightRadius: parseNumericValue(fullValue),
      };
    }
    if (prefix === "rounded-tl") {
      return { borderTopLeftRadius: parseNumericValue(fullValue) };
    }
    if (prefix === "rounded-tr") {
      return { borderTopRightRadius: parseNumericValue(fullValue) };
    }
    if (prefix === "rounded-bl") {
      return { borderBottomLeftRadius: parseNumericValue(fullValue) };
    }
    if (prefix === "rounded-br") {
      return { borderBottomRightRadius: parseNumericValue(fullValue) };
    }

    // Handle typography with all units
    if (prefix === "text") {
      return { fontSize: parseNumericValue(fullValue) };
    }
    if (prefix === "leading") {
      return { lineHeight: parseNumericValue(fullValue) };
    }
    if (prefix === "tracking") {
      return { letterSpacing: parseNumericValue(fullValue) };
    }

    // Handle border width with all units
    if (prefix === "border") {
      return { borderWidth: parseNumericValue(fullValue) };
    }
    if (prefix === "border-t") {
      return { borderTopWidth: parseNumericValue(fullValue) };
    }
    if (prefix === "border-b") {
      return { borderBottomWidth: parseNumericValue(fullValue) };
    }
    if (prefix === "border-l") {
      return { borderLeftWidth: parseNumericValue(fullValue) };
    }
    if (prefix === "border-r") {
      return { borderRightWidth: parseNumericValue(fullValue) };
    }

    // Handle positioning with all units
    if (prefix === "top") {
      return { top: parseValue(fullValue) as DimensionValue };
    }
    if (prefix === "bottom") {
      return { bottom: parseValue(fullValue) as DimensionValue };
    }
    if (prefix === "left") {
      return { left: parseValue(fullValue) as DimensionValue };
    }
    if (prefix === "right") {
      return { right: parseValue(fullValue) as DimensionValue };
    }
    if (prefix === "inset") {
      return {
        top: parseValue(fullValue) as DimensionValue,
        bottom: parseValue(fullValue) as DimensionValue,
        left: parseValue(fullValue) as DimensionValue,
        right: parseValue(fullValue) as DimensionValue,
      };
    }
    if (prefix === "inset-x") {
      return {
        left: parseValue(fullValue) as DimensionValue,
        right: parseValue(fullValue) as DimensionValue,
      };
    }
    if (prefix === "inset-y") {
      return {
        top: parseValue(fullValue) as DimensionValue,
        bottom: parseValue(fullValue) as DimensionValue,
      };
    }

    // Handle gap (flexbox/grid) with all units
    if (prefix === "gap") {
      return { gap: parseNumericValue(fullValue) };
    }
    if (prefix === "gap-x") {
      return { columnGap: parseNumericValue(fullValue) };
    }
    if (prefix === "gap-y") {
      return { rowGap: parseNumericValue(fullValue) };
    }

    // Handle spacing utilities with all units
    if (prefix === "space-x") {
      return { marginRight: parseNumericValue(fullValue) };
    }
    if (prefix === "space-y") {
      return { marginBottom: parseNumericValue(fullValue) };
    }
  }

  // Common missing utilities that should have fallbacks (existing ones)
  const fallbacks: Record<string, Style> = {
    // Typography variants
    "font-extrabold": { fontWeight: "800" },
    "font-black": { fontWeight: "900" },

    // Common border radius values
    "rounded-2xl": { borderRadius: 16 },
    "rounded-3xl": { borderRadius: 24 },
    "rounded-4xl": { borderRadius: 32 },

    // Additional spacing that might be missing
    "space-x-1": { marginRight: 4 },
    "space-x-2": { marginRight: 8 },
    "space-x-3": { marginRight: 12 },
    "space-x-4": { marginRight: 16 },
    "space-x-5": { marginRight: 20 },
    "space-x-6": { marginRight: 24 },
    "space-y-1": { marginBottom: 4 },
    "space-y-2": { marginBottom: 8 },
    "space-y-3": { marginBottom: 12 },
    "space-y-4": { marginBottom: 16 },
    "space-y-5": { marginBottom: 20 },
    "space-y-6": { marginBottom: 24 },

    // Additional widths/heights
    "w-11": { width: 44 },
    "w-12": { width: 48 },
    "w-13": { width: 52 },
    "w-14": { width: 56 },
    "w-15": { width: 60 },
    "w-17": { width: 68 },
    "w-18": { width: 72 },
    "w-19": { width: 76 },
    "w-21": { width: 84 },
    "w-22": { width: 88 },
    "w-23": { width: 92 },
    "h-11": { height: 44 },
    "h-12": { height: 48 },
    "h-13": { height: 52 },
    "h-14": { height: 56 },
    "h-15": { height: 60 },
    "h-17": { height: 68 },
    "h-18": { height: 72 },
    "h-19": { height: 76 },
    "h-21": { height: 84 },
    "h-22": { height: 88 },
    "h-23": { height: 92 },

    // Additional text sizes
    "text-2xl": { fontSize: 24 },
    "text-3xl": { fontSize: 30 },
    "text-4xl": { fontSize: 36 },
    "text-5xl": { fontSize: 48 },
    "text-6xl": { fontSize: 60 },
    "text-7xl": { fontSize: 72 },
    "text-8xl": { fontSize: 96 },
    "text-9xl": { fontSize: 128 },

    // Additional opacity
    "opacity-5": { opacity: 0.05 },
    "opacity-10": { opacity: 0.1 },
    "opacity-15": { opacity: 0.15 },
    "opacity-85": { opacity: 0.85 },
    "opacity-90": { opacity: 0.9 },
    "opacity-95": { opacity: 0.95 },

    // Additional padding/margin values
    "p-0.5": { padding: 2 },
    "p-1.5": { padding: 6 },
    "p-2.5": { padding: 10 },
    "p-3.5": { padding: 14 },
    "m-0.5": { margin: 2 },
    "m-1.5": { margin: 6 },
    "m-2.5": { margin: 10 },
    "m-3.5": { margin: 14 },
    "pt-0.5": { paddingTop: 2 },
    "pt-1.5": { paddingTop: 6 },
    "pt-2.5": { paddingTop: 10 },
    "pt-3.5": { paddingTop: 14 },
    "pb-0.5": { paddingBottom: 2 },
    "pb-1.5": { paddingBottom: 6 },
    "pb-2.5": { paddingBottom: 10 },
    "pb-3.5": { paddingBottom: 14 },
    "pl-0.5": { paddingLeft: 2 },
    "pl-1.5": { paddingLeft: 6 },
    "pl-2.5": { paddingLeft: 10 },
    "pl-3.5": { paddingLeft: 14 },
    "pr-0.5": { paddingRight: 2 },
    "pr-1.5": { paddingRight: 6 },
    "pr-2.5": { paddingRight: 10 },
    "pr-3.5": { paddingRight: 14 },
    "mt-0.5": { marginTop: 2 },
    "mt-1.5": { marginTop: 6 },
    "mt-2.5": { marginTop: 10 },
    "mt-3.5": { marginTop: 14 },
    "mb-0.5": { marginBottom: 2 },
    "mb-1.5": { marginBottom: 6 },
    "mb-2.5": { marginBottom: 10 },
    "mb-3.5": { marginBottom: 14 },
    "ml-0.5": { marginLeft: 2 },
    "ml-1.5": { marginLeft: 6 },
    "ml-2.5": { marginLeft: 10 },
    "ml-3.5": { marginLeft: 14 },
    "mr-0.5": { marginRight: 2 },
    "mr-1.5": { marginRight: 6 },
    "mr-2.5": { marginRight: 10 },
    "mr-3.5": { marginRight: 14 },

    // Additional flex values
    "flex-2": { flex: 2 },
    "flex-3": { flex: 3 },
    "flex-4": { flex: 4 },
    "flex-5": { flex: 5 },

    // Common transform values
    "scale-50": { transform: [{ scale: 0.5 }] },
    "scale-75": { transform: [{ scale: 0.75 }] },
    "scale-90": { transform: [{ scale: 0.9 }] },
    "scale-95": { transform: [{ scale: 0.95 }] },
    "scale-105": { transform: [{ scale: 1.05 }] },
    "scale-110": { transform: [{ scale: 1.1 }] },
    "scale-125": { transform: [{ scale: 1.25 }] },
    "scale-150": { transform: [{ scale: 1.5 }] },

    // Rotate values
    "rotate-1": { transform: [{ rotate: "1deg" }] },
    "rotate-2": { transform: [{ rotate: "2deg" }] },
    "rotate-3": { transform: [{ rotate: "3deg" }] },
    "rotate-6": { transform: [{ rotate: "6deg" }] },
    "rotate-12": { transform: [{ rotate: "12deg" }] },
    "rotate-45": { transform: [{ rotate: "45deg" }] },
    "rotate-90": { transform: [{ rotate: "90deg" }] },
    "rotate-180": { transform: [{ rotate: "180deg" }] },
    "-rotate-1": { transform: [{ rotate: "-1deg" }] },
    "-rotate-2": { transform: [{ rotate: "-2deg" }] },
    "-rotate-3": { transform: [{ rotate: "-3deg" }] },
    "-rotate-6": { transform: [{ rotate: "-6deg" }] },
    "-rotate-12": { transform: [{ rotate: "-12deg" }] },
    "-rotate-45": { transform: [{ rotate: "-45deg" }] },
    "-rotate-90": { transform: [{ rotate: "-90deg" }] },
    "-rotate-180": { transform: [{ rotate: "-180deg" }] },
  };

  if (fallbacks[className]) {
    return fallbacks[className];
  }

  return null;
}

/**
 * Handle percentage-based classes
 */
function handlePercentageClass(className: string): Style | null {
  if (className.startsWith("w-") && className.includes("%")) {
    const percent = className.replace("w-", "").replace("%", "");
    return { width: `${percent}%` as DimensionValue };
  }
  if (className.startsWith("h-") && className.includes("%")) {
    const percent = className.replace("h-", "").replace("%", "");
    return { height: `${percent}%` as DimensionValue };
  }
  return null;
}

/**
 * Handle color opacity classes (e.g., bg-black/50, text-white/80)
 */
function handleColorOpacity(className: string): Style | null {
  if (!className.includes("/")) return null;

  const [colorClass, opacityValue] = className.split("/");
  const opacity = parseInt(opacityValue, 10) / 100;

  if (isNaN(opacity) || opacity < 0 || opacity > 1) return null;

  // Background colors
  if (colorClass.startsWith("bg-")) {
    const colorName = colorClass.replace("bg-", "");
    const color = getThemeColor(colorName);
    if (color) {
      return { backgroundColor: addOpacityToColor(color, opacity) };
    }
  }

  // Text colors
  if (colorClass.startsWith("text-")) {
    const colorName = colorClass.replace("text-", "");
    const color = getThemeColor(colorName);
    if (color) {
      return { color: addOpacityToColor(color, opacity) };
    }
  }

  // Border colors
  if (colorClass.startsWith("border-")) {
    const colorName = colorClass.replace("border-", "");
    const color = getThemeColor(colorName);
    if (color) {
      return { borderColor: addOpacityToColor(color, opacity) };
    }
  }

  return null;
}

/**
 * Get theme color by name using the configuration system
 */
function getThemeColor(colorName: string): string | null {
  // Get current theme context
  const { isDark } = globalThemeContext;

  // Get colors from configuration first
  const flattenedColors = getFlattenedColors();

  // First try exact match from config
  if (flattenedColors[colorName]) {
    return flattenedColors[colorName];
  }

  // Handle shade variants (e.g., red-500, blue-100)
  if (colorName.includes("-")) {
    const [baseColor, shade] = colorName.split("-");
    const key = `${baseColor}-${shade}`;
    if (flattenedColors[key]) {
      return flattenedColors[key];
    }
  }

  // Theme-aware color mappings for common colors
  const themeAwareColors: { [key: string]: { light: string; dark: string } } = {
    // Standard theme colors
    white: { light: "#FFFFFF", dark: "#000000" },
    black: { light: "#000000", dark: "#FFFFFF" },

    // Gray scale - adjust for better dark mode contrast
    "gray-50": { light: "#F9FAFB", dark: "#1F2937" },
    "gray-100": { light: "#F3F4F6", dark: "#111827" },
    "gray-200": { light: "#E5E7EB", dark: "#374151" },
    "gray-300": { light: "#D1D5DB", dark: "#4B5563" },
    "gray-400": { light: "#9CA3AF", dark: "#6B7280" },
    "gray-500": { light: "#6B7280", dark: "#9CA3AF" },
    "gray-600": { light: "#4B5563", dark: "#D1D5DB" },
    "gray-700": { light: "#374151", dark: "#E5E7EB" },
    "gray-800": { light: "#1F2937", dark: "#F3F4F6" },
    "gray-900": { light: "#111827", dark: "#F9FAFB" },

    // Slate scale
    "slate-50": { light: "#F8FAFC", dark: "#1E293B" },
    "slate-100": { light: "#F1F5F9", dark: "#0F172A" },
    "slate-200": { light: "#E2E8F0", dark: "#334155" },
    "slate-300": { light: "#CBD5E1", dark: "#475569" },
    "slate-400": { light: "#94A3B8", dark: "#64748B" },
    "slate-500": { light: "#64748B", dark: "#94A3B8" },
    "slate-600": { light: "#475569", dark: "#CBD5E1" },
    "slate-700": { light: "#334155", dark: "#E2E8F0" },
    "slate-800": { light: "#1E293B", dark: "#F1F5F9" },
    "slate-900": { light: "#0F172A", dark: "#F8FAFC" },

    // Neutral scale (similar to gray but slightly different)
    "neutral-50": { light: "#FAFAFA", dark: "#262626" },
    "neutral-100": { light: "#F5F5F5", dark: "#171717" },
    "neutral-200": { light: "#E5E5E5", dark: "#404040" },
    "neutral-300": { light: "#D4D4D4", dark: "#525252" },
    "neutral-400": { light: "#A3A3A3", dark: "#737373" },
    "neutral-500": { light: "#737373", dark: "#A3A3A3" },
    "neutral-600": { light: "#525252", dark: "#D4D4D4" },
    "neutral-700": { light: "#404040", dark: "#E5E5E5" },
    "neutral-800": { light: "#262626", dark: "#F5F5F5" },
    "neutral-900": { light: "#171717", dark: "#FAFAFA" },

    // Stone scale
    "stone-50": { light: "#FAFAF9", dark: "#292524" },
    "stone-100": { light: "#F5F5F4", dark: "#1C1917" },
    "stone-200": { light: "#E7E5E4", dark: "#44403C" },
    "stone-300": { light: "#D6D3D1", dark: "#57534E" },
    "stone-400": { light: "#A8A29E", dark: "#78716C" },
    "stone-500": { light: "#78716C", dark: "#A8A29E" },
    "stone-600": { light: "#57534E", dark: "#D6D3D1" },
    "stone-700": { light: "#44403C", dark: "#E7E5E4" },
    "stone-800": { light: "#292524", dark: "#F5F5F4" },
    "stone-900": { light: "#1C1917", dark: "#FAFAF9" },

    // Zinc scale
    "zinc-50": { light: "#FAFAFA", dark: "#27272A" },
    "zinc-100": { light: "#F4F4F5", dark: "#18181B" },
    "zinc-200": { light: "#E4E4E7", dark: "#3F3F46" },
    "zinc-300": { light: "#D4D4D8", dark: "#52525B" },
    "zinc-400": { light: "#A1A1AA", dark: "#71717A" },
    "zinc-500": { light: "#71717A", dark: "#A1A1AA" },
    "zinc-600": { light: "#52525B", dark: "#D4D4D8" },
    "zinc-700": { light: "#3F3F46", dark: "#E4E4E7" },
    "zinc-800": { light: "#27272A", dark: "#F4F4F5" },
    "zinc-900": { light: "#18181B", dark: "#FAFAFA" },
  };

  // Check for theme-aware colors
  if (themeAwareColors[colorName]) {
    return isDark
      ? themeAwareColors[colorName].dark
      : themeAwareColors[colorName].light;
  }

  // Fallback to basic colors (these remain the same for both themes)
  const basicColors: { [key: string]: string } = {
    red: "#EF4444",
    green: "#10B981",
    blue: "#3B82F6",
    yellow: "#F59E0B",
    purple: "#8B5CF6",
    pink: "#EC4899",
    indigo: "#6366F1",
    orange: "#F97316",
    teal: "#14B8A6",
    cyan: "#06B6D4",
    lime: "#84CC16",
    emerald: "#059669",
    sky: "#0EA5E9",
    violet: "#7C3AED",
    fuchsia: "#D946EF",
    rose: "#F43F5E",
    amber: "#F59E0B",
    transparent: "transparent",
  };

  return basicColors[colorName] || null;
}

/**
 * Handle theme-based color classes (bg-brand, text-primary, etc.)
 */
function handleThemeColor(className: string): Style | null {
  // Background colors
  if (className.startsWith("bg-")) {
    const colorName = className.replace("bg-", "");
    const color = getThemeColor(colorName);
    if (color) {
      return { backgroundColor: color };
    }
  }

  // Text colors
  if (className.startsWith("text-")) {
    const colorName = className.replace("text-", "");
    const color = getThemeColor(colorName);
    if (color) {
      return { color: color };
    }
  }

  // Border colors
  if (className.startsWith("border-")) {
    const colorName = className.replace("border-", "");
    const color = getThemeColor(colorName);
    if (color) {
      return { borderColor: color };
    }
  }

  // Shadow colors
  if (className.startsWith("shadow-")) {
    const colorName = className.replace("shadow-", "");
    const color = getThemeColor(colorName);
    if (color) {
      return { shadowColor: color };
    }
  }

  return null;
}

/**
 * Add opacity to a color
 */
function addOpacityToColor(color: string, opacity: number): string {
  if (color === "transparent") return color;

  // Convert hex to rgba
  if (color.startsWith("#")) {
    const hex = color.replace("#", "");
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }

  // If already in rgba format, update opacity
  if (color.startsWith("rgba")) {
    return color.replace(/,\s*[\d.]+\)$/, `, ${opacity})`);
  }

  // If in rgb format, convert to rgba
  if (color.startsWith("rgb")) {
    return color.replace("rgb", "rgba").replace(")", `, ${opacity})`);
  }

  return color;
}

/**
 * Handle arbitrary values like bg-[#ff0000], w-[32], h-[32px], p-[32rem], etc.
 * Supports all units and formats: [32], [32px], [32rem], [32em], [32%], [32vw], [32vh]
 */
function handleArbitraryValue(className: string): Style | null {
  const match = className.match(/^([^[]+)\[([^\]]+)\]$/);
  if (!match) return null;

  const [, prefix, value] = match;

  switch (prefix) {
    // Background colors and properties
    case "bg-":
      return { backgroundColor: value };

    // Text colors and font size
    case "text-":
      // Handle text size like text-[16], text-[16px], text-[1rem]
      if (
        value.includes("px") ||
        value.includes("rem") ||
        value.includes("em") ||
        /^\d+(\.\d+)?$/.test(value)
      ) {
        return { fontSize: parseNumericValue(value) };
      }
      // Handle text color like text-[#ff0000]
      return { color: value };

    // Dimensions - Width
    case "w-":
      return { width: parseValue(value) as DimensionValue };
    case "min-w-":
      return { minWidth: parseValue(value) as DimensionValue };
    case "max-w-":
      return { maxWidth: parseValue(value) as DimensionValue };

    // Dimensions - Height
    case "h-":
      return { height: parseValue(value) as DimensionValue };
    case "min-h-":
      return { minHeight: parseValue(value) as DimensionValue };
    case "max-h-":
      return { maxHeight: parseValue(value) as DimensionValue };

    // Margin - All directions
    case "m-":
      return { margin: parseValue(value) as DimensionValue };
    case "mt-":
      return { marginTop: parseValue(value) as DimensionValue };
    case "mb-":
      return { marginBottom: parseValue(value) as DimensionValue };
    case "ml-":
      return { marginLeft: parseValue(value) as DimensionValue };
    case "mr-":
      return { marginRight: parseValue(value) as DimensionValue };
    case "mx-":
      return {
        marginLeft: parseValue(value) as DimensionValue,
        marginRight: parseValue(value) as DimensionValue,
      };
    case "my-":
      return {
        marginTop: parseValue(value) as DimensionValue,
        marginBottom: parseValue(value) as DimensionValue,
      };

    // Padding - All directions
    case "p-":
      return { padding: parseValue(value) as DimensionValue };
    case "pt-":
      return { paddingTop: parseValue(value) as DimensionValue };
    case "pb-":
      return { paddingBottom: parseValue(value) as DimensionValue };
    case "pl-":
      return { paddingLeft: parseValue(value) as DimensionValue };
    case "pr-":
      return { paddingRight: parseValue(value) as DimensionValue };
    case "px-":
      return {
        paddingLeft: parseValue(value) as DimensionValue,
        paddingRight: parseValue(value) as DimensionValue,
      };
    case "py-":
      return {
        paddingTop: parseValue(value) as DimensionValue,
        paddingBottom: parseValue(value) as DimensionValue,
      };

    // Border radius - All variants
    case "rounded-":
      return { borderRadius: parseNumericValue(value) };
    case "rounded-t-":
      return {
        borderTopLeftRadius: parseNumericValue(value),
        borderTopRightRadius: parseNumericValue(value),
      };
    case "rounded-b-":
      return {
        borderBottomLeftRadius: parseNumericValue(value),
        borderBottomRightRadius: parseNumericValue(value),
      };
    case "rounded-l-":
      return {
        borderTopLeftRadius: parseNumericValue(value),
        borderBottomLeftRadius: parseNumericValue(value),
      };
    case "rounded-r-":
      return {
        borderTopRightRadius: parseNumericValue(value),
        borderBottomRightRadius: parseNumericValue(value),
      };
    case "rounded-tl-":
      return { borderTopLeftRadius: parseNumericValue(value) };
    case "rounded-tr-":
      return { borderTopRightRadius: parseNumericValue(value) };
    case "rounded-bl-":
      return { borderBottomLeftRadius: parseNumericValue(value) };
    case "rounded-br-":
      return { borderBottomRightRadius: parseNumericValue(value) };

    // Positioning - All directions
    case "top-":
      return { top: parseValue(value) as DimensionValue };
    case "bottom-":
      return { bottom: parseValue(value) as DimensionValue };
    case "left-":
      return { left: parseValue(value) as DimensionValue };
    case "right-":
      return { right: parseValue(value) as DimensionValue };
    case "inset-":
      return {
        top: parseValue(value) as DimensionValue,
        bottom: parseValue(value) as DimensionValue,
        left: parseValue(value) as DimensionValue,
        right: parseValue(value) as DimensionValue,
      };
    case "inset-x-":
      return {
        left: parseValue(value) as DimensionValue,
        right: parseValue(value) as DimensionValue,
      };
    case "inset-y-":
      return {
        top: parseValue(value) as DimensionValue,
        bottom: parseValue(value) as DimensionValue,
      };

    // Typography - Font properties
    case "font-":
      // Handle font weight like font-[400], font-[bold]
      if (
        /^\d+$/.test(value) ||
        [
          "normal",
          "bold",
          "100",
          "200",
          "300",
          "400",
          "500",
          "600",
          "700",
          "800",
          "900",
        ].includes(value)
      ) {
        return { fontWeight: value as any };
      }
      return null;
    case "leading-":
      return { lineHeight: parseNumericValue(value) };
    case "tracking-":
      return { letterSpacing: parseNumericValue(value) };

    // Border - Width and color
    case "border-":
      // Handle border width like border-[2], border-[2px]
      if (
        value.includes("px") ||
        value.includes("rem") ||
        value.includes("em") ||
        /^\d+(\.\d+)?$/.test(value)
      ) {
        return { borderWidth: parseNumericValue(value) };
      }
      // Handle border color like border-[#ff0000]
      return { borderColor: value };
    case "border-t-":
      return { borderTopWidth: parseNumericValue(value) };
    case "border-b-":
      return { borderBottomWidth: parseNumericValue(value) };
    case "border-l-":
      return { borderLeftWidth: parseNumericValue(value) };
    case "border-r-":
      return { borderRightWidth: parseNumericValue(value) };

    // Border colors - All directions
    case "border-color-":
      return { borderColor: value };
    case "border-t-color-":
      return { borderTopColor: value };
    case "border-b-color-":
      return { borderBottomColor: value };
    case "border-l-color-":
      return { borderLeftColor: value };
    case "border-r-color-":
      return { borderRightColor: value };

    // Opacity and visibility
    case "opacity-":
      const opacityValue = parseFloat(value);
      return { opacity: opacityValue > 1 ? opacityValue / 100 : opacityValue };

    // Z-index and stacking
    case "z-":
      return { zIndex: parseInt(value, 10) };

    // Flex properties
    case "flex-":
      if (/^\d+(\.\d+)?$/.test(value)) {
        return { flex: parseFloat(value) };
      }
      return null;
    case "flex-grow-":
      return { flexGrow: parseFloat(value) };
    case "flex-shrink-":
      return { flexShrink: parseFloat(value) };
    case "flex-basis-":
      return { flexBasis: parseValue(value) as DimensionValue };

    // Gap (for flexbox/grid spacing)
    case "gap-":
      return { gap: parseNumericValue(value) };
    case "gap-x-":
      return { columnGap: parseNumericValue(value) };
    case "gap-y-":
      return { rowGap: parseNumericValue(value) };

    // Shadow properties (React Native compatible)
    case "shadow-":
      // Handle shadow like shadow-[4] for elevation/shadowRadius
      return {
        shadowRadius: parseNumericValue(value),
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: parseNumericValue(value) / 2 },
      };
    case "shadow-color-":
      return { shadowColor: value };
    case "shadow-opacity-":
      return { shadowOpacity: parseFloat(value) };
    case "shadow-radius-":
      return { shadowRadius: parseNumericValue(value) };

    // Transform properties
    case "scale-":
      const scaleValue = parseFloat(value);
      return {
        transform: [{ scale: scaleValue > 1 ? scaleValue / 100 : scaleValue }],
      };
    case "scale-x-":
      const scaleXValue = parseFloat(value);
      return {
        transform: [
          { scaleX: scaleXValue > 1 ? scaleXValue / 100 : scaleXValue },
        ],
      };
    case "scale-y-":
      const scaleYValue = parseFloat(value);
      return {
        transform: [
          { scaleY: scaleYValue > 1 ? scaleYValue / 100 : scaleYValue },
        ],
      };
    case "rotate-":
      return {
        transform: [{ rotate: value.includes("deg") ? value : `${value}deg` }],
      };
    case "translate-x-":
      return { transform: [{ translateX: parseNumericValue(value) }] };
    case "translate-y-":
      return { transform: [{ translateY: parseNumericValue(value) }] };

    // Additional spacing utilities
    case "space-x-":
      return { marginRight: parseNumericValue(value) };
    case "space-y-":
      return { marginBottom: parseNumericValue(value) };

    // Additional layout properties
    case "aspect-":
      // Handle aspect ratio like aspect-[16/9] or aspect-[1.5]
      if (value.includes("/")) {
        const [width, height] = value.split("/");
        return { aspectRatio: parseFloat(width) / parseFloat(height) };
      }
      return { aspectRatio: parseFloat(value) };

    default:
      return null;
  }
}

/**
 * Handle responsive classes with proper screen dimension checking
 */
function handleResponsiveClass(className: string): Style | null {
  const [breakpoint, actualClass] = className.split(":");

  // Get current screen width
  const { width } = require("react-native").Dimensions.get("window");

  // Check if current screen size matches the breakpoint
  if (!shouldApplyBreakpoint(breakpoint, width)) {
    return null;
  }

  // Handle special cases within responsive classes
  let style = handleSpecialCases(actualClass);

  if (!style) {
    // Try getting style from utilities
    style = getStyleForClass(actualClass);
  }

  return style || null;
}

/**
 * Check if a breakpoint should be applied based on current screen width
 */
function shouldApplyBreakpoint(
  breakpoint: string,
  screenWidth: number
): boolean {
  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
  };

  const breakpointWidth = breakpoints[breakpoint as keyof typeof breakpoints];

  if (!breakpointWidth) return false;

  return screenWidth >= breakpointWidth;
}

/**
 * Get breakpoint priority for style ordering
 */
function getBreakpointPriority(breakpoint: string): number {
  switch (breakpoint) {
    case "sm":
      return 1;
    case "md":
      return 2;
    case "lg":
      return 3;
    case "xl":
      return 4;
    case "2xl":
      return 5;
    default:
      return 0;
  }
}

/**
 * Handle classes that should use configuration values (spacing, font sizes, etc.)
 */
function handleConfigurationBasedClass(className: string): Style | null {
  // Handle padding classes (p-4, px-2, py-6, etc.)
  if (className.match(/^p[xytrbl]?-\w+$/)) {
    const [prefix, value] = className.split("-");
    const spacingValue = getSpacingValue(value);

    if (spacingValue !== null) {
      switch (prefix) {
        case "p":
          return { padding: spacingValue };
        case "px":
          return { paddingHorizontal: spacingValue };
        case "py":
          return { paddingVertical: spacingValue };
        case "pt":
          return { paddingTop: spacingValue };
        case "pb":
          return { paddingBottom: spacingValue };
        case "pl":
          return { paddingLeft: spacingValue };
        case "pr":
          return { paddingRight: spacingValue };
      }
    }
  }

  // Handle margin classes (m-4, mx-2, my-6, etc.)
  if (className.match(/^m[xytrbl]?-\w+$/)) {
    const [prefix, value] = className.split("-");
    const spacingValue = getSpacingValue(value);

    if (spacingValue !== null) {
      switch (prefix) {
        case "m":
          return { margin: spacingValue };
        case "mx":
          return { marginHorizontal: spacingValue };
        case "my":
          return { marginVertical: spacingValue };
        case "mt":
          return { marginTop: spacingValue };
        case "mb":
          return { marginBottom: spacingValue };
        case "ml":
          return { marginLeft: spacingValue };
        case "mr":
          return { marginRight: spacingValue };
      }
    }
  }

  // Handle width classes (w-4, w-full, etc.)
  if (className.match(/^w-\w+$/)) {
    const value = className.replace("w-", "");
    const spacingValue = getSpacingValue(value);

    if (spacingValue !== null) {
      return { width: spacingValue };
    }
  }

  // Handle height classes (h-4, h-full, etc.)
  if (className.match(/^h-\w+$/)) {
    const value = className.replace("h-", "");
    const spacingValue = getSpacingValue(value);

    if (spacingValue !== null) {
      return { height: spacingValue };
    }
  }

  // Handle font size classes (text-sm, text-lg, etc.)
  if (className.match(/^text-\w+$/)) {
    const value = className.replace("text-", "");
    const fontSizeValue = getFontSizeValue(value);

    if (fontSizeValue !== null) {
      return { fontSize: fontSizeValue };
    }
  }

  // Handle border radius classes (rounded-sm, rounded-lg, etc.)
  if (className.match(/^rounded-\w+$/)) {
    const value = className.replace("rounded-", "");
    const radiusValue = getBorderRadiusValue(value);

    if (radiusValue !== null) {
      return { borderRadius: radiusValue };
    }
  }

  return null;
}

/**
 * Get spacing value from configuration
 */
function getSpacingValue(key: string): number | null {
  const config = getConfig();

  // Try custom spacing first
  if (config.extend?.spacing && config.extend.spacing[key] !== undefined) {
    return config.extend.spacing[key];
  }

  // Try default spacing
  if (config.spacing && config.spacing[key] !== undefined) {
    return config.spacing[key];
  }

  return null;
}

/**
 * Get font size value from configuration
 */
function getFontSizeValue(key: string): number | null {
  const config = getConfig();

  // Try custom font sizes first
  if (config.extend?.fontSize && config.extend.fontSize[key] !== undefined) {
    return config.extend.fontSize[key];
  }

  // Try default font sizes
  if (config.fontSize && config.fontSize[key] !== undefined) {
    return config.fontSize[key];
  }

  return null;
}

/**
 * Get border radius value from configuration
 */
function getBorderRadiusValue(key: string): number | null {
  const config = getConfig();

  // Try custom border radius first
  if (
    config.extend?.borderRadius &&
    config.extend.borderRadius[key] !== undefined
  ) {
    return config.extend.borderRadius[key];
  }

  // Try default border radius
  if (config.borderRadius && config.borderRadius[key] !== undefined) {
    return config.borderRadius[key];
  }

  return null;
}

/**
 * Parse CSS values to React Native compatible values
 * Supports ALL CSS length units and converts them appropriately
 */
function parseValue(value: string): string | number {
  // Handle percentage values (keep as string)
  if (value.endsWith("%")) {
    return value;
  }

  // Absolute length units
  if (value.endsWith("px")) {
    return parseInt(value.replace("px", ""), 10);
  }

  if (value.endsWith("pt")) {
    // 1pt = 1.33px
    const ptValue = parseFloat(value.replace("pt", ""));
    return Math.round(ptValue * 1.33);
  }

  if (value.endsWith("pc")) {
    // 1pc = 16px (12pt)
    const pcValue = parseFloat(value.replace("pc", ""));
    return Math.round(pcValue * 16);
  }

  if (value.endsWith("in")) {
    // 1in = 96px
    const inValue = parseFloat(value.replace("in", ""));
    return Math.round(inValue * 96);
  }

  if (value.endsWith("cm")) {
    // 1cm = 37.795px
    const cmValue = parseFloat(value.replace("cm", ""));
    return Math.round(cmValue * 37.795);
  }

  if (value.endsWith("mm")) {
    // 1mm = 3.7795px
    const mmValue = parseFloat(value.replace("mm", ""));
    return Math.round(mmValue * 3.7795);
  }

  if (value.endsWith("Q")) {
    // 1Q = 0.945px (quarter-millimeter)
    const qValue = parseFloat(value.replace("Q", ""));
    return Math.round(qValue * 0.945);
  }

  // Relative length units
  if (value.endsWith("em")) {
    // 1em = 16px (default font size)
    const emValue = parseFloat(value.replace("em", ""));
    return Math.round(emValue * 16);
  }

  if (value.endsWith("rem")) {
    // 1rem = 16px (root font size)
    const remValue = parseFloat(value.replace("rem", ""));
    return Math.round(remValue * 16);
  }

  if (value.endsWith("ex")) {
    // 1ex ≈ 0.5em = 8px (x-height)
    const exValue = parseFloat(value.replace("ex", ""));
    return Math.round(exValue * 8);
  }

  if (value.endsWith("ch")) {
    // 1ch ≈ 0.5em = 8px (character width)
    const chValue = parseFloat(value.replace("ch", ""));
    return Math.round(chValue * 8);
  }

  if (value.endsWith("cap")) {
    // 1cap ≈ 0.7em = 11.2px (cap height)
    const capValue = parseFloat(value.replace("cap", ""));
    return Math.round(capValue * 11.2);
  }

  if (value.endsWith("ic")) {
    // 1ic ≈ 1em = 16px (ideographic character width)
    const icValue = parseFloat(value.replace("ic", ""));
    return Math.round(icValue * 16);
  }

  if (value.endsWith("lh")) {
    // 1lh ≈ 1.2em = 19.2px (line height)
    const lhValue = parseFloat(value.replace("lh", ""));
    return Math.round(lhValue * 19.2);
  }

  if (value.endsWith("rlh")) {
    // 1rlh ≈ 1.2rem = 19.2px (root line height)
    const rlhValue = parseFloat(value.replace("rlh", ""));
    return Math.round(rlhValue * 19.2);
  }

  // Viewport units (approximate for mobile)
  if (value.endsWith("vw")) {
    // 1vw = 1% of viewport width (assume 375px mobile)
    const vwValue = parseFloat(value.replace("vw", ""));
    return Math.round((vwValue / 100) * 375);
  }

  if (value.endsWith("vh")) {
    // 1vh = 1% of viewport height (assume 667px mobile)
    const vhValue = parseFloat(value.replace("vh", ""));
    return Math.round((vhValue / 100) * 667);
  }

  if (value.endsWith("vi")) {
    // 1vi = 1% of inline viewport (width in LTR, assume 375px)
    const viValue = parseFloat(value.replace("vi", ""));
    return Math.round((viValue / 100) * 375);
  }

  if (value.endsWith("vb")) {
    // 1vb = 1% of block viewport (height, assume 667px)
    const vbValue = parseFloat(value.replace("vb", ""));
    return Math.round((vbValue / 100) * 667);
  }

  if (value.endsWith("vmin")) {
    // 1vmin = 1% of smaller viewport dimension (assume 375px)
    const vminValue = parseFloat(value.replace("vmin", ""));
    return Math.round((vminValue / 100) * 375);
  }

  if (value.endsWith("vmax")) {
    // 1vmax = 1% of larger viewport dimension (assume 667px)
    const vmaxValue = parseFloat(value.replace("vmax", ""));
    return Math.round((vmaxValue / 100) * 667);
  }

  // Container query units (fallback to viewport)
  if (value.endsWith("cqw")) {
    // 1cqw = 1% of container width (fallback to viewport width)
    const cqwValue = parseFloat(value.replace("cqw", ""));
    return Math.round((cqwValue / 100) * 375);
  }

  if (value.endsWith("cqh")) {
    // 1cqh = 1% of container height (fallback to viewport height)
    const cqhValue = parseFloat(value.replace("cqh", ""));
    return Math.round((cqhValue / 100) * 667);
  }

  if (value.endsWith("cqi")) {
    // 1cqi = 1% of container inline size (fallback to width)
    const cqiValue = parseFloat(value.replace("cqi", ""));
    return Math.round((cqiValue / 100) * 375);
  }

  if (value.endsWith("cqb")) {
    // 1cqb = 1% of container block size (fallback to height)
    const cqbValue = parseFloat(value.replace("cqb", ""));
    return Math.round((cqbValue / 100) * 667);
  }

  if (value.endsWith("cqmin")) {
    // 1cqmin = 1% of smaller container dimension
    const cqminValue = parseFloat(value.replace("cqmin", ""));
    return Math.round((cqminValue / 100) * 375);
  }

  if (value.endsWith("cqmax")) {
    // 1cqmax = 1% of larger container dimension
    const cqmaxValue = parseFloat(value.replace("cqmax", ""));
    return Math.round((cqmaxValue / 100) * 667);
  }

  // Handle unitless numbers (default to pixels in React Native)
  if (/^\d+(\.\d+)?$/.test(value)) {
    return parseFloat(value);
  }

  // Return as-is for other values (colors, keywords, etc.)
  return value;
}

/**
 * Parse values specifically for properties that require numbers (like border radius)
 * Supports ALL CSS length units and converts them to numbers
 */
function parseNumericValue(value: string): number {
  // Absolute length units
  if (value.endsWith("px")) {
    return parseInt(value.replace("px", ""), 10);
  }

  if (value.endsWith("pt")) {
    // 1pt = 1.33px
    const ptValue = parseFloat(value.replace("pt", ""));
    return Math.round(ptValue * 1.33);
  }

  if (value.endsWith("pc")) {
    // 1pc = 16px (12pt)
    const pcValue = parseFloat(value.replace("pc", ""));
    return Math.round(pcValue * 16);
  }

  if (value.endsWith("in")) {
    // 1in = 96px
    const inValue = parseFloat(value.replace("in", ""));
    return Math.round(inValue * 96);
  }

  if (value.endsWith("cm")) {
    // 1cm = 37.795px
    const cmValue = parseFloat(value.replace("cm", ""));
    return Math.round(cmValue * 37.795);
  }

  if (value.endsWith("mm")) {
    // 1mm = 3.7795px
    const mmValue = parseFloat(value.replace("mm", ""));
    return Math.round(mmValue * 3.7795);
  }

  if (value.endsWith("Q")) {
    // 1Q = 0.945px (quarter-millimeter)
    const qValue = parseFloat(value.replace("Q", ""));
    return Math.round(qValue * 0.945);
  }

  // Relative length units
  if (value.endsWith("em")) {
    // 1em = 16px (default font size)
    const emValue = parseFloat(value.replace("em", ""));
    return Math.round(emValue * 16);
  }

  if (value.endsWith("rem")) {
    // 1rem = 16px (root font size)
    const remValue = parseFloat(value.replace("rem", ""));
    return Math.round(remValue * 16);
  }

  if (value.endsWith("ex")) {
    // 1ex ≈ 0.5em = 8px (x-height)
    const exValue = parseFloat(value.replace("ex", ""));
    return Math.round(exValue * 8);
  }

  if (value.endsWith("ch")) {
    // 1ch ≈ 0.5em = 8px (character width)
    const chValue = parseFloat(value.replace("ch", ""));
    return Math.round(chValue * 8);
  }

  if (value.endsWith("cap")) {
    // 1cap ≈ 0.7em = 11.2px (cap height)
    const capValue = parseFloat(value.replace("cap", ""));
    return Math.round(capValue * 11.2);
  }

  if (value.endsWith("ic")) {
    // 1ic ≈ 1em = 16px (ideographic character width)
    const icValue = parseFloat(value.replace("ic", ""));
    return Math.round(icValue * 16);
  }

  if (value.endsWith("lh")) {
    // 1lh ≈ 1.2em = 19.2px (line height)
    const lhValue = parseFloat(value.replace("lh", ""));
    return Math.round(lhValue * 19.2);
  }

  if (value.endsWith("rlh")) {
    // 1rlh ≈ 1.2rem = 19.2px (root line height)
    const rlhValue = parseFloat(value.replace("rlh", ""));
    return Math.round(rlhValue * 19.2);
  }

  // Viewport units (approximate for mobile)
  if (value.endsWith("vw")) {
    // 1vw = 1% of viewport width (assume 375px mobile)
    const vwValue = parseFloat(value.replace("vw", ""));
    return Math.round((vwValue / 100) * 375);
  }

  if (value.endsWith("vh")) {
    // 1vh = 1% of viewport height (assume 667px mobile)
    const vhValue = parseFloat(value.replace("vh", ""));
    return Math.round((vhValue / 100) * 667);
  }

  if (value.endsWith("vi")) {
    // 1vi = 1% of inline viewport (width in LTR, assume 375px)
    const viValue = parseFloat(value.replace("vi", ""));
    return Math.round((viValue / 100) * 375);
  }

  if (value.endsWith("vb")) {
    // 1vb = 1% of block viewport (height, assume 667px)
    const vbValue = parseFloat(value.replace("vb", ""));
    return Math.round((vbValue / 100) * 667);
  }

  if (value.endsWith("vmin")) {
    // 1vmin = 1% of smaller viewport dimension (assume 375px)
    const vminValue = parseFloat(value.replace("vmin", ""));
    return Math.round((vminValue / 100) * 375);
  }

  if (value.endsWith("vmax")) {
    // 1vmax = 1% of larger viewport dimension (assume 667px)
    const vmaxValue = parseFloat(value.replace("vmax", ""));
    return Math.round((vmaxValue / 100) * 667);
  }

  // Container query units (fallback to viewport)
  if (value.endsWith("cqw")) {
    // 1cqw = 1% of container width (fallback to viewport width)
    const cqwValue = parseFloat(value.replace("cqw", ""));
    return Math.round((cqwValue / 100) * 375);
  }

  if (value.endsWith("cqh")) {
    // 1cqh = 1% of container height (fallback to viewport height)
    const cqhValue = parseFloat(value.replace("cqh", ""));
    return Math.round((cqhValue / 100) * 667);
  }

  if (value.endsWith("cqi")) {
    // 1cqi = 1% of container inline size (fallback to width)
    const cqiValue = parseFloat(value.replace("cqi", ""));
    return Math.round((cqiValue / 100) * 375);
  }

  if (value.endsWith("cqb")) {
    // 1cqb = 1% of container block size (fallback to height)
    const cqbValue = parseFloat(value.replace("cqb", ""));
    return Math.round((cqbValue / 100) * 667);
  }

  if (value.endsWith("cqmin")) {
    // 1cqmin = 1% of smaller container dimension
    const cqminValue = parseFloat(value.replace("cqmin", ""));
    return Math.round((cqminValue / 100) * 375);
  }

  if (value.endsWith("cqmax")) {
    // 1cqmax = 1% of larger container dimension
    const cqmaxValue = parseFloat(value.replace("cqmax", ""));
    return Math.round((cqmaxValue / 100) * 667);
  }

  // Handle unitless numbers
  if (/^\d+(\.\d+)?$/.test(value)) {
    return parseFloat(value);
  }

  // Return 0 for invalid values
  return 0;
}

/**
 * Alternative API for conditional classes
 *
 * @example
 * <View style={cx({
 *   'flex-1': true,
 *   'bg-blue-500': isActive,
 *   'bg-gray-500': !isActive,
 *   'p-4': true
 * })} />
 */
export function cx(classes: Record<string, boolean>): ViewStyle {
  const activeClasses = Object.entries(classes)
    .filter(([, isActive]) => isActive)
    .map(([className]) => className)
    .join(" ");

  return cs(activeClasses);
}

/**
 * Merge multiple class strings and style objects
 *
 * @example
 * <View style={merge("flex-1 bg-blue-500", "p-4", { customProp: 'value' })} />
 */
export function merge(
  ...args: (
    | string
    | ViewStyle
    | TextStyle
    | ImageStyle
    | (ViewStyle | TextStyle | ImageStyle)[]
  )[]
): ViewStyle {
  const allStyles: Style[] = [];

  for (const arg of args) {
    if (typeof arg === "string") {
      // Parse the class string to get styles array
      const classStyles = (classNames: string): Style[] => {
        if (!classNames || typeof classNames !== "string") {
          return [];
        }
        const cacheKey = `${classNames}_dark:${
          globalThemeContext.isDark || false
        }`;
        if (styleCache.has(cacheKey)) {
          return styleCache.get(cacheKey)!;
        }
        // Re-parse the classes to get array
        const classes = classNames.split(/\s+/).filter((c) => c.length > 0);
        const resolvedStyles: Style[] = [];
        for (const className of classes) {
          if (className.startsWith("dark:")) {
            if (globalThemeContext.isDark) {
              const darkClass = className.replace("dark:", "");
              const style = getStyleForClass(darkClass);
              if (style) resolvedStyles.push(style);
            }
          } else if (
            className.includes(":") &&
            !className.startsWith("dark:")
          ) {
            const [breakpoint, actualClass] = className.split(":");
            const { width } = require("react-native").Dimensions.get("window");
            if (shouldApplyBreakpoint(breakpoint, width)) {
              const style =
                handleSpecialCases(actualClass) ||
                getStyleForClass(actualClass);
              if (style) resolvedStyles.push(style);
            }
          } else {
            const style = getStyleForClass(className);
            if (style) resolvedStyles.push(style);
          }
        }
        styleCache.set(cacheKey, resolvedStyles);
        return resolvedStyles;
      };
      allStyles.push(...classStyles(arg));
    } else if (Array.isArray(arg)) {
      allStyles.push(...arg);
    } else if (arg && typeof arg === "object") {
      allStyles.push(arg);
    }
  }

  return StyleSheet.flatten(allStyles) as ViewStyle;
}

// Export the main function as default
export default cs;

// Add registerCustomClass as a property of the cs function
cs.registerCustomClass = registerCustomClass;
