export const fontSize = {
  xxs: 12,
  xs: 14,
  base: 16,
  s: 18,
  sm: 20,
  md: 24,
  lg: 28,
  xl: 32,
  xxl: 40,
  xxxl: 44,
} as const;

export type FontSize = keyof typeof fontSize;
