/* eslint no-param-reassign: 0 */
import { combineReducers } from 'redux';
import locationReducer from './location';
import usersReducer from '../routes/UserViewer/modules/user-viewer';

export const makeRootReducer = asyncReducers =>
  combineReducers({
    location: locationReducer,
    users: usersReducer,
    ...asyncReducers,
  });

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;

  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
