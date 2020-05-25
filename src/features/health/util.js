import axios from 'axios';
import config from '../../config/app';

export const doGetHealthDataRequest = async() => axios({
  method: 'GET',
  baseURL: config.BASE_PATH,
  url: 'api/v1/health'
});

export const doRestartProcessRequest = async(name) => axios({
  method: 'POST',
  baseURL: config.BASE_PATH,
  url: 'api/v1/health/restart',
  data: {
    name
  }
});