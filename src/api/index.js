import axios from 'axios';

const localURL = 'http://localhost:8081/v1';
const liveURL = 'http://54.152.172.181:8080/v1';

// let url = localURL;

// if (process.env.NODE_ENV === 'production') {
//   url = liveURL;
// }

export default axios.create({
  baseURL: liveURL,
  timeout: 10000,
});
