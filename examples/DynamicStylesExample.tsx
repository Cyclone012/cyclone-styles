/**
 * Dynamic Styling Example
 *
 * Shows how to use cs() function for dynamic and conditional styling
 */

import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { cs, useTheme } from "../src/index";

// For this example, we need to import the cs function from the main library
// In a real app, you would import from 'cyclonewind'
const csFunc = require("../src/cs").default;

export default function DynamicStylesExample() {
  const [isToggled, setIsToggled] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const [count, setCount] = useState(0);
  const { isDark, toggleTheme } = useTheme();

  return (
    <ScrollView className="flex-1 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <View className="bg-green-600 dark:bg-green-700 p-6">
        <Text className="text-white text-2xl font-bold text-center">
          Dynamic Styling 🚀
        </Text>
        <Text className="text-green-100 text-center mt-2">
          Using cs() for conditional styles
        </Text>
      </View>

      {/* Toggle Example */}
      <View className="bg-white dark:bg-gray-800 m-4 p-6 rounded-lg shadow-lg">
        <Text className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Toggle State
        </Text>

        <TouchableOpacity
          style={csFunc(
            `p-4 rounded-lg ${isToggled ? "bg-green-500" : "bg-gray-300"}`
          )}
          onPress={() => setIsToggled(!isToggled)}
        >
          <Text
            style={csFunc(
              `text-center font-medium ${
                isToggled ? "text-white" : "text-gray-700"
              }`
            )}
          >
            {isToggled ? "ON" : "OFF"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Tab Navigation */}
      <View className="bg-white dark:bg-gray-800 m-4 p-6 rounded-lg shadow-lg">
        <Text className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Tab Navigation
        </Text>

        <View className="flex-row bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
          {["Home", "Profile", "Settings"].map((tab, index) => (
            <TouchableOpacity
              key={tab}
              style={csFunc(
                `flex-1 p-3 rounded-md ${
                  selectedTab === index ? "bg-blue-500" : ""
                }`
              )}
              onPress={() => setSelectedTab(index)}
            >
              <Text
                style={csFunc(
                  `text-center font-medium ${
                    selectedTab === index
                      ? "text-white"
                      : "text-gray-600 dark:text-gray-300"
                  }`
                )}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded">
          <Text className="text-gray-700 dark:text-gray-300">
            Selected: {["Home", "Profile", "Settings"][selectedTab]}
          </Text>
        </View>
      </View>

      {/* Counter with Dynamic Colors */}
      <View className="bg-white dark:bg-gray-800 m-4 p-6 rounded-lg shadow-lg">
        <Text className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Dynamic Counter
        </Text>

        <View
          style={csFunc(
            `p-6 rounded-lg mb-4 ${
              count > 10
                ? "bg-red-100 dark:bg-red-900"
                : count > 5
                ? "bg-yellow-100 dark:bg-yellow-900"
                : "bg-green-100 dark:bg-green-900"
            }`
          )}
        >
          <Text
            style={csFunc(
              `text-center text-3xl font-bold ${
                count > 10
                  ? "text-red-700 dark:text-red-300"
                  : count > 5
                  ? "text-yellow-700 dark:text-yellow-300"
                  : "text-green-700 dark:text-green-300"
              }`
            )}
          >
            {count}
          </Text>
        </View>

        <View className="flex-row gap-3">
          <TouchableOpacity
            style={csFunc("flex-1 bg-blue-500 p-3 rounded")}
            onPress={() => setCount(count + 1)}
          >
            <Text style={csFunc("text-white text-center font-medium")}>
              Increment
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={csFunc("flex-1 bg-red-500 p-3 rounded")}
            onPress={() => setCount(Math.max(0, count - 1))}
          >
            <Text style={csFunc("text-white text-center font-medium")}>
              Decrement
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Theme Toggle */}
      <View className="bg-white dark:bg-gray-800 m-4 p-6 rounded-lg shadow-lg">
        <Text className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Theme Control
        </Text>

        <TouchableOpacity
          style={csFunc(
            `p-4 rounded-lg ${isDark ? "bg-yellow-500" : "bg-gray-800"}`
          )}
          onPress={toggleTheme}
        >
          <Text
            style={csFunc(
              `text-center font-medium ${isDark ? "text-black" : "text-white"}`
            )}
          >
            Switch to {isDark ? "Light" : "Dark"} Mode
          </Text>
        </TouchableOpacity>
      </View>

      {/* Code Example */}
      <View className="bg-blue-50 dark:bg-blue-900 m-4 p-4 rounded-lg">
        <Text className="text-blue-800 dark:text-blue-200 font-bold mb-2">
          💡 cs() Usage Pattern
        </Text>
        <Text className="text-blue-700 dark:text-blue-300 text-sm font-mono">
          {`style={csFunc(\`base-classes \${condition ? 'true-classes' : 'false-classes'}\`)}`}
        </Text>
      </View>
    </ScrollView>
  );
}
