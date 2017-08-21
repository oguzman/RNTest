/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  ActivityIndicator
} from 'react-native';
import {
  AppRegistry,
} from 'react-native';
import Login from './Login';
import styles from './styles'
import AuthenticationManager from './AuthenticationManager'
import AppContainer from './AppContainer'

class RNTest extends Component {
  componentDidMount() {
    AuthenticationManager.getAuthInfo((error, result) => {
      this.setState ({
        checkingAuth: false,
        isLoggedIn: result != null
      })
    })
  }
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      checkingAuth: true
    };
  }
  render() {
    if(this.state.checkingAuth) {
      return(
        <View style = { styles. generalView } >
        <ActivityIndicator
          style = { styles.loader }
          animating = { true }
          color = 'black'
          size = 'large'
        />
        </View>
      )
    }
    if(this.state.isLoggedIn) {
      return(
        <AppContainer />
      );
    } else {
      return (
        <Login onLogin = {() => { this.onLogin() }} />
      );
    }
  }
  onLogin() {
    this.setState ({ isLoggedIn: true });
  }
};

AppRegistry.registerComponent('RNTest', () => RNTest);