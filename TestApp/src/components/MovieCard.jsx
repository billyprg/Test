import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {LikeButton} from './Buttons/LikeButton';
import {Font} from '../utils/font';
import StarRating from 'react-native-star-rating-widget';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';

const MovieCard = ({item, onPress}) => {
  const [rating, setRating] = useState(0);
  return (
    <View style={styles.mainView}>
      <TouchableOpacity onPress={onPress} style={styles.card}>
        <ImageBackground
          style={styles.backgroundImg}
          resizeMode="cover"
          source={{uri: item.imageLink}}>
          <View style={styles.LikeView}>
            <LikeButton />
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <View style={{marginLeft: 15}}>
        <Text numberOfLines={3} style={styles.title}>{item.title}</Text>
        <View style={{flexDirection: 'row',alignItems:'center'}}>
          <StarRating rating={item.rating} onChange={setRating} starSize={18} />

          <Text style={styles.review}>({item.reviews})</Text>
        </View>
        <Text style={styles.title}>${item.price}</Text>
      </View>
    </View>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  mainView: {
    // alignItems:'center',
    // justifyContent:'center'/
  },
  card: {
    height: 220,
    width: 150,
    borderRadius: scale(16),

    overflow: 'hidden',
    marginVertical: 15,
    marginHorizontal: 10,

    // paddingHorizontal: 20,
  },
  LikeView: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 10,
    marginRight: 10,
  },
  backgroundImg: {
    flex: 1,
    height: '100%',
    width: '100%',
  },

  title: {
    fontFamily: Font.PoppinsMedium,
    fontSize: scale(15),
    color: 'black',
    marginTop: 5,

  },
  review: {
    fontFamily: Font.PoppinsLight,
    fontSize: scale(14),
    color: 'black',
    marginTop: 5,
    
  },
});
