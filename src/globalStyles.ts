/**
 * Advanced Global Styles System
 * Generate direct style objects for common utilities
 */

import { StyleSheet } from "react-native";
import { styles } from "./styles";
import { cs } from "./cs";

// Generate pre-computed styles for common utilities
function generateGlobalStyles() {
  const globalStyles: Record<string, any> = {};

  // Common utility classes that are frequently used
  const commonClasses = [
    // Layout
    "flex-1",
    "flex-row",
    "flex-col",
    "justify-center",
    "items-center",
    "justify-between",
    "items-start",
    "items-end",
    "justify-start",
    "justify-end",
    "flex-wrap",
    "flex-nowrap",
    "self-center",
    "self-start",
    "self-end",

    // Spacing
    "p-0",
    "p-1",
    "p-2",
    "p-3",
    "p-4",
    "p-5",
    "p-6",
    "p-8",
    "m-0",
    "m-1",
    "m-2",
    "m-3",
    "m-4",
    "m-5",
    "m-6",
    "m-8",
    "px-2",
    "px-3",
    "px-4",
    "px-6",
    "py-2",
    "py-3",
    "py-4",
    "py-6",
    "mx-2",
    "mx-3",
    "mx-4",
    "mx-6",
    "my-2",
    "my-3",
    "my-4",
    "my-6",

    // Sizing
    "w-full",
    "h-full",
    "w-1/2",
    "h-1/2",
    "w-1/3",
    "w-2/3",
    "w-10",
    "w-20",
    "w-32",
    "h-10",
    "h-20",
    "h-32",

    // Colors
    "bg-white",
    "bg-black",
    "bg-gray-100",
    "bg-gray-200",
    "bg-gray-300",
    "bg-blue-500",
    "bg-red-500",
    "bg-green-500",
    "bg-yellow-500",
    "text-white",
    "text-black",
    "text-gray-500",
    "text-gray-700",
    "text-gray-900",
    "text-blue-500",
    "text-red-500",
    "text-green-500",

    // Typography
    "text-xs",
    "text-sm",
    "text-base",
    "text-lg",
    "text-xl",
    "text-2xl",
    "font-thin",
    "font-normal",
    "font-medium",
    "font-semibold",
    "font-bold",
    "text-center",
    "text-left",
    "text-right",

    // Borders
    "rounded",
    "rounded-sm",
    "rounded-md",
    "rounded-lg",
    "rounded-xl",
    "rounded-full",
    "border",
    "border-2",
    "border-gray-200",
    "border-gray-300",

    // Effects
    "shadow-sm",
    "shadow-md",
    "shadow-lg",
    "opacity-50",
    "opacity-75",
    "opacity-100",

    // Position
    "absolute",
    "relative",
    "hidden",

    // Transforms
    "scale-95",
    "scale-100",
    "scale-105",
    "scale-110",
  ];

  // Generate styles for each common class
  commonClasses.forEach((className) => {
    try {
      const style = cs(className);
      // Convert kebab-case to camelCase for property names
      const propertyName = className.replace(/-([a-z])/g, (_, letter) =>
        letter.toUpperCase()
      );
      globalStyles[propertyName] = style;
    } catch (error) {
      // Skip if class doesn't exist
    }
  });

  return StyleSheet.create(globalStyles);
}

// Create the global styles object
let globalStylesObject: Record<string, any> | null = null;

export function getGlobalStyles() {
  if (!globalStylesObject) {
    globalStylesObject = generateGlobalStyles();
  }
  return globalStylesObject;
}

// Export individual style categories for easier imports
export function getLayoutStyles() {
  const globalStyles = getGlobalStyles();
  return {
    flex1: globalStyles.flex1,
    flexRow: globalStyles.flexRow,
    flexCol: globalStyles.flexCol,
    justifyCenter: globalStyles.justifyCenter,
    itemsCenter: globalStyles.itemsCenter,
    justifyBetween: globalStyles.justifyBetween,
    itemsStart: globalStyles.itemsStart,
    itemsEnd: globalStyles.itemsEnd,
    justifyStart: globalStyles.justifyStart,
    justifyEnd: globalStyles.justifyEnd,
    flexWrap: globalStyles.flexWrap,
    selfCenter: globalStyles.selfCenter,
  };
}

export function getSpacingStyles() {
  const globalStyles = getGlobalStyles();
  return {
    p0: globalStyles.p0,
    p1: globalStyles.p1,
    p2: globalStyles.p2,
    p3: globalStyles.p3,
    p4: globalStyles.p4,
    p5: globalStyles.p5,
    p6: globalStyles.p6,
    p8: globalStyles.p8,
    m0: globalStyles.m0,
    m1: globalStyles.m1,
    m2: globalStyles.m2,
    m3: globalStyles.m3,
    m4: globalStyles.m4,
    m5: globalStyles.m5,
    m6: globalStyles.m6,
    m8: globalStyles.m8,
    px2: globalStyles.px2,
    px3: globalStyles.px3,
    px4: globalStyles.px4,
    px6: globalStyles.px6,
    py2: globalStyles.py2,
    py3: globalStyles.py3,
    py4: globalStyles.py4,
    py6: globalStyles.py6,
  };
}

export function getColorStyles() {
  const globalStyles = getGlobalStyles();
  return {
    bgWhite: globalStyles.bgWhite,
    bgBlack: globalStyles.bgBlack,
    bgGray100: globalStyles.bgGray100,
    bgGray200: globalStyles.bgGray200,
    bgGray300: globalStyles.bgGray300,
    bgBlue500: globalStyles.bgBlue500,
    bgRed500: globalStyles.bgRed500,
    bgGreen500: globalStyles.bgGreen500,
    textWhite: globalStyles.textWhite,
    textBlack: globalStyles.textBlack,
    textGray500: globalStyles.textGray500,
    textGray700: globalStyles.textGray700,
    textGray900: globalStyles.textGray900,
    textBlue500: globalStyles.textBlue500,
    textRed500: globalStyles.textRed500,
    textGreen500: globalStyles.textGreen500,
  };
}

export function getTypographyStyles() {
  const globalStyles = getGlobalStyles();
  return {
    textXs: globalStyles.textXs,
    textSm: globalStyles.textSm,
    textBase: globalStyles.textBase,
    textLg: globalStyles.textLg,
    textXl: globalStyles.textXl,
    text2xl: globalStyles.text2xl,
    fontThin: globalStyles.fontThin,
    fontNormal: globalStyles.fontNormal,
    fontMedium: globalStyles.fontMedium,
    fontSemibold: globalStyles.fontSemibold,
    fontBold: globalStyles.fontBold,
    textCenter: globalStyles.textCenter,
    textLeft: globalStyles.textLeft,
    textRight: globalStyles.textRight,
  };
}

export function getBorderStyles() {
  const globalStyles = getGlobalStyles();
  return {
    rounded: globalStyles.rounded,
    roundedSm: globalStyles.roundedSm,
    roundedMd: globalStyles.roundedMd,
    roundedLg: globalStyles.roundedLg,
    roundedXl: globalStyles.roundedXl,
    roundedFull: globalStyles.roundedFull,
    border: globalStyles.border,
    border2: globalStyles.border2,
    borderGray200: globalStyles.borderGray200,
    borderGray300: globalStyles.borderGray300,
  };
}

// Create a comprehensive global styles object
export const $ = {
  // Layout
  flex1: () => getGlobalStyles().flex1,
  flexRow: () => getGlobalStyles().flexRow,
  flexCol: () => getGlobalStyles().flexCol,
  center: () => getGlobalStyles().itemsCenter,
  justifyCenter: () => getGlobalStyles().justifyCenter,
  itemsCenter: () => getGlobalStyles().itemsCenter,

  // Spacing
  p2: () => getGlobalStyles().p2,
  p3: () => getGlobalStyles().p3,
  p4: () => getGlobalStyles().p4,
  p6: () => getGlobalStyles().p6,
  m2: () => getGlobalStyles().m2,
  m3: () => getGlobalStyles().m3,
  m4: () => getGlobalStyles().m4,
  m6: () => getGlobalStyles().m6,

  // Colors
  bgWhite: () => getGlobalStyles().bgWhite,
  bgBlue: () => getGlobalStyles().bgBlue500,
  bgRed: () => getGlobalStyles().bgRed500,
  bgGreen: () => getGlobalStyles().bgGreen500,
  textWhite: () => getGlobalStyles().textWhite,
  textBlack: () => getGlobalStyles().textBlack,
  textGray: () => getGlobalStyles().textGray700,

  // Typography
  textSm: () => getGlobalStyles().textSm,
  textBase: () => getGlobalStyles().textBase,
  textLg: () => getGlobalStyles().textLg,
  textXl: () => getGlobalStyles().textXl,
  fontBold: () => getGlobalStyles().fontBold,
  textCenter: () => getGlobalStyles().textCenter,

  // Borders
  rounded: () => getGlobalStyles().rounded,
  roundedLg: () => getGlobalStyles().roundedLg,
  roundedFull: () => getGlobalStyles().roundedFull,

  // Effects
  shadow: () => getGlobalStyles().shadowMd,
  shadowLg: () => getGlobalStyles().shadowLg,
};

export default {
  getGlobalStyles,
  getLayoutStyles,
  getSpacingStyles,
  getColorStyles,
  getTypographyStyles,
  getBorderStyles,
  $,
};
