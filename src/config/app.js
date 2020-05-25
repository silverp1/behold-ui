import getCurrentEnvironment from '../util/environment';
let config = {}

if(getCurrentEnvironment() === 'development') {
  config = {
    BASE_PATH: '/',
    DATE_FORMAT: 'MM-DD-YY hh:mm:ss'
  }
} else {
  config = {
    BASE_PATH: process.env.REACT_APP_BEHOLD_API_URL || "http://localhost:4000/",
    DATE_FORMAT: 'MM-DD-YY hh:mm:ss'
  }
}

export default config;
