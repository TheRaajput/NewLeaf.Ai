import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const FeedbackForm = () => {
  const [name, setname] = useState("");
  const [FeedText, setFeedText] = useState("");
  const [rate, setrate] = useState("");
  const nameHandler = (events) => {
    setname(events.target.value);
  };
  const feedHandler = (events) => {
    setFeedText(events.target.value);
  };
  const rateHandler = (events) => {
    setrate(events.target.value);
  };
  const submitHandler = (ev) => {
    ev.preventDefault();
    let data = {
        "Name": name,
        "Feedback": FeedText,
        "Rate": rate
    }
    console.log(data)
  };
  return (
    <Form autoComplete="none" onSubmit={submitHandler}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          value={name}
          required
          onChange={nameHandler}
          autoComplete="none"
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Feedback</Form.Label>
        <Form.Control
          as="textarea"
          rows={2}
          value={FeedText}
          onChange={feedHandler}
          autoComplete="none"
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Rate 1-5</Form.Label>
        <Form.Control
          type="number"
          placeholder="1"
          min={1}
          max={5}
          required
          value={rate}
          onChange={rateHandler}
          autoComplete="none"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FeedbackForm;
