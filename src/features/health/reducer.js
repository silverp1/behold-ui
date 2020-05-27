import {
  GET_HEALTH_DATA_REQUEST,
  GET_HEALTH_DATA_SUCCESS,
  GET_HEALTH_DATA_ERROR,
  RESTART_PROCESS_REQUEST,
  RESTART_PROCESS_SUCCESS,
  RESTART_PROCESS_ERROR,
  GET_FAILURES_REQUEST,
  GET_FAILURES_ERROR,
  GET_FAILURES_SUCCESS,
} from './actions';

export default function healthReducer(
  state = {
    healthData: {},
    failures: [],
    error: null,
    isFetching: false
  },
  action
) {
  switch(action.type) {
    case GET_FAILURES_REQUEST:
    case RESTART_PROCESS_REQUEST:
    case GET_HEALTH_DATA_REQUEST:
      return {
        ...state,
        error: null,
        isFetching: true
      };
    case GET_FAILURES_ERROR:
    case RESTART_PROCESS_ERROR:
    case GET_HEALTH_DATA_ERROR:
      return {
        ...state,
        error: action.error.message,
        isFetching: false
      };
    case GET_HEALTH_DATA_SUCCESS:
      return {
        ...state,
        healthData: action.payload,
        isFetching: false
      };
    case RESTART_PROCESS_SUCCESS:
      return {
        ...state,
        isFetching: false
      };
    case GET_FAILURES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        failures: action.payload.values
      }
    default:
      return state;
  }
}