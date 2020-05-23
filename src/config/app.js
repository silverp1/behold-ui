import getCurrentEnvironment from '../util/environment';
let config = {}

if(getCurrentEnvironment() === 'development') {
  config = {
    BASE_PATH: '/',
    DATE_FORMAT: 'MM-DD-YY hh:mm:ss'
  }
} else {
  config = {
    BASE_PATH: process.env.API_URL,
    DATE_FORMAT: 'MM-DD-YY hh:mm:ss'
  }
}

export default config;
