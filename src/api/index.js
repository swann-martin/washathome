import axios from 'axios';

export default axios.create({
  baseURL: 'http://54.146.58.150:8080/v1',
  timeout: 10000,
});
