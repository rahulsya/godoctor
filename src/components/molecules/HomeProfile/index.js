import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {ILNullPhoto, User} from '../../../assets';
import {colors, fonts, getData} from '../../../utils';

export default function HomeProfile({onPress}) {
  const [profile, setProfile] = useState({
    photo: ILNullPhoto,
    fullName: '',
    profession: '',
  });

  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      data.photo = {uri: res.photo};
      console.log(res);
      setProfile(res);
    });
  }, []);
  return (
    <TouchableOpacity style={styles.page} onPress={onPress}>
      <Image source={profile.photo} style={styles.avatar} />
      <View>
        <Text style={styles.name}>{profile.fullName}</Text>
        <Text style={styles.profession}>{profile.profession}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.default,
    textTransform: 'capitalize',
  },
  profession: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.text.default,

    textTransform: 'capitalize',
  },
});
