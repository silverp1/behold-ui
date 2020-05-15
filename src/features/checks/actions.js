import { 
  allChecksRequest, 
  doCreateCheckRequest,
  doGetCheckRequest,
  doGetCheckValuesRequest
} from './util'
import { possiblyParseInt } from '../../util/general';

export const GET_ALL_CHECKS_REQUEST = 'getAllChecksRequest';
export const GET_ALL_CHECKS_SUCCESS = 'getAllChecksSuccess';
export const GET_ALL_CHECKS_ERROR = 'getAllChecksError';

export const CREATE_CHECK_REQUEST = 'createCheckRequest';
export const CREATE_CHECK_SUCCESS = 'createCheckSuccess';
export const CREATE_CHECK_ERROR = 'createCheckError';

export const GET_CHECK_REQUEST = 'getCheckRequest';
export const GET_CHECK_SUCCESS = 'getCheckSuccess';
export const GET_CHECK_ERROR = 'getCheckError';

export const GET_CHECK_VALUES_REQUEST = 'getCheckValuesRequest';
export const GET_CHECK_VALUES_SUCCESS = 'getCheckValuesSuccess';
export const GET_CHECK_VALUES_ERROR = 'getCheckValueError';

export function getCheckValuesRequest() {
  return {
    type: GET_CHECK_VALUES_REQUEST
  };
}

export function getCheckValuesSuccess(data) {
  return {
    type: GET_CHECK_VALUES_SUCCESS,
    payload: data
  };
}

export function getCheckValuesError(error) {
  return {
    type: GET_CHECK_VALUES_ERROR,
    error: error
  }
}

export function getCheckValues(checkId) {
  return async (dispatch) => {
    try {
      dispatch(getCheckValuesRequest());
      const result = await doGetCheckValuesRequest(checkId);
      dispatch(getCheckValuesSuccess(result.data));
    } catch (e) {
      dispatch(getCheckValuesError(e));
    }
  }
}

export function getCheckRequest() {
  return {
    type: GET_CHECK_REQUEST
  };
}

export function getCheckSuccess(data) {
  return {
    type: GET_CHECK_SUCCESS,
    payload: data
  };
}

export function getCheckError(error) {
  return {
    type: GET_CHECK_ERROR,
    error: error
  }
}

export function getCheck(checkId) {
  return async (dispatch) => {
    try {
      dispatch(getCheckRequest());
      const result = await doGetCheckRequest(checkId);
      dispatch(getCheckSuccess(result.data));
    } catch (e) {
      dispatch(getCheckError(e));
    }
  }
}

export function createCheckRequest() {
  return {
    type: CREATE_CHECK_REQUEST
  };
}

export function createCheckSuccess(data) {
  return {
    type: CREATE_CHECK_SUCCESS,
    payload: data
  }
}

export function createCheckError(error) {
  return {
    type: CREATE_CHECK_ERROR,
    payload: error
  }
}

export function createCheck(
  name, type, target, value, 
  comparison, operation, interval
) {
  return async (dispatch) => {
    try {
      dispatch(createCheckRequest());
      const result = await doCreateCheckRequest(
        name, type, target, possiblyParseInt(value),
        comparison, operation, parseInt(interval)
      );
      dispatch(createCheckSuccess(result.data));
    } catch (e) {
      dispatch(createCheckError(e))
    }
  }
}

export function getAllChecksRequest() {
  return {
    type: GET_ALL_CHECKS_REQUEST
  };
}

export function getAllChecksSuccess(data) {
  return {
    type: GET_ALL_CHECKS_SUCCESS,
    payload: data
  }
}

export function getAllChecksError(error) {
  return {
    type: GET_ALL_CHECKS_ERROR,
    payload: error
  }
}

export function getAllChecks() {
  return async (dispatch) => {
    try {
      dispatch(getAllChecksRequest());
      const result = await allChecksRequest();
      dispatch(getAllChecksSuccess(result.data));
    } catch (e) {
      dispatch(getAllChecksError(e))
    }
  }
}
