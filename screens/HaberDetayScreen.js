import React from 'react';
import {StyleSheet, View, Text, ScrollView, Dimensions, Linking} from 'react-native';
import HTML from 'react-native-render-html';
import * as firebase from 'firebase';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;


const tagsStyles = {
  
  p: {
    fontSize: 16,
    marginBottom: 6
  }
}


const ignoredStyles = ['width', 'height'];





export default class App extends React.Component {
  state={
    htmlContent:null,
    id:null
  }

  getContent(){
    firebase.database().ref('Haberler')
    .once('value', snapshot => {
     
      snapshot.forEach((doc)=>{
          
          console.log(this.state.id);
					if(doc.toJSON().id.toString() ===this.state.id){
           
            this.setState({htmlContent:doc.toJSON().text});          
					}			

      })
    });
    
  }
  componentDidMount(){
   
    this.setState({id:this.props.navigation.state.params.id})
    this.getContent();
  }

  //Link'e tıklanıldığında çalışan fonksiyon
  onLinkPress = (evt, href, htmlAttribs) => {
    if(href == '/news'){
      this.props.navigation.goBack();
    }
    else{
      Linking.openURL(href);
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <HTML
          html={this.state.htmlContent}
          imagesMaxWidth={SCREEN_WIDTH}
          ignoredStyles={ignoredStyles}
          tagsStyles={tagsStyles}
          onLinkPress={this.onLinkPress}
          />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
