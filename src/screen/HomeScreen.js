import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Button from '../components/Button';
import COLORS from '../conts/colors';
import CameraController from '../components/CameraController';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Video from 'react-native-video';
import {useNavigation} from '@react-navigation/native';
const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('screen').height;
const HomeScreen = () => {
  const navigation = useNavigation();
  const [imagepost, setimagepost] = useState(null);
  const [photoVideo, setPhotoVideo] = useState(null);
  const uploadCamraRoll = () => {
    CameraController.open('both', response => {
      console.log('----------responseresponseresponse: ', response);
      setPhotoVideo(response);
    });
  };

  <Video
    style={styles.backgroundVideo}
    source={{uri: photoVideo?.path}}
    onEnd={() => {}}
    onLoad={item => {}}
    resizeMode="cover"
    // paused={item.videoPause == undefined ? true : false}
  />;

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.manview}>
        <View style={styles.boxview}>
          <Video
            style={styles.backgroundVideo}
            source={{uri: photoVideo?.path}}
            onEnd={() => {}}
            onLoad={item => {}}
            resizeMode="cover"
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.headerview}>
            <Image
              style={{height: 22, width: 22, tintColor: COLORS.white}}
              source={require('../assets/images/ic_back.png')}
            />
            <Text style={styles.headertitle}>Selfie</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.imageCard}></View> */}
      </View>

      <View style={{marginHorizontal: 10}}>
        <Button
          title="Launch Camera"
          onPress={() => {
            uploadCamraRoll();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  imageCard: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  backgroundVideo: {
    height: heightWindow / 1,
    width: widthWindow / 1,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  manview: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  // boxview: {
  //   backgroundColor: COLORS.white,
  //   height: 270,
  //   width: 200,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   borderRadius: 300,
  // },
  headerview: {
    marginHorizontal: 10,
    marginVertical: 15,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    // backgroundColor: 'red',
    // flex: 1,
  },
  headertitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.white,
    marginLeft: widthWindow / 2.9,
  },
});
