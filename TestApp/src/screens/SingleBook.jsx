import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Image,
  Pressable,
  Linking,
  ScrollView,
  Button,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';
import {Font} from '../utils/font';
import StarRating from 'react-native-star-rating-widget';
import {Colors} from '../utils/Color';
import {scale,moderateScale,verticalScale} from 'react-native-size-matters';

const {width} = Dimensions.get('window');
const SingleBook = ({route}) => {
  const {item} = route.params;
  // console.log('item', item);

  const navigation = useNavigation();

  const back = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.Container}>
      <Ionicons
        name="arrow-back-outline"
        color="#000"
        size={scale(24)}
        onPress={back}
        style={{
          marginVertical: 15,
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.Box}>
          <Image source={{uri: item.imageLink}} style={styles.Image} />
          <View
            style={[
              styles.row,
              {justifyContent: 'space-evenly', marginVertical: 10},
            ]}>
            <View style={{bottom:scale(5)}}>
              <Text style={styles.Heading}>Rating</Text>
              <StarRating
                rating={item.rating}
                starSize={15}
                style={{margin: 0}}
              />
            </View>
            <View>
              <Text style={styles.Heading}>Reviews</Text>
              <Text style={styles.Sub}>{item.reviews}</Text>
            </View>
            <View>
              <Text style={styles.Heading}>Price</Text>
              <Text style={styles.Sub}>${item.price}</Text>
            </View>
          </View>
        </View>
        <Button title = 'Click me ' onPress={()=>navigation.navigate('apipractice')}/>
        <Text style={styles.Name}>{item.title}</Text>
        <View style={styles.row}>
          <Text style={styles.Key}>Author:</Text>
          <Text style={styles.value}>{item.author}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.Key}>Country:</Text>
          <Text style={styles.value}>{item.country}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.Key}>Language:</Text>
          <Text style={styles.value}>{item.language}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.Key}>Years:</Text>
          <Text style={styles.value}>{item.year}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.Key}>Pages:</Text>
          <Text style={styles.value}>{item.pages}</Text>
        </View>
        <Pressable
          onPress={() => Linking.openURL(item.link)}
          style={styles.Btn}>
          <Text style={styles.BtnText}>View Details</Text>
          <FontAwesome6
            name="arrow-up-right-dots"
            color={Colors.White}
            size={18}
          />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  Box: {
    // backgroundColor: 'red',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderRadius: 10, // Optional: Add borderRadius for a rounded card
    backgroundColor: Colors.White, // Optional: Add a background color to the card
    padding: scale(10), // Optional: Add some padding to the card content
    margin: scale(10), // Optional: Add some margin around the card
  },

  Image: {
    width: `80%`,
    height: verticalScale(350),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: verticalScale(10),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: verticalScale(3),
  },
  Heading: {
    color: Colors.Black,
    fontSize: scale(16),
    textAlign: 'center',
    fontFamily:Font.PoppinsMedium
  },
  Sub: {
    textAlign: 'center',
    color: Colors.NumColor,
    fontSize: scale(15),
    fontFamily: Font.PoppinsLight,
  },
  Name: {
    color: Colors.Black,
    fontSize: scale(20),
    fontFamily:Font.PoppinsBold,
    marginVertical: 20,
  },
  Key: {
    color: Colors.Black,
    fontSize: scale(17),
    fontFamily:Font.PoppinsMedium,
    marginRight: moderateScale(7),
  },
  value: {
    color: '#1f1f1f',
    fontSize: 16,
    fontWeight: '400',
  },
  Btn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.Button,
    borderRadius: 100,
    width: `100%`,
    justifyContent: 'center',
    paddingVertical: 13,
    marginVertical: 15,
  },
  BtnText: {
    color: '#fff',
    fontSize: 15,
    marginHorizontal: 10,
  },
});

export default SingleBook;
