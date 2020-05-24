import {
  GET_HEALTH_DATA_REQUEST,
  GET_HEALTH_DATA_SUCCESS,
  GET_HEALTH_DATA_ERROR
} from './actions';

export default function healthReducer(
  state = {
    healthData: {},
    error: null,
    isFetching: false
  },
  action
) {
  switch(action.type) {
    case GET_HEALTH_DATA_REQUEST:
      return {
        ...state,
        error: null,
        isFetching: true
      };
    case GET_HEALTH_DATA_ERROR:
      return {
        ...state,
        error: action.payload.message,
        isFetching: false
      };
    case GET_HEALTH_DATA_SUCCESS:
      return {
        ...state,
        healthData: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
}