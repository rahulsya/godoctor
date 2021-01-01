import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ICDoctor, ICDoctorActive, ICHospital, ICHospitalActive, ICMessages, ICMessagesActive } from '../../../assets'
import { colors, fonts } from '../../../utils'

export default function TabItem({title,active,onPress,onLongPress}) {

    const Icon=()=>{
        if(title==='Doctor'){
            return active ? <ICDoctorActive/> : <ICDoctor/>
        }
        if(title==='Hospitals'){
            return active ? <ICHospitalActive/> : <ICHospital/>
        }
        if(title==='Messages'){
            return active ? <ICMessagesActive/> : <ICMessages/>
        }
        return <ICDoctor/>
    }
    
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Icon/>
            <Text style={styles.text(active)}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center'
    },
    text:active=>({
        fontSize:10,
        fontFamily:fonts.primary[600],
        color:active ? colors.text.menuActive : colors.text.menuInActive
    })
})
