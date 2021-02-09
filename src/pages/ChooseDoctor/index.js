import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyDoctor} from '../../assets';
import {Header, List} from '../../components';
import {colors} from '../../utils';

export default function ChooseDoctor({navigation}) {
  return (
    <View style={styles.page}>
      <Header
        title="Pilih dokter anak"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <List
        type="next"
        profile={DummyDoctor}
        name="Alexander Jannie"
        desc="Wanita"
        onPress={() => navigation.navigate('Chatting')}
      />
      <List
        type="next"
        profile={DummyDoctor}
        name="Alexander Jannie"
        desc="Wanita"
      />
      <List
        type="next"
        profile={DummyDoctor}
        name="Alexander Jannie"
        desc="Wanita"
      />
      <List
        type="next"
        profile={DummyDoctor}
        name="Alexander Jannie"
        desc="Wanita"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
