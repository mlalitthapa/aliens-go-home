import React from 'react'
import PropTypes from 'prop-types'

import Sky from './Sky'
import Ground from './Ground'
import Cannon from './cannon/Cannon'
import Score from './Score'

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
      <Sky/>
      <Ground/>
      <Cannon rotation={props.angle}/>
      <Score score={40}/>
    </svg>
  )
}

Canvas.propTypes = {
  angle: PropTypes.number.isRequired,
  trackMouse: PropTypes.func.isRequired,
}

export default Canvas