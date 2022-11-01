import axios from 'axios';

export const customAxios = axios.create({
  baseURL: 'https://reactjs2208-default-rtdb.firebaseio.com',
  timeout: 10000,
  // headers: {'X-Custom-Header': 'foobar'}
});
