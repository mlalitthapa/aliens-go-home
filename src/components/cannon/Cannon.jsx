import React from 'react'
import CannonPipe from './CannonPipe'
import CannonBase from './CannonBase'

const Cannon = () => {
  return (
    <g id='cannon'>
      <CannonPipe rotation={45}/>
      <CannonBase/>
    </g>
  )
}

export default Cannon