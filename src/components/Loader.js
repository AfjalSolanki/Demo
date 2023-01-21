import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from 'react-native';
// import {Colors} from '../contants';
import COLORS from '../conts/colors';
const Loader = ({visible = false}) => {
  const {width, height} = Dimensions.get('window');
  return (
    visible && (
      <View style={[style.container, {width: width, height: height}]}>
        <View style={style.loader}>
          <ActivityIndicator size="large" color={COLORS.DEFAULT_GREEN} />
          <Text style={{marginLeft: 10, fontSize: 16}}>Loading...</Text>
        </View>
      </View>
    )
  );
};

const style = StyleSheet.create({
  loader: {
    height: 70,
    backgroundColor: COLORS.white,
    marginHorizontal: 50,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  container: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
  },
});

export default Loader;
