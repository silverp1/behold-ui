import thunk from 'redux-thunk';
import {
  applyMiddleware, compose, createStore, combineReducers
} from 'redux';

import checksReducer from './features/checks/reducer';
import alertsReducer from './features/alerts/reducer';
import notificationsReducer from './features/notifications/reducer';
import healthReducer from './features/health/reducer';


const allReducers = combineReducers({
  checksReducer,
  alertsReducer,
  notificationsReducer,
  healthReducer
});

let allStoreEnhancers = compose(
  applyMiddleware(thunk)
);

// split this to avoid an error when devToolsExtension is null
if (window.devToolsExtension) {
  allStoreEnhancers = compose(allStoreEnhancers, window.devToolsExtension());
}

const store = createStore(allReducers, undefined, allStoreEnhancers);

export default store;
