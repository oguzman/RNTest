import buffer from 'buffer';
class AuthenticationManager {
  login(credentials, callback) {
    var buf = new buffer.Buffer(this.state.username + ':' + this.state.password);
    var encondeAuth = buf.toString('base64');
    
    fetch('https://api.github.com/user', {
      headers: {
        'Authorization': 'Basic ' + encondeAuth
      }
    })
    .then((response) => {
      if(response.status >= 200 && response.status < 300){
        return response;
      }
      throw {
        badCredentials: response.status == 401,
        unknownError: response.status != 401
      }
    })
    .then((response) => {
      return response.json();
    })
    .then((results) => {
      return callback({ success: true });
    })
    .catch((err) => {
      return cb(err);
    })
    .finally(() => {
      this.setState({ showProgress: false })
    })
  }
}

module.export = new AuthenticationManager();