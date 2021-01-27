import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../Screens/Index';

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

export default HomeNavigator;
