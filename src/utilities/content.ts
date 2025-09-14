/**
 * CONTENT UTILITIES
 *
 * Content utilities for pseudo-element simulation and dynamic content.
 * Since React Native doesn't have pseudo-elements, these utilities provide
 * guidance for implementing similar functionality with components.
 */

export const contentUtilities = {
  // Content Values (use with component state/props)
  "content-none": {
    /* No additional content - empty component */
  },
  "content-empty": {
    /* Empty string content - component with empty text */
  },

  // Common Content Patterns
  "content-space": {
    /* Single space character: " " */
  },
  "content-dash": {
    /* Dash character: "-" */
  },
  "content-bullet": {
    /* Bullet character: "•" */
  },
  "content-arrow": {
    /* Arrow character: "→" */
  },
  "content-quote-open": {
    /* Opening quote: """ */
  },
  "content-quote-close": {
    /* Closing quote: """ */
  },

  // List Markers
  "content-disc": {
    /* Disc bullet: "•" */
  },
  "content-circle": {
    /* Circle bullet: "○" */
  },
  "content-square": {
    /* Square bullet: "■" */
  },
  "content-decimal": {
    /* Decimal numbers: "1." "2." "3." - use with counter state */
  },
  "content-alpha": {
    /* Alphabetic: "a." "b." "c." - use with counter state */
  },
  "content-roman": {
    /* Roman numerals: "i." "ii." "iii." - use with counter state */
  },

  // Symbols and Icons
  "content-check": {
    /* Check mark: "✓" */
  },
  "content-cross": {
    /* Cross mark: "✕" */
  },
  "content-star": {
    /* Star: "★" */
  },
  "content-heart": {
    /* Heart: "♥" */
  },
  "content-diamond": {
    /* Diamond: "♦" */
  },
  "content-triangle": {
    /* Triangle: "▲" */
  },
  "content-circle-filled": {
    /* Filled circle: "●" */
  },
  "content-square-filled": {
    /* Filled square: "■" */
  },

  // Mathematical Symbols
  "content-plus": {
    /* Plus sign: "+" */
  },
  "content-minus": {
    /* Minus sign: "−" */
  },
  "content-multiply": {
    /* Multiplication: "×" */
  },
  "content-divide": {
    /* Division: "÷" */
  },
  "content-equals": {
    /* Equals: "=" */
  },
  "content-percent": {
    /* Percent: "%" */
  },

  // Currency Symbols
  "content-dollar": {
    /* Dollar sign: "$" */
  },
  "content-euro": {
    /* Euro sign: "€" */
  },
  "content-pound": {
    /* Pound sign: "£" */
  },
  "content-yen": {
    /* Yen sign: "¥" */
  },

  // Arrows
  "content-arrow-up": {
    /* Up arrow: "↑" */
  },
  "content-arrow-down": {
    /* Down arrow: "↓" */
  },
  "content-arrow-left": {
    /* Left arrow: "←" */
  },
  "content-arrow-right": {
    /* Right arrow: "→" */
  },
  "content-arrow-up-right": {
    /* Up-right arrow: "↗" */
  },
  "content-arrow-down-right": {
    /* Down-right arrow: "↘" */
  },

  // Punctuation
  "content-ellipsis": {
    /* Ellipsis: "…" */
  },
  "content-comma": {
    /* Comma: "," */
  },
  "content-period": {
    /* Period: "." */
  },
  "content-colon": {
    /* Colon: ":" */
  },
  "content-semicolon": {
    /* Semicolon: ";" */
  },
  "content-exclamation": {
    /* Exclamation: "!" */
  },
  "content-question": {
    /* Question mark: "?" */
  },

  // Before/After Element Simulation
  "before-content": {
    /* Apply to component that simulates ::before pseudo-element */
    position: "absolute" as const,
    top: 0,
    left: 0,
  },
  "after-content": {
    /* Apply to component that simulates ::after pseudo-element */
    position: "absolute" as const,
    bottom: 0,
    right: 0,
  },

  // CamelCase versions
  contentNone: {
    /* No additional content - empty component */
  },
  contentEmpty: {
    /* Empty string content - component with empty text */
  },

  contentSpace: {
    /* Single space character: " " */
  },
  contentDash: {
    /* Dash character: "-" */
  },
  contentBullet: {
    /* Bullet character: "•" */
  },
  contentArrow: {
    /* Arrow character: "→" */
  },
  contentQuoteOpen: {
    /* Opening quote: """ */
  },
  contentQuoteClose: {
    /* Closing quote: """ */
  },

  contentDisc: {
    /* Disc bullet: "•" */
  },
  contentCircle: {
    /* Circle bullet: "○" */
  },
  contentSquare: {
    /* Square bullet: "■" */
  },
  contentDecimal: {
    /* Decimal numbers: "1." "2." "3." - use with counter state */
  },
  contentAlpha: {
    /* Alphabetic: "a." "b." "c." - use with counter state */
  },
  contentRoman: {
    /* Roman numerals: "i." "ii." "iii." - use with counter state */
  },

  contentCheck: {
    /* Check mark: "✓" */
  },
  contentCross: {
    /* Cross mark: "✕" */
  },
  contentStar: {
    /* Star: "★" */
  },
  contentHeart: {
    /* Heart: "♥" */
  },
  contentDiamond: {
    /* Diamond: "♦" */
  },
  contentTriangle: {
    /* Triangle: "▲" */
  },
  contentCircleFilled: {
    /* Filled circle: "●" */
  },
  contentSquareFilled: {
    /* Filled square: "■" */
  },

  contentPlus: {
    /* Plus sign: "+" */
  },
  contentMinus: {
    /* Minus sign: "−" */
  },
  contentMultiply: {
    /* Multiplication: "×" */
  },
  contentDivide: {
    /* Division: "÷" */
  },
  contentEquals: {
    /* Equals: "=" */
  },
  contentPercent: {
    /* Percent: "%" */
  },

  contentDollar: {
    /* Dollar sign: "$" */
  },
  contentEuro: {
    /* Euro sign: "€" */
  },
  contentPound: {
    /* Pound sign: "£" */
  },
  contentYen: {
    /* Yen sign: "¥" */
  },

  contentArrowUp: {
    /* Up arrow: "↑" */
  },
  contentArrowDown: {
    /* Down arrow: "↓" */
  },
  contentArrowLeft: {
    /* Left arrow: "←" */
  },
  contentArrowRight: {
    /* Right arrow: "→" */
  },
  contentArrowUpRight: {
    /* Up-right arrow: "↗" */
  },
  contentArrowDownRight: {
    /* Down-right arrow: "↘" */
  },

  contentEllipsis: {
    /* Ellipsis: "…" */
  },
  contentComma: {
    /* Comma: "," */
  },
  contentPeriod: {
    /* Period: "." */
  },
  contentColon: {
    /* Colon: ":" */
  },
  contentSemicolon: {
    /* Semicolon: ";" */
  },
  contentExclamation: {
    /* Exclamation: "!" */
  },
  contentQuestion: {
    /* Question mark: "?" */
  },

  beforeContent: {
    /* Apply to component that simulates ::before pseudo-element */
    position: "absolute" as const,
    top: 0,
    left: 0,
  },
  afterContent: {
    /* Apply to component that simulates ::after pseudo-element */
    position: "absolute" as const,
    bottom: 0,
    right: 0,
  },
};
