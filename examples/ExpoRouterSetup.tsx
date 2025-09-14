/**
 * Expo Router Layout Examples with CycloneWind
 *
 * Shows how to setup CycloneWind with Expo Router's Stack and Slot components
 */

// Example 1: app/_layout.tsx (Expo Router with Stack)
/*
import 'cyclonewind/preset';
import { ThemeProvider } from 'cyclonewind';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="profile" options={{ title: 'Profile' }} />
        <Stack.Screen name="settings" options={{ title: 'Settings' }} />
      </Stack>
    </ThemeProvider>
  );
}
*/

// Example 2: app/_layout.tsx (Expo Router with Slot)
/*
import 'cyclonewind/preset';
import { ThemeProvider } from 'cyclonewind';
import { Slot } from 'expo-router';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Slot />
    </ThemeProvider>
  );
}
*/

// Example 3: app/(tabs)/_layout.tsx (Tab Layout)
/*
import { ThemeProvider } from 'cyclonewind';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <ThemeProvider>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          }}
        />
      </Tabs>
    </ThemeProvider>
  );
}
*/

// Example 4: Using CycloneWind in your screens
/*
// app/index.tsx
import { View, Text, Pressable } from 'cyclonewind';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white dark:bg-gray-900 p-6">
      <Text className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Welcome Home! 🌪️
      </Text>
      
      <Text className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        CycloneWind is working perfectly with Expo Router!
      </Text>
      
      <Link href="/profile" asChild>
        <Pressable className="bg-blue-500 dark:bg-blue-600 p-4 rounded-lg mb-4">
          <Text className="text-white text-center font-semibold text-lg">
            Go to Profile
          </Text>
        </Pressable>
      </Link>
      
      <Link href="/settings" asChild>
        <Pressable className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">
          <Text className="text-gray-900 dark:text-white text-center font-semibold text-lg">
            Settings
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}
*/

export {}; // Make this a module
