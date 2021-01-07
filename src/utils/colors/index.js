const mainColors={
    dark:'#112340',
    dark2:'#495A75',
    gray:'#7D8797',
    gray2:'#E9E9E9',
    blue:'#0BCAD4',
    red:'#E06379',
    green:'#EDFCFD'
    // white:'white'
}

export const colors={
    primary:'blue',
    secondary:'white',
    white:'white',
    black:'black',
    dark:mainColors.dark,
    text:{
        default:mainColors.dark,
        secondary:mainColors.gray,
        menuActive:mainColors.blue,
        menuInActive:mainColors.dark2,
    },
    button:{
        primary:{
            background:mainColors.blue,
            text:'white'
        },
        secondary:{
            background:'white',
            text:mainColors.dark
        }
    },
    borderColor:mainColors.gray2,
    cardLight:mainColors.green
}
