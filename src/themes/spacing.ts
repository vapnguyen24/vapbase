/**
  Use these spacings for margins/paddings and other whitespace throughout your app.
 */
export const spacing = {
  xxxs: 2,
  xxs: 4,
  xs: 6,
  s: 8,
  sm: 12,
  md: 14,
  base: 16,
  ml: 20,
  lg: 24,
  xl: 32,
  xxl: 40,
  xxxl: 48,
  huge: 64,
} as const;

export type Spacing = keyof typeof spacing;
