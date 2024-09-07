import { normalize, styles } from "@themes";
import {
  ForwardedRef,
  forwardRef,
  LegacyRef,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  DimensionValue,
  ImageStyle,
  StyleProp,
  StyleSheet,
  View,
} from "react-native";
import { Image as RNImage, ImageProps as RNImageProps } from "expo-image";

interface ImageProps
  extends Omit<
    RNImageProps,
    | "height"
    | "width"
    | "borderRadius"
    | "borderBottomLeftRadius"
    | "borderBottomRightRadius"
    | "borderTopLeftRadius"
    | "borderTopRightRadius"
  > {
  width?: number | DimensionValue;
  height?: number | DimensionValue;
  square?: number;
  borderRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
}

export const Image = ({
  style,
  width,
  height,
  borderRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  square,
  placeholder,
  placeholderContentFit,
  ...props
}: ImageProps) => {
  const imageRef = useRef<any>();

  const [error, setError] = useState(false);

  const imageWidth = useMemo(
    () => (typeof width === "string" ? width : normalize.s(width as number)),
    [width]
  );
  const imageHeight = useMemo(
    () => (typeof height === "string" ? height : normalize.v(height as number)),
    [height]
  );

  const boxWidth = useMemo(
    () => imageHeight || normalize.s(square as number),
    [imageHeight, square]
  );
  const boxHeight = useMemo(
    () => imageWidth || normalize.s(square as number),
    [imageWidth, square]
  );

  const imageStyles = [
    styles.overflow_hidden,
    width && {
      width: imageWidth,
    },
    height && {
      height: imageHeight,
    },
    square && { width: normalize.s(square), height: normalize.s(square) },
    borderRadius && { borderRadius },
    borderBottomLeftRadius && { borderBottomLeftRadius },
    borderBottomRightRadius && { borderBottomRightRadius },
    borderTopLeftRadius && { borderTopLeftRadius },
    borderTopRightRadius && { borderTopRightRadius },
    style && { ...StyleSheet.flatten(style) },
  ] as StyleProp<ImageStyle>;

  return (
    <View
      style={[
        {
          height: boxHeight,
          width: boxWidth,
        },
      ]}
    >
      {!error && (
        <RNImage
          style={imageStyles}
          ref={imageRef}
          {...props}
          onError={() => {
            setError(true);
          }}
          placeholder={placeholder ?? require("@assets/images/loading.gif")}
          placeholderContentFit={placeholderContentFit}
        />
      )}
      {error && (
        <RNImage
          style={imageStyles}
          source={require("@assets/images/not-found.jpg")}
        />
      )}
    </View>
  );
};
