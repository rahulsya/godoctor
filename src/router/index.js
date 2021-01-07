import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { GetStarted, Register, Splash,Login,UploadPhoto,Doctor,Hospitals,Messages } from '../pages'
import { BottomNavigator } from '../components'

const Stack=createStackNavigator()
const Tab=createBottomTabNavigator()

const MainApp=()=>{
    return(
        <Tab.Navigator tabBar={props=><BottomNavigator {...props}/>}>
            <Tab.Screen name="Doctor" component={Doctor} />
            <Tab.Screen name="Messages" component={Messages} />
            <Tab.Screen name="Hospitals" component={Hospitals}/>
        </Tab.Navigator>
    )
}

const Router=()=>{
    return(
        <Stack.Navigator initialRouteName="MainApp">
            <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
            <Stack.Screen name="GetStarted" component={GetStarted} options={{headerShown:false}}/>
            <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
            <Stack.Screen name="UploadPhoto" component={UploadPhoto} options={{headerShown:false}}/>
            <Stack.Screen name="MainApp" component={MainApp} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}

export default Router