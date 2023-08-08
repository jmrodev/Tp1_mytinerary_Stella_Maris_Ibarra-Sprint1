import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CardComponent({ href, text, title }) {
  return (
    <> <Card className="flex flex-wrap w-78">
    <Card.Img variant="top" src={href} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {text}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
    </>
  );
}
