import buffer from 'buffer';
import { AsyncStorage } from 'react-native';
import React from 'react';
const authKey = 'auth';
const userKey = 'user';

class AuthenticationManager {
  getAuthInfo(callback = null){
    AsyncStorage.multiGet([authKey, userKey], (error,result) => {
      if(error) {
        return callback(error);
      }
      if(result) {
        var authInfo = {
          header: {
            Authorization: 'Basic ' + result[0][1]
          },
          user: JSON.parse(result[1][1])
        }
        return callback(null, authInfo)
      }
    })
  }
  login(credentials, callback) {
    var buf = new buffer.Buffer(credentials.username + ':' + credentials.password);
    var encondeAuth = buf.toString('base64');
    
    fetch('https://api.github.com/user', {
      headers: {
        'Authorization': 'Basic ' + encondeAuth
      }
    })
    .then((response) => {
      console.log(response);
      if(response.status >= 200 && response.status < 300){
        return response;
      }
      throw {
        badCredentials: response.status == 401,
        unknownError: response.status != 401
      }
    })
    .then((response) => response.json())
    .then((results) => {
      AsyncStorage.multiSet([
        [authKey, encondeAuth],
        [userKey, JSON.stringify(results)]
      ], (error) => {
        if(error) {
          throw error;
        }
        AsyncStorage.getItem('auth', (error, result) => {
          if(error) {
            console.log(error)
          } else {
            console.log(result)
          }
        })
        this.getAuthInfo()
        return callback({ success: true });
      })
    })
    .catch((error) => {
      return callback(error);
    })
  }
}

module.exports = new AuthenticationManager();