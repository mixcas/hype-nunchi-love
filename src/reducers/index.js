import { combineReducers } from 'redux'


// Reducers

const appReducer = combineReducers({
})

// Setup root reducer
const rootReducer = (state, action) => {
  const newState = (action.type === 'RESET') ? undefined : state;
  return appReducer(newState, action);
}

export default rootReducer;
