import { Colors } from "@themes";
import { ForwardedRef, forwardRef } from "react";
import { StyleSheet, View, ViewProps } from "react-native";

interface BlockProps extends ViewProps {
  backgroundColor?: Colors;
  borderColor?: Colors;
}

export const Block = forwardRef(
  (
    { backgroundColor, borderColor, style, ...props }: BlockProps,
    ref: ForwardedRef<View>
  ) => {
    const styles = [
      !!backgroundColor && { backgroundColor },
      !!borderColor && { borderColor },
      style && { ...StyleSheet.flatten(style) },
    ];

    return <View ref={ref} {...props} style={styles} />;
  }
);
