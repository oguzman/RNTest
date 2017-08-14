'use strict';
import React, { Component } from 'react'
import Dimensions from 'Dimensions'
import createReactClass from 'create-react-class' 
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native'

import Styles from './styles.js'


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showProgress: false
    }
  }
  render() {
    return(
      <View style={Styles.generalView}>
        <View style= {Styles.generalContainer}>
          <Image
            style={ Styles.logoLogin }
            resizeMode={"contain"}
            source={require('./react.png')}
          />
          <Text style= { Styles.loginHeaderText }>
            React Native Test
          </Text>
          <TextInput
            onChangeText = { (text) => this.setState({ username: text }) }
            style={ Styles.blueInputs }
            placeholder={'Email'}
            placeholderTextColor={"rgba(198,198,204,1)"}
          />
          <TextInput
            onChangeText = { (text) => this.setState({ password: text })}
            style={ Styles.blueInputs }
            placeholder={'Password'}
            placeholderTextColor={"rgba(198,198,204,1)"}
            secureTextEntry = { true }
          />
          <TouchableHighlight
            onPress = {this.onLoginPressed.bind(this)}
            style = { Styles.blueButton }
            activeOpacity={75 / 100}
            underlayColor={"rgb(210,210,210)"}>
            <Text style= { Styles.whiteText } >
              Login
            </Text>
          </TouchableHighlight>
          <ActivityIndicator
            style = { Styles.loader }
            animating = { this.state.showProgress }
            size = {'large'}
          />
        </View>
      </View>
    );
  }

  onLoginPressed() {
    console.log('username: ' + this.state.username)
    console.log('password: '+ this.state.password)
    this.setState ({
      showProgress: true
    });
  }
}

module.exports = Login;