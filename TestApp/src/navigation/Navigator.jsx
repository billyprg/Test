import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Book from '../screens/Book';
import SingleBook from '../screens/SingleBook';
import ApiPractice from '../screens/ApiPractice';
import Login from '../screens/Login';
import Empty from '../screens/Empty';

const Navigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="login">
        <Stack.Screen name="book" component={Book} />
        <Stack.Screen name="SingleBook" component={SingleBook} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="apipractice" component={ApiPractice} />
        <Stack.Screen name="empty" component={Empty} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
