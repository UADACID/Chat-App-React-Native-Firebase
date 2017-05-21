import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Contact extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Contact',
    headerRight:
      <View style={{marginRight:15}}>
        <Ionicons onPress={()=>navigation.navigate('Contact')} name='ios-person-add' size={26} color='#446CB3'/>
      </View>,
    tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-people' : 'ios-people-outline'}
          size={26}
          style={{ color: tintColor }}/>
      ),
  });

  componentDidMount(){
    // alert("wkwkwkkw")
  }

  render (){
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text onPress={()=>navigate('Message',{ user: 'Pratama' })}>
          Contact View
        </Text>
      </View>
    )
  }
}
