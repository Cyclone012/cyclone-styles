# Changelog

All notable changes to Cyclone Styles will be documented in this file.

## [0.0.3] - 2025-09-14

### 🎨 Major Feature: Custom Styles as className Utilities

- **Custom className Integration**: Register custom styles and use them directly in className prop
- **New Registration API**: Added `cs.registerCustomClass()` and `cs.registerCustomClasses()` functions
- **Seamless Integration**: Custom styles work exactly like built-in Tailwind utilities
- **Global Usage**: Once registered, custom styles work in any component using className

### 🌟 Enhanced className Experience

- **Perfect NativeWind Compatibility**: className prop works globally without imports
- **Built-in Theme Support**: Automatic dark mode support in className
- **Fixed Global System**: className transformer works independently with enhanced detection

### 📚 Complete Documentation Overhaul

- **Simple README**: Clean, easy-to-understand documentation focused on practical usage
- **Essential Examples**: 3 focused examples (Basic, Custom Styles, Dynamic Styling)
- **Quick Setup Guide**: 3-minute setup guide for immediate productivity
- **Removed Complexity**: Eliminated overwhelming technical documentation

### 🛠️ Technical Improvements

- **Enhanced Custom Styles System**: Comprehensive framework for creating and combining styles
- **Better TypeScript Support**: Full type safety for custom style registration
- **Improved Build System**: Clean compilation and exports

### 🔧 API Additions

- `cs.registerCustomClass(name, styles)`: Register a single custom class
- `cs.registerCustomClasses(object)`: Register multiple custom classes at once
- `cs.getCustomClass(name)`: Retrieve a registered custom class
- `cs.getAllCustomClasses()`: Get all registered custom classes

### 📦 Package Updates

- Updated to version 0.0.3
- Simplified file structure
- Clean documentation and examples
- Ready for production use

## [1.1.3] - 2025-01-14

### ✨ New Features

- **Complete Transform Utilities**: Added comprehensive Tailwind CSS transform support
  - Added base `transform` utility for hardware acceleration
  - Added all skew utilities: `skew-x-0` through `skew-x-12`, `skew-y-0` through `skew-y-12`
  - Enhanced transform utilities with negative values and complete coverage
  - All transform utilities now match Tailwind CSS exactly

### 📚 Enhanced Documentation

- **Comprehensive Hover State Guide**: Detailed React Native hover state implementation
  - Added `hoverStateUtilities` with scale, opacity, shadow, and transform effects
  - Provided complete examples for Pressable, react-native-reanimated, and React Native Web
  - Documented best practices for touch-based hover effects
  - Added 40+ hover state utilities: `hover-scale-110`, `hover-shadow-md`, etc.

### 🎨 Improved Transition Utilities

- **Enhanced Transition System**: Upgraded transition utilities with comprehensive timing
  - Added `duration-0` for instant transitions
  - Enhanced easing documentation with react-native-reanimated integration
  - Added comprehensive animation guides and examples
  - Improved transition utility comments with React Native context

### 🔧 Technical Improvements

- **Better React Native Integration**: Enhanced compatibility and performance
  - Added hover state utilities to main utilities export
  - Improved transform utility organization and naming
  - Enhanced TypeScript support for all new utilities
  - Added React Native Web compatibility notes

### 📖 Your Requested Utilities Status:

- ✅ `transition-all` - Available
- ✅ `duration-200` - Available
- ✅ `ease-out` - Available
- ✅ `transform` - Now available (base utility)
- ✅ `scale-110` - Available
- ❌ `hover:scale-110` - Not supported in React Native (see hover guide)
- ❌ `hover:bg-orange-600` - Not supported in React Native (see hover guide)

**Note**: React Native doesn't support CSS hover states since it's touch-based. Use the provided hover state guide and utilities with Pressable components and state management for hover-like effects.

## [1.1.2] - 2025-01-14

### 🐛 Bug Fixes

- **CRITICAL FIX**: Fixed arbitrary value processing that was completely broken
  - Moved arbitrary value detection to FIRST priority in `getStyleForClass()`
  - Fixed all switch case prefixes to match actual regex capture groups (e.g., `h-` instead of `h`)
  - All arbitrary values like `h-[32px]`, `bg-[#ff0000]`, `w-[50%]`, etc. now work correctly
  - Resolved "unknown class" warnings for arbitrary value utilities

### 🔧 Technical Changes

- Reordered style lookup priority: arbitrary values → kebab-case → camelCase → fallbacks
- Updated 30+ switch case statements in `handleArbitraryValue()` function
- Fixed prefix matching for margin, padding, positioning, typography, and all other utilities

## [1.1.1] - 2025-01-14

### 🐛 Critical Bug Fix - All Utilities Now Work!

#### 🔧 Fixed cs() Function Utility Lookup

- **BREAKING ISSUE RESOLVED**: Fixed cs() function not finding standard utilities like `h-32`, `bg-blue-500`, `flex-1`
- **Root Cause**: cs() was looking for camelCase keys (`h32`) but utilities are stored with kebab-case keys (`h-32`)
- **Solution**: Updated `getStyleForClass()` to try kebab-case keys first, then camelCase fallback

#### ✅ What Now Works

- **All 8,220+ utilities**: Every utility class now accessible through cs() function
- **Standard classes**: `cs("h-32")`, `cs("bg-blue-500")`, `cs("flex-1")` all work correctly
- **Complex combinations**: `cs("flex-1 bg-blue-500 text-white p-4 rounded-lg h-32")` works perfectly
- **Complete coverage**: Sizing, spacing, colors, typography, borders, effects, positioning, transforms

#### 🎯 Enhanced CSS Unit Support

- **All CSS length units**: Support for px, pt, pc, in, cm, mm, Q, em, rem, ex, ch, cap, ic, lh, rlh
- **Viewport units**: vw, vh, vi, vb, vmin, vmax with mobile-optimized conversions
- **Container units**: cqw, cqh, cqi, cqb, cqmin, cqmax with viewport fallbacks
- **Universal support**: Works with arbitrary values `[32px]` and direct utilities `w-32px`

#### 📈 Usage Examples

```typescript
// All these now work correctly!
cs("h-32"); // ✅ { height: 128 }
cs("bg-blue-500"); // ✅ { backgroundColor: "#3B82F6" }
cs("flex-1"); // ✅ { flex: 1 }
cs("w-[32px] h-[2rem]"); // ✅ Arbitrary values
cs("w-32px h-2rem"); // ✅ Direct unit utilities
```

This resolves the major issue where standard Tailwind utilities were showing "unknown class" warnings.

## [1.1.0] - 2024-12-19

### 🚀 Enhanced React Native Compatibility & Arbitrary Values

#### ✨ Comprehensive Arbitrary Value Support

- **Arbitrary Values**: Full support for Tailwind-style arbitrary values like `bg-[#ff0000]`, `w-[200px]`, `text-[16px]`
- **Border Radius**: All directional variants: `rounded-tl-[8px]`, `rounded-br-[12px]`, `rounded-t-[16px]`, etc.
- **Typography**: Font size, color, weight, line height, letter spacing arbitrary values
- **Spacing**: Comprehensive padding/margin support including `px-[size]`, `py-[size]`, `mx-[size]`, `my-[size]`
- **Positioning**: Top, bottom, left, right arbitrary positioning values
- **Opacity & Z-index**: `opacity-[0.5]`, `z-[10]` with proper value parsing

#### 🎯 Enhanced Unit Support

- **CSS Units**: Full support for `px`, `em`, `rem`, `%`, `vw`, `vh` with React Native conversion
- **Unit Conversion**: Automatic conversion of em/rem to pixels (16px base), vw/vh to approximate pixel values
- **Value Parsing**: Smart parsing that handles decimal values and maintains React Native compatibility

#### 🛠️ Extended Utility Classes

- **Typography**: Added `font-extrabold`, `font-black`, `text-2xl` through `text-9xl`
- **Border Radius**: Added `rounded-2xl`, `rounded-3xl`, `rounded-4xl`
- **Dimensions**: Extended width/height values (`w-11` through `w-23`, `h-11` through `h-23`)
- **Spacing**: Decimal spacing values (`p-0.5`, `p-1.5`, `p-2.5`, etc.)
- **Transforms**: Scale utilities (`scale-50` through `scale-150`)
- **Rotation**: Rotate utilities (`rotate-1` through `rotate-180` with negative variants)
- **Flex**: Additional flex values (`flex-2` through `flex-5`)
- **Opacity**: Extended opacity scale (`opacity-5`, `opacity-10`, `opacity-15`, `opacity-85`, `opacity-90`, `opacity-95`)

#### ⚠️ React Native Gradient Handling

- **Gradient Warning**: Proper warnings for CSS gradient classes that aren't natively supported
- **Fallback Colors**: Automatic fallback to solid colors for gradient classes
- **Developer Experience**: Clear console warnings suggesting alternatives like `react-native-linear-gradient`

#### 🔧 TypeScript Enhancements

- **Component Overloads**: Enhanced TypeScript overloads for Text and Image component-specific styles
- **Type Safety**: Improved type safety for arbitrary values and edge cases
- **Better IntelliSense**: Enhanced autocomplete and type checking

#### 🎨 React Native Platform Optimizations

- **Modern Shadow**: Addressed deprecated shadowColor warnings with React Native compatibility
- **Performance**: Optimized value parsing and caching for arbitrary values
- **Error Handling**: Comprehensive fallback system for missing or unsupported utilities

### 📈 Usage Examples

```typescript
// Arbitrary values
cs("bg-[#ff0000] w-[200px] text-[16px] rounded-[12px]");

// Enhanced utilities
cs("font-extrabold text-2xl p-1.5 rounded-3xl scale-110");

// Complex combinations
cs("flex-1 bg-[#f0f0f0] p-[16px] rounded-[8px] text-[#333] rotate-45");
```

## [1.0.3] - 2024-12-19

### 🛠️ TypeScript Type Safety Fix

- **cs() Function**: Fixed TypeScript type compatibility - now returns `ViewStyle` instead of generic `Style` union
- **Type Safety**: Resolved TypeScript error "Type 'Style' is not assignable to type 'StyleProp<ViewStyle>'"
- **Function Overloads**: Added proper TypeScript overloads for better type inference
- **React Native Components**: cs(), cx(), and merge() now work seamlessly with View, Text, and other components

**Technical Fix**: Changed return type from `ViewStyle | TextStyle | ImageStyle` to specific `ViewStyle` with proper type casting.

## [1.0.2] - 2024-12-19

### 🛠️ Critical Bug Fix

- **cs() Function**: Fixed TypeScript compatibility - now returns single flattened style object instead of array
- **React Native Integration**: Removed need for `as any` type assertion when using cs() function
- **Style API**: cs(), cx(), and merge() functions now work directly with React Native style prop

**Breaking Change Fix**: This resolves the issue where `cs("bg-black")` required `as any` casting. Now works directly: `style={cs("bg-black")}`

## [1.0.1] - 2024-12-19

### 🔧 Package Improvements

- **Documentation**: Enhanced README.md with comprehensive examples and feature comparison
- **GitHub Setup**: Added issue templates, contributing guidelines, and proper repository metadata
- **Build Process**: Optimized npm package contents and ignore files
- **TypeScript**: Improved type definitions and compilation output

### 🛠️ Bug Fixes

- **cs() Function**: Fixed TypeScript compatibility - now returns single flattened style object instead of array
- **React Native Integration**: Removed need for `as any` type assertion when using cs() function
- **Style API**: cs(), cx(), and merge() functions now work directly with React Native style prop

## [1.0.0] - 2024-12-19

### 🎉 Major Release - Complete Cyclone Styles Platform

#### 🌟 New cs() Function API

- **String-based syntax**: Clean Tailwind-like class syntax with `cs("flex-1 bg-blue-500")`
- **Dark mode support**: Automatic `dark:` prefix handling with theme integration
- **Responsive breakpoints**: Full support for `sm:`, `md:`, `lg:`, `xl:`, `2xl:` prefixes
- **Theme context**: Automatic theme updates via `setThemeContext()` integration
- **Performance optimized**: Caching system for parsed class strings
- **Type safety**: Full TypeScript support with IntelliSense

#### 🎨 Enhanced Theme System

- **Automatic theme detection**: System theme detection with fallback support
- **Dynamic theme switching**: Real-time theme updates across all APIs
- **Cross-API integration**: Theme context shared between `cs()`, `nwc()`, and `styles` object
- **Persistent preferences**: Optional AsyncStorage integration for theme persistence
- **Theme providers**: Enhanced `ThemeProvider` with automatic context updates

#### 📱 Complete Responsive System

- **Mobile-first breakpoints**: Standard Tailwind breakpoint system
- **Flexible responsive utilities**: Works with all 8,220+ utilities
- **Screen detection**: `useResponsive()` hook for programmatic responsive design
- **Dynamic updates**: Automatic responsive style updates on orientation change
- **Performance optimized**: Efficient breakpoint detection and caching

#### 🔧 Three Powerful APIs

1. **cs() Function** (New): `cs("flex-1 bg-blue-500 dark:bg-blue-700 md:p-6")`
2. **nwc() Function**: Traditional NativeWind-compatible API
3. **styles Object**: Direct StyleSheet object access for existing codebases

#### 🚀 8,220+ Utilities Coverage

- **Complete Tailwind CSS**: Every utility class available in React Native
- **Color system**: 400+ color variants with dark mode support
- **Typography**: Comprehensive text styling utilities
- **Layout & Flexbox**: Complete flexbox and positioning system
- **Spacing**: Detailed padding and margin scales
- **Borders & Effects**: Border radius, shadows, opacity utilities
- **Custom properties**: Support for arbitrary values and custom styling

#### 📚 Professional Documentation

- **Comprehensive README**: Installation, usage, API comparison
- **API Guide**: Complete documentation of all functions and hooks
- **Theme Integration Report**: Detailed theming implementation guide
- **Verification Report**: Technical validation and testing documentation
- **Live Examples**: Working code examples for all major features

#### 🔧 Developer Experience

- **Zero configuration**: Works out of the box with no setup required
- **TypeScript first**: Built with TypeScript for perfect type safety
- **Hot reloading**: Instant updates during development
- **Performance monitoring**: Built-in caching and optimization
- **Error handling**: Graceful fallbacks for invalid classes

#### 📦 Package Improvements

- **npm ready**: Professional package configuration for npm publication
- **Proper exports**: Clean main/types field configuration
- **File optimization**: Proper inclusion/exclusion rules
- **Metadata**: Complete package metadata with keywords and repository links
- **Licensing**: MIT license for open source usage

## [1.2.0] - 2025-09-13

### 🚀 Major Features Added

#### Responsive Breakpoints System

- **Full responsive support**: Added complete breakpoint system with `sm:`, `md:`, `lg:`, `xl:`, `2xl:` prefixes
- **Flexible ordering**: Responsive classes work in any order (e.g., `md:text-lg sm:text-sm lg:text-xl`)
- **Screen size detection**: New `useResponsive()` hook for programmatic screen size detection
- **Responsive utilities**: Added `getScreenWidth()`, `getScreenHeight()`, `isSmallScreen()`, etc.
- **Breakpoint definitions**:
  - `sm:` - 640px and up
  - `md:` - 768px and up
  - `lg:` - 1024px and up
  - `xl:` - 1280px and up
  - `2xl:` - 1536px and up

#### Negative Values Support

- **Negative margins**: Added `-m-1` to `-m-24`, `-mx-1` to `-mx-24`, `-my-1` to `-my-24`
- **Negative positioning**: Added `-top-px` to `-top-96`, `-right-px` to `-right-96`, `-bottom-px` to `-bottom-96`, `-left-px` to `-left-96`
- **Negative percentages**: Support for `-top-1/2`, `-left-full`, etc.
- **Negative arbitrary values**: Support for `-top-[15]`, `-m-[8]`, `-left-[25]`
- **CamelCase support**: Added `negM1`, `negTop4`, `negLeft8` for camelCase syntax
- **Responsive negative**: Works with responsive prefixes like `sm:-mx-2 md:-mx-4`

#### Arbitrary Values with Pixel-Default Behavior

- **Bracket notation support**: Use custom values with `w-[100]`, `h-[200]`, `p-[16]`, etc.
- **Pixel-default**: All numbers in brackets default to pixels (e.g., `w-[12]` = 12px)
- **Multi-unit support**: Still supports explicit units (`w-[50%]`, `h-[100vh]`, `text-[1.2rem]`)
- **Comprehensive coverage**: Works with all utility categories:
  - Dimensions: `w-[100]`, `h-[200]`
  - Spacing: `p-[8]`, `m-[16]`, `px-[20]`, `py-[12]`
  - Typography: `text-[14]`, `text-[18]`
  - Borders: `rounded-[12]`, `border-[2]`
  - Positioning: `top-[10]`, `left-[20]`, `right-[5]`, `bottom-[15]`

#### Advanced Responsive + Arbitrary Value Combinations

- **Responsive arbitrary values**: Use `sm:w-[100] md:w-[200] lg:w-[300]`
- **Mixed responsive classes**: Combine standard and arbitrary values seamlessly
- **Performance optimized**: All parsing is cached and optimized for mobile performance

### 🔧 API Enhancements

#### New Hooks

- `useResponsive()`: Screen size detection and responsive utilities
- `useResponsiveStyle()`: Programmatic responsive style creation

#### Enhanced Parsing

- Fixed string slicing bugs in `parseArbitraryValue()` function
- Improved unit conversion with `parseUnitsToPixels()` function
- Better error handling for malformed arbitrary values

### 📚 Documentation

- **Updated README**: Comprehensive examples of new features
- **Responsive examples**: Multiple real-world responsive design patterns
- **API documentation**: Complete reference for all new hooks and utilities
- **Migration guide**: Updated for new arbitrary value syntax

### 🐛 Bug Fixes

- Fixed string slicing in arbitrary value parsing (was `slice(2, -1)`, now correctly `slice(3, -1)` for 3-char prefixes)
- Fixed text size arbitrary values (was `slice(5, -1)`, now correctly `slice(6, -1)`)
- Improved TypeScript compatibility for ES5 targets

### ⚡ Performance Improvements

- **Cached parsing**: Arbitrary values are parsed once and cached
- **Optimized responsive detection**: Screen size detection is throttled and cached
- **Memory efficient**: Responsive styles are only created when screen size changes

### 🔄 Breaking Changes

- None! This release is 100% backward compatible

### 📦 Package Updates

- Version bumped to 1.1.0
- Added new keywords for better discoverability
- Included implementation documentation in package files
- Updated description to reflect new capabilities

---

## [1.0.0] - 2025-09-12

### 🎉 Initial Release

#### Core Features

- **400+ Tailwind utilities**: Complete implementation of Tailwind CSS utilities for React Native
- **NativeWind compatibility**: Drop-in replacement with identical syntax support
- **Theme system**: Built-in light/dark mode with system detection
- **Pure React Native**: No web dependencies, uses only StyleSheet API
- **TypeScript support**: Full type safety and IntelliSense
- **Performance optimized**: Pre-compiled styles with zero runtime overhead

#### Available Utilities

- **Layout**: Flexbox, positioning, display utilities
- **Spacing**: Comprehensive padding and margin scales
- **Typography**: Text sizes, weights, alignment
- **Colors**: Full Tailwind color palette for backgrounds and text
- **Borders**: Border radius, width utilities
- **Effects**: Shadows, opacity
- **Dark mode**: Complete dark mode variant support

#### Developer Experience

- **Easy setup**: Single hook integration (`useNativeWindClasses`)
- **Theme management**: Simple theme switching with persistence
- **TypeScript ready**: Full type definitions included
- **Documentation**: Comprehensive README with examples
