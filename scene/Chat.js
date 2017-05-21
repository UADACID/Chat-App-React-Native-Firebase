import React, { Component } from 'react';
import {
  View,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ListItem, Left, Body, Right, Text, Thumbnail } from 'native-base';
import ListChat from '../data/ListChat';
import InputSearch from '../component/InputSearch';
var faker = require('faker');

export default class Chat extends Component {

  constructor(){
    super();
    this.limiter = 10;
    this.state = {
      limit : this.limiter,
      fakeData : [],
    }

    this._onEndScroll = this._onEndScroll.bind(this);
  }

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

  componentWillMount(){
    // console.log(faker.name.findName());
    for (var i = 0; i < 100; i++) {
      ListChat.push({
        username:'Tester'+i
      })
    }

    ListChat.forEach((item)=>{
      this.state.fakeData.push({
        avatar: faker.image.avatar(),
        username: faker.name.findName(),
        lastMessage: faker.lorem.words()
      })
    })
  }

  _keyExtractor = (item, index) => index;

  _onEndScroll = ({distanceFromEnd: number}) => (
    // console.log(number)
    this.setState({
      limit:this.state.limit+this.state.limit
    })
  )



  renderRow = ({item, index}) => (
    <ListItem avatar onPress={()=>this.props.navigation.navigate('Message',{ user: item.username })}>
      <Left>
          <Thumbnail source={{uri:item.avatar}} />
      </Left>
      <Body>
          <Text>{item.username}</Text>
          <Text note>{item.lastMessage}...</Text>
      </Body>
      <Right>
          <Text note>3:43 pm</Text>
      </Right>
    </ListItem>
  );

  render (){
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex:1, backgroundColor:'#FFF'}}>
        <FlatList
          data={this.state.fakeData.slice(0, this.state.limit)}
          renderItem={this.renderRow}
          keyExtractor={this._keyExtractor}
          ListHeaderComponent={InputSearch}
          onEndReached={this._onEndScroll}
        />
      </View>
    )
  }
}
