import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  Platform,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationActions } from 'react-navigation';
import { Input, Item, } from 'native-base';
var {height, width} = Dimensions.get('window');

export default class Message extends Component {

  constructor(){
    super();
    this.heightIos = height-110;
    this.state = {
      listHeight: this.heightIos,

    };
    this.handleBack = this.handleBack.bind(this);
    this._keyboardDidShow = this._keyboardDidShow.bind(this);
    this._keyboardDidHide = this._keyboardDidHide.bind(this);
  }

  componentDidMount(){
    this.props.navigation.setParams({handleBack:this.handleBack})
  }

  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow (e) {
    let keyBoardHeight = e.endCoordinates.height;
    this.setState({
      listHeight:this.state.listHeight-keyBoardHeight,
    })

  }

  _keyboardDidHide () {
    this.setState({
      listHeight:this.heightIos,
    })
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

  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
    headerLeft:
      <View style={{marginLeft:15}}>
        <Icon
          onPress={navigation.state.params.handleBack}
          name='keyboard-arrow-left' size={30} color='#446CB3'/>
      </View>,
  });

  render (){
    const { navigation } = this.props;
    let currentHeight = this.state.listHeight;
    return (
      <View style={{flex:1}}>
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? "padding" : false} style={{flex:1}}>
          <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View style={[Platform.OS == 'ios' ? {height: currentHeight} : {flex:2}]}>
              <Text>
                asdasd
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <View style={{height:50, flexDirection:'row'}}>
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
        </KeyboardAvoidingView>
      </View>
    )
  }
}
