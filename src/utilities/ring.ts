/**
 * RING UTILITIES
 *
 * Ring utilities for focus rings and outline effects.
 * Implemented using React Native border properties for focus states.
 */

export const ringUtilities = {
  // Ring Width
  "ring-0": {
    borderWidth: 0,
  },
  "ring-1": {
    borderWidth: 1,
  },
  "ring-2": {
    borderWidth: 2,
  },
  "ring-4": {
    borderWidth: 4,
  },
  "ring-8": {
    borderWidth: 8,
  },
  ring: {
    borderWidth: 3, // Default ring width
  },

  // Ring Colors
  "ring-transparent": {
    borderColor: "transparent",
  },
  "ring-current": {
    borderColor: "currentColor",
  },
  "ring-black": {
    borderColor: "#000000",
  },
  "ring-white": {
    borderColor: "#FFFFFF",
  },

  // Ring Gray Colors
  "ring-gray-50": {
    borderColor: "#F9FAFB",
  },
  "ring-gray-100": {
    borderColor: "#F3F4F6",
  },
  "ring-gray-200": {
    borderColor: "#E5E7EB",
  },
  "ring-gray-300": {
    borderColor: "#D1D5DB",
  },
  "ring-gray-400": {
    borderColor: "#9CA3AF",
  },
  "ring-gray-500": {
    borderColor: "#6B7280",
  },
  "ring-gray-600": {
    borderColor: "#4B5563",
  },
  "ring-gray-700": {
    borderColor: "#374151",
  },
  "ring-gray-800": {
    borderColor: "#1F2937",
  },
  "ring-gray-900": {
    borderColor: "#111827",
  },

  // Ring Blue Colors (common for focus states)
  "ring-blue-50": {
    borderColor: "#EFF6FF",
  },
  "ring-blue-100": {
    borderColor: "#DBEAFE",
  },
  "ring-blue-200": {
    borderColor: "#BFDBFE",
  },
  "ring-blue-300": {
    borderColor: "#93C5FD",
  },
  "ring-blue-400": {
    borderColor: "#60A5FA",
  },
  "ring-blue-500": {
    borderColor: "#3B82F6",
  },
  "ring-blue-600": {
    borderColor: "#2563EB",
  },
  "ring-blue-700": {
    borderColor: "#1D4ED8",
  },
  "ring-blue-800": {
    borderColor: "#1E40AF",
  },
  "ring-blue-900": {
    borderColor: "#1E3A8A",
  },

  // Ring Red Colors
  "ring-red-50": {
    borderColor: "#FEF2F2",
  },
  "ring-red-100": {
    borderColor: "#FEE2E2",
  },
  "ring-red-200": {
    borderColor: "#FECACA",
  },
  "ring-red-300": {
    borderColor: "#FCA5A5",
  },
  "ring-red-400": {
    borderColor: "#F87171",
  },
  "ring-red-500": {
    borderColor: "#EF4444",
  },
  "ring-red-600": {
    borderColor: "#DC2626",
  },
  "ring-red-700": {
    borderColor: "#B91C1C",
  },
  "ring-red-800": {
    borderColor: "#991B1B",
  },
  "ring-red-900": {
    borderColor: "#7F1D1D",
  },

  // Ring Green Colors
  "ring-green-50": {
    borderColor: "#F0FDF4",
  },
  "ring-green-100": {
    borderColor: "#DCFCE7",
  },
  "ring-green-200": {
    borderColor: "#BBF7D0",
  },
  "ring-green-300": {
    borderColor: "#86EFAC",
  },
  "ring-green-400": {
    borderColor: "#4ADE80",
  },
  "ring-green-500": {
    borderColor: "#22C55E",
  },
  "ring-green-600": {
    borderColor: "#16A34A",
  },
  "ring-green-700": {
    borderColor: "#15803D",
  },
  "ring-green-800": {
    borderColor: "#166534",
  },
  "ring-green-900": {
    borderColor: "#14532D",
  },

  // Ring Opacity
  "ring-opacity-0": {
    /* Use with borderColor with 0% alpha */
  },
  "ring-opacity-5": {
    /* Use with borderColor with 5% alpha */
  },
  "ring-opacity-10": {
    /* Use with borderColor with 10% alpha */
  },
  "ring-opacity-20": {
    /* Use with borderColor with 20% alpha */
  },
  "ring-opacity-25": {
    /* Use with borderColor with 25% alpha */
  },
  "ring-opacity-30": {
    /* Use with borderColor with 30% alpha */
  },
  "ring-opacity-40": {
    /* Use with borderColor with 40% alpha */
  },
  "ring-opacity-50": {
    /* Use with borderColor with 50% alpha */
  },
  "ring-opacity-60": {
    /* Use with borderColor with 60% alpha */
  },
  "ring-opacity-70": {
    /* Use with borderColor with 70% alpha */
  },
  "ring-opacity-75": {
    /* Use with borderColor with 75% alpha */
  },
  "ring-opacity-80": {
    /* Use with borderColor with 80% alpha */
  },
  "ring-opacity-90": {
    /* Use with borderColor with 90% alpha */
  },
  "ring-opacity-95": {
    /* Use with borderColor with 95% alpha */
  },
  "ring-opacity-100": {
    /* Use with borderColor with 100% alpha */
  },

  // Ring Offset Width (simulated with nested Views)
  "ring-offset-0": {
    /* No ring offset */
  },
  "ring-offset-1": {
    /* 1px ring offset - use margin on outer View */
  },
  "ring-offset-2": {
    /* 2px ring offset - use margin on outer View */
  },
  "ring-offset-4": {
    /* 4px ring offset - use margin on outer View */
  },
  "ring-offset-8": {
    /* 8px ring offset - use margin on outer View */
  },

  // Ring Offset Colors
  "ring-offset-transparent": {
    /* Transparent ring offset background */
  },
  "ring-offset-white": {
    /* White ring offset background */
  },
  "ring-offset-black": {
    /* Black ring offset background */
  },
  "ring-offset-gray-50": {
    /* Gray-50 ring offset background */
  },
  "ring-offset-gray-100": {
    /* Gray-100 ring offset background */
  },

  // Focus Ring (for interactive elements)
  "focus-ring": {
    /* Apply ring on focus state */
    borderWidth: 2,
    borderColor: "#3B82F6",
  },
  "focus-ring-2": {
    /* Apply 2px ring on focus state */
    borderWidth: 2,
    borderColor: "#3B82F6",
  },
  "focus-ring-4": {
    /* Apply 4px ring on focus state */
    borderWidth: 4,
    borderColor: "#3B82F6",
  },

  // CamelCase versions
  ring0: {
    borderWidth: 0,
  },
  ring1: {
    borderWidth: 1,
  },
  ring2: {
    borderWidth: 2,
  },
  ring4: {
    borderWidth: 4,
  },
  ring8: {
    borderWidth: 8,
  },
  ringDefault: {
    borderWidth: 3,
  },

  ringTransparent: {
    borderColor: "transparent",
  },
  ringCurrent: {
    borderColor: "currentColor",
  },
  ringBlack: {
    borderColor: "#000000",
  },
  ringWhite: {
    borderColor: "#FFFFFF",
  },

  ringGray50: {
    borderColor: "#F9FAFB",
  },
  ringGray100: {
    borderColor: "#F3F4F6",
  },
  ringGray200: {
    borderColor: "#E5E7EB",
  },
  ringGray300: {
    borderColor: "#D1D5DB",
  },
  ringGray400: {
    borderColor: "#9CA3AF",
  },
  ringGray500: {
    borderColor: "#6B7280",
  },
  ringGray600: {
    borderColor: "#4B5563",
  },
  ringGray700: {
    borderColor: "#374151",
  },
  ringGray800: {
    borderColor: "#1F2937",
  },
  ringGray900: {
    borderColor: "#111827",
  },

  ringBlue50: {
    borderColor: "#EFF6FF",
  },
  ringBlue100: {
    borderColor: "#DBEAFE",
  },
  ringBlue200: {
    borderColor: "#BFDBFE",
  },
  ringBlue300: {
    borderColor: "#93C5FD",
  },
  ringBlue400: {
    borderColor: "#60A5FA",
  },
  ringBlue500: {
    borderColor: "#3B82F6",
  },
  ringBlue600: {
    borderColor: "#2563EB",
  },
  ringBlue700: {
    borderColor: "#1D4ED8",
  },
  ringBlue800: {
    borderColor: "#1E40AF",
  },
  ringBlue900: {
    borderColor: "#1E3A8A",
  },

  ringRed50: {
    borderColor: "#FEF2F2",
  },
  ringRed100: {
    borderColor: "#FEE2E2",
  },
  ringRed200: {
    borderColor: "#FECACA",
  },
  ringRed300: {
    borderColor: "#FCA5A5",
  },
  ringRed400: {
    borderColor: "#F87171",
  },
  ringRed500: {
    borderColor: "#EF4444",
  },
  ringRed600: {
    borderColor: "#DC2626",
  },
  ringRed700: {
    borderColor: "#B91C1C",
  },
  ringRed800: {
    borderColor: "#991B1B",
  },
  ringRed900: {
    borderColor: "#7F1D1D",
  },

  ringGreen50: {
    borderColor: "#F0FDF4",
  },
  ringGreen100: {
    borderColor: "#DCFCE7",
  },
  ringGreen200: {
    borderColor: "#BBF7D0",
  },
  ringGreen300: {
    borderColor: "#86EFAC",
  },
  ringGreen400: {
    borderColor: "#4ADE80",
  },
  ringGreen500: {
    borderColor: "#22C55E",
  },
  ringGreen600: {
    borderColor: "#16A34A",
  },
  ringGreen700: {
    borderColor: "#15803D",
  },
  ringGreen800: {
    borderColor: "#166534",
  },
  ringGreen900: {
    borderColor: "#14532D",
  },

  ringOpacity0: {
    /* Use with borderColor with 0% alpha */
  },
  ringOpacity5: {
    /* Use with borderColor with 5% alpha */
  },
  ringOpacity10: {
    /* Use with borderColor with 10% alpha */
  },
  ringOpacity20: {
    /* Use with borderColor with 20% alpha */
  },
  ringOpacity25: {
    /* Use with borderColor with 25% alpha */
  },
  ringOpacity30: {
    /* Use with borderColor with 30% alpha */
  },
  ringOpacity40: {
    /* Use with borderColor with 40% alpha */
  },
  ringOpacity50: {
    /* Use with borderColor with 50% alpha */
  },
  ringOpacity60: {
    /* Use with borderColor with 60% alpha */
  },
  ringOpacity70: {
    /* Use with borderColor with 70% alpha */
  },
  ringOpacity75: {
    /* Use with borderColor with 75% alpha */
  },
  ringOpacity80: {
    /* Use with borderColor with 80% alpha */
  },
  ringOpacity90: {
    /* Use with borderColor with 90% alpha */
  },
  ringOpacity95: {
    /* Use with borderColor with 95% alpha */
  },
  ringOpacity100: {
    /* Use with borderColor with 100% alpha */
  },

  ringOffset0: {
    /* No ring offset */
  },
  ringOffset1: {
    /* 1px ring offset - use margin on outer View */
  },
  ringOffset2: {
    /* 2px ring offset - use margin on outer View */
  },
  ringOffset4: {
    /* 4px ring offset - use margin on outer View */
  },
  ringOffset8: {
    /* 8px ring offset - use margin on outer View */
  },

  ringOffsetTransparent: {
    /* Transparent ring offset background */
  },
  ringOffsetWhite: {
    /* White ring offset background */
  },
  ringOffsetBlack: {
    /* Black ring offset background */
  },
  ringOffsetGray50: {
    /* Gray-50 ring offset background */
  },
  ringOffsetGray100: {
    /* Gray-100 ring offset background */
  },

  focusRing: {
    /* Apply ring on focus state */
    borderWidth: 2,
    borderColor: "#3B82F6",
  },
  focusRing2: {
    /* Apply 2px ring on focus state */
    borderWidth: 2,
    borderColor: "#3B82F6",
  },
  focusRing4: {
    /* Apply 4px ring on focus state */
    borderWidth: 4,
    borderColor: "#3B82F6",
  },
};
