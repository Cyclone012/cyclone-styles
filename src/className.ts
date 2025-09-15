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

// Enhanced React.createElement patching (with safety guards for Expo/Strict environments)
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

// Universal smart patching - works with ANY module and component
const patchedComponents = new Set<string>();
const componentUsageStats = new Map<string, number>();

// Generic component detector - works with any React component
function isReactComponent(component: any, componentName: string): boolean {
  if (!component || typeof component !== "function") {
    return false;
  }

  // Universal React component detection heuristics
  const hasReactCharacteristics =
    // Has React component naming convention (starts with uppercase)
    componentName &&
    componentName[0] === componentName[0].toUpperCase() &&
    // Has common React component properties
    (component.displayName !== undefined ||
      component.defaultProps !== undefined ||
      component.propTypes !== undefined ||
      component.contextTypes !== undefined ||
      component.childContextTypes !== undefined ||
      component.render !== undefined ||
      // Is a forwardRef component
      component.$$typeof !== undefined ||
      // Has React component prototype chain
      component.prototype?.isReactComponent !== undefined ||
      component.prototype?.render !== undefined ||
      // Common component patterns
      component.name === componentName ||
      component.toString().includes("React.createElement") ||
      component.toString().includes("jsx") ||
      // Function component patterns
      (component.length >= 0 && component.length <= 2)); // Typical props + ref signature

  return hasReactCharacteristics;
}

function createUniversalWrapper(
  original: any,
  componentName: string,
  moduleName: string = "unknown"
) {
  // Track component usage across all modules
  const fullName = `${moduleName}/${componentName}`;
  componentUsageStats.set(
    fullName,
    (componentUsageStats.get(fullName) || 0) + 1
  );

  console.log(
    `🎯 CycloneWind: Smart-wrapping ${fullName} (usage: ${componentUsageStats.get(
      fullName
    )})`
  );

  const WrappedComponent = React.forwardRef((props: any, ref: any) => {
    const transformedProps = transformClassNameToStyle(props);
    return React.createElement(original, {
      ...transformedProps,
      ref,
    });
  });

  // Mark as wrapped and preserve original reference
  (WrappedComponent as any).__cycloneWrapped = true;
  (WrappedComponent as any).__cycloneOriginal = original;
  (WrappedComponent as any).__cycloneModule = moduleName;
  WrappedComponent.displayName = `Cyclone${componentName}`;

  // Preserve prototype chain
  Object.setPrototypeOf(WrappedComponent, original);

  // Copy static properties safely and universally
  try {
    const descriptors = Object.getOwnPropertyDescriptors(original);
    for (const [key, descriptor] of Object.entries(descriptors)) {
      if (
        key !== "length" &&
        key !== "name" &&
        key !== "prototype" &&
        descriptor.configurable
      ) {
        Object.defineProperty(WrappedComponent, key, descriptor);
      }
    }
  } catch (e) {
    // Fallback to simple property copying
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
  }

  return WrappedComponent;
}

// Universal module-level patching - auto-detects component usage from any module
function patchAnyModule() {
  try {
    const Module = require("module");
    const originalRequire = Module.prototype.require;

    Module.prototype.require = function (id: string) {
      const result = originalRequire.apply(this, arguments);

      // Only patch modules that export objects with potential React components
      if (result && typeof result === "object") {
        // Smart Proxy that only wraps components when accessed
        return new Proxy(result, {
          get(target, prop) {
            const original = target[prop];

            // Auto-detect React components from any module using universal heuristics
            if (
              isReactComponent(original, String(prop)) &&
              typeof prop === "string" &&
              !patchedComponents.has(`${id}.${prop}`)
            ) {
              // Mark as patched to avoid double-wrapping
              patchedComponents.add(`${id}.${prop}`);

              // Return universal wrapper only when accessed
              return createUniversalWrapper(original, `${id}.${prop}`);
            }

            return original;
          },
        });
      }

      return result;
    };

    console.log(
      "✅ Universal module-level patching enabled - will auto-detect and wrap React components from any module on-demand"
    );
  } catch (error) {
    console.warn("Could not patch module require:", error);
  }
}

// Utility to get component usage statistics (for debugging)
function getComponentUsageStats() {
  return {
    patchedComponents: Array.from(patchedComponents),
    usageStats: Object.fromEntries(componentUsageStats),
    totalComponents: patchedComponents.size,
  };
}

// Universal direct component patching - only patch components that are actually imported/used
function smartPatchComponents() {
  try {
    // Instead of aggressively patching all components upfront,
    // we'll patch them lazily when they're actually accessed via the Proxy
    // This avoids property definition errors in strict environments like Expo
    console.log(
      "✅ Universal direct component patching prepared - components will be wrapped when accessed"
    );
  } catch (error) {
    console.warn("⚠️ Smart component patching initialization failed:", error);
  }
}

let isSetup = false;

// Global flag to track if we need to use fallback mode
let useFallbackMode = false;

export function setupClassName() {
  if (isSetup) return;

  console.log("🌪️ CycloneWind: Setting up global className support...");

  // Method 1: Patch React.createElement if writable (Expo may expose it via getter only)
  try {
    const desc = Object.getOwnPropertyDescriptor(React, "createElement");
    const isWritable =
      !!desc && (desc.writable === true || desc.set !== undefined);
    const isConfigurable = !!desc && desc.configurable === true;

    if (isWritable || isConfigurable) {
      (React as any).createElement = createElementWithClassName;
      console.log("✅ React.createElement patched successfully");
    } else {
      console.warn(
        "⚠️ React.createElement is not writable/configurable in this environment. Skipping direct patch and relying on JSX/runtime proxies."
      );
      useFallbackMode = true;
    }
  } catch (error) {
    console.error("❌ Failed to patch React.createElement:", error);
    useFallbackMode = true;
  }

  // Method 2: Module-level patching (for future imports)
  try {
    patchAnyModule();
    console.log("✅ Module-level patching enabled");
  } catch (error) {
    console.warn("⚠️ Module-level patching failed:", error);
  }

  // Method 3: Smart component patching (prepares for on-demand wrapping)
  try {
    smartPatchComponents();
    console.log("✅ Smart component patching prepared");
  } catch (error) {
    console.warn("⚠️ Smart component patching failed:", error);
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

  // Method 5: Smart testing and component usage reporting
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
      console.log(
        "💡 TIP: In Expo/React 18 environments, prefer relying on the JSX runtime patch included in CycloneWind. Ensure your components are compiled with the new JSX transform (no explicit React import required)."
      );
    } else {
      console.log("✅ Global className transformation is working!");
    }

    // Report smart patching statistics
    const stats = getComponentUsageStats();
    if (stats.totalComponents > 0) {
      console.log(`📊 CycloneWind Smart Patching Stats:`, {
        patchedComponents: stats.patchedComponents,
        mostUsedComponent: Object.entries(stats.usageStats).sort(
          ([, a], [, b]) => b - a
        )[0],
        totalWrapped: stats.totalComponents,
      });
    } else {
      console.log(
        "📊 No components auto-wrapped yet - they'll be wrapped when first accessed"
      );
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

export { convertClassNameToStyle, getComponentUsageStats };
