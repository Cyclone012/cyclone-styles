/**
 * Root Layout Example - Setup Once, Use Everywhere
 * This shows how to configure cyclone-styles globally in your app's root
 */

// App.tsx - Your main app file
import "cyclone-styles/preset"; // ← This ONE line sets up everything globally!

import React from "react";
import { SafeAreaView } from "react-native";
import { ThemeProvider } from "cyclone-styles";

// Import your screens/components
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <HomeScreen />
      </SafeAreaView>
    </ThemeProvider>
  );
}

// Alternative: Custom configuration in root
/*
import { setupCycloneStyles, ThemeProvider } from 'cyclone-styles';

// Configure with your brand colors
setupCycloneStyles({
  colors: {
    primary: '#007AFF',
    secondary: '#5856D6',
  },
  spacing: {
    '18': 72,
  },
  extend: {
    utilities: {
      'brand-shadow': {
        shadowColor: '#007AFF',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5,
      }
    }
  }
});

export default function App() {
  return (
    <ThemeProvider>
      // Your app content
    </ThemeProvider>
  );
}
*/
