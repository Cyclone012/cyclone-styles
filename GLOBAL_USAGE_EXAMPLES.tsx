/**
 * 🌪️ CycloneWind Global Import Usage Examples
 *
 * This file demonstrates all the different ways you can import and use
 * CycloneWind's global className support.
 */

import React from "react";

// ============================================================================
// METHOD 1: Preset Import (Recommended for most apps)
// ============================================================================
// import "cyclonewind/preset"; // Auto-enables className + includes React Native utilities

// ============================================================================
// METHOD 2: Global Import (NEW - Can be imported anywhere!)
// ============================================================================
import "cyclonewind/global"; // Auto-enables className + provides all functions

// ============================================================================
// METHOD 3: Manual Setup
// ============================================================================
// import { setupClassName } from "cyclonewind";
// setupClassName(); // Call once

// ============================================================================
// All imports above enable className on standard React Native components:
// ============================================================================
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Pressable,
  TextInput,
  Image,
  FlatList,
} from "react-native";

// ============================================================================
// USAGE EXAMPLES
// ============================================================================

export default function GlobalUsageExamples() {
  const data = [
    { id: "1", title: "First Item", description: "This is the first item" },
    { id: "2", title: "Second Item", description: "This is the second item" },
    { id: "3", title: "Third Item", description: "This is the third item" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-50 dark:bg-gray-900">
      <ScrollView
        className="flex-1"
        contentContainerClassName="p-4"
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-2xl mb-6 shadow-lg">
          <Text className="text-3xl font-bold text-white text-center mb-2">
            🌪️ CycloneWind Global
          </Text>
          <Text className="text-blue-100 text-center text-lg">
            className support everywhere!
          </Text>
        </View>

        {/* Import Methods */}
        <View className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-6 shadow-sm">
          <Text className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            📦 Import Methods
          </Text>

          <View className="space-y-3">
            <View className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
              <Text className="font-semibold text-green-800 dark:text-green-300 mb-1">
                Preset (Recommended)
              </Text>
              <Text className="text-green-700 dark:text-green-400 text-sm font-mono">
                import "cyclonewind/preset"
              </Text>
            </View>

            <View className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
              <Text className="font-semibold text-blue-800 dark:text-blue-300 mb-1">
                Global (NEW - Works anywhere!)
              </Text>
              <Text className="text-blue-700 dark:text-blue-400 text-sm font-mono">
                import "cyclonewind/global"
              </Text>
            </View>

            <View className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-500">
              <Text className="font-semibold text-yellow-800 dark:text-yellow-300 mb-1">
                Manual Setup
              </Text>
              <Text className="text-yellow-700 dark:text-yellow-400 text-sm font-mono">
                setupClassName()
              </Text>
            </View>
          </View>
        </View>

        {/* Component Examples */}
        <View className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-6 shadow-sm">
          <Text className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            🧩 Standard Components with className
          </Text>

          {/* Text Input */}
          <TextInput
            className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-4 mb-4 text-gray-900 dark:text-white"
            placeholder="Type something..."
            placeholderTextColor="#9CA3AF"
          />

          {/* Pressable Button */}
          <Pressable className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 p-4 rounded-lg mb-4">
            <Text className="text-white font-semibold text-center">
              Pressable with className
            </Text>
          </Pressable>

          {/* Image placeholder */}
          <View className="bg-gray-200 dark:bg-gray-700 h-32 rounded-lg mb-4 items-center justify-center">
            <Text className="text-gray-500 dark:text-gray-400">
              Image placeholder
            </Text>
          </View>
        </View>

        {/* Features List */}
        <View className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-6 shadow-sm">
          <Text className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            ✨ Global Import Features
          </Text>

          <FlatList
            data={[
              { icon: "🎯", text: "Works with any React component library" },
              { icon: "⚡", text: "Auto-initialization on import" },
              { icon: "🔧", text: "No Metro configuration required" },
              { icon: "🛡️", text: "Expo-safe with fallback mechanisms" },
              { icon: "📱", text: "Universal component detection" },
              { icon: "🎨", text: "Smart lazy patching" },
            ]}
            renderItem={({ item }) => (
              <View className="flex-row items-center py-3">
                <Text className="text-2xl mr-3">{item.icon}</Text>
                <Text className="text-gray-700 dark:text-gray-300 flex-1">
                  {item.text}
                </Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            scrollEnabled={false}
          />
        </View>

        {/* Benefits */}
        <View className="bg-gradient-to-br from-green-400 to-blue-500 p-6 rounded-xl shadow-lg">
          <Text className="text-xl font-bold text-white mb-4">
            🎉 Benefits of Global Import
          </Text>
          <View className="space-y-2">
            <Text className="text-green-100">
              • Import anywhere in your app structure
            </Text>
            <Text className="text-green-100">
              • No need to worry about import order
            </Text>
            <Text className="text-green-100">
              • Automatic setup - just import and go!
            </Text>
            <Text className="text-green-100">
              • Works in utility files, components, anywhere
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ============================================================================
// UTILITY FILE EXAMPLE
// ============================================================================
/*
// utils/globalSetup.ts
import "cyclonewind/global"; // ← Enable className from a utility file!

export function myUtilityFunction() {
  // Your utility logic here
  return "Global className enabled from utility!";
}
*/

// ============================================================================
// COMPONENT FILE EXAMPLE
// ============================================================================
/*
// components/MyComponent.tsx
import "cyclonewind/global"; // ← Can import in any component!
import { View, Text } from 'react-native';

export function MyComponent() {
  return (
    <View className="p-4 bg-blue-500">
      <Text className="text-white">
        className works here too!
      </Text>
    </View>
  );
}
*/
