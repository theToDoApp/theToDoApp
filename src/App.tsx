import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {HomeStackNavigator} from './navigation';
import {SideMenu} from './components';
import {AppStateProvider} from './contexts/AppStateContext';

export const App = () => {
  return (
    <AppStateProvider>
      <SideMenu />
      <NavigationContainer>
        <HomeStackNavigator />
      </NavigationContainer>
    </AppStateProvider>
  );
};
