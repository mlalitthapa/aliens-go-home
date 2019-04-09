import React from 'react'
import PropTypes from 'prop-types'
import UFOTop from './UFOTop'
import UFOBase from './UFOBase'

const UFO = props => (
  <g>
    <UFOTop position={props.position}/>
    <UFOBase position={props.position}/>
  </g>
)

UFO.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
}

export default UFO