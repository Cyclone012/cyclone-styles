/**
 * Custom Styles Example
 *
 * Shows how to register custom styles and use them as className utilities
 */

import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { cs } from "../src/index";

// Register custom styles (do this once, typically at app startup)
cs.registerCustomClass("primary-btn", {
  backgroundColor: "#3B82F6",
  paddingVertical: 12,
  paddingHorizontal: 24,
  borderRadius: 8,
  alignItems: "center",
  justifyContent: "center",
});

cs.registerCustomClass("success-btn", {
  backgroundColor: "#10B981",
  paddingVertical: 12,
  paddingHorizontal: 24,
  borderRadius: 8,
  alignItems: "center",
  justifyContent: "center",
});

cs.registerCustomClass("card-title", {
  fontSize: 20,
  fontWeight: "bold",
  color: "#1F2937",
  marginBottom: 8,
});

cs.registerCustomClass("feature-card", {
  backgroundColor: "#ffffff",
  padding: 20,
  margin: 16,
  borderRadius: 12,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 8,
  elevation: 3,
});

// Register multiple styles at once
cs.registerCustomClasses({
  "badge-success": {
    backgroundColor: "#10B981",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  "badge-warning": {
    backgroundColor: "#F59E0B",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  "badge-text": {
    fontSize: 12,
    fontWeight: "600",
    color: "#ffffff",
  },
});

export default function CustomStylesExample() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-purple-600 p-6">
        <Text className="text-white text-2xl font-bold text-center">
          Custom Styles Demo 🎨
        </Text>
        <Text className="text-purple-100 text-center mt-2">
          Your styles as className utilities
        </Text>
      </View>

      {/* Custom Card */}
      <View className="feature-card">
        <Text className="card-title">Custom Registered Styles</Text>
        <Text className="text-gray-600 mb-4">
          These components use custom styles registered with
          cs.registerCustomClass()
        </Text>

        {/* Custom Buttons */}
        <View className="gap-3">
          <TouchableOpacity className="primary-btn">
            <Text className="text-white font-medium">Primary Button</Text>
          </TouchableOpacity>

          <TouchableOpacity className="success-btn">
            <Text className="text-white font-medium">Success Button</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Badges Example */}
      <View className="feature-card">
        <Text className="card-title">Custom Badges</Text>
        <Text className="text-gray-600 mb-4">
          Multiple custom styles registered at once
        </Text>

        <View className="flex-row gap-2">
          <View className="badge-success">
            <Text className="badge-text">Success</Text>
          </View>

          <View className="badge-warning">
            <Text className="badge-text">Warning</Text>
          </View>
        </View>
      </View>

      {/* Mixed Usage */}
      <View className="feature-card">
        <Text className="card-title">Mixed Usage</Text>
        <Text className="text-gray-600 mb-4">
          Combine custom styles with built-in utilities
        </Text>

        <TouchableOpacity className="primary-btn mt-2">
          <Text className="text-white font-bold text-lg">
            Custom + Built-in Classes
          </Text>
        </TouchableOpacity>
      </View>

      {/* Setup Instructions */}
      <View className="bg-blue-50 m-4 p-4 rounded-lg border border-blue-200">
        <Text className="text-blue-800 font-bold mb-2">💡 How to Setup</Text>
        <Text className="text-blue-700 text-sm">
          1. Import: import {`{ cs }`} from 'cyclonewind'{"\n"}
          2. Register: cs.registerCustomClass('name', {`{ styles }`}){"\n"}
          3. Use: {`<View className="name" />`}
        </Text>
      </View>
    </ScrollView>
  );
}
