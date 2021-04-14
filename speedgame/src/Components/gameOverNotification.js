import React from "react";
import "./gameOverNotification.css";

const closeHandler = () => {
  window.location.reload();
};

const gameOverNotification = (props) => {
  return (
    <div className="overlay">
      <div className="gameover_box">
        <h2>Game over</h2>
        <p>Your score was: {props.score}</p>
        <button>X</button>
      </div>
    </div>
  );
};

export default gameOverNotification;
