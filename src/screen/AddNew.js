import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';

const AddNew = () => {
  const [imagepost, setimagepost] = useState(null);
  const Opencamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log('----------' + JSON.stringify(image));
      setimagepost(image.path);
    });
  };
  const OpenGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log('----------' + JSON.stringify(image));
      setimagepost(image.path);
    });
  };
  const Selectimage = () => {
    Alert.alert('Alert Title', 'Select your Image', [
      {
        text: 'Camera',
        onPress: () => Opencamera(''),
      },
      {
        text: 'OpenGallery',
        onPress: () => OpenGallery(''),
        style: 'cancel',
      },
      {text: 'Cancel', onPress: () => console.log('')},
    ]);
  };
  // Alert.alert('Alert Title', 'My Alert Msg', [
  //   {
  //     text: 'Camera',
  //     onPress: () => Opencamera(''),
  //   },
  //   {
  //     text: 'OpenGallery',
  //     onPress: () => OpenGallery(''),
  //     style: 'cancel',
  //   },
  //   {text: 'Cancel', onPress: () => console.log('')},
  // ]);

  const PostData = async () => {
    // await fetch('https://dmapi.ipaypro.co/app_task/categories/add', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     firstParam: 'yourValue',
    //     secondParam: 'yourOtherValue',
    //   })
    //     .then(response => response.json())
    //     .then(json => {
    //       console.log('=================json-----', json.JSON.stringify);
    //     })
    //     .catch(error => {
    //       console.error(error);
    //     }),
    // });
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerview}>
        <Text style={styles.headertext}>Add Categories & Subcategories</Text>
      </View>
      <View style={styles.border} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{margin: 15}}>
          <Text style={styles.inputtext}>category Name</Text>
          <TextInput
            placeholder=""
            placeholderTextColor={'gray'}
            style={styles.inputview}
          />
          <View>
            <Text style={[styles.inputtext, {marginTop: 20}]}>
              category Image
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.imageCard}>
                <Image
                  style={styles.image}
                  source={
                    imagepost
                      ? {uri: imagepost}
                      : require('../assets/images/add-image.png')
                  }
                />
              </View>
              <TouchableOpacity
                onPress={() => {
                  Selectimage();
                }}
                style={styles.choosebutton}>
                <Text style={styles.choosebuttontext}>choose file</Text>
              </TouchableOpacity>
            </View>
            <Text style={[styles.inputtext, {marginTop: 40}]}>
              create sub-categories
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={[styles.inputview, {flex: 1}]}></View>
              <TouchableOpacity style={styles.plusbutton}>
                <Text style={{color: 'white', fontSize: 20}}>+</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <View style={[styles.inputview, {flex: 1}]}></View>
              <TouchableOpacity style={styles.plusbutton}>
                <Text style={{color: 'white', fontSize: 22}}>-</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => {
                PostData();
              }}
              style={styles.addbutton}>
              <Text style={styles.addtext}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddNew;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  headertext: {
    color: 'black',
    fontSize: 17,
    fontWeight: '500',
    lineHeight: 13 * 1.4,
    // alignItems:'center'
    textAlign: 'center',
  },
  headerview: {
    height: 55,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    backgroundColor: 'gray',
    height: 0.5,
    marginHorizontal: 20,
  },
  inputview: {
    borderWidth: 0.5,
    borderColor: 'gray',
    height: 45,
    paddingHorizontal: 10,
    // marginStart:10
  },
  inputtext: {
    fontSize: 17,
    color: 'black',
    marginVertical: 10,
    fontWeight: '6 00',
  },
  imageCard: {
    height: 100,
    width: 150,
    alignItems: 'center',
    // margin: 20,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'gray',
    borderRadius: 0,
    // marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 33,
    height: 33,
    resizeMode: 'contain',
  },
  choosebuttontext: {
    fontSize: 17,
    color: '#fff',
    fontWeight: '500',
    paddingHorizontal: 15,
  },
  choosebutton: {
    backgroundColor: '#1ab2ff',
    padding: 10,
    borderRadius: 1,
    marginStart: 20,
  },
  plusbutton: {
    backgroundColor: '#1ab2ff',
    height: 45,
    width: 55,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    borderRadius: 5,
  },
  addbutton: {
    backgroundColor: '#1ab2ff',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 55,
  },
  addtext: {
    fontSize: 17,
    color: '#fff',
    fontWeight: '500',
  },

// ssss
});
