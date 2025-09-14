/**
 * Cyclone Styles Configuration System
 * Allows customization of colors, spacing, breakpoints, and custom utilities
 */

import { ViewStyle, TextStyle, ImageStyle } from "react-native";

export type Style = ViewStyle | TextStyle | ImageStyle;

// Default theme configuration
export interface ThemeConfig {
  colors?: Record<string, string | Record<string, string>>;
  spacing?: Record<string, number>;
  fontSize?: Record<string, number>;
  borderRadius?: Record<string, number>;
  shadows?: Record<string, Style>;
  breakpoints?: Record<string, number>;
  extend?: {
    colors?: Record<string, string | Record<string, string>>;
    spacing?: Record<string, number>;
    fontSize?: Record<string, number>;
    borderRadius?: Record<string, number>;
    shadows?: Record<string, Style>;
    utilities?: Record<string, Style>;
  };
}

// Default Tailwind-like configuration
const defaultConfig: ThemeConfig = {
  colors: {
    // Basic colors
    transparent: "transparent",
    black: "#000000",
    white: "#ffffff",

    // Gray scale
    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
      950: "#030712",
    },

    // Brand colors
    red: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d",
      950: "#450a0a",
    },

    blue: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
      950: "#172554",
    },

    green: {
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d",
      950: "#052e16",
    },

    yellow: {
      50: "#fefce8",
      100: "#fef3c7",
      200: "#fde68a",
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#d97706",
      700: "#b45309",
      800: "#92400e",
      900: "#78350f",
      950: "#451a03",
    },

    purple: {
      50: "#faf5ff",
      100: "#f3e8ff",
      200: "#e9d5ff",
      300: "#d8b4fe",
      400: "#c084fc",
      500: "#a855f7",
      600: "#9333ea",
      700: "#7c3aed",
      800: "#6b21a8",
      900: "#581c87",
      950: "#3b0764",
    },

    pink: {
      50: "#fdf2f8",
      100: "#fce7f3",
      200: "#fbcfe8",
      300: "#f9a8d4",
      400: "#f472b6",
      500: "#ec4899",
      600: "#db2777",
      700: "#be185d",
      800: "#9d174d",
      900: "#831843",
      950: "#500724",
    },

    indigo: {
      50: "#eef2ff",
      100: "#e0e7ff",
      200: "#c7d2fe",
      300: "#a5b4fc",
      400: "#818cf8",
      500: "#6366f1",
      600: "#4f46e5",
      700: "#4338ca",
      800: "#3730a3",
      900: "#312e81",
      950: "#1e1b4b",
    },

    orange: {
      50: "#fff7ed",
      100: "#ffedd5",
      200: "#fed7aa",
      300: "#fdba74",
      400: "#fb923c",
      500: "#f97316",
      600: "#ea580c",
      700: "#c2410c",
      800: "#9a3412",
      900: "#7c2d12",
      950: "#431407",
    },

    teal: {
      50: "#f0fdfa",
      100: "#ccfbf1",
      200: "#99f6e4",
      300: "#5eead4",
      400: "#2dd4bf",
      500: "#14b8a6",
      600: "#0d9488",
      700: "#0f766e",
      800: "#115e59",
      900: "#134e4a",
      950: "#042f2e",
    },

    cyan: {
      50: "#ecfeff",
      100: "#cffafe",
      200: "#a5f3fc",
      300: "#67e8f9",
      400: "#22d3ee",
      500: "#06b6d4",
      600: "#0891b2",
      700: "#0e7490",
      800: "#155e75",
      900: "#164e63",
      950: "#083344",
    },
  },

  spacing: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 40,
    11: 44,
    12: 48,
    14: 56,
    16: 64,
    20: 80,
    24: 96,
    28: 112,
    32: 128,
    36: 144,
    40: 160,
    44: 176,
    48: 192,
    52: 208,
    56: 224,
    60: 240,
    64: 256,
    72: 288,
    80: 320,
    96: 384,
  },

  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    "2xl": 24,
    "3xl": 30,
    "4xl": 36,
    "5xl": 48,
    "6xl": 60,
    "7xl": 72,
    "8xl": 96,
    "9xl": 128,
  },

  borderRadius: {
    none: 0,
    sm: 2,
    DEFAULT: 4,
    md: 6,
    lg: 8,
    xl: 12,
    "2xl": 16,
    "3xl": 24,
    full: 9999,
  },

  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
  },
};

// Global configuration state
let globalConfig: ThemeConfig = defaultConfig;

/**
 * Configure cyclone-styles theme
 * This function allows you to customize colors, spacing, and other theme values
 */
export function configure(config: ThemeConfig): void {
  // Deep merge with default config
  globalConfig = deepMerge(defaultConfig, config);
}

/**
 * Get the current theme configuration
 */
export function getConfig(): ThemeConfig {
  return globalConfig;
}

/**
 * Reset configuration to defaults
 */
export function resetConfig(): void {
  globalConfig = defaultConfig;
}

/**
 * Get a theme value by path (e.g., 'colors.blue.500', 'spacing.4')
 */
export function getThemeValue(path: string): any {
  const keys = path.split(".");
  let value: any = globalConfig;

  for (const key of keys) {
    if (value && typeof value === "object" && key in value) {
      value = value[key];
    } else {
      return undefined;
    }
  }

  return value;
}

/**
 * Deep merge utility function
 */
function deepMerge(target: any, source: any): any {
  const result = { ...target };

  for (const key in source) {
    if (
      source[key] &&
      typeof source[key] === "object" &&
      !Array.isArray(source[key])
    ) {
      result[key] = deepMerge(result[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  }

  return result;
}

/**
 * Flatten nested color objects (e.g., {blue: {500: '#3b82f6'}} -> {'blue-500': '#3b82f6'})
 */
export function flattenColors(
  colors: Record<string, any>,
  prefix = ""
): Record<string, string> {
  const flattened: Record<string, string> = {};

  for (const [key, value] of Object.entries(colors)) {
    const newKey = prefix ? `${prefix}-${key}` : key;

    if (typeof value === "string") {
      flattened[newKey] = value;
    } else if (typeof value === "object" && value !== null) {
      Object.assign(flattened, flattenColors(value, newKey));
    }
  }

  return flattened;
}

/**
 * Get flattened colors for easy lookup
 */
export function getFlattenedColors(): Record<string, string> {
  const config = getConfig();
  let allColors = { ...config.colors };

  // Add extended colors
  if (config.extend?.colors) {
    allColors = { ...allColors, ...config.extend.colors };
  }

  return flattenColors(allColors);
}
