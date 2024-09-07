import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

//Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = (size: number) => (shortDimension / guidelineBaseWidth) * size;

const verticalScale = (size: number) =>
  (longDimension / guidelineBaseHeight) * size;

const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

/**
 * normalize.m(10) Responsive for padding - margin - fontSize.
 *
 * normalize.s(10) Responsive by width screen. (Image Size)
 *
 * normalize.v(10) Responsive by height screen.
 **/

export const normalize = {
  m: moderateScale,
  s: scale,
  v: verticalScale,
};
