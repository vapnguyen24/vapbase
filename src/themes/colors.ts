export const colors = {
  white: '#FAFAFA',
  white1: '#FCFCFC',
  black: '#0A0A0B',
  black1: '#292929',
  black_shadow: '#000000',
  primary: '#1CB0F6',
  primary300: '#8ED8FB',
  secondary: '#AAB9C5',
  success: '#A4F4E7',
  warning: '#F4C790',
  error: '#E4626F',
  neutral100: '#E8E8E8',
  gray: '#8A8A8A',
} as const;

export type Colors = (typeof colors)[keyof typeof colors];
