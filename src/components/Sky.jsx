import React from 'react'

const Sky = () => {
  const style = {
    fill: '#30abef',
  }
  const width = 5000
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