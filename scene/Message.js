import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationActions } from 'react-navigation';

export default class Message extends Component {

  constructor(){
    super();
    this.state = {

    };
    this.handleBack = this.handleBack.bind(this);
  }

  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
    headerLeft:
      <View style={{marginLeft:15}}>
        <Icon
          onPress={navigation.state.params.handleBack}
          name='keyboard-arrow-left' size={30} color='#446CB3'/>
      </View>,
  });

  componentDidMount(){
    this.props.navigation.setParams({handleBack:this.handleBack})
  }

  handleBack(){
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'TabView'})
      ]
    })
    this.props.navigation.dispatch(resetAction)
  }

  render (){
    const { navigate } = this.props.navigation;
    return (
      <Text onPress={()=>this.handleBack()}>
        Hai Pratama
      </Text>
    )
  }
}
