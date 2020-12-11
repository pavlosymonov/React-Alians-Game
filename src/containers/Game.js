import { connect } from 'react-redux';

import App from '../App';
import {moveObjectsAction, shootAction, startGameAction} from '../reducers';

const mapStateToProps = state => ({
  angle: state.angle,
  gameState: state.gameState,
});

const mapDispatchToProps = {
  moveObjects: moveObjectsAction,
  startGame: startGameAction,
  shoot: shootAction
};

const Game = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default Game;