/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

export default class RNTest extends Component {
  render() {
    return (
     <Login />
    );
  }
}

AppRegistry.registerComponent('RNTest', () => RNTest);
