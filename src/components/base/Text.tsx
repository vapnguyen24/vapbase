import { colors, Colors, fontType, FontType } from "@themes";
import { ForwardedRef, forwardRef } from "react";
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
} from "react-native";

interface TextProps extends RNTextProps {
  color?: Colors;
  type: FontType;
}

export const Text = forwardRef(
  (
    { color = colors.black, type, style, ...props }: TextProps,
    ref: ForwardedRef<RNText>
  ) => {
    return (
      <RNText
        ref={ref}
        {...props}
        style={[
          color && { color },
          type && fontType[type],
          style && { ...StyleSheet.flatten(style) },
        ]}
      />
    );
  }
);
