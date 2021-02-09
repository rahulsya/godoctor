import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Input, Profile} from '../../components';

export default function UpdateProfile({navigation}) {
  return (
    <View style={styles.page}>
      <Header title="Update Profile" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Profile />
        <Gap height={26} />
        <View style={styles.content}>
          <Input label="Full Name" />
          <Gap height={24} />
          <Input label="Pekerjaan" />
          <Gap height={24} />
          <Input label="Email Address" />
          <Gap height={24} />
          <Input label="Password" />
          <Gap height={40} />
          <Button title="Save Profile" onPress={() => navigation.goBack()} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
