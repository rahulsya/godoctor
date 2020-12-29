import React from 'react'
import { StyleSheet, Text, View ,TextInput} from 'react-native'
import { fonts } from '../../../utils'
import { colors } from '../../../utils/colors'

export default function Input({label}) {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input}/>
        </View>
    )
}

const styles = StyleSheet.create({
    label:{
        marginBottom:6,
        fontSize:16,
        fontFamily:fonts.primary.normal,
        color: colors.text.secondary
    },
    input:{
        padding:12,
        borderRadius:10,
        borderWidth:1,
        borderColor:colors.borderColor
    }
})
