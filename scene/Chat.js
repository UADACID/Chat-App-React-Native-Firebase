import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Chat extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Chatting',
    headerRight:
      <View style={{marginRight:15}}>
        <Ionicons onPress={()=>navigation.navigate('AddChat',{ title: 'Search' })} name='md-add-circle' size={26} color='#446CB3'/>
      </View>,
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons name={focused ? 'ios-chatboxes' : 'ios-chatboxes-outline'}
        size={26}
        style={{ color: tintColor }}/>
      ),
  });

  render (){
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text onPress={()=>navigate('Message',{ user: 'Pratama' })}>
          Chat View
        </Text>
      </View>
    )
  }
}
