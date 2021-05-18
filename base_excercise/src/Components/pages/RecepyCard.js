import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Card from "react-bootstrap/Card";

const RecepyCard = ({ id, link, name, recipeCategory, niceToKnow }) => {
  let match = useRouteMatch();

  return (
    <Card style={{ width: "20rem" }}>
      <Card.Body className="recepyCard">
        <>{id}</>
        <Card.Title className="card-title">{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {recipeCategory}
        </Card.Subtitle>
        <Card.Text>{niceToKnow}</Card.Text>
        <div className="linkText">
          <Link to={`${match.path}/${link}`}>Lue resepti</Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default RecepyCard;
