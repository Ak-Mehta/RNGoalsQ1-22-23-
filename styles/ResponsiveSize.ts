import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

const ResponsiveSize = (size: number) => {
  return RFValue(size);
  //   return RFPercentage(size);
};

export default ResponsiveSize;
