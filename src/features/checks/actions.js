import { allChecksRequest, doCreateCheckRequest } from './util'
import { possiblyParseInt } from '../../util/general';

export const GET_ALL_CHECKS_REQUEST = 'getAllChecksRequest';
export const GET_ALL_CHECKS_SUCCESS = 'getAllChecksSuccess';
export const GET_ALL_CHECKS_ERROR = 'getAllChecksError';

export const CREATE_CHECK_REQUEST = 'createCheckRequest';
export const CREATE_CHECK_SUCCESS = 'createCheckSuccess';
export const CREATE_CHECK_ERROR = 'createCheckError';

export function getCheck(checkId) {
  return;
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
