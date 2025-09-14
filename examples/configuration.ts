/**
 * Cyclone Styles Configuration Example
 * This shows how to customize colors, spacing, and add custom utilities
 */

import { configure, addUtilities, setupCycloneStyles } from "cyclone-styles";

// Option 1: Setup with custom configuration (like NativeWind tailwind.config.js)
setupCycloneStyles({
  colors: {
    // Override default colors
    primary: "#007AFF",
    secondary: "#5856D6",

    // Add custom color shades
    brand: {
      50: "#f0f9ff",
      100: "#e0f2fe",
      200: "#bae6fd",
      300: "#7dd3fc",
      400: "#38bdf8",
      500: "#0ea5e9",
      600: "#0284c7",
      700: "#0369a1",
      800: "#075985",
      900: "#0c4a6e",
    },
  },

  spacing: {
    // Add custom spacing values
    "18": 72,
    "88": 352,
    "128": 512,
  },

  fontSize: {
    // Add custom font sizes
    tiny: 10,
    huge: 80,
  },

  extend: {
    colors: {
      // Extend with additional colors without overriding defaults
      success: "#10B981",
      warning: "#F59E0B",
      error: "#EF4444",
    },

    spacing: {
      "13": 52,
      "15": 60,
    },

    utilities: {
      // Add completely custom utilities
      "gradient-bg": {
        backgroundColor: "#007AFF",
        // Note: gradients aren't supported in RN, but you can add fallbacks
      },

      "custom-shadow": {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 8,
      },
    },
  },
});

// Option 2: Add utilities after setup
addUtilities({
  "my-custom-style": {
    backgroundColor: "#FF6B6B",
    padding: 16,
    borderRadius: 8,
  },

  "special-text": {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2D3748",
  },
});

// Now you can use these in your components:
// <View style={cs("bg-brand-500 p-18 rounded-lg")} />
// <Text style={cs("text-huge text-success my-custom-style")} />
// <View style={cs("custom-shadow")} />

export default {
  setupCycloneStyles,
  configure,
  addUtilities,
};
