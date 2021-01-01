import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { ICBtnPlus, ILNullPhoto } from '../../assets'
import { Button, Gap, Header, Link } from '../../components'
import { colors, fonts } from '../../utils'

export default function UploadPhoto({navigation}) {
    return (
        <View style={styles.page}>
            <Header title="Upload Photo" onPress={()=>navigation.goBack()}/>
            <View style={styles.content}>
                <View style={styles.profile}>
                    <View style={styles.avatarWrapper}>
                        <Image style={styles.avatar} source={ILNullPhoto}/>
                        <ICBtnPlus style={styles.addPhoto}/>
                    </View>
                    <Text style={styles.name}>Shayna Melinda</Text>
                    <Text style={styles.profession}>Product Designer</Text>
                </View>
                <View>
                    <Button title="Upload and Continue"/>
                    <Gap height={30}/>
                    <Link title="Skip For This" size={16} align="center"/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:'white'
    },
    content:{
        paddingHorizontal:40,
        paddingBottom:64,
        flex:1,
        justifyContent:'space-between'
    },
    profile:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    avatarWrapper:{
        width:130,
        height:130,
        borderColor:colors.borderColor,
        borderWidth:1,
        borderRadius:130/2,
        alignItems:'center',
        justifyContent:'center'
        
    },
    avatar:{
        width:110,
        height:110,
    },
    addPhoto:{
        position:'absolute',
        bottom:8,
        right:6
    },
    name:{
        fontSize:24,
        fontFamily:fonts.primary[600],
        textAlign:'center'
    },
    profession:{
        fontSize:18,
        fontFamily:fonts.primary.normal,
        textAlign:'center',
        color:colors.text.secondary
    }
})
