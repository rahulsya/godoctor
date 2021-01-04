import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { NewsItem1 } from '../../../assets'
import { colors, fonts } from '../../../utils'

export default function NewsItem() {
    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>Is it safe to stay at home during coronavirus?</Text>
                <Text style={styles.date}>Today</Text>
            </View>
            <Image source={NewsItem1} style={styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:colors.borderColor,
        paddingBottom:12,
        paddingTop:16,
        paddingHorizontal:16
    },
    titleWrapper:{
        flex:1
    },
    title:{
        fontFamily:fonts.primary[600],
        color:colors.text.default,
        fontSize:16,
        maxWidth:'90%'
    },
    date:{
        fontFamily:fonts.primary[400],
        color:colors.text.secondary,
        fontSize:12
    },
    image:{
        width:80,
        height:60,
        borderRadius:11
    }
})
