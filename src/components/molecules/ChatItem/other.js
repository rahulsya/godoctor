import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyDoctor4} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function other() {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor4} style={styles.image} />
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.text}>
            Ibu dokter, apakah memakan jeruk tiap hari itu buruk?
          </Text>
        </View>
        <Text style={styles.date}>4.20 AM</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingLeft: 16,
    flexDirection: 'row',
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
  },
  chatContent: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.text.menuActive,
    maxWidth: '80%',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  text: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.white,
  },
  date: {
    marginTop: 8,
    fontFamily: fonts.primary[600],
    fontSize: 11,
    color: colors.text.secondary,
  },
});
