import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Input, Loading} from '../../components';
import {useForm} from '../../utils';
import {colors} from '../../utils/colors';
import {Fire} from '../../config';
import {showMessage} from 'react-native-flash-message';
import {storeData} from '../../utils';

export default function Register({navigation}) {
  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const onContinue = () => {
    setLoading(true);
    // const data = {
    //   fullName: form.fullName,
    //   profession: form.profession,
    //   email: form.email,
    //   // uid: success.user.uid,
    // };

    // navigation.navigate('UploadPhoto', data);
    Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        setLoading(false);
        setForm('reset');
        const data = {
          fullName: form.fullName,
          profession: form.profession,
          email: form.email,
          uid: success.user.uid,
        };
        // ref merujuk ke dimana data disimpan ex users/uid/data
        Fire.database()
          .ref('users/' + success.user.uid + '/')
          .set(data);

        storeData('user', data);
        navigation.navigate('UploadPhoto', data);
        console.log(success);
      })
      .catch((error) => {
        setLoading(false);
        showMessage({
          message: error.message,
          type: 'default',
          backgroundColor: colors.error,
          color: '#fff',
        });
        console.log(error.message);
      });
  };
  return (
    <>
      <View style={styles.container}>
        <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Input
              label="Full Name"
              value={form.fullName}
              onChangeText={(value) => setForm('fullName', value)}
            />
            <Gap height={24} />
            <Input
              label="Pekerjaan"
              value={form.profession}
              onChangeText={(value) => setForm('profession', value)}
            />
            <Gap height={24} />
            <Input
              label="Email Address"
              value={form.email}
              onChangeText={(value) => setForm('email', value)}
            />
            <Gap height={24} />
            <Input
              label="Password"
              value={form.password}
              secureTextEntry
              onChangeText={(value) => setForm('password', value)}
            />
            <Gap height={40} />
            <Button title="Continue" type="primary" onPress={onContinue} />
          </ScrollView>
        </View>
      </View>
      {loading && <Loading />}
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    padding: 40,
    paddingTop: 0,
    // justifyContent:'space-between'
  },
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
