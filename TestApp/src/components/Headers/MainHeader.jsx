import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import React from 'react';
import {Font} from '../../utils/font';

const MainHeader = () => {
  return (
    <View style={styles.mainView}>
        <StatusBar />
      <Text style={styles.heading}>Hi Nick</Text>
      <View style={styles.imageView}>
        <Image
          source={require('../../assets/images/profile.png')}
          style={{height: '100%', width: '100%', borderRadius: 30}}
        />
      </View>
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical:10,
    backgroundColor: 'white',
    alignItems:'center',
  },

  heading: {
    fontSize: 18,
    color: 'black',
    fontFamily: Font.PoppinsBold,
  },

  imageView: {
    height: 50,
    width: 50,
    backgroundColor: 'grey',
    borderRadius: 30,
    overflow: 'hidden',
  },
});
