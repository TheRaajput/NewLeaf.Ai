import React from "react";
import { Col } from "react-bootstrap";

const ResContainer = (props) => {
  return (
    <Col className="boxes ml-2">
      <h4 className="text-center">{props.title}</h4>
    </Col>
  );
};

export default ResContainer;
