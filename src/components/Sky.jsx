import React from "react";
import { skyAndGroundWidth } from "../utils/constants";
import mapJpg from "./img/space.jpg";

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
        href={mapJpg}
      />
    </g>
  );
};

export default Sky;
