import React from 'react'
import PropTypes from 'prop-types'

import Sky from './Sky'
import Ground from './Ground'
import Cannon from './cannon/Cannon'
import Score from './Score'
import UFO from './ufo/UFO'
import StartGame from './StartGame'
import Title from './Title'
import Life from './Life'

const Canvas = (props) => {
  const gameHeight = 1200
  const viewBox = [window.innerWidth / -2, 100 - gameHeight, window.innerWidth, gameHeight]
  return (
    <svg
      id='aliens-go-home'
      preserveAspectRatio='xMaxYMax none'
      onMouseMove={props.trackMouse}
      viewBox={viewBox}
    >
      <defs>
        <filter id="shadow">
          <feDropShadow dx="1" dy="1" stdDeviation="2" />
        </filter>
      </defs>
      <Sky />
      <Ground />
      <Cannon rotation={props.angle} />
      <Score score={40} />
      <Life position={{ x: -300, y: 35 }} />

      {
        !props.gameState.started &&
        <g>
          <StartGame onClick={props.startGame} />
          <Title />
        </g>
      }

      {props.gameState.flyingObjects.map(flyingObject => (
        <UFO
          key={flyingObject.id}
          position={flyingObject.position}
        />
      ))}
    </svg>
  )
}

Canvas.propTypes = {
  angle: PropTypes.number.isRequired,
  trackMouse: PropTypes.func.isRequired,
  gameState: PropTypes.shape({
    started: PropTypes.bool.isRequired,
    kills: PropTypes.number.isRequired,
    lives: PropTypes.number.isRequired,
    flyingObjects: PropTypes.arrayOf(PropTypes.shape({
      position: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
      }).isRequired,
      id: PropTypes.number.isRequired,
    })).isRequired,
  }),
  startGame: PropTypes.func.isRequired,
}

export default Canvas