import React from "react";
import PropTypes from "prop-types";
import cannon from "./img/cannon.svg";

const CannonPipe = (props) => {
  const { rotation } = props;
  let cannonPipeStyle = {
    fill: "#999",
    stroke: "#666",
    strokeWidth: "2px",
    height: "80px",
    width: "auto",
  };
  const transform = `rotate(${rotation + 80}, 0, 0)`;
  let xCord = -100;
  let yCord = -60;

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
