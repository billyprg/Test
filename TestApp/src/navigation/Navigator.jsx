import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Book from '../screens/Book';
import SingleBook from '../screens/SingleBook';

const Navigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="book">
        <Stack.Screen name="book" component={Book} />
        <Stack.Screen name="SingleBook" component={SingleBook} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
