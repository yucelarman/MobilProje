import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, View,TextInput,KeyboardAvoidingView,Dimensions,Picker,Platform,YellowBox,LayoutAnimation,FlatList } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'
import PropTypes from 'prop-types'

import BaseIcon from './Icon'

import InfoText from './InfoText'


import {Button} from 'react-native-elements';
import { Footer, FooterTab } from 'native-base';
import { Container } from 'native-base';

import Icon from 'react-native-vector-icons/MaterialIcons';


const textinputwidth = Dimensions.get('window').width;
const keyboardheight = Dimensions.get('window').height

const styles = StyleSheet.create({

  scroll: {
    backgroundColor: 'white',
  },
  userRow: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
  },
  userImage: {
    marginRight: 12,
  },
  listItemContainer: {
    height: 55,
    borderWidth: 0.5,
    borderColor: '#ECECEC',
  },
  usTextInputStyle: {
    height: 40,
    width: textinputwidth*0.45
  },
  usTextStyle: {
    marginLeft:-20,
    fontStyle:'italic'
  },
  TextViewStyle: {
    flex: 1,
    marginLeft: -20
  },
  TextStyle: {
    fontStyle:'italic',
    textAlign: 'left'
  },
  orderSaveButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00b5ec',
    width: textinputwidth,
    height: keyboardheight*0.09,
  },
  orderButtonText: {
    color: '#fff',
    textAlign: 'center',
    paddingBottom: 3,
    marginHorizontal: 10,
  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 15,
    marginLeft:30,
  },
  email: {
    color: 'red',
    marginLeft:30
  },
  flatview: {
    justifyContent: 'center',
    paddingTop: 10,
    borderRadius: 2,
  },
})

class SettingsScreen extends Component {
  static propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    navigation: PropTypes.object.isRequired,
    email: PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          "name": "Computer One",
          "email": "192.168.1.1"
      },
      {
          "name": "Computer Two",
          "email": "192.168.100.100"
      },
      ],
      isLoading: false,
      email: 'ugursenol@gmail.com',
      password: 'Qwer1234.',
      confirmationPassword: 'Qwer1234.',
      phoneNumberValid: true,
      emailValid: true,
      passwordValid: true,
      confirmationPasswordValid: true,
    };

    this.validateEmail = this.validateEmail.bind(this);
    this.validatePhoneNumber = this.validatePhoneNumber.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validateConfirmationPassword = this.validateConfirmationPassword.bind(this);
    this.signup = this.signup.bind(this);
  }

  async signup() {
    this.setState({isLoading: true});
    LayoutAnimation.easeInEaseOut();

    const emailValid = this.validateEmail();
    const passwordValid = this.validatePassword();
    const confirmationPasswordValid = this.validateConfirmationPassword();
    if (
      emailValid &&
      passwordValid &&
      confirmationPasswordValid &&
      this.state.selectedType !== null
    ) {
      alert("Bura tamam\n" +this.state.genderType)
    }
    else
      alert("Validation Error")
  }

  validatePhoneNumber() {
    const { phoneNumber } = this.state;
    const phoneNumberValid = phoneNumber.length == 10;
    LayoutAnimation.easeInEaseOut();
    this.setState({ phoneNumberValid });
    phoneNumberValid ;
    return phoneNumberValid;
  }

  validateUserName() {
    const { userName } = this.state;
    const userNameValid = userName.length > 1;
    LayoutAnimation.easeInEaseOut();
    this.setState({ userNameValid });
    userNameValid ;
    return userNameValid;
  }

  validateUserLastName() {
    const { userLastName } = this.state;
    const userLastNameValid = userLastName.length > 1;
    LayoutAnimation.easeInEaseOut();
    this.setState({ userLastNameValid });
    userLastNameValid ;
    return userLastNameValid;
  }

  validateGenderType() {
    const { genderType } = this.state;
    const genderTypeValid = genderType.length > 0;
    LayoutAnimation.easeInEaseOut();
    this.setState({ genderTypeValid });
    genderTypeValid ;
    return genderTypeValid;
  }

  validateEmail() {
    const { email } = this.state;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValid = re.test(email);
    LayoutAnimation.easeInEaseOut();
    this.setState({ emailValid });
    emailValid ;
    return emailValid;
  }

  validatePassword() {
    const { password } = this.state;
    const passwordValid = password.length >= 8;
    LayoutAnimation.easeInEaseOut();
    this.setState({ passwordValid });
    passwordValid ;
    return passwordValid;
  }

  validateConfirmationPassword() {
    const { password, confirmationPassword } = this.state;
    const confirmationPasswordValid = password === confirmationPassword;
    LayoutAnimation.easeInEaseOut();
    this.setState({ confirmationPasswordValid });
    confirmationPasswordValid ;
    return confirmationPasswordValid;
  }


  render() {
    const { avatar, name } = this.props
    const {
      email,

    } = this.state;
    return (
      <Container>
      <ScrollView style={styles.scroll}
        keyboardShouldPersistTaps="handled"
      >
        <KeyboardAvoidingView behavior="position" style={{ flex: -1 ,justifyContent: 'space-between'}}
        keyboardVerticalOffset={keyboardheight*0.32*-1}
        >
          <View style={styles.userRow}>
              <View style={styles.userImage}>
                <Avatar
                  rounded
                  size="large"
                  source={{
                    uri: avatar,
                  }}
                />
              </View>
              <View>
                <Text style={{ fontSize: 16 }}>{name}</Text>
                <Text
                  style={{
                    color: 'gray',
                    fontSize: 16,
                  }}
                >
                  {email}
                </Text>
              </View>
            </View>

          <InfoText text="Hesap Bilgilerim  " />
          <View>

            <ListItem
              title="Kullanıcı Adı"
              titleStyle={styles.usTextStyle}
              containerStyle={styles.listItemContainer}
              rightElement={
                <View style={styles.TextViewStyle}>
                  <Text style={styles.TextStyle}>K.ADI</Text>
                </View>
              }
              rightTitleStyle={{ fontSize: 15 }}
              containerStyle={styles.listItemContainer}
              leftIcon={
                <BaseIcon
                  containerStyle={{ backgroundColor: '#A4C8F0' }}
                  icon={{
                    type: 'font-awesome',
                    name: 'user',
                  }}
                />
              }

            />

            <ListItem
              title="Şifre"
              titleStyle={styles.usTextStyle}
              containerStyle={styles.listItemContainer}
              rightElement={
                <View style={styles.TextViewStyle}>
                  <Text style={styles.TextStyle}>********</Text>
                </View>
              }
              rightTitleStyle={{ fontSize: 15 }}
              containerStyle={styles.listItemContainer}
              leftIcon={
                <BaseIcon
                  containerStyle={{ backgroundColor: '#C4C8F0' }}
                  icon={{
                    type: 'font-awesome',
                    name: 'unlock-alt',
                  }}
                />
              }

            />

            <ListItem
              title="E-Posta"
              titleStyle={styles.usTextStyle}
              containerStyle={styles.listItemContainer}
              rightElement={
                <View style={styles.TextViewStyle}>
                  <Text style={styles.TextStyle}>email@a.com</Text>
                </View>
              }
              rightTitleStyle={{ fontSize: 15 }}
              containerStyle={styles.listItemContainer}
              leftIcon={
                <BaseIcon
                  containerStyle={{ backgroundColor: '#C6C7C6' }}
                  icon={{
                    type: 'font-awesome',
                    name: 'envelope',
                  }}
                />
              }

            />

            <ListItem
              title="Rutbe"
              titleStyle={styles.usTextStyle}
              containerStyle={styles.listItemContainer}
              rightElement={
                <View style={styles.TextViewStyle}>
                  <Text style={styles.TextStyle}>player</Text>
                </View>
              }
              rightTitleStyle={{ fontSize: 15 }}
              containerStyle={styles.listItemContainer}
              leftIcon={
                <BaseIcon
                  containerStyle={{ backgroundColor: '#C47EFF' }}
                  icon={{
                    type: 'font-awesome',
                    name: 'level-up',
                  }}
                />
              }

            />

            <ListItem
              title="IP adres"
              titleStyle={styles.usTextStyle}
              containerStyle={styles.listItemContainer}
              rightElement={
                <View style={styles.TextViewStyle}>
                  <Text style={styles.TextStyle}>185.214.189.211</Text>
                </View>
              }
              rightTitleStyle={{ fontSize: 15 }}
              containerStyle={styles.listItemContainer}
              leftIcon={
                <BaseIcon
                  containerStyle={{ backgroundColor: '#C6C7C6' }}
                  icon={{
                    type: 'font-awesome',
                    name: 'address-card',
                  }}
                />
              }

            />

            <ListItem
              title="Kc"
              titleStyle={styles.usTextStyle}
              containerStyle={styles.listItemContainer}
              rightElement={
                <View style={styles.TextViewStyle}>
                  <Text style={styles.TextStyle}>876</Text>
                </View>
              }
              rightTitleStyle={{ fontSize: 15 }}
              containerStyle={styles.listItemContainer}
              leftIcon={
                <BaseIcon
                  containerStyle={{ backgroundColor: '#C6C7C6' }}
                  icon={{
                    type: 'font-awesome',
                    name: 'crosshairs',
                  }}
                />
              }

            />

            <ListItem
              title="Referans Linkiniz"
              titleStyle={styles.usTextStyle}
              containerStyle={styles.listItemContainer}
              rightElement={
                <View style={styles.TextViewStyle}>
                  <Text style={styles.TextStyle}>afterko.com/?ref=11650</Text>
                </View>
              }
              rightTitleStyle={{ fontSize: 15 }}
              containerStyle={styles.listItemContainer}
              leftIcon={
                <BaseIcon
                  containerStyle={{ backgroundColor: '#C6C7C6' }}
                  icon={{
                    type: 'font-awesome',
                    name: 'link',
                  }}
                />
              }

            />

          </View>
          <InfoText text="Son Giriş Tarihi " />
          <View>
              <FlatList
              data={this.state.users}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) =>
              <View style={styles.flatview}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.email}>{item.email}</Text>
              </View>
              }
              keyExtractor={item => item.email}
              />
          </View>
          </KeyboardAvoidingView>
        </ScrollView>
        <Footer>
          <FooterTab>
          <View style={{flexDirection: 'row'}}>

            <Button
                buttonStyle={styles.orderSaveButton}
                title="Kaydet"
                titleStyle={styles.orderButtonText}
                onPress={() => this.signup()}
                icon={<Icon name="save" size={24} color="#fff"/>}
                iconContainerStyle={{marginHorizontal: 5}}
            />
          </View>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

export default SettingsScreen
