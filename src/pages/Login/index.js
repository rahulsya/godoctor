import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'
import {Button, Gap, Input,Link} from '../../components/atoms'

export default function Login() {
    return (
        <View style={styles.page}>
                <ILLogo/>
                <Text style={styles.title}>Masuk dan mulai konsultasi</Text>
            <View>
                <Input label="Email Address"/>
                <Gap height={24}/>
                <Input label="Password"/>
                <Gap height={10}/>
                <Link title="Forgot My Password" size={12}/>
                <Gap height={40}/>
            </View>
            <View>
                <Button title="Sign In" type="primary"/>
                <Gap height={30}/>
                <Link title="Create New Account" size={16} align="center"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page:{
        padding:40,
        flex:1,
        justifyContent:'space-between'
    },
    title:{
        fontFamily:'Nonito-SemiBold',
        fontSize:20,
        maxWidth:153,
        color:'#112340',
        marginBottom:40,
        marginTop:40
    }
})
