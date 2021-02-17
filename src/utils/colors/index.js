const mainColors = {
  dark: '#112340',
  dark2: '#495A75',
  gray: '#7D8797',
  gray2: '#E9E9E9',
  gray3: '#EDEEF0',
  gray4: '#B1B7C2',
  blue: '#0BCAD4',
  blue2: '#0066CB',
  blueLight: '#EDFCFD',
  red: '#E06379',
  green: '#EDFCFD',
  black: '#000000',
  black2: 'rgba(0,0,0,0.5)',
  red1: '#E06379',
  // white:'white'
};

export const colors = {
  primary: mainColors.blue,
  secondary: 'white',
  white: 'white',
  black: 'black',
  teriary: mainColors.blue2,
  dark: mainColors.dark,
  text: {
    default: mainColors.dark,
    secondary: mainColors.gray,
    menuActive: mainColors.blue,
    menuInActive: mainColors.dark2,
  },
  button: {
    primary: {
      background: mainColors.blue,
      text: 'white',
    },
    secondary: {
      background: 'white',
      text: mainColors.dark,
    },
    disable: {
      background: mainColors.gray3,
      text: mainColors.gray4,
    },
  },
  blueLight: mainColors.blueLight,
  borderColor: mainColors.gray2,
  cardLight: mainColors.green,
  inputTextGray: mainColors.gray3,
  btnBlue: mainColors.blue2,
  loading: mainColors.black2,
  error: mainColors.red1,
};
