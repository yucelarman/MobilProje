import React ,{Component} from 'react';
import {
  View, Text, FlatList, ActivityIndicator,StyleSheet,Platform,TouchableOpacity
} from 'react-native';
import { ListItem, SearchBar } from "react-native-elements";
import * as firebase from 'firebase';

export default class HomeHaberScreen extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      headerHidden: false,
      loading: true,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    };
  }
  
  componentDidMount() {
    firebase.database().ref('haberBaslık')
    .once('value', snapshot => {
      var data ="";

      snapshot.forEach((doc)=>{
        
        this.state.data.push({"id":doc.toJSON().id.toString(),"tarih":doc.toJSON().haberBaslık,"ip":doc.toJSON().haberBaslık});
        this.setState({loading:false})
        console.log(doc);
      })
      
      
      
    });
    
  }

  
  

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  

 

  render() {
    const {loading} = this.state;

  return (
    
    
      <View style={styles.container}>
      
      {
        loading && <Text>loading...</Text>
      }
      
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => 
            <TouchableOpacity onPress={()=>
              {
                this.props.navigation.navigate('Details' , {id : item.id}); 
              }
            }>
              <ListItem
                roundAvatar
                title={<View style={styles.subtitleView2}>
                <Text style={styles.ratingText2}>Haber Başlığı : </Text>
                <Text style={styles.ratingText2}>{`${item.tarih}`}</Text>
              </View>}
                subtitle={<View style={styles.subtitleView}>
                <Text style={styles.ratingText}>Tarih : </Text>
                <Text style={styles.ratingText}>{item.ip}</Text>
              </View>}
                containerStyle={{ borderBottomWidth: 0 }}
              />
            </TouchableOpacity>
          }
            keyExtractor={item => item.id}
            ItemSeparatorComponent={this.renderSeparator}
           
            ListFooterComponent={this.renderFooter}
            
            refreshing={this.state.refreshing}
           
          />
      </View>
    
    
  );
  };
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  subtitleView: {
    flexDirection: 'row',
    paddingTop: 2,
    flex: 1, 
    flexDirection: 'row'
  },
  subtitleView2: {
    flexDirection: 'row',
    paddingTop: 2,
    flex: 1, 
    flexDirection: 'row',
  },
  ratingText: {
    fontStyle:'italic'
  },
  ratingText2: {
    fontSize : 16,
    fontWeight : 'bold',
    color : '#00b5ec'
  }
});
