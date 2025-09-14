/**
 * Correct React Native + Expo Setup Examples
 *
 * Use standard React Native components with className support
 */

// ✅ CORRECT: app/_layout.tsx (Expo Router with Stack)
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
      </Stack>
    </ThemeProvider>
  );
}
*/

// ✅ CORRECT: app/_layout.tsx (Expo Router with Slot)
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

// ✅ CORRECT: Use standard React Native components with className
/*
// app/index.tsx
import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-gray-900">
      <ScrollView className="flex-1" contentContainerClassName="p-6">
        <Text className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome Home! 🌪️
        </Text>
        
        <Text className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Using standard React Native components with className!
        </Text>
        
        <Link href="/profile" asChild>
          <Pressable className="bg-blue-500 dark:bg-blue-600 p-4 rounded-lg mb-4">
            <Text className="text-white text-center font-semibold text-lg">
              Go to Profile
            </Text>
          </Pressable>
        </Link>
        
        <View className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <Text className="text-gray-900 dark:text-white font-medium">
            This uses standard React Native View and Text components!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
*/

// ✅ CORRECT: Register custom styles and use with standard components
/*
// app/_layout.tsx - Register custom styles once
import 'cyclonewind/preset';
import { ThemeProvider, registerCustomClass } from 'cyclonewind';
import { Stack } from 'expo-router';

// Register custom styles
registerCustomClass('my-button', {
  backgroundColor: '#007AFF',
  padding: 16,
  borderRadius: 8,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 3,
});

registerCustomClass('my-card', {
  backgroundColor: '#ffffff',
  borderRadius: 12,
  padding: 20,
  margin: 16,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 8,
  elevation: 3,
});

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack />
    </ThemeProvider>
  );
}
*/

// ✅ CORRECT: Use registered custom styles with standard components
/*
// app/profile.tsx
import React from 'react';
import { View, Text, SafeAreaView, Pressable } from 'react-native';
import { useTheme } from 'cyclonewind';

export default function ProfileScreen() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <SafeAreaView className="flex-1 bg-gray-50 dark:bg-gray-900">
      <View className="my-card">
        <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Profile Screen
        </Text>
        
        <Pressable className="my-button mb-4">
          <Text className="text-white text-center font-semibold">
            Custom Button Style
          </Text>
        </Pressable>
        
        <Pressable 
          onPress={toggleTheme}
          className="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg"
        >
          <Text className="text-gray-900 dark:text-white text-center">
            {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
*/

export {}; // Make this a module
