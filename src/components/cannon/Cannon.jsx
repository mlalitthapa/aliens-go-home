import React from 'react'
import PropTypes from 'prop-types'

import CannonPipe from './CannonPipe'
import CannonBase from './CannonBase'

const Cannon = (props) => {
  return (
    <g id='cannon'>
      <CannonPipe rotation={props.rotation}/>
      <CannonBase/>
    </g>
  )
}

Cannon.propTypes = {
  rotation: PropTypes.number.isRequired
}

export default Cannon