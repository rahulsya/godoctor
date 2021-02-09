const mainColors = {
  dark: '#112340',
  dark2: '#495A75',
  gray: '#7D8797',
  gray2: '#E9E9E9',
  gray3: '#EDEEF0',
  blue: '#0BCAD4',
  blue2: '#0066CB',
  blueLight: '#EDFCFD',
  red: '#E06379',
  green: '#EDFCFD',
  // white:'white'
};

export const colors = {
  primary: 'blue',
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
  },
  blueLight: mainColors.blueLight,
  borderColor: mainColors.gray2,
  cardLight: mainColors.green,
  inputTextGray: mainColors.gray3,
  btnBlue: mainColors.blue2,
};
