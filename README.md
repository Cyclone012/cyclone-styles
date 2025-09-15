# 🌪️ CycloneWind

[![npm version](https://img.shields.io/npm/v/cyclonewind.svg?style=flat-square)](https://www.npmjs.com/package/cyclonewind)
[![npm downloads](https://img.shields.io/npm/dm/cyclonewind.svg?style=flat-square)](https://www.npmjs.com/package/cyclonewind)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg?style=flat-square)](https://www.typescriptlang.org/)
[![React Native](https://img.shields.io/badge/React%20Native-Ready-green.svg?style=flat-square)](https://reactnative.dev/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

**Perfect NativeWind-style `className` support with standard React Native components - no Metro setup required!**

A complete, lightweight library that brings Tailwind CSS utilities to React Native with 100% NativeWind compatibility, enhanced React Native utilities, and zero Metro configuration required.

## ✨ Features

- 🎯 **100% NativeWind Experience** - Use `className` globally without imports
- 🚀 **Standard Components** - Works with View, Text, SafeAreaView, ScrollView, etc.
- 🎨 **Custom Styles as className** - Register your styles and use them like utilities
- 🌓 **Built-in Dark Mode** - Automatic theme support with `dark:` prefix
- 📱 **Responsive Design** - Mobile-first breakpoints (`sm:`, `md:`, `lg:`, etc.)
- ⚡ **Enhanced cs() API** - Manual import for dynamic styling
- 🔧 **Zero Setup** - No Metro plugins or Babel configuration needed
- ⚡ **TypeScript Ready** - Full type safety and IntelliSense
- 🌟 **React Native Utilities** - Platform detection, responsive helpers, HOCs

## 🚀 Quick Start

### 1. Install

```bash
npm install cyclonewind
```

### 2. Setup (Choose your preferred method)

**Option A: Auto-setup with preset (Recommended)**

```tsx
// App.tsx or _layout.tsx (Expo Router)
import "cyclonewind/preset"; // Enables className globally
import { ThemeProvider } from "cyclonewind";

export default function App() {
  return (
    <ThemeProvider>
      <YourAppContent />
    </ThemeProvider>
  );
}
```

**Option B: Global import (Can be imported ANYWHERE in your app!)**

```tsx
// Can be imported in ANY file - not just at the app root!
import "cyclonewind/global"; // ✨ Works from any module, component, service, hook, anywhere!

// Examples of where you can import it:
// • utils/setupStyles.ts
// • components/BaseComponent.tsx
// • services/themeService.ts
// • hooks/useStyles.ts
// • screens/HomeScreen.tsx
// • ANY module in your app!

import { ThemeProvider } from "cyclonewind";

export default function App() {
  return (
    <ThemeProvider>
      <YourAppContent />
    </ThemeProvider>
  );
}
```

**Option C: Manual setup**

```tsx
import { setupClassName, ThemeProvider } from "cyclonewind";

// Call once at app startup
setupClassName();

export default function App() {
  return (
    <ThemeProvider>
      <YourAppContent />
    </ThemeProvider>
  );
}
```

### 3. Use className with standard React Native components!

```tsx
// Any screen - use standard React Native components
import React from "react";
import { View, Text, SafeAreaView, ScrollView, Pressable } from "react-native";

export default function MyScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-gray-900">
      <ScrollView className="flex-1" contentContainerClassName="p-6">
        <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to CycloneWind! 🌪️
        </Text>

        <View className="bg-blue-500 p-4 rounded-lg mb-4">
          <Text className="text-white text-center font-semibold">
            Using standard React Native components!
          </Text>
        </View>

        <Pressable className="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg">
          <Text className="text-gray-900 dark:text-white text-center">
            Press me!
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
```

## � Flexible Import System

**Import from ANY module in your app - not just the app root!**

```tsx
// ✅ Works in utility modules
// utils/styleSetup.ts
import "cyclonewind/global";

// ✅ Works in service modules
// services/ThemeService.ts
import "cyclonewind/preset";

// ✅ Works in custom hooks
// hooks/useGlobalStyles.ts
import "cyclonewind/global";

// ✅ Works in any component, anywhere in your app tree
// components/features/UserProfile.tsx
import "cyclonewind/global";

// ✅ Works in screen components
// screens/HomeScreen.tsx
import "cyclonewind/preset";
```

**Key Benefits:**

- 🌟 **Import anywhere** - No need to modify your app root
- 🚀 **Auto-initialization** - Just import and className works everywhere
- 🎯 **Module flexibility** - Works from any depth in your module structure
- ⚡ **One-time setup** - Import once, works globally throughout your app

## �🎨 Custom Styles

Register your own styles to use as className utilities:

```tsx
// Step 1: Register your custom styles (do this once, typically at app startup)
import { cs } from "cyclonewind";

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

// Step 2: Use them in className just like any other utility!
export default function MyComponent() {
  return (
    <View className="flex-1 p-4">
      <Text className="heading-text">Custom Heading Style!</Text>
      <View className="primary-button">
        <Text className="text-white">Custom Button Style!</Text>
      </View>
    </View>
  );
}
```

## 🌓 Dark Mode

Dark mode works automatically with standard components:

```tsx
<View className="bg-white dark:bg-gray-800 p-4">
  <Text className="text-black dark:text-white">
    Automatically adapts to system theme!
  </Text>
</View>
```

### Manual Theme Control

```tsx
import { View, Text, Pressable } from "react-native";
import { useTheme } from "cyclonewind";

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <View className="bg-white dark:bg-gray-800 p-4">
      <Pressable
        onPress={toggleTheme}
        className="p-3 rounded-lg bg-gray-200 dark:bg-gray-700"
      >
        <Text className="text-gray-900 dark:text-white text-center">
          {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </Text>
      </Pressable>
    </View>
  );
}
```

## 📱 Responsive Design

Use breakpoints for different screen sizes:

```tsx
<View className="p-2 md:p-4 lg:p-6">
  <Text className="text-sm md:text-base lg:text-lg">
    Responsive text that grows with screen size!
  </Text>
</View>
```

## 💪 Dynamic Styles

For conditional styling, use the `cs()` function:

```tsx
import { cs } from "cyclonewind";

function DynamicButton({ isActive }: { isActive: boolean }) {
  return (
    <Pressable
      style={cs(`
      px-4 py-2 rounded-lg font-semibold
      ${isActive ? "bg-blue-500" : "bg-gray-200"}
    `)}
    >
      <Text style={cs(isActive ? "text-white" : "text-gray-700")}>
        Dynamic Button
      </Text>
    </Pressable>
  );
}
```

## 🚀 React Native Utilities

CycloneWind includes enhanced utilities for React Native development:

```tsx
import {
  platformClassName,
  responsiveClassName,
  withClassName,
} from "cyclonewind";

// Platform-specific styling
const platformStyles = platformClassName({
  ios: "shadow-lg",
  android: "elevation-4",
  default: "border border-gray-200",
});

// Responsive utilities
const responsiveText = responsiveClassName("text-sm", {
  md: "text-base",
  lg: "text-lg",
});

// Higher-order component for className support
const EnhancedCustomComponent = withClassName(MyCustomComponent);
```

## 🌟 Perfect NativeWind Compatibility

CycloneWind provides 100% NativeWind compatibility with the same `className` syntax:

```tsx
// Works exactly like NativeWind but with better performance!
<View className="flex-1 bg-white dark:bg-gray-900 p-6">
  <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
    Perfect NativeWind Experience! 🌪️
  </Text>

  {/* Fixed spacing - gap works on container */}
  <View className="flex-row gap-4 mb-6">
    <View className="flex-1 bg-blue-500 p-3 rounded">
      <Text className="text-white text-center">Item 1</Text>
    </View>
    <View className="flex-1 bg-green-500 p-3 rounded">
      <Text className="text-white text-center">Item 2</Text>
    </View>
  </View>

  <Pressable className="bg-blue-500 dark:bg-blue-600 p-4 rounded-lg">
    <Text className="text-white text-center font-semibold">
      Theme Support Built-in!
    </Text>
  </Pressable>
</View>
```

## 🎯 Available Utilities

### Layout & Flexbox

- **Flexbox**: `flex-1`, `flex-row`, `flex-col`, `justify-center`, `items-center`
- **Position**: `absolute`, `relative`, `top-[10]`, `right-[20]`

### Spacing & Sizing

- **Padding**: `p-0` to `p-24`, `px-4`, `py-2`, `p-[8]`
- **Margin**: `m-0` to `m-24`, `mx-4`, `my-2`, `m-[16]`
- **Width**: `w-full`, `w-1/2`, `w-[100]`
- **Height**: `h-full`, `h-1/2`, `h-[200]`

### Typography

- **Size**: `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-[14]`
- **Weight**: `font-light`, `font-normal`, `font-bold`
- **Align**: `text-left`, `text-center`, `text-right`

### Colors

- **Background**: `bg-red-500`, `bg-blue-600`, `bg-[#ff0000]`
- **Text**: `text-red-500`, `text-blue-600`, `text-[#ff0000]`
- **All Tailwind colors**: red, blue, green, yellow, purple, pink, gray, etc.

### Borders & Effects

- **Radius**: `rounded`, `rounded-lg`, `rounded-full`, `rounded-[8]`
- **Shadow**: `shadow-sm`, `shadow-md`, `shadow-lg`
- **Opacity**: `opacity-0`, `opacity-50`, `opacity-100`

## 🔧 API Reference

| Import                 | Usage                                        | Purpose                    |
| ---------------------- | -------------------------------------------- | -------------------------- |
| `"cyclonewind/preset"` | Import once in App.tsx                       | Enables className globally |
| `{ cs }`               | `cs("flex-1 bg-blue-500")`                   | Dynamic styling            |
| `{ ThemeProvider }`    | `<ThemeProvider><App /></ThemeProvider>`     | Theme support              |
| `{ useTheme }`         | `const { isDark, toggleTheme } = useTheme()` | Theme control              |

## 🚀 Migration from NativeWind

Same API, just change the import:

```tsx
// Before (NativeWind - requires Metro setup)
<View className="flex-1 bg-blue-500" />;

// After (CycloneWind - no Metro setup)
import "cyclonewind/preset"; // Add this once
<View className="flex-1 bg-blue-500" />; // Same API!
```

## ✅ What Works

**Standard React Native Components with className:**

- ✅ `View` with `className="flex-1 bg-blue-500"`
- ✅ `Text` with `className="text-lg font-bold"`
- ✅ `SafeAreaView` with `className="flex-1 bg-white"`
- ✅ `ScrollView` with `className="flex-1"` and `contentContainerClassName="p-4"`
- ✅ `Pressable` with `className="bg-blue-500 p-3 rounded"`
- ✅ All other React Native components

**Features:**

- ✅ 8,220+ Tailwind utilities
- ✅ Custom style registration
- ✅ Dark mode with `dark:` prefix
- ✅ Responsive breakpoints (`sm:`, `md:`, `lg:`)
- ✅ Custom values with `className="w-[100] bg-[#ff0000]"`
- ✅ React Native utilities and helpers

## 📱 Perfect for React Native + Expo

- ✅ Works with Expo Router (`<Stack />`, `<Slot />`, `<Tabs />`)
- ✅ Compatible with Metro bundler
- ✅ Supports Fabric architecture
- ✅ No babel plugins required
- ✅ No Metro configuration needed
- ✅ Works with EAS Build

## 📄 License

MIT License - feel free to use in any project!

---

**🌪️ CycloneWind: React Native styling made simple with standard components!**

_Built with ❤️ for the React Native community_
