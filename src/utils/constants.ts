import { Dimensions } from 'react-native';

const WIDTH_SCREEN = Dimensions.get('window').width;
const HEIGHT_SCREEN = Dimensions.get('window').height;
const IS_SMALL_DEVICE = HEIGHT_SCREEN < 700;

export { HEIGHT_SCREEN, IS_SMALL_DEVICE, WIDTH_SCREEN };
