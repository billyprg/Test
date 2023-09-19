import {StyleSheet, Text, View, TextInput, SafeAreaView,TouchableOpacity} from 'react-native';
import React, {useContext, useState,useEffect} from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import { AuthContext } from '../context/AuthContext';

const Login = ({navigation}) => {

const {login,userToken} = useContext(AuthContext)

    const run = () =>{
        if (userToken !== null) {
            navigation.navigate('empty')
        } else {
            navigation.navigate('login')
        }
    }

    // useEffect(() => {
    //     run()
    //   }, []);
    
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={{flex: 1,paddingHorizontal:moderateScale(20),justifyContent:'center'}}>
      <View style={styles.container}>
        <TextInput
          placeholder="Email"
          onChange={text => setUserName(text)}
          placeholderTextColor={'black'}
          style={{fontSize: scale(16), color: 'black'}}
        />
      </View>

      <View style={styles.container}>
        <TextInput
          placeholder="Password"
          placeholderTextColor={'black'}
          onChange={text => setPassword(text)}
          style={{fontSize: scale(16), color: 'black',}}
        />
      </View>

      <TouchableOpacity onPress ={login()} style={{backgroundColor:'blue',borderRadius:scale(20),alignItems:'center',padding:scale(10)}}>
        <Text style={{color: 'black'}}>Login</Text>
      </TouchableOpacity>

      
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    borderRadius: scale(16),
    borderWidth: 2,
    borderColor: 'black',
    marginVertical: verticalScale(10)
  },
});
