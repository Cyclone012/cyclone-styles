/**
 * ANIMATION UTILITIES
 *
 * React Native compatible animation utilities for durations, timing functions,
 * and animation states. These work with React Native's Animated API and
 * third-party animation libraries like react-native-reanimated.
 */

export const animationUtilities = {
  // Animation Duration (in milliseconds for React Native Animated API)
  "duration-75": {
    /* Use with Animated.timing: duration: 75 */
  },
  "duration-100": {
    /* Use with Animated.timing: duration: 100 */
  },
  "duration-150": {
    /* Use with Animated.timing: duration: 150 */
  },
  "duration-200": {
    /* Use with Animated.timing: duration: 200 */
  },
  "duration-300": {
    /* Use with Animated.timing: duration: 300 */
  },
  "duration-500": {
    /* Use with Animated.timing: duration: 500 */
  },
  "duration-700": {
    /* Use with Animated.timing: duration: 700 */
  },
  "duration-1000": {
    /* Use with Animated.timing: duration: 1000 */
  },

  // Animation Delay (in milliseconds)
  "delay-75": {
    /* Use with Animated.delay: 75 */
  },
  "delay-100": {
    /* Use with Animated.delay: 100 */
  },
  "delay-150": {
    /* Use with Animated.delay: 150 */
  },
  "delay-200": {
    /* Use with Animated.delay: 200 */
  },
  "delay-300": {
    /* Use with Animated.delay: 300 */
  },
  "delay-500": {
    /* Use with Animated.delay: 500 */
  },
  "delay-700": {
    /* Use with Animated.delay: 700 */
  },
  "delay-1000": {
    /* Use with Animated.delay: 1000 */
  },

  // Animation Timing Functions (for use with Easing)
  "ease-linear": {
    /* Use with Animated.timing: easing: Easing.linear */
  },
  "ease-in": {
    /* Use with Animated.timing: easing: Easing.in(Easing.quad) */
  },
  "ease-out": {
    /* Use with Animated.timing: easing: Easing.out(Easing.quad) */
  },
  "ease-in-out": {
    /* Use with Animated.timing: easing: Easing.inOut(Easing.quad) */
  },

  // Animation Fill Mode (for Reanimated withSpring/withTiming)
  "fill-none": {
    /* Animation doesn't affect element before/after execution */
  },
  "fill-forwards": {
    /* Element retains final animation values */
  },
  "fill-backwards": {
    /* Element uses initial animation values during delay */
  },
  "fill-both": {
    /* Element uses both backwards and forwards fill */
  },

  // Animation Direction (for Reanimated repeat animations)
  "direction-normal": {
    /* Animation plays forward each iteration */
  },
  "direction-reverse": {
    /* Animation plays backward each iteration */
  },
  "direction-alternate": {
    /* Animation alternates between forward and backward */
  },
  "direction-alternate-reverse": {
    /* Animation alternates, starting backward */
  },

  // Animation Play State
  "play-paused": {
    /* Animation is paused */
  },
  "play-running": {
    /* Animation is running */
  },

  // Predefined Animations (with transform values for React Native)
  "animate-none": {
    /* No animation */
  },
  "animate-spin": {
    /* Use with Animated.timing and transform: [{ rotate: '360deg' }] */
  },
  "animate-ping": {
    /* Use with Animated.timing and scale animation from 1 to 1.1 */
  },
  "animate-pulse": {
    /* Use with Animated.timing and opacity animation from 1 to 0.5 */
  },
  "animate-bounce": {
    /* Use with Animated.timing and translateY animation */
  },

  // CamelCase versions
  duration75: {
    /* Use with Animated.timing: duration: 75 */
  },
  duration100: {
    /* Use with Animated.timing: duration: 100 */
  },
  duration150: {
    /* Use with Animated.timing: duration: 150 */
  },
  duration200: {
    /* Use with Animated.timing: duration: 200 */
  },
  duration300: {
    /* Use with Animated.timing: duration: 300 */
  },
  duration500: {
    /* Use with Animated.timing: duration: 500 */
  },
  duration700: {
    /* Use with Animated.timing: duration: 700 */
  },
  duration1000: {
    /* Use with Animated.timing: duration: 1000 */
  },

  delay75: {
    /* Use with Animated.delay: 75 */
  },
  delay100: {
    /* Use with Animated.delay: 100 */
  },
  delay150: {
    /* Use with Animated.delay: 150 */
  },
  delay200: {
    /* Use with Animated.delay: 200 */
  },
  delay300: {
    /* Use with Animated.delay: 300 */
  },
  delay500: {
    /* Use with Animated.delay: 500 */
  },
  delay700: {
    /* Use with Animated.delay: 700 */
  },
  delay1000: {
    /* Use with Animated.delay: 1000 */
  },

  easeLinear: {
    /* Use with Animated.timing: easing: Easing.linear */
  },
  easeIn: {
    /* Use with Animated.timing: easing: Easing.in(Easing.quad) */
  },
  easeOut: {
    /* Use with Animated.timing: easing: Easing.out(Easing.quad) */
  },
  easeInOut: {
    /* Use with Animated.timing: easing: Easing.inOut(Easing.quad) */
  },

  animateNone: {
    /* No animation */
  },
  animateSpin: {
    /* Use with Animated.timing and transform: [{ rotate: '360deg' }] */
  },
  animatePing: {
    /* Use with Animated.timing and scale animation from 1 to 1.1 */
  },
  animatePulse: {
    /* Use with Animated.timing and opacity animation from 1 to 0.5 */
  },
  animateBounce: {
    /* Use with Animated.timing and translateY animation */
  },
};
