# 🌪️ Cyclone Styles

[![npm version](https://img.shields.io/npm/v/cyclone-styles.svg?style=flat-square)](https://www.npmjs.com/package/cyclone-styles)
[![npm downloads](https://img.shields.io/npm/dm/cyclone-styles.svg?style=flat-square)](https://www.npmjs.com/package/cyclone-styles)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg?style=flat-square)](https://www.typescriptlang.org/)
[![React Native](https://img.shields.io/badge/React%20Native-Ready-green.svg?style=flat-square)](https://reactnative.dev/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

A complete, pure React Native implementation of Tailwind CSS utilities with NativeWind-compatible syntax and global configuration. Built for performance and simplicity.

## ✨ Features

**The most complete Tailwind CSS implementation for React Native** with 8,220+ utilities, dark mode, responsive design, and global configuration like NativeWind.

- 🎯 **Complete Tailwind Coverage** - All 8,220+ utilities with full React Native compatibility
- 🚀 **Enhanced cs() API** - Clean syntax: `cs("flex-1 bg-blue-500 text-white")`
- 🌐 **Global Configuration** - NativeWind-style global import with theme customization
- 🎯 **NEW: className Support** - Use `className` prop directly like NativeWind
- ⚡ **Arbitrary Values** - Full support: `cs("bg-[#ff0000] w-[200px] text-[16px]")`
- 🎨 **Custom Theme System** - Override colors, spacing, fonts with nested configuration
- 🌓 **Dark Mode Support** - Automatic theme switching with `dark:` prefix
- 📱 **Responsive Design** - Mobile-first breakpoints (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`)
- 🔧 **Custom Utilities** - Add your own utilities and extend existing ones
- 🔒 **TypeScript First** - Full type safety and IntelliSense
- ⚡ **Zero Dependencies** - Only requires React Native
- 🚀 **Performance Optimized** - Efficient caching and StyleSheet usage
- 🎪 **React Native Native** - Built specifically for React Native (not a web port)

## 🚀 Quick Start

### Installation

```bash
npm install cyclone-styles
# or
yarn add cyclone-styles
```

### Option 1: Global Setup (Recommended - NativeWind Style)

Set up once in your root layout and use everywhere:

**1. Install and Setup**

```tsx
// App.tsx or _layout.tsx (root file)
import "cyclone-styles/preset"; // This sets up everything globally
import { ThemeProvider } from "cyclone-styles";

export default function App() {
  return (
    <ThemeProvider>
      <YourAppContent />
    </ThemeProvider>
  );
}
```

**2. Use Anywhere Without Imports**

```tsx
// Any component file - no imports needed!
import React from "react";
import { View, Text } from "react-native";

export default function MyComponent() {
  return (
    <View style={cs("flex-1 bg-white dark:bg-gray-900 p-4")}>
      <Text style={cs("text-xl font-bold text-gray-900 dark:text-white")}>
        Hello Cyclone Styles! 🌪️
      </Text>
    </View>
  );
}
```

### Option 2: Manual Setup

If you prefer manual imports:

```tsx
import React from "react";
import { View, Text, Image } from "react-native";
import { cs, ThemeProvider } from "cyclone-styles";

function MyApp() {
  return (
    <View style={cs("flex-1 bg-white dark:bg-gray-900 p-4")}>
      <Text style={cs("text-xl font-bold text-gray-900 dark:text-white")}>
        Hello Cyclone Styles! 🌪️
      </Text>

      {/* ✨ NEW: cs() works with all components without specifying type */}
      <Image
        source={{ uri: "https://example.com/image.jpg" }}
        style={cs("w-20 h-20 rounded-full mt-4")}
      />
    </View>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MyApp />
    </ThemeProvider>
  );
}
```

## 🎯 NEW: NativeWind-style className Support

Use `className` prop directly like NativeWind while keeping `cs()` function available:

### Option 3: className Prop (NativeWind Style)

```tsx
// After importing the preset, use className anywhere!
import React from "react";
import { View, Text, Pressable } from "react-native";

export default function MyComponent() {
  return (
    <View className="flex-1 bg-white dark:bg-gray-900 p-4">
      <Text className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        Hello NativeWind-style className! 🌪️
      </Text>

      <Pressable className="bg-blue-500 p-3 rounded-md">
        <Text className="text-white text-center font-medium">
          Button with className
        </Text>
      </Pressable>
    </View>
  );
}
```

### Mixed Usage - Best of Both Worlds

```tsx
import React from "react";
import { View, Text, Pressable } from "react-native";
import { cs } from "cyclone-styles";

export default function MyComponent() {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <View className="flex-1 bg-white p-4">
      {/* Static styles with className */}
      <Text className="text-xl font-bold mb-4">Mixed Usage</Text>

      {/* Dynamic styles with cs() */}
      <Pressable
        style={cs(
          `p-3 rounded-md ${isActive ? "bg-green-500" : "bg-gray-300"}`
        )}
        onPress={() => setIsActive(!isActive)}
      >
        <Text
          style={cs(`text-center ${isActive ? "text-white" : "text-gray-700"}`)}
        >
          {isActive ? "Active" : "Inactive"}
        </Text>
      </Pressable>
    </View>
  );
}
```

**✨ When to use what:**

- **className**: Static styling, simple layouts, NativeWind familiarity
- **cs()**: Dynamic styling, conditional logic, programmatic generation
- **Both**: Same performance, same features, your choice!

## ⚡ NEW: Direct Styles System

For even better performance and a more CSS-modules-like experience, use pre-computed style objects directly without the `cs()` function:

### $ Shorthand API (Recommended)

```tsx
import { $ } from "cyclone-styles";

export default function MyComponent() {
  return (
    <View style={[$.flexRow(), $.p4(), $.bgWhite()]}>
      <Text style={[$.textLg(), $.fontBold(), $.textBlack()]}>
        Direct Styles - No cs() needed! 🚀
      </Text>

      <Pressable style={[$.rounded(), $.p3(), $.bgBlue(), $.shadow()]}>
        <Text style={[$.textWhite(), $.textCenter()]}>Button</Text>
      </Pressable>
    </View>
  );
}
```

### Category-based Style Objects

```tsx
import {
  getLayoutStyles,
  getSpacingStyles,
  getColorStyles,
} from "cyclone-styles";

export default function MyComponent() {
  const layout = getLayoutStyles();
  const spacing = getSpacingStyles();
  const colors = getColorStyles();

  return (
    <View style={[layout.flexRow, spacing.p4, colors.bgWhite]}>
      <Text style={[colors.textBlack]}>Organized by category</Text>
    </View>
  );
}
```

### Benefits of Direct Styles

✅ **Better Performance** - No function calls during render  
✅ **Pre-computed** - Uses StyleSheet.create() under the hood  
✅ **Tree-shaking** - Only import what you use  
✅ **TypeScript** - Full autocompletion and type safety  
✅ **CSS-modules feel** - Direct property access

## 🌐 Global Configuration

### Theme Customization

Customize colors, spacing, and fonts like NativeWind:

```tsx
// App.tsx or _layout.tsx
import { setupCycloneStyles } from "cyclone-styles/global";

setupCycloneStyles({
  theme: {
    colors: {
      // Override existing colors
      primary: {
        50: "#eff6ff",
        500: "#3b82f6",
        900: "#1e3a8a",
      },
      // Add custom colors
      brand: {
        light: "#38bdf8",
        DEFAULT: "#0ea5e9",
        dark: "#0284c7",
      },
    },
    spacing: {
      // Add custom spacing
      "72": 288,
      "84": 336,
      "96": 384,
    },
    fontFamily: {
      // Add custom fonts
      custom: ["CustomFont-Regular"],
      heading: ["HeadingFont-Bold"],
    },
  },
});
```

### Custom Utilities

Add your own utilities:

```tsx
import { addUtilities } from "cyclone-styles/global";

addUtilities({
  ".btn-primary": {
    backgroundColor: "#3b82f6",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
  ".text-shadow": {
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});

// Use anywhere
<Text style={cs("btn-primary text-shadow")}>Custom Button</Text>;
```

## 🎨 Complete Example

```tsx
// App.tsx - Setup once
import "cyclone-styles/preset";
import { ThemeProvider, setupCycloneStyles } from "cyclone-styles";

// Optional: Customize theme
setupCycloneStyles({
  theme: {
    colors: {
      brand: { DEFAULT: "#ff6b35", dark: "#e55a2b" },
    },
  },
});

export default function App() {
  return (
    <ThemeProvider>
      <MyApp />
    </ThemeProvider>
  );
}

// MyComponent.tsx - Use anywhere without imports
function MyComponent() {
  return (
    <View style={cs("flex-1 bg-white dark:bg-gray-900 p-4")}>
      <View style={cs("bg-brand p-6 rounded-xl shadow-lg mb-4")}>
        <Text style={cs("text-white text-xl font-bold")}>
          Custom Brand Color! 🎨
        </Text>
      </View>

      <View style={cs("bg-white dark:bg-gray-800 p-4 rounded-lg")}>
        <Text style={cs("text-gray-900 dark:text-white text-lg")}>
          Responsive Design
        </Text>
        <Text
          style={cs(
            "text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300"
          )}
        >
          This text adapts to screen size automatically!
        </Text>
      </View>
    </View>
  );
}
```

## 📱 Responsive Design

Mobile-first responsive breakpoints work seamlessly:

```tsx
// Responsive padding: 2 on mobile, 4 on md+, 6 on lg+
<View style={cs("p-2 md:p-4 lg:p-6")} />

// Responsive layout
<View style={cs("flex-col md:flex-row gap-4 md:gap-6")} />

// Combined with dark mode
<View style={cs("bg-white dark:bg-gray-800 p-4 md:p-6 lg:p-8")} />
```

## 🌓 Dark Mode & Theming

### Automatic Dark Mode

```tsx
// Dark mode variants work automatically
<View style={cs("bg-white dark:bg-gray-900 p-4")}>
  <Text style={cs("text-gray-900 dark:text-white")}>
    Automatically adapts to system theme!
  </Text>
</View>
```

### Manual Theme Control

```tsx
import { useTheme } from "cyclone-styles";

function ThemeToggle() {
  const { isDark, toggleTheme, setTheme } = useTheme();

  return (
    <TouchableOpacity
      onPress={toggleTheme}
      style={cs("px-4 py-2 bg-blue-500 rounded-lg")}
    >
      <Text style={cs("text-white")}>
        Switch to {isDark ? "Light" : "Dark"} Mode
      </Text>
    </TouchableOpacity>
  );
}
```

## ⚡ Arbitrary Values

Use custom values with bracket notation - all numbers default to pixels:

```tsx
// Dimensions (pixels by default)
<View style={cs("w-[100] h-[200] p-[16] m-[8]")} />

// Typography
<Text style={cs("text-[14] leading-[20]")}>Custom size text</Text>

// Colors
<View style={cs("bg-[#ff0000] border-[#00ff00]")} />

// Responsive arbitrary values
<View style={cs("w-[100] sm:w-[200] md:w-[300] lg:w-[400]")} />
```

## 🔧 Advanced Features

### Negative Values

```tsx
// Negative margins and positioning
<View style={cs("-m-4 -top-2 -left-4")} />

// Negative arbitrary values
<View style={cs("-top-[15] -left-[25] -m-[8]")} />
```

### Color Opacity

```tsx
// Background with opacity
<View style={cs("bg-black/50 bg-blue-500/75")} />

// Text with opacity
<Text style={cs("text-gray-900/80 text-red-500/60")}>
  Semi-transparent text
</Text>
```

## 🎯 Available Utilities

### ✨ Universal cs() Function

**NEW**: The `cs()` function now works universally with all React Native components without needing to specify the component type:

```tsx
// ✅ Works directly with Text components
<Text style={cs("text-lg font-bold text-blue-500")}>Hello World</Text>

// ✅ Works directly with Image components
<Image style={cs("w-20 h-20 rounded-full")} source={{uri: '...'}} />

// ✅ Works directly with View components
<View style={cs("bg-white p-4 shadow-lg rounded-xl")}>Content</View>

// ✅ No need to specify component type anymore!
// OLD: cs("text-lg font-bold", "text")
// NEW: cs("text-lg font-bold") ✨
```

### Layout & Flexbox

- **Flexbox**: `flex`, `flex-row`, `flex-col`, `justify-center`, `items-center`, etc.
- **Position**: `absolute`, `relative`, `top-[10]`, `right-[20]`, etc.
- **Display**: `hidden`, `overflow-hidden`, `overflow-visible`

### Spacing & Sizing

- **Padding**: `p-0` to `p-24`, `px-4`, `py-2`, `p-[8]`, etc.
- **Margin**: `m-0` to `m-24`, `mx-4`, `my-2`, `m-[16]`, etc.
- **Width**: `w-full`, `w-screen`, `w-1/2`, `w-[100]`, etc.
- **Height**: `h-full`, `h-screen`, `h-1/2`, `h-[200]`, etc.

### Typography

- **Size**: `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-[14]`, etc.
- **Weight**: `font-thin`, `font-light`, `font-normal`, `font-bold`, etc.
- **Align**: `text-left`, `text-center`, `text-right`, `text-justify`

### Colors

- **Background**: `bg-red-500`, `bg-blue-600`, `bg-[#ff0000]`, `bg-black/50`
- **Text**: `text-red-500`, `text-blue-600`, `text-[#ff0000]`, `text-black/50`
- **All Tailwind colors**: red, blue, green, yellow, purple, pink, gray, etc.

### Borders & Effects

- **Radius**: `rounded-none`, `rounded-sm`, `rounded-lg`, `rounded-[8]`
- **Width**: `border-0`, `border-2`, `border-[1]`
- **Shadow**: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`
- **Opacity**: `opacity-0`, `opacity-50`, `opacity-100`

## 📚 API Reference

### Core Functions

| Function                     | Purpose                        | Example                                |
| ---------------------------- | ------------------------------ | -------------------------------------- |
| `cs(classes)`                | Convert class string to styles | `cs("flex-1 bg-blue-500")`             |
| `setupCycloneStyles(config)` | Global configuration           | `setupCycloneStyles({ theme: {...} })` |
| `addUtilities(utilities)`    | Add custom utilities           | `addUtilities({ '.btn': {...} })`      |

### Hooks

| Hook              | Purpose       | Returns                              |
| ----------------- | ------------- | ------------------------------------ |
| `useTheme()`      | Theme control | `{ isDark, setTheme, toggleTheme }`  |
| `useResponsive()` | Screen info   | `{ screenWidth, isSmall, isMedium }` |

### Components

| Component         | Purpose        | Usage                                    |
| ----------------- | -------------- | ---------------------------------------- |
| `<ThemeProvider>` | Enable theming | `<ThemeProvider><App /></ThemeProvider>` |

## 🆚 Comparison

| Feature              | Cyclone Styles   | NativeWind        | Tailwind RN |
| -------------------- | ---------------- | ----------------- | ----------- |
| **Utilities**        | ✅ 8,220+        | ✅ Most           | ⚠️ Limited  |
| **Global Setup**     | ✅ Built-in      | ✅ Yes            | ❌ No       |
| **Custom Theme**     | ✅ Full support  | ✅ Yes            | ⚠️ Limited  |
| **Arbitrary Values** | ✅ Pixel-default | ✅ Yes            | ⚠️ Basic    |
| **Dark Mode**        | ✅ Built-in      | ✅ Yes            | ❌ Manual   |
| **Responsive**       | ✅ Built-in      | ✅ Yes            | ❌ Manual   |
| **TypeScript**       | ✅ Perfect       | ✅ Good           | ⚠️ Basic    |
| **Performance**      | ✅ Optimized     | ✅ Good           | ✅ Good     |
| **Setup**            | ✅ Zero config   | ⚠️ Requires setup | ✅ Simple   |

## 🔄 Migration from NativeWind

Cyclone Styles is 100% compatible with NativeWind! Migrate easily:

**Before (NativeWind):**

```tsx
<View className="flex-1 bg-white p-4">
  <Text className="text-lg font-bold">Hello</Text>
</View>
```

**After (Cyclone Styles):**

```tsx
// Option 1: Global setup (recommended)
import "cyclone-styles/preset"; // Once in root

<View style={cs("flex-1 bg-white p-4")}>
  <Text style={cs("text-lg font-bold")}>Hello</Text>
</View>;

// Option 2: Manual import
import { cs } from "cyclone-styles";

<View style={cs("flex-1 bg-white p-4")}>
  <Text style={cs("text-lg font-bold")}>Hello</Text>
</View>;
```

## 🔧 Installation & Setup

### Basic Setup

```bash
npm install cyclone-styles
```

### Global Setup (Recommended)

```tsx
// App.tsx or your root layout file
import "cyclone-styles/preset"; // This makes cs() available globally
import { ThemeProvider } from "cyclone-styles";

export default function App() {
  return (
    <ThemeProvider>
      <YourAppContent />
    </ThemeProvider>
  );
}
```

### With Custom Configuration

```tsx
// App.tsx
import { setupCycloneStyles, ThemeProvider } from "cyclone-styles";
import "cyclone-styles/preset";

// Customize your theme
setupCycloneStyles({
  theme: {
    colors: {
      primary: "#3b82f6",
      secondary: "#64748b",
      brand: {
        light: "#38bdf8",
        DEFAULT: "#0ea5e9",
        dark: "#0284c7",
      },
    },
    spacing: {
      "18": 72,
      "88": 352,
    },
  },
});

export default function App() {
  return (
    <ThemeProvider>
      <YourAppContent />
    </ThemeProvider>
  );
}
```

## 📚 Documentation

- 📖 **[Global Setup Guide](docs/global-setup-guide.md)** - Complete setup instructions
- 🌐 **[Global Import FAQ](docs/global-import-faq.md)** - Common questions about global imports
- 💡 **[Examples](examples/)** - Live code examples and configuration samples

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

```bash
git clone https://github.com/Cyclone012/cyclone-styles.git
cd cyclone-styles
npm install
npm run build
```

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by [Tailwind CSS](https://tailwindcss.com/)
- Built for the [React Native](https://reactnative.dev/) community
- Configuration system inspired by [NativeWind](https://www.nativewind.dev/)

## 📞 Support

- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/Cyclone012/cyclone-styles/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/Cyclone012/cyclone-styles/discussions)
- 📧 **Email**: cyclone@example.com

---

<div align="center">

**🌪️ Made with ❤️ for the React Native community**

[⭐ Star on GitHub](https://github.com/Cyclone012/cyclone-styles) • [📦 View on npm](https://www.npmjs.com/package/cyclone-styles) • [📚 Documentation](docs/)

</div>
