import axios from 'axios'
module.exports.request = axios.create({
  baseURL: 'http://localhost:3001/',
  timeout: 4000,
  headers: {
    'Content-Type': 'application/json'
  }
});
