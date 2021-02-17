import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {ILLogo} from '../../assets';
import {Fire} from '../../config';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      Fire.auth().onAuthStateChanged((user) => {
        if (user) {
          navigation.replace('MainApp');
        } else {
          navigation.replace('GetStarted');
        }
      });
    }, 3000);
  }, []);

  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>My Doctor</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: '600',
    color: '#112340',
    fontSize: 20,
    marginTop: 20,
  },
});
