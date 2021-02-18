import React from 'react';
import {Platform} from 'react-native';

import ProductsOverviewScreen from '../screens/shop/dashboard';

import Colors from '../constants/Colors';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//Define a global color for toolbar
global.backgroundColor = '#176abf';
const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.green_color : '',
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.green_color,
};

// Sidemenu Dashboard
const StackNavigator = createStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator screenOptions={{gestureEnabled: false}}>
        <StackNavigator.Screen
          name="Shop"
          component={ProductsOverviewScreen}
          options={{headerShown: false, gesturesEnabled: false}}
        />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
