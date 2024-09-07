import { normalize } from '@themes/normalize';
import { spacing } from '@themes/spacing';
import { HEIGHT_SCREEN, WIDTH_SCREEN } from '@utils';
import { StyleSheet } from 'react-native';

export const SizeStyle = StyleSheet.create({
  w_2: {
    width: normalize.s(spacing.xxxs),
  },
  w_4: {
    width: normalize.s(spacing.xxs),
  },
  w_6: {
    width: normalize.s(spacing.xs),
  },
  w_8: {
    width: normalize.s(spacing.s),
  },
  w_12: {
    width: normalize.s(spacing.sm),
  },
  w_14: {
    width: normalize.s(spacing.md),
  },
  w_16: {
    width: normalize.s(spacing.base),
  },
  w_20: {
    width: normalize.s(spacing.ml),
  },
  w_24: {
    width: normalize.s(spacing.lg),
  },
  w_32: {
    width: normalize.s(spacing.xl),
  },
  w_40: {
    width: normalize.s(spacing.xxl),
  },
  w_48: {
    width: normalize.s(spacing.xxxl),
  },
  w_64: {
    width: normalize.s(spacing.huge),
  },
  w_72: {
    width: normalize.s(72),
  },
  w_80: {
    width: normalize.s(80),
  },
  w_96: {
    width: normalize.s(96),
  },
  w_128: {
    width: normalize.s(128),
  },
  w_160: {
    width: normalize.s(160),
  },
  w_192: {
    width: normalize.s(192),
  },
  w_256: {
    width: normalize.s(256),
  },
  w_320: {
    width: normalize.s(320),
  },
  h_2: {
    height: normalize.v(spacing.xxxs),
  },
  h_4: {
    height: normalize.v(spacing.xxs),
  },
  h_6: {
    height: normalize.v(spacing.xs),
  },
  h_8: {
    height: normalize.v(spacing.s),
  },
  h_12: {
    height: normalize.v(spacing.sm),
  },
  h_14: {
    height: normalize.v(spacing.md),
  },
  h_16: {
    height: normalize.v(spacing.base),
  },
  h_20: {
    height: normalize.v(spacing.ml),
  },
  h_24: {
    height: normalize.v(spacing.lg),
  },
  h_32: {
    height: normalize.v(spacing.xl),
  },
  h_40: {
    height: normalize.v(spacing.xxl),
  },
  h_48: {
    height: normalize.v(spacing.xxxl),
  },
  h_64: {
    height: normalize.v(spacing.huge),
  },
  h_72: {
    height: normalize.v(72),
  },
  h_80: {
    height: normalize.v(80),
  },
  h_96: {
    height: normalize.v(96),
  },
  h_128: {
    height: normalize.v(128),
  },
  h_160: {
    height: normalize.v(160),
  },
  h_192: {
    height: normalize.v(192),
  },
  h_256: {
    height: normalize.v(256),
  },
  h_320: {
    height: normalize.v(320),
  },
  square_2: {
    width: normalize.s(spacing.xxxs),
    height: normalize.s(spacing.xxxs),
  },
  square_4: {
    width: normalize.s(spacing.xxs),
    height: normalize.s(spacing.xxs),
  },
  square_6: {
    width: normalize.s(spacing.xs),
    height: normalize.s(spacing.xs),
  },
  square_8: {
    width: normalize.s(spacing.s),
    height: normalize.s(spacing.s),
  },
  square_12: {
    width: normalize.s(spacing.sm),
    height: normalize.s(spacing.sm),
  },
  square_14: {
    width: normalize.s(spacing.md),
    height: normalize.s(spacing.md),
  },
  square_16: {
    width: normalize.s(spacing.base),
    height: normalize.s(spacing.base),
  },
  square_20: {
    width: normalize.s(spacing.ml),
    height: normalize.s(spacing.ml),
  },
  square_24: {
    width: normalize.s(spacing.lg),
    height: normalize.s(spacing.lg),
  },
  square_32: {
    width: normalize.s(spacing.xl),
    height: normalize.s(spacing.xl),
  },
  square_40: {
    width: normalize.s(spacing.xxl),
    height: normalize.s(spacing.xxl),
  },
  square_48: {
    width: normalize.s(spacing.xxxl),
    height: normalize.s(spacing.xxxl),
  },
  square_64: {
    width: normalize.s(spacing.huge),
    height: normalize.s(spacing.huge),
  },
  square_72: {
    width: normalize.s(72),
    height: normalize.s(72),
  },
  square_80: {
    width: normalize.s(80),
    height: normalize.s(80),
  },
  square_96: {
    width: normalize.s(96),
    height: normalize.s(96),
  },
  square_128: {
    width: normalize.s(128),
    height: normalize.s(128),
  },
  square_160: {
    width: normalize.s(160),
    height: normalize.s(160),
  },
  square_192: {
    width: normalize.s(192),
    height: normalize.s(192),
  },
  square_256: {
    width: normalize.s(256),
    height: normalize.s(256),
  },
  square_320: {
    width: normalize.s(320),
    height: normalize.s(320),
  },
  min_w_2: {
    minWidth: normalize.s(spacing.xxxs),
  },
  min_w_4: {
    minWidth: normalize.s(spacing.xxs),
  },
  min_w_6: {
    minWidth: normalize.s(spacing.xs),
  },
  min_w_8: {
    minWidth: normalize.s(spacing.s),
  },
  min_w_12: {
    minWidth: normalize.s(spacing.sm),
  },
  min_w_14: {
    minWidth: normalize.s(spacing.md),
  },
  min_w_16: {
    minWidth: normalize.s(spacing.base),
  },
  min_w_20: {
    minWidth: normalize.s(spacing.ml),
  },
  min_w_24: {
    minWidth: normalize.s(spacing.lg),
  },
  min_w_32: {
    minWidth: normalize.s(spacing.xl),
  },
  min_w_40: {
    minWidth: normalize.s(spacing.xxl),
  },
  min_w_48: {
    minWidth: normalize.s(spacing.xxxl),
  },
  min_w_64: {
    minWidth: normalize.s(spacing.huge),
  },
  min_h_2: {
    minHeight: normalize.v(spacing.xxxs),
  },
  min_h_4: {
    minHeight: normalize.v(spacing.xxs),
  },
  min_h_6: {
    minHeight: normalize.v(spacing.xs),
  },
  min_h_8: {
    minHeight: normalize.v(spacing.s),
  },
  min_h_12: {
    minHeight: normalize.v(spacing.sm),
  },
  min_h_14: {
    minHeight: normalize.v(spacing.md),
  },
  min_h_16: {
    minHeight: normalize.v(spacing.base),
  },
  min_h_20: {
    minHeight: normalize.v(spacing.ml),
  },
  min_h_24: {
    minHeight: normalize.v(spacing.lg),
  },
  min_h_32: {
    minHeight: normalize.v(spacing.xl),
  },
  min_h_40: {
    minHeight: normalize.v(spacing.xxl),
  },
  min_h_48: {
    minHeight: normalize.v(spacing.xxxl),
  },
  min_h_64: {
    minHeight: normalize.v(spacing.huge),
  },
  max_w_2: {
    maxWidth: normalize.s(spacing.xxxs),
  },
  max_w_4: {
    maxWidth: normalize.s(spacing.xxs),
  },
  max_w_6: {
    maxWidth: normalize.s(spacing.xs),
  },
  max_w_8: {
    maxWidth: normalize.s(spacing.s),
  },
  max_w_12: {
    maxWidth: normalize.s(spacing.sm),
  },
  max_w_14: {
    maxWidth: normalize.s(spacing.md),
  },
  max_w_16: {
    maxWidth: normalize.s(spacing.base),
  },
  max_w_20: {
    maxWidth: normalize.s(spacing.ml),
  },
  max_w_24: {
    maxWidth: normalize.s(spacing.lg),
  },
  max_w_32: {
    maxWidth: normalize.s(spacing.xl),
  },
  max_w_40: {
    maxWidth: normalize.s(spacing.xxl),
  },
  max_w_48: {
    maxWidth: normalize.s(spacing.xxxl),
  },
  max_w_64: {
    maxWidth: normalize.s(spacing.huge),
  },
  max_h_2: {
    maxHeight: normalize.v(spacing.xxxs),
  },
  max_h_4: {
    maxHeight: normalize.v(spacing.xxs),
  },
  max_h_6: {
    maxHeight: normalize.v(spacing.xs),
  },
  max_h_8: {
    maxHeight: normalize.v(spacing.s),
  },
  max_h_12: {
    maxHeight: normalize.v(spacing.sm),
  },
  max_h_14: {
    maxHeight: normalize.v(spacing.md),
  },
  max_h_16: {
    maxHeight: normalize.v(spacing.base),
  },
  max_h_20: {
    maxHeight: normalize.v(spacing.ml),
  },
  max_h_24: {
    maxHeight: normalize.v(spacing.lg),
  },
  max_h_32: {
    maxHeight: normalize.v(spacing.xl),
  },
  max_h_40: {
    maxHeight: normalize.v(spacing.xxl),
  },
  max_h_48: {
    maxHeight: normalize.v(spacing.xxxl),
  },
  max_h_64: {
    maxHeight: normalize.v(spacing.huge),
  },
  min_w_full: {
    minWidth: '100%',
  },
  min_h_full: {
    minHeight: '100%',
  },
  max_w_full: {
    maxWidth: '100%',
  },
  max_h_full: {
    maxHeight: '100%',
  },
  w_full: {
    width: '100%',
  },
  h_full: {
    height: '100%',
  },
  w_screen: {
    width: WIDTH_SCREEN,
  },
  h_screen: {
    height: HEIGHT_SCREEN,
  },
  w_auto: {
    width: 'auto',
  },
  h_auto: {
    height: 'auto',
  },
});
