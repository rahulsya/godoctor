import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

export default function ProfileItem({label, value}) {
  return (
    <View style={styles.page}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
  },
  label: {
    fontSize: 14,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    marginBottom: 6,
  },
  value: {
    fontSize: 14,
    fontFamily: fonts.primary[600],
    color: colors.text.default,
  },
});
