import React from "react";
import PropTypes from "prop-types";

function CurrentScore(props) {
  const { score } = props;
  const scoreStyle = {
    fontFamily: '"Joti One", cursive',
    fontSize: 80,
    fill: "#d6d33e",
    userSelect: "none",
  };

  return (
    <g>
      <text style={scoreStyle} x="300" y="80">
        {score}
      </text>
    </g>
  );
}

CurrentScore.propTypes = {
  score: PropTypes.number,
};

export default React.memo(CurrentScore);
