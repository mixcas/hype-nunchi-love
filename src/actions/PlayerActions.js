import * as findIndex from 'lodash/findIndex'

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

export const togglePlay = () => (dispatch, getState) => {
  const state = getState()
  const currentTrackUrl = state.player.url

  if(currentTrackUrl) {
    dispatch({
      type: TOGGLE_PLAY,
    })
  } else {

    const tracks = state.firebase.ordered.currentPlaylist
    const nextTrack = tracks[0]

    dispatch({
      type: PLAY_TRACK,
      url: nextTrack.value.link,
    })
  }
}

export const handleOnEnded = () => (dispatch, getState) => {
  dispatch(playAnotherTrack(1))
}

export const playAnotherTrack = (offset) => (dispatch, getState) => {
  const state = getState()
  const tracks = state.firebase.ordered.currentPlaylist
  const currentTrackUrl = state.player.url

  const currentTrackIndex = findIndex(tracks, { value: { link: currentTrackUrl } })
  const nextTrack = tracks[currentTrackIndex + offset]

  dispatch({
    type: PLAY_TRACK,
    url: nextTrack.value.link,
  })
}
