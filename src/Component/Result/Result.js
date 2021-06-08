import React from "react";
import { Container, Row } from "react-bootstrap";
import ResContainer from "./ResContainer";
import "./Result.css";
const Result = (props) => {
  return (
    <div id="result" className="resbackground">
    <h2 className="text-center">Results:</h2>
      <Container>
        <Row className="py-2">
          <ResContainer title="Result" />
          <ResContainer title="Plant Details" />
        </Row>
        <Row className="py-2">
          <ResContainer title="Disease Details"/>
          <ResContainer title="Treatment"/>
        </Row>
      </Container>
    </div>
  );
};

export default Result;
