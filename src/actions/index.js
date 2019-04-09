export const MOVE_OBJECTS = 'MOVE_OBJECTS'

export const moveObjects = mousePosition => {
  return {
    type: MOVE_OBJECTS,
    mousePosition,
  }
}

// Start the game
export const START_GAME = 'START_GAME'

export const startGame = () => ({
  type: START_GAME,
})