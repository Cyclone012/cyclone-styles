import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { Appearance, ColorSchemeName } from "react-native";

// Global theme state - outside React to avoid context issues
let globalThemeState = {
  isDark: false,
  mode: "system" as "light" | "dark" | "system",
  systemScheme: "light" as ColorSchemeName,
};

// Global listeners for theme changes
const themeListeners = new Set<() => void>();

// Global theme update function
export const updateGlobalTheme = (
  newState: Partial<typeof globalThemeState>
) => {
  const prevIsDark = globalThemeState.isDark;

  globalThemeState = { ...globalThemeState, ...newState };

  // Calculate isDark
  globalThemeState.isDark =
    globalThemeState.mode === "dark" ||
    (globalThemeState.mode === "system" &&
      globalThemeState.systemScheme === "dark");

  console.log("🔄 Global theme updated:", globalThemeState);

  // Notify cs() function about theme change
  try {
    const { setThemeContext } = require("./cs");
    setThemeContext({ isDark: globalThemeState.isDark });
  } catch (error) {
    console.error("Failed to update cs theme context:", error);
  }

  // Notify all listeners if isDark actually changed
  if (prevIsDark !== globalThemeState.isDark) {
    console.log(
      "🎨 Theme changed, notifying",
      themeListeners.size,
      "listeners"
    );
    themeListeners.forEach((listener) => {
      try {
        listener();
      } catch (error) {
        console.error("Theme listener error:", error);
      }
    });
  }
};

// Get current global theme state
export const getGlobalTheme = () => ({ ...globalThemeState });

// Subscribe to theme changes
export const subscribeToGlobalTheme = (listener: () => void): (() => void) => {
  themeListeners.add(listener);
  return () => {
    themeListeners.delete(listener);
  };
};

// Theme context for React components
interface ThemeContextType {
  isDark: boolean;
  mode: "light" | "dark" | "system";
  systemScheme: ColorSchemeName;
  setMode: (mode: "light" | "dark" | "system") => void;
  toggleTheme: () => void;
  forceUpdate: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

// Storage helper
const themeStorage = {
  async get(): Promise<"light" | "dark" | "system"> {
    try {
      const AsyncStorage =
        require("@react-native-async-storage/async-storage").default;
      const saved = await AsyncStorage.getItem("cyclone-theme-mode");
      return (saved as any) || "system";
    } catch {
      return "system";
    }
  },
  async set(mode: "light" | "dark" | "system"): Promise<void> {
    try {
      const AsyncStorage =
        require("@react-native-async-storage/async-storage").default;
      await AsyncStorage.setItem("cyclone-theme-mode", mode);
    } catch {
      // Ignore storage errors
    }
  },
};

// Theme Provider
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [renderKey, setRenderKey] = useState(0);
  const [localState, setLocalState] = useState(() => getGlobalTheme());

  // Force re-render function
  const forceUpdate = useCallback(() => {
    setRenderKey((prev) => prev + 1);
    setLocalState(getGlobalTheme());
  }, []);

  // Initialize theme on mount
  useEffect(() => {
    const initialize = async () => {
      // Get system theme
      const systemScheme = Appearance.getColorScheme();

      // Load saved mode
      const savedMode = await themeStorage.get();

      // Update global state
      updateGlobalTheme({
        mode: savedMode,
        systemScheme,
      });

      // Update local state
      setLocalState(getGlobalTheme());
    };

    initialize();
  }, []);

  // Listen to system theme changes
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      console.log("📱 System theme changed to:", colorScheme);
      updateGlobalTheme({ systemScheme: colorScheme });
      forceUpdate();
    });

    return () => subscription?.remove();
  }, [forceUpdate]);

  // Subscribe to global theme changes
  useEffect(() => {
    const unsubscribe = subscribeToGlobalTheme(() => {
      console.log("🔄 Theme listener triggered, forcing update");
      forceUpdate();
    });
    return unsubscribe;
  }, [forceUpdate]);

  // Theme actions
  const setMode = useCallback(
    async (mode: "light" | "dark" | "system") => {
      console.log("🔄 Setting mode to:", mode);

      // Save to storage
      await themeStorage.set(mode);

      // Update global state
      updateGlobalTheme({ mode });

      // Force update
      forceUpdate();
    },
    [forceUpdate]
  );

  const toggleTheme = useCallback(() => {
    const newMode = localState.isDark ? "light" : "dark";
    console.log("🔄 Toggling theme to:", newMode);
    setMode(newMode);
  }, [localState.isDark, setMode]);

  const contextValue: ThemeContextType = {
    isDark: localState.isDark,
    mode: localState.mode,
    systemScheme: localState.systemScheme,
    setMode,
    toggleTheme,
    forceUpdate,
  };

  console.log("🎨 ThemeProvider render:", { renderKey, ...localState });

  return React.createElement(
    ThemeContext.Provider,
    { value: contextValue, key: renderKey },
    children
  );
};

// Hook to use the theme
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};

// Hook for components that use cs() directly - forces re-render on theme change
export const useThemeAware = () => {
  const [, setUpdate] = useState({});

  useEffect(() => {
    const unsubscribe = subscribeToGlobalTheme(() => {
      console.log("🔄 useThemeAware: forcing re-render");
      setUpdate({});
    });
    return unsubscribe;
  }, []);

  return null;
};

// Initialize global theme state on module load
const initializeGlobalTheme = () => {
  const systemScheme = Appearance.getColorScheme();
  updateGlobalTheme({
    mode: "system",
    systemScheme,
  });
};

// Initialize immediately
initializeGlobalTheme();
