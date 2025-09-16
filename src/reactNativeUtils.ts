/**
 * React Native Utilities
 * Enhanced utilities that work seamlessly with React Native's built-in features
 */

import * as React from "react";
import { Dimensions, Platform, PixelRatio } from "react-native";

// Screen dimension utilities
export const getScreenDimensions = () => {
  const { width, height } = Dimensions.get("screen");
  return { width, height };
};

export const getWindowDimensions = () => {
  const { width, height } = Dimensions.get("window");
  return { width, height };
};

// Platform-specific class name utilities that return CSS class strings to be used with cs()
export const platformClassName = (options: {
  ios?: string;
  android?: string;
  web?: string;
  default?: string;
}) => {
  if (Platform.OS === "ios" && options.ios) return options.ios;
  if (Platform.OS === "android" && options.android) return options.android;
  if (Platform.OS === "web" && options.web) return options.web;
  return options.default || "";
};

// Responsive class name based on screen size that returns CSS class strings to be used with cs()
export const responsiveClassName = (
  screenWidth: number,
  options: {
    small?: string;
    medium?: string;
    large?: string;
    xlarge?: string;
  }
) => {
  if (screenWidth >= 1280 && options.xlarge) return options.xlarge;
  if (screenWidth >= 1024 && options.large) return options.large;
  if (screenWidth >= 768 && options.medium) return options.medium;
  return options.small || "";
};

// Utility functions for getting screen information
export const screenWidth = () => Dimensions.get("screen").width;
export const screenHeight = () => Dimensions.get("screen").height;
export const windowWidth = () => Dimensions.get("window").width;
export const windowHeight = () => Dimensions.get("window").height;

// Device type detection
export const isTablet = () => {
  const { width, height } = Dimensions.get("screen");
  const aspectRatio = Math.max(width, height) / Math.min(width, height);
  return aspectRatio < 1.6;
};

export const isPhone = () => !isTablet();

// Platform detection
export const isIOS = Platform.OS === "ios";
export const isAndroid = Platform.OS === "android";
export const isWeb = Platform.OS === "web";

// Device pixel ratio
export const devicePixelRatio = () => PixelRatio.get();

// High DPI detection
export const isHighDPI = () => PixelRatio.get() >= 2;
export const isRetina = () => PixelRatio.get() >= 2;

// Screen orientation
export type ScreenOrientation = "portrait" | "landscape";

export const getScreenOrientation = (): ScreenOrientation => {
  const { width, height } = Dimensions.get("screen");
  return width > height ? "landscape" : "portrait";
};

// Responsive breakpoint utilities
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export const isScreenSize = (size: keyof typeof breakpoints) => {
  const width = Dimensions.get("screen").width;
  return width >= breakpoints[size];
};

// Utility to get responsive value based on screen width
export const getResponsiveValue = <T>(
  values: {
    default: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
  }
) => {
  const width = Dimensions.get("screen").width;
  
  if (width >= breakpoints.xl && values.xl !== undefined) return values.xl;
  if (width >= breakpoints.lg && values.lg !== undefined) return values.lg;
  if (width >= breakpoints.md && values.md !== undefined) return values.md;
  if (width >= breakpoints.sm && values.sm !== undefined) return values.sm;
  
  return values.default;
};

// Safe area detection (basic)
export const hasSafeArea = () => {
  if (Platform.OS === "ios") {
    const { height } = Dimensions.get("screen");
    // iPhone X and newer have safe areas
    return height >= 812;
  }
  return false;
};

export default {
  getScreenDimensions,
  getWindowDimensions,
  platformClassName,
  responsiveClassName,
  screenWidth,
  screenHeight,
  windowWidth,
  windowHeight,
  isTablet,
  isPhone,
  isIOS,
  isAndroid,
  isWeb,
  devicePixelRatio,
  isHighDPI,
  isRetina,
  getScreenOrientation,
  breakpoints,
  isScreenSize,
  getResponsiveValue,
  hasSafeArea,
};
