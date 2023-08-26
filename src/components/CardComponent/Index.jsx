import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


export default function CardComponent({ href, text, title }) {
  return (
    <>
      <Card  className="flex-row space-x-10 w-3/5 h-50 mx-auto my-20 p-4 shadow-lg gap-5">
        <Card.Header className="flex flex-col w-2/5 p-3">
          <Card.Title className="text-2xl text-center text">{title}</Card.Title>

          <Card.Text className="text-lg m-3">{text}</Card.Text>
          <Button className="rounded-full bg-blue-700	 " >View More</Button>
        </Card.Header>

        <Card.Img className="object-cover w-1/2 "  src={href} />
      </Card>
    </>
  );
}
