import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyDoctor4} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';

export default function DarkProfile({onPress}) {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-light" onPress={onPress} />
      <View style={styles.content}>
        <Text style={styles.name}>Nairobi Putri Hayza</Text>
        <Text style={styles.type}>Dokter Anak</Text>
      </View>
      <Image style={styles.avatar} source={DummyDoctor4} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark,
    paddingVertical: 30,
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  content: {
    flex: 1,
  },
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.white,
    textAlign: 'center',
  },
  type: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.text.secondary,
    textAlign: 'center',
  },
  avatar: {
    borderRadius: 46 / 2,
    width: 46,
    height: 46,
  },
});
