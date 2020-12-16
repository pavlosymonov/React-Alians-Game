import React from "react";
import baseCannon from "./img/baseCannon.svg";

function CannonBase() {
  let cannonBaseStyle = {
    transform: "translateX(-50px)",
  };
  return (
    <g id="base">
      <image
        style={cannonBaseStyle}
        href={baseCannon}
      />
    </g>
  );
}

export default CannonBase;
