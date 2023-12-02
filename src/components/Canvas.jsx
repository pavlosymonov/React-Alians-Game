import React from 'react';
import PropTypes from 'prop-types';
import Sky from './Sky';
import CannonBase from './CannonBase';
import CannonPipe from './CannonPipe';
import CurrentScore from './CurrentScore'
import FlyingObject from './FlyingObject';
import StartGame from './StartGame';
import Title from './Title';
import CannonBall from "./CannonBall";
import Heart from "./Heart";
import './img/aim.svg';
import './index.css';

const Canvas = (props) => {
  const {gameState: {
    lives: livesProps,
    cannonBalls,
    started,
    flyingObjects,
    kills
  },
  trackMouse, shoot, angle, startGame} = props;
  const gameHeight = 1200;
  const viewBox = [window.innerWidth / -2, 100 - gameHeight, window.innerWidth, gameHeight];
  const lives = [];

  for (let i = 0; i < livesProps; i++) {
    const heartPosition = {
      x: -180 - (i * 70),
      y: 35
    };
    lives.push(<Heart key={i} position={heartPosition}/>);
  }

  return (
    <svg
      id="aliens-go-home-canvas"
      preserveAspectRatio="xMaxYMax none"
      onMouseMove={trackMouse}
      viewBox={viewBox}
      onClick={shoot}
      className={started ? 'cursorAim' : null}
    >
      <defs>
        <filter id="shadow">
          <feDropShadow dx="1" dy="1" stdDeviation="2" />
        </filter>
      </defs>
      <Sky />

      {cannonBalls.map(cannonBall => (
        <CannonBall
          key={cannonBall.id}
          position={cannonBall.position}
        />
      ))}

      <CannonBase />
      <CannonPipe rotation={angle} />
      <CurrentScore score={kills} />

      { ! started &&
      <g>
        <StartGame onClick={() => startGame()} />
        <Title />
      </g>
      }

      {flyingObjects.map(flyingObject => (
        <FlyingObject
          key={flyingObject.id}
          position={flyingObject.position}
        />
      ))}
      {lives}
    </svg>
  );
};

Canvas.propTypes = {
  angle: PropTypes.number.isRequired,
  gameState: PropTypes.shape({
    cannonBalls: PropTypes.array,
    started: PropTypes.bool.isRequired,
    kills: PropTypes.number,
    lives: PropTypes.number.isRequired,
    flyingObjects: PropTypes.arrayOf(PropTypes.shape({
      position: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
      }).isRequired,
      id: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
  trackMouse: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
  shoot: PropTypes.func.isRequired,
};

export default Canvas;