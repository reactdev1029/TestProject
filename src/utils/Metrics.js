import { Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');

const metrics = {
  screenWidth: width,
  screenHeight: height,
  navBarHeight: Platform.OS === 'ios' ? 64 : 54,
  scaleWidth: width / 375,
  scaleHeight: height / 812,
};

export default metrics;
