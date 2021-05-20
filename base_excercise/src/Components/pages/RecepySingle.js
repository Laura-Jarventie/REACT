import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";

import axios from "axios";

const RecepySingle = () => {
  const [recepy, setRecepy] = useState();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (!recepy) {
      axios
        .get("https://limitless-citadel-22858.herokuapp.com/recipes/find/" + id)
        .then((res) => setRecepy(res.data));
    }
  });

  let recepyData = undefined;

  if (!recepy) {
    recepyData = <h1>Ladataan....</h1>;
  }

  if (recepy) {
    recepyData = (
      <Card style={{ width: "25rem", height: "100vh" }} className="singleCard">
        <Card.Body>
          <>
            <div key={recepy.id}></div>
            <Card.Title className="card-title">{recepy.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {recepy.recipeCategory}
            </Card.Subtitle>
            <Card.Text>{recepy.niceToKnow}</Card.Text>
            <p>
              {recepy.recipeIngredient.map((item, i) => {
                return <li key={i}>{item.recipeIngredient}</li>;
              })}
            </p>
            <h4>Valmistus:</h4>
            <p>{recepy.recipeInstructions}</p>
            <button onClick={() => history.goBack()}>
              Takasin resepteihin
            </button>
          </>
        </Card.Body>
      </Card>
    );
  }
  return <>{recepyData}</>;
};

export default RecepySingle;
