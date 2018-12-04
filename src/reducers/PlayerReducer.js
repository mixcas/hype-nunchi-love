export const PLAY_TRACK = 'PLAY_TRACK';
export const UPDATE_PROGRESS = 'UPDATE_PROGRESS';
export const SET_DURATION = 'SET_DURATION';
export const TOGGLE_PLAY = 'TOGGLE_PLAY';

// This is our initial state
const initialState = {
  url: '',
  playing: false,
  progress: {},
  duration: {},
};

const PlayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_TRACK:
      return {
        ...state,
        url: action.url,
        playing: true,
      };
    case TOGGLE_PLAY:
      return {
        ...state,
        playing: !state.playing,
      };
    case UPDATE_PROGRESS:
      return {
        ...state,
        progress: action.progress,
      }
    case SET_DURATION:
      return {
        ...state,
        duration: action.duration,
      }
    default:
      return state;
  };
}

export default PlayerReducer;
