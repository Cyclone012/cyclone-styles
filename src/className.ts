import React from "react";
import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from "react-native";
import { cs } from "./cs";

type Style = ViewStyle | TextStyle | ImageStyle;

const cache = new Map<string, Style>();
const customClasses: Record<string, Style> = {};

export function vars(variables: Record<string, string | number>) {
  // CSS variables support
  cache.clear();
}

export function registerCustomClass(name: string, styleObject: Style) {
  customClasses[name] = styleObject;
  cache.clear();
}

export function registerCustomClasses(classMap: Record<string, Style>) {
  Object.assign(customClasses, classMap);
  cache.clear();
}

function convertClassNameToStyle(className: string): Style {
  if (!className || typeof className !== "string") {
    return {};
  }

  if (cache.has(className)) {
    return cache.get(className)!;
  }

  const classes = className.split(/\s+/).filter((c) => c.length > 0);
  const resolvedStyles: Style[] = [];

  for (const cls of classes) {
    if (customClasses[cls]) {
      resolvedStyles.push(customClasses[cls]);
      continue;
    }

    try {
      const style = cs(cls);
      if (style && Object.keys(style).length > 0) {
        resolvedStyles.push(style);
      }
    } catch (error) {
      console.warn(`Invalid className: ${cls}`);
    }
  }

  const flattenedStyle = StyleSheet.flatten(resolvedStyles);
  cache.set(className, flattenedStyle);
  return flattenedStyle;
}

function transformClassNameToStyle(props: any) {
  if (!props || (!props.className && !props.contentContainerClassName)) {
    return props;
  }

  const {
    className,
    contentContainerClassName,
    style,
    contentContainerStyle,
    ...restProps
  } = props;

  let transformedProps = { ...restProps };

  // Handle regular className
  if (className) {
    const classNameStyle = convertClassNameToStyle(className);
    const mergedStyle = style
      ? Array.isArray(style)
        ? [classNameStyle, ...style]
        : [classNameStyle, style]
      : classNameStyle;
    transformedProps.style = mergedStyle;
  } else if (style) {
    transformedProps.style = style;
  }

  // Handle contentContainerClassName for ScrollView, FlatList, etc.
  if (contentContainerClassName) {
    const contentClassNameStyle = convertClassNameToStyle(
      contentContainerClassName
    );
    const mergedContentStyle = contentContainerStyle
      ? Array.isArray(contentContainerStyle)
        ? [contentClassNameStyle, ...contentContainerStyle]
        : [contentClassNameStyle, contentContainerStyle]
      : contentClassNameStyle;
    transformedProps.contentContainerStyle = mergedContentStyle;
  } else if (contentContainerStyle) {
    transformedProps.contentContainerStyle = contentContainerStyle;
  }

  return transformedProps;
}

// Enhanced React.createElement patching
const originalCreateElement = React.createElement;

function createElementWithClassName(
  type: any,
  props: any,
  ...children: React.ReactNode[]
) {
  if (props && (props.className || props.contentContainerClassName)) {
    const transformedProps = transformClassNameToStyle(props);
    return originalCreateElement(type, transformedProps, ...children);
  }
  return originalCreateElement(type, props, ...children);
}

// Direct React Native component patching
function patchReactNativeComponents() {
  try {
    const ReactNative = require("react-native");

    // List of components to patch
    const componentsToPath = [
      "View",
      "Text",
      "Image",
      "ScrollView",
      "SafeAreaView",
      "TouchableOpacity",
      "TouchableHighlight",
      "TouchableWithoutFeedback",
      "Pressable",
      "FlatList",
      "SectionList",
      "VirtualizedList",
      "TextInput",
      "Switch",
      "Slider",
      "ActivityIndicator",
      "KeyboardAvoidingView",
      "RefreshControl",
      "ImageBackground",
    ];

    componentsToPath.forEach((componentName) => {
      const OriginalComponent = ReactNative[componentName];
      if (OriginalComponent && !(OriginalComponent as any).__cyclonePatched) {
        // Create wrapped component
        const WrappedComponent = React.forwardRef((props: any, ref: any) => {
          const transformedProps = transformClassNameToStyle(props);
          return React.createElement(OriginalComponent, {
            ...transformedProps,
            ref,
          });
        });

        // Preserve component properties
        WrappedComponent.displayName = `Cyclone${componentName}`;
        (WrappedComponent as any).__cyclonePatched = true;

        // Copy static properties
        Object.setPrototypeOf(WrappedComponent, OriginalComponent);
        Object.assign(WrappedComponent, OriginalComponent);

        // Replace the component in React Native module
        ReactNative[componentName] = WrappedComponent;
      }
    });
  } catch (error) {
    console.warn("Could not patch React Native components directly:", error);
  }
}

let isSetup = false;

export function setupClassName() {
  if (isSetup) return;

  // Method 1: Patch React.createElement (works for all components)
  (React as any).createElement = createElementWithClassName;

  // Method 2: Patch React Native components directly
  patchReactNativeComponents();

  // Method 3: Patch JSX runtime
  try {
    const jsxRuntime = require("react/jsx-runtime");
    if (jsxRuntime?.jsx) {
      const originalJsx = jsxRuntime.jsx;
      jsxRuntime.jsx = (type: any, props: any, key?: any) => {
        if (props && (props.className || props.contentContainerClassName)) {
          const transformedProps = transformClassNameToStyle(props);
          return originalJsx(type, transformedProps, key);
        }
        return originalJsx(type, props, key);
      };
    }

    if (jsxRuntime?.jsxs) {
      const originalJsxs = jsxRuntime.jsxs;
      jsxRuntime.jsxs = (type: any, props: any, key?: any) => {
        if (props && (props.className || props.contentContainerClassName)) {
          const transformedProps = transformClassNameToStyle(props);
          return originalJsxs(type, transformedProps, key);
        }
        return originalJsxs(type, props, key);
      };
    }
  } catch (error) {
    // JSX runtime not available, that's okay
  }

  isSetup = true;
}

export function styled<T extends React.ComponentType<any>>(
  Component: T,
  defaultClassName?: string
) {
  const StyledComponent = React.forwardRef<
    any,
    React.ComponentProps<T> & { className?: string }
  >((props, ref) => {
    const { className, style, ...restProps } = props;

    const combinedClassName = defaultClassName
      ? className
        ? `${defaultClassName} ${className}`
        : defaultClassName
      : className;

    const classNameStyle = combinedClassName
      ? convertClassNameToStyle(combinedClassName)
      : {};

    const mergedStyle = style
      ? Array.isArray(style)
        ? [classNameStyle, ...style]
        : [classNameStyle, style]
      : classNameStyle;

    return React.createElement(Component, {
      ...restProps,
      style: mergedStyle,
      ref,
    });
  });

  StyledComponent.displayName = `Styled(${
    Component.displayName || Component.name || "Component"
  })`;
  return StyledComponent;
}

export function cssInterop(
  Component: React.ComponentType<any>,
  mapping?: Record<string, string>
) {
  return styled(Component);
}

// TypeScript declarations for className support
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
    contentContainerClassName?: string;
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
    contentContainerClassName?: string;
  }
  interface SectionListProps<ItemT, SectionT> {
    className?: string;
    contentContainerClassName?: string;
  }
  interface VirtualizedListProps<ItemT> {
    className?: string;
    contentContainerClassName?: string;
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

export { convertClassNameToStyle };
