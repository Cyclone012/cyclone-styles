/**
 * INTERACTIVITY UTILITIES
 *
 * React Native compatible interactivity utilities for user interaction states,
 * pointer events, and user selection behaviors.
 */

export const interactivityUtilities = {
  // Pointer Events (React Native compatible)
  "pointer-events-auto": {
    pointerEvents: "auto" as const,
  },
  "pointer-events-none": {
    pointerEvents: "none" as const,
  },
  "pointer-events-box-none": {
    pointerEvents: "box-none" as const,
  },
  "pointer-events-box-only": {
    pointerEvents: "box-only" as const,
  },

  // Touch Action (React Native specific)
  "touch-auto": {
    /* Default touch behavior */
  },
  "touch-none": {
    /* Disable touch interactions */
  },
  "touch-pan-x": {
    /* Allow horizontal panning */
  },
  "touch-pan-y": {
    /* Allow vertical panning */
  },
  "touch-manipulation": {
    /* Enable touch manipulation (pinch, pan) */
  },

  // User Select (React Native text selection)
  "select-none": {
    /* Use with selectable={false} prop */
  },
  "select-text": {
    /* Use with selectable={true} prop */
  },
  "select-auto": {
    /* Use with selectable={true} prop */
  },

  // Resize (for ScrollView and other resizable components)
  "resize-none": {
    /* No resize capability */
  },
  "resize-both": {
    /* Resize in both directions */
  },
  "resize-x": {
    /* Resize horizontally */
  },
  "resize-y": {
    /* Resize vertically */
  },

  // Scroll Behavior (for ScrollView components)
  "scroll-auto": {
    /* Default scroll behavior */
  },
  "scroll-smooth": {
    /* Smooth scrolling */
  },

  // Will Change (for performance optimization)
  "will-change-auto": {
    /* Browser decides what to optimize */
  },
  "will-change-scroll": {
    /* Optimize for scroll performance */
  },
  "will-change-contents": {
    /* Optimize for content changes */
  },
  "will-change-transform": {
    /* Optimize for transform changes */
  },

  // Cursor styles (for web compatibility when using React Native Web)
  "cursor-auto": {
    /* cursor: "auto" - for React Native Web */
  },
  "cursor-default": {
    /* cursor: "default" - for React Native Web */
  },
  "cursor-pointer": {
    /* cursor: "pointer" - for React Native Web */
  },
  "cursor-wait": {
    /* cursor: "wait" - for React Native Web */
  },
  "cursor-text": {
    /* cursor: "text" - for React Native Web */
  },
  "cursor-move": {
    /* cursor: "move" - for React Native Web */
  },
  "cursor-help": {
    /* cursor: "help" - for React Native Web */
  },
  "cursor-not-allowed": {
    /* cursor: "not-allowed" - for React Native Web */
  },
  "cursor-none": {
    /* cursor: "none" - for React Native Web */
  },
  "cursor-context-menu": {
    /* cursor: "context-menu" - for React Native Web */
  },
  "cursor-progress": {
    /* cursor: "progress" - for React Native Web */
  },
  "cursor-cell": {
    /* cursor: "cell" - for React Native Web */
  },
  "cursor-crosshair": {
    /* cursor: "crosshair" - for React Native Web */
  },
  "cursor-vertical-text": {
    /* cursor: "vertical-text" - for React Native Web */
  },
  "cursor-alias": {
    /* cursor: "alias" - for React Native Web */
  },
  "cursor-copy": {
    /* cursor: "copy" - for React Native Web */
  },
  "cursor-no-drop": {
    /* cursor: "no-drop" - for React Native Web */
  },
  "cursor-grab": {
    /* cursor: "grab" - for React Native Web */
  },
  "cursor-grabbing": {
    /* cursor: "grabbing" - for React Native Web */
  },
  "cursor-all-scroll": {
    /* cursor: "all-scroll" - for React Native Web */
  },
  "cursor-col-resize": {
    /* cursor: "col-resize" - for React Native Web */
  },
  "cursor-row-resize": {
    /* cursor: "row-resize" - for React Native Web */
  },
  "cursor-n-resize": {
    /* cursor: "n-resize" - for React Native Web */
  },
  "cursor-e-resize": {
    /* cursor: "e-resize" - for React Native Web */
  },
  "cursor-s-resize": {
    /* cursor: "s-resize" - for React Native Web */
  },
  "cursor-w-resize": {
    /* cursor: "w-resize" - for React Native Web */
  },
  "cursor-ne-resize": {
    /* cursor: "ne-resize" - for React Native Web */
  },
  "cursor-nw-resize": {
    /* cursor: "nw-resize" - for React Native Web */
  },
  "cursor-se-resize": {
    /* cursor: "se-resize" - for React Native Web */
  },
  "cursor-sw-resize": {
    /* cursor: "sw-resize" - for React Native Web */
  },
  "cursor-ew-resize": {
    /* cursor: "ew-resize" - for React Native Web */
  },
  "cursor-ns-resize": {
    /* cursor: "ns-resize" - for React Native Web */
  },
  "cursor-nesw-resize": {
    /* cursor: "nesw-resize" - for React Native Web */
  },
  "cursor-nwse-resize": {
    /* cursor: "nwse-resize" - for React Native Web */
  },
  "cursor-zoom-in": {
    /* cursor: "zoom-in" - for React Native Web */
  },
  "cursor-zoom-out": {
    /* cursor: "zoom-out" - for React Native Web */
  },

  // CamelCase versions
  pointerEventsAuto: {
    pointerEvents: "auto" as const,
  },
  pointerEventsNone: {
    pointerEvents: "none" as const,
  },
  pointerEventsBoxNone: {
    pointerEvents: "box-none" as const,
  },
  pointerEventsBoxOnly: {
    pointerEvents: "box-only" as const,
  },

  selectNone: {
    /* Use with selectable={false} prop */
  },
  selectText: {
    /* Use with selectable={true} prop */
  },
  selectAuto: {
    /* Use with selectable={true} prop */
  },

  cursorAuto: {
    /* cursor: "auto" - for React Native Web */
  },
  cursorDefault: {
    /* cursor: "default" - for React Native Web */
  },
  cursorPointer: {
    /* cursor: "pointer" - for React Native Web */
  },
  cursorWait: {
    /* cursor: "wait" - for React Native Web */
  },
  cursorText: {
    /* cursor: "text" - for React Native Web */
  },
  cursorMove: {
    /* cursor: "move" - for React Native Web */
  },
  cursorHelp: {
    /* cursor: "help" - for React Native Web */
  },
  cursorNotAllowed: {
    /* cursor: "not-allowed" - for React Native Web */
  },
  cursorNone: {
    /* cursor: "none" - for React Native Web */
  },
  cursorGrab: {
    /* cursor: "grab" - for React Native Web */
  },
  cursorGrabbing: {
    /* cursor: "grabbing" - for React Native Web */
  },
  cursorZoomIn: {
    /* cursor: "zoom-in" - for React Native Web */
  },
  cursorZoomOut: {
    /* cursor: "zoom-out" - for React Native Web */
  },
};

/**
 * HOVER STATE GUIDE FOR REACT NATIVE
 *
 * React Native doesn't support CSS hover states since it's designed for touch devices.
 * Instead, use these patterns to achieve hover-like effects:
 *
 * 1. Using Pressable with state for button interactions:
 * ```tsx
 * const [isPressed, setIsPressed] = useState(false);
 *
 * <Pressable
 *   style={[
 *     cs("bg-orange-500 p-4 rounded transform duration-200"),
 *     isPressed && cs("bg-orange-600 scale-110")
 *   ]}
 *   onPressIn={() => setIsPressed(true)}
 *   onPressOut={() => setIsPressed(false)}
 * >
 *   <Text style={cs("text-white font-bold")}>Press me!</Text>
 * </Pressable>
 * ```
 *
 * 2. Using react-native-reanimated for smooth hover-like transitions:
 * ```tsx
 * import { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
 *
 * const scale = useSharedValue(1);
 * const backgroundColor = useSharedValue('#f97316'); // orange-500
 *
 * const animatedStyle = useAnimatedStyle(() => ({
 *   transform: [{ scale: scale.value }],
 *   backgroundColor: backgroundColor.value,
 * }));
 *
 * const handlePressIn = () => {
 *   scale.value = withSpring(1.1);
 *   backgroundColor.value = '#ea580c'; // orange-600
 * };
 *
 * const handlePressOut = () => {
 *   scale.value = withSpring(1);
 *   backgroundColor.value = '#f97316'; // orange-500
 * };
 * ```
 *
 * 3. Web compatibility with React Native Web (supports actual hover):
 * ```tsx
 * // For React Native Web, you can use CSS hover states
 * const styles = StyleSheet.create({
 *   button: {
 *     backgroundColor: '#f97316',
 *     padding: 16,
 *     borderRadius: 8,
 *     transform: [{ scale: 1 }],
 *     transition: 'all 200ms ease-out', // Web only
 *   },
 * });
 *
 * // Add web-specific hover styles
 * const webStyles = Platform.OS === 'web' ? {
 *   ':hover': {
 *     backgroundColor: '#ea580c',
 *     transform: [{ scale: 1.1 }],
 *   }
 * } : {};
 * ```
 */

// Hover state utilities that can be applied conditionally with state management
export const hoverStateUtilities = {
  // Scale effects for press/hover states
  "hover-scale-95": { transform: [{ scale: 0.95 }] },
  "hover-scale-100": { transform: [{ scale: 1 }] },
  "hover-scale-105": { transform: [{ scale: 1.05 }] },
  "hover-scale-110": { transform: [{ scale: 1.1 }] },
  "hover-scale-125": { transform: [{ scale: 1.25 }] },

  // Opacity effects for press/hover states
  "hover-opacity-0": { opacity: 0 },
  "hover-opacity-25": { opacity: 0.25 },
  "hover-opacity-50": { opacity: 0.5 },
  "hover-opacity-75": { opacity: 0.75 },
  "hover-opacity-100": { opacity: 1 },

  // Shadow effects for press/hover states
  "hover-shadow-none": {
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  "hover-shadow-sm": {
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  "hover-shadow": {
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  "hover-shadow-md": {
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  "hover-shadow-lg": {
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 15,
    elevation: 8,
  },
  "hover-shadow-xl": {
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.25,
    shadowRadius: 25,
    elevation: 12,
  },
  "hover-shadow-2xl": {
    shadowOffset: { width: 0, height: 25 },
    shadowOpacity: 0.25,
    shadowRadius: 50,
    elevation: 16,
  },

  // Translation effects for press/hover states
  "hover-translate-y-1": { transform: [{ translateY: -4 }] },
  "hover-translate-y-2": { transform: [{ translateY: -8 }] },
  "hover--translate-y-1": { transform: [{ translateY: 4 }] },
  "hover--translate-y-2": { transform: [{ translateY: 8 }] },

  // Rotation effects for press/hover states
  "hover-rotate-1": { transform: [{ rotate: "1deg" }] },
  "hover-rotate-2": { transform: [{ rotate: "2deg" }] },
  "hover-rotate-3": { transform: [{ rotate: "3deg" }] },
  "hover--rotate-1": { transform: [{ rotate: "-1deg" }] },
  "hover--rotate-2": { transform: [{ rotate: "-2deg" }] },
  "hover--rotate-3": { transform: [{ rotate: "-3deg" }] },

  // CamelCase versions
  hoverScale95: { transform: [{ scale: 0.95 }] },
  hoverScale100: { transform: [{ scale: 1 }] },
  hoverScale105: { transform: [{ scale: 1.05 }] },
  hoverScale110: { transform: [{ scale: 1.1 }] },
  hoverScale125: { transform: [{ scale: 1.25 }] },

  hoverOpacity0: { opacity: 0 },
  hoverOpacity25: { opacity: 0.25 },
  hoverOpacity50: { opacity: 0.5 },
  hoverOpacity75: { opacity: 0.75 },
  hoverOpacity100: { opacity: 1 },

  hoverShadowNone: {
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  hoverShadowSm: {
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  hoverShadow: {
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  hoverShadowMd: {
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
};
