import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILOne } from '../../../assets'
import { colors, fonts } from '../../../utils'

export default function DoctorCategory() {
    return (
        <View style={styles.page}>
            <ILOne style={styles.illustration}/>
            <Text style={styles.label}>Saya Butuh</Text>
            <Text style={styles.category}>dokter umum</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    page:{
        padding:12,
        backgroundColor:colors.cardLight,
        alignSelf:'flex-start',
        borderRadius:10,
        marginRight:10,
        height:130,
        width:100
    },
    illustration:{
        marginBottom:28
    },
    label:{
        fontSize:12,
        fontFamily:fonts.primary[300],
        color:colors.text.default
    },
    category:{
        fontSize:12,
        fontFamily:fonts.primary[600],
        color:colors.text.default
    }
})
