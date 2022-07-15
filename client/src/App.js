import React from "react";
import "./App.scss";

import { Form, FormGroup, Col } from "react-bootstrap";

import Output from "./Output";
import StatusImage from "./StatusImage";

const App = () => {
  return (
    <Form>
    <FormGroup>
      <Col sm={12}>
        <StatusImage message="hah"></StatusImage>
      </Col>
    </FormGroup>
    </Form>
  );
};

export default App;
