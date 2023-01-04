


import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, {useState} from 'react';
  const FastFoodItems = ({data = [], value = {}, onSelect = () => {}}) => {
    const [showoption, setshowoption] = useState(null);  
    const onSelectedItem = val => {
      setshowoption(false);
      onSelect(val);
    };
    return (
      <View style={{margin: 0}}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => setshowoption(!showoption)}
          style={styles.manview}>
          <Image
            style={{
              ...styles.image1,
            }}
            source={require('../assets/images/more.png')}
          />
          <Image style={styles.img} source={require('../assets/images/delivery_charge.png')} />
  
          <Text style={{color: 'black', fontSize: 16, marginStart: 7}}>
            {!!value ? value?.name : 'Fast Food Items'}
          </Text>
          <Image
            style={{
              ...styles.image,
              transform: [{rotate: showoption ? '180deg' : '0deg'}],
            }}
            source={require('../assets/images/drop-down-arrow.png')}
          />
        </TouchableOpacity>
        {showoption && (
          <View style={styles.view}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled">
              {data.map((val, i) => {
                return (
                  <TouchableOpacity
                    key={String(i)}
                    style={{
                      ...styles.selectstyle,
                    }}
                    onPress={() => onSelectedItem(val)}>
                    <Text style={{fontSize: 17, marginStart: 10, color: 'black'}}>
                      {val.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        )}
      </View>
    );
  };
  
  export default FastFoodItems;
  
  const styles = StyleSheet.create({
    selectstyle: {
      borderRadius: 0,
      paddingHorizontal: 0,
      marginBottom: 4,
      height: 45,
      justifyContent: 'center',
      // elevation:1,
      // borderWidth: 0.1,
      borderColor: 'black',
      backgroundColor: '#fff',
    },
    manview: {
      backgroundColor: '#FFFFFF',
      height: 60,
      borderRadius: 0,
      // paddingHorizontal: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      // marginBottom: 2,
      backgroundColor: '#FFFFFF',
      // elevation:1
      borderWidth: 0.5,
    },
    view: {
      padding: 5,
      borderRadius: 10,
      maxHeight: 200,
      // backgroundColor:'red'
    },
    image: {
      width: 13,
      height: 13,
      resizeMode: 'contain',
      marginEnd: 10,
      marginLeft: 'auto',
    },
    image1: {
      width: 13,
      height: 13,
      resizeMode: 'contain',
      marginStart: 10,
      // marginRight: 'auto',
    },
    img:{
      width: 22,
      height: 22,
      resizeMode: 'contain', 
      marginHorizontal:20
    }
  });
  