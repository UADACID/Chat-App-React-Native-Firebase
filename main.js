import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class Main extends Component {

  static navigationOptions = {
    title: 'Welcome',
  };

  render (){
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text onPress={()=>navigate('Second',{ user: 'Pratama' })}>
          Hello World
        </Text>
      </View>
    )
  }
}

class Second extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user} on Here`,
  });

  render (){
    const { params } = this.props.navigation.state;
    return (
      <Text>
        Hello {params.user}
      </Text>
    )
  }
}

const RouteApp = StackNavigator({
  Home    : { screen: Main },
  Second  : { screen: Second },
});

export default RouteApp;
