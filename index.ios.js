/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import {
  AppRegistry,
} from 'react-native';
import Login from './Login';
import styles from './styles'

class RNTest extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
    console.log(this.state)
  }
  render() {
    if(this.state.isLoggedIn) {
      return(
        <View style = { styles.generalView }>
          <Text style = { styles.loginHeaderText }>
            You are logged!
          </Text>
        </View>
      );
    } else {
      return (
        <Login onLogin = { () => { this.onLogin() }}/>
      );
    }
  }
  onLogin() {
    this.setState ({ isLoggedIn: true });
  }
};

AppRegistry.registerComponent('RNTest', () => RNTest);