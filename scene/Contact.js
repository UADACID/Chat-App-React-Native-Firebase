import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Contact extends Component {

  static navigationOptions = {
    title: 'Contact',
    tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-people' : 'ios-people-outline'}
      size={26}
      style={{ color: tintColor }}/>
  ),
  };

  componentDidMount(){
    // alert("wkwkwkkw")
  }

  render (){
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text onPress={()=>navigate('Register',{ user: 'Pratama' })}>
          Contact View
        </Text>
      </View>
    )
  }
}
