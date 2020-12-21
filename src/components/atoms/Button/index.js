import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Button({type,title}) {
    return (
        <View style={styles.container(type)}>
            <Text style={styles.text(type)}>{title}</Text>
        </View>
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
        fontSize:16,
        textAlign:'center'
    })
})
