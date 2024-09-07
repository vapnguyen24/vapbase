import { colors, Colors, styles } from '@themes';
import { ReactNode, useMemo } from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';

interface ContainerProps {
  children?: ReactNode;
  backgroundColor?: Colors;
  style?: StyleProp<ViewStyle>;
  edges?: Edge[];
}

export const Container = ({
  children,
  backgroundColor = colors.white,
  style,
  edges,
}: ContainerProps) => {
  const containerStyles = useMemo(
    () => [
      styles.flex,
      backgroundColor && { backgroundColor },
      style && { ...StyleSheet.flatten(style) },
    ],
    [backgroundColor, style],
  );

  return (
    <SafeAreaView
      edges={edges ?? ['left', 'right', 'top', 'bottom']}
      style={containerStyles}>
      {children}
    </SafeAreaView>
  );
};
