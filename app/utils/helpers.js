/*OLD ES5
var axios = require('axios');
*/
// ES2015 -> Import
import axios from 'axios';

function getRepos(username) {
  // ES2015 -> String literal
  return axios.get(`https://api.github.com/users/${username}/repos`);
};

function getUserInfo(username) {

  return axios.get(`https://api.github.com/users/${username}`);
};

var helpers = {
  getGithubInfo(username) {
    return axios.all([getRepos(username), getUserInfo(username)])
      /*ES2015 - Arrow Functions
      Does not create new function, the 'this' keyword outside
      of the arrow function would be the same as the this keyword
      */
      .then((arr) => {
        return {
          repos: arr[0].data,
          bio: arr[1].data
        }
      });
      /*OLD ES5
      var axios = require('axios');
      function(arr) {
        return {
          repos: arr[0].data,
          bio: arr[1].data
        }
      });
      */
  }
};

// ES2015 -> Export helpers;
export default helpers;

/*OLD ES5
module.exports = helpers;
*/
