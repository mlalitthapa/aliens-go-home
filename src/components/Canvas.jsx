import React from 'react'
import PropTypes from 'prop-types'

import Sky from './Sky'
import Ground from './Ground'
import Cannon from './cannon/Cannon'
import Score from './Score'
import UFO from './ufo/UFO'
import Life from './Life'
import StartGame from './StartGame'

const Canvas = (props) => {
  const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight]
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
      <UFO position={{ x: -150, y: -300 }} />
      <UFO position={{ x: 150, y: -300 }} />
      <Life position={{ x: -300, y: 35 }} />
      <StartGame onClick={() => console.log('Start Game')} />
    </svg>
  )
}

Canvas.propTypes = {
  angle: PropTypes.number.isRequired,
  trackMouse: PropTypes.func.isRequired,
}

export default Canvas