import { Block } from '@components/base/Block';
import { Text } from '@components/base/Text';
import { Colors, colors, FontType, styles } from '@themes';
import {
  Switch as RNSwitch,
  SwitchProps as RNSwitchProps,
  StyleProp,
  ViewStyle,
} from 'react-native';

interface SwitchProps extends RNSwitchProps {
  label?: string;
  labelType?: FontType;
  labelColor?: Colors;
  labelStyle?: StyleProp<ViewStyle>;
}

export const Switch = ({
  thumbColor = colors.white,
  trackColor = { false: colors.gray, true: colors.primary },
  label,
  labelType = 'medium14',
  labelColor = colors.black,
  labelStyle,
  ...props
}: SwitchProps) => {
  if (!label) {
    return (
      <RNSwitch thumbColor={thumbColor} trackColor={trackColor} {...props} />
    );
  }

  return (
    <Block
      style={[
        styles.w_full,
        styles.row,
        styles.items_center,
        styles.justify_between,
      ]}>
      <Text type={labelType} color={labelColor} style={labelStyle}>
        {label}
      </Text>
      <RNSwitch thumbColor={thumbColor} trackColor={trackColor} {...props} />
    </Block>
  );
};
