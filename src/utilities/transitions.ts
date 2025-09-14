/**
 * TRANSITION UTILITIES
 *
 * React Native compatible transition utilities for smooth state changes
 * and interactive animations. Works with React Native Animated API,
 * react-native-reanimated, and layout animations.
 *
 * Note: These utilities work best with react-native-reanimated for actual animations.
 * Regular React Native StyleSheet doesn't support CSS transitions directly.
 */

export const transitionUtilities = {
  // Transition Properties (for Reanimated worklets and animation metadata)
  "transition-none": {
    /* No transition - instant changes */
  },
  "transition-all": {
    /* Transition all animatable properties */
  },
  "transition-colors": {
    /* Transition color properties (backgroundColor, color, borderColor) */
  },
  "transition-opacity": {
    /* Transition opacity property */
  },
  "transition-shadow": {
    /* Transition shadow properties (shadowOpacity, shadowRadius, elevation) */
  },
  "transition-transform": {
    /* Transition transform properties (scale, rotate, translate) */
  },

  // Transition Duration (in milliseconds for React Native)
  "duration-0": {
    /* Transition duration: 0ms - instant */
  },
  "duration-75": {
    /* Transition duration: 75ms - very fast */
  },
  "duration-100": {
    /* Transition duration: 100ms - fast */
  },
  "duration-150": {
    /* Transition duration: 150ms - quick */
  },
  "duration-200": {
    /* Transition duration: 200ms - normal */
  },
  "duration-300": {
    /* Transition duration: 300ms - moderate */
  },
  "duration-500": {
    /* Transition duration: 500ms - slow */
  },
  "duration-700": {
    /* Transition duration: 700ms - slower */
  },
  "duration-1000": {
    /* Transition duration: 1000ms - very slow */
  },

  // Transition Timing Functions (Easing) - for use with react-native-reanimated
  "ease-linear": {
    /* Linear easing function - constant speed */
  },
  "ease-in": {
    /* Ease-in timing function - slow start, fast end */
  },
  "ease-out": {
    /* Ease-out timing function - fast start, slow end */
  },
  "ease-in-out": {
    /* Ease-in-out timing function - slow start and end */
  },

  // Transition Delay (in milliseconds)
  "delay-0": {
    /* Transition delay: 0ms - no delay */
  },
  "delay-75": {
    /* Transition delay: 75ms */
  },
  "delay-100": {
    /* Transition delay: 100ms */
  },
  "delay-150": {
    /* Transition delay: 150ms */
  },
  "delay-200": {
    /* Transition delay: 200ms */
  },
  "delay-300": {
    /* Transition delay: 300ms */
  },
  "delay-500": {
    /* Transition delay: 500ms */
  },
  "delay-700": {
    /* Transition delay: 700ms */
  },
  "delay-1000": {
    /* Transition delay: 1000ms */
  },

  // Layout Transitions (React Native LayoutAnimation presets)
  "layout-transition": {
    /* Enable layout transition animations */
  },
  "layout-transition-spring": {
    /* Spring-based layout transitions */
  },
  "layout-transition-linear": {
    /* Linear layout transitions */
  },
  "layout-transition-ease-in-out": {
    /* Ease-in-out layout transitions */
  },

  // CamelCase versions
  transitionNone: {
    /* No transition */
  },
  transitionAll: {
    /* Transition all animatable properties */
  },
  transitionColors: {
    /* Transition color properties */
  },
  transitionOpacity: {
    /* Transition opacity property */
  },
  transitionShadow: {
    /* Transition shadow properties */
  },
  transitionTransform: {
    /* Transition transform properties */
  },

  // Duration camelCase
  duration0: {
    /* 0ms */
  },
  duration75: {
    /* 75ms */
  },
  duration100: {
    /* 100ms */
  },
  duration150: {
    /* 150ms */
  },
  duration200: {
    /* 200ms */
  },
  duration300: {
    /* 300ms */
  },
  duration500: {
    /* 500ms */
  },
  duration700: {
    /* 700ms */
  },
  duration1000: {
    /* 1000ms */
  },

  // Easing camelCase
  easeLinear: {
    /* Linear easing */
  },
  easeIn: {
    /* Ease-in timing */
  },
  easeOut: {
    /* Ease-out timing */
  },
  easeInOut: {
    /* Ease-in-out timing */
  },

  // Delay camelCase
  delay0: {
    /* 0ms delay */
  },
  delay75: {
    /* 75ms delay */
  },
  delay100: {
    /* 100ms delay */
  },
  delay150: {
    /* 150ms delay */
  },
  delay200: {
    /* 200ms delay */
  },
  delay300: {
    /* 300ms delay */
  },
  delay500: {
    /* 500ms delay */
  },
  delay700: {
    /* 700ms delay */
  },
  delay1000: {
    /* 1000ms delay */
  },

  // Layout transitions camelCase
  layoutTransition: {
    /* Enable layout transitions */
  },
  layoutTransitionSpring: {
    /* Spring layout transitions */
  },
  layoutTransitionLinear: {
    /* Linear layout transitions */
  },
  layoutTransitionEaseInOut: {
    /* Ease-in-out layout transitions */
  },
};

/**
 * REACT NATIVE ANIMATION INTEGRATION GUIDE
 *
 * These utilities work best with react-native-reanimated. Here's how to use them:
 *
 * 1. Basic Animated Value with Timing:
 * ```tsx
 * import { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
 *
 * const opacity = useSharedValue(0);
 *
 * const animatedStyle = useAnimatedStyle(() => ({
 *   opacity: opacity.value,
 * }));
 *
 * // Trigger animation with duration-300 and ease-out
 * const fadeIn = () => {
 *   opacity.value = withTiming(1, {
 *     duration: 300, // duration-300
 *     easing: Easing.out(Easing.quad), // ease-out
 *   });
 * };
 * ```
 *
 * 2. Transform Animations:
 * ```tsx
 * const scale = useSharedValue(1);
 * const translateY = useSharedValue(0);
 *
 * const animatedStyle = useAnimatedStyle(() => ({
 *   transform: [
 *     { scale: scale.value },
 *     { translateY: translateY.value }
 *   ],
 * }));
 *
 * // Hover-like effect with scale-110 and duration-200
 * const handlePressIn = () => {
 *   scale.value = withTiming(1.1, { duration: 200 }); // scale-110 + duration-200
 *   translateY.value = withTiming(-4, { duration: 200 }); // hover-translate-y-1
 * };
 * ```
 *
 * 3. Color Transitions:
 * ```tsx
 * const backgroundColor = useSharedValue('#3B82F6'); // blue-500
 *
 * const animatedStyle = useAnimatedStyle(() => ({
 *   backgroundColor: backgroundColor.value,
 * }));
 *
 * // Color transition with duration-300
 * const changeColor = () => {
 *   backgroundColor.value = withTiming('#1D4ED8', { duration: 300 }); // blue-700
 * };
 * ```
 *
 * 4. Layout Animations (for adding/removing components):
 * ```tsx
 * import { Layout, FadeIn, FadeOut } from 'react-native-reanimated';
 *
 * <Animated.View
 *   entering={FadeIn.duration(300)} // duration-300
 *   exiting={FadeOut.duration(200)} // duration-200
 *   layout={Layout.springify()} // layout-transition-spring
 * >
 *   // Component content
 * </Animated.View>
 * ```
 */
