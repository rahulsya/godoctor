import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILFour, ILOne, ILThree, ILTwo } from '../../../assets'
import { colors, fonts } from '../../../utils'

export default function DoctorCategory({category}) {
    const Icon=()=>{
        if (category==="dokter umum") {
            return <ILOne style={styles.illustration}/>
        }
        if (category==='psikiater') {
            return <ILTwo style={styles.illustration}/>
        }
        if (category==='dokter obat') {
            return <ILThree style={styles.illustration}/>
        }
        if (category==='dokter anak') {
            return <ILFour style={styles.illustration}/>
        }
        return <ILOne style={styles.illustration}/>
    }
    return (
        <View style={styles.page}>
            <Icon/>
            <Text style={styles.label}>Saya Butuh</Text>
            <Text style={styles.category}>{category}</Text>
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
