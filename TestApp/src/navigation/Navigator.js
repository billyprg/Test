import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import AllCustomersScreen from '../screens/AllCustomersScreen';
import AudioRecord from '../screens/AudioRecord';

const Navigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="audio">
        <Stack.Screen name="homescreen" component={HomeScreen} />
        <Stack.Screen name="all" component={AllCustomersScreen} />
        <Stack.Screen name="audio" component={AudioRecord} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
