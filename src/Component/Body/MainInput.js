import React from "react";
import { Image, Button, Row, Container, Form } from "react-bootstrap";
import "./MainInput.css";

const MainInput = (props) => {
  const fileHandler = (events) => {
    props.onSetImage(events.target.files[0]);
  };

  return (
    <div className="background">
      <Form onSubmit={props.submitHandler}>
        <Container>
          <Row>
            <Image src={props.Image} className="inputImg mx-auto mt-5"></Image>
          </Row>
          <Row>
            <input
              type="file"
              className="btn-dark mx-auto mt-5"
              onChange={fileHandler}
            />
          </Row>
          <Row>
            <Button type="submit" className="btn-danger mx-auto mt-5">Submit</Button>
          </Row>
        </Container>
      </Form>
    </div>
  );
};

export default MainInput;
