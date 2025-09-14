/**
 * NativeWind-style className prop transformer
 * Automatically converts className to style using cs() function
 */

import React from "react";
import { cs } from "./cs";

// Store original createElement to wrap it
const originalCreateElement = React.createElement;

// Types for className support
type ClassNameProps = {
  className?: string;
  style?: any;
};

// Components that support className transformation
const SUPPORTED_COMPONENTS = new Set([
  "View",
  "Text",
  "Image",
  "ScrollView",
  "TouchableOpacity",
  "TouchableHighlight",
  "TouchableWithoutFeedback",
  "Pressable",
  "SafeAreaView",
  "FlatList",
  "SectionList",
  "TextInput",
  "Switch",
  "Slider",
  "ActivityIndicator",
  "Modal",
  "StatusBar",
  "KeyboardAvoidingView",
  "RefreshControl",
  "ImageBackground",
]);

// Transform className to style
function transformClassNameToStyle(props: any) {
  if (!props || !props.className) {
    return props;
  }

  const { className, style, ...restProps } = props;

  // Convert className to style using cs() function
  const classNameStyle = cs(className);

  // Merge className style with existing style
  const mergedStyle = style
    ? Array.isArray(style)
      ? [classNameStyle, ...style]
      : [classNameStyle, style]
    : classNameStyle;

  return {
    ...restProps,
    style: mergedStyle,
  };
}

// Enhanced createElement that supports className
function createElementWithClassName(
  type: any,
  props: ClassNameProps | null,
  ...children: React.ReactNode[]
) {
  // Only transform if it's a supported component and has className
  if (
    props &&
    typeof type === "string" &&
    SUPPORTED_COMPONENTS.has(type) &&
    props.className
  ) {
    const transformedProps = transformClassNameToStyle(props);
    return originalCreateElement(type, transformedProps, ...children);
  }

  // For custom components, check if they accept className
  if (props && typeof type === "function" && props.className) {
    const transformedProps = transformClassNameToStyle(props);
    return originalCreateElement(type, transformedProps, ...children);
  }

  // Default behavior for everything else
  return originalCreateElement(type, props, ...children);
}

// Global className transformer setup
export function setupClassNameTransformer() {
  // Only setup once
  if ((React as any).__cycloneClassNameSetup) {
    return;
  }

  // Replace React.createElement globally
  (React as any).createElement = createElementWithClassName;
  (React as any).__cycloneClassNameSetup = true;

  // Also setup for JSX runtime if available
  try {
    const jsxRuntime = require("react/jsx-runtime");
    if (jsxRuntime && jsxRuntime.jsx) {
      const originalJsx = jsxRuntime.jsx;
      jsxRuntime.jsx = (type: any, props: any, key?: any) => {
        if (
          props &&
          typeof type === "string" &&
          SUPPORTED_COMPONENTS.has(type) &&
          props.className
        ) {
          const transformedProps = transformClassNameToStyle(props);
          return originalJsx(type, transformedProps, key);
        }
        return originalJsx(type, props, key);
      };
    }
  } catch (error) {
    // JSX runtime might not be available, that's okay
  }
}

// Reset function for testing
export function resetClassNameTransformer() {
  (React as any).createElement = originalCreateElement;
  (React as any).__cycloneClassNameSetup = false;
}

// Type declarations for className support
declare module "react-native" {
  interface ViewProps {
    className?: string;
  }

  interface TextProps {
    className?: string;
  }

  interface ImageProps {
    className?: string;
  }

  interface ScrollViewProps {
    className?: string;
  }

  interface TouchableOpacityProps {
    className?: string;
  }

  interface TouchableHighlightProps {
    className?: string;
  }

  interface TouchableWithoutFeedbackProps {
    className?: string;
  }

  interface PressableProps {
    className?: string;
  }

  interface SafeAreaViewProps {
    className?: string;
  }

  interface FlatListProps<ItemT> {
    className?: string;
  }

  interface SectionListProps<ItemT, SectionT> {
    className?: string;
  }

  interface TextInputProps {
    className?: string;
  }

  interface SwitchProps {
    className?: string;
  }

  interface SliderProps {
    className?: string;
  }

  interface ActivityIndicatorProps {
    className?: string;
  }

  interface StatusBarProps {
    className?: string;
  }

  interface KeyboardAvoidingViewProps {
    className?: string;
  }

  interface RefreshControlProps {
    className?: string;
  }

  interface ImageBackgroundProps {
    className?: string;
  }
}

export default {
  setupClassNameTransformer,
  resetClassNameTransformer,
};
