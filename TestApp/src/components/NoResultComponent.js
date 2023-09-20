import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Font} from '../utils/font';
import {scale, verticalScale} from 'react-native-size-matters';

const NoResultComponent = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={require('../assets/images/oops.png')}
        style={styles.image}
      />
    </View>
  );
};

export default NoResultComponent;

const styles = StyleSheet.create({
  container: {
    marginVertical: verticalScale(20),
  },

  image: {
    height: Dimensions.get('window').height * 0.5,
    width: Dimensions.get('window').width,
    alignSelf: 'center',
  },
});
