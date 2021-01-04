import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyDoctor, ICStar } from '../../../assets'
import { colors, fonts } from '../../../utils'

export default function RatedDoctor() {
    return (
        <View style={styles.container}>
            <Image source={DummyDoctor} style={styles.avatar}/>
            <View style={styles.profile}>
                <Text style={styles.name}>Alexa Rachel</Text>
                <Text style={styles.category}>Pediatrician</Text>
            </View>
            <View style={styles.rate}>
                <ICStar/>
                <ICStar/>
                <ICStar/>
                <ICStar/>
                <ICStar/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingBottom:16
    },
    profile:{
        flex:1,
    },
    avatar:{
        width:50,
        height:50,
        borderRadius:50/2,
        marginRight:12
    },
    rate:{
        flexDirection:'row'
    },
    name:{
        fontFamily:fonts.primary[600],
        fontSize:16,
        color:colors.text.default
    },
    category:{
        fontFamily:fonts.primary[400],
        fontSize:12,
        color:colors.text.secondary
    }
})
