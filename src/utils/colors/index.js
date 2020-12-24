const mainColors={
    dark:'#112340',
    gray:'#7D8797',
    gray2:'#E9E9E9',
    blue:'#0BCAD4',
    red:'#E06379',
    // white:'white'
}

export const colors={
    primary:'blue',
    secondary:'white',
    white:'white',
    black:'black',
    text:{
        default:mainColors.dark,
        secondary:mainColors.gray,
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
    borderColor:mainColors.gray2
}
