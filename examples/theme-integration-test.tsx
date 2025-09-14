import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Switch } from "react-native";
import {
  styles,
  cs,
  ThemeProvider,
  useTheme,
  useThemeColor,
  nwc,
  useResponsive,
} from "./src/index";

// Component to test theme integration
const ThemeTestComponent = () => {
  const { isDark, toggleTheme } = useTheme();
  const { isSmall, isMedium, isLarge } = useResponsive();
  const nativeWindClasses = nwc();

  // Test theme colors
  const backgroundColor = useThemeColor("background");
  const primaryColor = useThemeColor("primary");
  const textColor = useThemeColor("foreground");

  return (
    <ScrollView
      style={cs("flex-1 p-4")}
      contentContainerStyle={{ backgroundColor }}
    >
      {/* Header */}
      <View style={cs("mb-6 p-4 rounded-xl")} backgroundColor={backgroundColor}>
        <Text style={[cs("text-2xl font-bold mb-2"), { color: textColor }]}>
          🎨 Theme Integration Test
        </Text>
        <Text style={[cs("text-base mb-4"), { color: textColor }]}>
          Current mode: {isDark ? "Dark" : "Light"}
        </Text>

        {/* Theme Toggle */}
        <View style={cs("flex-row items-center justify-between")}>
          <Text style={[cs("text-lg"), { color: textColor }]}>
            Toggle Theme:
          </Text>
          <Switch value={isDark} onValueChange={toggleTheme} />
        </View>
      </View>

      {/* Screen Size Info */}
      <View style={cs("mb-6 p-4 bg-blue-100 rounded-xl")}>
        <Text style={cs("text-lg font-semibold mb-2 text-blue-900")}>
          📱 Responsive Info
        </Text>
        <Text style={cs("text-blue-800")}>
          Screen: {isSmall ? "Small" : isMedium ? "Medium" : "Large"}
        </Text>
      </View>

      {/* Test cs() Function with Different Utilities */}
      <View style={cs("mb-6")}>
        <Text style={[cs("text-xl font-bold mb-4"), { color: textColor }]}>
          ✅ cs() Function Test
        </Text>

        {/* Layout Test */}
        <View style={cs("flex-row gap-2 mb-4")}>
          <View style={cs("flex-1 bg-red-500 p-3 rounded-lg")}>
            <Text style={cs("text-white text-center")}>Layout</Text>
          </View>
          <View style={cs("flex-1 bg-green-500 p-3 rounded-lg")}>
            <Text style={cs("text-white text-center")}>Works</Text>
          </View>
          <View style={cs("flex-1 bg-blue-500 p-3 rounded-lg")}>
            <Text style={cs("text-white text-center")}>Great!</Text>
          </View>
        </View>

        {/* Typography Test */}
        <View style={cs("bg-white p-4 rounded-lg mb-4")}>
          <Text style={cs("text-2xl font-bold text-gray-900 mb-2")}>
            Typography Test
          </Text>
          <Text style={cs("text-lg text-gray-700 mb-1")}>Large text</Text>
          <Text style={cs("text-base text-gray-600 mb-1")}>Base text</Text>
          <Text style={cs("text-sm text-gray-500")}>Small text</Text>
        </View>

        {/* Color Test */}
        <View style={cs("flex-row flex-wrap gap-2 mb-4")}>
          {["red", "orange", "yellow", "green", "blue", "indigo", "purple"].map(
            (color) => (
              <View
                key={color}
                style={cs(`bg-${color}-500 p-3 rounded-lg flex-1`)}
              >
                <Text style={cs("text-white text-center text-sm")}>
                  {color}
                </Text>
              </View>
            )
          )}
        </View>
      </View>

      {/* Test nwc() Function (NativeWind Clone) */}
      <View style={cs("mb-6")}>
        <Text style={[cs("text-xl font-bold mb-4"), { color: textColor }]}>
          🌟 nwc() Function Test (Advanced)
        </Text>

        {/* Basic nwc test */}
        <View style={nativeWindClasses("bg-purple-500 p-4 rounded-xl mb-4")}>
          <Text style={nativeWindClasses("text-white text-lg font-semibold")}>
            nwc() Basic Test
          </Text>
        </View>

        {/* Dark mode test with nwc */}
        <View
          style={nativeWindClasses(`
          ${isDark ? "dark:bg-gray-800" : "bg-gray-100"} 
          p-4 rounded-xl mb-4
        `)}
        >
          <Text
            style={nativeWindClasses(`
            ${isDark ? "dark:text-white" : "text-gray-900"} 
            text-lg font-medium
          `)}
          >
            Dark Mode Test:{" "}
            {isDark ? "Dark theme active" : "Light theme active"}
          </Text>
        </View>

        {/* Responsive test with nwc */}
        <View
          style={nativeWindClasses(`
          p-4 rounded-xl mb-4
          ${isSmall ? "bg-yellow-400" : ""}
          ${isMedium ? "bg-orange-400" : ""}
          ${isLarge ? "bg-red-400" : ""}
        `)}
        >
          <Text style={nativeWindClasses("text-white text-lg font-semibold")}>
            Responsive:{" "}
            {isSmall
              ? "Yellow (Small)"
              : isMedium
              ? "Orange (Medium)"
              : "Red (Large)"}
          </Text>
        </View>
      </View>

      {/* Test Standard styles Object */}
      <View style={cs("mb-6")}>
        <Text style={[cs("text-xl font-bold mb-4"), { color: textColor }]}>
          📦 Standard styles Object Test
        </Text>

        <View
          style={[styles.bgGreen500, styles.p4, styles.roundedXl, styles.mb4]}
        >
          <Text style={[styles.textWhite, styles.textLg, styles.fontSemibold]}>
            Old styles object still works!
          </Text>
        </View>
      </View>

      {/* Theme Color Test */}
      <View style={cs("mb-6")}>
        <Text style={[cs("text-xl font-bold mb-4"), { color: textColor }]}>
          🎨 Theme Colors Test
        </Text>

        <View
          style={[cs("p-4 rounded-xl mb-2"), { backgroundColor: primaryColor }]}
        >
          <Text style={cs("text-white font-semibold")}>
            Primary Theme Color
          </Text>
        </View>

        <View
          style={[
            cs("p-4 rounded-xl"),
            { backgroundColor: useThemeColor("secondary") },
          ]}
        >
          <Text
            style={[
              cs("font-semibold"),
              { color: useThemeColor("secondaryForeground") },
            ]}
          >
            Secondary Theme Color
          </Text>
        </View>
      </View>

      {/* Status Summary */}
      <View style={cs("bg-green-100 p-4 rounded-xl mb-8")}>
        <Text style={cs("text-green-900 text-lg font-bold mb-2")}>
          ✅ Theme Integration Status
        </Text>
        <Text style={cs("text-green-800")}>
          • cs() function: ✅ Working{"\n"}• nwc() function: ✅ Working with
          dark mode{"\n"}• Theme colors: ✅ Working{"\n"}• Responsive: ✅
          Working{"\n"}• All utilities: ✅ Working
        </Text>
      </View>
    </ScrollView>
  );
};

// Main component with theme provider
export const ThemeIntegrationTest = () => {
  return (
    <ThemeProvider>
      <ThemeTestComponent />
    </ThemeProvider>
  );
};

export default ThemeIntegrationTest;
