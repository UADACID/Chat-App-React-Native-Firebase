import React, { Component } from 'react';
import {
  View,
  Text,
  Platform,
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Login from './scene/Login';
import Register from './scene/Register';
import Chat from './scene/Chat';
import Setting from './scene/Setting';
import Contact from './scene/Contact';
import store from './store';

const isLogin = store.isLogin();

const TabView = TabNavigator({
  Chat    : { screen: Chat },
  Contact : { screen: Contact },
  Setting : { screen: Setting}
},{
  tabBarPosition:'bottom',
  tabBarOptions:{
    showIcon:true,
    showLabel:Platform.OS == 'ios' ? true : false
  }
});

const RootApp = StackNavigator({
  TabView   : { screen: TabView },
  Login     : { screen: Login },
  Register  : { screen: Register },
},{
  initialRouteName : isLogin ? 'TabView' : 'Login'
});

export default RootApp;
