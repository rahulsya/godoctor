import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Button({type,title,onPress}) {
    return (
        <TouchableOpacity style={styles.container(type)} onPress={onPress}>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:(type)=>({
        backgroundColor: type==='secondary' ? 'white' :'#0BCAD4',
        borderRadius:10,
        paddingVertical:10
    }),text:(type)=>({
        color:type==='secondary' ? '#112340' : 'white',
        fontWeight:'600',
        fontSize:18,
        textAlign:'center',
        fontFamily:'Nunito-SemiBold'
    })
})
