import {
  doGetHealthDataRequest,
  doRestartProcessRequest
} from './util';

export const GET_HEALTH_DATA_REQUEST = 'getHealthDataRequest';
export const GET_HEALTH_DATA_SUCCESS = 'getHealthDataSuccess';
export const GET_HEALTH_DATA_ERROR = 'getHealthDataError';

export const RESTART_PROCESS_REQUEST = 'restartProcessRequest';
export const RESTART_PROCESS_SUCCESS = 'restartProcessSuccess';
export const RESTART_PROCESS_ERROR = 'restartProcessError';

export function restartProcessRequest() {
  return {
    type: RESTART_PROCESS_REQUEST
  };
}

export function restartProcessSuccess(data) {
  return {
    type: RESTART_PROCESS_SUCCESS,
    payload: data
  };
}

export function restartProcessError(error) {
  return {
    type: RESTART_PROCESS_ERROR,
    error: error
  }
}

export function restartProcess(name) {
  return async (dispatch) => {
    try {
      dispatch(restartProcessRequest());
      const result = await doRestartProcessRequest(name);
      dispatch(restartProcessSuccess(result.data));
    } catch (e) {
      dispatch(restartProcessError(e));
    }
  }
}

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
