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
    paddingTop: 30
  },
  logo: {
    height: 500,
    width: 500
  }
});

module.exports = Login;