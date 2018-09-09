import { SHOW_LOGIN_MODAL } from '../reducers/AuthReducer';
import { HIDE_LOGIN_MODAL } from '../reducers/AuthReducer';

export const showLoginModal = () => {
  return {
    type: SHOW_LOGIN_MODAL,
  }
};

export const hideLoginModal = () => {
  return {
    type: HIDE_LOGIN_MODAL,
  }
};
