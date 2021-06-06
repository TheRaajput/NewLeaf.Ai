import React from "react";
import { Modal, Button, Image } from "react-bootstrap";

function modal(props) {
  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={props.url} roundedCircle />
          {props.body}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default modal;
