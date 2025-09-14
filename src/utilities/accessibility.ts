/**
 * ACCESSIBILITY UTILITIES
 *
 * React Native accessibility utilities for screen readers, focus management,
 * and WCAG compliance. Works with React Native's accessibility APIs.
 */

export const accessibilityUtilities = {
  // Screen Reader Support
  "sr-only": {
    position: "absolute" as const,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden" as const,
  },
  "not-sr-only": {
    width: "auto" as const,
    height: "auto" as const,
    padding: 0,
    margin: 0,
    overflow: "visible" as const,
  },

  // Accessibility Labels (use with component props, not styles)
  accessible: {
    /* Use with accessible={true} prop */
  },
  "not-accessible": {
    /* Use with accessible={false} prop */
  },

  // Accessibility Roles (use with accessibilityRole prop)
  "role-none": {
    /* Use with accessibilityRole="none" prop */
  },
  "role-button": {
    /* Use with accessibilityRole="button" prop */
  },
  "role-link": {
    /* Use with accessibilityRole="link" prop */
  },
  "role-search": {
    /* Use with accessibilityRole="search" prop */
  },
  "role-image": {
    /* Use with accessibilityRole="image" prop */
  },
  "role-keyboardkey": {
    /* Use with accessibilityRole="keyboardkey" prop */
  },
  "role-text": {
    /* Use with accessibilityRole="text" prop */
  },
  "role-adjustable": {
    /* Use with accessibilityRole="adjustable" prop */
  },
  "role-imagebutton": {
    /* Use with accessibilityRole="imagebutton" prop */
  },
  "role-header": {
    /* Use with accessibilityRole="header" prop */
  },
  "role-summary": {
    /* Use with accessibilityRole="summary" prop */
  },
  "role-alert": {
    /* Use with accessibilityRole="alert" prop */
  },
  "role-checkbox": {
    /* Use with accessibilityRole="checkbox" prop */
  },
  "role-combobox": {
    /* Use with accessibilityRole="combobox" prop */
  },
  "role-menu": {
    /* Use with accessibilityRole="menu" prop */
  },
  "role-menubar": {
    /* Use with accessibilityRole="menubar" prop */
  },
  "role-menuitem": {
    /* Use with accessibilityRole="menuitem" prop */
  },
  "role-progressbar": {
    /* Use with accessibilityRole="progressbar" prop */
  },
  "role-radio": {
    /* Use with accessibilityRole="radio" prop */
  },
  "role-radiogroup": {
    /* Use with accessibilityRole="radiogroup" prop */
  },
  "role-scrollbar": {
    /* Use with accessibilityRole="scrollbar" prop */
  },
  "role-spinbutton": {
    /* Use with accessibilityRole="spinbutton" prop */
  },
  "role-switch": {
    /* Use with accessibilityRole="switch" prop */
  },
  "role-tab": {
    /* Use with accessibilityRole="tab" prop */
  },
  "role-tablist": {
    /* Use with accessibilityRole="tablist" prop */
  },
  "role-timer": {
    /* Use with accessibilityRole="timer" prop */
  },
  "role-toolbar": {
    /* Use with accessibilityRole="toolbar" prop */
  },

  // Accessibility States (use with accessibilityState prop)
  "state-disabled": {
    /* Use with accessibilityState: { disabled: true } */
  },
  "state-selected": {
    /* Use with accessibilityState: { selected: true } */
  },
  "state-checked": {
    /* Use with accessibilityState: { checked: true } */
  },
  "state-unchecked": {
    /* Use with accessibilityState: { checked: false } */
  },
  "state-busy": {
    /* Use with accessibilityState: { busy: true } */
  },
  "state-expanded": {
    /* Use with accessibilityState: { expanded: true } */
  },
  "state-collapsed": {
    /* Use with accessibilityState: { expanded: false } */
  },

  // Accessibility Hints (use with accessibilityHint prop)
  "hint-double-tap": {
    /* Use with accessibilityHint: "Double tap to activate" */
  },
  "hint-swipe": {
    /* Use with accessibilityHint: "Swipe to navigate" */
  },
  "hint-adjustable": {
    /* Use with accessibilityHint: "Swipe up or down to adjust value" */
  },

  // Accessibility Actions (use with accessibilityActions prop)
  "action-activate": {
    /* Use with accessibilityActions: [{ name: 'activate', label: 'Activate' }] */
  },
  "action-increment": {
    /* Use with accessibilityActions: [{ name: 'increment', label: 'Increment' }] */
  },
  "action-decrement": {
    /* Use with accessibilityActions: [{ name: 'decrement', label: 'Decrement' }] */
  },

  // Focus Management
  focusable: {
    /* Element can receive focus */
  },
  "not-focusable": {
    /* Element cannot receive focus */
  },

  // Accessibility Live Regions (use with accessibilityLiveRegion prop)
  "live-none": {
    /* Use with accessibilityLiveRegion: 'none' */
  },
  "live-polite": {
    /* Use with accessibilityLiveRegion: 'polite' */
  },
  "live-assertive": {
    /* Use with accessibilityLiveRegion: 'assertive' */
  },

  // Accessibility Importance (Android-specific)
  "importance-auto": {
    /* Use with importantForAccessibility: 'auto' */
  },
  "importance-yes": {
    /* Use with importantForAccessibility: 'yes' */
  },
  "importance-no": {
    /* Use with importantForAccessibility: 'no' */
  },
  "importance-no-hide-descendants": {
    /* Use with importantForAccessibility: 'no-hide-descendants' */
  },

  // CamelCase versions
  srOnly: {
    position: "absolute" as const,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden" as const,
  },
  notSrOnly: {
    width: "auto" as const,
    height: "auto" as const,
    padding: 0,
    margin: 0,
    overflow: "visible" as const,
  },

  accessibleTrue: {
    /* Use with accessible={true} prop */
  },
  accessibleFalse: {
    /* Use with accessible={false} prop */
  },

  roleNone: {
    /* Use with accessibilityRole="none" prop */
  },
  roleButton: {
    /* Use with accessibilityRole="button" prop */
  },
  roleLink: {
    /* Use with accessibilityRole="link" prop */
  },
  roleSearch: {
    /* Use with accessibilityRole="search" prop */
  },
  roleImage: {
    /* Use with accessibilityRole="image" prop */
  },
  roleText: {
    /* Use with accessibilityRole="text" prop */
  },
  roleHeader: {
    /* Use with accessibilityRole="header" prop */
  },
  roleAlert: {
    /* Use with accessibilityRole="alert" prop */
  },
  roleCheckbox: {
    /* Use with accessibilityRole="checkbox" prop */
  },
  roleMenu: {
    /* Use with accessibilityRole="menu" prop */
  },
  roleMenuitem: {
    /* Use with accessibilityRole="menuitem" prop */
  },
  roleProgressbar: {
    /* Use with accessibilityRole="progressbar" prop */
  },
  roleRadio: {
    /* Use with accessibilityRole="radio" prop */
  },
  roleSwitch: {
    /* Use with accessibilityRole="switch" prop */
  },
  roleTab: {
    /* Use with accessibilityRole="tab" prop */
  },
  roleTablist: {
    /* Use with accessibilityRole="tablist" prop */
  },
  roleToolbar: {
    /* Use with accessibilityRole="toolbar" prop */
  },

  focusableTrue: {
    /* Element can receive focus */
  },
  focusableFalse: {
    /* Element cannot receive focus */
  },
};
