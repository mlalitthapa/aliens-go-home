export const bezierCurvePath = curvePoints => {
  const {
    initialAxis, initialControlPoint, endingControlPoint, endingAxis,
  } = curvePoints
  return `
    M${initialAxis.x} ${initialAxis.y}
    c ${initialControlPoint.x} ${initialControlPoint.y}
    ${endingControlPoint.x} ${endingControlPoint.y}
    ${endingAxis.x} ${endingAxis.y}
  `
}