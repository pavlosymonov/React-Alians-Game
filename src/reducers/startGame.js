export default function(state, initialGameState) {
  return {
    ...state,
    gameState: {
      ...initialGameState,
      started: true,
    }
  }
};