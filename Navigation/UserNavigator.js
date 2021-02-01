import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {User} from '../Screens/Index';

const Stack = createStackNavigator();

const MenuNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="User" component={User} />
  </Stack.Navigator>
);

export default MenuNavigator;
