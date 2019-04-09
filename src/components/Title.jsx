import React from 'react'
import { bezierCurvePath } from '../utils/formulas'

const Title = props => {
  const style = {
    fontFamily: '"Joti One", cursive',
    fontSize: 120,
    fill: '#cbca62',
  }

  const aliensLineCurve = {
    initialAxis: {
      x: -190,
      y: -950,
    },
    initialControlPoint: {
      x: 95,
      y: -50,
    },
    endingControlPoint: {
      x: 285,
      y: -50,
    },
    endingAxis: {
      x: 380,
      y: 0,
    },
  }

  const goHomeLineCurve = {
    ...aliensLineCurve,
    initialAxis: {
      x: -250,
      y: -780,
    },
    initialControlPoint: {
      x: 125,
      y: -90,
    },
    endingControlPoint: {
      x: 375,
      y: -90,
    },
    endingAxis: {
      x: 500,
      y: 0,
    },
  }

  return (
    <g filter="url(#shadow)">
      <defs>
        <path
          id="aliensPath"
          d={bezierCurvePath(aliensLineCurve)}
        />
        <path
          id="goHomePath"
          d={bezierCurvePath(goHomeLineCurve)}
        />
      </defs>
      <text {...style}>
        <textPath xlinkHref="#aliensPath">
          Aliens,
        </textPath>
      </text>
      <text {...style}>
        <textPath xlinkHref="#goHomePath">
          Go Home!
        </textPath>
      </text>
    </g>
  )
}

export default Title