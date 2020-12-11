import startGame from "./startGame";
import moveObjects from "./moveObjects";
import shoot from "./shoot";

export const MOVE_OBJECTS = 'MOVE_OBJECTS';
export const START_GAME = 'START_GAME';
export const SHOOT = 'SHOOT';

const initialGameState = {
  started: false,
  kills: 0,
  lives: 3,
  flyingObjects: [],
  lastObjectCreatedAt: new Date(),
  cannonBalls: [],
}

const initialState = {
  angle: 45,
  gameState: initialGameState,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case MOVE_OBJECTS:
      return moveObjects(state, action);
    case START_GAME:
      return startGame(state, initialGameState);
    case SHOOT:
      return shoot(state, action);
    default:
      return state;
  }
}

export const startGameAction = () => ({type: START_GAME});

export const moveObjectsAction = mousePosition => ({type: MOVE_OBJECTS, mousePosition});

export const shootAction = (mousePosition) => ({type: SHOOT, mousePosition});

export default reducer;