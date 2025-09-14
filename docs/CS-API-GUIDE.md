# 🌪️ Cyclone Styles - New cs() Function API

## ✨ Now you can use Tailwind CSS classes directly!

Instead of the verbose `styles` object, you can now use the much cleaner `cs()` function:

**✅ FIXED: No more `as any` needed!** The `cs()` function now returns a single flattened style object that works directly with React Native's `style` prop.

### ❌ Old Way (Still works)

```tsx
import { styles } from "cyclone-styles";

<View
  style={[
    styles.flex1,
    styles.bgBlue500,
    styles.p4,
    styles.roundedLg,
    styles.shadowMd,
  ]}
/>;
```

### ✅ New Way (Much cleaner!)

```tsx
import { cs } from "cyclone-styles";

<View style={cs("flex-1 bg-blue-500 p-4 rounded-lg shadow-md")} />;
```

---

## 🚀 Basic Usage

```tsx
import React from "react";
import { View, Text } from "react-native";
import { cs } from "cyclone-styles";

export default function MyComponent() {
  return (
    <View style={cs("flex-1 bg-gray-100 p-4")}>
      <Text style={cs("text-2xl font-bold text-gray-900 mb-4")}>
        Hello Cyclone Styles!
      </Text>

      <View style={cs("bg-white p-6 rounded-xl shadow-lg")}>
        <Text style={cs("text-lg text-gray-700")}>
          This is so much cleaner! 🎉
        </Text>
      </View>
    </View>
  );
}
```

---

## 🎯 Advanced Features

### 1. Conditional Classes with `cx()`

```tsx
import { cx } from "cyclone-styles";

const isActive = true;
const hasError = false;

<View
  style={cx({
    "px-4 py-2 rounded-lg": true, // Always applied
    "bg-green-500": isActive, // Applied when active
    "bg-red-500": hasError, // Applied when error
    "bg-gray-400": !isActive && !hasError, // Applied otherwise
  })}
/>;
```

### 2. Merge with Custom Styles using `merge()`

```tsx
import { merge } from "cyclone-styles";

<View
  style={merge("bg-blue-500 p-4 rounded-lg", {
    borderLeftWidth: 4,
    borderLeftColor: "#F59E0B",
    transform: [{ rotate: "5deg" }],
  })}
/>;
```

### 3. Template Literals for Dynamic Classes

```tsx
const size = "lg";
const color = "blue";

<View style={cs(`p-4 bg-${color}-500 rounded-${size} shadow-${size}`)} />;
```

---

## 📝 Complete Example

```tsx
import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { cs, cx, merge } from "cyclone-styles";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={cs("flex-1 bg-gray-50 justify-center px-6")}>
      {/* Header */}
      <View style={cs("mb-8")}>
        <Text style={cs("text-3xl font-bold text-gray-900 text-center mb-2")}>
          Welcome Back
        </Text>
        <Text style={cs("text-gray-600 text-center")}>
          Sign in to your account
        </Text>
      </View>

      {/* Form */}
      <View style={cs("bg-white p-6 rounded-xl shadow-lg")}>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email address"
          style={cs("border border-gray-300 rounded-lg p-3 mb-4 text-gray-900")}
        />

        <TouchableOpacity
          onPress={() => setIsLoading(!isLoading)}
          style={cx({
            "py-3 px-6 rounded-lg": true,
            "bg-blue-600": !isLoading,
            "bg-gray-400": isLoading,
          })}
        >
          <Text style={cs("text-white text-center font-semibold")}>
            {isLoading ? "Signing in..." : "Sign In"}
          </Text>
        </TouchableOpacity>

        {/* Custom styled element */}
        <View
          style={merge("mt-4 p-3 bg-blue-50 rounded-lg", {
            borderLeftWidth: 3,
            borderLeftColor: "#3B82F6",
          })}
        >
          <Text style={cs("text-blue-800 text-sm")}>
            💡 This combines Tailwind classes with custom styles!
          </Text>
        </View>
      </View>
    </View>
  );
}
```

---

## 🎨 All Features Work

✅ **Layout**: `flex-1`, `justify-center`, `items-center`  
✅ **Colors**: `bg-blue-500`, `text-white`, `border-gray-300`  
✅ **Spacing**: `p-4`, `m-6`, `px-2`, `py-3`, `gap-4`  
✅ **Typography**: `text-xl`, `font-bold`, `text-center`  
✅ **Borders**: `rounded-lg`, `border`, `border-2`  
✅ **Effects**: `shadow-lg`, `opacity-50`  
✅ **And all 8,220+ other utilities!**

---

## 🏆 Why This is Better

| Old Way                                       | New Way                        |
| --------------------------------------------- | ------------------------------ |
| `[styles.flex1, styles.bgBlue500, styles.p4]` | `cs("flex-1 bg-blue-500 p-4")` |
| 45+ characters                                | 25 characters                  |
| Hard to read                                  | Easy to scan                   |
| No autocomplete for class names               | Works with any editor          |

---

## 📦 Import Options

```tsx
// Named imports (recommended)
import { cs, cx, merge } from "cyclone-styles";

// Default import
import cs from "cyclone-styles";

// Both old and new APIs
import { styles, cs } from "cyclone-styles";
```

---

**🎉 You now have the most convenient Tailwind CSS API for React Native!**

Check out `cs-api-example.tsx` for a comprehensive demonstration showing both the old and new APIs side by side.
