import React ,{Component} from 'react';
import {
  View, Text, FlatList, ActivityIndicator,StyleSheet,Platform
} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import { SafeAreaView } from 'react-navigation';
import HomeHaberScreen from '../screens/HomeHaberScreen';
import HaberDetayScreen from '../screens/HaberDetayScreen';

import {createStackNavigator} from  'react-navigation-stack';

import { createAppContainer } from 'react-navigation'; // Version can be specified in package.json

const HomeNavigator = createStackNavigator({
  Home :{
    screen: HomeHaberScreen,
    navigationOptions:{
      header:null,
    }
  }
  ,
  Details: {
    screen: HaberDetayScreen,
    navigationOptions:{
      header:null,
    },
  }

});

HomeNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  let swipeEnabled = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
    swipeEnabled = false;
  }

  return {
    tabBarVisible,
    swipeEnabled,
  };
};
export default HomeNavigator;
