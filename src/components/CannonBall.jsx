import React from "react";
import PropTypes from "prop-types";
import ballSvg from "./img/ball.svg";

const CannonBall = (props) => {
  const {
    position: { x, y },
  } = props;
  const ballStyle = {
    width: "50px",
    height: "50px",
  };

  return (
    <g id="SKY">
      <image style={ballStyle} x={x} y={y} rx="16" ry="16" href={ballSvg} />
    </g>
  );
};

CannonBall.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
};

export default CannonBall;
