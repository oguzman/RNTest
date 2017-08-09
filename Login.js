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
        <View style={styles.container}>
          <Text>
            Hi dude!
          </Text>
          <Image 
            style={{
              width:  100 ,
              height:  100 ,
            }}
            resizeMode={"contain"}
            source={require('./react.png')}
          />
        </View>
      );
    }
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    alignItems: 'center',
    margin: 20
  },
  logo: {
    height: 500,
    width: 500
  }
});

module.exports = Login;