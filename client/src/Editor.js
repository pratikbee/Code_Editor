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
    const [state,setState] = useState({
        selectedLang: 0, // JavaScript
        task: {
          lang: 'javascript',
          code: '',
        },
        response: {
          status: '0',
          message: '',
        },
      })
      console.log(state)
      function handleCodeChange(code) {
        const { task } = state;
        task.code = code;
        console.log(code);
        return setState({ task });
      }
    
      function handleRun(event) {
        event.preventDefault();
        const { task } = state;
        ;
        CompilerApi.run(task)
          .then((res) => {
            setState({ response: res });
          })
          .catch((error) => {
            console.log(error);
            
          });
      }
    return(
        <div className="container">
            <Form horizontal>
                <FormGroup controlId="code">
                    <Col sm={12}>
                        <LangSelector
                        langs={languages}
                        selectedIndex={state.selectedLang}
                        onChange={handleLangChange}>

                        </LangSelector>

                    </Col>

                </FormGroup>
                <FormGroup controlId="code">
                    <Col sm={12}>
                        <Acing
                        setState={setState}
                        state={state}>

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
                        show={state.response.status!=="0"}
                        message={state.response.message}>

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