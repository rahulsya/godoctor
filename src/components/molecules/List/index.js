import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  ICNext,
  IconEditProfile,
  IconHelp,
  Iconlanguage,
  IconRate,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function List({name, desc, profile, type, onPress, icon}) {
  const Icon = () => {
    if (icon === 'edit-profile') {
      return <IconEditProfile />;
    }
    if (icon === 'language') {
      return <Iconlanguage />;
    }
    if (icon === 'rate') {
      return <IconRate />;
    }
    if (icon === 'help') {
      return <IconHelp />;
    }
    return <IconEditProfile />;
  };
  return (
    <TouchableOpacity style={styles.page} onPress={onPress}>
      {icon ? <Icon /> : <Image style={styles.image} source={profile} />}
      <View style={styles.content}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      {type === 'next' && <ICNext />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    marginLeft: 12,
  },
  image: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.default,
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
  },
});
