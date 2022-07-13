import React from "react";
import "./App.scss";

import { Form, FormGroup, Col } from "react-bootstrap";
import AlertDismissable from "./AlertDismissable";

const App = () => {
  return (
    <Form>
    <FormGroup>
      <Col sm={12}>
        <AlertDismissable
          show={true}
          message="haha"
        ></AlertDismissable>
      </Col>
    </FormGroup>
    </Form>
  );
};

export default App;
