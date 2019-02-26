import { combineReducers } from 'redux';
import routes from './trains';

export default combineReducers({
  train: routes
});
