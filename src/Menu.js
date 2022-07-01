/* eslint-disable no-unused-vars */
import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "./components/myModal.js";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      <div className="row">
        {items.map((menuItem) => {
          const {
            id,
            title,
            description,
            price,
            discountPercentage,
            rating,
            stock,
            brand,
            thumbnail,
          } = menuItem;

          return (
            <>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <article className="menu-item" key={id}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={thumbnail} />
                    <Card.Body>
                      <Card.Title>{title}</Card.Title>
                      <Card.Text>{description}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>{brand}</ListGroup.Item>
                      <ListGroup.Item>Rating: {rating}</ListGroup.Item>
                      <ListGroup.Item>Stock: {stock}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body className="d-flex justify-content-between">
                      <Card.Link href="#">{discountPercentage}</Card.Link>
                      <Card.Title>{price} $</Card.Title>
                    </Card.Body>
                    <Modal items={items} />
                  </Card>
                </article>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
