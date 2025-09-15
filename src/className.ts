import * as React from "react";
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
    // Check custom classes first
    if (customClasses[cls]) {
      resolvedStyles.push(customClasses[cls]);
      continue;
    }

    // Use cs() function for standard Tailwind classes
    try {
      const style = cs(cls);
      if (style && Object.keys(style).length > 0) {
        resolvedStyles.push(style);
      }
    } catch (error) {
      // Don't log warnings for every invalid class - too noisy
      // console.warn(`Invalid className: ${cls}`);
    }
  }

  const flattenedStyle = StyleSheet.flatten(resolvedStyles);
  cache.set(className, flattenedStyle);

  // Debug logging
  if (Object.keys(flattenedStyle).length > 0) {
    console.log(`🎨 CycloneWind: "${className}" -> styles:`, flattenedStyle);
  }

  return flattenedStyle;
}

function transformClassNameToStyle(props: any) {
  if (!props || (!props.className && !props.contentContainerClassName)) {
    return props;
  }

  console.log(
    "🔄 CycloneWind: Transforming props with className:",
    props.className
  );

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
    console.log("✅ CycloneWind: Applied className styles:", classNameStyle);
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
  // Log ALL React.createElement calls to debug what's happening
  const typeInfo =
    typeof type === "string"
      ? type
      : type?.displayName || type?.name || "Unknown";
  console.log("🔄 React.createElement called:", {
    type: typeInfo,
    hasProps: !!props,
    hasClassName: !!props?.className,
    hasContentContainerClassName: !!props?.contentContainerClassName,
    propsKeys: props ? Object.keys(props) : [],
  });

  // Always transform props if className or contentContainerClassName exists
  if (props && (props.className || props.contentContainerClassName)) {
    console.log(
      "🎯 CycloneWind: React.createElement intercepted for",
      typeInfo,
      "with className:",
      props.className || props.contentContainerClassName
    );
    const transformedProps = transformClassNameToStyle(props);
    console.log("✅ Props transformed:", {
      original: Object.keys(props),
      transformed: Object.keys(transformedProps),
      hasStyle: !!transformedProps.style,
    });
    return originalCreateElement(type, transformedProps, ...children);
  }
  return originalCreateElement(type, props, ...children);
}

// Alternative module-level patching approach
function patchReactNativeModule() {
  try {
    const Module = require("module");
    const originalRequire = Module.prototype.require;

    Module.prototype.require = function (id: string) {
      const result = originalRequire.apply(this, arguments);

      if (id === "react-native" && result && typeof result === "object") {
        // Return a proxy that wraps components with className support
        return new Proxy(result, {
          get(target, prop) {
            const original = target[prop];

            // List of React Native components to wrap
            const componentsToWrap = [
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

            if (
              typeof prop === "string" &&
              componentsToWrap.includes(prop) &&
              original
            ) {
              // Check if already wrapped
              if ((original as any).__cycloneWrapped) {
                return original;
              }

              // Create wrapped component
              const WrappedComponent = React.forwardRef(
                (props: any, ref: any) => {
                  const transformedProps = transformClassNameToStyle(props);
                  return React.createElement(original, {
                    ...transformedProps,
                    ref,
                  });
                }
              );

              // Mark as wrapped and copy properties
              (WrappedComponent as any).__cycloneWrapped = true;
              WrappedComponent.displayName = `Cyclone${prop}`;
              Object.setPrototypeOf(WrappedComponent, original);

              // Copy static properties
              Object.getOwnPropertyNames(original).forEach((propertyName) => {
                if (
                  propertyName !== "length" &&
                  propertyName !== "name" &&
                  propertyName !== "prototype"
                ) {
                  try {
                    (WrappedComponent as any)[propertyName] = (original as any)[
                      propertyName
                    ];
                  } catch (e) {
                    // Some properties might not be writable
                  }
                }
              });

              return WrappedComponent;
            }

            return original;
          },
        });
      }

      return result;
    };
  } catch (error) {
    console.warn("Could not patch module require:", error);
  }
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
        console.log(`Patching ${componentName}...`);

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

        // Copy static properties and methods
        Object.setPrototypeOf(WrappedComponent, OriginalComponent);
        Object.getOwnPropertyNames(OriginalComponent).forEach((prop) => {
          if (prop !== "length" && prop !== "name" && prop !== "prototype") {
            try {
              (WrappedComponent as any)[prop] = (OriginalComponent as any)[
                prop
              ];
            } catch (e) {
              // Some properties might not be writable
            }
          }
        });

        // Replace the component in React Native module
        try {
          Object.defineProperty(ReactNative, componentName, {
            value: WrappedComponent,
            writable: true,
            enumerable: true,
            configurable: true,
          });
          console.log(`Successfully patched ${componentName}`);
        } catch (error) {
          console.warn(`Could not replace ${componentName}:`, error);
        }
      }
    });
  } catch (error) {
    console.warn("Could not patch React Native components directly:", error);
  }
}

let isSetup = false;

// Global flag to track if we need to use fallback mode
let useFallbackMode = false;

export function setupClassName() {
  if (isSetup) return;

  console.log("🌪️ CycloneWind: Setting up global className support...");

  // Method 1: Patch React.createElement FIRST (most reliable)
  try {
    (React as any).createElement = createElementWithClassName;
    console.log("✅ React.createElement patched successfully");
  } catch (error) {
    console.error("❌ Failed to patch React.createElement:", error);
    useFallbackMode = true;
  }

  // Method 2: Module-level patching (for future imports)
  try {
    patchReactNativeModule();
    console.log("✅ Module-level patching enabled");
  } catch (error) {
    console.warn("⚠️ Module-level patching failed:", error);
  }

  // Method 3: Direct component patching (for already imported components)
  try {
    patchReactNativeComponents();
    console.log("✅ Direct component patching attempted");
  } catch (error) {
    console.warn("⚠️ Direct component patching failed:", error);
  }

  // Method 4: Patch JSX runtime (for modern React)
  try {
    const jsxRuntime = require("react/jsx-runtime");
    if (jsxRuntime?.jsx) {
      const originalJsx = jsxRuntime.jsx;
      jsxRuntime.jsx = (type: any, props: any, key?: any) => {
        if (props && (props.className || props.contentContainerClassName)) {
          console.log(
            "🎯 JSX runtime intercepted:",
            type?.displayName || type?.name || type
          );
          const transformedProps = transformClassNameToStyle(props);
          return originalJsx(type, transformedProps, key);
        }
        return originalJsx(type, props, key);
      };
      console.log("✅ JSX runtime jsx patched");
    }

    if (jsxRuntime?.jsxs) {
      const originalJsxs = jsxRuntime.jsxs;
      jsxRuntime.jsxs = (type: any, props: any, key?: any) => {
        if (props && (props.className || props.contentContainerClassName)) {
          console.log(
            "🎯 JSX runtime jsxs intercepted:",
            type?.displayName || type?.name || type
          );
          const transformedProps = transformClassNameToStyle(props);
          return originalJsxs(type, transformedProps, key);
        }
        return originalJsxs(type, props, key);
      };
      console.log("✅ JSX runtime jsxs patched");
    }
  } catch (error) {
    console.warn("⚠️ JSX runtime patching failed:", error);
  }

  // Method 5: Immediate testing and warning
  setTimeout(() => {
    console.log("🧪 CycloneWind: Testing className support...");
    const testView = React.createElement("View", { className: "test" });
    if (testView.props.className === "test") {
      console.warn(
        "⚠️ WARNING: className property was not transformed! Global className may not be working properly."
      );
      console.log(
        "💡 TIP: Make sure you're importing 'cyclonewind/preset' in your root file BEFORE importing React Native components."
      );
    } else {
      console.log("✅ Global className transformation is working!");
    }
  }, 100);

  console.log("🌪️ CycloneWind: Global className setup complete!");
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
