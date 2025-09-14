# NativeWind-style className Usage

With Cyclone Styles, you can use `className` prop directly like NativeWind while still having access to the `cs()` function.

## Setup

Import the preset once in your app root:

```tsx
// App.tsx or _layout.tsx
import "cyclone-styles/preset";
import { ThemeProvider } from "cyclone-styles";

export default function App() {
  return (
    <ThemeProvider>
      <YourAppContent />
    </ThemeProvider>
  );
}
```

## Usage

### Method 1: className prop (NativeWind style)

```tsx
import React from "react";
import { View, Text, Pressable } from "react-native";

// No imports needed after preset setup!
export default function MyComponent() {
  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-xl font-bold text-gray-900 mb-4">
        Hello NativeWind! 🌪️
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

### Method 2: cs() function (still available)

```tsx
import React from "react";
import { View, Text, Pressable } from "react-native";
import { cs } from "cyclone-styles";

export default function MyComponent() {
  return (
    <View style={cs("flex-1 bg-white p-4")}>
      <Text style={cs("text-xl font-bold text-gray-900 mb-4")}>
        Hello cs()! 🌪️
      </Text>

      <Pressable style={cs("bg-blue-500 p-3 rounded-md")}>
        <Text style={cs("text-white text-center font-medium")}>
          Button with cs()
        </Text>
      </Pressable>
    </View>
  );
}
```

### Method 3: Mixed usage

```tsx
import React from "react";
import { View, Text, Pressable } from "react-native";
import { cs } from "cyclone-styles";

export default function MyComponent() {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-xl font-bold mb-4">Mixed Usage Example</Text>

      {/* Simple static styles with className */}
      <View className="bg-gray-100 p-4 rounded-lg mb-4">
        <Text className="text-gray-700">Static content</Text>
      </View>

      {/* Dynamic styles with cs() */}
      <Pressable
        style={cs(
          `p-3 rounded-md ${isActive ? "bg-green-500" : "bg-gray-300"}`
        )}
        onPress={() => setIsActive(!isActive)}
      >
        <Text
          style={cs(
            `text-center font-medium ${
              isActive ? "text-white" : "text-gray-700"
            }`
          )}
        >
          {isActive ? "Active" : "Inactive"} (cs function)
        </Text>
      </Pressable>
    </View>
  );
}
```

## Features

All Cyclone Styles features work with both `className` and `cs()`:

- ✅ **Dark mode**: `className="bg-white dark:bg-gray-900"`
- ✅ **Responsive**: `className="w-full sm:w-1/2 lg:w-1/3"`
- ✅ **Arbitrary values**: `className="bg-[#ff0000] p-[20px]"`
- ✅ **Opacity**: `className="bg-blue-500/20 text-gray-900/80"`
- ✅ **Theme colors**: `className="bg-primary-500 text-secondary-600"`
- ✅ **All 8,220+ utilities**: Every Tailwind class works

## Performance

Both approaches use the same underlying `cs()` function, so performance is identical. The `className` prop is automatically converted to `style` at render time.

## When to use what?

**Use `className` for:**

- Static styling that won't change
- Simple component layouts
- When you prefer NativeWind syntax
- Team familiarity with NativeWind

**Use `cs()` for:**

- Dynamic styling based on state/props
- Complex conditional logic
- Programmatic style generation
- When you need explicit control

## TypeScript Support

Full TypeScript support is included with proper autocompletion for both approaches.

---

That's it! You now have the flexibility of NativeWind's `className` syntax with the power and completeness of Cyclone Styles.
