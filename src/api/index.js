import axios from 'axios'

export function request (params = {}, auth = '') {

 return axios.create({
    baseURL: 'http://localhost:3001/',
    params: params,
    timeout: 1000,
    headers: {'Authorization': `Bearer ${auth}`}
  });

}
