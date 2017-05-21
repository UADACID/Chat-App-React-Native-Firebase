import React, { Component } from 'react';
import {
  View,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Input, Item, } from 'native-base';


export default class InputSearch extends Component {

  render(){
    return (
      <View style={{height:50, backgroundColor:Platform.OS == 'ios' ? '#446CB3' : '#FFF', justifyContent:'center'}}>
        <Item
          style={{height:40, backgroundColor:'#FFF', marginRight:5, marginLeft:5}}
          rounded>
            <Input
              style={{marginLeft:10}}
              placeholderTextColor='#DADFE1'
              placeholder='Search chat'/>
            <Ionicons name='ios-close' style={{marginRight:15}} size={30} color='#000'/>
        </Item>
      </View>
    )
  }
}
