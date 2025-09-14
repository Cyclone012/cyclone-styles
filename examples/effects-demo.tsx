// Example: React Native Effects - What Works vs What Doesn't
import React, { useState } from "react";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { cs } from "cyclone-styles";

export default function EffectsDemo() {
  const [isPressed, setIsPressed] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <View style={cs("flex-1 p-4 bg-gray-100")}>
      <Text style={cs("text-2xl font-bold mb-6 text-center")}>
        React Native Effects Demo
      </Text>

      {/* ❌ What DOESN'T work */}
      <View style={cs("mb-8")}>
        <Text style={cs("text-lg font-semibold mb-4 text-red-600")}>
          ❌ What DOESN'T Work (will show warnings):
        </Text>

        {/* These will show warnings in development */}
        <View
          style={cs(
            "hover:bg-blue-500 transition-all duration-200 p-4 mb-2 bg-gray-300 rounded"
          )}
        >
          <Text>CSS Hover + Transition (doesn't work)</Text>
        </View>
      </View>

      {/* ✅ What DOES work */}
      <View style={cs("mb-8")}>
        <Text style={cs("text-lg font-semibold mb-4 text-green-600")}>
          ✅ What DOES Work:
        </Text>

        {/* Static transforms work great */}
        <View
          style={cs("bg-purple-500 p-4 mb-4 rounded-lg scale-105 rotate-2")}
        >
          <Text style={cs("text-white font-bold")}>
            Static Transform (scale-105 rotate-2)
          </Text>
        </View>

        {/* Pressable with dynamic styling */}
        <Pressable
          style={({ pressed }) => [
            cs("bg-blue-500 p-4 mb-4 rounded-lg"),
            pressed && cs("bg-blue-600 scale-95"),
          ]}
        >
          <Text style={cs("text-white font-bold text-center")}>
            Pressable with Scale Effect (Press & Hold)
          </Text>
        </Pressable>

        {/* State-based styling */}
        <TouchableOpacity
          style={[
            cs("bg-orange-500 p-4 mb-4 rounded-lg"),
            isPressed && cs("bg-orange-600 scale-110"),
          ]}
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
        >
          <Text style={cs("text-white font-bold text-center")}>
            State-based Scale (Press & Hold)
          </Text>
        </TouchableOpacity>

        {/* Toggle state */}
        <TouchableOpacity
          style={[
            cs("bg-green-500 p-4 mb-4 rounded-lg"),
            isToggled && cs("bg-green-700 scale-95 rotate-6"),
          ]}
          onPress={() => setIsToggled(!isToggled)}
        >
          <Text style={cs("text-white font-bold text-center")}>
            Toggle Transform (Tap to Toggle)
            {isToggled ? " - Active!" : ""}
          </Text>
        </TouchableOpacity>

        {/* Multiple static transforms */}
        <View
          style={cs(
            "bg-pink-500 p-4 mb-4 rounded-lg translate-x-4 scale-90 -rotate-3"
          )}
        >
          <Text style={cs("text-white font-bold")}>
            Multiple Transforms (translate-x-4 scale-90 -rotate-3)
          </Text>
        </View>

        {/* Shadow with theme color (now works!) */}
        <View
          style={cs("bg-white p-4 mb-4 rounded-lg shadow-lg shadow-blue-500")}
        >
          <Text style={cs("text-gray-900 font-bold")}>
            Shadow with Custom Color (shadow-lg shadow-blue-500)
          </Text>
        </View>
      </View>

      <View style={cs("bg-yellow-100 p-4 rounded-lg")}>
        <Text style={cs("text-yellow-800 font-semibold mb-2")}>
          💡 Pro Tip:
        </Text>
        <Text style={cs("text-yellow-700")}>
          For smooth animations, use react-native-reanimated. See
          docs/react-native-effects-guide.md for examples!
        </Text>
      </View>
    </View>
  );
}

// For react-native-reanimated users:
/*
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

function SmoothAnimatedButton() {
  const scale = useSharedValue(1);
  const backgroundColor = useSharedValue('#3b82f6');

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    backgroundColor: backgroundColor.value,
  }));

  return (
    <Animated.View style={[cs("p-4 rounded-lg"), animatedStyle]}>
      <Pressable
        onPressIn={() => {
          scale.value = withSpring(1.1);
          backgroundColor.value = withTiming('#2563eb');
        }}
        onPressOut={() => {
          scale.value = withSpring(1);
          backgroundColor.value = withTiming('#3b82f6');
        }}
      >
        <Text style={cs("text-white font-bold text-center")}>
          Smooth Reanimated Button
        </Text>
      </Pressable>
    </Animated.View>
  );
}
*/
