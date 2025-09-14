import { StyleSheet } from "react-native";

/**
 * COLOR UTILITIES
 *
 * Background colors, text colors, and opacity variants
 * Based on Tailwind CSS color palette with React Native compatibility
 *
 * Note: This is a condensed version focusing on core colors and main opacity variants.
 * The original styles.ts contains ~10,920 color opacity utilities.
 */

export const colorUtilities = StyleSheet.create({
  // ====================
  // BACKGROUND COLORS - BASE
  // ====================

  "bg-transparent": { backgroundColor: "transparent" },
  "bg-current": { backgroundColor: "currentColor" },
  "bg-white": { backgroundColor: "#FFFFFF" },
  "bg-black": { backgroundColor: "#000000" },

  // ====================
  // GRAY SCALE
  // ====================

  "bg-gray-50": { backgroundColor: "#F9FAFB" },
  "bg-gray-100": { backgroundColor: "#F3F4F6" },
  "bg-gray-200": { backgroundColor: "#E5E7EB" },
  "bg-gray-300": { backgroundColor: "#D1D5DB" },
  "bg-gray-400": { backgroundColor: "#9CA3AF" },
  "bg-gray-500": { backgroundColor: "#6B7280" },
  "bg-gray-600": { backgroundColor: "#4B5563" },
  "bg-gray-700": { backgroundColor: "#374151" },
  "bg-gray-800": { backgroundColor: "#1F2937" },
  "bg-gray-900": { backgroundColor: "#111827" },

  "bg-neutral-50": { backgroundColor: "#FAFAFA" },
  "bg-neutral-100": { backgroundColor: "#F5F5F5" },
  "bg-neutral-200": { backgroundColor: "#E5E5E5" },
  "bg-neutral-300": { backgroundColor: "#D4D4D4" },
  "bg-neutral-400": { backgroundColor: "#A3A3A3" },
  "bg-neutral-500": { backgroundColor: "#737373" },
  "bg-neutral-600": { backgroundColor: "#525252" },
  "bg-neutral-700": { backgroundColor: "#404040" },
  "bg-neutral-800": { backgroundColor: "#262626" },
  "bg-neutral-900": { backgroundColor: "#171717" },

  "bg-slate-50": { backgroundColor: "#F8FAFC" },
  "bg-slate-100": { backgroundColor: "#F1F5F9" },
  "bg-slate-200": { backgroundColor: "#E2E8F0" },
  "bg-slate-300": { backgroundColor: "#CBD5E1" },
  "bg-slate-400": { backgroundColor: "#94A3B8" },
  "bg-slate-500": { backgroundColor: "#64748B" },
  "bg-slate-600": { backgroundColor: "#475569" },
  "bg-slate-700": { backgroundColor: "#334155" },
  "bg-slate-800": { backgroundColor: "#1E293B" },
  "bg-slate-900": { backgroundColor: "#0F172A" },

  // ====================
  // COLOR PALETTE
  // ====================

  // Red
  "bg-red-50": { backgroundColor: "#FEF2F2" },
  "bg-red-100": { backgroundColor: "#FEE2E2" },
  "bg-red-200": { backgroundColor: "#FECACA" },
  "bg-red-300": { backgroundColor: "#FCA5A5" },
  "bg-red-400": { backgroundColor: "#F87171" },
  "bg-red-500": { backgroundColor: "#EF4444" },
  "bg-red-600": { backgroundColor: "#DC2626" },
  "bg-red-700": { backgroundColor: "#B91C1C" },
  "bg-red-800": { backgroundColor: "#991B1B" },
  "bg-red-900": { backgroundColor: "#7F1D1D" },

  // Orange
  "bg-orange-50": { backgroundColor: "#FFF7ED" },
  "bg-orange-100": { backgroundColor: "#FFEDD5" },
  "bg-orange-200": { backgroundColor: "#FED7AA" },
  "bg-orange-300": { backgroundColor: "#FDBA74" },
  "bg-orange-400": { backgroundColor: "#FB923C" },
  "bg-orange-500": { backgroundColor: "#F97316" },
  "bg-orange-600": { backgroundColor: "#EA580C" },
  "bg-orange-700": { backgroundColor: "#C2410C" },
  "bg-orange-800": { backgroundColor: "#9A3412" },
  "bg-orange-900": { backgroundColor: "#7C2D12" },

  // Amber
  "bg-amber-50": { backgroundColor: "#FFFBEB" },
  "bg-amber-100": { backgroundColor: "#FEF3C7" },
  "bg-amber-200": { backgroundColor: "#FDE68A" },
  "bg-amber-300": { backgroundColor: "#FCD34D" },
  "bg-amber-400": { backgroundColor: "#FBBF24" },
  "bg-amber-500": { backgroundColor: "#F59E0B" },
  "bg-amber-600": { backgroundColor: "#D97706" },
  "bg-amber-700": { backgroundColor: "#B45309" },
  "bg-amber-800": { backgroundColor: "#92400E" },
  "bg-amber-900": { backgroundColor: "#78350F" },

  // Yellow
  "bg-yellow-50": { backgroundColor: "#FEFCE8" },
  "bg-yellow-100": { backgroundColor: "#FEF3C7" },
  "bg-yellow-200": { backgroundColor: "#FDE68A" },
  "bg-yellow-300": { backgroundColor: "#FCD34D" },
  "bg-yellow-400": { backgroundColor: "#FBBF24" },
  "bg-yellow-500": { backgroundColor: "#F59E0B" },
  "bg-yellow-600": { backgroundColor: "#D97706" },
  "bg-yellow-700": { backgroundColor: "#B45309" },
  "bg-yellow-800": { backgroundColor: "#92400E" },
  "bg-yellow-900": { backgroundColor: "#78350F" },

  // Lime
  "bg-lime-50": { backgroundColor: "#F7FEE7" },
  "bg-lime-100": { backgroundColor: "#ECFCCB" },
  "bg-lime-200": { backgroundColor: "#D9F99D" },
  "bg-lime-300": { backgroundColor: "#BEF264" },
  "bg-lime-400": { backgroundColor: "#A3E635" },
  "bg-lime-500": { backgroundColor: "#84CC16" },
  "bg-lime-600": { backgroundColor: "#65A30D" },
  "bg-lime-700": { backgroundColor: "#4D7C0F" },
  "bg-lime-800": { backgroundColor: "#365314" },
  "bg-lime-900": { backgroundColor: "#1A2E05" },

  // Green
  "bg-green-50": { backgroundColor: "#F0FDF4" },
  "bg-green-100": { backgroundColor: "#DCFCE7" },
  "bg-green-200": { backgroundColor: "#BBF7D0" },
  "bg-green-300": { backgroundColor: "#86EFAC" },
  "bg-green-400": { backgroundColor: "#4ADE80" },
  "bg-green-500": { backgroundColor: "#22C55E" },
  "bg-green-600": { backgroundColor: "#16A34A" },
  "bg-green-700": { backgroundColor: "#15803D" },
  "bg-green-800": { backgroundColor: "#166534" },
  "bg-green-900": { backgroundColor: "#14532D" },

  // Emerald
  "bg-emerald-50": { backgroundColor: "#ECFDF5" },
  "bg-emerald-100": { backgroundColor: "#D1FAE5" },
  "bg-emerald-200": { backgroundColor: "#A7F3D0" },
  "bg-emerald-300": { backgroundColor: "#6EE7B7" },
  "bg-emerald-400": { backgroundColor: "#34D399" },
  "bg-emerald-500": { backgroundColor: "#10B981" },
  "bg-emerald-600": { backgroundColor: "#059669" },
  "bg-emerald-700": { backgroundColor: "#047857" },
  "bg-emerald-800": { backgroundColor: "#065F46" },
  "bg-emerald-900": { backgroundColor: "#064E3B" },

  // Teal
  "bg-teal-50": { backgroundColor: "#F0FDFA" },
  "bg-teal-100": { backgroundColor: "#CCFBF1" },
  "bg-teal-200": { backgroundColor: "#99F6E4" },
  "bg-teal-300": { backgroundColor: "#5EEAD4" },
  "bg-teal-400": { backgroundColor: "#2DD4BF" },
  "bg-teal-500": { backgroundColor: "#14B8A6" },
  "bg-teal-600": { backgroundColor: "#0D9488" },
  "bg-teal-700": { backgroundColor: "#0F766E" },
  "bg-teal-800": { backgroundColor: "#115E59" },
  "bg-teal-900": { backgroundColor: "#134E4A" },

  // Cyan
  "bg-cyan-50": { backgroundColor: "#ECFEFF" },
  "bg-cyan-100": { backgroundColor: "#CFFAFE" },
  "bg-cyan-200": { backgroundColor: "#A5F3FC" },
  "bg-cyan-300": { backgroundColor: "#67E8F9" },
  "bg-cyan-400": { backgroundColor: "#22D3EE" },
  "bg-cyan-500": { backgroundColor: "#06B6D4" },
  "bg-cyan-600": { backgroundColor: "#0891B2" },
  "bg-cyan-700": { backgroundColor: "#0E7490" },
  "bg-cyan-800": { backgroundColor: "#155E75" },
  "bg-cyan-900": { backgroundColor: "#164E63" },

  // Sky
  "bg-sky-50": { backgroundColor: "#F0F9FF" },
  "bg-sky-100": { backgroundColor: "#E0F2FE" },
  "bg-sky-200": { backgroundColor: "#BAE6FD" },
  "bg-sky-300": { backgroundColor: "#7DD3FC" },
  "bg-sky-400": { backgroundColor: "#38BDF8" },
  "bg-sky-500": { backgroundColor: "#0EA5E9" },
  "bg-sky-600": { backgroundColor: "#0284C7" },
  "bg-sky-700": { backgroundColor: "#0369A1" },
  "bg-sky-800": { backgroundColor: "#075985" },
  "bg-sky-900": { backgroundColor: "#0C4A6E" },

  // Blue
  "bg-blue-50": { backgroundColor: "#EFF6FF" },
  "bg-blue-100": { backgroundColor: "#DBEAFE" },
  "bg-blue-200": { backgroundColor: "#BFDBFE" },
  "bg-blue-300": { backgroundColor: "#93C5FD" },
  "bg-blue-400": { backgroundColor: "#60A5FA" },
  "bg-blue-500": { backgroundColor: "#3B82F6" },
  "bg-blue-600": { backgroundColor: "#2563EB" },
  "bg-blue-700": { backgroundColor: "#1D4ED8" },
  "bg-blue-800": { backgroundColor: "#1E40AF" },
  "bg-blue-900": { backgroundColor: "#1E3A8A" },

  // Indigo
  "bg-indigo-50": { backgroundColor: "#EEF2FF" },
  "bg-indigo-100": { backgroundColor: "#E0E7FF" },
  "bg-indigo-200": { backgroundColor: "#C7D2FE" },
  "bg-indigo-300": { backgroundColor: "#A5B4FC" },
  "bg-indigo-400": { backgroundColor: "#818CF8" },
  "bg-indigo-500": { backgroundColor: "#6366F1" },
  "bg-indigo-600": { backgroundColor: "#4F46E5" },
  "bg-indigo-700": { backgroundColor: "#4338CA" },
  "bg-indigo-800": { backgroundColor: "#3730A3" },
  "bg-indigo-900": { backgroundColor: "#312E81" },

  // Violet
  "bg-violet-50": { backgroundColor: "#F5F3FF" },
  "bg-violet-100": { backgroundColor: "#EDE9FE" },
  "bg-violet-200": { backgroundColor: "#DDD6FE" },
  "bg-violet-300": { backgroundColor: "#C4B5FD" },
  "bg-violet-400": { backgroundColor: "#A78BFA" },
  "bg-violet-500": { backgroundColor: "#8B5CF6" },
  "bg-violet-600": { backgroundColor: "#7C3AED" },
  "bg-violet-700": { backgroundColor: "#6D28D9" },
  "bg-violet-800": { backgroundColor: "#5B21B6" },
  "bg-violet-900": { backgroundColor: "#4C1D95" },

  // Purple
  "bg-purple-50": { backgroundColor: "#FAF5FF" },
  "bg-purple-100": { backgroundColor: "#F3E8FF" },
  "bg-purple-200": { backgroundColor: "#E9D5FF" },
  "bg-purple-300": { backgroundColor: "#D8B4FE" },
  "bg-purple-400": { backgroundColor: "#C084FC" },
  "bg-purple-500": { backgroundColor: "#A855F7" },
  "bg-purple-600": { backgroundColor: "#9333EA" },
  "bg-purple-700": { backgroundColor: "#7C3AED" },
  "bg-purple-800": { backgroundColor: "#6B21D6" },
  "bg-purple-900": { backgroundColor: "#581C87" },

  // Fuchsia
  "bg-fuchsia-50": { backgroundColor: "#FDF4FF" },
  "bg-fuchsia-100": { backgroundColor: "#FAE8FF" },
  "bg-fuchsia-200": { backgroundColor: "#F5D0FE" },
  "bg-fuchsia-300": { backgroundColor: "#F0ABFC" },
  "bg-fuchsia-400": { backgroundColor: "#E879F9" },
  "bg-fuchsia-500": { backgroundColor: "#D946EF" },
  "bg-fuchsia-600": { backgroundColor: "#C026D3" },
  "bg-fuchsia-700": { backgroundColor: "#A21CAF" },
  "bg-fuchsia-800": { backgroundColor: "#86198F" },
  "bg-fuchsia-900": { backgroundColor: "#701A75" },

  // Pink
  "bg-pink-50": { backgroundColor: "#FDF2F8" },
  "bg-pink-100": { backgroundColor: "#FCE7F3" },
  "bg-pink-200": { backgroundColor: "#FBCFE8" },
  "bg-pink-300": { backgroundColor: "#F9A8D4" },
  "bg-pink-400": { backgroundColor: "#F472B6" },
  "bg-pink-500": { backgroundColor: "#EC4899" },
  "bg-pink-600": { backgroundColor: "#DB2777" },
  "bg-pink-700": { backgroundColor: "#BE185D" },
  "bg-pink-800": { backgroundColor: "#9D174D" },
  "bg-pink-900": { backgroundColor: "#831843" },

  // Rose
  "bg-rose-50": { backgroundColor: "#FFF1F2" },
  "bg-rose-100": { backgroundColor: "#FFE4E6" },
  "bg-rose-200": { backgroundColor: "#FECDD3" },
  "bg-rose-300": { backgroundColor: "#FDA4AF" },
  "bg-rose-400": { backgroundColor: "#FB7185" },
  "bg-rose-500": { backgroundColor: "#F43F5E" },
  "bg-rose-600": { backgroundColor: "#E11D48" },
  "bg-rose-700": { backgroundColor: "#BE123C" },
  "bg-rose-800": { backgroundColor: "#9F1239" },
  "bg-rose-900": { backgroundColor: "#881337" },

  // ====================
  // TEXT COLORS - BASE
  // ====================

  "text-transparent": { color: "transparent" },
  "text-current": { color: "currentColor" },
  "text-inherit": { color: "inherit" },
  "text-white": { color: "#FFFFFF" },
  "text-black": { color: "#000000" },

  // ====================
  // TEXT COLORS - GRAY SCALE
  // ====================

  "text-gray-50": { color: "#F9FAFB" },
  "text-gray-100": { color: "#F3F4F6" },
  "text-gray-200": { color: "#E5E7EB" },
  "text-gray-300": { color: "#D1D5DB" },
  "text-gray-400": { color: "#9CA3AF" },
  "text-gray-500": { color: "#6B7280" },
  "text-gray-600": { color: "#4B5563" },
  "text-gray-700": { color: "#374151" },
  "text-gray-800": { color: "#1F2937" },
  "text-gray-900": { color: "#111827" },

  "text-neutral-50": { color: "#FAFAFA" },
  "text-neutral-100": { color: "#F5F5F5" },
  "text-neutral-200": { color: "#E5E5E5" },
  "text-neutral-300": { color: "#D4D4D4" },
  "text-neutral-400": { color: "#A3A3A3" },
  "text-neutral-500": { color: "#737373" },
  "text-neutral-600": { color: "#525252" },
  "text-neutral-700": { color: "#404040" },
  "text-neutral-800": { color: "#262626" },
  "text-neutral-900": { color: "#171717" },

  "text-slate-50": { color: "#F8FAFC" },
  "text-slate-100": { color: "#F1F5F9" },
  "text-slate-200": { color: "#E2E8F0" },
  "text-slate-300": { color: "#CBD5E1" },
  "text-slate-400": { color: "#94A3B8" },
  "text-slate-500": { color: "#64748B" },
  "text-slate-600": { color: "#475569" },
  "text-slate-700": { color: "#334155" },
  "text-slate-800": { color: "#1E293B" },
  "text-slate-900": { color: "#0F172A" },

  // ====================
  // TEXT COLORS - FULL PALETTE
  // ====================

  // Red
  "text-red-50": { color: "#FEF2F2" },
  "text-red-100": { color: "#FEE2E2" },
  "text-red-200": { color: "#FECACA" },
  "text-red-300": { color: "#FCA5A5" },
  "text-red-400": { color: "#F87171" },
  "text-red-500": { color: "#EF4444" },
  "text-red-600": { color: "#DC2626" },
  "text-red-700": { color: "#B91C1C" },
  "text-red-800": { color: "#991B1B" },
  "text-red-900": { color: "#7F1D1D" },

  // Orange
  "text-orange-50": { color: "#FFF7ED" },
  "text-orange-100": { color: "#FFEDD5" },
  "text-orange-200": { color: "#FED7AA" },
  "text-orange-300": { color: "#FDBA74" },
  "text-orange-400": { color: "#FB923C" },
  "text-orange-500": { color: "#F97316" },
  "text-orange-600": { color: "#EA580C" },
  "text-orange-700": { color: "#C2410C" },
  "text-orange-800": { color: "#9A3412" },
  "text-orange-900": { color: "#7C2D12" },

  // Amber
  "text-amber-50": { color: "#FFFBEB" },
  "text-amber-100": { color: "#FEF3C7" },
  "text-amber-200": { color: "#FDE68A" },
  "text-amber-300": { color: "#FCD34D" },
  "text-amber-400": { color: "#FBBF24" },
  "text-amber-500": { color: "#F59E0B" },
  "text-amber-600": { color: "#D97706" },
  "text-amber-700": { color: "#B45309" },
  "text-amber-800": { color: "#92400E" },
  "text-amber-900": { color: "#78350F" },

  // Yellow
  "text-yellow-50": { color: "#FEFCE8" },
  "text-yellow-100": { color: "#FEF3C7" },
  "text-yellow-200": { color: "#FDE68A" },
  "text-yellow-300": { color: "#FCD34D" },
  "text-yellow-400": { color: "#FBBF24" },
  "text-yellow-500": { color: "#F59E0B" },
  "text-yellow-600": { color: "#D97706" },
  "text-yellow-700": { color: "#B45309" },
  "text-yellow-800": { color: "#92400E" },
  "text-yellow-900": { color: "#78350F" },

  // Lime
  "text-lime-50": { color: "#F7FEE7" },
  "text-lime-100": { color: "#ECFCCB" },
  "text-lime-200": { color: "#D9F99D" },
  "text-lime-300": { color: "#BEF264" },
  "text-lime-400": { color: "#A3E635" },
  "text-lime-500": { color: "#84CC16" },
  "text-lime-600": { color: "#65A30D" },
  "text-lime-700": { color: "#4D7C0F" },
  "text-lime-800": { color: "#365314" },
  "text-lime-900": { color: "#1A2E05" },

  // Green
  "text-green-50": { color: "#F0FDF4" },
  "text-green-100": { color: "#DCFCE7" },
  "text-green-200": { color: "#BBF7D0" },
  "text-green-300": { color: "#86EFAC" },
  "text-green-400": { color: "#4ADE80" },
  "text-green-500": { color: "#22C55E" },
  "text-green-600": { color: "#16A34A" },
  "text-green-700": { color: "#15803D" },
  "text-green-800": { color: "#166534" },
  "text-green-900": { color: "#14532D" },

  // Emerald
  "text-emerald-50": { color: "#ECFDF5" },
  "text-emerald-100": { color: "#D1FAE5" },
  "text-emerald-200": { color: "#A7F3D0" },
  "text-emerald-300": { color: "#6EE7B7" },
  "text-emerald-400": { color: "#34D399" },
  "text-emerald-500": { color: "#10B981" },
  "text-emerald-600": { color: "#059669" },
  "text-emerald-700": { color: "#047857" },
  "text-emerald-800": { color: "#065F46" },
  "text-emerald-900": { color: "#064E3B" },

  // Teal
  "text-teal-50": { color: "#F0FDFA" },
  "text-teal-100": { color: "#CCFBF1" },
  "text-teal-200": { color: "#99F6E4" },
  "text-teal-300": { color: "#5EEAD4" },
  "text-teal-400": { color: "#2DD4BF" },
  "text-teal-500": { color: "#14B8A6" },
  "text-teal-600": { color: "#0D9488" },
  "text-teal-700": { color: "#0F766E" },
  "text-teal-800": { color: "#115E59" },
  "text-teal-900": { color: "#134E4A" },

  // Cyan
  "text-cyan-50": { color: "#ECFEFF" },
  "text-cyan-100": { color: "#CFFAFE" },
  "text-cyan-200": { color: "#A5F3FC" },
  "text-cyan-300": { color: "#67E8F9" },
  "text-cyan-400": { color: "#22D3EE" },
  "text-cyan-500": { color: "#06B6D4" },
  "text-cyan-600": { color: "#0891B2" },
  "text-cyan-700": { color: "#0E7490" },
  "text-cyan-800": { color: "#155E75" },
  "text-cyan-900": { color: "#164E63" },

  // Sky
  "text-sky-50": { color: "#F0F9FF" },
  "text-sky-100": { color: "#E0F2FE" },
  "text-sky-200": { color: "#BAE6FD" },
  "text-sky-300": { color: "#7DD3FC" },
  "text-sky-400": { color: "#38BDF8" },
  "text-sky-500": { color: "#0EA5E9" },
  "text-sky-600": { color: "#0284C7" },
  "text-sky-700": { color: "#0369A1" },
  "text-sky-800": { color: "#075985" },
  "text-sky-900": { color: "#0C4A6E" },

  // Blue
  "text-blue-50": { color: "#EFF6FF" },
  "text-blue-100": { color: "#DBEAFE" },
  "text-blue-200": { color: "#BFDBFE" },
  "text-blue-300": { color: "#93C5FD" },
  "text-blue-400": { color: "#60A5FA" },
  "text-blue-500": { color: "#3B82F6" },
  "text-blue-600": { color: "#2563EB" },
  "text-blue-700": { color: "#1D4ED8" },
  "text-blue-800": { color: "#1E40AF" },
  "text-blue-900": { color: "#1E3A8A" },

  // Indigo
  "text-indigo-50": { color: "#EEF2FF" },
  "text-indigo-100": { color: "#E0E7FF" },
  "text-indigo-200": { color: "#C7D2FE" },
  "text-indigo-300": { color: "#A5B4FC" },
  "text-indigo-400": { color: "#818CF8" },
  "text-indigo-500": { color: "#6366F1" },
  "text-indigo-600": { color: "#4F46E5" },
  "text-indigo-700": { color: "#4338CA" },
  "text-indigo-800": { color: "#3730A3" },
  "text-indigo-900": { color: "#312E81" },

  // Violet
  "text-violet-50": { color: "#F5F3FF" },
  "text-violet-100": { color: "#EDE9FE" },
  "text-violet-200": { color: "#DDD6FE" },
  "text-violet-300": { color: "#C4B5FD" },
  "text-violet-400": { color: "#A78BFA" },
  "text-violet-500": { color: "#8B5CF6" },
  "text-violet-600": { color: "#7C3AED" },
  "text-violet-700": { color: "#6D28D9" },
  "text-violet-800": { color: "#5B21B6" },
  "text-violet-900": { color: "#4C1D95" },

  // Purple
  "text-purple-50": { color: "#FAF5FF" },
  "text-purple-100": { color: "#F3E8FF" },
  "text-purple-200": { color: "#E9D5FF" },
  "text-purple-300": { color: "#D8B4FE" },
  "text-purple-400": { color: "#C084FC" },
  "text-purple-500": { color: "#A855F7" },
  "text-purple-600": { color: "#9333EA" },
  "text-purple-700": { color: "#7C3AED" },
  "text-purple-800": { color: "#6B21D6" },
  "text-purple-900": { color: "#581C87" },

  // Fuchsia
  "text-fuchsia-50": { color: "#FDF4FF" },
  "text-fuchsia-100": { color: "#FAE8FF" },
  "text-fuchsia-200": { color: "#F5D0FE" },
  "text-fuchsia-300": { color: "#F0ABFC" },
  "text-fuchsia-400": { color: "#E879F9" },
  "text-fuchsia-500": { color: "#D946EF" },
  "text-fuchsia-600": { color: "#C026D3" },
  "text-fuchsia-700": { color: "#A21CAF" },
  "text-fuchsia-800": { color: "#86198F" },
  "text-fuchsia-900": { color: "#701A75" },

  // Pink
  "text-pink-50": { color: "#FDF2F8" },
  "text-pink-100": { color: "#FCE7F3" },
  "text-pink-200": { color: "#FBCFE8" },
  "text-pink-300": { color: "#F9A8D4" },
  "text-pink-400": { color: "#F472B6" },
  "text-pink-500": { color: "#EC4899" },
  "text-pink-600": { color: "#DB2777" },
  "text-pink-700": { color: "#BE185D" },
  "text-pink-800": { color: "#9D174D" },
  "text-pink-900": { color: "#831843" },

  // Rose
  "text-rose-50": { color: "#FFF1F2" },
  "text-rose-100": { color: "#FFE4E6" },
  "text-rose-200": { color: "#FECDD3" },
  "text-rose-300": { color: "#FDA4AF" },
  "text-rose-400": { color: "#FB7185" },
  "text-rose-500": { color: "#F43F5E" },
  "text-rose-600": { color: "#E11D48" },
  "text-rose-700": { color: "#BE123C" },
  "text-rose-800": { color: "#9F1239" },
  "text-rose-900": { color: "#881337" },

  // ====================
  // OPACITY VARIANTS (SAMPLE)
  // ====================

  // Most commonly used opacity variants for primary colors
  "bg-black/5": { backgroundColor: "#0000000D" },
  "bg-black/10": { backgroundColor: "#0000001A" },
  "bg-black/20": { backgroundColor: "#00000033" },
  "bg-black/25": { backgroundColor: "#00000040" },
  "bg-black/30": { backgroundColor: "#0000004D" },
  "bg-black/40": { backgroundColor: "#00000066" },
  "bg-black/50": { backgroundColor: "#00000080" },
  "bg-black/60": { backgroundColor: "#00000099" },
  "bg-black/70": { backgroundColor: "#000000B3" },
  "bg-black/75": { backgroundColor: "#000000BF" },
  "bg-black/80": { backgroundColor: "#000000CC" },
  "bg-black/90": { backgroundColor: "#000000E6" },
  "bg-black/95": { backgroundColor: "#000000F2" },

  "bg-white/5": { backgroundColor: "#FFFFFF0D" },
  "bg-white/10": { backgroundColor: "#FFFFFF1A" },
  "bg-white/20": { backgroundColor: "#FFFFFF33" },
  "bg-white/25": { backgroundColor: "#FFFFFF40" },
  "bg-white/30": { backgroundColor: "#FFFFFF4D" },
  "bg-white/40": { backgroundColor: "#FFFFFF66" },
  "bg-white/50": { backgroundColor: "#FFFFFF80" },
  "bg-white/60": { backgroundColor: "#FFFFFF99" },
  "bg-white/70": { backgroundColor: "#FFFFFFB3" },
  "bg-white/75": { backgroundColor: "#FFFFFFBF" },
  "bg-white/80": { backgroundColor: "#FFFFFFCC" },
  "bg-white/90": { backgroundColor: "#FFFFFFE6" },
  "bg-white/95": { backgroundColor: "#FFFFFFF2" },

  // Primary color opacity variants (most commonly used)
  "bg-blue-500/10": { backgroundColor: "#3B82F61A" },
  "bg-blue-500/20": { backgroundColor: "#3B82F633" },
  "bg-blue-500/30": { backgroundColor: "#3B82F64D" },
  "bg-blue-500/50": { backgroundColor: "#3B82F680" },
  "bg-blue-500/70": { backgroundColor: "#3B82F6B3" },

  "bg-red-500/10": { backgroundColor: "#EF44441A" },
  "bg-red-500/20": { backgroundColor: "#EF444433" },
  "bg-red-500/30": { backgroundColor: "#EF44444D" },
  "bg-red-500/50": { backgroundColor: "#EF444480" },
  "bg-red-500/70": { backgroundColor: "#EF4444B3" },

  "bg-green-500/10": { backgroundColor: "#22C55E1A" },
  "bg-green-500/20": { backgroundColor: "#22C55E33" },
  "bg-green-500/30": { backgroundColor: "#22C55E4D" },
  "bg-green-500/50": { backgroundColor: "#22C55E80" },
  "bg-green-500/70": { backgroundColor: "#22C55EB3" },

  "bg-gray-500/10": { backgroundColor: "#6B72801A" },
  "bg-gray-500/20": { backgroundColor: "#6B728033" },
  "bg-gray-500/30": { backgroundColor: "#6B72804D" },
  "bg-gray-500/50": { backgroundColor: "#6B728080" },
  "bg-gray-500/70": { backgroundColor: "#6B7280B3" },

  // ====================
  // CAMELCASE VERSIONS (SAMPLE)
  // ====================

  // Base colors
  bgTransparent: { backgroundColor: "transparent" },
  bgWhite: { backgroundColor: "#FFFFFF" },
  bgBlack: { backgroundColor: "#000000" },

  // Gray scale (common variants)
  bgGray50: { backgroundColor: "#F9FAFB" },
  bgGray100: { backgroundColor: "#F3F4F6" },
  bgGray200: { backgroundColor: "#E5E7EB" },
  bgGray300: { backgroundColor: "#D1D5DB" },
  bgGray400: { backgroundColor: "#9CA3AF" },
  bgGray500: { backgroundColor: "#6B7280" },
  bgGray600: { backgroundColor: "#4B5563" },
  bgGray700: { backgroundColor: "#374151" },
  bgGray800: { backgroundColor: "#1F2937" },
  bgGray900: { backgroundColor: "#111827" },

  // Primary colors (most commonly used)
  bgRed50: { backgroundColor: "#FEF2F2" },
  bgRed100: { backgroundColor: "#FEE2E2" },
  bgRed500: { backgroundColor: "#EF4444" },
  bgRed600: { backgroundColor: "#DC2626" },

  bgOrange50: { backgroundColor: "#FFF7ED" },
  bgOrange100: { backgroundColor: "#FFEDD5" },
  bgOrange500: { backgroundColor: "#F97316" },
  bgOrange600: { backgroundColor: "#EA580C" },

  bgYellow50: { backgroundColor: "#FEFCE8" },
  bgYellow100: { backgroundColor: "#FEF3C7" },
  bgYellow500: { backgroundColor: "#F59E0B" },
  bgYellow600: { backgroundColor: "#D97706" },

  bgGreen50: { backgroundColor: "#F0FDF4" },
  bgGreen100: { backgroundColor: "#DCFCE7" },
  bgGreen500: { backgroundColor: "#22C55E" },
  bgGreen600: { backgroundColor: "#16A34A" },

  bgBlue50: { backgroundColor: "#EFF6FF" },
  bgBlue100: { backgroundColor: "#DBEAFE" },
  bgBlue500: { backgroundColor: "#3B82F6" },
  bgBlue600: { backgroundColor: "#2563EB" },

  bgIndigo50: { backgroundColor: "#EEF2FF" },
  bgIndigo100: { backgroundColor: "#E0E7FF" },
  bgIndigo500: { backgroundColor: "#6366F1" },
  bgIndigo600: { backgroundColor: "#4F46E5" },

  bgPurple50: { backgroundColor: "#FAF5FF" },
  bgPurple100: { backgroundColor: "#F3E8FF" },
  bgPurple500: { backgroundColor: "#A855F7" },
  bgPurple600: { backgroundColor: "#9333EA" },

  bgPink50: { backgroundColor: "#FDF2F8" },
  bgPink100: { backgroundColor: "#FCE7F3" },
  bgPink500: { backgroundColor: "#EC4899" },
  bgPink600: { backgroundColor: "#DB2777" },

  // Text colors (common variants)
  textTransparent: { color: "transparent" },
  textWhite: { color: "#FFFFFF" },
  textBlack: { color: "#000000" },

  textGray50: { color: "#F9FAFB" },
  textGray100: { color: "#F3F4F6" },
  textGray200: { color: "#E5E7EB" },
  textGray300: { color: "#D1D5DB" },
  textGray400: { color: "#9CA3AF" },
  textGray500: { color: "#6B7280" },
  textGray600: { color: "#4B5563" },
  textGray700: { color: "#374151" },
  textGray800: { color: "#1F2937" },
  textGray900: { color: "#111827" },

  textRed500: { color: "#EF4444" },
  textRed600: { color: "#DC2626" },
  textOrange500: { color: "#F97316" },
  textOrange600: { color: "#EA580C" },
  textYellow500: { color: "#F59E0B" },
  textYellow600: { color: "#D97706" },
  textGreen500: { color: "#22C55E" },
  textGreen600: { color: "#16A34A" },
  textBlue500: { color: "#3B82F6" },
  textBlue600: { color: "#2563EB" },
  textIndigo500: { color: "#6366F1" },
  textIndigo600: { color: "#4F46E5" },
  textPurple500: { color: "#A855F7" },
  textPurple600: { color: "#9333EA" },
  textPink500: { color: "#EC4899" },
  textPink600: { color: "#DB2777" },
});
