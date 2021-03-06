import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Menu} from '../Screens/Index';

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Menu" component={Menu} />
  </Stack.Navigator>
);

export default HomeNavigator;
