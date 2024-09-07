import { StyleSheet } from 'react-native';

export const ImageStyle = StyleSheet.create({
  cover: {
    resizeMode: 'cover',
  },
  contain: {
    resizeMode: 'contain',
  },
  stretch: {
    resizeMode: 'stretch',
  },
  repeat: {
    resizeMode: 'repeat',
  },
  center: {
    resizeMode: 'center',
  },
  object_cover: {
    objectFit: 'cover',
  },
  object_contain: {
    objectFit: 'contain',
  },
  object_fill: {
    objectFit: 'fill',
  },
  object_scale_down: {
    objectFit: 'scale-down',
  },
  cursor_pointer: {
    cursor: 'pointer',
  },
  cursor_auto: {
    cursor: 'auto',
  },
});
