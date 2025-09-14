/**
 * Demo showing the fixed global className support
 * Run with: import 'cyclonewind/preset' first
 */
import React from "react";
import { View, Text, ScrollView } from "react-native";
// Note: cs() and $ still need explicit imports
import { cs, $ } from "cyclonewind";

// After importing 'cyclonewind/preset', className works globally without imports!

export default function FixedDemo() {
  return (
    <ScrollView className="flex-1 bg-gray-50 dark:bg-gray-900">
      {/* 1. Global className (no imports needed after preset) */}
      <View className="p-6">
        <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          🎉 Fixed Global className Support!
        </Text>

        <Text className="text-base text-gray-600 dark:text-gray-300 mb-6">
          className works globally without any imports after preset setup
        </Text>

        {/* 2. Manual cs() import (as intended) */}
        <View style={cs("bg-blue-500 p-4 rounded-lg mb-4")}>
          <Text style={cs("text-white font-semibold")}>
            cs() requires manual import (working correctly)
          </Text>
        </View>

        {/* 3. Manual $ import (as intended) */}
        <View style={[$.bgGreen(), $.p4(), $.roundedLg(), $.m4()]}>
          <Text style={[$.textWhite(), $.fontBold()]}>
            $ direct styles require manual import (working correctly)
          </Text>
        </View>

        {/* 4. Fixed spacing - gap works on container, not affecting children */}
        <View className="flex-row gap-4 mb-6">
          <View className="flex-1 bg-red-400 p-3 rounded">
            <Text className="text-white text-center">Item 1</Text>
          </View>
          <View className="flex-1 bg-green-400 p-3 rounded">
            <Text className="text-white text-center">Item 2</Text>
          </View>
          <View className="flex-1 bg-blue-400 p-3 rounded">
            <Text className="text-white text-center">Item 3</Text>
          </View>
        </View>

        {/* 5. Fixed space utilities - now use gap instead of margin */}
        <View className="flex-col space-y-3 mb-6">
          <View className="bg-purple-400 p-3 rounded">
            <Text className="text-white">Spaced Item 1</Text>
          </View>
          <View className="bg-purple-500 p-3 rounded">
            <Text className="text-white">Spaced Item 2</Text>
          </View>
          <View className="bg-purple-600 p-3 rounded">
            <Text className="text-white">Spaced Item 3</Text>
          </View>
        </View>

        {/* 6. Theme system integration */}
        <View className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Text className="text-gray-900 dark:text-white font-semibold mb-2">
            Built-in Theme Support
          </Text>
          <Text className="text-gray-600 dark:text-gray-300">
            Theme works automatically for className, and ThemeProvider syncs
            with cs() and $ functions
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

/*
 * Setup Instructions:
 *
 * 1. In your root App.tsx or _layout.tsx:
 *    import 'cyclonewind/preset'; // Enables className globally
 *
 * 2. For manual imports (when needed):
 *    import { cs, $ } from 'cyclonewind'; // Only when using cs() or $
 *
 * 3. For theme control:
 *    import { ThemeProvider } from 'cyclonewind';
 *
 * Perfect NativeWind-style experience! 🌪️
 */
