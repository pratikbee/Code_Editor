import React,{useState} from "react"
import { Form, FormGroup, Col, Button } from 'react-bootstrap';
import CompilerApi from './api/CompilerApi.js'
import LangSelector from './LangSelector.js';
import Acing from './Acing'
import StatusImage from './StatusImage';
import AlertDismissable from './AlertDismissable';
import Output from './Output';
let languages = ['JavaScript', 'Python', 'Java', 'C', 'C++'];


const Editor=()=>{
     const languages = [".py", ".cpp", ".c", ".js"];
     const [state, setState] = useState({
       selectedLang: 0, // JavaScript
       task: {
         lang: ".py",
         code: "",
       },
       response: {
         status: "0",
         message: "",
       },
     });

    function handleRun(event) {
        if (state.selectedLang === "none") { 
            alert("Please select one language")
            return
      }
      console.log(`${process.env.API_URL}`)
       event.preventDefault();
       const { task } = state;
       fetch(`${process.env.API_URL}/code`, {
         method: "POST",

         body: JSON.stringify({
           lang: state.selectedLang,
           code: state.task.code,
         }),

         headers: {
           "Content-type": "application/json; charset=UTF-8",
         },
       })
         .then((response) => { console.log(response); return (response.json()) })

         .then((res) => {
           const { response } = state;
             response.message = res.message;
             response.status = res.status;
             return setState({
               selectedLang: state.selectedLang,
               task: {
                 lang: state.selectedLang,
                 code: state.task.code,
               },
               response: response,
             });
         });
     }
     function handleLangChange(Event) {
         setState({ ...state, selectedLang: Event.target.value });
        
       
     }
    return(
        <div className="container" style={{maxWidth:"80%"}}>
            <Form horizontal="true">
                <FormGroup controlId="code">
                    <Col sm={12}>
                        <LangSelector
                        langs={languages}
                        selectedIndex={state}
                        onChange={handleLangChange}>

                        </LangSelector>

                    </Col>

                </FormGroup>
                <FormGroup controlId="code">
                    <Col sm={12}>
                        <Acing
                        settingState={setState}
                        newstate={state}>

                        </Acing>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col sm={2}>
                        <Button bsstyle="primary" type="button" onClick={handleRun}>
                            Run
                        </Button>
                        <StatusImage
                        hasError={state.response.status!=="0"}
                        message={state.response.message}>

                        </StatusImage>
                        
                    </Col>
                    <Col sm={10}></Col>
                </FormGroup>
                <FormGroup>
                    <Col sm={12}>
                        <AlertDismissable
                        newstate={state}
                        setnewState={setState}>

                        </AlertDismissable>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col sm={12}>
                        <Output
                        show={state.response.status==="0"}
                        message={state.response.message}>

                        </Output>
                    </Col>
                </FormGroup>
            </Form>
        </div>



    )
    }


export default Editor;