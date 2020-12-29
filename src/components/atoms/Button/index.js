import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { fonts } from '../../../utils'
import { colors } from '../../../utils/colors'
import IconOnly from './IconOnly'

export default function Button({type,title,onPress,icon}) {
    if (type==='icon-only') {
        return (
            <IconOnly icon={icon} onPress={onPress}/>
        )
    }
    return (
        <TouchableOpacity style={styles.container(type)} onPress={onPress}>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:(type)=>({
        backgroundColor: type==='secondary' ? colors.button.secondary.background :colors.button.primary.background,
        borderRadius:10,
        paddingVertical:10
    }),text:(type)=>({
        color:type==='secondary' ? colors.button.secondary.text : colors.button.primary.text,
        fontSize:18,
        textAlign:'center',
        fontFamily: fonts.primary[600]
    })
})
