import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import UFOTop from './UFOTop'
import UFOBase from './UFOBase'
import { GAME_HEIGHT } from '../../utils/constants'

const moveVertically = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(${GAME_HEIGHT}px);
  }
`

const Move = styled.g`
  animation: ${moveVertically} 4s linear;
`

const UFO = props => (
  <Move>
    <UFOTop position={props.position}/>
    <UFOBase position={props.position}/>
  </Move>
)

UFO.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
}

export default UFO