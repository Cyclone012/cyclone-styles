/**
 * Demo: Import from Nested Modules
 *
 * This demonstrates that cyclonewind/global and cyclonewind/preset
 * can be imported from anywhere in the module hierarchy
 */

import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";

// ============================================================================
// SCENARIO: Import from this module (not at the top!)
// ============================================================================

// Import can happen anywhere in the file, not just at the top
import "cyclonewind/global"; // ← This works anywhere in any module!

// ============================================================================
// EXAMPLE USAGE PATTERNS
// ============================================================================

export default function NestedImportDemo() {
  return (
    <ScrollView className="flex-1 bg-white dark:bg-gray-900">
      <View className="p-6">
        <Text className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
          🌪️ Nested Module Import Demo
        </Text>

        <View className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
          <Text className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            ✅ Import Works From Anywhere!
          </Text>

          <View className="space-y-4">
            <View className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <Text className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                📁 Example Import Locations:
              </Text>
              <View className="ml-4 space-y-1">
                <Text className="text-blue-700 dark:text-blue-400 text-sm font-mono">
                  utils/setupGlobal.ts
                </Text>
                <Text className="text-blue-700 dark:text-blue-400 text-sm font-mono">
                  components/shared/BaseComponent.tsx
                </Text>
                <Text className="text-blue-700 dark:text-blue-400 text-sm font-mono">
                  services/themeService.ts
                </Text>
                <Text className="text-blue-700 dark:text-blue-400 text-sm font-mono">
                  hooks/useGlobalStyles.ts
                </Text>
                <Text className="text-blue-700 dark:text-blue-400 text-sm font-mono">
                  screens/HomeScreen.tsx
                </Text>
              </View>
            </View>

            <View className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <Text className="font-semibold text-green-800 dark:text-green-300 mb-2">
                🎯 Benefits:
              </Text>
              <View className="ml-4 space-y-1">
                <Text className="text-green-700 dark:text-green-400 text-sm">
                  • No need to import at app root
                </Text>
                <Text className="text-green-700 dark:text-green-400 text-sm">
                  • Works from any module depth
                </Text>
                <Text className="text-green-700 dark:text-green-400 text-sm">
                  • Automatic global initialization
                </Text>
                <Text className="text-green-700 dark:text-green-400 text-sm">
                  • className support everywhere after import
                </Text>
              </View>
            </View>

            <View className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
              <Text className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                📝 Usage Examples:
              </Text>
              <View className="space-y-3">
                <View>
                  <Text className="text-purple-800 dark:text-purple-300 font-mono text-xs mb-1">
                    // In any utility file:
                  </Text>
                  <Text className="text-purple-700 dark:text-purple-400 font-mono text-xs bg-purple-100 dark:bg-purple-900/50 p-2 rounded">
                    import "cyclonewind/global";
                  </Text>
                </View>
                <View>
                  <Text className="text-purple-800 dark:text-purple-300 font-mono text-xs mb-1">
                    // In any component:
                  </Text>
                  <Text className="text-purple-700 dark:text-purple-400 font-mono text-xs bg-purple-100 dark:bg-purple-900/50 p-2 rounded">
                    import "cyclonewind/preset";
                  </Text>
                </View>
                <View>
                  <Text className="text-purple-800 dark:text-purple-300 font-mono text-xs mb-1">
                    // In services, hooks, anywhere:
                  </Text>
                  <Text className="text-purple-700 dark:text-purple-400 font-mono text-xs bg-purple-100 dark:bg-purple-900/50 p-2 rounded">
                    import "cyclonewind/global";
                  </Text>
                </View>
              </View>
            </View>

            <Pressable className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg shadow-lg">
              <Text className="text-white font-bold text-center text-lg">
                🎉 className Works Everywhere!
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

// ============================================================================
// CODE EXAMPLES (as comments to show the patterns)
// ============================================================================

/*
// Example 1: Import in a utility module
// utils/globalSetup.ts
import "cyclonewind/global";

export function setupApp() {
  console.log("App setup with global className!");
}

// Example 2: Import in a service
// services/StyleService.ts  
import "cyclonewind/preset";

export class StyleService {
  static initialize() {
    console.log("Styles initialized!");
  }
}

// Example 3: Import in a hook
// hooks/useStyles.ts
import "cyclonewind/global";
import { useCallback } from 'react';

export function useStyles() {
  return useCallback(() => {
    console.log("Styles ready!");
  }, []);
}

// Example 4: Import in any component
// components/MyComponent.tsx
import React from 'react';
import { View, Text } from 'react-native';
import "cyclonewind/global"; // ← Works here!

export function MyComponent() {
  return (
    <View className="p-4 bg-blue-500">
      <Text className="text-white">
        className works!
      </Text>
    </View>
  );
}
*/
