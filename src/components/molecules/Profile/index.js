import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {color} from 'react-native-reanimated';
import {ICBtnRemove, User} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function Profile({name, desc, isRemove, photo}) {
  return (
    <View style={styles.container}>
      <View style={styles.borderAvatar}>
        <Image source={photo} style={styles.avatar} />
        {isRemove && <ICBtnRemove style={styles.icon} />}
      </View>
      {name && (
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.desc}>{desc}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderAvatar: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderRadius: 130 / 2,
    borderColor: colors.borderColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  icon: {
    position: 'absolute',
    bottom: 1,
    right: 1,
  },
  name: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.default,
  },
  desc: {
    textAlign: 'center',
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.secondary,
  },
});
