import { Text } from "@components/base/Text";
import { colors, Colors, normalize, styles } from "@themes";
import { ForwardedRef, forwardRef, ReactNode } from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  loading?: boolean;
  type?: keyof typeof $typeStyles;
  justifyContent?: keyof typeof $justifyContentStyles;
  size: keyof typeof $sizeStyles;
  backgroundColor?: Colors;
  tintColor?: Colors;
  disabledBackgroundColor?: Colors;
  disabledTintColor?: Colors;
  title: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Button = forwardRef(
  (
    {
      style,
      activeOpacity = 0.8,
      size = "md",
      type = "primary",
      justifyContent = "center",
      disabled,
      backgroundColor,
      tintColor = colors.white,
      disabledBackgroundColor = colors.primary300,
      disabledTintColor = colors.white,
      leftIcon,
      rightIcon,
      loading,
      title = "",
      ...props
    }: ButtonProps,
    ref: ForwardedRef<TouchableOpacity>
  ) => {
    const buttonStyles: StyleProp<ViewStyle> = [
      styles.row,
      styles.items_center,
      styles.gap_12,
      styles.p_x_12,
      justifyContent && $justifyContentStyles[justifyContent],
      type && !disabled
        ? $typeStyles[type]
        : { backgroundColor: disabledBackgroundColor },
      backgroundColor && {
        backgroundColor:
          !disabled && !type ? backgroundColor : disabledBackgroundColor,
      },
      size && $sizeStyles[size],
      style && { ...StyleSheet.flatten(style) },
    ];

    const textStyles = [
      styles.font_semibold,
      size && $sizeTextStyles[size],
      tintColor && { color: disabled ? disabledTintColor : tintColor },
    ];

    return (
      <TouchableOpacity
        ref={ref}
        {...props}
        style={buttonStyles}
        activeOpacity={activeOpacity}
        disabled={disabled || loading}
      >
        {leftIcon}
        <Text type="semibold14" style={textStyles}>
          {loading ? "Đang xử lý. . ." : title}
        </Text>
        {rightIcon}
      </TouchableOpacity>
    );
  }
);

const $sizeStyles = {
  sm: { height: normalize.v(36), borderRadius: 8 } satisfies ViewStyle,
  md: { height: normalize.v(40), borderRadius: 8 } satisfies ViewStyle,
  lg: { height: normalize.v(44), borderRadius: 12 } satisfies ViewStyle,
  xl: { height: normalize.v(50), borderRadius: 12 } satisfies ViewStyle,
};

const $sizeTextStyles = {
  sm: styles.text_12,
  md: styles.text_14,
  lg: styles.text_14,
  xl: styles.text_16,
};

const $typeStyles = {
  primary: styles.bg_primary,
  secondary: styles.bg_secondary,
  danger: styles.bg_danger,
  disabled: styles.bg_disabled,
  primaryBlur: styles.bg_primaryBlur,
};

const $justifyContentStyles = {
  center: styles.justify_center,
  "space-between": styles.justify_between,
  "space-around": styles.justify_around,
};
