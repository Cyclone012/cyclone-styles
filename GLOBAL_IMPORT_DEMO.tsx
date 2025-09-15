/**
 * Demo: CycloneWind Global Import - Works Anywhere
 *
 * This demo shows that importing "cyclonewind/global" automatically
 * enables className support regardless of where it's imported in the app.
 */

import React from "react";
import { View, Text, ScrollView } from "react-native";

// Some utility component that imports global support in the middle of the app
import "./utils/someUtility"; // This could import "cyclonewind/global"

// Or import directly here - works from anywhere!
import "cyclonewind/global";

export default function GlobalImportDemo() {
  return (
    <ScrollView className="flex-1 bg-gray-50 dark:bg-gray-900">
      <View className="p-6">
        <Text className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          🌪️ Global Import Demo
        </Text>

        <View className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-6">
          <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            ✅ Flexible Import Locations
          </Text>
          <Text className="text-gray-600 dark:text-gray-300 mb-3">
            The global import can be added anywhere in your app:
          </Text>
          <View className="ml-4">
            <Text className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              • At the app root (App.tsx)
            </Text>
            <Text className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              • In any component file
            </Text>
            <Text className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              • In utility files
            </Text>
            <Text className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              • Late in the import chain
            </Text>
          </View>
        </View>

        <View className="bg-blue-500 p-6 rounded-xl shadow-lg mb-6">
          <Text className="text-lg font-semibold text-white mb-3">
            🚀 Auto-initialization
          </Text>
          <Text className="text-white opacity-90">
            Once imported, className support is automatically enabled for all
            React Native components throughout your entire app - no manual setup
            required!
          </Text>
        </View>

        <View className="bg-green-500 p-6 rounded-xl shadow-lg mb-6">
          <Text className="text-lg font-semibold text-white mb-3">
            🎯 Universal Patching
          </Text>
          <Text className="text-white opacity-90">
            Works with components from any library: react-native,
            @react-native-community, expo, and custom libraries.
          </Text>
        </View>

        <View className="bg-purple-500 p-6 rounded-xl shadow-lg">
          <Text className="text-lg font-semibold text-white mb-3">
            ⚡ Performance Optimized
          </Text>
          <Text className="text-white opacity-90">
            Smart lazy patching - components are only wrapped when actually
            used. Includes safety guards for strict environments like Expo.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

// Example utility file content that could import global support:
/*
// utils/someUtility.ts
import "cyclonewind/global"; // ← This enables className everywhere!

export function someUtilityFunction() {
  // Your utility logic here
}
*/
