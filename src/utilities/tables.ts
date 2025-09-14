/**
 * TABLE UTILITIES
 *
 * React Native compatible table utilities for structured data display.
 * These utilities help create table-like layouts using flexbox,
 * as React Native doesn't have native table elements.
 */

export const tableUtilities = {
  // Table Layout (using flexbox to simulate table behavior)
  table: {
    flexDirection: "column" as const,
  },
  "table-caption": {
    /* Table caption - use with Text component */
  },
  "table-cell": {
    flex: 1,
    padding: 8,
    justifyContent: "center" as const,
  },
  "table-column": {
    /* Table column - use with flex: 1 */
  },
  "table-column-group": {
    /* Table column group - use with flexDirection: 'row' */
  },
  "table-footer-group": {
    /* Table footer group */
  },
  "table-header-group": {
    /* Table header group */
  },
  "table-row": {
    flexDirection: "row" as const,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  "table-row-group": {
    /* Table row group */
  },

  // Table Border Collapse (simulated with border styles)
  "border-collapse": {
    /* Collapsed borders - use consistent border styles */
  },
  "border-separate": {
    /* Separated borders - use margin/padding for spacing */
  },

  // Table Layout Algorithm
  "table-auto": {
    /* Automatic table layout - flex with wrap */
    flexWrap: "wrap" as const,
  },
  "table-fixed": {
    /* Fixed table layout - equal column widths */
  },

  // Caption Side (for table captions)
  "caption-top": {
    /* Caption above table */
  },
  "caption-bottom": {
    /* Caption below table */
  },

  // Table specific spacing utilities
  "table-spacing-0": {
    /* No spacing between cells */
  },
  "table-spacing-1": {
    /* 4px spacing between cells */
  },
  "table-spacing-2": {
    /* 8px spacing between cells */
  },
  "table-spacing-3": {
    /* 12px spacing between cells */
  },
  "table-spacing-4": {
    /* 16px spacing between cells */
  },
  "table-spacing-5": {
    /* 20px spacing between cells */
  },
  "table-spacing-6": {
    /* 24px spacing between cells */
  },
  "table-spacing-8": {
    /* 32px spacing between cells */
  },

  // Table header styles
  "table-header": {
    backgroundColor: "#F9FAFB",
    fontWeight: "600" as const,
    borderBottomWidth: 2,
    borderBottomColor: "#D1D5DB",
  },

  // Table body styles
  "table-body": {
    backgroundColor: "#FFFFFF",
  },

  // Table footer styles
  "table-footer": {
    backgroundColor: "#F9FAFB",
    borderTopWidth: 2,
    borderTopColor: "#D1D5DB",
  },

  // Striped table rows
  "table-striped-even": {
    backgroundColor: "#F9FAFB",
  },
  "table-striped-odd": {
    backgroundColor: "#FFFFFF",
  },

  // Table hover states (for touchable cells)
  "table-hover": {
    backgroundColor: "#F3F4F6",
  },

  // Table cell alignment
  "table-cell-left": {
    alignItems: "flex-start" as const,
  },
  "table-cell-center": {
    alignItems: "center" as const,
  },
  "table-cell-right": {
    alignItems: "flex-end" as const,
  },

  // Table cell vertical alignment
  "table-cell-top": {
    justifyContent: "flex-start" as const,
  },
  "table-cell-middle": {
    justifyContent: "center" as const,
  },
  "table-cell-bottom": {
    justifyContent: "flex-end" as const,
  },

  // Table borders
  "table-border": {
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  "table-border-t": {
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },
  "table-border-r": {
    borderRightWidth: 1,
    borderRightColor: "#E5E7EB",
  },
  "table-border-b": {
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  "table-border-l": {
    borderLeftWidth: 1,
    borderLeftColor: "#E5E7EB",
  },

  // CamelCase versions
  tableLayout: {
    flexDirection: "column" as const,
  },
  tableCell: {
    flex: 1,
    padding: 8,
    justifyContent: "center" as const,
  },
  tableRow: {
    flexDirection: "row" as const,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  tableAuto: {
    flexWrap: "wrap" as const,
  },
  tableHeader: {
    backgroundColor: "#F9FAFB",
    fontWeight: "600" as const,
    borderBottomWidth: 2,
    borderBottomColor: "#D1D5DB",
  },
  tableBody: {
    backgroundColor: "#FFFFFF",
  },
  tableFooter: {
    backgroundColor: "#F9FAFB",
    borderTopWidth: 2,
    borderTopColor: "#D1D5DB",
  },
  tableStripedEven: {
    backgroundColor: "#F9FAFB",
  },
  tableStripedOdd: {
    backgroundColor: "#FFFFFF",
  },
  tableHover: {
    backgroundColor: "#F3F4F6",
  },
  tableCellLeft: {
    alignItems: "flex-start" as const,
  },
  tableCellCenter: {
    alignItems: "center" as const,
  },
  tableCellRight: {
    alignItems: "flex-end" as const,
  },
  tableCellTop: {
    justifyContent: "flex-start" as const,
  },
  tableCellMiddle: {
    justifyContent: "center" as const,
  },
  tableCellBottom: {
    justifyContent: "flex-end" as const,
  },
  tableBorder: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
};
