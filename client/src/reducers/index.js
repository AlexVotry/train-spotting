import { combineReducers } from 'redux';

const trainReducer = (state = [], action) => {
  if (action.type === 'FETCH_TRAINS') {
      return action.payload;
  } else {
    return state;
  }
}

export default combineReducers({
  train: trainReducer
});
