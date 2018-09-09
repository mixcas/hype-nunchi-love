import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

// Reducers

const appReducer = combineReducers({
  firebase: firebaseReducer,
})

// Setup root reducer
const rootReducer = (state, action) => {
  const newState = (action.type === 'RESET') ? undefined : state;
  return appReducer(newState, action);
}

export default rootReducer;
