import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { Colors } from '../../utils/Color';
import { Font } from '../../utils/font';

const PostCard = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{data.title.charAt(0).toUpperCase() + data.title.slice(1)}</Text>
      </View>
      <View style={styles.descContainer}>
        <Text style={styles.description}>{data.body}</Text>
      </View>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    borderRadius: scale(16),
    paddingHorizontal:moderateScale(10),
    marginHorizontal: moderateScale(10),
    marginVertical: verticalScale(10),
    elevation: 5,
  },
  titleContainer: {
    borderBottomColor: Colors.Black,
    borderBottomWidth: 2,
    marginVertical: verticalScale(10),
  },
  title: {
    color: Colors.Black,
    fontSize: scale(18),
    fontFamily: Font.PoppinsMedium,
    textAlign: 'center',
  },
  descContainer: {
    // alignItems: 'center',
    marginVertical: verticalScale(10),
    justifyContent: 'center',
  },
  description: {
    color: Colors.Black,
    fontSize: scale(12),
    fontFamily: Font.PoppinsLight,
    textAlign: 'left'
  },

});
