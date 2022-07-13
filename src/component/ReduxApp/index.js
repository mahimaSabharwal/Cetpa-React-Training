import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { storeProducts } from "../../redux/actions/productActions";

const ReduxApp = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      dispatch(storeProducts(response.data));
    });
  }, []);

  return (
    <Row>
      {products.allProducts.products.length &&
        products.allProducts.products.map((item, index) => {
          return (
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
    </Row>
  );
};

export default ReduxApp;
