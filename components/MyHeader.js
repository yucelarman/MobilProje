import React, { Component } from 'react';
import { Dimensions, StyleSheet,View,Text} from 'react-native';
import { Header , Icon, Right,Left,Body,Title } from 'native-base';
import {Button} from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
export class MyHeader extends Component {
    constructor(props){
        super(props);
        this.state = {
            isIconVisible: true,
        }
    }
  render() {
    return this.props.headerHidden ?(null):(
        <Header style={styles.headerCotent} >
               <Left>
               <Button  onPress={() => this.props.navigation.toggleDrawer()}
                    buttonStyle={{backgroundColor: '#00b5ec'}}
                    icon={<MatIcon style={styles.headerImage} size={24} name='menu' color="#fff"/>}
                    />

                </Left>
                <Body>
                    <Title style={styles.headerText}>{this.props.name}</Title>
                </Body>
            
      </Header>
    );
  }
}

export default withNavigation(MyHeader)
const styles = StyleSheet.create({
    headerCotent: {
        backgroundColor: '#00b5ec'
    },
    headerImage:{
        color: '#fff'
    },
    headerText:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        
    },
    headerView: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        alignItems: 'center',
        marginLeft: SCREEN_WIDTH/8
        
    }
});