export const PLAY_TRACK = 'PLAY_TRACK';

// This is our initial state
const initialState = {
  url: '',
};

const PlayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_TRACK:
      return {
        ...state,
        url: action.data,
      };
    default:
      return state;
  };
}

export default PlayerReducer;
