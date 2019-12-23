import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';
import qs from 'querystring';
import { AsyncStorage } from 'react-native';

import axios from 'axios';
import AuthStore from '../store/AuthStore';
import {Observer} from 'mobx-react';

@Observer
export default class LoginView extends Component {

  constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
    }
  }

  async componentDidMount(){
    
    AsyncStorage.getItem('token').then((deger)=>{
      if(deger!=null)
        this.props.navigation.navigate('Main');   
    });
    

  }
  async storeData(response){

    AuthStore.saveToken(JSON.stringify(response),this.state.email,this.state.password)
    

  }

  async getToken (){
    const {data} = await axios.post("http://185.122.201.76:8081/Token");
    console.log("{data}");
    console.log({data});
  }

  onClickListener = async (viewId) => {

   const requestBody ={

    username: this.state.email,
    password: this.state.password,
    grant_type:"password"
   }
   
    await axios.post("http://185.122.201.76:8081/Token",qs.stringify(requestBody),{headers: {
          'Content-Type': 'application/x-www-form-urlencoded',},
      })
      .then((response) => {
          console.log(response);
          if(response.data.access_token!=null)
          {
            console.log("this.state.email");
            console.log("this.state.password");
            this.storeData(response.data);  
            this.props.navigation.navigate('Main');            
          }
          else{
              alert("Hatalı Giriş");
              
          }
      })
      .catch((error) => {
          alert("error " + error);
          this.setState({isLoading: false});
      });
    
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});
