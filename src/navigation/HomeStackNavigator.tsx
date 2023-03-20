import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeStackNavigatorParams} from '../types';
import {Home} from '../screens';

const Stack = createNativeStackNavigator<HomeStackNavigatorParams>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
