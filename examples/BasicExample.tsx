/**
 * Basic Usage Example
 *
 * Shows how to use CycloneWind className in your components
 * No imports needed - just start using className!
 */

import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

export default function BasicExample() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-blue-500 p-6">
        <Text className="text-white text-2xl font-bold text-center">
          Welcome to CycloneWind! 🌪️
        </Text>
        <Text className="text-blue-100 text-center mt-2">
          Tailwind CSS for React Native
        </Text>
      </View>

      {/* Content Card */}
      <View className="bg-white m-4 p-6 rounded-lg shadow-lg">
        <Text className="text-xl font-bold text-gray-900 mb-4">
          Getting Started
        </Text>
        <Text className="text-gray-600 mb-4">
          This example shows basic CycloneWind usage with className prop. No
          imports needed - it just works!
        </Text>

        {/* Button Row */}
        <View className="flex-row gap-3">
          <TouchableOpacity className="flex-1 bg-blue-500 p-3 rounded">
            <Text className="text-white text-center font-medium">Primary</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-1 bg-gray-200 p-3 rounded">
            <Text className="text-gray-800 text-center font-medium">
              Secondary
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Feature List */}
      <View className="bg-white m-4 p-6 rounded-lg shadow-lg">
        <Text className="text-xl font-bold text-gray-900 mb-4">Features</Text>

        <View className="space-y-3">
          <View className="flex-row items-center">
            <View className="w-2 h-2 bg-green-500 rounded-full mr-3" />
            <Text className="text-gray-700 flex-1">Easy setup</Text>
          </View>

          <View className="flex-row items-center">
            <View className="w-2 h-2 bg-green-500 rounded-full mr-3" />
            <Text className="text-gray-700 flex-1">className support</Text>
          </View>

          <View className="flex-row items-center">
            <View className="w-2 h-2 bg-green-500 rounded-full mr-3" />
            <Text className="text-gray-700 flex-1">Custom styles</Text>
          </View>

          <View className="flex-row items-center">
            <View className="w-2 h-2 bg-green-500 rounded-full mr-3" />
            <Text className="text-gray-700 flex-1">Dark mode</Text>
          </View>
        </View>
      </View>

      {/* Dark Mode Example */}
      <View className="bg-white dark:bg-gray-800 m-4 p-6 rounded-lg shadow-lg">
        <Text className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Dark Mode Support
        </Text>
        <Text className="text-gray-600 dark:text-gray-300">
          This card automatically adapts to light and dark themes!
        </Text>
      </View>
    </ScrollView>
  );
}
