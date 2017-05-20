import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import store from '../store';

export default class Login extends Component {

  static navigationOptions = {
    title: 'Login View',
  };

  handleLogin(){
    store.setLogin();
  }

  render (){
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <TouchableOpacity
          onPress={()=>this.handleLogin()}
          style={{borderRadius:10, backgroundColor:'#c0392b', padding:10}}>
          <Text style={{color:'#FFF'}}>
            do Login
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
