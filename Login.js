import React, { Component } from 'react'
import Dimensions from 'Dimensions'
import createReactClass from 'create-react-class' 
import { 
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableHighlight
  } from 'react-native'

var { height, width } = Dimensions.get('window')


class Login extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <View style={styles.view}>
        <View style= {styles.container}>
          <Image
            style={ styles.imageView }
            resizeMode={"contain"}
            source={require('./react.png')}
          />
          <Text style= { styles.headerText }>
            React Native Test
          </Text>
          <TextInput
            onChangeText = { (text) => this.setState({ username: text }) }
            style={ styles.inputs }
            placeholder={'Email'}
            placeholderTextColor={"rgba(198,198,204,1)"}
          />
          <TextInput
            onChangeText = { (text) => this.setState({ password: text })}
            style={ styles.inputs }
            placeholder={'Password'}
            placeholderTextColor={"rgba(198,198,204,1)"}
            secureTextEntry = { true }
          />
          <TouchableHighlight
            onPress = {this.onLoginPressed.bind(this)}
            style = { styles.button }
            activeOpacity={75 / 100}
            underlayColor={"rgb(210,210,210)"}>
            <Text>Login</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  onLoginPressed() {
    console.log('username: ' + this.state.username)
    console.log('password: '+ this.state.password)
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#F5FCFF',
    flex: 1,
  },
  container: {
    alignItems: 'center',
    padding: 30
  },
  logo: {
    height: 500,
    width: 500
  },
  headerText: {
    fontSize: 30,
    marginBottom: 40
  }, 
  inputs: {
    height: 35, 
    width: width * 0.9,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "rgba(86,213,250,1)",
    paddingLeft: 10,
    marginTop: 10
  },
  imageView: {
    height: 150,
    width: 150
  },
  button: {
    alignItems: 'center',
    backgroundColor: "rgba(86,213,250, 1)",
    borderRadius: 5,
    height: 44,
    justifyContent: 'center',
    marginTop: 30,
    width: width * 0.9
  }
});

module.exports = Login;