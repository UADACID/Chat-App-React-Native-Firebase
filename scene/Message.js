import React, { Component } from 'react';
import {
  View,
  // Text,
  Dimensions,
  Platform,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationActions } from 'react-navigation';
import { Input, Item, ListItem, Left, Body, Right, Text, Thumbnail } from 'native-base';
import ListChat from '../data/ListChat';
var {height, width} = Dimensions.get('window');
var faker = require('faker');

export default class Message extends Component {

  constructor(){
    super();
    this.heightIos = height-110;

    this.state = {
      listHeight: this.heightIos,
      fakeData : [],
      limit:100
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

    // var data = [...Array(15).keys()];
    // console.log(data);
    // console.log(faker.name.findName());
    for (var i = 0; i < 20; i++) {
      ListChat.push({
        username:'Tester'+i
      })
    }

    ListChat.forEach((item)=>{
      this.state.fakeData.push({
        avatar: faker.image.avatar(),
        username: faker.name.findName(),
        lastMessage: faker.lorem.lines(),
        isCurentLogin: faker.random.boolean(),
      })
    })
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

  _keyExtractor = (item, index) => index;

  _renderRow = ({item, index}) => (
    <ListItem style={{ transform: [{ scaleY: -1 }]}}>
      <Left>
          {item.isCurentLogin ? <Text note>3:43 pm</Text> : <Thumbnail style={{height:30, width:30, borderRadius:15}} source={{uri:item.avatar}} /> }
      </Left>
      <Body style={item.isCurentLogin ? {alignItems:'flex-end'} : {alignItems:'flex-start'}}>
        <View style={[{padding:5, borderRadius:15}, item.isCurentLogin ? {backgroundColor:'#52B3D9', borderTopRightRadius:0} : {backgroundColor:'#C5EFF7', borderTopLeftRadius:0}]}>
          <Text style={item.isCurentLogin ? {textAlign:'right', color:'#FFF'} : {textAlign:'left', color:'#000'}}>{item.lastMessage}...</Text>
        </View>
      </Body>
      <Right>
          {item.isCurentLogin ? <Thumbnail style={{height:30, width:30, borderRadius:15}} source={{uri:item.avatar}} /> : <Text note>3:43 pm</Text> }
      </Right>
    </ListItem>
  );

  render (){
    const { navigation } = this.props;
    let currentHeight = this.state.listHeight;
    return (
      <View style={{flex:1, backgroundColor:'#FFF'}}>
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? "padding" : false} style={{flex:1}}>
          <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View style={[Platform.OS == 'ios' ? {height: currentHeight} : {flex:2}]}>
              <FlatList
                data={this.state.fakeData.slice(0, this.state.limit)}
                renderItem={this._renderRow}
                keyExtractor={this._keyExtractor}
                style={{  transform: [{ scaleY: -1 }] }}
              />
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
