import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import FlashMessage from 'react-native-flash-message';
// import { GetStarted } from './pages'
import Router from './router';

export default function App() {
  return (
    // <Splash/>
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
    </>
  );
}
// alt+shift+o
const styles = StyleSheet.create({});
