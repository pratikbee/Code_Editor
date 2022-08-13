import React,{useState} from "react";
import "./App.scss";


import { Form, FormGroup, Col, Button } from "react-bootstrap";
import CompilerApi from "./api/CompilerApi.js";
import LangSelector from "./LangSelector.js";
import Acing from "./Acing";
import StatusImage from "./StatusImage";
import AlertDismissable from "./AlertDismissable";
import Output from "./Output";
import Editor from "./Editor";







const App = () => {

  return (
  
      <Editor/>
    
  );
};

export default App;
