// 🧠 CycloneWind Smart Patching Demo

/*
   🎯 SMART PATCHING FEATURES:

   ✅ Auto-Detection: Automatically detects React Native components when accessed
   ✅ Lazy Loading: Only patches components that are actually used
   ✅ Zero Errors: Avoids property definition errors in Expo/strict environments  
   ✅ Usage Stats: Tracks which components are being wrapped and how often
   ✅ Performance: No upfront overhead - patches happen on-demand

   🔄 HOW IT WORKS:

   1. Module Proxy: Intercepts react-native module imports via Module.prototype.require
   2. Smart Detection: Uses heuristics to identify RN components (naming patterns, function signatures)
   3. Lazy Wrapping: Creates className-enabled wrappers only when components are first accessed
   4. Usage Tracking: Monitors which components are being used for debugging/optimization
   5. Fallback Safety: Multiple patching strategies ensure className works in any environment

   📊 BENEFITS:

   - No more "Cannot redefine property" errors in Expo
   - Faster startup (no upfront patching of unused components)  
   - Better debugging with usage statistics
   - Automatic component detection (no hardcoded lists)
   - Works with custom RN components and third-party libraries
*/

import "cyclonewind/preset"; // Enables smart patching automatically
import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { getComponentUsageStats } from "cyclonewind";

export default function SmartPatchingDemo() {
  console.log(
    "🧠 Smart Patching Demo: Components will be auto-wrapped when first used"
  );

  // At this point, components are not yet wrapped - they're wrapped when JSX is created
  React.useEffect(() => {
    // Check usage stats after component render
    setTimeout(() => {
      const stats = getComponentUsageStats();
      console.log("📊 Component Usage Stats:", stats);
    }, 1000);
  }, []);

  return (
    <ScrollView className="flex-1 bg-gray-50 p-4">
      {/* Each component gets smart-wrapped when first accessed */}

      <View className="bg-blue-500 p-6 rounded-lg mb-4">
        <Text className="text-white text-2xl font-bold text-center">
          🧠 Smart Patching Active!
        </Text>
        <Text className="text-white text-center mt-2">
          Components are auto-detected and wrapped on-demand
        </Text>
      </View>

      <TouchableOpacity
        className="bg-green-500 p-4 rounded-lg mb-4"
        onPress={() => {
          const stats = getComponentUsageStats();
          console.log("📊 Current Stats:", stats);
          alert(`Wrapped ${stats.totalComponents} components so far!`);
        }}
      >
        <Text className="text-white text-lg font-semibold text-center">
          📊 Show Usage Stats
        </Text>
      </TouchableOpacity>

      <View className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500">
        <Text className="text-yellow-800 font-semibold mb-2">
          💡 Smart Patching Benefits:
        </Text>
        <Text className="text-yellow-700 text-sm mb-1">
          ✅ No "Cannot redefine property" errors in Expo
        </Text>
        <Text className="text-yellow-700 text-sm mb-1">
          ✅ Faster startup - only used components are wrapped
        </Text>
        <Text className="text-yellow-700 text-sm mb-1">
          ✅ Auto-detects any React Native component
        </Text>
        <Text className="text-yellow-700 text-sm">
          ✅ Provides usage statistics for optimization
        </Text>
      </View>
    </ScrollView>
  );
}

// Export demo info
export const smartPatchingInfo = {
  features: [
    "Auto-detection of RN components",
    "Lazy wrapping on first access",
    "Usage statistics tracking",
    "Expo-safe property handling",
    "Zero upfront overhead",
  ],
  benefits: [
    "No property definition errors",
    "Better performance",
    "Automatic component support",
    "Debugging insights",
  ],
};
