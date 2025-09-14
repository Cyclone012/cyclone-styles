# Direct Styles Usage Guide

The new global styles system allows you to use pre-computed style objects directly without calling the `cs()` function. This provides better performance and a more CSS-modules-like experience.

## Installation & Setup

```bash
npm install cyclone-styles@0.0.1-beta
```

## Import Methods

### Method 1: Individual Imports

```typescript
import {
  $,
  getLayoutStyles,
  getSpacingStyles,
  getColorStyles,
  getTypographyStyles,
  getBorderStyles,
} from "cyclone-styles";
```

### Method 2: Preset Import (Auto-setup)

```typescript
// Import once in your app root
import "cyclone-styles/preset";

// Then use globally (if supported by your environment)
const styles = $.flexRow();
```

## Usage Patterns

### 1. Shorthand $ API (Recommended)

```tsx
import { $ } from "cyclone-styles";

<View style={[$.flexRow(), $.p4(), $.bgWhite()]}>
  <Text style={[$.textLg(), $.fontBold(), $.textBlack()]}>Hello World</Text>
</View>;
```

### 2. Category-based Style Objects

```tsx
import {
  getLayoutStyles,
  getSpacingStyles,
  getColorStyles,
} from "cyclone-styles";

const layout = getLayoutStyles();
const spacing = getSpacingStyles();
const colors = getColorStyles();

<View style={[layout.flexRow, spacing.p4, colors.bgWhite]}>
  <Text style={[colors.textBlack]}>Hello World</Text>
</View>;
```

### 3. Mixed with Custom Styles

```tsx
<Pressable
  style={[
    $.rounded(),
    $.p4(),
    $.bgBlue(),
    { marginTop: 16 }, // Custom style
    { elevation: 2 }, // Custom style
  ]}
>
  <Text style={[$.textWhite(), $.textCenter()]}>Button</Text>
</Pressable>
```

## Available Style Categories

### Layout Styles

- `$.flex1()`, `$.flexRow()`, `$.flexCol()`
- `$.justifyCenter()`, `$.itemsCenter()`, `$.justifyBetween()`
- `$.selfCenter()`, `$.flexWrap()`

### Spacing Styles

- `$.p2()`, `$.p3()`, `$.p4()`, `$.p6()` (padding)
- `$.m2()`, `$.m3()`, `$.m4()`, `$.m6()` (margin)
- `$.px2()`, `$.py3()` (padding x/y axis)

### Color Styles

- `$.bgWhite()`, `$.bgBlue()`, `$.bgRed()`, `$.bgGreen()`
- `$.textWhite()`, `$.textBlack()`, `$.textGray()`

### Typography Styles

- `$.textSm()`, `$.textBase()`, `$.textLg()`, `$.textXl()`
- `$.fontBold()`, `$.textCenter()`

### Border & Effects

- `$.rounded()`, `$.roundedLg()`, `$.roundedFull()`
- `$.shadow()`, `$.shadowLg()`

## Performance Benefits

✅ **No function calls during render** - Pre-computed StyleSheet objects  
✅ **Better tree-shaking** - Only import what you use  
✅ **TypeScript support** - Full autocompletion and type safety  
✅ **React Native optimized** - Uses StyleSheet.create() under the hood

## Migration from cs() Function

### Before:

```tsx
<View style={cs("flex-row p-4 bg-white")}>
  <Text style={cs("text-lg font-bold text-black")}>Hello</Text>
</View>
```

### After:

```tsx
<View style={[$.flexRow(), $.p4(), $.bgWhite()]}>
  <Text style={[$.textLg(), $.fontBold(), $.textBlack()]}>Hello</Text>
</View>
```

## Advanced Usage

### Create Custom Style Sets

```typescript
import { getLayoutStyles, getSpacingStyles } from "cyclone-styles";

const cardStyles = {
  container: [
    getLayoutStyles().flexCol,
    getSpacingStyles().p4,
    { backgroundColor: "#fff", borderRadius: 8 },
  ],
  title: [
    getTypographyStyles().textLg,
    getTypographyStyles().fontBold,
    { marginBottom: 8 },
  ],
};

// Use in components
<View style={cardStyles.container}>
  <Text style={cardStyles.title}>Card Title</Text>
</View>;
```

### Conditional Styles

```tsx
<View
  style={[
    $.flexRow(),
    $.p4(),
    isActive ? $.bgBlue() : $.bgGray(),
    { opacity: isDisabled ? 0.5 : 1 },
  ]}
>
  <Text style={[$.textBase(), isActive ? $.textWhite() : $.textBlack()]}>
    {title}
  </Text>
</View>
```

This new system provides a more performant and developer-friendly way to style React Native components while maintaining the utility-first approach of the original cs() function.
