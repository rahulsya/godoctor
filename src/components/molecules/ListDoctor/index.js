import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyDoctor } from '../../../assets'
import { colors, fonts } from '../../../utils'

export default function ListDoctor() {
    return (
        <View style={styles.page}>
            <Image style={styles.image} source={DummyDoctor}/>
            <View>
            <Text style={styles.title}>Alexander Jannie</Text>
            <Text style={styles.desc}>Baik ibu, terima kasih banyak atas wakt...</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page:{
        flexDirection:'row',
        borderBottomColor:colors.borderColor,
        borderBottomWidth:1,
        padding:16,
        alignItems:'center'
    },
    image:{
        width:46,
        height:46,
        borderRadius:46/2,
        marginRight:12,
    },
    title:{
        fontSize:16,
        fontFamily:fonts.primary[400],
        color:colors.text.default
    },
    desc:{
        fontSize:12,
        fontFamily:fonts.primary[300],
        color:colors.text.secondary
    }
})
