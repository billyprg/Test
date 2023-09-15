import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Colors} from '../../utils/Color';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Font} from '../../utils/font';

const NewsCard = ({data}) => {
  return (
    <View style={styles.main}>
      <Image
        source={{uri: data.urlToImage}}
        resizeMode="cover"
        style={styles.image}
      />

      <View style={styles.textView}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>{data.title}</Text>
        </View>

        <View style={styles.descView}>
          <Text style={styles.descText}>{data.description}</Text>
        </View>
      </View>
    </View>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.White,
    borderRadius: scale(16),
    marginHorizontal: moderateScale(10),
    marginVertical: verticalScale(10),
    elevation: 5,
    overflow:'hidden'
  },

  textView:{
    paddingHorizontal:moderateScale(10)
  },

  titleView: {
    borderBottomColor: Colors.Black,
    borderBottomWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical:verticalScale(10)
  },

  titleText: {
    color: Colors.Black,
    fontSize: scale(18),
    fontFamily: Font.PoppinsMedium,
    textAlign: 'center',
  },

  descView: {
    alignItems: 'center',
    marginVertical:verticalScale(10),
    justifyContent:'center'
  },
  descText: {
    color: Colors.Black,
    fontSize: scale(12),
    fontFamily: Font.PoppinsLight,
    // textAlign:'center'
  },
  image: {
    height: verticalScale(150),
    width: '100%',
  },
});
