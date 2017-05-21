import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationActions } from 'react-navigation';
import { Input, Item, } from 'native-base';
var {height, width} = Dimensions.get('window');

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
    const { navigation } = this.props;
    return (
      <KeyboardAvoidingView behavior={'padding'} style={{flex:1}}>
      <View style={{flex:1}}>

        <View style={[{borderWidth:1}, Platform.OS == 'ios' ? {flex:2.5} : {flex:2}]}>
          <Text>
            asdasd
          </Text>
        </View>
        <View style={{flex:.2, borderWidth:1, flexDirection:'row'}}>
          <Item
            style={{height:40, width:width-60, backgroundColor:'#FFF', marginRight:5, marginLeft:5}}
            rounded>
              <Input
                style={{marginLeft:10}}
                placeholderTextColor='#DADFE1'
                placeholder='Search chat'/>
          </Item>
          <TouchableOpacity style={{justifyContent:'center'}}>
            <Text style={{color:'#446CB3'}}>
              Send
            </Text>
          </TouchableOpacity>
        </View>

      </View>
        </KeyboardAvoidingView>
    )
  }
}
