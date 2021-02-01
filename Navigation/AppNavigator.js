import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeNavigator from './HomeNavigation';
import MenuNavigator from './MenuNavigation';
import UserNavigator from './UserNavigator';
import DeliveryNavigator from './MapNavigation';
import {COLORS, icons} from '../constants/index';
import Svg, {Path} from 'react-native-svg';

const Tab = createBottomTabNavigator();

//custom Tab bar

const Tabbarcustombutton = ({accessibilityState, children, onPress}) => {
  var isSelected = accessibilityState.selected;

  if (isSelected) {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={{flexDirection: 'row', position: 'absolute', top: 0}}>
          <View style={{flex: 1, backgroundColor: COLORS.white}}></View>
          <Svg width={75} height={61} viewBox="0 0 75 61">
            <Path
              d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
              fill={COLORS.white}
            />
          </Svg>
          <View style={{flex: 1, backgroundColor: COLORS.white}}></View>
        </View>

        <TouchableOpacity
          style={{
            top: -22.5,
            justifyContent: 'center',
            alignItems: 'center',
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: COLORS.white,
          }}
          onPress={onPress}>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          height: 60,
          backgroundColor: COLORS.white,
        }}
        activeOpacity={1}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  }
};

const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: COLORS.primary,
      showLabel: false,
      style: {
        backgroundColor: 'transparent',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        elevation: 0,
      },
    }}>
    <Tab.Screen
      component={HomeNavigator}
      name="Home"
      options={{
        tabBarIcon: ({focused}) => (
          <Image
            source={icons.cutlery}
            resizeMode="contain"
            style={{
              width: 25,
              height: 25,
              tintColor: focused ? COLORS.primary : COLORS.secondary,
            }}
          />
        ),
        tabBarButton: (props) => <Tabbarcustombutton {...props} />,
      }}
    />

    <Tab.Screen
      component={MenuNavigator}
      name="Menu"
      options={{
        tabBarIcon: ({focused}) => (
          <Image
            source={icons.search}
            resizeMode="contain"
            style={{
              width: 25,
              height: 25,
              tintColor: focused ? COLORS.primary : COLORS.secondary,
            }}
          />
        ),
        tabBarButton: (props) => <Tabbarcustombutton {...props} />,
      }}
    />

    <Tab.Screen
      component={UserNavigator}
      name="like"
      options={{
        tabBarIcon: ({focused}) => (
          <Image
            source={icons.like}
            resizeMode="contain"
            style={{
              width: 25,
              height: 25,
              tintColor: focused ? COLORS.primary : COLORS.secondary,
            }}
          />
        ),
        tabBarButton: (props) => <Tabbarcustombutton {...props} />,
      }}
    />

    <Tab.Screen
      component={UserNavigator}
      name="user"
      options={{
        tabBarIcon: ({focused}) => (
          <Image
            source={icons.user}
            resizeMode="contain"
            style={{
              width: 25,
              height: 25,
              tintColor: focused ? COLORS.primary : COLORS.secondary,
            }}
          />
        ),
        tabBarButton: (props) => <Tabbarcustombutton {...props} />,
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
