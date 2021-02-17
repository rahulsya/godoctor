import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ILNullPhoto} from '../../assets';
import {Header, List, Profile, Gap} from '../../components';
import {getData} from '../../utils';

export default function UserProfile({navigation}) {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    photo: ILNullPhoto,
  });
  React.useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      data.photo = {uri: res.photo};
      setProfile(res);
    });
  }, []);

  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={14} />
      {profile.fullName.length > 0 && (
        <Profile
          name={profile.fullName}
          desc={profile.profession}
          photo={profile.photo}
        />
      )}

      <Gap height={10} />
      <List
        name="Edit Profile"
        desc="Last Updated Yesterday"
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <List
        name="Language"
        desc="Avaible 12 Languages"
        type="next"
        icon="language"
      />
      <List
        name="Give Us Rate"
        desc="On Google Play Store"
        type="next"
        icon="rate"
      />
      <List
        name="Help Center"
        desc="Read our guidelines"
        type="next"
        icon="help"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
});
