import React from 'react';
import { Platform ,Dimensions, ScrollView, Image, View } from 'react-native';



import {createDrawerNavigator,DrawerItems} from 'react-navigation-drawer';
import {
   SafeAreaView
} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import Logout from '../screens/Logout';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const CustomDrawerContentComponent = props => (
  <View>
    <ScrollView>
      <SafeAreaView style={{flex: 1}} forceInset={{ top: 'always', horizontal: 'never' }}>
        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
  </View>
);

export default createDrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions:{
      header:null,
    }
  },
  
  Çıkış: {
    screen: Logout,
    navigationOptions:{
      header:null,
    }
  }
},{
    drawerType: 'push-screen',
    drawerWidth:SCREEN_WIDTH*0.7,
    contentComponent: CustomDrawerContentComponent
});
