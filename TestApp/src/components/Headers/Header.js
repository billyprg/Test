import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import React from 'react';
import {Font} from '../../utils/font';
import {Colors} from '../../utils/Color';
import {useNavigation} from '@react-navigation/native';
import {scale} from 'react-native-size-matters';

const Header = ({navigate}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <StatusBar />
      <Text onPress={()=>navigation.navigate('all')} style={styles.heading}>Welcome, Bilal</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/profile.png')}
          style={styles.image}
        
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: Colors.main,
    alignItems: 'center',
  },

  heading: {
    fontSize: scale(18),
    color: Colors.Black,
    fontFamily: Font.PoppinsMedium,
  },

  imageContainer: {
    height: scale(50),
    width: scale(50),
    backgroundColor: 'grey',
    borderRadius: scale(30),
    overflow: 'hidden',
  },

  image: {
    height: '100%',
    width: '100%',
    borderRadius: scale(30),
  },
});
