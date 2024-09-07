import { Block } from '@components/base/Block';
import { Text } from '@components/base/Text';
import { Colors, colors, FontType, styles } from '@themes';
import { ReactNode, useState } from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

interface TextInputProps extends RNTextInputProps {
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  labelType?: FontType;
  labelColor?: Colors;

  error?: string;
  errorStyle?: StyleProp<TextStyle>;
  errorType?: FontType;
  errorColor?: Colors;

  inputContainerStyle?: StyleProp<ViewStyle>;
  inputContainerBorderColor?: Colors;
  inputContainerBackgroundColor?: Colors;
  inputContainerAlignItems?: keyof typeof $alignItemsStyles;

  leftIcon?: ReactNode;
  onLeftIconPress?: () => void;
  rightIcon?: ReactNode;
  rightIconType?: 'default' | 'custom' | 'none';
  onRightIconPress?: () => void;

  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  inputStyle?: StyleProp<TextStyle>;
}

export const TextInput = ({
  label,
  labelStyle,
  labelType = 'medium14',
  labelColor = colors.black1,

  error,
  errorStyle,
  errorType = 'medium14',
  errorColor = colors.error,

  inputContainerStyle,
  inputContainerBorderColor = colors.neutral100,
  inputContainerBackgroundColor = colors.white1,
  inputContainerAlignItems = 'center',

  leftIcon,
  onLeftIconPress,
  rightIcon,
  rightIconType = 'default',
  onRightIconPress,

  value,
  onChangeText,
  secureTextEntry,
  inputStyle,

  ...props
}: TextInputProps) => {
  const [isSecureTextEntry, setSecureTextEntry] = useState(
    secureTextEntry || false,
  );

  const inputContainerStyles = [
    styles.row,
    styles.w_full,
    styles.gap_16,
    styles.p_x_16,
    styles.border_1,
    styles.rounded_12,
    styles.h_40,
    inputContainerAlignItems && $alignItemsStyles[inputContainerAlignItems],
    inputContainerStyle,
  ];

  const inputStyles = [
    styles.flex,
    styles.text_medium_14,
    styles.text_black1,
    inputStyle,
  ];

  const _renderLeftIcon = () => {
    if (!leftIcon) {
      return null;
    }

    return <Pressable onPress={onLeftIconPress}>{leftIcon}</Pressable>;
  };

  const _renderRightIcon = () => {
    if (isSecureTextEntry && value) {
      return (
        <Pressable onPress={() => setSecureTextEntry(!isSecureTextEntry)}>
          <Block
            backgroundColor={secureTextEntry ? colors.primary : colors.error}
            style={[styles.square_16, styles.rounded_full]}
          />
        </Pressable>
      );
    }

    switch (rightIconType) {
      case 'default':
        if (!value) {
          return null;
        }
        return (
          <Pressable onPress={() => onChangeText('')}>
            <Block
              backgroundColor={colors.primary}
              style={[styles.square_16, styles.rounded_full]}
            />
          </Pressable>
        );
      case 'custom':
        return <Pressable onPress={onRightIconPress}>{rightIcon}</Pressable>;
      default:
        return null;
    }
  };

  const _renderLabel = () => {
    if (!label) {
      return null;
    }

    return (
      <Text type={labelType} color={labelColor} style={labelStyle}>
        {label}
      </Text>
    );
  };

  const _renderError = () => {
    if (!error) {
      return null;
    }

    return (
      <Text type={errorType} color={errorColor} style={errorStyle}>
        {error}
      </Text>
    );
  };

  const _renderInput = () => {
    return (
      <Block
        style={inputContainerStyles}
        borderColor={inputContainerBorderColor}
        backgroundColor={inputContainerBackgroundColor}>
        {_renderLeftIcon()}
        <RNTextInput
          style={inputStyles}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isSecureTextEntry}
          placeholderTextColor={colors.gray}
          {...props}
        />
        {_renderRightIcon()}
      </Block>
    );
  };

  return (
    <Block style={styles.gap_8}>
      {_renderLabel()}
      {_renderInput()}
      {_renderError()}
    </Block>
  );
};

const $alignItemsStyles = {
  center: styles.items_center,
  flexStart: styles.items_start,
  flexEnd: styles.items_end,
};
