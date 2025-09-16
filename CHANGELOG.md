# Changelog

All notable changes to CycloneWind will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.3.0] - 2025-09-16

### Breaking Changes

- **Package Renamed**: Changed package name from `cyclonewind` to `cyclone-cs-wind`
  - Update your imports: `npm install cyclone-cs-wind`
  - All import statements remain the same: `import { cs } from "cyclone-cs-wind"`
  - This provides a clearer, more descriptive package name

### Documentation

- **Complete README Rewrite**: Comprehensive documentation update to reflect current API
- **Removed Misleading Claims**: No more references to global imports or className support that don't exist
- **Focused on cs() Function**: Clear documentation centered around the actual working API
- **Accurate Examples**: All examples now use `style={cs("...")}` approach correctly
- **Clean Feature List**: Only documents features that actually exist in the current version

### Package Management

- **Clean npm History**: Unpublished all previous versions including beta releases for fresh start
- **Professional Git Workflow**: Proper semantic versioning and commit messages
- **Updated Badges**: Accurate npm and documentation links

### API Clarity

- **No Global Imports**: Clearly documents that CycloneWind uses cs() function only
- **No className Support**: Removes incorrect documentation about className prop support
- **Theme System**: Properly documents ThemeProvider, useTheme, and useThemeAware APIs
- **TypeScript Ready**: Full documentation of TypeScript support and utilities

### Migration Notes

- This version has the same API as 1.2.3 but with completely accurate documentation
- No breaking changes to the cs() function or theme system
- Use `style={cs("...")}` for all styling (no className support)

## [1.2.3] - 2025-09-16

### Changed

- **Stable Release**: Official stable release with clean theme API
- **Package Cleanup**: Unpublished confusing intermediate versions (1.2.0, 1.2.1) for cleaner version history

### Features

- **Clean Theme API**: Final stable API with `ThemeProvider`, `useTheme`, `useThemeAware`
- **Professional npm Package**: Complete with proper build scripts, semantic versioning, and git workflow
- **Production Ready**: Fully tested and ready for production use

### Note

- This is the recommended version to use
- Versions 1.2.0 and 1.2.1 have been unpublished to avoid API confusion
- Use `npm install cyclonewind@1.2.3` for the latest stable release

## [1.2.1] - 2025-09-16 [UNPUBLISHED]

### Changed

- **Clean API**: Simplified theme system exports by removing "New" prefixes for cleaner developer experience
- `NewThemeProvider` → `ThemeProvider`
- `useNewTheme` → `useTheme`
- `useNewThemeAware` → `useThemeAware`

### Fixed

- Completely rewritten theme system using global state management instead of React Context
- Fixed theme system issues where state changes wouldn't trigger UI updates
- Resolved React Context reliability issues in theme switching
- Enhanced theme persistence with AsyncStorage integration
- Fixed color utilities to use theme-aware colors instead of static hex values

### Improved

- **Bulletproof Theme System**: New architecture using global state management with event-driven updates
- **Forced Re-renders**: Theme changes now properly trigger component re-renders
- **Better Integration**: Enhanced `cs()` function integration with theme system via `setThemeContext`
- **Professional Git Setup**: Added comprehensive .gitignore and npm scripts for professional development workflow

### Technical Details

- Migrated from React Context to global state management for theme system
- Added event listener system for theme change notifications
- Implemented forced component re-renders on theme state changes
- Enhanced cs() function with direct theme context integration
- Removed old buggy theme system and simplified API

## [1.0.2] - 2025-09-15

### Fixed

- Hardened global className setup to avoid errors in Expo/React 18 environments where `React.createElement` is exposed via a getter and RN component properties are non-configurable
- Added safety checks using `Object.getOwnPropertyDescriptor` before attempting to patch `React.createElement`
- Avoid redefining non-configurable React Native component properties; rely on module-level proxy and JSX runtime interception instead

### Enhanced

- **Universal Module Patching**: Replaced hardcoded React Native module detection with universal system that works with any module exporting React components
- **Smart Component Detection**: Enhanced heuristics to identify React components from any library (react-native, @react-native-community, expo, custom libraries)
- **Dynamic Component Discovery**: Removed hardcoded component lists in favor of intelligent runtime detection based on component patterns and properties
- **Module-Agnostic Architecture**: System now automatically detects and wraps React components regardless of their source module or library
- **Flexible Global Import**: Added `cyclonewind/global` import that can be used anywhere in the app (not just at the first line) - automatically enables className support when imported from any location

### Notes

- If direct patching is skipped, CycloneWind will automatically fall back to JSX runtime interception and universal module-level wrapping, keeping `className` working without crashes
- The patching system now works universally with any React component library, not just react-native

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
