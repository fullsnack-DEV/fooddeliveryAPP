import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Delivery} from '../Screens/Index';

const Stack = createStackNavigator();

const DeliveryNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Menu" component={Delivery} />
  </Stack.Navigator>
);

export default DeliveryNavigator;
