import {
  doGetHealthDataRequest
} from './util';

export const GET_HEALTH_DATA_REQUEST = 'getHealthDataRequest';
export const GET_HEALTH_DATA_SUCCESS = 'getHealthDataSuccess';
export const GET_HEALTH_DATA_ERROR = 'getHealthDataError';

export function getHealthDataRequest() {
  return {
    type: GET_HEALTH_DATA_REQUEST
  };
}

export function getHealthDataSuccess(data) {
  return {
    type: GET_HEALTH_DATA_SUCCESS,
    payload: data
  };
}

export function getHealthDataError(error) {
  return {
    type: GET_HEALTH_DATA_ERROR,
    payload: error
  };
}

export function getHealthData() {
  return async (dispatch) => {
    try {
      dispatch(getHealthDataRequest());
      const result = await doGetHealthDataRequest();
      dispatch(getHealthDataSuccess(result.data));
    } catch (e) {
      dispatch(getHealthDataError(e));
    }
  }
}
