import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors} from '../../../utils';
import {Button} from '../../atoms';

export default function InputChat() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.Input} placeholder="Tulis Pesan Untuk Nairobi" />
      <Button type="btn-icon-send" disable />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    paddingVertical: 26,
  },
  Input: {
    flex: 1,
    backgroundColor: colors.inputTextGray,
    padding: 14,
    borderRadius: 10,
    fontSize: 14,
    maxHeight: 45,
    marginRight: 10,
  },
});
