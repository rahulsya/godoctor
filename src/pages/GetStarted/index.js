import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import {ILGetStarted, ILLogo } from '../../assets'
import { Button, Gap } from '../../components'


export default function GetStarted({navigation}) {
    return (
        <ImageBackground source={ILGetStarted} style={styles.page}>
            <View>
                <ILLogo/>
                <Text style={styles.title}>Konsultasi dengan dokter jadi lebih mudah & fleksibel</Text>
            </View>
            <View>
                <Button type="primary" title="Get Started" onPress={()=>navigation.navigate('Register')}/>
                {/* <View style={{height:16}}/> */}
                <Gap height={16}/>
                <Button type="secondary" title="Sign In" onPress={()=>navigation.navigate('Login')}/>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    page:{
        padding:40,
        flex:1,
        justifyContent:'space-between'
    },
    title:{
        color:'white',
        marginTop:91,
        fontSize:28,
        fontWeight:'600',
        fontFamily:'Nunito-SemiBold'
    }
})
