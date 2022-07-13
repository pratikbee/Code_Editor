import React from "react"
import { Form, FormGroup, Col, Button } from 'react-bootstrap';


const Editor=()=>{
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
                        <CodeEditor
                        onChange={handleCodeChange}
                        code={state.task.code}>

                        </CodeEditor>
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
                        message={state.reponse.message}>

                        </AlertDismissable>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col sm={12}>
                        <OutputBox
                        show={state.response.status==="0"}
                        message={state.response.message}>

                        </OutputBox>
                    </Col>
                </FormGroup>
            </Form>
        </div>



    )
    }


export default Editor;