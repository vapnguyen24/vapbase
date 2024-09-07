import { Colors } from "@themes";
import { ForwardedRef, forwardRef } from "react";
import {
  TouchableOpacity as RNTouchableOpacity,
  TouchableOpacityProps as RNTouchableOpacityProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";

interface TouchableOpacityProps extends RNTouchableOpacityProps {
  backgroundColor?: Colors;
}

export const TouchableOpacity = forwardRef(
  (
    {
      backgroundColor,
      style,
      activeOpacity = 0.8,
      ...props
    }: TouchableOpacityProps,
    ref: ForwardedRef<RNTouchableOpacity>
  ) => {
    const buttonStyles: StyleProp<ViewStyle> = [
      backgroundColor && { backgroundColor },
      style && { ...StyleSheet.flatten(style) },
    ];

    return (
      <RNTouchableOpacity
        ref={ref}
        {...props}
        style={buttonStyles}
        activeOpacity={activeOpacity}
      />
    );
  }
);
