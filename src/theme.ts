import * as React from "react";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { Appearance, ColorSchemeName, Dimensions } from "react-native";

// Import the setThemeContext function from cs.ts
import { setThemeContext } from "./cs";
// Removed preset import to avoid circular dependency with preset -> global -> theme

// Simple storage interface for theme persistence
const storage = {
  async getItem(key: string): Promise<string | null> {
    try {
      // Try to import AsyncStorage dynamically
      const AsyncStorage =
        require("@react-native-async-storage/async-storage").default;
      return await AsyncStorage.getItem(key);
    } catch {
      // Fallback to no persistence if AsyncStorage is not available
      return null;
    }
  },
  async setItem(key: string, value: string): Promise<void> {
    try {
      // Try to import AsyncStorage dynamically
      const AsyncStorage =
        require("@react-native-async-storage/async-storage").default;
      await AsyncStorage.setItem(key, value);
    } catch {
      // Fallback to no persistence if AsyncStorage is not available
      return;
    }
  },
};

import {
  styles,
  getThemeColor,
  getScreenWidth,
  getScreenHeight,
  isSmallScreen,
  isMediumScreen,
  isLargeScreen,
  breakpoints,
  getCurrentBreakpoint,
  matchesBreakpoint,
  isAtLeastBreakpoint,
} from "./styles";

// Responsive hook for screen size changes
export const useResponsive = () => {
  const [screenData, setScreenData] = useState(() => ({
    width: getScreenWidth(),
    height: getScreenHeight(),
    isSmall: isSmallScreen(),
    isMedium: isMediumScreen(),
    isLarge: isLargeScreen(),
  }));

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setScreenData({
        width: window.width,
        height: window.height,
        isSmall: window.width < 768,
        isMedium: window.width >= 768 && window.width < 1024,
        isLarge: window.width >= 1024,
      });
    });

    return () => subscription?.remove?.();
  }, []);

  return screenData;
};

// Responsive style helper
export const useResponsiveStyle = () => {
  const { isSmall, isMedium, isLarge, width, height } = useResponsive();

  const getStyle = (smallStyle: any, mediumStyle?: any, largeStyle?: any) => {
    if (isLarge && largeStyle) return largeStyle;
    if (isMedium && mediumStyle) return mediumStyle;
    return smallStyle;
  };

  const getResponsiveValue = (small: any, medium?: any, large?: any) => {
    if (isLarge && large !== undefined) return large;
    if (isMedium && medium !== undefined) return medium;
    return small;
  };

  return {
    isSmall,
    isMedium,
    isLarge,
    width,
    height,
    getStyle,
    getResponsiveValue,
  };
};

// Theme context interface
export type ThemeMode = "light" | "dark" | "system";

interface ThemeContextType {
  theme: {
    colors: {
      background: string;
      foreground: string;
      text: string;
      primary: string;
      secondary: string;
      accent: string;
      muted: string;
      border: string;
      input: string;
      ring: string;
      destructive: string;
    };
    spacing: Record<string, number>;
    borderRadius: Record<string, number>;
    fontSize: Record<string, number>;
  };
  mode: ThemeMode;
  isDark: boolean;
  setMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
}

export type { ThemeContextType };

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Custom theme color utilities
export const getThemeValue = (
  lightValue: string,
  darkValue: string,
  isDark: boolean
): string => {
  return isDark ? darkValue : lightValue;
};

// Get theme colors with support for all color variations
const themeColors: { [key: string]: { light: string; dark: string } } = {
  background: { light: "#ffffff", dark: "#000000" },
  foreground: { light: "#000000", dark: "#ffffff" },
  primary: { light: "#3b82f6", dark: "#60a5fa" },
  "primary-foreground": { light: "#ffffff", dark: "#1e3a8a" },
  secondary: { light: "#f1f5f9", dark: "#1e293b" },
  "secondary-foreground": { light: "#0f172a", dark: "#f8fafc" },
  muted: { light: "#f1f5f9", dark: "#1e293b" },
  "muted-foreground": { light: "#64748b", dark: "#94a3b8" },
  accent: { light: "#f1f5f9", dark: "#1e293b" },
  "accent-foreground": { light: "#0f172a", dark: "#f8fafc" },
  destructive: { light: "#ef4444", dark: "#dc2626" },
  "destructive-foreground": { light: "#ffffff", dark: "#fef2f2" },
  border: { light: "#e2e8f0", dark: "#1e293b" },
  input: { light: "#e2e8f0", dark: "#1e293b" },
  ring: { light: "#3b82f6", dark: "#60a5fa" },
};

export const getThemeColorValue = (colorKey: string, isDark: boolean) => {
  return getThemeValue(
    themeColors[colorKey].light,
    themeColors[colorKey].dark,
    isDark
  );
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
}: ThemeProviderProps) => {
  const [mode, setMode] = useState<ThemeMode>("system");
  const [systemColorScheme, setSystemColorScheme] = useState<ColorSchemeName>(
    Appearance.getColorScheme()
  );

  // Load saved theme mode
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedMode = await storage.getItem("theme-mode");
        if (
          savedMode &&
          (savedMode === "system" ||
            savedMode === "light" ||
            savedMode === "dark")
        ) {
          setMode(savedMode as ThemeMode);
        }
      } catch (error) {
        console.error("Failed to load theme mode:", error);
      }
    };
    loadTheme();
  }, []);

  // Listen to system color scheme changes
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setSystemColorScheme(colorScheme);
    });
    return () => subscription?.remove();
  }, []);

  // Save theme mode
  const handleSetMode = async (newMode: ThemeMode) => {
    try {
      setMode(newMode);
      await storage.setItem("theme-mode", newMode);
    } catch (error) {
      console.error("Failed to save theme mode:", error);
    }
  };

  // Calculate isDark based on mode and system
  const isDark =
    mode === "dark" || (mode === "system" && systemColorScheme === "dark");

  // Update the global theme context for cs() function
  useEffect(() => {
    setThemeContext({ isDark });
  }, [isDark]);

  // Toggle between light and dark (skip system)
  const toggleTheme = () => {
    const newMode = isDark ? "light" : "dark";
    handleSetMode(newMode);
  };

  // Create theme object based on current mode
  const theme = {
    colors: {
      background: isDark ? "#0f0f23" : "#ffffff",
      foreground: isDark ? "#ffffff" : "#0f0f23",
      text: isDark ? "#ffffff" : "#0f0f23",
      primary: isDark ? "#3b82f6" : "#2563eb",
      secondary: isDark ? "#1f2937" : "#f3f4f6",
      accent: isDark ? "#8b5cf6" : "#7c3aed",
      muted: isDark ? "#374151" : "#6b7280",
      border: isDark ? "#374151" : "#d1d5db",
      input: isDark ? "#1f2937" : "#ffffff",
      ring: isDark ? "#3b82f6" : "#2563eb",
      destructive: isDark ? "#ef4444" : "#dc2626",
    },
    spacing: {
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,
      "2xl": 48,
    },
    borderRadius: {
      none: 0,
      sm: 2,
      md: 6,
      lg: 8,
      xl: 12,
      "2xl": 16,
      full: 9999,
    },
    fontSize: {
      xs: 12,
      sm: 14,
      base: 16,
      lg: 18,
      xl: 20,
      "2xl": 24,
      "3xl": 30,
    },
  };

  const value: ThemeContextType = {
    theme,
    mode,
    isDark,
    setMode: handleSetMode,
    toggleTheme,
  };

  return React.createElement(ThemeContext.Provider, { value }, children);
};

// Default export for the theme module
const themeModule = {
  ThemeProvider,
  useTheme,
  useResponsive,
  getThemeColor,
  getScreenWidth,
  getScreenHeight,
  isSmallScreen,
  isMediumScreen,
  isLargeScreen,
  breakpoints,
  getCurrentBreakpoint,
  matchesBreakpoint,
};

export default themeModule;
