import React from "react";

const BoxCard = (props) => {
  return (
    <div className="box">
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Title: {props.title}</p>
      <button onClick={handleClick}>Like</button>
    </div>
  );
};

const handleClick = () => {
  console.log("thank´s for liking");
};

export default BoxCard;
