// 
// https://jestjs.io/docs/mock-functions
// mocking modules

import axios from 'axios';

class Users {
  static all() {
    return axios.get('/users.json').then(resp => resp.data);
  }
}

export default Users;