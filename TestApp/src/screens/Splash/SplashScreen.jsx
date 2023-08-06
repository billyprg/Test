import { StyleSheet, Image, View,StatusBar } from 'react-native'
import React from 'react'

const SplashScreen = () => {
  return (
    <View style={styles.Container}>
      <StatusBar translucent backgroundColor='transparent'/>
      <Image source={require('../../assets/image/splash.png')} style={styles.Image}/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  Container:{
    flex:1,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center'
  },
  Image:{
    resizeMode:'contain'
  }
})