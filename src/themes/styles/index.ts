import { BoderStyle } from '@themes/styles/BorderStyle';
import { ColorsStyle } from '@themes/styles/ColorsStyle';
import { EffectStyle } from '@themes/styles/EffectStyle';
import { FLexStyle } from '@themes/styles/FlexStyle';
import { GapStyle } from '@themes/styles/GapStyle';
import { ImageStyle } from '@themes/styles/ImageStyle';
import { LayoutStyle } from '@themes/styles/LayoutStyle';
import { MarginStyle } from '@themes/styles/MarginStyle';
import { PaddingStyle } from '@themes/styles/PaddingStyle';
import { SizeStyle } from '@themes/styles/SizeStyle';
import { TextStyle } from '@themes/styles/TextStyle';
import { StyleSheet } from 'react-native';

export * from './BorderStyle';
export * from './ColorsStyle';
export * from './EffectStyle';
export * from './FlexStyle';
export * from './GapStyle';
export * from './ImageStyle';
export * from './LayoutStyle';
export * from './MarginStyle';
export * from './PaddingStyle';
export * from './SizeStyle';
export * from './TextStyle';

export const styles = StyleSheet.create({
  ...FLexStyle,
  ...BoderStyle,
  ...GapStyle,
  ...SizeStyle,
  ...PaddingStyle,
  ...MarginStyle,
  ...TextStyle,
  ...ImageStyle,
  ...LayoutStyle,
  ...EffectStyle,
  ...ColorsStyle,

  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
