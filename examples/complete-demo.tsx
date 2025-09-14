/**
 * Complete Cyclone Styles Demo
 * Shows all three styling approaches:
 * 1. className prop (NativeWind style)
 * 2. cs() function
 * 3. Direct styles ($)
 */

import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  TextInput,
  Switch,
} from "react-native";

// Import preset to enable all features
import "cyclone-styles/preset";

// Import individual features as needed
import { cs, $ } from "cyclone-styles";

const CompleteCycloneDemo = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <ScrollView
      className={`flex-1 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}
    >
      {/* Header with theme toggle */}
      <View
        className={`p-4 ${isDarkMode ? "bg-gray-800" : "bg-white"} border-b ${
          isDarkMode ? "border-gray-700" : "border-gray-200"
        }`}
      >
        <Text
          className={`text-2xl font-bold ${
            isDarkMode ? "text-white" : "text-gray-900"
          } mb-4`}
        >
          🌪️ Cyclone Styles Complete Demo
        </Text>

        <View className="flex-row items-center justify-between">
          <Text
            className={`text-base font-medium ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Dark Mode
          </Text>
          <Switch
            value={isDarkMode}
            onValueChange={setIsDarkMode}
            trackColor={{ false: "#767577", true: "#3B82F6" }}
            thumbColor={isDarkMode ? "#FFFFFF" : "#F3F4F6"}
          />
        </View>
      </View>

      {/* Method 1: className approach */}
      <View
        className={`m-4 p-4 rounded-lg ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } shadow-md`}
      >
        <Text
          className={`text-lg font-bold ${
            isDarkMode ? "text-white" : "text-gray-900"
          } mb-3`}
        >
          1. className Approach (NativeWind style)
        </Text>

        <View className="space-y-3">
          <TextInput
            className={`border rounded-md p-3 ${
              isDarkMode
                ? "border-gray-600 bg-gray-700 text-white"
                : "border-gray-300 bg-white text-gray-900"
            }`}
            placeholder="Type something with className..."
            placeholderTextColor={isDarkMode ? "#9CA3AF" : "#6B7280"}
            value={inputValue}
            onChangeText={setInputValue}
          />

          <Pressable
            className={`p-3 rounded-md ${
              inputValue ? "bg-green-500" : "bg-gray-400"
            }`}
          >
            <Text className="text-white text-center font-medium">
              {inputValue ? "Form Ready!" : "Enter text above"}
            </Text>
          </Pressable>
        </View>
      </View>

      {/* Method 2: cs() function approach */}
      <View
        style={cs(
          `m-4 p-4 rounded-lg shadow-md ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          }`
        )}
      >
        <Text
          style={cs(
            `text-lg font-bold mb-3 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`
          )}
        >
          2. cs() Function Approach
        </Text>

        <View style={cs("space-y-3")}>
          <Pressable
            style={cs(
              `p-3 rounded-md ${isActive ? "bg-blue-500" : "bg-gray-400"}`
            )}
            onPress={() => setIsActive(!isActive)}
          >
            <Text style={cs("text-white text-center font-medium")}>
              {isActive ? "Active State" : "Tap to Activate"}
            </Text>
          </Pressable>

          <View
            style={cs(
              `p-3 rounded-md border-2 ${
                isActive
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300 bg-gray-50"
              }`
            )}
          >
            <Text
              style={cs(
                `text-sm ${isActive ? "text-blue-700" : "text-gray-600"}`
              )}
            >
              Dynamic styling based on state: {isActive ? "ACTIVE" : "INACTIVE"}
            </Text>
          </View>
        </View>
      </View>

      {/* Method 3: Direct styles approach */}
      <View
        style={[
          $.m4(),
          $.p4(),
          $.roundedLg(),
          $.shadow(),
          { backgroundColor: isDarkMode ? "#374151" : "#ffffff" },
        ]}
      >
        <Text
          style={[
            $.textLg(),
            $.fontBold(),
            $.m3(),
            { color: isDarkMode ? "#ffffff" : "#000000" },
          ]}
        >
          3. Direct Styles Approach ($)
        </Text>

        <View
          style={[$.flexRow(), { justifyContent: "space-between", margin: 16 }]}
        >
          <View
            style={[
              $.flex1(),
              $.p3(),
              $.rounded(),
              $.bgBlue(),
              { marginRight: 8 },
            ]}
          >
            <Text style={[$.textWhite(), $.textCenter(), $.textSm()]}>
              Direct
            </Text>
          </View>

          <View
            style={[
              $.flex1(),
              $.p3(),
              $.rounded(),
              $.bgGreen(),
              { marginRight: 8 },
            ]}
          >
            <Text style={[$.textWhite(), $.textCenter(), $.textSm()]}>
              Style
            </Text>
          </View>

          <View style={[$.flex1(), $.p3(), $.rounded(), $.bgRed()]}>
            <Text style={[$.textWhite(), $.textCenter(), $.textSm()]}>
              Objects
            </Text>
          </View>
        </View>
      </View>

      {/* Mixed approach example */}
      <View
        className={`m-4 p-4 rounded-lg ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } shadow-md`}
      >
        <Text
          style={cs(
            `text-lg font-bold mb-3 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`
          )}
        >
          4. Mixed Approaches
        </Text>

        <Text
          className={`text-sm ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          } mb-4`}
        >
          You can mix and match all three approaches in the same component!
        </Text>

        {/* Card with mixed styling */}
        <View
          style={[
            $.rounded(),
            $.shadow(),
            {
              padding: 16,
              backgroundColor: isDarkMode ? "#374151" : "#F9FAFB",
            },
          ]}
        >
          <Text
            className={`font-semibold mb-2 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Mixed Styling Card
          </Text>

          <Text
            style={cs(
              `text-sm mb-3 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`
            )}
          >
            • Header uses className • This text uses cs() function • Container
            uses direct styles ($) • Custom styles mixed in
          </Text>

          <View className="flex-row space-x-2">
            <Pressable
              style={[$.p2(), $.rounded(), $.bgBlue(), { flex: 1 }]}
              className="items-center"
            >
              <Text style={cs("text-white text-sm font-medium")}>
                Mixed Button
              </Text>
            </Pressable>
          </View>
        </View>
      </View>

      {/* Performance showcase */}
      <View
        className={`m-4 p-4 rounded-lg ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } shadow-md`}
      >
        <Text
          className={`text-lg font-bold ${
            isDarkMode ? "text-white" : "text-gray-900"
          } mb-3`}
        >
          5. Performance & Features
        </Text>

        <View className="space-y-2">
          <Text
            className={`text-sm ${
              isDarkMode ? "text-green-400" : "text-green-600"
            }`}
          >
            ✅ All approaches have identical performance
          </Text>
          <Text
            className={`text-sm ${
              isDarkMode ? "text-green-400" : "text-green-600"
            }`}
          >
            ✅ All support dark mode, responsive, arbitrary values
          </Text>
          <Text
            className={`text-sm ${
              isDarkMode ? "text-green-400" : "text-green-600"
            }`}
          >
            ✅ All 8,220+ Tailwind utilities available
          </Text>
          <Text
            className={`text-sm ${
              isDarkMode ? "text-green-400" : "text-green-600"
            }`}
          >
            ✅ TypeScript support with autocompletion
          </Text>
        </View>

        {/* Showcase advanced features */}
        <View className="mt-4 space-y-2">
          <Text
            className={`text-sm font-medium ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Advanced Features Demo:
          </Text>

          {/* Arbitrary values */}
          <View className="bg-[#ff6b6b] p-[12px] rounded-[8px]">
            <Text className="text-white text-[14px] font-[500]">
              Arbitrary values: bg-[#ff6b6b] p-[12px] text-[14px]
            </Text>
          </View>

          {/* Opacity */}
          <View className="bg-blue-500/20 border border-blue-500/40 p-3 rounded-md">
            <Text
              className={`text-sm ${
                isDarkMode ? "text-blue-300" : "text-blue-700"
              }`}
            >
              Opacity support: bg-blue-500/20 border-blue-500/40
            </Text>
          </View>

          {/* Responsive */}
          <View className="bg-red-500 sm:bg-green-500 md:bg-blue-500 lg:bg-purple-500 p-3 rounded-md">
            <Text className="text-white text-sm">
              Responsive: red → green (sm) → blue (md) → purple (lg)
            </Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View
        className={`m-4 p-6 rounded-lg ${
          isDarkMode ? "bg-gray-800" : "bg-blue-50"
        } ${isDarkMode ? "border-gray-700" : "border-blue-200"} border`}
      >
        <Text
          className={`text-center text-lg font-bold ${
            isDarkMode ? "text-blue-400" : "text-blue-700"
          } mb-2`}
        >
          🌪️ Cyclone Styles v0.0.1-beta
        </Text>
        <Text
          className={`text-center text-sm ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Choose your preferred styling approach - they all work together
          seamlessly!
        </Text>
      </View>
    </ScrollView>
  );
};

export default CompleteCycloneDemo;
