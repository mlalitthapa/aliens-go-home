import React from 'react'
import PropTypes from 'prop-types'

const CannonBall = (props) => {
  const style = {
    fill: '#777',
    stroke: '#444',
    strokeWidth: '2px',
  }
  return (
    <ellipse
      style={style}
      cx={props.position.x}
      cy={props.position.y}
      rx={16}
      ry={16}
    />
  )
}

CannonBall.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
}

export default CannonBall