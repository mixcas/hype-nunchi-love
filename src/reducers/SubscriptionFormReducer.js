export const URL_CHANGE = 'URL_CHANGE';
export const REGEX_CHANGE = 'REGEX_CHANGE';

// This is our initial state
const initialState = {
  url: '',
  regex: "MV|M\\V|M/V"
};

const SubscriptionFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case URL_CHANGE:
      return {
        ...state,
        url: action.data,
      };
    case REGEX_CHANGE:
      return {
        ...state,
        regex: action.data,
      };
    default:
      return state;
  };
}

export default SubscriptionFormReducer;
