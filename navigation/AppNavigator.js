import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import MainDrawerNavigator from './MainDrawerNavigator';

export default createAppContainer(
  createSwitchNavigator({
    

    
    Login: LoginScreen,
    Main: MainDrawerNavigator


  })
);
