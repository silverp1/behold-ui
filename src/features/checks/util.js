import axios from 'axios';
import config from '../../config/app';

export const doDeleteCheckRequest = async (checkId) => axios({
  method: 'DELETE',
  baseURL: config.BASE_PATH,
  url: 'api/v1/check',
  data: {
    id: checkId
  }
})

export const doGetCheckValuesRequest = async (checkId) => axios({
  method: 'GET',
  baseURL: config.BASE_PATH,
  url: `api/v1/check/${checkId}/values`
})

export const doGetCheckRequest = async (checkId) => axios({
  method: 'GET',
  baseURL: config.BASE_PATH,
  url: `api/v1/check/${checkId}`
});

export const allChecksRequest = async () => axios({
  method: 'GET',
  baseURL: config.BASE_PATH,
  url: 'api/v1/checks'
});

export const doCreateCheckRequest = async (
  name, type, target, value, 
  comparison, operation, interval,
  threshold
) => axios({
  method: 'POST',
  baseURL: config.BASE_PATH,
  url: 'api/v1/check',
  data: {
    name,
    type,
    target,
    value,
    comparison,
    operation,
    interval,
    threshold,
    unique_id: `${type}-${target}-${interval}-${name}`
  }
});
