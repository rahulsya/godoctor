import React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {ICBtnPlus, ICBtnRemove, ILNullPhoto} from '../../assets';
import {Button, Gap, Header, Link} from '../../components';
import {colors, fonts, storeData} from '../../utils';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';
import {Fire} from '../../config';

export default function UploadPhoto({navigation, route}) {
  const {fullName, profession, uid} = route.params;
  const [photoForDb, setPhotoForDb] = useState(''); //format file img for firebase
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILNullPhoto);
  const getImage = () => {
    launchImageLibrary(
      {includeBase64: true, quality: 0.5, maxHeight: 200, maxWidth: 200}, //minify image size
      (response) => {
        if (response.didCancel || response.errorCode) {
          showMessage({
            message: 'oops ,sepertinya anda tidak jadi upload photo',
            type: 'default',
            backgroundColor: colors.error,
            color: '#fff',
          });
        } else {
          // success
          console.log(response);
          setPhotoForDb(`data:${response.type};base64, ${response.base64}`); //save ke db

          const source = {uri: response.uri}; //set img to source
          setPhoto(source);
          setHasPhoto(true);
        }
      },
    );
  };
  const uploadAndContinue = () => {
    Fire.database()
      .ref('users/' + uid + '/')
      .update({photo: photoForDb});
    // save to localStorage
    const data = route.params;
    data.photo = photoForDb;
    storeData('user', data);
    console.log(data);

    navigation.replace('MainApp');
  };

  return (
    <View style={styles.page}>
      <Header title="Upload Photo" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
            <Image style={styles.avatar} source={photo} />
            {hasPhoto && <ICBtnRemove style={styles.addPhoto} />}
            {!hasPhoto && <ICBtnPlus style={styles.addPhoto} />}
          </TouchableOpacity>
          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.profession}>{profession}</Text>
        </View>
        <View>
          <Button
            title="Upload and Continue"
            disable={!hasPhoto}
            onPress={uploadAndContinue}
          />
          <Gap height={30} />
          <Link
            title="Skip For This"
            size={16}
            align="center"
            // onPress={() => }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    paddingHorizontal: 40,
    paddingBottom: 64,
    flex: 1,
    justifyContent: 'space-between',
  },
  profile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  name: {
    fontSize: 24,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
  },
  profession: {
    fontSize: 18,
    fontFamily: fonts.primary.normal,
    textAlign: 'center',
    color: colors.text.secondary,
  },
});
