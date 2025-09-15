# Changelog

All notable changes to CycloneWind will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.1] - 2025-09-15

### Fixed

- Fixed React import inconsistency in `reactNativeUtils.ts` - standardized to namespace imports across all files
- Improved TypeScript compilation compatibility by ensuring consistent React module usage
- Enhanced global className system reliability for all React Native components
- Resolved theme system TypeScript interface completeness

### Changed

- Standardized React imports to use `import * as React from "react"` pattern throughout codebase
- Updated theme system to include complete theme object with colors, spacing, borderRadius, fontSize
- Improved TypeScript configuration with proper ES2015+ library support

### Technical Details

- Fixed `setupClassName` function compilation issues
- Enhanced `ThemeContextType` interface with proper theme object structure
- Resolved tsconfig.json ES library compatibility issues
- Completed comprehensive code audit with zero critical issues remaining

## [1.0.0] - 2025-09-15

### Added

- Initial release of CycloneWind
- Complete Tailwind CSS implementation for React Native
- NativeWind-compatible className support with automatic global setup
- Comprehensive theme system with dark mode support
- Responsive breakpoint utilities (sm, md, lg, xl, 2xl)
- Dark mode support with `dark:` prefix
- Arbitrary value support with bracket notation `[value]`
- Color opacity support with slash notation `color/opacity`
- Complete CSS unit support (px, rem, em, vh, vw, etc.)
- React Native specific utilities and components
- TypeScript support with full type definitions
- Zero Metro configuration required
- AsyncStorage integration for theme persistence (optional)
- Comprehensive documentation and examples

### Features

- 🎨 **Global className Support**: Works on ALL React Native components
- 🌓 **Theme System**: Complete light/dark theme with React Context
- 📱 **Responsive Design**: Mobile-first responsive utilities
- 🎯 **TypeScript Ready**: Full TypeScript support with proper types
- ⚡ **Performance Optimized**: Style caching and memoization
- 🔧 **Zero Config**: Works out of the box with `import 'cyclonewind/preset'`
- 🎭 **NativeWind Compatible**: Drop-in replacement for NativeWind
- 🚀 **Production Ready**: Comprehensive error handling and fallbacks

### Core APIs

- `cs()` - Core style transformation function
- `ThemeProvider` - Theme context provider
- `useTheme()` - Theme hook for components
- `setupClassName()` - Manual className setup (auto-called by preset)
- `styled()` - Styled component creation
- `cssInterop()` - CSS interop utilities

### Utilities

- Layout utilities (flex, position, display)
- Spacing utilities (margin, padding)
- Typography utilities (font size, weight, line height)
- Color utilities (background, text, border colors)
- Border utilities (radius, width, style)
- Sizing utilities (width, height, min/max dimensions)
- Transform utilities (scale, rotate, translate)
- Effects utilities (opacity, shadow)
- Responsive utilities with breakpoint prefixes
- Dark mode utilities with dark: prefix
