export const fontFamily = {
  bold: 'Inter-Bold',
  regular: 'Inter-Regular',
  medium: 'Inter-Medium',
  semiBold: 'Inter-SemiBold',
} as const;

export type FontFamily = keyof typeof fontFamily;
