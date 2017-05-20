import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Chat extends Component {

  static navigationOptions = {
    title: 'Chat List',
    headerRight: <Text>Add</Text>,
    tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons name={focused ? 'ios-chatboxes' : 'ios-chatboxes-outline'}
      size={26}
      style={{ color: tintColor }}/>
    ),
    showIcon:true
  };

  render (){
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text onPress={()=>navigate('Register',{ user: 'Pratama' })}>
          Chat View
        </Text>
      </View>
    )
  }
}
