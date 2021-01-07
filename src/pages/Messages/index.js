import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DummyDoctor, DummyDoctor1, DummyDoctor2 } from '../../assets'
import { ListDoctor } from '../../components'
import { colors, fonts } from '../../utils'

export default function Messages() {

    const [doctors]=useState([
        {
            id:1,
            name:'Alexander Jannie',
            desc:'Baik ibu, terima kasih banyak atas wakt...',
            profile:DummyDoctor1
        },
        {
            id:2,
            name:'Nairobi Putri Hayza',
            desc:'Oh tentu saja tidak karena jeruk it...',
            profile:DummyDoctor
            
        },
        {
            id:3,
            name:'John McParker Steve',
            desc:'Oke menurut pak dokter bagaimana unt...',
            profile:DummyDoctor2
        }
    ])
    
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Messages</Text>
                {doctors.map((doctor)=>{
                    return (
                        <ListDoctor key={doctor.id} name={doctor.name} desc={doctor.desc} profile={doctor.profile}/>
                    )
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.dark,
        
    },
    content:{
        flex:1,
        backgroundColor:colors.white,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    },
    title:{
        fontSize:20,
        fontFamily:fonts.primary[600],
        marginTop:30,
        marginBottom:16,
        marginLeft:16,
        color:colors.text.default
    }
})
