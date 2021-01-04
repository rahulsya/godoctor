import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { User } from '../../../assets'
import { colors, fonts } from '../../../utils'

export default function HomeProfile() {
    return (
        <View style={styles.page}>
            <Image source={User} style={styles.avatar}/>
            <View>
                <Text style={styles.name}>Shayna Melinda</Text>
                <Text style={styles.profession}>Product Designer</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page:{
        flexDirection:'row',
    },
    avatar:{
        width:46,
        height:46,
        borderRadius:46/2,
        marginRight:12
    },
    name:{
        fontSize:16,
        fontFamily:fonts.primary[600]
        ,color:colors.text.default
    },
    profession:{
        fontSize:14,
        fontFamily:fonts.primary[400]
        ,color:colors.text.default
    }
})
