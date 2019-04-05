import React from 'react'
import { SKY_AND_GROUND_WIDTH } from '../utils/constants'

const Sky = () => {
  const style = {
    fill: '#30abef',
  }
  const width = SKY_AND_GROUND_WIDTH
  const height = 1200
  return (
    <rect
      style={style}
      x={width / -2}
      y={100 - height}
      width={width}
      height={height}
    />
  )
}

export default Sky