# 🚀 Quick Setup Guide

Get started with CycloneWind in 3 minutes!

## 📦 Step 1: Install

```bash
npm install cyclonewind
```

## ⚙️ Step 2: Setup (One-time)

Add these two lines to your App.tsx or main entry file:

```tsx
// App.tsx
import "cyclonewind/preset"; // 👈 This makes className work everywhere
import { ThemeProvider } from "cyclonewind";

export default function App() {
  return (
    <ThemeProvider>
      {/* Your app components */}
      <YourMainComponent />
    </ThemeProvider>
  );
}
```

## 🎨 Step 3: Start Using!

Now you can use `className` in any component without imports:

```tsx
// Any component file - no imports needed!
import React from "react";
import { View, Text } from "react-native";

export default function MyComponent() {
  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-xl font-bold text-blue-600">
        Hello CycloneWind! 🌪️
      </Text>
    </View>
  );
}
```

## 🎯 That's It!

You're ready to build! Here are some common patterns:

### Basic Layout

```tsx
<View className="flex-1 bg-gray-50 p-4">
  <Text className="text-2xl font-bold mb-4">Title</Text>
  <View className="bg-white p-6 rounded-lg shadow">
    <Text className="text-gray-700">Content</Text>
  </View>
</View>
```

### Buttons

```tsx
<TouchableOpacity className="bg-blue-500 p-3 rounded-lg">
  <Text className="text-white text-center font-medium">Press Me</Text>
</TouchableOpacity>
```

### Dark Mode

```tsx
<View className="bg-white dark:bg-gray-900 p-4">
  <Text className="text-black dark:text-white">Auto dark mode!</Text>
</View>
```

### Responsive

```tsx
<Text className="text-sm md:text-base lg:text-lg">Responsive text</Text>
```

## 🔥 Advanced Features

### Custom Styles

```tsx
import { cs } from "cyclonewind";

// Register once
cs.registerCustomClass("my-button", {
  backgroundColor: "#007AFF",
  padding: 16,
  borderRadius: 8,
});

// Use anywhere
<View className="my-button">
  <Text className="text-white">Custom Button</Text>
</View>;
```

### Dynamic Styling

```tsx
import { cs } from "cyclonewind";

const [active, setActive] = useState(false);

<View style={cs(`p-4 ${active ? "bg-green-500" : "bg-gray-300"}`)}>
  <Text>Dynamic styling</Text>
</View>;
```

## 📚 Learn More

- Check the main README.md for complete documentation
- Look at the examples folder for real code samples
- All Tailwind CSS utilities work - just use what you know!

---

**🌪️ Happy coding with CycloneWind!**
