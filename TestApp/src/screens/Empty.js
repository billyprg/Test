import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { scale } from 'react-native-size-matters';

const Empty = () => {
    const {logout} = useContext(AuthContext);
  return (
    <View>
      <TouchableOpacity
        
        onPress={logout()}>
       <Text style={{color: 'black', fontSize: scale(24), alignSelf: 'center'}}>click me</Text>
        
      </TouchableOpacity>
    </View>
  );
};

export default Empty;

const styles = StyleSheet.create({});
