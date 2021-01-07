import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'

export default function ListHospital({type,name,address,pic}) {
    return (
        <View style={styles.container}>
            <Image source={pic} style={styles.image}/>
            <View style={styles.content}>
                <Text style={styles.title}>{type}</Text>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.desc}>{address}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        borderColor:colors.borderColor,
        borderBottomWidth:1,
        padding:16
    },
    image:{
        width:80,
        height:60,
        borderRadius:10,
        marginRight:16,
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
