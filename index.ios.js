/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import CreateClass from 'create-react-class';
import {
  View,
  Text
} from 'react-native';
import {
  AppRegistry,
} from 'react-native';
import Login from './Login';
import styles from './styles'

var RNTest = CreateClass ({
  render: function() {
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
        <Login onLogin = { this.onLogin }/>
      );
    }
  },
  onLogin() {
    this.setState({ isLoggedIn: true });
  },
  getInitialState() {
    return {
      isLoggedIn: false
    }
  }
});

AppRegistry.registerComponent('RNTest', () => RNTest);