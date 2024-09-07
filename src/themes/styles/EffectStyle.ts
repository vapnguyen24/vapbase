import { colors } from '@themes/colors';
import { StyleSheet } from 'react-native';

export const EffectStyle = StyleSheet.create({
  opacity_0: {
    opacity: 0,
  },
  opacity_25: {
    opacity: 0.25,
  },
  opacity_50: {
    opacity: 0.5,
  },
  opacity_75: {
    opacity: 0.75,
  },
  opacity_100: {
    opacity: 1,
  },
  shadow_sm: {
    shadowColor: colors.black_shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  shadow: {
    shadowColor: colors.black_shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  shadow_md: {
    shadowColor: colors.black_shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  shadow_lg: {
    shadowColor: colors.black_shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },
});
