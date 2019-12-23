import React ,{Component} from 'react';
import {
  View, Text, FlatList, ActivityIndicator,StyleSheet,Platform
} from 'react-native';
import { ListItem, SearchBar } from "react-native-elements";
import MyHeader from '../components/MyHeader';

import { MonoText } from '../components/StyledText';
import { Container } from 'native-base';
import HomeStackNavigator from '../navigation/HomeStackNavigator'


export default class HomeScreen extends Component {
  static router = HomeStackNavigator.router;
  render(){
    return (
        <Container>
          <MyHeader navigation={this.props.navigation} name="Haber Portalı" HomeIcon={true}/>
          <HomeStackNavigator navigation={this.props.navigation} />
        </Container>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
