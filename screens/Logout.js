import React, {Component} from 'react';
import {StyleSheet,ActivityIndicator,AsyncStorage} from 'react-native';
import { SwitchActions, NavigationActions } from 'react-navigation';

//https://github.com/aryaminus/RN-login-register-screen
export default class Logo extends Component {

    async componentDidMount() {
        try {


              await AsyncStorage.clear();
              var deger=await AsyncStorage.getItem('token')
              console.log(deger);
              this.props.navigation.navigate('Login');
            /*const resetAction = StackActions.reset({
            index: 0,
            key: null,
            actions: [NavigationActions.navigate({ routeName: 'Login' })],
          });
          this.props.navigation.dispatch(resetAction);*/
        } catch(error) {
          alert("Something went wrong" + error);
        }

      }
    static navigationOptions = {
        header: null,
      };
    render() {
      return (
        <ActivityIndicator color="#fff"/>
      );
    }
  }
