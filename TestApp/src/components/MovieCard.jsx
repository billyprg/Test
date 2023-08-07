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
import { Colors } from '../utils/Color';

const MovieCard = ({item, onPress}) => {
  const [rating, setRating] = useState(0);
  return (
    <TouchableOpacity onPress={onPress} style={styles.mainView}>
      <View style={styles.imgView}>
        <ImageBackground
          style={styles.backgroundImg}
          resizeMode="cover"
          source={{uri: item.imageLink}}>
          <View style={styles.likeView}>
            <LikeButton />
          </View>
        </ImageBackground>
      </View>
      <View
        style={{
          height: '30%',
          paddingHorizontal: moderateScale(5),
          marginTop: verticalScale(5),
        }}>
        <Text numberOfLines={1} style={styles.title}>
          {item.title}
        </Text>
        <View style={styles.starView}>
          <StarRating rating={item.rating} onChange={setRating} starSize={18} />

          <Text style={styles.review}>({item.reviews})</Text>
        </View>
        <Text style={styles.title}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  mainView: {
    height: verticalScale(330),
    width: '45%',
    marginLeft: scale(12),
    marginBottom: verticalScale(10),
  },
  imgView: {
    height: '70%',
    borderRadius: scale(20),
    backgroundColor: 'red',
    overflow: 'hidden',
  },
  card: {
    height: verticalScale(220),
    width: scale(150),
    borderRadius: scale(16),
    overflow: 'hidden',
    marginVertical: verticalScale(15),
    marginHorizontal: moderateScale(10),
  },
  starView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  likeView: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: verticalScale(10),
    marginRight: moderateScale(10)
  },
  backgroundImg: {
    flex: 1,
    height: '100%',
    width: '100%',
    borderRadius: scale(20),
  },

  title: {
    fontFamily: Font.PoppinsMedium,
    fontSize: scale(14),
    color: Colors.Black,
  },
  review: {
    fontFamily: Font.PoppinsLight,
    fontSize: scale(14),
    color: Colors.Black,
    marginTop: verticalScale(5)
  },
});
