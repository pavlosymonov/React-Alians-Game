import React from "react";
import { skyAndGroundWidth } from "../utils/constants";
import mapSvg from "./img/background.svg";

const Sky = () => {
  const skyWidth = skyAndGroundWidth;
  const gameHeight = 1200;

  return (
    <g id="SKY">
      <image
        x={skyWidth / -2}
        y={100 - gameHeight}
        width={skyWidth}
        height={gameHeight}
        href={mapSvg}
      />
    </g>
  );
};

export default Sky;
