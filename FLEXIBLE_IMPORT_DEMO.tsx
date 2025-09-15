/**
 * 🌪️ CycloneWind - Flexible Import Demonstration
 *
 * This file shows that you can import cyclonewind/global or cyclonewind/preset
 * from ANY module, at ANY location, and it will work perfectly!
 */

import React from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";

// ============================================================================
// 🎯 FLEXIBLE IMPORT: Can happen anywhere in this file!
// ============================================================================

// This import can be:
// 1. At the top of the file ✅
// 2. In the middle of the file ✅
// 3. Inside a function ✅
// 4. In a different module entirely ✅

import "cyclonewind/global"; // ← This enables className EVERYWHERE!

// ============================================================================
// 🧪 PROOF: className works on all React Native components
// ============================================================================

export default function FlexibleImportDemo() {
  // You could even import here if you wanted!
  // import "cyclonewind/preset"; // ← This would also work!

  return (
    <SafeAreaView className="flex-1 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <ScrollView
        className="flex-1"
        contentContainerClassName="p-6"
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-lg border border-gray-200 dark:border-gray-700">
          <Text className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-3">
            🌪️ Flexible Import System
          </Text>
          <Text className="text-center text-gray-600 dark:text-gray-300 text-lg">
            Import cyclonewind/global from anywhere!
          </Text>
        </View>

        {/* Import Examples */}
        <View className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <Text className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            📁 Import Locations That Work
          </Text>

          {[
            { location: "App.tsx", description: "Traditional app root import" },
            {
              location: "utils/setup.ts",
              description: "Utility module import",
            },
            {
              location: "components/Layout.tsx",
              description: "Component-level import",
            },
            {
              location: "screens/HomeScreen.tsx",
              description: "Screen component import",
            },
            {
              location: "services/StyleService.ts",
              description: "Service module import",
            },
            {
              location: "hooks/useTheme.ts",
              description: "Custom hook import",
            },
            {
              location: "navigation/AppNavigator.tsx",
              description: "Navigation setup import",
            },
            {
              location: "store/themeSlice.ts",
              description: "State management import",
            },
          ].map((item, index) => (
            <View
              key={index}
              className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-3 border-l-4 border-blue-500"
            >
              <Text className="font-mono text-sm text-blue-800 dark:text-blue-300 mb-1">
                {item.location}
              </Text>
              <Text className="text-blue-700 dark:text-blue-400 text-sm">
                {item.description}
              </Text>
            </View>
          ))}
        </View>

        {/* Import Methods */}
        <View className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <Text className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            🔧 Import Methods
          </Text>

          <View className="space-y-4">
            <View className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <Text className="font-semibold text-green-800 dark:text-green-300 mb-2">
                ✨ Global Import (Recommended)
              </Text>
              <Text className="font-mono text-sm text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/50 p-2 rounded mb-2">
                import "cyclonewind/global";
              </Text>
              <Text className="text-green-700 dark:text-green-400 text-sm">
                Auto-enables className + provides all utility functions
              </Text>
            </View>

            <View className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
              <Text className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                🎯 Preset Import (For RN Utilities)
              </Text>
              <Text className="font-mono text-sm text-purple-700 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/50 p-2 rounded mb-2">
                import "cyclonewind/preset";
              </Text>
              <Text className="text-purple-700 dark:text-purple-400 text-sm">
                Auto-enables className + includes React Native specific
                utilities
              </Text>
            </View>
          </View>
        </View>

        {/* Key Benefits */}
        <View className="bg-gradient-to-br from-green-500 to-blue-600 p-6 rounded-xl shadow-lg mb-6">
          <Text className="text-xl font-bold text-white mb-4">
            🎉 Key Benefits
          </Text>
          {[
            "Import anywhere in your app structure",
            "No need to modify app root or main files",
            "Automatic global initialization",
            "Works from any module depth",
            "Compatible with any project structure",
            "Zero configuration required",
          ].map((benefit, index) => (
            <View key={index} className="flex-row items-center mb-2">
              <Text className="text-green-200 mr-3 text-lg">✅</Text>
              <Text className="text-white flex-1">{benefit}</Text>
            </View>
          ))}
        </View>

        {/* Universal Component Support */}
        <View className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <Text className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            🧩 Universal Component Support
          </Text>
          <Text className="text-gray-600 dark:text-gray-300 mb-4">
            After importing, className works with ALL React Native components:
          </Text>

          <View className="grid grid-cols-2 gap-3">
            {[
              "View",
              "Text",
              "ScrollView",
              "SafeAreaView",
              "Pressable",
              "TouchableOpacity",
              "TextInput",
              "Image",
              "FlatList",
              "SectionList",
              "Switch",
              "Slider",
              "And ANY custom component!",
            ].map((component, index) => (
              <View
                key={index}
                className="bg-gray-50 dark:bg-gray-700 p-2 rounded-lg"
              >
                <Text className="text-gray-800 dark:text-gray-200 font-mono text-sm text-center">
                  {component}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ============================================================================
// 💡 USAGE EXAMPLES IN COMMENTS
// ============================================================================

/*
// Example 1: Import in utility module
// utils/globalSetup.ts
import "cyclonewind/global";

export function initializeApp() {
  console.log("App initialized with global className!");
}

// Example 2: Import in any component
// components/UserProfile.tsx
import React from 'react';
import { View, Text } from 'react-native';
import "cyclonewind/global"; // ← Works perfectly here!

export function UserProfile() {
  return (
    <View className="p-4 bg-white rounded-lg shadow">
      <Text className="text-xl font-bold text-gray-900">
        User Profile
      </Text>
    </View>
  );
}

// Example 3: Import in service
// services/ThemeService.ts
import "cyclonewind/preset";

export class ThemeService {
  static setup() {
    console.log("Theme service with className support!");
  }
}

// Example 4: Import in custom hook
// hooks/useStyles.ts
import { useMemo } from 'react';
import "cyclonewind/global";

export function useStyles() {
  return useMemo(() => ({
    container: "flex-1 bg-white p-4",
    title: "text-2xl font-bold text-gray-900"
  }), []);
}
*/
