import { colors } from '@themes/colors';
import { StyleSheet } from 'react-native';

export const ColorsStyle = StyleSheet.create({
  bg_primary: {
    backgroundColor: colors.primary,
  },
  bg_secondary: {
    backgroundColor: colors.secondary,
  },
  bg_danger: {
    backgroundColor: colors.error,
  },
  bg_disabled: {
    backgroundColor: colors.neutral100,
  },
  bg_primaryBlur: {
    backgroundColor: colors.primary300,
  },

  // Text colors
  text_white: {
    color: colors.white,
  },
  text_primary: {
    color: colors.primary,
  },
  text_secondary: {
    color: colors.secondary,
  },
  text_danger: {
    color: colors.error,
  },
  text_disabled: {
    color: colors.neutral100,
  },
  text_primaryBlur: {
    color: colors.primary300,
  },
  text_gray: {
    color: colors.gray,
  },
  text_black: {
    color: colors.black,
  },
  text_black1: {
    color: colors.black1,
  },
});
