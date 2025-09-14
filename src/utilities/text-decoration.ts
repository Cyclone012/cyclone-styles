/**
 * TEXT DECORATION UTILITIES
 *
 * Extended text decoration utilities including colors and advanced styling.
 * Builds upon the existing typography utilities with additional decoration options.
 */

export const textDecorationUtilities = {
  // Text Decoration Colors
  "decoration-transparent": {
    textDecorationColor: "transparent",
  },
  "decoration-current": {
    textDecorationColor: "currentColor",
  },
  "decoration-black": {
    textDecorationColor: "#000000",
  },
  "decoration-white": {
    textDecorationColor: "#FFFFFF",
  },

  // Decoration Gray Colors
  "decoration-gray-50": {
    textDecorationColor: "#F9FAFB",
  },
  "decoration-gray-100": {
    textDecorationColor: "#F3F4F6",
  },
  "decoration-gray-200": {
    textDecorationColor: "#E5E7EB",
  },
  "decoration-gray-300": {
    textDecorationColor: "#D1D5DB",
  },
  "decoration-gray-400": {
    textDecorationColor: "#9CA3AF",
  },
  "decoration-gray-500": {
    textDecorationColor: "#6B7280",
  },
  "decoration-gray-600": {
    textDecorationColor: "#4B5563",
  },
  "decoration-gray-700": {
    textDecorationColor: "#374151",
  },
  "decoration-gray-800": {
    textDecorationColor: "#1F2937",
  },
  "decoration-gray-900": {
    textDecorationColor: "#111827",
  },

  // Decoration Blue Colors
  "decoration-blue-50": {
    textDecorationColor: "#EFF6FF",
  },
  "decoration-blue-100": {
    textDecorationColor: "#DBEAFE",
  },
  "decoration-blue-200": {
    textDecorationColor: "#BFDBFE",
  },
  "decoration-blue-300": {
    textDecorationColor: "#93C5FD",
  },
  "decoration-blue-400": {
    textDecorationColor: "#60A5FA",
  },
  "decoration-blue-500": {
    textDecorationColor: "#3B82F6",
  },
  "decoration-blue-600": {
    textDecorationColor: "#2563EB",
  },
  "decoration-blue-700": {
    textDecorationColor: "#1D4ED8",
  },
  "decoration-blue-800": {
    textDecorationColor: "#1E40AF",
  },
  "decoration-blue-900": {
    textDecorationColor: "#1E3A8A",
  },

  // Decoration Red Colors
  "decoration-red-50": {
    textDecorationColor: "#FEF2F2",
  },
  "decoration-red-100": {
    textDecorationColor: "#FEE2E2",
  },
  "decoration-red-200": {
    textDecorationColor: "#FECACA",
  },
  "decoration-red-300": {
    textDecorationColor: "#FCA5A5",
  },
  "decoration-red-400": {
    textDecorationColor: "#F87171",
  },
  "decoration-red-500": {
    textDecorationColor: "#EF4444",
  },
  "decoration-red-600": {
    textDecorationColor: "#DC2626",
  },
  "decoration-red-700": {
    textDecorationColor: "#B91C1C",
  },
  "decoration-red-800": {
    textDecorationColor: "#991B1B",
  },
  "decoration-red-900": {
    textDecorationColor: "#7F1D1D",
  },

  // Decoration Green Colors
  "decoration-green-50": {
    textDecorationColor: "#F0FDF4",
  },
  "decoration-green-100": {
    textDecorationColor: "#DCFCE7",
  },
  "decoration-green-200": {
    textDecorationColor: "#BBF7D0",
  },
  "decoration-green-300": {
    textDecorationColor: "#86EFAC",
  },
  "decoration-green-400": {
    textDecorationColor: "#4ADE80",
  },
  "decoration-green-500": {
    textDecorationColor: "#22C55E",
  },
  "decoration-green-600": {
    textDecorationColor: "#16A34A",
  },
  "decoration-green-700": {
    textDecorationColor: "#15803D",
  },
  "decoration-green-800": {
    textDecorationColor: "#166534",
  },
  "decoration-green-900": {
    textDecorationColor: "#14532D",
  },

  // Text Decoration Style
  "decoration-solid": {
    textDecorationStyle: "solid" as const,
  },
  "decoration-double": {
    textDecorationStyle: "double" as const,
  },
  "decoration-dotted": {
    textDecorationStyle: "dotted" as const,
  },
  "decoration-dashed": {
    textDecorationStyle: "dashed" as const,
  },
  "decoration-wavy": {
    /* Not supported in React Native */
  },

  // Text Decoration Thickness
  "decoration-auto": {
    /* Default decoration thickness */
  },
  "decoration-from-font": {
    /* Use font's decoration thickness */
  },
  "decoration-0": {
    /* No decoration thickness */
  },
  "decoration-1": {
    /* 1px decoration thickness */
  },
  "decoration-2": {
    /* 2px decoration thickness */
  },
  "decoration-4": {
    /* 4px decoration thickness */
  },
  "decoration-8": {
    /* 8px decoration thickness */
  },

  // Text Underline Offset
  "underline-offset-auto": {
    /* Auto underline offset */
  },
  "underline-offset-0": {
    /* No underline offset */
  },
  "underline-offset-1": {
    /* 1px underline offset */
  },
  "underline-offset-2": {
    /* 2px underline offset */
  },
  "underline-offset-4": {
    /* 4px underline offset */
  },
  "underline-offset-8": {
    /* 8px underline offset */
  },

  // Text Caret Color (for inputs)
  "caret-transparent": {
    /* Use with TextInput selectionColor: 'transparent' */
  },
  "caret-current": {
    /* Use with TextInput selectionColor: 'currentColor' */
  },
  "caret-black": {
    /* Use with TextInput selectionColor: '#000000' */
  },
  "caret-white": {
    /* Use with TextInput selectionColor: '#FFFFFF' */
  },
  "caret-gray-500": {
    /* Use with TextInput selectionColor: '#6B7280' */
  },
  "caret-blue-500": {
    /* Use with TextInput selectionColor: '#3B82F6' */
  },
  "caret-red-500": {
    /* Use with TextInput selectionColor: '#EF4444' */
  },
  "caret-green-500": {
    /* Use with TextInput selectionColor: '#22C55E' */
  },

  // CamelCase versions
  decorationTransparent: {
    textDecorationColor: "transparent",
  },
  decorationCurrent: {
    textDecorationColor: "currentColor",
  },
  decorationBlack: {
    textDecorationColor: "#000000",
  },
  decorationWhite: {
    textDecorationColor: "#FFFFFF",
  },

  decorationGray50: {
    textDecorationColor: "#F9FAFB",
  },
  decorationGray100: {
    textDecorationColor: "#F3F4F6",
  },
  decorationGray200: {
    textDecorationColor: "#E5E7EB",
  },
  decorationGray300: {
    textDecorationColor: "#D1D5DB",
  },
  decorationGray400: {
    textDecorationColor: "#9CA3AF",
  },
  decorationGray500: {
    textDecorationColor: "#6B7280",
  },
  decorationGray600: {
    textDecorationColor: "#4B5563",
  },
  decorationGray700: {
    textDecorationColor: "#374151",
  },
  decorationGray800: {
    textDecorationColor: "#1F2937",
  },
  decorationGray900: {
    textDecorationColor: "#111827",
  },

  decorationBlue50: {
    textDecorationColor: "#EFF6FF",
  },
  decorationBlue100: {
    textDecorationColor: "#DBEAFE",
  },
  decorationBlue200: {
    textDecorationColor: "#BFDBFE",
  },
  decorationBlue300: {
    textDecorationColor: "#93C5FD",
  },
  decorationBlue400: {
    textDecorationColor: "#60A5FA",
  },
  decorationBlue500: {
    textDecorationColor: "#3B82F6",
  },
  decorationBlue600: {
    textDecorationColor: "#2563EB",
  },
  decorationBlue700: {
    textDecorationColor: "#1D4ED8",
  },
  decorationBlue800: {
    textDecorationColor: "#1E40AF",
  },
  decorationBlue900: {
    textDecorationColor: "#1E3A8A",
  },

  decorationRed50: {
    textDecorationColor: "#FEF2F2",
  },
  decorationRed100: {
    textDecorationColor: "#FEE2E2",
  },
  decorationRed200: {
    textDecorationColor: "#FECACA",
  },
  decorationRed300: {
    textDecorationColor: "#FCA5A5",
  },
  decorationRed400: {
    textDecorationColor: "#F87171",
  },
  decorationRed500: {
    textDecorationColor: "#EF4444",
  },
  decorationRed600: {
    textDecorationColor: "#DC2626",
  },
  decorationRed700: {
    textDecorationColor: "#B91C1C",
  },
  decorationRed800: {
    textDecorationColor: "#991B1B",
  },
  decorationRed900: {
    textDecorationColor: "#7F1D1D",
  },

  decorationGreen50: {
    textDecorationColor: "#F0FDF4",
  },
  decorationGreen100: {
    textDecorationColor: "#DCFCE7",
  },
  decorationGreen200: {
    textDecorationColor: "#BBF7D0",
  },
  decorationGreen300: {
    textDecorationColor: "#86EFAC",
  },
  decorationGreen400: {
    textDecorationColor: "#4ADE80",
  },
  decorationGreen500: {
    textDecorationColor: "#22C55E",
  },
  decorationGreen600: {
    textDecorationColor: "#16A34A",
  },
  decorationGreen700: {
    textDecorationColor: "#15803D",
  },
  decorationGreen800: {
    textDecorationColor: "#166534",
  },
  decorationGreen900: {
    textDecorationColor: "#14532D",
  },

  decorationSolid: {
    textDecorationStyle: "solid" as const,
  },
  decorationDouble: {
    textDecorationStyle: "double" as const,
  },
  decorationDotted: {
    textDecorationStyle: "dotted" as const,
  },
  decorationDashed: {
    textDecorationStyle: "dashed" as const,
  },
  decorationWavy: {
    /* Not supported in React Native */
  },

  decorationAuto: {
    /* Default decoration thickness */
  },
  decorationFromFont: {
    /* Use font's decoration thickness */
  },
  decoration0: {
    /* No decoration thickness */
  },
  decoration1: {
    /* 1px decoration thickness */
  },
  decoration2: {
    /* 2px decoration thickness */
  },
  decoration4: {
    /* 4px decoration thickness */
  },
  decoration8: {
    /* 8px decoration thickness */
  },

  underlineOffsetAuto: {
    /* Auto underline offset */
  },
  underlineOffset0: {
    /* No underline offset */
  },
  underlineOffset1: {
    /* 1px underline offset */
  },
  underlineOffset2: {
    /* 2px underline offset */
  },
  underlineOffset4: {
    /* 4px underline offset */
  },
  underlineOffset8: {
    /* 8px underline offset */
  },

  caretTransparent: {
    /* Use with TextInput selectionColor: 'transparent' */
  },
  caretCurrent: {
    /* Use with TextInput selectionColor: 'currentColor' */
  },
  caretBlack: {
    /* Use with TextInput selectionColor: '#000000' */
  },
  caretWhite: {
    /* Use with TextInput selectionColor: '#FFFFFF' */
  },
  caretGray500: {
    /* Use with TextInput selectionColor: '#6B7280' */
  },
  caretBlue500: {
    /* Use with TextInput selectionColor: '#3B82F6' */
  },
  caretRed500: {
    /* Use with TextInput selectionColor: '#EF4444' */
  },
  caretGreen500: {
    /* Use with TextInput selectionColor: '#22C55E' */
  },
};
