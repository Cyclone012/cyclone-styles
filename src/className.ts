/**
 * NativeWind-style className prop transformer
 * Automatically converts className to style with built-in styling engine
 * Works independently without requiring cs() import
 */

import React from "react";
import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from "react-native";
import { styles } from "./styles";
import { getConfig, getFlattenedColors } from "./config";

// Type for any React Native style
type Style = ViewStyle | TextStyle | ImageStyle;

// Cache for converted className styles
const classNameStyleCache = new Map<string, Style>();

// Global theme state (shared with cs function)
let globalThemeState = { isDark: false };

/**
 * Convert className string to React Native style
 * This is a simplified version of cs() specifically for className prop
 */
function convertClassNameToStyle(className: string): Style {
  if (!className || typeof className !== "string") {
    return {};
  }

  // Check cache first
  const cacheKey = `${className}_dark:${globalThemeState.isDark}`;
  if (classNameStyleCache.has(cacheKey)) {
    return classNameStyleCache.get(cacheKey)!;
  }

  // Split class names and process each one
  const classes = className.split(/\s+/).filter((c) => c.length > 0);
  const resolvedStyles: Style[] = [];

  for (const cls of classes) {
    // Handle dark mode prefixes
    const isDarkClass = cls.startsWith("dark:");
    if (isDarkClass && !globalThemeState.isDark) {
      continue; // Skip dark classes when not in dark mode
    }
    if (isDarkClass && globalThemeState.isDark) {
      // Process without dark: prefix
      const classWithoutDark = cls.replace("dark:", "");
      const style = getStyleForClassName(classWithoutDark);
      if (style) resolvedStyles.push(style);
      continue;
    }

    // Handle regular classes
    const style = getStyleForClassName(cls);
    if (style) {
      resolvedStyles.push(style);
    }
  }

  // Flatten styles
  const flattenedStyle = StyleSheet.flatten(resolvedStyles);

  // Cache result
  classNameStyleCache.set(cacheKey, flattenedStyle);

  return flattenedStyle;
}

/**
 * Get style for a single class name
 */
function getStyleForClassName(className: string): Style | null {
  // Handle arbitrary values (e.g., h-[32], bg-[#ff0000])
  if (className.includes("[") && className.includes("]")) {
    return handleArbitraryValue(className);
  }

  // Check built-in styles first
  if (styles[className as keyof typeof styles]) {
    return styles[className as keyof typeof styles] as Style;
  }

  // Convert kebab-case to camelCase for style lookup
  const styleKey = convertToStyleKey(className);
  if (styles[styleKey as keyof typeof styles]) {
    return styles[styleKey as keyof typeof styles] as Style;
  }

  // Handle special color cases
  return handleSpecialColorCase(className);
}

/**
 * Handle arbitrary values like h-[32], bg-[#ff0000], etc.
 */
function handleArbitraryValue(className: string): Style | null {
  const match = className.match(/^(.+?)-\[(.+?)\]$/);
  if (!match) return null;

  const [, prefix, value] = match;

  // Handle different types of arbitrary values
  switch (prefix) {
    case "w":
      return { width: parseArbitraryValue(value) };
    case "h":
      return { height: parseArbitraryValue(value) };
    case "p":
      return { padding: parseArbitraryValue(value) };
    case "m":
      return { margin: parseArbitraryValue(value) };
    case "bg":
      return { backgroundColor: value };
    case "text":
      if (value.startsWith("#") || value.startsWith("rgb")) {
        return { color: value };
      }
      return { fontSize: parseArbitraryValue(value) };
    // Add more as needed
    default:
      return null;
  }
}

/**
 * Parse arbitrary value to number (defaults to pixels)
 */
function parseArbitraryValue(value: string): number {
  const num = parseInt(value, 10);
  return isNaN(num) ? 0 : num;
}

/**
 * Convert kebab-case to camelCase
 */
function convertToStyleKey(className: string): string {
  return className.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

/**
 * Handle special color cases like text-blue-500, bg-red-400
 */
function handleSpecialColorCase(className: string): Style | null {
  const colors = getFlattenedColors();

  // Handle text colors (text-color-shade)
  if (className.startsWith("text-")) {
    const colorName = className.replace("text-", "");
    if (colors[colorName]) {
      return { color: colors[colorName] };
    }
  }

  // Handle background colors (bg-color-shade)
  if (className.startsWith("bg-")) {
    const colorName = className.replace("bg-", "");
    if (colors[colorName]) {
      return { backgroundColor: colors[colorName] };
    }
  }

  // Handle border colors (border-color-shade)
  if (className.startsWith("border-") && !className.match(/border-\d/)) {
    const colorName = className.replace("border-", "");
    if (colors[colorName]) {
      return { borderColor: colors[colorName] };
    }
  }

  return null;
}

/**
 * Update theme state (called by global theme system)
 */
function updateClassNameTheme(isDark: boolean) {
  globalThemeState.isDark = isDark;
  classNameStyleCache.clear(); // Clear cache when theme changes
}

// Store original createElement to wrap it
const originalCreateElement = React.createElement;

// Types for className support
type ClassNameProps = {
  className?: string;
  style?: any;
};

// Components that support className transformation
const SUPPORTED_COMPONENTS = new Set([
  // React Native Core Components
  "View",
  "Text",
  "Image",
  "ScrollView",
  "TouchableOpacity",
  "TouchableHighlight",
  "TouchableWithoutFeedback",
  "Pressable",
  "SafeAreaView",
  "FlatList",
  "SectionList",
  "TextInput",
  "Switch",
  "Slider",
  "ActivityIndicator",
  "Modal",
  "StatusBar",
  "KeyboardAvoidingView",
  "RefreshControl",
  "ImageBackground",

  // Expo Router Components (though these are usually function components)
  "Stack",
  "Slot",
  "Tabs",
  "Drawer",
  "Link",

  // Common custom component names
  "Screen",
  "Container",
  "Card",
  "Button",
  "Header",
  "Footer",
]);

// Transform className to style
function transformClassNameToStyle(props: any) {
  if (!props || !props.className) {
    return props;
  }

  const { className, style, ...restProps } = props;

  // Convert className to style using our standalone converter
  const classNameStyle = convertClassNameToStyle(className);

  // Merge className style with existing style
  const mergedStyle = style
    ? Array.isArray(style)
      ? [classNameStyle, ...style]
      : [classNameStyle, style]
    : classNameStyle;

  return {
    ...restProps,
    style: mergedStyle,
  };
}

// Enhanced createElement that supports className
function createElementWithClassName(
  type: any,
  props: ClassNameProps | null,
  ...children: React.ReactNode[]
) {
  // Transform className if present
  if (props && props.className) {
    // Check if it's a supported React Native component
    const isSupportedStringComponent =
      typeof type === "string" && SUPPORTED_COMPONENTS.has(type);

    // Check if it's a function component (includes Expo Router, custom components)
    const isFunctionComponent = typeof type === "function";

    // Check if it's a component that likely accepts style prop (heuristic)
    const isStyleComponent =
      typeof type === "object" && type && (type.displayName || type.name);

    if (isSupportedStringComponent || isFunctionComponent || isStyleComponent) {
      const transformedProps = transformClassNameToStyle(props);
      return originalCreateElement(type, transformedProps, ...children);
    }
  }

  // Default behavior for everything else
  return originalCreateElement(type, props, ...children);
}

// Global className transformer setup
export function setupClassNameTransformer() {
  // Only setup once
  if ((React as any).__cycloneClassNameSetup) {
    return;
  }

  // Replace React.createElement globally
  (React as any).createElement = createElementWithClassName;
  (React as any).__cycloneClassNameSetup = true;

  // Also setup for JSX runtime if available
  try {
    const jsxRuntime = require("react/jsx-runtime");
    if (jsxRuntime && jsxRuntime.jsx) {
      const originalJsx = jsxRuntime.jsx;
      jsxRuntime.jsx = (type: any, props: any, key?: any) => {
        // Transform className for any component that has it
        if (props && props.className) {
          const isSupportedStringComponent =
            typeof type === "string" && SUPPORTED_COMPONENTS.has(type);
          const isFunctionComponent = typeof type === "function";
          const isStyleComponent =
            typeof type === "object" && type && (type.displayName || type.name);

          if (
            isSupportedStringComponent ||
            isFunctionComponent ||
            isStyleComponent
          ) {
            const transformedProps = transformClassNameToStyle(props);
            return originalJsx(type, transformedProps, key);
          }
        }
        return originalJsx(type, props, key);
      };
    }

    // Also handle jsxs for fragments and multiple children
    if (jsxRuntime && jsxRuntime.jsxs) {
      const originalJsxs = jsxRuntime.jsxs;
      jsxRuntime.jsxs = (type: any, props: any, key?: any) => {
        // Transform className for any component that has it
        if (props && props.className) {
          const isSupportedStringComponent =
            typeof type === "string" && SUPPORTED_COMPONENTS.has(type);
          const isFunctionComponent = typeof type === "function";
          const isStyleComponent =
            typeof type === "object" && type && (type.displayName || type.name);

          if (
            isSupportedStringComponent ||
            isFunctionComponent ||
            isStyleComponent
          ) {
            const transformedProps = transformClassNameToStyle(props);
            return originalJsxs(type, transformedProps, key);
          }
        }
        return originalJsxs(type, props, key);
      };
    }
  } catch (error) {
    // JSX runtime might not be available, that's okay
  }
}

// Reset function for testing
export function resetClassNameTransformer() {
  (React as any).createElement = originalCreateElement;
  (React as any).__cycloneClassNameSetup = false;
}

// Type declarations for className support
declare module "react-native" {
  interface ViewProps {
    className?: string;
  }

  interface TextProps {
    className?: string;
  }

  interface ImageProps {
    className?: string;
  }

  interface ScrollViewProps {
    className?: string;
  }

  interface TouchableOpacityProps {
    className?: string;
  }

  interface TouchableHighlightProps {
    className?: string;
  }

  interface TouchableWithoutFeedbackProps {
    className?: string;
  }

  interface PressableProps {
    className?: string;
  }

  interface SafeAreaViewProps {
    className?: string;
  }

  interface FlatListProps<ItemT> {
    className?: string;
  }

  interface SectionListProps<ItemT, SectionT> {
    className?: string;
  }

  interface TextInputProps {
    className?: string;
  }

  interface SwitchProps {
    className?: string;
  }

  interface SliderProps {
    className?: string;
  }

  interface ActivityIndicatorProps {
    className?: string;
  }

  interface StatusBarProps {
    className?: string;
  }

  interface KeyboardAvoidingViewProps {
    className?: string;
  }

  interface RefreshControlProps {
    className?: string;
  }

  interface ImageBackgroundProps {
    className?: string;
  }
}

export { convertClassNameToStyle, updateClassNameTheme };

export default {
  setupClassNameTransformer,
  resetClassNameTransformer,
  convertClassNameToStyle,
  updateClassNameTheme,
};
