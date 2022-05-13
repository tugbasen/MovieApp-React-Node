import React from "react";
import { Card } from "react-bootstrap";

const CastCard = ({ image, casts }) => {
  return (
    <Card className="w-25 card shadow mb-5 bg-body rounded castCard">
      <Card.Img src={`https://image.tmdb.org/t/p/w200/${image}`} />
      <Card.Body style={{ height: "15vh" }}>
        <Card.Title>{casts.name}</Card.Title>
        <Card.Text style={{ fontSize: 14 }}>{casts.character}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CastCard;
