import { URL_CHANGE } from '../reducers/SubscriptionFormReducer';
import { REGEX_CHANGE } from '../reducers/SubscriptionFormReducer';

export const urlChange = (data) => {
  return {
    type: URL_CHANGE,
    data,
  }
};

export const regexChange = (data) => {
  return {
    type: REGEX_CHANGE,
    data,
  }
};
