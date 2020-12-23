import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { StyleSheet } from 'react-native'
// import { GetStarted } from './pages'
import Router from './router'

export default function App() {
  return (
    // <Splash/>
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  )
}
// alt+shift+o
const styles = StyleSheet.create({

})
