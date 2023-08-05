import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';

const MovieCard = ({item}) => {
  return (
    <View style={styles.mainCard}>
      <ImageBackground
        style={styles.backgroundImg}
        resizeMode="cover"
        source={{uri: item.imageLink}}></ImageBackground>
    </View>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  mainCard: {
    height: 180,
    width: 50,
    borderRadius: 16,
    backgroundColor: 'white',
    overflow:'hidden',
    // marginVertical:15
    // paddingHorizontal: 20,
  },
  backgroundImg: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});
