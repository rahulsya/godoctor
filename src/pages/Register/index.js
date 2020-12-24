import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header, Input } from '../../components'
import { colors } from '../../utils/colors'

export default function Register({navigation}) {
    return (
        <View style={styles.container}> 
            <Header onPress={()=>navigation.goBack()} title="Daftar Akun"/>
            <View style={styles.content}>
                <Input label="Full Name"/>
                <Gap height={24}/>
                <Input label="Pekerjaan"/>
                <Gap height={24}/>
                <Input label="Email Address"/>
                <Gap height={24}/>
                <Input label="Password"/>
                <Gap height={40}/>
                <Button title="Continue" type="primary"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content:{
        backgroundColor:'white',
        padding:40,
        paddingTop:0,
        // justifyContent:'space-between'
    },
    container:{
        backgroundColor:colors.white,
        flex:1,
    }
})
