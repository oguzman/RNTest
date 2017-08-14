import {
  StyleSheet,
  React 
} from 'react-native';
import Dimensions from 'Dimensions';
var { 
  height, 
  width 
} = Dimensions.get('window')

export default StyleSheet.create({
  generalView: {
    backgroundColor: '#F5FCFF',
    flex: 1,
  },
  generalContainer: {
    alignItems: 'center',
    padding: 30
  },
  loginHeaderText: {
    fontSize: 30,
    marginBottom: 40
  }, 
  blueInputs: {
    height: 35, 
    width: width * 0.9,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "rgba(86,213,250,1)",
    paddingLeft: 10,
    marginTop: 10
  },
  logoLogin: {
    height: 150,
    width: 150
  },
  blueButton: {
    alignItems: 'center',
    backgroundColor: "rgba(86,213,250, 1)",
    borderRadius: 5,
    height: 44,
    justifyContent: 'center',
    marginTop: 30,
    width: width * 0.9
  },
  whiteText: {
    color: 'white',
    fontSize: 18
  },
  loader: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    marginTop: height / 2
  }
});