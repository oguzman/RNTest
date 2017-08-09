'use strict';

var React = require('react');

const {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
} = require('react-native')

var createReactClass = require('create-react-class');

var Login = createReactClass({
    render() {
      return(
        <View style={styles.view}>
          <View style= {styles.container}>
            <Text>
              Hi All!
            </Text>
            <Image 
              style={{
                width:  100 ,
                height:  100 ,
              }}
              resizeMode={"contain"}
              source={require('./react.png')}
            />
            <TextInput
              style={{
                height: 35, 
                width: 250,
                marginTop: 50,
                borderWidth: 1,
                borderColor: "rgba(0,0,0,1)",
                paddingLeft: 10,
              }}
              placeholder={'Email'}
              placeholderTextColor={"rgba(198,198,204,1)"}
              onChangeText={(text) => {this.setState({text})}}
              onSubmitEditing={() => {this.setState({text: ''})}}
              value={(this.state && this.state.text) || ''}
            />
            <TextInput
              style={{
                height: 35, 
                width: 250,
                borderWidth: 1,
                borderColor: "rgba(0,0,0,1)",
                paddingLeft: 10,
                marginTop: 10
              }}
              placeholder={'Password'}
              placeholderTextColor={"rgba(198,198,204,1)"}
              onChangeText={(text) => {this.setState({text})}}
              onSubmitEditing={() => {this.setState({text: ''})}}
              value={(this.state && this.state.text) || ''}
            />
          </View>
        </View>
      );
    }
});

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
  }
});

module.exports = Login;