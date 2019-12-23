/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import AppNavigator from './navigation/AppNavigator';
import * as firebase from 'firebase';
import ApiKeys from './constants/ApiKeys';
import {Provider} from 'mobx-react';
import store from './store';

import { Platform, StatusBar, StyleSheet, View } from 'react-native';


export default class App extends Component{

  componentDidMount(){
    if(!firebase.apps.length){firebase.initializeApp(ApiKeys.FirebaseConfig)};   


  }

  render() {
    return (
      
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
