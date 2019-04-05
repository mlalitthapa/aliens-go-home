import React from 'react'
import PropTypes from 'prop-types'

import CannonPipe from './CannonPipe'
import CannonBase from './CannonBase'
import CannonBall from './CannonBall'

const Cannon = (props) => {
  return (
    <g id='cannon'>
      <CannonPipe rotation={props.rotation}/>
      <CannonBase/>
      <CannonBall position={{x: 0, y: -100}}/>
    </g>
  )
}

Cannon.propTypes = {
  rotation: PropTypes.number.isRequired
}

export default Cannon