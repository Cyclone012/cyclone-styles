# 🌪️ CycloneWind# CycloneWind# 🌪️ CycloneWind

[![npm version](https://img.shields.io/npm/v/cyclonewind.svg?style=flat-square)](https://www.npmjs.com/package/cyclonewind)**NativeWind-compatible Tailwind CSS for React Native**[![npm version](https://img.shields.io/npm/v/cyclonewind.svg?style=flat-square)](https://www.npmjs.com/package/cyclonewind)

**Perfect NativeWind-style `className` support with standard React Native components - no Metro setup required!**Works exactly like NativeWind but with better performance and no Metro configuration required.A simple, explicit Tailwind-style utility system for React Native.

## Quick Start## Quick Start- No global magic

### 1. Install- No Metro config

```````````bash### 1. Install- Just use style={cs("...")}

npm install cyclonewind

``````````bash## Quick Start



### 2. Setup (Add to your App.tsx)npm install cyclonewind



```tsx``````bash

// App.tsx

import "cyclonewind/preset"; // Makes className work everywherenpm install cyclonewind

import { ThemeProvider } from "cyclonewind";

### 2. Setup (Add to your App.tsx)```

export default function App() {

  return (

    <ThemeProvider>

      <YourApp />```tsx```tsx

    </ThemeProvider>

  );// App.tsx// App.tsx or any component

}

```import "cyclonewind/preset"; // Makes className work everywhereimport { cs, ThemeProvider } from "cyclonewind";



### 3. Use className anywhere!import { ThemeProvider } from "cyclonewind";



```tsxexport default function App() {

// Any component - className works without imports!

import React from "react";export default function App() {  return (

import { View, Text, Pressable } from "react-native";

  return (    <ThemeProvider>

export default function MyScreen() {

  return (    <ThemeProvider>      <View style={cs("flex-1 bg-white dark:bg-gray-900 p-6")}>

    <View className="flex-1 bg-white dark:bg-gray-900 p-6">

      <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-4">      <YourApp />        <Text style={cs("text-2xl font-bold text-gray-900 dark:text-white")}>

        Hello CycloneWind! 🌪️

      </Text>    </ThemeProvider>          CycloneWind, but explicit



      <Pressable className="bg-blue-500 p-4 rounded-lg">  );        </Text>

        <Text className="text-white text-center font-semibold">

          Works with standard React Native components!}        <View style={cs("bg-blue-500 p-4 rounded-lg mt-4")}>

        </Text>

      </Pressable>```          <Text style={cs("text-white text-center")}>

    </View>

  );            Use style={cs("...")}

}

```### 3. Use className anywhere!          </Text>



## Features        </View>



- ✅ **NativeWind API** - Same `className` syntax you know```tsx      </View>

- ✅ **Zero Setup** - No Metro plugins or Babel configuration

- ✅ **All Components** - Works with View, Text, Pressable, etc.// Any component - className works without imports!    </ThemeProvider>

- ✅ **Dark Mode** - Built-in `dark:` prefix support

- ✅ **TypeScript** - Full type safety and IntelliSenseimport React from "react";  );

- ✅ **Custom Styles** - Register your own utility classes

- ✅ **Responsive** - Mobile-first breakpointsimport { View, Text, Pressable } from "react-native";}



## Custom Styles```````



```tsxexport default function MyScreen() {

import { registerCustomClass } from "cyclonewind";

return (## Dark Mode

// Register once, use everywhere

registerCustomClass("btn-primary", {    <View className="flex-1 bg-white dark:bg-gray-900 p-6">

  backgroundColor: "#3b82f6",

  padding: 16,      <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-4">```tsx

  borderRadius: 8,

  alignItems: "center",        Hello CycloneWind! 🌪️<View style={cs("bg-white dark:bg-gray-900 p-4")}>

});

      </Text>  <Text style={cs("text-black dark:text-white")}>Dark mode built-in</Text>

// Use in className

<Pressable className="btn-primary">      </View>

  <Text className="text-white font-bold">Custom Button</Text>

</Pressable>      <Pressable className="bg-blue-500 p-4 rounded-lg">```

```````````

        <Text className="text-white text-center font-semibold">

## Dynamic Styles

          Works with standard React Native components!## Responsive

``````````tsx

import { cs } from "cyclonewind";        </Text>



function DynamicButton({ isActive }) {      </Pressable>```tsx

  return (

    <Pressable    </View><View style={cs("p-2 md:p-4 lg:p-6")} />

      style={cs(`p-4 rounded-lg ${isActive ? 'bg-green-500' : 'bg-gray-300'}`)}

    >);```

      <Text style={cs(`${isActive ? 'text-white' : 'text-gray-700'}`)}>

        {isActive ? 'Active' : 'Inactive'}}

      </Text>

    </Pressable>`````````## Custom Utilities

  );

}

``````````

## Features```tsx

## Dark Mode

import { addUtilities } from "cyclonewind/global";

```tsx

<View className="bg-white dark:bg-gray-900 p-4">- ✅ **NativeWind API** - Same `className` syntax you know

  <Text className="text-black dark:text-white">

    Automatically adapts to system theme!- ✅ **Zero Setup** - No Metro plugins or Babel configuration  addUtilities({

  </Text>

</View>- ✅ **All Components** - Works with View, Text, Pressable, etc.  ".btn": { padding: 12, borderRadius: 8, backgroundColor: "#3b82f6" },

```

- ✅ **Dark Mode** - Built-in `dark:` prefix support});

## Migration from NativeWind

- ✅ **TypeScript** - Full type safety and IntelliSense

Same API, just change the import:

- ✅ **Custom Styles** - Register your own utility classes<Text style={cs("btn text-white")} />;

````tsx

// Before (NativeWind)- ✅ **Responsive** - Mobile-first breakpoints```

<View className="flex-1 bg-blue-500" />



// After (CycloneWind)

<View className="flex-1 bg-blue-500" /> // Same syntax!## Custom Styles## Notes

````

## Available Utilities

`````````tsx- Global className is disabled.

All standard Tailwind utilities work:

import { registerCustomClass } from "cyclonewind";- Prefer explicit `style={cs("...")}` for clarity and reliability.

- **Layout**: `flex-1`, `flex-row`, `justify-center`, `items-center`

- **Spacing**: `p-4`, `m-2`, `px-6`, `py-3`

- **Colors**: `bg-blue-500`, `text-white`, `border-gray-200`

- **Typography**: `text-lg`, `font-bold`, `text-center`// Register once, use everywhere---

- **Borders**: `rounded-lg`, `border-2`, `shadow-md`

- **Custom**: `w-[100]`, `bg-[#ff0000]`, `p-[16]`registerCustomClass("btn-primary", {



## TypeScript  backgroundColor: "#3b82f6",# 🌪️ CycloneWind# 🌪️ CycloneWind# 🌪️ CycloneWind# 🌪️ CycloneWind



Full TypeScript support with IntelliSense:  padding: 16,



```tsx  borderRadius: 8,[![npm version](https://img.shields.io/npm/v/cyclonewind.svg?style=flat-square)](https://www.npmjs.com/package/cyclonewind)**The easiest way to use Tailwind CSS in React Native + Expo\*\***The easiest way to use Tailwind CSS in React Native\*\*[![npm version](https://img.shields.io/npm/v/cyclonewind.svg?style=flat-square)](https://www.npmjs.com/package/cyclonewind)

/// <reference types="cyclonewind/nativewind" />

```  alignItems: "center",



Or add to `tsconfig.json`:});[![npm downloads](https://img.shields.io/npm/dm/cyclonewind.svg?style=flat-square)](https://www.npmjs.com/package/cyclonewind)



```json

{

  "compilerOptions": {// Use in className[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg?style=flat-square)](https://www.typescriptlang.org/)Perfect NativeWind-style `className` support with standard React Native components - no Metro setup required![![npm downloads](https://img.shields.io/npm/dm/cyclonewind.svg?style=flat-square)](https://www.npmjs.com/package/cyclonewind)

    "types": ["cyclonewind/nativewind"]

  }<Pressable className="btn-primary">

}

```  <Text className="text-white font-bold">Custom Button</Text>[![React Native](https://img.shields.io/badge/React%20Native-Ready-green.svg?style=flat-square)](https://reactnative.dev/)



## License</Pressable>



MIT - Feel free to use in any project!```[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)## ✨ Why CycloneWind?A complete, lightweight library that brings Tailwind CSS utilities to React Native with a simple, familiar API.[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg?style=flat-square)](https://www.typescriptlang.org/)



---



**That's it! Start building beautiful React Native apps with familiar Tailwind syntax.**## Dynamic Styles**The most complete Tailwind CSS implementation for React Native** with perfect NativeWind-style `className` support, custom styles, and zero Metro configuration required.- **🎯 Easy Setup** - Just install and start using[![React Native](https://img.shields.io/badge/React%20Native-Ready-green.svg?style=flat-square)](https://reactnative.dev/)



```tsx## ✨ Features- **🌟 className Support** - Use `className` prop with standard React Native components

import { cs } from "cyclonewind";

- 🎯 **Perfect NativeWind Experience** - Use `className` globally without imports- **🎨 Custom Styles** - Register your own styles and use them as className utilities## ✨ Why CycloneWind?[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

function DynamicButton({ isActive }) {

  return (- 🎨 **Custom Styles as className** - Register your styles and use them like utilities

    <Pressable

      style={cs(`p-4 rounded-lg ${isActive ? 'bg-green-500' : 'bg-gray-300'}`)}- 🚀 **Standard Components** - Works with View, Text, SafeAreaView, ScrollView, etc.- **🚀 Standard Components** - Works with View, Text, SafeAreaView, ScrollView, etc.

    >

      <Text style={cs(`${isActive ? 'text-white' : 'text-gray-700'}`)}>- 🌓 **Built-in Dark Mode** - Automatic theme support with `dark:` prefix

        {isActive ? 'Active' : 'Inactive'}

      </Text>- 📱 **Responsive Design** - Mobile-first breakpoints (`sm:`, `md:`, `lg:`, etc.)- **⚡ TypeScript** - Full type safety out of the box- **🎯 Easy Setup** - Just install and start usingA complete, pure React Native implementation of Tailwind CSS utilities with **NativeWind-compatible className syntax**, **custom styles as className utilities**, and global configuration. Built for performance and simplicity.

    </Pressable>

  );- ⚡ **TypeScript Ready** - Full type safety and IntelliSense

}

```- 🔧 **Zero Setup** - No Metro plugins or Babel configuration needed- **📱 React Native + Expo Ready** - Built specifically for mobile development



## Dark Mode## 🚀 Quick Start- **🌟 className Support** - Use `className` prop just like in web development



```tsx### 1. Install## 🚀 Quick Start

<View className="bg-white dark:bg-gray-900 p-4">

  <Text className="text-black dark:text-white">````````bash- **🎨 Custom Styles** - Register your own styles and use them as className utilities## ✨ Features

    Automatically adapts to system theme!

  </Text>npm install cyclonewind

</View>

``````### 1. Install



## Migration from NativeWind



Same API, just change the import:### 2. Setup (One-time import)```````bash- **🚀 Familiar API** - If you know Tailwind CSS, you already know CycloneWind



```tsx

// Before (NativeWind)

<View className="flex-1 bg-blue-500" />```tsxnpm install cyclonewind



// After (CycloneWind)  // App.tsx or _layout.tsx (Expo Router)

import "cyclonewind/preset"; // Add this once

<View className="flex-1 bg-blue-500" /> // Same syntax!import "cyclonewind/preset"; // Makes className work everywhere```- **⚡ TypeScript** - Full type safety out of the box**The most complete Tailwind CSS implementation for React Native** with 8,220+ utilities, **perfect NativeWind-style experience**, and **custom styles that work as className utilities**.

`````````

import { ThemeProvider } from "cyclonewind";

## Available Utilities

All standard Tailwind utilities work:

export default function App() {

- **Layout**: `flex-1`, `flex-row`, `justify-center`, `items-center`

- **Spacing**: `p-4`, `m-2`, `px-6`, `py-3` return (### 2. Setup (Add to your app/\_layout.tsx)- **📱 React Native Ready** - Works perfectly with all React Native components

- **Colors**: `bg-blue-500`, `text-white`, `border-gray-200`

- **Typography**: `text-lg`, `font-bold`, `text-center` <ThemeProvider>

- **Borders**: `rounded-lg`, `border-2`, `shadow-md`

- **Custom**: `w-[100]`, `bg-[#ff0000]`, `p-[16]` <YourAppContent />```tsx

## TypeScript </ThemeProvider>

Full TypeScript support with IntelliSense: );// app/\_layout.tsx (Expo Router)- 🎯 **Complete Tailwind Coverage** - All 8,220+ utilities with full React Native compatibility

```````tsx}

/// <reference types="cyclonewind/nativewind" />

``````import "cyclonewind/preset"; // Enables className globally



Or add to `tsconfig.json`:



```json### 3. Use className anywhere!import { ThemeProvider } from "cyclonewind";## 🚀 Quick Start- 🌟 **NativeWind-style className** - Use `className` prop globally without imports (after preset)

{

  "compilerOptions": {

    "types": ["cyclonewind/nativewind"]

  }```tsximport { Stack } from "expo-router";

}

```// Any component - className works without imports!



## Licenseimport React from "react";- 🎨 **Custom Styles as className** - Register custom styles and use them like any other utility class



MIT - Feel free to use in any project!import { View, Text, SafeAreaView, Pressable } from "react-native";



---export default function RootLayout() {



**That's it! Start building beautiful React Native apps with familiar Tailwind syntax.**export default function MyScreen() {

  return (  return (### 1. Install- 🚀 **Enhanced cs() API** - Manual import for dynamic styling: `cs("flex-1 bg-blue-500")`

    <SafeAreaView className="flex-1 bg-white dark:bg-gray-900">

      <View className="p-6">    <ThemeProvider>

        <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-4">

          Welcome to CycloneWind! 🌪️      <Stack>- ⚡ **Direct Styles** - Pre-computed StyleSheet objects with `$` functions

        </Text>

                <Stack.Screen name="index" options={{ headerShown: false }} />

        <View className="bg-blue-500 p-4 rounded-lg mb-4">

          <Text className="text-white text-center font-semibold">      </Stack>````bash- ⚙️ **Global Configuration** - One-time preset import enables everything

            Standard React Native components!

          </Text>    </ThemeProvider>

        </View>

          );npm install cyclonewind- ⚡ **Arbitrary Values** - Full support: `className="bg-[#ff0000] w-[200px]"`

        <Pressable className="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg">

          <Text className="text-gray-900 dark:text-white text-center">}

            Press me!

          </Text>``````- 🎨 **Built-in Theme System** - Automatic dark mode, custom colors, and real-time updates

        </Pressable>

      </View>

    </SafeAreaView>

  );### 3. Use className with standard React Native components!- 🌓 **Smart Theme Integration** - className gets automatic theme, cs()/$ sync with ThemeProvider

}

```````

## 🎨 Custom Styles```tsx### 2. Setup (Add to your App.tsx)- 📱 **Responsive Design** - Mobile-first breakpoints (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`)

Register your own styles and use them like any other utility:// Any screen - use standard React Native components

````tsximport React from "react";- 🔧 **Fixed Spacing** - Gap and space utilities work correctly on elements

// Setup once (in App.tsx)

import { cs } from "cyclonewind";import { View, Text, SafeAreaView, ScrollView, Pressable } from "react-native";



cs.registerCustomClass('my-button', {```tsx- 🔒 **TypeScript First** - Full type safety and IntelliSense

  backgroundColor: '#007AFF',

  padding: 16,export default function MyScreen() {

  borderRadius: 8,

  alignItems: 'center',  return (// App.tsx- ⚡ **Zero Dependencies** - Only requires React Native

});

    <SafeAreaView className="flex-1 bg-white dark:bg-gray-900">

cs.registerCustomClass('my-text', {

  fontSize: 18,      <ScrollView className="flex-1" contentContainerClassName="p-6">import "cyclonewind/preset"; // This line makes className work everywhere- 🚀 **Performance Optimized** - Efficient caching and StyleSheet usage

  fontWeight: 'bold',

  color: '#333',        <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-4">

});

          Welcome to CycloneWind! 🌪️import { ThemeProvider } from "cyclonewind";

// Use anywhere with className!

export default function MyComponent() {        </Text>

  return (

    <View className="flex-1 p-4">        ## 🚀 Quick Start

      <Text className="my-text mb-4">Custom heading style!</Text>

      <View className="my-button">        <View className="bg-blue-500 p-4 rounded-lg mb-4">

        <Text className="text-white">Custom button style!</Text>

      </View>          <Text className="text-white text-center font-semibold">export default function App() {

    </View>

  );            Using standard React Native components!

}

```          </Text>  return (### Installation



## 🌓 Dark Mode        </View>



Dark mode works automatically:            <ThemeProvider>



```tsx        <Pressable className="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg">

<View className="bg-white dark:bg-gray-900 p-4">

  <Text className="text-black dark:text-white">          <Text className="text-gray-900 dark:text-white text-center">      <YourAppContent />```bash

    Automatically adapts to system theme!

  </Text>            Press me!

</View>

```          </Text>    </ThemeProvider>npm install cyclonewind



## 📱 Responsive Design        </Pressable>



Use breakpoints for different screen sizes:      </ScrollView>  );# or



```tsx    </SafeAreaView>

<View className="p-2 md:p-4 lg:p-6">

  <Text className="text-sm md:text-base lg:text-lg">  );}yarn add cyclonewind

    Responsive text that grows with screen size!

  </Text>}

</View>

````

## 💪 Dynamic Styles## 🎨 Custom Styles### 3. Use className anywhere!### 🌟 Perfect NativeWind Experience (Recommended)

For conditional styling, use the `cs()` function:Register your own styles to use as className utilities:````tsx**✨ className works globally without imports after preset setup**

```tsx````tsx// Any component - no imports needed!

import { cs } from "cyclonewind";

// app/\_layout.tsx - Register custom styles once

function DynamicButton({ isActive }: { isActive: boolean }) {

return (import { registerCustomClass } from "cyclonewind";import React from "react";**1. One-time Setup**

    <Pressable style={cs(`

      px-4 py-2 rounded-lg font-semibold

      ${isActive ? 'bg-blue-500' : 'bg-gray-200'}

    `)}>registerCustomClass('my-button', {import { View, Text } from "react-native";

      <Text style={cs(isActive ? 'text-white' : 'text-gray-700')}>

        Dynamic Button  backgroundColor: '#007AFF',

      </Text>

    </Pressable>  padding: 16,```tsx

);

} borderRadius: 8,

``````

  shadowColor: '#000',export default function MyComponent() {// App.tsx or _layout.tsx (root file)

## 🎯 Available Utilities

  shadowOffset: { width: 0, height: 2 },

### Layout

- **Flexbox**: `flex-1`, `flex-row`, `flex-col`, `justify-center`, `items-center`  shadowOpacity: 0.1,  return (import "cyclonewind/preset"; // Enables className globally

- **Position**: `absolute`, `relative`, `top-[10]`, `right-[20]`

  shadowRadius: 4,

### Spacing

- **Padding**: `p-0` to `p-24`, `px-4`, `py-2`, `p-[16]`  elevation: 3,    <View className="flex-1 bg-white p-4">import { ThemeProvider } from "cyclonewind";

- **Margin**: `m-0` to `m-24`, `mx-4`, `my-2`, `m-[8]`

});

### Sizing

- **Width**: `w-full`, `w-1/2`, `w-[100]`      <Text className="text-xl font-bold text-blue-600">

- **Height**: `h-full`, `h-1/2`, `h-[200]`

// Use anywhere with standard components

### Typography

- **Size**: `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`

- **Weight**: `font-light`, `font-normal`, `font-bold`

- **Align**: `text-left`, `text-center`, `text-right`



### Colors<Pressable className="my-button">      </Text>  return (

- **Background**: `bg-red-500`, `bg-blue-600`, `bg-[#ff0000]`

- **Text**: `text-red-500`, `text-blue-600`, `text-[#ff0000]`  <Text className="text-white font-bold">Custom Button</Text>



### Borders & Effects</Pressable>      <View className="bg-blue-500 p-3 rounded-lg mt-4">    <ThemeProvider>

- **Radius**: `rounded`, `rounded-lg`, `rounded-full`

- **Shadow**: `shadow-sm`, `shadow-md`, `shadow-lg`````



## 🔧 API Reference        <Text className="text-white text-center">      <YourAppContent />



| Function | Purpose | Example |## 🌓 Dark Mode

|----------|---------|---------|

| `import "cyclonewind/preset"` | Enable global className | One-time import |          It just works!    </ThemeProvider>

| `cs.registerCustomClass(name, styles)` | Register custom style | `cs.registerCustomClass('btn', {...})` |

| `cs(classes)` | Dynamic styling | `cs("flex-1 bg-blue-500")` |Dark mode works automatically with standard components:

| `useTheme()` | Theme control | `const { isDark, toggleTheme } = useTheme()` |

        </Text>  );

## ✅ What Works

`````tsx

**Standard React Native Components with className:**

- ✅ `View` with `className="flex-1 bg-blue-500"`import { View, Text, Pressable } from "react-native";      </View>}

- ✅ `Text` with `className="text-lg font-bold"`

- ✅ `SafeAreaView` with `className="flex-1 bg-white"`import { useTheme } from "cyclonewind";

- ✅ `ScrollView` with `className="flex-1"` and `contentContainerClassName="p-4"`

- ✅ `Pressable` with `className="bg-blue-500 p-3 rounded"`    </View>```

- ✅ All other React Native components

function ThemeToggle() {

**Features:**

- ✅ 8,220+ Tailwind utilities  const { isDark, toggleTheme } = useTheme();  );

- ✅ Custom style registration

- ✅ Dark mode with `dark:` prefix

- ✅ Responsive breakpoints (`sm:`, `md:`, `lg:`)

- ✅ Custom values with `className="w-[100] bg-[#ff0000]"`  return (}**2. Use className Anywhere (No imports needed!)**



## 📱 Perfect for React Native + Expo    <View className="bg-white dark:bg-gray-800 p-4">



- ✅ Works with Expo Router (`<Stack />`, `<Slot />`, `<Tabs />`)      <Pressable ````

- ✅ Compatible with Metro bundler

- ✅ Supports Fabric architecture        onPress={toggleTheme}

- ✅ No babel plugins required

- ✅ No Metro configuration needed        className="p-3 rounded-lg bg-gray-200 dark:bg-gray-700"````tsx

- ✅ Works with EAS Build

      >

## 🚀 Migration from NativeWind

        <Text className="text-gray-900 dark:text-white text-center">## 🎨 Custom Styles// Any component file - className works without imports!

Same API, just change the import:

          {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}

```tsx

// Before (NativeWind - requires Metro setup)        </Text>import React from "react";

<View className="flex-1 bg-blue-500" />

      </Pressable>

// After (CycloneWind - no Metro setup)

import "cyclonewind/preset"; // Add this once    </View>Register your own styles and use them like any other utility:import { View, Text } from "react-native";

<View className="flex-1 bg-blue-500" /> // Same API!

```  );



## 📄 License}



MIT License - feel free to use in any project!`````



---````tsxexport default function MyComponent() {



**🌪️ CycloneWind: React Native styling made simple with standard components!**## 💪 Dynamic Styles



_Built with ❤️ for the React Native community_// Setup your custom styles (do this once)  return (

For conditional styling, use the `cs()` function:

import { cs } from "cyclonewind";    <View className="flex-1 bg-white dark:bg-gray-900 p-4">

```tsx

import { View, Text, Pressable } from "react-native";      <Text className="text-xl font-bold text-gray-900 dark:text-white">

import { cs } from "cyclonewind";

cs.registerCustomClass('my-button', {        Hello NativeWind-style! 🌪️

function DynamicButton({ isActive }: { isActive: boolean }) {

  return (  backgroundColor: '#007AFF',      </Text>

    <Pressable style={cs(`

      px-4 py-2 rounded-lg font-semibold  padding: 16,

      ${isActive ? 'bg-blue-500' : 'bg-gray-200'}

    `)}>  borderRadius: 8,

      <Text style={cs(isActive ? 'text-white' : 'text-gray-700')}>

        Dynamic Button  alignItems: 'center',}

      </Text>

    </Pressable>});```

  );

}

``````

cs.registerCustomClass('my-text', {## 🎨 NEW: Custom Styles as className Utilities

## ✅ What Works

fontSize: 18,

**Standard React Native Components with className:**

- ✅ `View` with `className="flex-1 bg-blue-500"` fontWeight: 'bold',**✨ Register custom styles and use them just like built-in utilities!**

- ✅ `Text` with `className="text-lg font-bold"`

- ✅ `SafeAreaView` with `className="flex-1 bg-white"` color: '#333',

- ✅ `ScrollView` with `className="flex-1"` and `contentContainerClassName="p-4"`

- ✅ `Pressable` with `className="bg-blue-500 p-3 rounded"`});```tsx

- ✅ `Image` with `className="w-20 h-20 rounded-full"`

- ✅ All other React Native components// Step 1: Register your custom styles (do this once, typically at app startup)

**Features:**// Use them in className!import { cs } from "cyclonewind";

- ✅ 8,220+ Tailwind utilities

- ✅ Custom style registrationexport default function MyComponent() {

- ✅ Dark mode with `dark:` prefix

- ✅ Responsive breakpoints (`sm:`, `md:`, `lg:`) return (cs.registerCustomClass("primary-button", {

- ✅ Custom values with `className="w-[100] bg-[#ff0000]"`

  <View className="flex-1 p-4"> backgroundColor: "#007AFF",

## 📱 Perfect for React Native + Expo

      <View className="my-button">  padding: 16,

- ✅ Works with Expo Router (`<Stack />`, `<Slot />`, `<Tabs />`)

- ✅ Compatible with Metro bundler <Text className="my-text text-white">Custom Button!</Text> borderRadius: 8,

- ✅ Supports Fabric architecture

- ✅ No babel plugins required </View> alignItems: "center",

- ✅ No Metro configuration needed

- ✅ Works with EAS Build </View> justifyContent: "center",

## 🎯 Available Utilities );});

### Layout}

- **Flexbox**: `flex-1`, `flex-row`, `flex-col`, `justify-center`, `items-center`

- **Position**: `absolute`, `relative````cs.registerCustomClass("heading-text", {

### Spacing fontSize: 24,

- **Padding**: `p-0` to `p-24`, `px-4`, `py-2`, `p-[16]`

- **Margin**: `m-0` to `m-24`, `mx-4`, `my-2`, `m-[8]`## 🌓 Dark Mode fontWeight: "bold",

### Sizing color: "#333",

- **Width**: `w-full`, `w-1/2`, `w-[100]`

- **Height**: `h-full`, `h-1/2`, `h-[200]`Dark mode works automatically:});

### Typography

- **Size**: `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`

- **Weight**: `font-light`, `font-normal`, `font-bold````tsx// Step 2: Use them in className just like any other utility!

- **Align**: `text-left`, `text-center`, `text-right`

<View className="bg-white dark:bg-gray-900 p-4">export default function MyComponent() {

### Colors

- **Background**: `bg-red-500`, `bg-blue-600`, `bg-[#ff0000]` <Text className="text-black dark:text-white"> return (

- **Text**: `text-red-500`, `text-blue-600`, `text-[#ff0000]`

  Automatically adapts to system theme! <View className="flex-1 p-4">

### Borders & Effects

- **Radius**: `rounded`, `rounded-lg`, `rounded-full` </Text> <Text className="heading-text">Custom Heading Style!</Text>

- **Shadow**: `shadow-sm`, `shadow-md`, `shadow-lg`

</View> <View className="primary-button">

## 🔧 API Reference

`````<Text className="text-white">Custom Button Style!</Text>

| Function | Purpose | Example |

|----------|---------|---------|      </View>

| `import "cyclonewind/preset"` | Enable global className | One-time import |

| `registerCustomClass(name, styles)` | Register custom style | `registerCustomClass('btn', {...})` |## 📱 Responsive Design    </View>

| `cs(classes)` | Dynamic styling | `cs("flex-1 bg-blue-500")` |

| `useTheme()` | Theme control | `const { isDark, toggleTheme } = useTheme()` |  );



## 🎯 ExamplesUse breakpoints for different screen sizes:}



### Basic Layout with Standard Components````

```tsx

import { SafeAreaView, View, Text } from "react-native";````tsx



<SafeAreaView className="flex-1 bg-gray-50"><View className="p-2 md:p-4 lg:p-6">**🚀 Register multiple styles at once:**

  <View className="p-6">

    <Text className="text-2xl font-bold mb-4">Standard Components</Text>  <Text className="text-sm md:text-base lg:text-lg">

    <View className="bg-white p-4 rounded-lg shadow">

      <Text className="text-gray-700">Using React Native components!</Text>    Responsive text that grows with screen size!```tsx

    </View>

  </View>  </Text>cs.registerCustomClasses({

</SafeAreaView>

```</View>  card: {



### Navigation with Expo Router```    backgroundColor: "#fff",

```tsx

import { Pressable, Text } from "react-native";    borderRadius: 12,

import { Link } from "expo-router";

## 🛠️ Advanced Usage    padding: 20,

<Link href="/profile" asChild>

  <Pressable className="bg-blue-500 p-4 rounded-lg">    shadowColor: "#000",

    <Text className="text-white text-center font-semibold">

      Go to Profile### Manual cs() Function    shadowOpacity: 0.1,

    </Text>

  </Pressable>    shadowRadius: 8,

</Link>

```For dynamic styling, import `cs()`:    elevation: 3,



## 🚀 Migration from NativeWind  },



Same API, just change the import:```tsx  badge: {



```tsximport { cs } from "cyclonewind";    paddingHorizontal: 12,

// Before (NativeWind - requires Metro setup)

<View className="flex-1 bg-blue-500" />    paddingVertical: 6,



// After (CycloneWind - no Metro setup)export default function DynamicComponent() {    borderRadius: 20,

import "cyclonewind/preset"; // Add this once

<View className="flex-1 bg-blue-500" /> // Same API!  const [isActive, setIsActive] = useState(false);    backgroundColor: "#28a745",

`````

},

## 📄 License

return ( "badge-text": {

MIT License - feel free to use in any project!

    <View style={cs(`p-4 ${isActive ? "bg-green-500" : "bg-gray-300"}`)}>    fontSize: 12,

---

      <Text style={cs(`${isActive ? "text-white" : "text-black"}`)}>    fontWeight: "600",

**🌪️ CycloneWind: React Native styling made simple with standard components!**

        Dynamic styling with cs()    color: "#ffffff",

_Built with ❤️ for the React Native community_
</Text> },

    </View>});

);

}// Use them anywhere!

```<View className="card">

  <View className="badge">

### Theme Control    <Text className="badge-text">Success</Text>

  </View>

Control theme manually:</View>;

```

`````tsx

import { useTheme } from "cyclonewind";### Option 2: Manual Imports (When Needed)



export default function ThemeToggle() {**cs() and direct styles require explicit imports:**

  const { isDark, toggleTheme, setTheme } = useTheme();

```tsx

  return (import React from "react";

    <TouchableOpacity onPress={toggleTheme} className="bg-blue-500 p-3 rounded">import { View, Text } from "react-native";

      <Text className="text-white text-center">// Manual imports for cs() and $ when needed

        Switch to {isDark ? "Light" : "Dark"} Modeimport { cs, $ } from "cyclonewind";

      </Text>

    </TouchableOpacity>export default function MyComponent() {

  );  return (

}    <View className="flex-1 bg-white p-4">

```      {/* className works globally */}

      <Text className="text-xl font-bold mb-4">Global className</Text>

## 🎯 Available Utilities

      {/* cs() requires import for dynamic styling */}

### Layout      <View style={cs(`p-4 ${isActive ? "bg-green-500" : "bg-gray-300"}`)}>

- **Flexbox**: `flex-1`, `flex-row`, `flex-col`, `justify-center`, `items-center`        <Text style={cs("text-white")}>Dynamic with cs()</Text>

- **Position**: `absolute`, `relative`      </View>

- **Display**: `hidden`, `overflow-hidden`

      {/* $ requires import for direct styles */}

### Spacing      <View style={[$.bgBlue500(), $.p4(), $.rounded()]}>

- **Padding**: `p-0` to `p-24`, `px-4`, `py-2`, `p-[16]`        <Text style={[$.textWhite()]}>Direct styles with $</Text>

- **Margin**: `m-0` to `m-24`, `mx-4`, `my-2`, `m-[8]`      </View>

- **Gap**: `gap-1` to `gap-24`, `gap-x-4`, `gap-y-2`    </View>

  );

### Sizing}

- **Width**: `w-full`, `w-1/2`, `w-[100]````

- **Height**: `h-full`, `h-1/2`, `h-[200]`

## 🎯 How It Works

### Typography

- **Size**: `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-[14]`**CycloneWind provides the perfect NativeWind experience:**

- **Weight**: `font-light`, `font-normal`, `font-bold`

- **Align**: `text-left`, `text-center`, `text-right`### ✅ What Works Globally (No Imports)



### Colors- **className prop** - `<View className="flex-1 bg-blue-500" />`

- **Background**: `bg-red-500`, `bg-blue-600`, `bg-[#ff0000]`- **Built-in theme support** - `className="bg-white dark:bg-gray-900"`

- **Text**: `text-red-500`, `text-blue-600`, `text-[#ff0000]`- **All Tailwind utilities** - spacing, colors, layout, typography, etc.

- **All Tailwind colors**: red, blue, green, yellow, purple, pink, gray, etc.- **Responsive breakpoints** - `className="p-2 md:p-4 lg:p-6"`



### Borders & Effects### 🔧 What Needs Manual Import

- **Radius**: `rounded`, `rounded-lg`, `rounded-full`, `rounded-[8]`

- **Border**: `border`, `border-2`, `border-red-500`- **cs() function** - `import { cs } from 'cyclonewind'` for dynamic styling

- **Shadow**: `shadow-sm`, `shadow-md`, `shadow-lg`- **Direct styles** - `import { $ } from 'cyclonewind'` for performance

- **Theme control** - `import { ThemeProvider, useTheme } from 'cyclonewind'`

## 🔧 API Reference

### 🌟 Perfect for Migration

| Import | Usage | Purpose |

|--------|--------|---------|- **From NativeWind**: Just change imports and you're done!

| `"cyclonewind/preset"` | Import once in App.tsx | Enables className globally |- **From Tailwind CSS**: Same className syntax you know and love

| `{ cs }` | `cs("flex-1 bg-blue-500")` | Dynamic styling |- **From other libraries**: Gradual adoption with manual imports

| `{ ThemeProvider }` | `<ThemeProvider><App /></ThemeProvider>` | Theme support |

| `{ useTheme }` | `const { isDark, toggleTheme } = useTheme()` | Theme control |## 🔥 Recent Fixes & Improvements



## 🎯 Examples### ✅ Fixed Global className Support



- **Basic Usage**: Use className for static styles- **NativeWind-identical behavior**: className works globally without imports

- **Custom Styles**: Register and use your own utility classes- **Theme integration**: Automatic dark mode support in className

- **Dynamic Styling**: Use cs() for conditional styles- **Manual imports**: cs() and $ functions require explicit imports (as intended)

- **Dark Mode**: Use dark: prefixes for theme-aware styling

- **Responsive**: Use breakpoint prefixes for screen-size styling### ✅ Fixed Spacing & Gap Utilities



## 📄 License- **Correct gap behavior**: `gap-4` applies to container, spaces direct children

- **Fixed space utilities**: `space-x-4` and `space-y-4` use proper gap properties

MIT License - feel free to use in any project!- **No child interference**: Spacing affects target element only, not nested children



---### ✅ Enhanced Theme System



**🌪️ That's it! Start building beautiful React Native apps with CycloneWind.**- **Built-in theme**: className gets automatic theme support (no provider needed)
- **ThemeProvider sync**: cs() and $ functions sync with ThemeProvider
- **Real-time updates**: Theme changes apply instantly to all styling approaches

## 🚀 Updated Quick Examples

### ✨ Global className (NativeWind-style)

```tsx
// After: import 'cyclonewind/preset'
import React from "react";
import { View, Text, Pressable } from "react-native";

export default function MyComponent() {
  return (
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

      {/* Built-in theme support */}
      <Pressable className="bg-blue-500 dark:bg-blue-600 p-4 rounded-lg">
        <Text className="text-white text-center font-semibold">
          Theme Support Built-in!
        </Text>
      </Pressable>
    </View>
  );
}
```

### 🔧 Manual cs() and $ (When Needed)

```tsx
import React from "react";
import { View, Text } from "react-native";
import { cs, $ } from "cyclonewind"; // Manual imports

export default function DynamicComponent() {
  const [isActive, setIsActive] = useState(false);

  return (
    <View className="flex-1 p-4">
      {/* Static styling with className */}
      <Text className="text-lg font-bold mb-4">Mixed Approaches</Text>

      {/* Dynamic styling with cs() */}
      <View
        style={cs(`p-4 rounded ${isActive ? "bg-green-500" : "bg-gray-300"}`)}
      >
        <Text style={cs(`${isActive ? "text-white" : "text-gray-700"}`)}>
          Dynamic with cs() function
        </Text>
      </View>

      {/* Performance styling with $ */}
      <View style={[$.mt4(), $.p4(), $.bgBlue500(), $.rounded()]}>
        <Text style={[$.textWhite(), $.fontBold()]}>
          Direct styles for performance
        </Text>
      </View>
    </View>
  );
}
```

export default function App() {
return (
<ThemeProvider>
<MyApp />
</ThemeProvider>
);
}

````

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
import { cs } from "cyclonewind";

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
import { $ } from "cyclonewind";

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
import { getLayoutStyles, getSpacingStyles, getColorStyles } from "cyclonewind";

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
import { setupCycloneStyles } from "cyclonewind/global";

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
import { addUtilities } from "cyclonewind/global";

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
import "cyclonewind/preset";
import { ThemeProvider, setupCycloneStyles } from "cyclonewind";

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
import { useTheme } from "cyclonewind";

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

| Feature               | CycloneWind          | NativeWind        | Tailwind RN |
| --------------------- | -------------------- | ----------------- | ----------- |
| **className Global**  | ✅ Perfect (like NW) | ✅ Yes            | ❌ No       |
| **Utilities**         | ✅ 8,220+            | ✅ Most           | ⚠️ Limited  |
| **Manual cs()/$ API** | ✅ Available         | ❌ No             | ✅ Yes      |
| **Built-in Theme**    | ✅ className Auto    | ⚠️ Requires setup | ❌ Manual   |
| **Fixed Gap/Spacing** | ✅ Proper behavior   | ✅ Good           | ⚠️ Issues   |
| **Arbitrary Values**  | ✅ Pixel-default     | ✅ Yes            | ⚠️ Basic    |
| **Dark Mode**         | ✅ Built-in          | ✅ Yes            | ❌ Manual   |
| **Responsive**        | ✅ Built-in          | ✅ Yes            | ❌ Manual   |
| **TypeScript**        | ✅ Perfect           | ✅ Good           | ⚠️ Basic    |
| **Migration**         | ✅ Drop-in replace   | ⚠️ Config needed  | ⚠️ Partial  |

## 🔧 Troubleshooting

### className Not Working?

**Problem**: `className` prop not converting to styles

```tsx
// ❌ Won't work without preset
<View className="flex-1 bg-blue-500" />
```

**Solution**: Import the preset once in your root file

```tsx
// ✅ Add this to App.tsx or _layout.tsx
import "cyclonewind/preset";
```

### cs() or $ Not Available?

**Problem**: `cs is not defined` or `$ is not defined`

```tsx
// ❌ cs() and $ need manual imports
const style = cs("bg-blue-500"); // Error!
```

**Solution**: Import explicitly when using cs() or $

```tsx
// ✅ Manual import required
import { cs, $ } from "cyclonewind";
const style = cs("bg-blue-500");
```

### Gap/Spacing Not Working on Older RN?

**Problem**: `gap`, `columnGap`, `rowGap` not supported

```tsx
// ❌ Might not work on React Native < 0.71
<View className="gap-4" />
```

**Solution**: Use padding/margin alternatives or upgrade RN

```tsx
// ✅ Alternative for older versions
<View className="space-y-4" /> // Uses padding
```

### Theme Not Updating?

**Problem**: Dark mode changes not applying

**Solution**: Wrap app with ThemeProvider for cs() and $

```tsx
// ✅ Required for theme sync with cs() and $
import { ThemeProvider } from "cyclonewind";

<ThemeProvider>
  <App />
</ThemeProvider>;
```

## 🔄 Migration from NativeWind

CycloneWind is 100% compatible with NativeWind! Migrate easily:

**Before (NativeWind):**

```tsx
<View className="flex-1 bg-white p-4">
  <Text className="text-lg font-bold">Hello</Text>
</View>
```

**After (CycloneWind):**

```tsx
// Option 1: Global setup (recommended)
import "cyclonewind/preset"; // Once in root

<View style={cs("flex-1 bg-white p-4")}>
  <Text style={cs("text-lg font-bold")}>Hello</Text>
</View>;

// Option 2: Manual import
import { cs } from "cyclonewind";

<View style={cs("flex-1 bg-white p-4")}>
  <Text style={cs("text-lg font-bold")}>Hello</Text>
</View>;
```

## 🔧 Installation & Setup

### Basic Setup

```bash
npm install cyclonewind
```

### Global Setup (Recommended)

```tsx
// App.tsx or your root layout file
import "cyclonewind/preset"; // This makes cs() available globally
import { ThemeProvider } from "cyclonewind";

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
import { setupCycloneStyles, ThemeProvider } from "cyclonewind";
import "cyclonewind/preset";

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
git clone https://github.com/Cyclone012/cyclonewind.git
cd cyclonewind
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

- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/Cyclone012/cyclonewind/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/Cyclone012/cyclonewind/discussions)
- 📧 **Email**: cyclone@example.com

---

<div align="center">

**🌪️ Made with ❤️ for the React Native community**

[⭐ Star on GitHub](https://github.com/Cyclone012/cyclonewind) • [📦 View on npm](https://www.npmjs.com/package/cyclonewind) • [📚 Documentation](docs/)

</div>
`````
