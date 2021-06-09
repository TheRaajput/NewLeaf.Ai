import React from "react";
import { Col } from "react-bootstrap";

const ResContainer = (props) => {
  return (
    <Col className="boxes ml-2">
      <h4 className="text-center">{props.title}</h4>
      <p className="p-1">{props.details}</p>
    </Col>
  );
};

export default ResContainer;
