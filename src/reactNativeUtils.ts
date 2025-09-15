/**
 * React Native Utilities
 * Enhanced utilities that work seamlessly with React Native's built-in features
 */

import React from "react";
import { Dimensions, Platform, PixelRatio } from "react-native";
import { convertClassNameToStyle } from "./className";

// Screen dimension utilities
export const getScreenDimensions = () => {
  const { width, height } = Dimensions.get("screen");
  return { width, height };
};

export const getWindowDimensions = () => {
  const { width, height } = Dimensions.get("window");
  return { width, height };
};

// Platform-specific className utilities
export const platformClassName = (
  ios: string,
  android: string,
  web?: string
) => {
  if (Platform.OS === "ios") return ios;
  if (Platform.OS === "android") return android;
  if (Platform.OS === "web" && web) return web;
  return "";
};

// Responsive className based on screen size
export const responsiveClassName = (
  base: string,
  overrides: {
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  }
) => {
  const { width } = getScreenDimensions();
  let className = base;

  if (width >= 640 && overrides.sm) className += ` ${overrides.sm}`;
  if (width >= 768 && overrides.md) className += ` ${overrides.md}`;
  if (width >= 1024 && overrides.lg) className += ` ${overrides.lg}`;
  if (width >= 1280 && overrides.xl) className += ` ${overrides.xl}`;

  return className;
};

// High DPI className utilities
export const pixelRatioClassName = (className: string) => {
  const ratio = PixelRatio.get();
  if (ratio >= 3) return `${className} retina-3x`;
  if (ratio >= 2) return `${className} retina-2x`;
  return className;
};

// Safe area utilities for different devices
export const safeAreaClassName = (className: string) => {
  if (Platform.OS === "ios") {
    return `${className} safe-area-ios`;
  }
  if (Platform.OS === "android") {
    return `${className} safe-area-android`;
  }
  return className;
};

// React Native component-specific className helpers
export const containerContentClasses = (
  containerClass: string,
  contentClass?: string
) => {
  return {
    className: containerClass,
    contentContainerClassName: contentClass,
  };
};

export const listClasses = (containerClass: string, contentClass?: string) => {
  return {
    className: containerClass,
    contentContainerClassName: contentClass,
  };
};

// Enhanced className processor for React Native
export const processReactNativeClassName = (className: string) => {
  if (!className) return {};

  // Add platform-specific processing
  let processedClassName = className;

  // Handle platform prefixes
  if (Platform.OS === "ios") {
    processedClassName = processedClassName
      .replace(/ios:/g, "")
      .replace(/android:[^\s]+/g, "");
  } else if (Platform.OS === "android") {
    processedClassName = processedClassName
      .replace(/android:/g, "")
      .replace(/ios:[^\s]+/g, "");
  }

  // Convert to style
  return convertClassNameToStyle(processedClassName);
};

// React Native-specific className combiners
export const combineClassNames = (
  ...classNames: (string | undefined | null | false)[]
): string => {
  return classNames.filter(Boolean).join(" ").trim();
};

// HOC for automatic className support
export const withClassName = <P extends object>(
  Component: React.ComponentType<P>
) => {
  return React.forwardRef<any, P & { className?: string }>((props, ref) => {
    const { className, style, ...restProps } = props as any;

    const classNameStyle = className
      ? processReactNativeClassName(className)
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
    } as P);
  });
};

// Text component helper with automatic font scaling
export const textClassName = (className: string, allowFontScaling = true) => {
  const style = processReactNativeClassName(className);
  return {
    style,
    allowFontScaling,
  };
};

// Image component helper with proper resizing
export const imageClassName = (
  className: string,
  resizeMode: "cover" | "contain" | "stretch" | "repeat" | "center" = "cover"
) => {
  const style = processReactNativeClassName(className);
  return {
    style,
    resizeMode,
  };
};

// ScrollView helper with proper keyboard handling
export const enhancedScrollView = (
  className: string,
  contentClassName?: string,
  keyboardShouldPersistTaps: "always" | "never" | "handled" = "handled"
) => {
  return {
    style: processReactNativeClassName(className),
    contentContainerStyle: contentClassName
      ? processReactNativeClassName(contentClassName)
      : undefined,
    keyboardShouldPersistTaps,
  };
};

// Pressable helper with automatic hit slop
export const pressableClassName = (className: string, hitSlop = 8) => {
  return {
    style: processReactNativeClassName(className),
    hitSlop,
  };
};

// TextInput helper with proper styling
export const textInputClassName = (
  className: string,
  autoCorrect = false,
  autoCapitalize: "none" | "sentences" | "words" | "characters" = "none"
) => {
  return {
    style: processReactNativeClassName(className),
    autoCorrect,
    autoCapitalize,
  };
};

export default {
  getScreenDimensions,
  getWindowDimensions,
  platformClassName,
  responsiveClassName,
  pixelRatioClassName,
  safeAreaClassName,
  processReactNativeClassName,
  combineClassNames,
  withClassName,
  textClassName,
  imageClassName,
  enhancedScrollView,
  pressableClassName,
  textInputClassName,
};
