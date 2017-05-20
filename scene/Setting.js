import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Setting extends Component {

  static navigationOptions = {
    title: 'Setting',
    tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-settings' : 'ios-settings-outline'}
      size={26}
      style={{ color: tintColor }}/>
  ),
  };

  render (){
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text onPress={()=>navigate('Register',{ user: 'Pratama' })}>
          Setting View
        </Text>
      </View>
    )
  }
}
