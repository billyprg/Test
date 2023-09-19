import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, {createContext, useState,useEffect} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const login = () => {
    setIsLoading(false);
    setUserToken('hereiam');
    AsyncStorage.setItem('userToken','hereiam')
  };

  const logout = () => {
    console.log('lore');
    setUserToken(null);
    AsyncStorage.removeItem('userToken')
    setIsLoading(true);
    
  };

  const isLoggedIn = async ()=> {
    try {
      let userToken = await AsyncStorage.getItem('userToken')
      setUserToken(userToken)

    } catch (error) {
      console.log('error', error)
    }
  };

  useEffect (()=>{
    isLoggedIn()
  })
  return (
    <AuthContext.Provider value={{login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
