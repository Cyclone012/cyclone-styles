# Global Configuration & NativeWind-Style Setup

Cyclone Styles now supports global configuration just like NativeWind, allowing you to customize colors, spacing, and add custom utilities.

## Quick Setup (Like NativeWind)

### Option 1: Global Import with Auto-Setup

```typescript
// In your App.tsx or index.ts
import "cyclone-styles/preset"; // Auto-configures with defaults

// Now use cs() anywhere without imports
import { View, Text } from "react-native";

export default function App() {
  return (
    <View style={cs("flex-1 bg-white p-4")}>
      <Text style={cs("text-lg font-bold")}>Hello World!</Text>
    </View>
  );
}
```

### Option 2: Manual Setup with Custom Configuration

```typescript
// In your App.tsx
import { setupCycloneStyles, ThemeProvider, cs } from "cyclone-styles";

// Configure once at app startup
setupCycloneStyles({
  colors: {
    primary: "#007AFF",
    secondary: "#5856D6",
  },
  spacing: {
    "18": 72,
    "22": 88,
  },
  extend: {
    colors: {
      brand: {
        50: "#f0f9ff",
        500: "#0ea5e9",
        900: "#0c4a6e",
      },
    },
  },
});

export default function App() {
  return (
    <ThemeProvider>
      <View style={cs("flex-1 bg-brand-50 p-18")}>
        <Text style={cs("text-brand-900 text-lg")}>Custom Theme!</Text>
      </View>
    </ThemeProvider>
  );
}
```

## Configuration Options

### Colors

```typescript
setupCycloneStyles({
  colors: {
    // Override default colors
    primary: "#007AFF",

    // Add color scales (like Tailwind)
    brand: {
      50: "#f0f9ff",
      100: "#e0f2fe",
      500: "#0ea5e9",
      900: "#0c4a6e",
    },
  },

  extend: {
    colors: {
      // Extend without overriding defaults
      success: "#10B981",
      warning: "#F59E0B",
    },
  },
});

// Usage:
// cs("bg-primary text-white")
// cs("bg-brand-500 text-brand-50")
// cs("text-success bg-warning/20")
```

### Spacing & Sizing

```typescript
setupCycloneStyles({
  spacing: {
    // Override default spacing scale
    "0": 0,
    "1": 4,
    "2": 8,
    // ... custom values
    "18": 72,
    "22": 88,
  },

  extend: {
    spacing: {
      // Add without overriding
      "13": 52,
      "15": 60,
    },
  },
});

// Usage:
// cs("p-18 m-22") // Uses custom spacing
// cs("w-15 h-13") // Uses extended spacing
```

### Font Sizes

```typescript
setupCycloneStyles({
  fontSize: {
    tiny: 10,
    xs: 12,
    sm: 14,
    base: 16,
    huge: 80,
  },
});

// Usage:
// cs("text-tiny") // 10px
// cs("text-huge") // 80px
```

### Custom Utilities

```typescript
import { addUtilities } from "cyclone-styles";

// Add completely custom classes
addUtilities({
  "card-shadow": {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  "gradient-bg": {
    backgroundColor: "#007AFF",
    // Add your custom styles
  },

  "btn-primary": {
    backgroundColor: "#007AFF",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
});

// Usage:
// cs("card-shadow bg-white p-4")
// cs("btn-primary")
```

## Advanced Configuration

### Complete Configuration Example

```typescript
import { configure } from "cyclone-styles";

configure({
  colors: {
    // Full color palette
    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      500: "#6b7280",
      900: "#111827",
    },

    // Brand colors
    primary: "#007AFF",
    secondary: "#5856D6",
  },

  spacing: {
    0: 0,
    1: 4,
    2: 8,
    4: 16,
    // ... up to any value you need
    96: 384,
  },

  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    "2xl": 24,
    "3xl": 30,
  },

  borderRadius: {
    none: 0,
    sm: 2,
    DEFAULT: 4,
    md: 6,
    lg: 8,
    xl: 12,
    full: 9999,
  },

  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
  },

  extend: {
    colors: {
      // Extend with additional colors
      success: "#10B981",
      warning: "#F59E0B",
      error: "#EF4444",
    },

    spacing: {
      "18": 72,
      "88": 352,
    },

    utilities: {
      // Custom utility classes
      "special-shadow": {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 8,
      },
    },
  },
});
```

## Usage Patterns

### Basic Usage

```tsx
import { cs } from 'cyclone-styles';

// All the power of Tailwind with custom config
<View style={cs("bg-primary p-4 rounded-lg shadow-lg")} />
<Text style={cs("text-success text-lg font-bold")} />
```

### Responsive Design

```tsx
// Responsive with custom breakpoints
<View style={cs("p-2 md:p-4 lg:p-6 bg-brand-100")} />
<Text style={cs("text-sm md:text-base lg:text-lg")} />
```

### Dark Mode Support

```tsx
<View style={cs("bg-white dark:bg-gray-900 p-4")} />
<Text style={cs("text-gray-900 dark:text-white")} />
```

### Color Opacity

```tsx
<View style={cs("bg-primary/20 border-success/50")} />
<Text style={cs("text-error/80")} />
```

### Arbitrary Values

```tsx
<View style={cs("w-[200] h-[100] bg-[#ff0000] p-[24]")} />
<Text style={cs("text-[16] leading-[24]")} />
```

## Migration from NativeWind

If you're coming from NativeWind, the transition is seamless:

1. Replace `tailwind.config.js` setup with `setupCycloneStyles()`
2. Use `cs()` instead of `className` prop
3. Keep all your existing class names - they work the same!

```tsx
// Before (NativeWind)
<View className="flex-1 bg-blue-500 p-4 rounded-lg" />

// After (Cyclone Styles)
<View style={cs("flex-1 bg-blue-500 p-4 rounded-lg")} />
```

The configuration API is almost identical to Tailwind CSS configuration, making migration straightforward.
