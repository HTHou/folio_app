import React from 'react';
import { Platform, StatusBar, StyleSheet, View, AppRegistry } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import RootNavigation from './navigation/RootNavigation';
import MainTab from './navigation/MainTabNavigator';
import Login from './screens/LoginScreen';

import { StackNavigator } from 'react-navigation';

export default StackNavigator({
  Root: { screen: RootNavigation },
  Login: { screen: Login },
  MainTab: { screen: MainTab },
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
    initialRouteParams: {
      isLoggedIn: false,
      token: '',
    }
  }
);

