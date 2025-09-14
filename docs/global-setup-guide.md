# Global Setup Guide for Cyclone Styles

## One-Time Setup in Root Layout

Yes, you only need to import and configure cyclone-styles **once** in your root layout/app file, and it will work in all other files throughout your app.

## Setup Options

### Option 1: Auto-Setup (Simplest)

In your `App.tsx` or root layout file:

```typescript
// App.tsx or _layout.tsx (Expo Router)
import "cyclone-styles/preset"; // This line configures everything globally
import React from "react";
import { View, Text } from "react-native";
import { cs, ThemeProvider } from "cyclone-styles";

export default function App() {
  return (
    <ThemeProvider>
      <View style={cs("flex-1 bg-white p-4")}>
        <Text style={cs("text-lg font-bold")}>Hello World</Text>
      </View>
    </ThemeProvider>
  );
}
```

### Option 2: Custom Configuration

In your `App.tsx` or root layout:

```typescript
// App.tsx
import { setupCycloneStyles, ThemeProvider, cs } from "cyclone-styles";
import React from "react";

// Configure once at app startup
setupCycloneStyles({
  colors: {
    primary: "#007AFF",
    secondary: "#5856D6",
    brand: {
      50: "#f0f9ff",
      100: "#e0f2fe",
      500: "#0ea5e9",
      900: "#0c4a6e",
    },
  },
  spacing: {
    "18": 72,
    "22": 88,
  },
  extend: {
    colors: {
      success: "#10B981",
      warning: "#F59E0B",
    },
    utilities: {
      "card-shadow": {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      },
    },
  },
});

export default function App() {
  return <ThemeProvider>{/* Your app content */}</ThemeProvider>;
}
```

## Using in Other Files

After the global setup, you can use `cs()` in any file without additional imports:

```typescript
// components/Button.tsx
import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { cs } from "cyclone-styles"; // Only need to import cs function

export function Button({ title, onPress }) {
  return (
    <TouchableOpacity
      style={cs("bg-primary p-4 rounded-lg card-shadow")}
      onPress={onPress}
    >
      <Text style={cs("text-white font-bold text-center")}>{title}</Text>
    </TouchableOpacity>
  );
}
```

```typescript
// screens/HomeScreen.tsx
import React from "react";
import { View, Text, ScrollView } from "react-native";
import { cs } from "cyclone-styles"; // Only import what you need

export function HomeScreen() {
  return (
    <ScrollView style={cs("flex-1 bg-gray-50")}>
      <View style={cs("p-6")}>
        <Text style={cs("text-2xl font-bold text-gray-900 mb-4")}>Welcome</Text>

        {/* Custom colors and spacing work everywhere */}
        <View style={cs("bg-brand-500 p-18 rounded-lg")}>
          <Text style={cs("text-white")}>Custom themed content</Text>
        </View>

        {/* Custom utilities work everywhere */}
        <View style={cs("card-shadow bg-white p-4 mt-4")}>
          <Text style={cs("text-success")}>Success message</Text>
        </View>
      </View>
    </ScrollView>
  );
}
```

## Expo Router Setup

For Expo Router apps, set up in your root `_layout.tsx`:

```typescript
// app/_layout.tsx
import "cyclone-styles/preset"; // Global setup
import { Stack } from "expo-router";
import { ThemeProvider } from "cyclone-styles";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="profile" />
      </Stack>
    </ThemeProvider>
  );
}
```

Then in any screen:

```typescript
// app/index.tsx
import { View, Text } from "react-native";
import { cs } from "cyclone-styles";

export default function Home() {
  return (
    <View style={cs("flex-1 justify-center items-center bg-white")}>
      <Text style={cs("text-xl font-bold")}>Home Screen</Text>
    </View>
  );
}
```

## React Navigation Setup

For React Navigation apps:

```typescript
// App.tsx
import "cyclone-styles/preset"; // Global setup
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "cyclone-styles";

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
```

## Key Points

1. **✅ One-time setup**: Configure in root layout only
2. **✅ Global availability**: Works in all files after setup
3. **✅ Import only what you need**: Just import `cs` in component files
4. **✅ Theme persistence**: Configuration persists across the entire app
5. **✅ Custom utilities**: Available everywhere after global setup
6. **✅ Hot reload friendly**: Changes work with React Native hot reload

## Summary

- **Root file**: Import preset or call `setupCycloneStyles()` once
- **All other files**: Just import `{ cs }` and use it
- **No repeated configuration**: Theme and utilities work everywhere
- **TypeScript support**: Full autocomplete and type safety maintained

This approach is exactly like how NativeWind works - one global setup, use anywhere! 🎉
