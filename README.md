# 🌪️ CycloneWind

[![npm version](https://img.shields.io/npm/v/cyclone-cs-wind.svg?style=flat-square)](https://www.npmjs.com/package/cyclone-cs-wind)
[![npm downloads](https://img.shields.io/npm/dm/cyclone-cs-wind.svg?style=flat-square)](https://www.npmjs.com/package/cyclone-cs-wind)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg?style=flat-square)](https://www.typescriptlang.org/)
[![React Native](https://img.shields.io/badge/React%20Native-Ready-green.svg?style=flat-square)](https://reactnative.dev/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

**Complete Tailwind CSS utilities for React Native with powerful `cs()` function - no Metro setup required!**

A clean, lightweight library that brings all Tailwind CSS utilities to React Native through an intuitive `cs()` function approach. Simple, reliable, and zero configuration required.

## ✨ Features

- 🎯 **Powerful cs() Function** - Use Tailwind classes directly with `style={cs("...")}`
- 🎨 **All Tailwind Utilities** - Complete implementation of Tailwind CSS utilities
- 🌓 **Built-in Dark Mode** - Automatic theme support with `dark:` prefix
- 📱 **Responsive Design** - Mobile-first breakpoints (`sm:`, `md:`, `lg:`, etc.)
- 🔧 **Zero Setup** - No Metro plugins or Babel configuration needed
- ⚡ **TypeScript Ready** - Full type safety and IntelliSense
- 🎨 **Custom Styles** - Register and use custom styles seamlessly
- 🌟 **React Native Utilities** - Platform detection, responsive helpers, device info

## 🚀 Quick Start

### 1. Install

```bash
npm install cyclone-cs-wind
```

### 2. Basic Usage

```tsx
import React from "react";
import { View, Text } from "react-native";
import { cs } from "cyclone-cs-wind";

export default function App() {
  return (
    <View style={cs("flex-1 bg-white items-center justify-center")}>
      <Text style={cs("text-2xl font-bold text-blue-600")}>
        Hello CycloneWind!
      </Text>
    </View>
  );
}
```

### 3. Add Theme Support (Optional)

```tsx
import React from "react";
import { View, Text } from "react-native";
import { cs, ThemeProvider } from "cyclone-cs-wind";

export default function App() {
  return (
    <ThemeProvider>
      <YourAppContent />
    </ThemeProvider>
  );
}

function YourAppContent() {
  return (
    <View style={cs("flex-1 bg-white dark:bg-gray-900")}>
      <Text style={cs("text-black dark:text-white")}>
        Supports automatic dark mode!
      </Text>
    </View>
  );
}
```

## 📖 Examples

### Basic Usage

```tsx
import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { cs } from "cyclone-cs-wind";

export default function MyScreen() {
  return (
    <View style={cs("flex-1 bg-white dark:bg-gray-900")}>
      <ScrollView style={cs("flex-1")} contentContainerStyle={cs("p-6")}>
        <Text
          style={cs("text-2xl font-bold text-gray-900 dark:text-white mb-4")}
        >
          Welcome to CycloneWind! 🌪️
        </Text>

        <View style={cs("bg-blue-500 p-4 rounded-lg mb-4")}>
          <Text style={cs("text-white text-center font-semibold")}>
            Using the powerful cs() function!
          </Text>
        </View>

        <Pressable style={cs("bg-gray-200 dark:bg-gray-700 p-3 rounded-lg")}>
          <Text style={cs("text-gray-900 dark:text-white text-center")}>
            Press me!
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
```

## 🎨 Dynamic Styling

**The cs() function supports dynamic and conditional styling:**

```tsx
import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { cs } from "cyclone-cs-wind";

function DynamicExample() {
  const [isActive, setIsActive] = useState(false);
  const [size, setSize] = useState("medium");

  return (
    <View style={cs("p-4")}>
      <Pressable
        style={cs([
          "p-4 rounded-lg transition-colors",
          isActive ? "bg-blue-500" : "bg-gray-200",
          size === "large" ? "px-8 py-6" : "px-4 py-3",
        ])}
        onPress={() => setIsActive(!isActive)}
      >
        <Text style={cs(isActive ? "text-white" : "text-gray-900")}>
          {isActive ? "Active" : "Inactive"}
        </Text>
      </Pressable>
    </View>
  );
}
```

## 🌓 Theme Support

**Built-in dark mode with theme switching:**

```tsx
import React from "react";
import { View, Text, Pressable } from "react-native";
import { cs, useTheme } from "cyclone-cs-wind";

function ThemeExample() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <View style={cs("p-6 bg-white dark:bg-gray-900")}>
      <Text style={cs("text-lg mb-4 text-gray-900 dark:text-white")}>
        Current theme: {isDark ? "Dark" : "Light"}
      </Text>

      <Pressable
        style={cs("bg-blue-500 dark:bg-blue-600 px-4 py-2 rounded")}
        onPress={toggleTheme}
      >
        <Text style={cs("text-white text-center")}>Toggle Theme</Text>
      </Pressable>
    </View>
  );
}
```

## 🎨 Custom Styles

**Register your own styles to use with the cs() function:**

```tsx
// Step 1: Register your custom styles (do this once, typically at app startup)
import { cs } from "cyclone-cs-wind";

cs.registerCustomClass("primary-button", {
  backgroundColor: "#007AFF",
  padding: 16,
  borderRadius: 8,
  alignItems: "center",
  justifyContent: "center",
});

cs.registerCustomClass("heading-text", {
  fontSize: 24,
  fontWeight: "bold",
  color: "#333",
});

// Step 2: Use them with cs() just like any other utility!
export default function MyComponent() {
  return (
    <View style={cs("flex-1 p-4")}>
      <Text style={cs("heading-text")}>Custom Heading Style!</Text>
      <View style={cs("primary-button")}>
        <Text style={cs("text-white")}>Custom Button Style!</Text>
      </View>
    </View>
  );
}
```

## 📱 Responsive Design

**Use responsive breakpoints with the cs() function:**

```tsx
<View style={cs("p-2 sm:p-4 md:p-6 lg:p-8")}>
  <Text style={cs("text-sm sm:text-base md:text-lg lg:text-xl")}>
    Responsive text that adapts to screen size
  </Text>
</View>
```

## 🔧 Advanced Usage

### Combining Multiple Classes

```tsx
// Combine multiple utility classes
<View
  style={cs([
    "flex-1 bg-white dark:bg-gray-900",
    "p-4 m-2",
    "border border-gray-200 dark:border-gray-700",
    "rounded-lg shadow-md",
  ])}
>
  <Text style={cs("text-lg font-semibold text-gray-900 dark:text-white")}>
    Multiple classes combined
  </Text>
</View>
```

### Platform-Specific Styling

```tsx
import { Platform } from "react-native";
import { cs } from "cyclone-cs-wind";

<View
  style={cs([
    "p-4 bg-blue-500",
    Platform.OS === "ios" ? "rounded-lg" : "rounded-sm",
    Platform.OS === "android" ? "elevation-2" : "shadow-md",
  ])}
>
  <Text style={cs("text-white")}>Platform-aware styling</Text>
</View>;
```

## 📚 API Reference

### Core Functions

| Function            | Usage                                        | Description                     |
| ------------------- | -------------------------------------------- | ------------------------------- |
| `cs()`              | `style={cs("flex-1 bg-blue-500")}`           | Main styling function           |
| `{ ThemeProvider }` | `<ThemeProvider><App /></ThemeProvider>`     | Theme support                   |
| `{ useTheme }`      | `const { isDark, toggleTheme } = useTheme()` | Theme control                   |
| `{ useThemeAware }` | `useThemeAware()`                            | Force re-render on theme change |

### React Native Utilities

| Utility                   | Description                  |
| ------------------------- | ---------------------------- |
| `getScreenDimensions()`   | Get screen width/height      |
| `isTablet()`              | Detect tablet devices        |
| `isIOS()` / `isAndroid()` | Platform detection           |
| `getScreenOrientation()`  | Portrait/landscape detection |

## 🎯 All Tailwind Utilities

CycloneWind includes all standard Tailwind CSS utilities:

- **Layout**: `flex`, `grid`, `block`, `hidden`, etc.
- **Spacing**: `m-4`, `p-6`, `mx-auto`, `py-2`, etc.
- **Typography**: `text-lg`, `font-bold`, `text-center`, etc.
- **Colors**: `bg-blue-500`, `text-red-600`, `border-gray-300`, etc.
- **Borders**: `border`, `rounded-lg`, `border-2`, etc.
- **Effects**: `shadow-md`, `opacity-50`, etc.
- **Responsive**: `sm:text-lg`, `md:flex-row`, `lg:p-8`, etc.
- **Dark Mode**: `dark:bg-gray-900`, `dark:text-white`, etc.

## 🔧 Configuration

### Custom Theme Colors

```tsx
import { configure } from "cyclone-cs-wind";

configure({
  theme: {
    colors: {
      brand: {
        50: "#eff6ff",
        500: "#3b82f6",
        900: "#1e3a8a",
      },
    },
  },
});

// Use your custom colors
<View style={cs("bg-brand-500")}>
  <Text style={cs("text-brand-50")}>Custom brand colors!</Text>
</View>;
```

## 🚀 Why CycloneWind?

- ✅ **Simple & Clean**: Just use `cs()` function - no complex setup
- ✅ **Complete Tailwind**: All utilities included out of the box
- ✅ **Zero Configuration**: Works immediately with any React Native app
- ✅ **TypeScript Ready**: Full type safety and autocomplete
- ✅ **Dark Mode Built-in**: Automatic theme switching
- ✅ **Responsive**: Mobile-first breakpoint system
- ✅ **Lightweight**: Minimal bundle impact
- ✅ **Reliable**: No global patching or complex initialization

## 📄 License

MIT © [Cyclone](https://github.com/Cyclone012)

---

**Ready to supercharge your React Native styling? Install CycloneWind today!** 🌪️
