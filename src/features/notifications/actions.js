import {
  doCreateNotificationRequest
} from './util';

export const CREATE_NOTIFICATION_REQUEST = 'createNotificationRequest';
export const CREATE_NOTIFICATION_SUCCESS = 'createNotificationSuccess';
export const CREATE_NOTIFICATION_ERROR = 'createNotificationError';

export function createNotificationRequest() {
  return {
    type: CREATE_NOTIFICATION_REQUEST
  };
}

export function createNotificationSuccess(data) {
  return {
    type: CREATE_NOTIFICATION_SUCCESS,
    payload: data
  };
}

export function createNotificationError(error) {
  return {
    type: CREATE_NOTIFICATION_ERROR,
    error: error
  };
}

export function createNotification(checkId, type, target, interval) {
  return async (dispatch) => {
    try {
      dispatch(createNotificationRequest());
      const result = await doCreateNotificationRequest(
        parseInt(checkId), type, target, parseInt(interval)
      )
      dispatch(createNotificationSuccess(result.data));
    } catch (e) {
      dispatch(createNotificationError(e));
    }
  }
}
