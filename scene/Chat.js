import React, { Component } from 'react';
import {
  View,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ListItem, Left, Body, Right, Text, Thumbnail } from 'native-base';
import ListChat from '../data/ListChat';
import InputSearch from '../component/InputSearch';

export default class Chat extends Component {

  constructor(){
    super();
    this.limiter = 10;
    this.state = {
      limit : this.limiter
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
    for (var i = 0; i < 1000; i++) {
      ListChat.push({
        username:'Tester'+i
      })
    }
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
          <Thumbnail source={{uri:'https://gooddonegreat.com/app/img/placeholders/avatar-150x150.png'}} />
      </Left>
      <Body>
          <Text>{item.username}</Text>
          <Text note>Doing what you like will always keep you happy . .</Text>
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
          data={ListChat.slice(0, this.state.limit)}
          renderItem={this.renderRow}
          keyExtractor={this._keyExtractor}
          ListHeaderComponent={InputSearch}
          onEndReached={this._onEndScroll}
        />
      </View>
    )
  }
}
