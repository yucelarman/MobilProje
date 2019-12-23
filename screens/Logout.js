import React, {Component} from 'react';
import {StyleSheet,ActivityIndicator,AsyncStorage} from 'react-native';
import { SwitchActions, NavigationActions } from 'react-navigation';


export default class Logo extends Component {

    async componentDidMount() {
        try {


              await AsyncStorage.clear();
              var deger=await AsyncStorage.getItem('token')
              console.log(deger);
              this.props.navigation.navigate('Login');
            
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
