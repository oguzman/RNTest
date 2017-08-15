'use strict';
import React, { Component } from 'react'
import Dimensions from 'Dimensions'
import createReactClass from 'create-react-class' 
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native'
import styles from './styles'
import authentication from './AuthenticationManager'
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showProgress: false,
      username: '',
      password: ''
    }
  }
  render() {
    var errorControl = <View />;
    if (!this.state.success && this.state.badCredentials) {
      errorControl = <Text style={ styles.errorMessage }>
          User name or password are wrong.
        </Text>;
    }
    if (!this.state.success && this.state.unknownError) {
      errorControl = <Text style={ styles.errorMessage }>
          We experienced an unknow error.
        </Text>;
    }
    return(
      <View style={styles.generalView}>
        <View style= {styles.generalContainer}>
          <Image
            style={ styles.logoLogin }
            resizeMode={"contain"}
            source={require('./react.png')}
          />
          <Text style= { styles.loginHeaderText }>
            React Native Test
          </Text>
          <Text>
            Using GitHub API v3
          </Text>
          <TextInput
            onChangeText = { (text) => this.setState({ username: text }) }
            style={ styles.blueInputs }
            placeholder={'Email'}
            placeholderTextColor={"rgba(198,198,204,1)"}
          />
          <TextInput
            onChangeText = { (text) => this.setState({ password: text })}
            style={ styles.blueInputs }
            placeholder={'Password'}
            placeholderTextColor={"rgba(198,198,204,1)"}
            secureTextEntry = { true }
          />
          <TouchableHighlight
            onPress = {this.onLoginPressed.bind(this)}
            style = { styles.blueButton }
            activeOpacity={75 / 100}
            underlayColor={"rgb(210,210,210)"}>
            <Text style= { styles.whiteText } >
              Login
            </Text>
          </TouchableHighlight>
          { errorControl }
          <ActivityIndicator
            style = { styles.loader }
            animating = { this.state.showProgress }
            size = {'large'}
          />
        </View>
      </View>
    );
  }

  onLoginPressed() {
    this.setState ({
      showProgress: true
    });
    authentication.login({
      username: this.state.username,
      password: this.state.password
    },(results) => {
      this.setState(Object.assign ({
        showProgress: false
      },
        results));
    });
  }
}

module.exports = Login;