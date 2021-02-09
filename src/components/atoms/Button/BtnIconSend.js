import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconSendDark, IconSendLight} from '../../../assets';
import {colors} from '../../../utils';

export default function BtnIconSend({disable}) {
  return (
    <View style={styles.container(disable)}>
      {disable && <IconSendDark />}
      {!disable && <IconSendLight />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: (disable) => ({
    backgroundColor: disable ? colors.inputTextGray : colors.btnBlue,
    width: 45,
    height: 45,
    borderRadius: 10,
    padding: 3,
    paddingRight: 3,
    paddingBottom: 8,
    paddingLeft: 8,
  }),
});
