import {createTheme, AllProps as RSAllProps} from '@shopify/restyle';
import ResponsiveSize from './ResponsiveSize';

const palette = {
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  lightGreen: '#aee35f',
  greenPrimary: '#0ECD9D',
  green: '#90ce19',
  darkGreen: '#02af1e',
  verifiedGreen: '#51AD2A',
  textInputBorderColor: '#e0e1ed',
  black: '#14142B',
  zBlack: '#000000',
  white: '#FFFFFF',
  LightWhite: '#F8F8F8',

  yellowPrimary: '#fffb2a',
  darkYellow: '#FED330',
  yellowBgColor: 'rgba(254, 211, 48, 0.04)',

  aliceBlue: '#F4F6F8',

  primarygrey: '#C4C4C4',
  lighterGrey: '#eaeaea',

  blue: '#1389D9',
  lightBlue: '#E2E8FF',
  darkBlue: '#0683DD',

  red: '#cf3232',
  lightRed: '#ffcccb',
  errorRed: '#FF6B69',
  darkRed: '#EB3B5A',
  redBgColor: 'rgba(255, 71, 87, 0.1)',

  primaryBlack: '#4E4B66',
  blackText: '#141414',
  lightBlack: '#191F290F',
  headerBlack: '#191632',
  titleBalck: '#242E42',
  subTitleBlack: '#070417',
  greyColor: '#EBEBEB',
  subTitleLightBlack: '#60070417',

  transparent: 'transparent',
  transparentBlack: 'rgba(0,0,0,0.2)',
  boxBorderColor: 'rgba(25, 22, 50, 0.12)',

  normalText: '#141414',
  cancelBtnBg: '#a1a1a1',
  plusButton: '#fb81fd',
  warning: '#FFCC00',
  darkWarning: '#F29F05',
  bgColor: '#F8EEE1',
  borderColor: '#D9DBE9',
};

const theme = createTheme({
  colors: {
    primary: palette.darkYellow,
    yellowBgColor: palette.yellowBgColor,
    lightPrimary: palette.yellowPrimary,
    disableColor: palette.greyColor,
    lightBlack: palette.lightBlack,
    titleBalck: palette.titleBalck,
    subTitleBlack: palette.subTitleBlack,
    transparentBlack: palette.transparentBlack,
    darkBlue: palette.darkBlue,
    mainBackground: palette.white,
    lightBackground: palette.white,
    bluishBackground: palette.lighterGrey,
    cardPrimaryBackground: palette.purplePrimary,
    borderColorTextInput: palette.textInputBorderColor,
    boxBorderColor: palette.boxBorderColor,
    textInputBackground: palette.LightWhite,
    aliceBlue: palette.aliceBlue,
    error: palette.red,
    transparent: palette.transparent,
    whiteText: palette.white,
    primaryBlack: palette.primaryBlack,
    darkText: palette.blackText,
    chipBackground: palette.lighterGrey,
    success: palette.green,
    normalText: palette.normalText,
    black: palette.black,
    subTitleLightBlack: palette.subTitleLightBlack,
    cancelBtnBg: palette.cancelBtnBg,
    plusButton: palette.plusButton,
    currency: palette.darkGreen,
    zBlack: palette.zBlack,
    blue: palette.blue,
    warning: palette.warning,
    darkWarning: palette.darkWarning,
    greenPrimary: palette.greenPrimary,
    lightGreen: palette.lightGreen,
    lightRed: palette.lightRed,
    headerBlack: palette.headerBlack,
    primarygrey: palette.primarygrey,
    errorRed: palette.errorRed,
    bgColor: palette.bgColor,
    verifiedGreen: palette.verifiedGreen,
    darkRed: palette.darkRed,
    redBgColor: palette.redBgColor,
    borderColor: palette.borderColor,
  },

  spacing: {
    '-xs': -4,
    '-s': -8,
    '-sl': -10,
    '-xm': -12,
    '-m': -16,
    '-ml': -18,
    '-l': -24,
    '-xl': -30,
    '-xxl': -40,
    '-xxxl': -50,
    '-mxxxl': -55,
    xxxs: 0,
    xs: ResponsiveSize(4),
    s: ResponsiveSize(8),
    xm: ResponsiveSize(12),
    m: ResponsiveSize(16),
    mll: ResponsiveSize(20),
    l: ResponsiveSize(24),
    xl: ResponsiveSize(30),
    phoneInputPadding: 100,
  },

  breakpoints: {
    phone: 0,
    tablet: 768,
  },

  textInputVariants: {
    error: {
      borderColor: 'error',
    },
  },

  textVariants: {
    headline: {
      fontSize: 18,
    },
    title: {
      fontSize: 15,
    },
    subTitle: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    body: {
      fontSize: 14,
    },
  },

  buttonVariants: {
    secondary: {
      width: '100%',
      height: ResponsiveSize(58),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: ResponsiveSize(15),
      backgroundColor: 'whiteText',
      borderWidth: 1,
      borderColor: 'primary',
    },
    primary: {
      width: '100%',
      height: ResponsiveSize(58),
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: ResponsiveSize(15),
      borderWidth: ResponsiveSize(1),
      backgroundColor: 'primary',
    },
  },

  buttonTextVariants: {
    primary: {
      color: 'black',
    },
    secondary: {
      color: 'black',
    },
  },

  selectBoxVariants: {
    selected: {
      borderColor: 'primary',
      backgroundColor: 'lightPrimary',
    },
    nonSelected: {
      borderColor: 'textInputBorderColor',
    },
    error: {
      borderColor: 'error',
    },
  },

  cardVariants: {
    low: {
      overflow: 'visible',
      shadowColor: 'zBlack',
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      shadowOffset: {width: 0, height: 1},
      elevation: 3,
    },
    medium: {
      overflow: 'visible',
      shadowColor: 'zBlack',
      shadowOpacity: 0.3,
      shadowRadius: 3.84,
      shadowOffset: {width: 0, height: 2},
      elevation: 5,
    },
    high: {
      overflow: 'visible',
      shadowColor: 'zBlack',
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      shadowOffset: {width: 0, height: 3},
      elevation: 7,
    },
  },
});

export type Theme = typeof theme;
export default theme;
