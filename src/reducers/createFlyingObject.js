import {
  INTERVAL,
  MAX_OBJECTS,
  STARTER_POSITIONS,
  STARTER_Y_AXIS,
} from '../utils/constants'

export default (state) => {
  if (!state.gameState.started) return state //Game not started

  const now = (new Date()).getTime()
  const { lastObjectCreatedAt, flyingObjects } = state.gameState

  // Check if its time to create new flying object
  const createNewObject = (
    now - (lastObjectCreatedAt).getTime() > INTERVAL &&
    flyingObjects.length < MAX_OBJECTS
  )
  if (!createNewObject) return state // No need to create new object

  const id = (new Date()).getTime()
  const predefinedPosition = Math.floor(Math.random() * MAX_OBJECTS)
  const objectPosition = STARTER_POSITIONS[predefinedPosition]
  const newFlyingObject = {
    position: {
      x: objectPosition,
      y: STARTER_Y_AXIS,
    },
    createdAt: (new Date()).getTime(),
    id,
  }

  return {
    ...state,
    gameState: {
      ...state.gameState,
      flyingObjects: [
        ...state.gameState.flyingObjects,
        newFlyingObject,
      ],
      lastObjectCreatedAt: new Date(),
    },
  }
}
