import {
  CREATE_NOTIFICATION_REQUEST,
  CREATE_NOTIFICATION_SUCCESS,
  CREATE_NOTIFICATION_ERROR
} from './actions';

export default function notificationsReducer(
  state = {
    isFetching: false,
    notification: {},
    notifications: [],
    error: null
  },
  action
) {
  switch(action.type) {
    case CREATE_NOTIFICATION_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case CREATE_NOTIFICATION_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.message
      };
    case CREATE_NOTIFICATION_SUCCESS: 
      return {
        ...state,
        isFetching: false
      }
    default:
      return state;
  };
}