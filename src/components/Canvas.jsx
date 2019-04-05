import React from 'react'

import Sky from './Sky'
import Ground from './Ground'
import Cannon from './cannon/Cannon'

const Canvas = () => {
  const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight]
  return (
    <svg
      id='aliens-go-home'
      preserveAspectRatio='xMaxYMax none'
      viewBox={viewBox}
    >
      <Sky/>
      <Ground/>
      <Cannon/>
    </svg>
  )
}

export default Canvas