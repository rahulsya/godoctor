import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { fonts } from '../../../utils'
import { colors } from '../../../utils/colors'
import { Button, Gap } from '../../atoms'

export default function Header({onPress,title}) {
    return (
        <View style={styles.container}>
            {/* <IconBackDark/> */}
            <Button type="icon-only" icon="back-dark" onPress={onPress}/>
            <Text style={styles.text}>{title}</Text>
            <Gap width={24}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:16,
        paddingVertical:30,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:colors.white,
    },
    text:{
        fontFamily: fonts.primary[600],
        fontSize:20,
        color:colors.text.default,
        flex:1,
        textAlign:'center',
    }
})
