import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Image,
  Pressable,
  Linking,
  ScrollView
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';
import {Font} from '../../utils/font';
import StarRating from 'react-native-star-rating-widget';

const {width} = Dimensions.get('window');
const SingleBook = ({route}) => {
  const {item} = route.params;
  console.log('item', item);

  const navigation = useNavigation();

  const back = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.Container}>
      <Ionicons
        name="arrow-back-outline"
        color="#000"
        size={20}
        onPress={back}
        style={{
          marginVertical: 15,
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.Box}>
        <Image source={{uri: item.imageLink}} style={styles.Image} />
        <View style={[styles.row,{ justifyContent: 'space-evenly',marginVertical:10}]}>
          <View>
            <Text style={styles.Heading}>Rating</Text>
            <StarRating
        rating={item.rating}
        starSize={15}
        style={{margin:0}}
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
      <Pressable onPress={() => Linking.openURL(item.link)} style={styles.Btn}>
        <Text style={styles.BtnText}>View Details</Text>
        <FontAwesome6 name='arrow-up-right-dots' color='#fff' size={18}/>
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
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    
    elevation: 1,
    borderRadius: 20,
  },
  Image: {
    width: `80%`,
    height: 350,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop:10
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical:3
   
  },
  Heading: {
    color: '#000',
    fontSize: 17,
    textAlign: 'center',
  },
  Sub: {
    textAlign: 'center',
    color: '#E3E4E7',
    fontSize: 15,
  },
  Name: {
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
    marginVertical:20
  },
  Key:{
    color: '#000',
    fontSize: 17,
    fontWeight: '600',
    marginRight:7
  },
  value:{
    color: '#1f1f1f',
    fontSize: 16,
    fontWeight: '400',
  },
  Btn:{
    flexDirection:'row'
    ,alignItems:'center',
    backgroundColor:'#004E6E',
    borderRadius:100,
    width:`100%`,
    justifyContent:'center',
    paddingVertical:13,
    marginVertical:15
  },
  BtnText:{
    color:'#fff',
    fontSize:15,
    marginHorizontal:10
  }
});

export default SingleBook;
