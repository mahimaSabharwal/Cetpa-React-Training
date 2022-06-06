import React, { useContext } from "react";
import Income from "./Income";
import Expense from "./Expense";
import { Row, Col } from "react-bootstrap";
import { DataContext } from "./DataContext";

const ExpenseTracker = () => {
  const localAppData = useContext(DataContext);
  return (
    <>
      <Row>
        <Col>
          {localAppData}
          <h2>Expense Tracker</h2>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <Income />
        </Col>
        <Col sm={6}>
          <Expense />
        </Col>
      </Row>
    </>
  );
};

export default ExpenseTracker;
