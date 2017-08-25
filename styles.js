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
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20
  },
  listViewBackground: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    paddingTop: 64,
    paddingBottom: 50
  },
  simpleListView: {
    flex: 1,
    justifyContent: 'center'
  },
  boldText: {
    fontWeight: 'bold'
  },
  payloadView: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    paddingTop: 80,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  centerContentInScreen: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  alignCenter: {
    alignItems: 'center'
  },
  headerText: {
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
  },
  errorMessage: {
    color: 'red',
    paddingTop: 15
  },
  tableCell: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderColor: '#D7D7D7',
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5
  },
  payloadUsernameText: {
    fontSize: 15,
    marginTop: 10,
    fontWeight: 'bold'
  }
});