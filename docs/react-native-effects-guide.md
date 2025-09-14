# React Native Effects Limitations & Solutions

## ❌ What Doesn't Work in React Native

### 1. CSS-style Hover Effects

```tsx
// ❌ This doesn't work in React Native
<View style={cs("hover:bg-blue-500 hover:scale-110")} />
```

### 2. CSS Transitions

```tsx
// ❌ This doesn't work in React Native
<View style={cs("transition-all duration-200 ease-out")} />
```

### 3. CSS-style Transform Hover

```tsx
// ❌ This doesn't work in React Native
<View style={cs("transform hover:scale-110")} />
```

## ✅ What DOES Work - Proper Solutions

### 1. Transform Effects (Static)

```tsx
// ✅ Transform works for static effects
<View style={cs("scale-110 rotate-45 translate-x-4")} />
```

### 2. Pressable for Touch Interactions

```tsx
// ✅ Use Pressable for interactive effects
import { Pressable } from "react-native";

<Pressable
  style={({ pressed }) => [
    cs("bg-blue-500 p-4 rounded-lg"),
    pressed && cs("bg-blue-600 scale-95"),
  ]}
>
  <Text style={cs("text-white")}>Press me!</Text>
</Pressable>;
```

### 3. State-based Styling

```tsx
// ✅ Use state for conditional styling
const [isActive, setIsActive] = useState(false);

<TouchableOpacity
  style={[
    cs("bg-orange-500 p-4 rounded-lg"),
    isActive && cs("bg-orange-600 scale-110"),
  ]}
  onPress={() => setIsActive(!isActive)}
>
  <Text style={cs("text-white")}>Toggle</Text>
</TouchableOpacity>;
```

### 4. React Native Reanimated (Recommended for Smooth Animations)

```tsx
// ✅ Use react-native-reanimated for smooth transitions
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";

function AnimatedButton() {
  const scale = useSharedValue(1);
  const backgroundColor = useSharedValue("#3b82f6"); // blue-500

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    backgroundColor: backgroundColor.value,
  }));

  const handlePressIn = () => {
    scale.value = withSpring(1.1); // scale-110 effect
    backgroundColor.value = withTiming("#2563eb"); // blue-600 effect
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
    backgroundColor.value = withTiming("#3b82f6");
  };

  return (
    <Animated.View style={[cs("p-4 rounded-lg"), animatedStyle]}>
      <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
        <Text style={cs("text-white font-bold")}>Animated Button</Text>
      </Pressable>
    </Animated.View>
  );
}
```

### 5. Layout Animations for List Changes

```tsx
// ✅ Use LayoutAnimation for layout changes
import { LayoutAnimation } from "react-native";

const [items, setItems] = useState(["Item 1", "Item 2"]);

const addItem = () => {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  setItems([...items, `Item ${items.length + 1}`]);
};

<View>
  {items.map((item, index) => (
    <View key={index} style={cs("bg-gray-100 p-4 mb-2 rounded")}>
      <Text>{item}</Text>
    </View>
  ))}
  <TouchableOpacity style={cs("bg-blue-500 p-4 rounded")} onPress={addItem}>
    <Text style={cs("text-white")}>Add Item</Text>
  </TouchableOpacity>
</View>;
```

## 🔧 How to Use Cyclone Styles Transforms

### Static Transforms (Work immediately)

```tsx
// Scale effects
<View style={cs("scale-95")} />    // 95%
<View style={cs("scale-110")} />   // 110%
<View style={cs("scale-150")} />   // 150%

// Rotation
<View style={cs("rotate-45")} />   // 45 degrees
<View style={cs("-rotate-90")} />  // -90 degrees

// Translation
<View style={cs("translate-x-4 translate-y-2")} />

// Combined transforms
<View style={cs("scale-110 rotate-12 translate-x-2")} />
```

### Interactive Transforms (Use with Pressable)

```tsx
<Pressable
  style={({ pressed }) => [
    cs("bg-purple-500 p-6 rounded-xl"),
    // Apply transform only when pressed
    pressed && cs("scale-95 rotate-2"),
  ]}
>
  <Text style={cs("text-white text-center font-bold")}>Press & Hold</Text>
</Pressable>
```

## 🎨 Creating Smooth Animations

### 1. Install react-native-reanimated

```bash
npm install react-native-reanimated
# Follow platform-specific setup instructions
```

### 2. Create Reusable Animated Components

```tsx
// AnimatedPressable.tsx
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

export function AnimatedPressable({ children, style, ...props }) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View style={[style, animatedStyle]}>
      <Pressable
        onPressIn={() => {
          scale.value = withSpring(0.95);
        }}
        onPressOut={() => {
          scale.value = withSpring(1);
        }}
        {...props}
      >
        {children}
      </Pressable>
    </Animated.View>
  );
}

// Usage
<AnimatedPressable style={cs("bg-blue-500 p-4 rounded-lg")}>
  <Text style={cs("text-white")}>Smooth Animation</Text>
</AnimatedPressable>;
```

## 📋 Summary

| Effect        | CSS (Web)                     | React Native Solution          |
| ------------- | ----------------------------- | ------------------------------ |
| Hover         | `hover:bg-blue-500`           | `Pressable` with pressed state |
| Transitions   | `transition-all duration-200` | `react-native-reanimated`      |
| Transform     | `transform hover:scale-110`   | `cs("scale-110")` + state      |
| Opacity       | `hover:opacity-75`            | Animated opacity value         |
| Color changes | `hover:bg-red-500`            | Animated backgroundColor       |

**Key Point**: React Native is touch-based, not mouse-based, so "hover" doesn't exist. Use press states and animations instead!
