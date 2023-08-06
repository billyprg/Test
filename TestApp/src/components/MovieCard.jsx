import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React,{useState} from 'react';
import {LikeButton} from './Buttons/LikeButton';
import {Font} from '../utils/font';
import StarRating from 'react-native-star-rating-widget';

const MovieCard = ({item,onPress}) => {
  const [rating, setRating] = useState(0);
  return (
    <View style={styles.mainView}> 
      <TouchableOpacity onPress={onPress} style={styles.card}>
        <ImageBackground
          style={styles.backgroundImg}
          resizeMode="cover"
          source={{uri: item.imageLink}}>
          <View
            style={{
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              marginTop: 10,
              marginRight: 10,
            }}>
            <LikeButton />
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <View style={{marginLeft:15}}>

      <Text style={styles.title} >{item.title}</Text>
      <View style={{flexDirection:'row'}}>
      <StarRating
        rating={item.rating}
        onChange={setRating}
        starSize={18}
      />

      <Text style={styles.title}>({item.reviews})</Text>

      </View>
      <Text style={styles.title}>${item.price}</Text>  
      </View>
    </View>
  );
};

export default MovieCard;

const styles = StyleSheet.create({

  mainView:{
    // alignItems:'center',
    // justifyContent:'center'/
  },
  card: {
    height: 220,
    width: 150,
    borderRadius: 16,

    overflow: 'hidden',
    marginVertical: 15,
    marginHorizontal: 10,

    // paddingHorizontal: 20,
  },
  backgroundImg: {
    flex: 1,
    height: '100%',
    width: '100%',
  },

  title: {
    fontFamily: Font.PoppinsBold,
    fontSize: 16,
    color: 'black',
    marginTop: 5,
  },
});
