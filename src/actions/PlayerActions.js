import { PLAY_TRACK, UPDATE_PROGRESS, SET_DURATION, TOGGLE_PLAY }  from 'reducers/PlayerReducer'

export const playTrack = (data) => {
  return {
    type: PLAY_TRACK,
    url: data,
  }
}

export const handleProgress = (data) => {
  return {
    type: UPDATE_PROGRESS,
    progress: data,
  }
}

export const handleDuration = (data) => {
  return {
    type: SET_DURATION,
    progress: data,
  }
}

export const togglePlay = () => ({
  type: TOGGLE_PLAY,
})
