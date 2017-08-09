'use strict';

var React = require('react');

import Dimensions from 'Dimensions'

const {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
} = require('react-native');

var { height, width } = Dimensions.get('window')

var createReactClass = require('create-react-class');

var Login = createReactClass({
    render() {
      return(
        <View style={styles.view}>
          <View style= {styles.container}>
            <Image 
              style={{
                width:  100 ,
                height:  100 ,
              }}
              resizeMode={"contain"}
              source={require('./react.png')}
            />
            <Text style= { styles.headerText }>
              React Native Test
            </Text>
            <TextInput
              style={{
                height: 35, 
                width: width * 0.9,
                marginTop: 50,
                borderWidth: 1,
                borderColor: "rgba(0,0,0,1)",
                paddingLeft: 10,
              }}
              placeholder={'Email'}
              placeholderTextColor={"rgba(198,198,204,1)"}
            />
            <TextInput
              style={{
                height: 35, 
                width: width * 0.9,
                borderWidth: 1,
                borderColor: "rgba(0,0,0,1)",
                paddingLeft: 10,
                marginTop: 10
              }}
              placeholder={'Password'}
              placeholderTextColor={"rgba(198,198,204,1)"}
              secureTextEntry = 'true'
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
  },
  headerText: {
    fontSize: 30
  }
});

module.exports = Login;