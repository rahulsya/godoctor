import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

export default function Loading() {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size="large" color={colors.primary} />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: colors.loading,
  },
  text: {
    color: colors.primary,
    marginTop: 5,
    fontSize: 18,
    fontFamily: fonts.primary[600],
  },
});
