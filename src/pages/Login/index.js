import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {ILLogo} from '../../assets';
import {Loading} from '../../components';
import {Button, Gap, Input, Link} from '../../components/atoms';
import {Fire} from '../../config';
import {fonts, useForm, colors, storeData} from '../../utils';

export default function Login({navigation}) {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });
  const [loading, setloading] = useState(false);

  const login = () => {
    console.log(form);
    setloading(true);
    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        setloading(false);
        // get detail from users
        // console.log(res);
        Fire.database()
          .ref(`users/${res.user.uid}/`)
          .once('value')
          .then((resDB) => {
            console.log(resDB.val());
            if (resDB.val()) {
              storeData('user', resDB.val());
              navigation.replace('MainApp');
            }
          });
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
        showMessage({
          message: err.message,
          type: 'default',
          backgroundColor: colors.error,
          color: '#fff',
        });
      });
  };
  return (
    <>
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ILLogo />
          <Text style={styles.title}>Masuk dan mulai konsultasi</Text>
          <View>
            <Input
              label="Email Address"
              value={form.email}
              onChangeText={(value) => setForm('email', value)}
            />
            <Gap height={24} />
            <Input
              label="Password"
              value={form.password}
              onChangeText={(value) => setForm('password', value)}
              secureTextEntry
            />
            <Gap height={10} />
            <Link title="Forgot My Password" size={12} />
            <Gap height={40} />
          </View>
          <View>
            <Button title="Sign In" type="primary" onPress={login} />
            <Gap height={30} />
            <Link
              title="Create New Account"
              size={16}
              align="center"
              onPress={() => navigation.navigate('Register')}
            />
          </View>
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    maxWidth: 153,
    color: '#112340',
    marginBottom: 40,
    marginTop: 40,
  },
});
