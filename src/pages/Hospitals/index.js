import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { Hospital, Hospital1, Hospital2, ILBGHospital } from '../../assets'
import { ListHospital } from '../../components'
import { colors, fonts } from '../../utils'

export default function Hospitals() {
    return (
        <View style={styles.page}>
            <ImageBackground source={ILBGHospital} style={styles.background}>
            <Text style={styles.title}>Nearby Hospitals</Text>
            <Text style={styles.desc}>3 Tersedia</Text>
            </ImageBackground>
            <View style={styles.content}>
                <ListHospital type="Rumah sakit" name="Citra merdeka" address="Jln. surya sejahtera 20" pic={Hospital}/>
                <ListHospital type="Rumah sakit Anak" name="Citra merdeka" address="Jln. surya sejahtera 20" pic={Hospital1}/>
                <ListHospital type="Rumah sakit" name="Citra merdeka" address="Jln. surya sejahtera 20" pic={Hospital2}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page:{
        backgroundColor:colors.dark,
        flex:1
    },
    content:{
        flex:1,
        backgroundColor:colors.white,
        borderRadius:20,
        marginTop:-30,
    },
    background:{
        height:240,
        paddingTop:30
    },
    title:{
        textAlign:'center',
        fontSize:20,
        fontFamily:fonts.primary[600],
        color:colors.white
    },
    desc:{
        textAlign:'center',
        fontSize:14,
        fontFamily:fonts.primary[400],
        color:colors.white
    }
})
