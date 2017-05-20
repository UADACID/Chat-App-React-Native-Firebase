import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

export default class Register extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user} on Here`,
  });

  render (){
    const { navigate } = this.props.navigation;
    return (
      <Text onPress={()=>navigate('TabView')}>
        Hello
      </Text>
    )
  }
}
