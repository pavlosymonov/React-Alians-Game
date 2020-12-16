import React from "react";
import PropTypes from "prop-types";
import cannon from "./img/cannon.svg";

const CannonPipe = (props) => {
  const { rotation } = props;
  let cannonPipeStyle = {
    fill: "#999",
    stroke: "#666",
    strokeWidth: "2px",
    height: "100px",
    width: "auto",
  };
  const transform = `rotate(${rotation + 80}, 0, 0)`;
  let xCord = -210;
  let yCord = -130;

  if (rotation < -60) {
    xCord = -210 - rotation;
    yCord = -125 - rotation / 2;
  } else if (rotation < 1) {
    xCord = -200 - rotation;
    yCord = -120 - rotation / 2;
  } else if (rotation >= 1) {
    xCord = -210 - rotation;
    yCord = -130 + rotation / 2;
  }

  return (
    <g id="base">
      <image
        transform={transform}
        x={xCord}
        y={yCord}
        style={cannonPipeStyle}
        href={cannon}
      />
    </g>
  );
};

CannonPipe.propTypes = {
  rotation: PropTypes.number.isRequired,
};

export default CannonPipe;
