import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { reducer as formReducer } from 'redux-form';

import authReducer from './AuthReducer';
import SubscriptionFormReducer from './SubscriptionFormReducer';
import PlayerReducer from './PlayerReducer';

// Reducers

const appReducer = combineReducers({
  firebase: firebaseReducer,
  auth: authReducer,
  subscriptionForm: SubscriptionFormReducer,
  form: formReducer,
  player: PlayerReducer
})

// Setup root reducer
const rootReducer = (state, action) => {
  const newState = (action.type === 'RESET') ? undefined : state;
  return appReducer(newState, action);
}

export default rootReducer;
