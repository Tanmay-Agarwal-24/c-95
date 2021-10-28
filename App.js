import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import  NewUser from './screens/NewUser';
import Old from './screens/Old';
import Home from './screens/Home'

const AppSwitchNavigator = createSwitchNavigator({
  Home:Home,
 NewUser:NewUser,
 Old:Old

});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default class App extends React.Component{
  render(){
  return <AppNavigator />
  }
}
