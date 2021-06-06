import React from "react";
import { Modal } from "react-bootstrap";
import FeedbackForm from "./FeedbackForm";

const FeedBackModal = (props) => {
  return (
    <div>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FeedbackForm />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default FeedBackModal;
