import React from "react";
import "./GameOverNotification.css";

const closeHandler = () => {
  window.location.reload();
};

const message = (score) => {
  if (score < 40) {
    return "Are you drunk?";
  } else if (score < 80) {
    return "Oh, come on. Try at least";
  } else if (score < 150) {
    return "Pretty Ok, getting there!";
  } else if (score < 200) {
    return "One word... WOW!!!";
  } else {
    return "Ok, got it. You have hacked my code.";
  }
};

const gameOverNotification = (props) => {
  return (
    <div className="overlay">
      <div className="gameover_box">
        <h2>Game over</h2>
        <p>Your score was: {props.score}</p>
        <p>{message(props.score)}</p>
        <button onClick={closeHandler}>X</button>
      </div>
    </div>
  );
};

export default gameOverNotification;
//{if (score !== 0) {console.log("ok")}}
