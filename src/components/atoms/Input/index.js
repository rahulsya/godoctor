import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {fonts} from '../../../utils';
import {colors} from '../../../utils/colors';

export default function Input({label, onChangeText, value, secureTextEntry}) {
  const [border, setBorder] = React.useState(colors.borderColor);
  const onFocusForm = () => {
    setBorder(colors.teriary);
  };
  const onBlurForm = () => {
    setBorder(colors.borderColor);
  };
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.input(border)}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    marginBottom: 6,
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
  },
  input: (border) => ({
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: border,
  }),
});
