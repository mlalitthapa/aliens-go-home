import React from 'react'
import { SKY_AND_GROUND_WIDTH } from '../utils/constants'

const Ground = () => {
  const style = {
    fill: '#59a941',
  }
  const division = {
    stroke: '#458232',
    strokeWidth: '3px',
  }

  const width = SKY_AND_GROUND_WIDTH

  return (
    <g id='ground'>
      <rect
        id='ground-2'
        data-name='Ground'
        style={style}
        x={width / -2}
        y={0}
        width={width}
        height={100}
      />
      <line
        x1={width / -2}
        y1={0}
        x2={width / 2}
        y2={0}
        style={division}
      />
    </g>
  )
}

export default Ground