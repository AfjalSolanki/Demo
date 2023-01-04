import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import FreshVegetables from '../comman/FreshVegetables';
import DietFood from '../comman/DietFood';
import FastFoodItems from '../comman/FastFoodItems';
import JuicyFruits from '../comman/JuicyFruits';
let Freshdata = [
  {id: 1, name: 'Tomatoes'},
  {id: 2, name: 'Spinach'},
  {id: 3, name: 'Onions'},
];
let DietFooddata = [
  {id: 1, name: 'Quinoa'},
  {id: 2, name: 'Oats'},
];
let FastFoodItemsdata = [
  {id: 1, name: 'Sandwich'},
  {id: 2, name: 'Burger'},
  {id: 3, name: 'Tacos'},
  {id: 4, name: 'Pizza'},
];
let JuicyFruitsdata = [
  {id: 1, name: 'Watermelon'},
  {id: 2, name: 'Grapes'},
  {id: 3, name: 'Berries'},
];
const Viewscreen = () => {
  const [active, setactive] = useState('1');
  const [selectedItem, setSelectedItem] = useState(null);
  const onSelect = item => {
    setSelectedItem(item);
  };
  const [selectedItem1, setSelectedItem1] = useState(null);
  const onSelect1 = item => {
    setSelectedItem1(item);
  };
  const [selectedItem2, setSelectedItem2] = useState(null);
  const onSelect2 = item => {
    setSelectedItem2(item);
  };
  const [selectedItem3, setSelectedItem3] = useState(null);
  const onSelect3 = item => {
    setSelectedItem3(item);
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerview}>
        <Text style={styles.headertext}>Categories & Subcategories</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{margin: 15, borderWidth: 0.5, borderColor: 'black'}}>
          <FreshVegetables
            value={selectedItem}
            data={Freshdata}
            onSelect={onSelect}
          />
          <DietFood
            value={selectedItem1}
            data={DietFooddata}
            onSelect={onSelect1}
          />
          <View style={styles.flexbox}>
            <Image
              style={{
                ...styles.image1,
              }}
              source={require('../assets/images/more.png')}
            />
            <Image
              style={styles.img}
              source={require('../assets/images/delivery_charge.png')}
            />
            <Text style={{fontSize: 17, marginStart: 10, color: 'black'}}>
              Healthy Food
            </Text>
          </View>
          <View style={{}}>
            <TouchableOpacity
              onPress={() => setactive('1')}
              style={styles.select}>
              <Text style={styles.text}>Boiled Eggs</Text>
              <Image
                style={styles.tongleimg}
                source={
                  active == '1'
                    ? require('../assets/images/radioselect.png')
                    : require('../assets/images/radiounselect.png')
                }
              />
            </TouchableOpacity>
            <View
              style={{
                backgroundColor: 'black',
                height: 0.5,
                marginHorizontal: 20,
              }}
            />
            <TouchableOpacity
              onPress={() => setactive('2')}
              style={styles.select}>
              <Text style={styles.text}>Whole Wheat</Text>
              <Image
                style={styles.tongleimg}
                source={
                  active == '2'
                    ? require('../assets/images/radioselect.png')
                    : require('../assets/images/radiounselect.png')
                }
              />
            </TouchableOpacity>
          </View>
          <FastFoodItems
            value={selectedItem2}
            data={FastFoodItemsdata}
            onSelect={onSelect2}
          />
          <JuicyFruits
            value={selectedItem3}
            data={JuicyFruitsdata}
            onSelect={onSelect3}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Viewscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  headertext: {
    color: 'black',
    // marginVertical: 20,
    fontSize: 17,
    fontWeight: '500',
    lineHeight: 13 * 1.4,
    // alignItems:'center'
    textAlign: 'center',
  },
  headerview: {
    height: 55,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'center',
  },
  flexbox: {
    // borderWidth: 0.5,
    borderColor: 'black',
    height: 60,
    backgroundColor: '#e6e6ff',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  select: {
    // borderTopWidth: 0.5,
    borderTopColor: 'black',
    height: 60,

    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
  },

  image1: {
    width: 13,
    height: 13,
    resizeMode: 'contain',
    marginStart: 0,
    // marginRight: 'auto',
  },
  img: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 17,
    marginStart: 10,
    color: 'black',
  },
  tongleimg: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
    marginLeft: 'auto',
  },
});
