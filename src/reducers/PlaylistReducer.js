export const INCREASE_PAGE = 'INCREASE_PAGE'

// This is our initial state
const initialState = {
  page: 1,
}

const PlaylistReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_PAGE:
      return {
        ...state,
        page: state.page + 1,
      }
    default:
      return state
  }
}

export default PlaylistReducer
