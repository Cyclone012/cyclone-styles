/**
 * NativeWind-style className Usage Examples
 * Shows how to use className prop directly like NativeWind
 * while still keeping cs() function available
 */

import React from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
  TextInput,
} from "react-native";

// Import preset to enable className support globally
import "cyclone-styles/preset";

// cs() function is still available for manual use
import { cs } from "cyclone-styles";

const ClassNameDemo = () => {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      {/* Method 1: Pure className usage (NativeWind style) */}
      <View className="p-4 bg-white m-4 rounded-lg shadow-md">
        <Text className="text-xl font-bold text-gray-900 mb-2">
          NativeWind-style className
        </Text>
        <Text className="text-base text-gray-600">
          This uses className prop directly, just like NativeWind! 🌪️
        </Text>
      </View>

      {/* Method 2: Mixed className + cs() usage */}
      <View className="p-4 bg-white m-4 rounded-lg">
        <Text className="text-lg font-semibold mb-2">Mixed Usage Example</Text>
        <Text className="text-gray-600 mb-4">
          You can use both className and cs() in the same app
        </Text>

        {/* Some components use className */}
        <Pressable className="bg-blue-500 p-3 rounded-md mb-2">
          <Text className="text-white text-center font-medium">
            className Button
          </Text>
        </Pressable>

        {/* Others use cs() function */}
        <Pressable style={cs("bg-green-500 p-3 rounded-md")}>
          <Text style={cs("text-white text-center font-medium")}>
            cs() Function Button
          </Text>
        </Pressable>
      </View>

      {/* Method 3: Complex layouts with className */}
      <View className="bg-white m-4 rounded-lg overflow-hidden shadow-sm">
        <View className="p-4 bg-blue-50 border-b border-blue-100">
          <Text className="text-lg font-bold text-blue-900">Card Header</Text>
        </View>

        <View className="p-4">
          <Text className="text-gray-800 mb-4">
            Complex card layout using only className props
          </Text>

          <View className="flex-row justify-between items-center">
            <View className="flex-1 mr-2">
              <TextInput
                className="border border-gray-300 rounded-md p-3 bg-gray-50"
                placeholder="Enter text..."
                placeholderTextColor="#9CA3AF"
              />
            </View>

            <Pressable className="bg-blue-500 px-4 py-3 rounded-md">
              <Text className="text-white font-medium">Send</Text>
            </Pressable>
          </View>
        </View>
      </View>

      {/* Method 4: Responsive and theme support */}
      <View className="p-4 bg-white dark:bg-gray-800 m-4 rounded-lg">
        <Text className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          Theme & Responsive Support
        </Text>
        <Text className="text-gray-600 dark:text-gray-300 mb-4">
          className supports dark mode and responsive breakpoints
        </Text>

        <View className="flex-row flex-wrap">
          <View className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <View className="bg-red-100 dark:bg-red-900 p-4 rounded-md">
              <Text className="text-red-800 dark:text-red-200 text-center">
                Box 1
              </Text>
            </View>
          </View>

          <View className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <View className="bg-green-100 dark:bg-green-900 p-4 rounded-md">
              <Text className="text-green-800 dark:text-green-200 text-center">
                Box 2
              </Text>
            </View>
          </View>

          <View className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <View className="bg-blue-100 dark:bg-blue-900 p-4 rounded-md">
              <Text className="text-blue-800 dark:text-blue-200 text-center">
                Box 3
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Method 5: Advanced features */}
      <View className="p-4 bg-white m-4 rounded-lg">
        <Text className="text-lg font-bold mb-4">
          Advanced className Features
        </Text>

        {/* Arbitrary values */}
        <View className="bg-[#ff6b6b] p-[20px] rounded-[12px] mb-4">
          <Text className="text-white text-[18px] font-[600]">
            Arbitrary values: bg-[#ff6b6b] p-[20px] text-[18px]
          </Text>
        </View>

        {/* Opacity support */}
        <View className="bg-blue-500/20 border border-blue-500/40 p-4 rounded-md mb-4">
          <Text className="text-blue-700">
            Opacity support: bg-blue-500/20 border-blue-500/40
          </Text>
        </View>

        {/* Theme colors */}
        <View className="bg-primary-500 p-4 rounded-md mb-4">
          <Text className="text-white">
            Theme colors: bg-primary-500 (if configured)
          </Text>
        </View>
      </View>

      {/* Method 6: Performance comparison */}
      <View className="p-4 bg-gray-100 m-4 rounded-lg">
        <Text className="text-lg font-bold text-gray-900 mb-2">
          Usage Guidelines
        </Text>

        <View className="mb-3">
          <Text className="text-sm font-medium text-green-700 mb-1">
            ✅ Use className for:
          </Text>
          <Text className="text-xs text-gray-600 ml-4">
            • Simple styling that won't change frequently
          </Text>
          <Text className="text-xs text-gray-600 ml-4">
            • Static layouts and consistent design patterns
          </Text>
          <Text className="text-xs text-gray-600 ml-4">
            • When you want NativeWind-style syntax
          </Text>
        </View>

        <View className="mb-3">
          <Text className="text-sm font-medium text-blue-700 mb-1">
            🔧 Use cs() for:
          </Text>
          <Text className="text-xs text-gray-600 ml-4">
            • Dynamic styling based on state or props
          </Text>
          <Text className="text-xs text-gray-600 ml-4">
            • Complex conditional styling logic
          </Text>
          <Text className="text-xs text-gray-600 ml-4">
            • When you need programmatic style generation
          </Text>
        </View>

        <View className="bg-yellow-50 border border-yellow-200 p-3 rounded-md">
          <Text className="text-xs text-yellow-800">
            💡 Both approaches use the same underlying cs() function, so
            performance is identical!
          </Text>
        </View>
      </View>

      {/* Example of conditional usage */}
      <View className="p-4 bg-white m-4 rounded-lg">
        <Text className="text-lg font-bold mb-4">
          Conditional Styling Examples
        </Text>

        {/* Dynamic state example */}
        <ConditionalButton isActive={true} />
        <ConditionalButton isActive={false} />
      </View>
    </ScrollView>
  );
};

// Example component showing both approaches
const ConditionalButton: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <View className="mb-4">
      {/* Using className with conditional */}
      <Pressable
        className={`p-3 rounded-md mb-2 ${
          isActive ? "bg-blue-500" : "bg-gray-300"
        }`}
      >
        <Text
          className={`text-center font-medium ${
            isActive ? "text-white" : "text-gray-700"
          }`}
        >
          className: {isActive ? "Active" : "Inactive"}
        </Text>
      </Pressable>

      {/* Using cs() with conditional */}
      <Pressable
        style={cs(
          `p-3 rounded-md ${isActive ? "bg-green-500" : "bg-gray-300"}`
        )}
      >
        <Text
          style={cs(
            `text-center font-medium ${
              isActive ? "text-white" : "text-gray-700"
            }`
          )}
        >
          cs(): {isActive ? "Active" : "Inactive"}
        </Text>
      </Pressable>
    </View>
  );
};

export default ClassNameDemo;
