import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Menu} from '../Screens/Index';

const Stack = createStackNavigator();

const MenuNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Menu" component={Menu} />
  </Stack.Navigator>
);

export default MenuNavigator;
