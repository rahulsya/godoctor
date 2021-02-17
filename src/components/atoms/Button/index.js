import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {color} from 'react-native-reanimated';
import {fonts} from '../../../utils';
import {colors} from '../../../utils/colors';
import BtnIconSend from './BtnIconSend';
import IconOnly from './IconOnly';

export default function Button({type, title, onPress, icon, disable}) {
  if (type === 'btn-icon-send') {
    return <BtnIconSend disable={disable} />;
  }
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  if (disable) {
    return (
      <View style={styles.disableBg} onPress={onPress}>
        <Text style={styles.disableText}>{title}</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor:
      type === 'secondary'
        ? colors.button.secondary.background
        : colors.button.primary.background,
    borderRadius: 10,
    paddingVertical: 10,
  }),
  text: (type) => ({
    color:
      type === 'secondary'
        ? colors.button.secondary.text
        : colors.button.primary.text,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: fonts.primary[600],
  }),
  // disable btn
  disableBg: {
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: colors.button.disable.background,
  },
  disableText: {
    color: colors.button.disable.text,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: fonts.primary[600],
  },
});
