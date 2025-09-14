/**
 * GRID LAYOUT UTILITIES
 *
 * CSS Grid-like utilities using React Native flexbox patterns for responsive
 * grid layouts, columns, rows, gaps, and auto placement simulation.
 */

export const gridUtilities = {
  // Grid Container Setup
  grid: {
    display: "flex" as const,
    flexDirection: "row" as const,
    flexWrap: "wrap" as const,
  },
  "grid-cols-1": {
    display: "flex" as const,
    flexDirection: "row" as const,
    flexWrap: "wrap" as const,
    /* Children should have width: 100% */
  },
  "grid-cols-2": {
    display: "flex" as const,
    flexDirection: "row" as const,
    flexWrap: "wrap" as const,
    /* Children should have width: 50% */
  },
  "grid-cols-3": {
    display: "flex" as const,
    flexDirection: "row" as const,
    flexWrap: "wrap" as const,
    /* Children should have width: 33.333% */
  },
  "grid-cols-4": {
    display: "flex" as const,
    flexDirection: "row" as const,
    flexWrap: "wrap" as const,
    /* Children should have width: 25% */
  },
  "grid-cols-5": {
    display: "flex" as const,
    flexDirection: "row" as const,
    flexWrap: "wrap" as const,
    /* Children should have width: 20% */
  },
  "grid-cols-6": {
    display: "flex" as const,
    flexDirection: "row" as const,
    flexWrap: "wrap" as const,
    /* Children should have width: 16.667% */
  },
  "grid-cols-12": {
    display: "flex" as const,
    flexDirection: "row" as const,
    flexWrap: "wrap" as const,
    /* Children should have width: 8.333% */
  },

  // Grid Rows (Vertical Grid)
  "grid-rows-1": {
    display: "flex" as const,
    flexDirection: "column" as const,
    /* Children should have height: 100% */
  },
  "grid-rows-2": {
    display: "flex" as const,
    flexDirection: "column" as const,
    /* Children should have height: 50% */
  },
  "grid-rows-3": {
    display: "flex" as const,
    flexDirection: "column" as const,
    /* Children should have height: 33.333% */
  },
  "grid-rows-4": {
    display: "flex" as const,
    flexDirection: "column" as const,
    /* Children should have height: 25% */
  },
  "grid-rows-5": {
    display: "flex" as const,
    flexDirection: "column" as const,
    /* Children should have height: 20% */
  },
  "grid-rows-6": {
    display: "flex" as const,
    flexDirection: "column" as const,
    /* Children should have height: 16.667% */
  },

  // Column Spanning (for grid children)
  "col-span-1": {
    width: "8.333%" as const, // 1/12
  },
  "col-span-2": {
    width: "16.667%" as const, // 2/12
  },
  "col-span-3": {
    width: "25%" as const, // 3/12
  },
  "col-span-4": {
    width: "33.333%" as const, // 4/12
  },
  "col-span-5": {
    width: "41.667%" as const, // 5/12
  },
  "col-span-6": {
    width: "50%" as const, // 6/12
  },
  "col-span-7": {
    width: "58.333%" as const, // 7/12
  },
  "col-span-8": {
    width: "66.667%" as const, // 8/12
  },
  "col-span-9": {
    width: "75%" as const, // 9/12
  },
  "col-span-10": {
    width: "83.333%" as const, // 10/12
  },
  "col-span-11": {
    width: "91.667%" as const, // 11/12
  },
  "col-span-12": {
    width: "100%" as const, // 12/12
  },
  "col-span-full": {
    width: "100%" as const,
  },

  // Row Spanning (for grid children)
  "row-span-1": {
    flex: 1,
  },
  "row-span-2": {
    flex: 2,
  },
  "row-span-3": {
    flex: 3,
  },
  "row-span-4": {
    flex: 4,
  },
  "row-span-5": {
    flex: 5,
  },
  "row-span-6": {
    flex: 6,
  },
  "row-span-full": {
    flex: 1,
    height: "100%" as const,
  },

  // Column Start/End (simulated with margin/positioning)
  "col-start-1": {
    marginLeft: 0,
  },
  "col-start-2": {
    marginLeft: "8.333%" as const,
  },
  "col-start-3": {
    marginLeft: "16.667%" as const,
  },
  "col-start-4": {
    marginLeft: "25%" as const,
  },
  "col-start-5": {
    marginLeft: "33.333%" as const,
  },
  "col-start-6": {
    marginLeft: "41.667%" as const,
  },
  "col-start-7": {
    marginLeft: "50%" as const,
  },
  "col-start-8": {
    marginLeft: "58.333%" as const,
  },
  "col-start-9": {
    marginLeft: "66.667%" as const,
  },
  "col-start-10": {
    marginLeft: "75%" as const,
  },
  "col-start-11": {
    marginLeft: "83.333%" as const,
  },
  "col-start-12": {
    marginLeft: "91.667%" as const,
  },

  // Auto Placement
  "col-auto": {
    width: "auto" as const,
  },
  "row-auto": {
    height: "auto" as const,
  },

  // Grid Flow (simulated with flex direction)
  "grid-flow-row": {
    flexDirection: "row" as const,
    flexWrap: "wrap" as const,
  },
  "grid-flow-col": {
    flexDirection: "column" as const,
    flexWrap: "wrap" as const,
  },
  "grid-flow-row-dense": {
    flexDirection: "row" as const,
    flexWrap: "wrap" as const,
    /* Dense packing simulation */
  },
  "grid-flow-col-dense": {
    flexDirection: "column" as const,
    flexWrap: "wrap" as const,
    /* Dense packing simulation */
  },

  // Auto-fit and Auto-fill (responsive grid simulation)
  "auto-cols-auto": {
    flex: 1,
    minWidth: 0,
  },
  "auto-cols-min": {
    /* Use minimal width - implement with state/measuring */
    width: "auto" as const,
  },
  "auto-cols-max": {
    /* Use maximum content width - implement with state/measuring */
    width: "auto" as const,
  },
  "auto-cols-fr": {
    flex: 1,
  },

  "auto-rows-auto": {
    height: "auto" as const,
  },
  "auto-rows-min": {
    /* Use minimal height - implement with state/measuring */
    height: "auto" as const,
  },
  "auto-rows-max": {
    /* Use maximum content height - implement with state/measuring */
    height: "auto" as const,
  },
  "auto-rows-fr": {
    flex: 1,
  },

  // CamelCase versions
  gridContainer: {
    display: "flex" as const,
    flexDirection: "row" as const,
    flexWrap: "wrap" as const,
  },
  gridCols1: {
    display: "flex" as const,
    flexDirection: "row" as const,
    flexWrap: "wrap" as const,
  },
  gridCols2: {
    display: "flex" as const,
    flexDirection: "row" as const,
    flexWrap: "wrap" as const,
  },
  gridCols3: {
    display: "flex" as const,
    flexDirection: "row" as const,
    flexWrap: "wrap" as const,
  },
  gridCols4: {
    display: "flex" as const,
    flexDirection: "row" as const,
    flexWrap: "wrap" as const,
  },
  gridCols6: {
    display: "flex" as const,
    flexDirection: "row" as const,
    flexWrap: "wrap" as const,
  },
  gridCols12: {
    display: "flex" as const,
    flexDirection: "row" as const,
    flexWrap: "wrap" as const,
  },

  gridRows1: {
    display: "flex" as const,
    flexDirection: "column" as const,
  },
  gridRows2: {
    display: "flex" as const,
    flexDirection: "column" as const,
  },
  gridRows3: {
    display: "flex" as const,
    flexDirection: "column" as const,
  },
  gridRows4: {
    display: "flex" as const,
    flexDirection: "column" as const,
  },

  colSpan1: {
    width: "8.333%" as const,
  },
  colSpan2: {
    width: "16.667%" as const,
  },
  colSpan3: {
    width: "25%" as const,
  },
  colSpan4: {
    width: "33.333%" as const,
  },
  colSpan6: {
    width: "50%" as const,
  },
  colSpan8: {
    width: "66.667%" as const,
  },
  colSpan12: {
    width: "100%" as const,
  },
  colSpanFull: {
    width: "100%" as const,
  },

  rowSpan1: {
    flex: 1,
  },
  rowSpan2: {
    flex: 2,
  },
  rowSpan3: {
    flex: 3,
  },
  rowSpanFull: {
    flex: 1,
    height: "100%" as const,
  },

  colAuto: {
    width: "auto" as const,
  },
  rowAuto: {
    height: "auto" as const,
  },

  gridFlowRow: {
    flexDirection: "row" as const,
    flexWrap: "wrap" as const,
  },
  gridFlowCol: {
    flexDirection: "column" as const,
    flexWrap: "wrap" as const,
  },

  autoColsAuto: {
    flex: 1,
    minWidth: 0,
  },
  autoColsFr: {
    flex: 1,
  },
  autoRowsAuto: {
    height: "auto" as const,
  },
  autoRowsFr: {
    flex: 1,
  },
};
