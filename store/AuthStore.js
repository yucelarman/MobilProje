import {observable, action} from 'mobx';

import { AsyncStorage } from 'react-native';

class AuthStore {

    @observable token = null; 
    @observable username = null;
    @observable password = null;

    @action async saveToken(token,username,password){
        try {
           AsyncStorage.setItem('token',token);
           AsyncStorage.setItem('username',username);
           AsyncStorage.setItem('password',password);
           await this.setupAuth();
        } catch (e) {
            console.log(e);
        }
    }

    @action async removeToken(){
        try {
           AsyncStorage.removeItem('token');
           AsyncStorage.removeItem('username');
           AsyncStorage.removeItem('password');
           this.token = null;
           await this.setupAuth();
        } catch (e) {
            console.log(e);
        }
    }


    @action async setupAuth(){
        await this.getToken();
    }


    @action async getToken(){
        try {
            
           const token = await AsyncStorage.getItem('token') ;
           if(!token) {
               
               return false;
           }
           
           this.token = token;
           

        } catch (e) {
            console.log(e);
        }
    }

}

export default new AuthStore();