import { PLAY_TRACK }  from 'reducers/PlayerReducer'

export const playTrack = (data) => {
  return {
    type: PLAY_TRACK,
    data,
  }
}
