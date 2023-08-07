import React, {useState, useRef} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Animated, View,StyleSheet} from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';


const AnimatedIcon = Animated.createAnimatedComponent(AntDesign);

export const LikeButton = ({item, style}) => {
  const scale = useRef(new Animated.Value(1)).current;
  const opacity = useRef(new Animated.Value(1)).current;
  const reverseOpacity = useRef(new Animated.Value(0)).current;
  const [liked, setLiked] = useState(false);

  const like = value => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 0.9,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 0.9,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.timing(scale, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(value ? opacity : reverseOpacity, {
          toValue: 0,
          duration: 90,
          useNativeDriver: true,
        }),
        Animated.timing(value ? reverseOpacity : opacity, {
          toValue: 1,
          duration: 90,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
    setLiked(value);
  };

  return (
    <View style={styles.likeView}>
      <AnimatedIcon
        name={'heart'}
        size={18}
        style={{
          ...style,
          position: 'absolute',
          opacity: reverseOpacity,
          transform: [{scale}],
        }}
        color="#B00000"
        onPress={() => like(!liked)}
      />
      <AnimatedIcon
        name={'hearto'}
        size={18}
        style={{
          ...style,
          opacity: opacity,
          transform: [{scale}],
        }}
        color="#B00000"
        onPress={() => like(!liked)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    likeView:{
        backgroundColor: 'white',
        borderRadius: scale(30),
        height:scale(30),
        width: scale(30),
        alignItems:'center',
        justifyContent:'center'
        // padding:5,

    }
  });
  
