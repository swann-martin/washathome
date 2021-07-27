import axios from 'axios';

export default axios.create({
  baseURL: 'http://54.152.172.181:8080/v1',
  timeout: 10000,
});
