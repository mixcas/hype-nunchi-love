export const SHOW_LOGIN_MODAL = 'SHOW_LOGIN_MODAL';
export const HIDE_LOGIN_MODAL = 'HIDE_LOGIN_MODAL';

// This is our initial state
const initialState = {
  showModal: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOGIN_MODAL:
      return Object.assign({}, state, {
        showModal: true,
      });
    case HIDE_LOGIN_MODAL:
      return Object.assign({}, state, {
        showModal: false,
      });
    case '@@reactReduxFirebase/LOGIN':
      return Object.assign({}, state, {
        showModal: false,
      });


    default:
      return state
  }
};

export default authReducer;
