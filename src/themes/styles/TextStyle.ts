import { fontFamily } from '@themes/fonts';
import { fontSize } from '@themes/fontSize';
import { normalize } from '@themes/normalize';
import { StyleSheet } from 'react-native';

export const TextStyle = StyleSheet.create({
  font_medium: {
    fontFamily: fontFamily.medium,
  },
  font_bold: {
    fontFamily: fontFamily.bold,
  },
  font_regular: {
    fontFamily: fontFamily.regular,
  },
  font_semibold: {
    fontFamily: fontFamily.semiBold,
  },
  italic: {
    fontStyle: 'italic',
  },
  normal: {
    fontStyle: 'normal',
  },
  text_auto: {
    textAlign: 'auto',
  },
  text_left: {
    textAlign: 'left',
  },
  text_center: {
    textAlign: 'center',
  },
  text_right: {
    textAlign: 'right',
  },
  text_justify: {
    textAlign: 'justify',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  line_through: {
    textDecorationLine: 'line-through',
  },
  no_underline: {
    textDecorationLine: 'none',
  },
  decoration_solid: {
    textDecorationStyle: 'solid',
  },
  decoration_double: {
    textDecorationStyle: 'double',
  },
  decoration_dotted: {
    textDecorationStyle: 'dotted',
  },
  decoration_dashed: {
    textDecorationStyle: 'dashed',
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  lowercase: {
    textTransform: 'lowercase',
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  normal_case: {
    textTransform: 'none',
  },
  text_regular_12: {
    fontSize: normalize.m(fontSize.xxs),
    fontFamily: fontFamily.regular,
  },
  text_regular_14: {
    fontSize: normalize.m(fontSize.xs),
    fontFamily: fontFamily.regular,
  },
  text_regular_16: {
    fontSize: normalize.m(fontSize.base),
    fontFamily: fontFamily.regular,
  },
  text_regular_18: {
    fontSize: normalize.m(fontSize.s),
    fontFamily: fontFamily.regular,
  },
  text_regular_20: {
    fontSize: normalize.m(fontSize.sm),
    fontFamily: fontFamily.regular,
  },
  text_regular_24: {
    fontSize: normalize.m(fontSize.md),
    fontFamily: fontFamily.regular,
  },
  text_regular_28: {
    fontSize: normalize.m(fontSize.lg),
    fontFamily: fontFamily.regular,
  },
  text_regular_32: {
    fontSize: normalize.m(fontSize.xl),
    fontFamily: fontFamily.regular,
  },
  text_regular_40: {
    fontSize: normalize.m(fontSize.xxl),
    fontFamily: fontFamily.regular,
  },
  text_regular_44: {
    fontSize: normalize.m(fontSize.xxxl),
    fontFamily: fontFamily.regular,
  },
  text_medium_12: {
    fontSize: normalize.m(fontSize.xxs),
    fontFamily: fontFamily.medium,
  },
  text_medium_14: {
    fontSize: normalize.m(fontSize.xs),
    fontFamily: fontFamily.medium,
  },
  text_medium_16: {
    fontSize: normalize.m(fontSize.base),
    fontFamily: fontFamily.medium,
  },
  text_medium_18: {
    fontSize: normalize.m(fontSize.s),
    fontFamily: fontFamily.medium,
  },
  text_medium_20: {
    fontSize: normalize.m(fontSize.sm),
    fontFamily: fontFamily.medium,
  },
  text_medium_24: {
    fontSize: normalize.m(fontSize.md),
    fontFamily: fontFamily.medium,
  },
  text_medium_28: {
    fontSize: normalize.m(fontSize.lg),
    fontFamily: fontFamily.medium,
  },
  text_medium_32: {
    fontSize: normalize.m(fontSize.xl),
    fontFamily: fontFamily.medium,
  },
  text_medium_40: {
    fontSize: normalize.m(fontSize.xxl),
    fontFamily: fontFamily.medium,
  },
  text_medium_44: {
    fontSize: normalize.m(fontSize.xxxl),
    fontFamily: fontFamily.medium,
  },
  text_bold_12: {
    fontSize: normalize.m(fontSize.xxs),
    fontFamily: fontFamily.bold,
  },
  text_bold_14: {
    fontSize: normalize.m(fontSize.xs),
    fontFamily: fontFamily.bold,
  },
  text_bold_16: {
    fontSize: normalize.m(fontSize.base),
    fontFamily: fontFamily.bold,
  },
  text_bold_18: {
    fontSize: normalize.m(fontSize.s),
    fontFamily: fontFamily.bold,
  },
  text_bold_20: {
    fontSize: normalize.m(fontSize.sm),
    fontFamily: fontFamily.bold,
  },
  text_bold_24: {
    fontSize: normalize.m(fontSize.md),
    fontFamily: fontFamily.bold,
  },
  text_bold_28: {
    fontSize: normalize.m(fontSize.lg),
    fontFamily: fontFamily.bold,
  },
  text_bold_32: {
    fontSize: normalize.m(fontSize.xl),
    fontFamily: fontFamily.bold,
  },
  text_bold_40: {
    fontSize: normalize.m(fontSize.xxl),
    fontFamily: fontFamily.bold,
  },
  text_bold_44: {
    fontSize: normalize.m(fontSize.xxxl),
    fontFamily: fontFamily.bold,
  },
  text_semibold_12: {
    fontSize: normalize.m(fontSize.xxs),
    fontFamily: fontFamily.semiBold,
  },
  text_semibold_14: {
    fontSize: normalize.m(fontSize.xs),
    fontFamily: fontFamily.semiBold,
  },
  text_semibold_16: {
    fontSize: normalize.m(fontSize.base),
    fontFamily: fontFamily.semiBold,
  },
  text_semibold_18: {
    fontSize: normalize.m(fontSize.s),
    fontFamily: fontFamily.semiBold,
  },
  text_semibold_20: {
    fontSize: normalize.m(fontSize.sm),
    fontFamily: fontFamily.semiBold,
  },
  text_semibold_24: {
    fontSize: normalize.m(fontSize.md),
    fontFamily: fontFamily.semiBold,
  },
  text_semibold_28: {
    fontSize: normalize.m(fontSize.lg),
    fontFamily: fontFamily.semiBold,
  },
  text_semibold_32: {
    fontSize: normalize.m(fontSize.xl),
    fontFamily: fontFamily.semiBold,
  },
  text_semibold_40: {
    fontSize: normalize.m(fontSize.xxl),
    fontFamily: fontFamily.semiBold,
  },
  text_semibold_44: {
    fontSize: normalize.m(fontSize.xxxl),
    fontFamily: fontFamily.semiBold,
  },
  text_12: {
    fontSize: normalize.m(fontSize.xxs),
  },
  text_14: {
    fontSize: normalize.m(fontSize.xs),
  },
  text_16: {
    fontSize: normalize.m(fontSize.base),
  },
  text_18: {
    fontSize: normalize.m(fontSize.s),
  },
  text_20: {
    fontSize: normalize.m(fontSize.sm),
  },
  text_24: {
    fontSize: normalize.m(fontSize.md),
  },
  text_28: {
    fontSize: normalize.m(fontSize.lg),
  },
  text_32: {
    fontSize: normalize.m(fontSize.xl),
  },
  text_40: {
    fontSize: normalize.m(fontSize.xxl),
  },
  text_44: {
    fontSize: normalize.m(fontSize.xxxl),
  },
});
