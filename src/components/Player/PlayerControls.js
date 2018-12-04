import React from 'react'
import injectSheet from 'react-jss'
import { MdPlayArrow, MdPause, MdSkipNext, MdSkipPrevious } from 'react-icons/md'
import PlayerProgress from 'components/Player/PlayerProgress'
import PlayerButton from 'components/Player/PlayerButton'

const PlayerControls = ({className, player, togglePlay, playAnotherTrack}) => {
  const { playing, progress, duration } = player

  return (
    <div className={`${className}`}>
      <div className='container'>
        <div className='grid-row flex'>
          <div className={`grid-item item-s-1 u-flex-center`}>
            <PlayerButton onClick={() => playAnotherTrack(-1)}>
              <MdSkipPrevious/>
            </PlayerButton>
          </div>
          <div className={`grid-item item-s-1 u-flex-center`}>
            { playing ?
            <PlayerButton onClick={togglePlay}>
              <MdPause/>
            </PlayerButton>
            : <PlayerButton onClick={togglePlay}>
              <MdPlayArrow/>
            </PlayerButton>
            }
          </div>
          <div className={`grid-item item-s-1 u-flex-center`}>
            <PlayerButton onClick={() => playAnotherTrack(1)}>
              <MdSkipNext/>
            </PlayerButton>
          </div>
          <div className={`grid-item item-s-18 u-flex-center`}>
            <PlayerProgress progress={progress} duration={duration} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default PlayerControls
