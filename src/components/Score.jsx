import React from 'react'
import PropTypes from 'prop-types'

const Score = props => {
  const style = {
    fontFamily: '"Joti One", cursive',
    fontSize: 80,
    fill: '#d6d33e',
  }

  return (
    <g filter="url(#shadow)">
      <text style={style} x={300} y={80}>
        {props.score}
      </text>
    </g>
  )
}

Score.propTypes = {
  score: PropTypes.number.isRequired,
}

export default Score