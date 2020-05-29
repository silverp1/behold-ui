import {
  GET_ALL_CHECKS_REQUEST,
  GET_ALL_CHECKS_SUCCESS,
  GET_ALL_CHECKS_ERROR,
  CREATE_CHECK_REQUEST,
  CREATE_CHECK_SUCCESS,
  CREATE_CHECK_ERROR,
  GET_CHECK_REQUEST,
  GET_CHECK_SUCCESS,
  GET_CHECK_ERROR,
  GET_CHECK_VALUES_REQUEST,
  GET_CHECK_VALUES_SUCCESS,
  GET_CHECK_VALUES_ERROR,
  DELETE_CHECK_REQUEST,
  DELETE_CHECK_SUCCESS,
  DELETE_CHECK_ERROR
} from './actions';

export default function checksReducer(
  state = {
    isFetching: false,
    checks: [],
    check: {},
    values: [],
    error: null
  },
  action
) {
  switch(action.type) {
    case DELETE_CHECK_REQUEST:
    case GET_CHECK_VALUES_REQUEST:
    case GET_CHECK_REQUEST:
    case CREATE_CHECK_REQUEST:
    case GET_ALL_CHECKS_REQUEST:
      return {
        ...state,
        error: null,
        isFetching: true
      };
    case CREATE_CHECK_SUCCESS:
    case DELETE_CHECK_SUCCESS:
      return {
        ...state,
        isFetching: false,
        message: action.payload.message
      };
    case GET_ALL_CHECKS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        checks: action.payload.checks
      };
    case GET_CHECK_SUCCESS:
      return {
        ...state,
        isFetching: false,
        check: action.payload.check
      };
    case GET_CHECK_VALUES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        values: action.payload.values
      };
    case GET_CHECK_ERROR:
    case CREATE_CHECK_ERROR:
    case GET_ALL_CHECKS_ERROR:
    case GET_CHECK_VALUES_ERROR:
    case DELETE_CHECK_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.message
      };
    default:
      return state;
  }
}
